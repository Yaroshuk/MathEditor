var E = /* @__PURE__ */ ((e) => (e.Text = "text", e.Link = "link", e.UserSticker = "user_sticker", e.Mention = "mention", e.Command = "command", e.HashTag = "hashtag", e.Markdown = "markdown", e.Newline = "newline", e.Formula = "formula", e))(E || {}), Ti = /* @__PURE__ */ ((e) => (e.Create = "create", e.Update = "update", e))(Ti || {}), L = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Bold = 1] = "Bold", e[e.Italic = 2] = "Italic", e[e.Underline = 4] = "Underline", e[e.Strike = 8] = "Strike", e[e.Monospace = 16] = "Monospace", e[e.Heading = 32] = "Heading", e[e.Marked = 64] = "Marked", e[e.Highlight = 128] = "Highlight", e[e.LinkLabel = 256] = "LinkLabel", e[e.Link = 512] = "Link", e))(L || {});
const Fe = (...e) => Object.assign({}, ...e), B = {
  // Formatting
  /** * */
  Asterisk: 42,
  /** _ */
  Underscore: 95,
  /** ` */
  BackTick: 96,
  /** ~ */
  Tilde: 126,
  // Punctuation
  /** ! */
  Exclamation: 33,
  /** "" */
  DoubleQuote: 34,
  /** ' */
  SingleQuote: 39,
  /** , */
  Comma: 44,
  /** . */
  Dot: 46,
  /** : */
  Colon: 58,
  /** ; */
  SemiColon: 59,
  /** ? */
  Question: 63,
  /** ( */
  RoundBracketOpen: 40,
  /** ) */
  RoundBracketClose: 41,
  /** [ */
  SquareBracketOpen: 91,
  /** ] */
  SquareBracketClose: 93,
  /** { */
  CurlyBracketOpen: 123,
  /** } */
  CurlyBracketClose: 125,
  /** - */
  Hyphen: 45,
  /** &ndash; */
  EnDash: 8211,
  /** &mdash; */
  EmDash: 8212,
  // Whitespace
  Tab: 9,
  // \t
  Space: 32,
  // &nbsp;
  // New line
  /** `\n` */
  NewLine: 10,
  // \n
  /** `\r` */
  Return: 13,
  /** `\f` */
  LineFeed: 12,
  /** / */
  Slash: 47,
  /** \ */
  BackSlash: 92,
  /** ^ */
  Caret: 94,
  /** % */
  Percent: 37,
  /** + */
  Plus: 43,
  /** @ */
  At: 64,
  /** # */
  Hash: 35,
  /** $ */
  Dollar: 36
}, Sh = /* @__PURE__ */ new Set([
  B.DoubleQuote,
  B.SingleQuote,
  B.SemiColon,
  B.RoundBracketOpen,
  B.RoundBracketClose,
  B.SquareBracketOpen,
  B.SquareBracketClose,
  B.CurlyBracketOpen,
  B.CurlyBracketClose
]), Tf = /* @__PURE__ */ new Set([
  B.Exclamation,
  B.Comma,
  B.Dot,
  B.Colon,
  B.Question,
  B.Hyphen,
  B.EnDash,
  B.EmDash
]), Ff = /* @__PURE__ */ new Set([
  B.Tab,
  32,
  // SPACE
  160,
  // NO-BREAK SPACE
  5760,
  // OGHAM SPACE MARK
  6158,
  // MONGOLIAN VOWEL SEPARATOR
  8192,
  // EN QUAD
  8193,
  // EM QUAD
  8194,
  // EN SPACE (nut)
  8195,
  // EM SPACE (mutton)
  8196,
  // THREE-PER-EM SPACE (thick space)
  8197,
  // FOUR-PER-EM SPACE (mid space)
  8198,
  // SIX-PER-EM SPACE
  8199,
  // FIGURE SPACE
  8200,
  // PUNCTUATION SPACE
  8201,
  // THIN SPACE
  8202,
  // HAIR SPACE
  8203,
  // ZERO WIDTH SPACE
  8232,
  // LINE SEPARATOR
  8233,
  // PARAGRAPH SEPARATOR
  8239,
  // NARROW NO-BREAK SPACE
  8287,
  // MEDIUM MATHEMATICAL SPACE
  12288,
  // IDEOGRAPHIC SPACE
  65279
  // ZERO WIDTH NO-BREAK SPACE
]), Ch = {
  markdown: !1,
  textEmoji: !1,
  hashtag: !1,
  mention: !1,
  command: !1,
  userSticker: !1,
  link: !1,
  stickyLink: !1,
  formula: !1
};
function zf(e) {
  return Sh.has(e) || Tf.has(e);
}
function Kf(e) {
  return Sh.has(e);
}
function Ut(e) {
  return Ff.has(e);
}
function Lh(e) {
  return e === B.NewLine || e === B.Return || e === B.LineFeed;
}
function Sr(e) {
  return e === void 0 || e !== e || Lh(e) || Ut(e);
}
function _n(e) {
  return Sr(e) || Kf(e);
}
function $f(e) {
  return e === B.Underscore || e === B.Hyphen || Bh(e);
}
function Pf(e) {
  return e.consume(Mn) ? (e.consumeWhile($f), !0) : !1;
}
function Nf(e) {
  return e.consume(yt) ? (e.consumeWhile(yt), !0) : !1;
}
function Za(e, t, i) {
  const { pos: r } = e;
  let n;
  for (let a = 0; a < t.length; a++)
    if (n = i ? ko(e.next()) : e.next(), t[a] !== n)
      return e.pos = r, !1;
  return !0;
}
function Oe(e) {
  if (e.length > 0)
    return e[e.length - 1];
}
function Ki(e, t) {
  const i = [];
  for (let r = 0; r < e.length; r++)
    i.push(
      t ? ko(e.charCodeAt(r)) : e.charCodeAt(r)
    );
  return i;
}
function yt(e) {
  return e > 47 && e < 58;
}
function Mn(e) {
  return e &= -33, e >= 65 && e <= 90;
}
function Bh(e) {
  return yt(e) || Mn(e);
}
function Ah(e) {
  return e === B.SingleQuote || e === B.DoubleQuote;
}
function Of(e) {
  return Mn(e) || // a-zA-Z
  e === 1105 || e === 1025 || // Ёё
  e >= 1040 && e <= 1103 || // Аа-Яя
  e >= 1568 && e <= 1599 || // Arabic and Farsi letters
  e >= 1601 && e <= 1610 || // Arabic letters
  e === 1662 || e === 1670 || e === 1688 || e === 1703 || e === 1705 || e === 1711 || // arabic letters
  e >= 1729 && e <= 1731 || // Arabic letters
  e === 1740 || // Arabic letters
  e >= 1641 && e <= 1776;
}
function Il(e) {
  return Mn(e) || e >= 880 && e <= 1023 || // Greek and Coptic
  e >= 1024 && e <= 1279 || // Cyrillic
  e >= 1280 && e <= 1327 || // Cyrillic Supplementary
  e >= 1328 && e <= 1423 || // Armenian
  e >= 1424 && e <= 1535 || // Hebrew
  e >= 1536 && e <= 1791 || // Arabic
  e >= 19968 && e <= 40959 || // Chinese
  e >= 1792 && e <= 1871 || // Syriac
  e >= 1920 && e <= 1983 || // Thaana
  e >= 2304 && e <= 2431 || // Devanagari
  e >= 2432 && e <= 2559 || // Bengali
  e >= 2560 && e <= 2687 || // Gurmukhi
  e >= 2688 && e <= 2815 || // Gujarati
  e >= 2816 && e <= 2943 || // Oriya
  e >= 2944 && e <= 3071 || // Tamil
  e >= 3072 && e <= 3199 || // Telugu
  e >= 3200 && e <= 3327 || // Kannada
  e >= 3328 && e <= 3455 || // Malayalam
  e >= 3456 && e <= 3583 || // Sinhala
  e >= 3584 && e <= 3711 || // Thai
  e >= 3712 && e <= 3839 || // Lao
  e >= 3840 && e <= 4095 || // Tibetan
  e >= 4096 && e <= 4255 || // Myanmar
  e >= 4256 && e <= 4351 || // Georgian
  e >= 4352 && e <= 4607 || // Hangul Jamo
  e >= 4608 && e <= 4991 || // Ethiopic
  e >= 5024 && e <= 5119 || // Cherokee
  e >= 5120 && e <= 5759 || // Unified
  e >= 5760 && e <= 5791 || // Ogham
  e >= 5792 && e <= 5887 || // Runic
  e >= 5888 && e <= 5919 || // Tagalog
  e >= 5920 && e <= 5951 || // Hanunoo
  e >= 5952 && e <= 5983 || // Buhid
  e >= 5984 && e <= 6015 || // Tagbanwa
  e >= 6016 && e <= 6143 || // Khmer
  e >= 6144 && e <= 6319 || // Mongolian
  e >= 6400 && e <= 6479 || // Limbu
  e >= 6480 && e <= 6527;
}
function Eh(e) {
  return e === B.Underscore || yt(e) || Of(e);
}
function ko(e) {
  return e >= 97 && e <= 122 ? e & -33 : e;
}
function Lt(e) {
  return Vf(jf(e));
}
function _o(e) {
  return e.map((t) => t.value).join("");
}
function Li(e) {
  return e.reduce((t, i) => t + i.value.length, 0);
}
const If = String.prototype.codePointAt ? Rf : qf;
function Rf(e, t) {
  return e.codePointAt(t);
}
function qf(e, t) {
  const i = e.length;
  if (t < 0 || t >= i)
    return;
  const r = e.charCodeAt(t);
  if (r >= 55296 && r <= 56319 && i > t + 1) {
    const n = e.charCodeAt(t + 1);
    if (n >= 56320 && n <= 57343)
      return (r - 55296) * 1024 + n - 56320 + 65536;
  }
  return r;
}
function jf(e) {
  return e.filter(
    (t) => t.value || t.type === E.Text && t.sticky
  );
}
function Vf(e) {
  return e.reduce((t, i) => {
    let r = t[t.length - 1];
    if (r && Hf(r, i)) {
      if (r = Fe(r), i.emoji) {
        const n = Wf(i.emoji, r.value.length);
        r.emoji = r.emoji ? r.emoji.concat(n) : n;
      }
      r.value += i.value, t[t.length - 1] = r;
    } else
      t.push(i);
    return t;
  }, []);
}
function Hf(e, t) {
  if (e.type === t.type && e.format === t.format)
    return e.type === E.Link && e.link === t.link && ku(e) && ku(t) || e.type === E.Text;
}
function Wf(e, t) {
  return e.map(
    (i) => Fe(i, {
      from: i.from + t,
      to: i.to + t
    })
  );
}
function ku(e) {
  return e.type === E.Link && !e.auto;
}
class Dh {
  /**
   * @param text Строка, которую нужно распарсить
   * @param pos Позиция, с которой нужно начинать парсинг
   */
  constructor(t, i, r = 0) {
    this.format = 0, this.tokens = [], this.formatStack = [], this.textStart = -1, this.textEnd = -1, this.emoji = [], this.brackets = {
      round: 0,
      square: 0,
      curly: 0
    }, this.quote = 0, this.string = t, this.options = i, this.pos = r;
  }
  /**
   * Возвращает *code point* текущего символа парсера без смещения указателя
   */
  peek() {
    return If(this.string, this.pos);
  }
  /**
   * Возвращает *code point* текущего символа парсера и смещает указатель
   */
  next() {
    return this.hasNext() ? this.inc(this.peek()) : NaN;
  }
  /**
   * Возвращает код предыдущего символа без смещения указателя
   */
  peekPrev() {
    return this.string.charCodeAt(this.pos - 1);
  }
  /**
   * Вернёт `true` если позиция парсера не находится в конце потока и можно ещё
   * с него считывать данные
   */
  hasNext() {
    return this.pos < this.string.length;
  }
  /**
   * Проверяет, есть ли аккумулированный текст в состоянии
   */
  hasPendingText() {
    return this.textStart !== this.textEnd;
  }
  /**
   * Поглощает символ в текущей позиции парсера, если он соответствует `match`.
   * `match` может быть как кодом символа, так и функцией, которая принимает текущий
   * символ и должна вернуть `true` или `false`
   * Вернёт `true` если символ был поглощён
   */
  consume(t) {
    const i = this.peek(), r = typeof t == "function" ? t(i) : i === t;
    return r && this.inc(i), r;
  }
  /**
   * Вызывает функцию `consume` до тех пор, пока текущий символ соответствует
   * условию `match`.
   * Вернёт `true` если было поглощение
   */
  consumeWhile(t) {
    const i = this.pos;
    for (; this.hasNext() && this.consume(t); )
      ;
    return this.pos !== i;
  }
  /**
   * Возвращает подстроку по указанным индексам
   */
  substring(t, i = this.pos) {
    return this.string.substring(t, i);
  }
  /**
   * Добавляет указанный токен в вывод
   */
  push(t) {
    this.flushText(), this.tokens.push(t);
  }
  /**
   * Добавляет эмоджи для текущего накапливаемого текста
   * @param from Начала эмоджи _относительно всего потока_
   * @param to Конец эмоджи _относительно всего потока_
   * @param emoji Фактический эмоджи
   */
  pushEmoji(t, i, r) {
    this.textStart === -1 && (this.textStart = t);
    const n = {
      from: t - this.textStart,
      to: i - this.textStart
    };
    r != null && (n.emoji = r), this.emoji.push(n), this.textEnd = i;
  }
  /**
   * Проверяет, есть ли указанный формат в текущем состоянии
   */
  hasFormat(t) {
    return (this.format & t) === t;
  }
  /**
   * Добавляет указанный тип форматирования в состояние
   */
  addFormat(t) {
    this.format |= t;
  }
  /**
   * Удаляет указанный тип форматирования из состояния
   */
  removeFormat(t) {
    this.format ^= this.format & t;
  }
  /**
   * Поглощает текущий символ как накапливаемый текст
   */
  consumeText() {
    this.textStart === -1 && (this.textStart = this.textEnd = this.pos);
    const t = this.next();
    t === B.SingleQuote ? this.quote ^= 1 : t === B.DoubleQuote && (this.quote ^= 2), this.textEnd = this.pos;
  }
  /**
   * Записывает накопленный текстовый токен в вывод
   */
  flushText() {
    if (this.hasPendingText()) {
      const t = {
        type: E.Text,
        format: this.options.useFormat ? this.format : L.None,
        value: this.substring(this.textStart, this.textEnd),
        sticky: !1
      };
      this.emoji.length && (t.emoji = this.emoji, this.emoji = []), this.tokens.push(t), this.textStart = this.textEnd = -1;
    }
  }
  hasQuote(t) {
    return (this.quote & t) === t;
  }
  /**
   * Проверяет, находимся ли мы сейчас на границе слов
   */
  atWordBound() {
    const { pos: t } = this;
    if (t === 0 || this.isAfterEmoji())
      return !0;
    if (this.hasPendingText())
      return _n(this.peekPrev());
    const i = Oe(this.tokens);
    return i ? i.type === E.Markdown || i.type === E.Newline : !1;
  }
  /**
   * Вернёт `true`, если в данный момент находимся сразу после эмоджи
   */
  isAfterEmoji() {
    var t;
    if (this.hasPendingText()) {
      if (this.emoji.length && Oe(this.emoji).to === this.textEnd - this.textStart)
        return !0;
    } else {
      const i = Oe(this.tokens);
      if (i && i.type === E.Text && (t = i.emoji) != null && t.length)
        return Oe(i.emoji).to === i.value.length;
    }
    return !1;
  }
  markPending(t) {
    this.hasPendingText() || (this.textStart = t), this.textEnd = this.pos;
  }
  /**
   * Сброс счётчика скобок
   */
  resetBrackets() {
    this.brackets.curly = this.brackets.round = this.brackets.square = 0;
  }
  /**
   * Смещает указатель на размер указанного кода символ вправо.
   */
  inc(t) {
    return this.pos += t > 65535 ? 2 : 1, t;
  }
}
function Uf(e) {
  return e === B.SingleQuote ? 1 : 2;
}
const Jf = /* @__PURE__ */ new Set([8252, 8265, 8505, 9e3, 9167, 9410, 9654, 9664, 9742, 9745, 9752, 9757, 9760, 9766, 9770, 9792, 9794, 9827, 9832, 9851, 9881, 9895, 9928, 9937, 9981, 9986, 9989, 9999, 10002, 10004, 10006, 10013, 10017, 10024, 10052, 10055, 10060, 10062, 10071, 10145, 10160, 10175, 11088, 11093, 12336, 12349, 12951, 12953]);
function Xs(e) {
  const { pos: t } = e;
  return !e.options.skipEmoji && Xf(e) ? (e.pushEmoji(t, e.pos), !0) : !1;
}
function Xf(e) {
  return Rl(e) || Gf(e) || Zf(e) || Yf(e);
}
function Rl(e) {
  const { pos: t } = e;
  return e.consume(e1) && (e.consume(
    65039
    /* Presentation */
  ), e.consume(8419)) ? !0 : (e.pos = t, !1);
}
function Gf(e) {
  const { pos: t } = e;
  if (e.consume(_u) && e.consume(_u))
    return !0;
  if (e.consume(127988) && e.consume(Mu))
    for (; e.hasNext(); ) {
      if (e.consume(
        917631
        /* TagSeqTerm */
      ))
        return !0;
      if (!e.consume(Mu))
        break;
    }
  return e.pos = t, !1;
}
function Zf(e) {
  const { pos: t } = e;
  for (; Qf(e) && e.consume(
    8205
    /* ZWJ */
  ); )
    ;
  return t !== e.pos ? !0 : (e.pos = t, !1);
}
function Yf(e) {
  const t = e.pos;
  return e.next() && e.consume(
    65039
    /* Presentation */
  ) ? !0 : (e.pos = t, !1);
}
function Qf(e) {
  const t = e.pos;
  return e.consume(r1) ? (e.consume(t1), e.consume(i1), e.consume(
    65039
    /* Presentation */
  ), !0) : (e.pos = t, !1);
}
function e1(e) {
  return e === B.Hash || e === B.Asterisk || yt(e);
}
function _u(e) {
  return e >= 127462 && e <= 127487;
}
function t1(e) {
  return e >= 127995 && e <= 127999;
}
function Mu(e) {
  return e >= 917536 && e <= 917630;
}
function i1(e) {
  return e === 9792 || e === 9794;
}
function r1(e) {
  return e === 174 || Jf.has(e) || e >= 8596 && e <= 8601 || e >= 8617 && e <= 8618 || e >= 8986 && e <= 8987 || e >= 9193 && e <= 9203 || e >= 9208 && e <= 9210 || e >= 9642 && e <= 9643 || e >= 9723 && e <= 9726 || e >= 9728 && e <= 9732 || e >= 9748 && e <= 9749 || e >= 9762 && e <= 9763 || e >= 9774 && e <= 9775 || e >= 9784 && e <= 9786 || e >= 9800 && e <= 9811 || e >= 9823 && e <= 9824 || e >= 9829 && e <= 9830 || e >= 9854 && e <= 9855 || e >= 9874 && e <= 9879 || e >= 9883 && e <= 9884 || e >= 9888 && e <= 9889 || e >= 9898 && e <= 9899 || e >= 9904 && e <= 9905 || e >= 9917 && e <= 9918 || e >= 9924 && e <= 9925 || e >= 9934 && e <= 9935 || e >= 9939 && e <= 9940 || e >= 9961 && e <= 9962 || e >= 9968 && e <= 9973 || e >= 9975 && e <= 9978 || e >= 9992 && e <= 9997 || e >= 10035 && e <= 10036 || e >= 10067 && e <= 10069 || e >= 10083 && e <= 10084 || e >= 10133 && e <= 10135 || e >= 10548 && e <= 10549 || e >= 11013 && e <= 11015 || e >= 11035 && e <= 11036 || e >= 123904 && e <= 7999 || e >= 124928 && e <= 129023 || e >= 125952 && e <= 130047;
}
function ql(e, t = !1) {
  const i = /* @__PURE__ */ new Map();
  return e.forEach((r) => Fh(i, r, t)), i;
}
function Th(e, t, i = !1) {
  const { pos: r } = e;
  let n = t, a, o;
  for (; e.hasNext(); ) {
    if (a = e.next(), i && (a = ko(a)), o = n.get(a), o === !0)
      return !0;
    if (o === void 0)
      break;
    n = o;
  }
  return e.pos = r, !1;
}
function Fh(e, t, i, r = 0) {
  let n = t.charCodeAt(r++);
  i && (n = ko(n)), r === t.length ? e.set(n, !0) : (e.has(n) || e.set(n, /* @__PURE__ */ new Map()), Fh(e.get(n), t, i, r));
}
const zh = {
  ":C": "☹️",
  ":c": "☹️",
  ":)": "🙂",
  ":-)": "🙂",
  "<3": "❤️",
  ":(|)": "🐵",
  ":(:)": "🐷",
  "(]:{": "👳",
  "</3": "💔",
  "~@~": "💩",
  ":D": "😀",
  ":-D": "😀",
  "^_^": "😁",
  "=D": "😄",
  ":-@": "😣",
  ":-S": "😖",
  "O:)": "😇",
  "O=)": "😇",
  "O:-)": "😇",
  "}:)": "😈",
  "}=)": "😈",
  "}:-)": "😈",
  ";)": "😉",
  ";-)": "😉",
  "=)": "🙂",
  "^^": "😊",
  "B-)": "😎",
  ":,": "😏",
  ":-,": "😏",
  ":|": "😐",
  "=|": "😐",
  ":-|": "😐",
  "-_-": "😑",
  u_u: "😔",
  // ':/': '😕',
  "=/": "😕",
  ":-/": "😕",
  ":-\\": "😕",
  ":s": "😖",
  ":-s": "😖",
  ":*": "😗",
  ":-*": "😗",
  ";*": "😘",
  ";-*": "😘",
  "=*": "😚",
  ":p": "😛",
  ":P": "😛",
  ":-p": "😛",
  ":-P": "😛",
  "=p": "😛",
  "=P": "😛",
  ";p": "😜",
  ";P": "😜",
  ";-p": "😜",
  ";-P": "😜",
  ":(": "🙁",
  ":-(": "🙁",
  "=(": "🙁",
  ">:(": "😡",
  ":'(": "😢",
  "='(": "😢",
  T_T: "😭",
  ";_;": "😭",
  ">.<": "😣",
  ">_<": "😣",
  "D:": "😦",
  ":o": "😮",
  ":O": "😮",
  "=o": "😮",
  "=O": "😮",
  ":-O": "😮",
  ":-o": "😮",
  "o.o": "😮",
  "O.O": "😲",
  x_x: "😵",
  "X(": "😵",
  "X-(": "😵",
  "X-o": "😵",
  "X-O": "😵",
  ":3": "😸",
  "o/": "🙋",
  "\\o": "🙋",
  "\\m/": "🤘",
  ":-$": "🤐",
  ":$": "🤐",
  "*-)": "😐",
  ":-I": "😠",
  ":I": "😠",
  ":@": "😠",
  "8oI": "😡",
  "8o|": "😡",
  "|-)": "😪",
  "(ch)": "😏",
  "(lo)": "😍",
  "(sr)": "😔",
  "|-(": "😴",
  "(y)": "👍",
  "(Y)": "👍",
  "(n)": "👎",
  "(N)": "👎",
  "(H)": "😎",
  "(hu)": "😬",
  "(tr)": "😒",
  "(md)": "😵",
  "(fr)": "😄",
  "(dt)": "😟",
  "(sc)": "😕",
  "(v)": "✌️",
  "(L)": "❤️",
  "(U)": "💔",
  "(K)": "💋",
  "(F)": "🌼",
  "(*)": "⭐",
  "(^)": "🎂",
  "(G)": "🎁",
  "(B)": "🍺",
  "(D)": "🍸",
  "(CC)": "🎂",
  "(pi)": "🍕",
  "(pl)": "🍴",
  "(ic)": "🍦",
  "($)": "💰",
  "(co)": "💻",
  "(so)": "⚽",
  "(te)": "🎾",
  "(nt)": "🎵",
  "(I)": "💡",
  "(E)": "✉️",
  "(Z)": "👦",
  "(X)": "👧",
  "(S)": "🌙",
  "(facepalm)": "🤦‍",
  "^o)": "🤨",
  ":S": "😵‍💫"
}, n1 = ql(Object.keys(zh));
function Gs(e) {
  if (e.options.textEmoji && a1(e)) {
    const { pos: t } = e;
    if (Th(e, n1)) {
      const i = e.substring(t);
      return e.pushEmoji(t, e.pos, zh[i] || i), !0;
    }
    e.pos = t;
  }
  return !1;
}
function a1(e) {
  if (e.options.textEmoji === "force")
    return !0;
  let t;
  if (e.hasPendingText()) {
    const i = Oe(e.emoji);
    i != null && i.emoji && i.to === e.textEnd && (t = i);
  } else {
    const i = Oe(e.tokens);
    if ((i == null ? void 0 : i.type) === E.Text && i.emoji) {
      const r = Oe(i.emoji);
      r != null && r.emoji && r.to === i.value.length && (t = r);
    }
  }
  return t ? !0 : e.atWordBound();
}
const Su = [35, 117], Cu = [115, 35];
function Kh(e) {
  if (e.options.userSticker) {
    const { pos: t } = e;
    if (Za(e, Su)) {
      for (; e.hasNext(); )
        if (Za(e, Cu)) {
          const i = e.substring(t);
          return e.push({
            type: E.UserSticker,
            format: L.None,
            value: i,
            stickerId: i.slice(Su.length, -Cu.length)
          }), !0;
        } else if (!e.consume(Bh))
          break;
    }
    e.pos = t;
  }
  return !1;
}
function $h(e) {
  if (e.options.mention && e.atWordBound()) {
    const { pos: t } = e, i = e.options.mention === "strict" ? Pf : o1;
    if (e.consume(B.At) && (i(e) || _n(e.peek()))) {
      const r = e.substring(t);
      return e.push({
        type: E.Mention,
        format: L.None,
        value: r,
        mention: r.slice(1)
      }), !0;
    }
    e.pos = t;
  }
  return !1;
}
function o1(e) {
  return e.consumeWhile(s1);
}
function s1(e) {
  return yt(e) || Il(e) || e === B.Underscore || e === B.Hyphen;
}
function Ph(e) {
  if (e.options.command && l1(e.peekPrev())) {
    const { pos: t } = e;
    if (e.consume(B.Slash) && (e.consumeWhile(Eh) || _n(e.peek()))) {
      const i = e.substring(t);
      return e.push({
        type: E.Command,
        format: L.None,
        value: i,
        command: i.slice(1)
      }), !0;
    }
    e.pos = t;
  }
  return !1;
}
function l1(e) {
  return e !== e || Ut(e);
}
function Nh(e) {
  if (e.options.hashtag && u1(e)) {
    const { pos: t } = e;
    if (e.consume(B.Hash) && (e.consumeWhile(Eh) || Sr(e.peek()))) {
      const i = e.substring(t);
      return e.push({
        type: E.HashTag,
        format: L.None,
        value: i,
        hashtag: i.slice(1)
      }), !0;
    }
    e.pos = t;
  }
  return !1;
}
function u1(e) {
  if (e.atWordBound())
    return !0;
  if (!e.hasPendingText()) {
    const t = Oe(e.tokens);
    return (t == null ? void 0 : t.type) === E.HashTag;
  }
  return !1;
}
const Sn = /* @__PURE__ */ new Map([
  [B.Asterisk, L.Bold],
  [B.Underscore, L.Italic],
  [B.Tilde, L.Strike],
  [B.BackTick, L.Monospace]
]);
function c1(e) {
  if (e.options.markdown) {
    const { pos: t } = e;
    return g1(e) || (h1(e) ? p1(e) : m1(e)), e.pos !== t;
  }
  return !1;
}
function jl(e) {
  return Sn.get(e) || L.None;
}
function Vl(e) {
  return Sr(e) || e === B.RoundBracketOpen || e === B.SquareBracketOpen || e === B.CurlyBracketOpen;
}
function Hl(e) {
  return _n(e) || zf(e);
}
function d1(e) {
  if (!e.options.markdown)
    return !1;
  const { pos: t } = e;
  let i;
  for (; (i = jl(e.peek())) && e.hasFormat(i); )
    e.pos++;
  const r = t !== e.pos && Oh(e);
  return e.pos = t, r;
}
function h1(e) {
  if (e.pos === 0)
    return !0;
  if (e.hasPendingText())
    return Vl(e.peekPrev());
  const t = Oe(e.tokens);
  return !!((t == null ? void 0 : t.type) === E.Markdown && t.format & L.LinkLabel);
}
function Oh(e) {
  return Hl(e.peek());
}
function p1(e) {
  let t;
  for (; e.hasNext() && (t = jl(e.peek()), t !== L.None && !e.hasFormat(t)); )
    e.pos++, Zs(e, ir(e, t));
}
function m1(e) {
  const t = [], { pos: i } = e;
  let { format: r } = e, n;
  for (; e.hasNext() && (n = jl(e.peek()), n !== L.None && r & n); )
    e.pos++, r &= ~n, t.push(ir(e, n));
  if (t.length && Oh(e))
    for (let a = 0; a < t.length; a++)
      Ys(e, t[a]);
  else i !== e.pos && e.markPending(i);
}
function ir(e, t) {
  return {
    type: E.Markdown,
    format: t,
    value: e.substring(e.pos - 1)
  };
}
function Zs(e, t) {
  e.push(t), e.format |= t.format, e.formatStack.push(t);
}
function Ys(e, t) {
  e.push(t), e.format &= ~t.format;
  const i = f1(e, t);
  if (i) {
    let r = e.tokens.length - 2, n;
    for (; r >= 0 && (n = e.tokens[r--], n.format |= t.format, n !== i); )
      ;
  }
}
function f1(e, t) {
  const i = e.formatStack;
  let r = i.length - 1;
  for (; r >= 0; ) {
    if (i[r].format & t.format)
      return i.splice(r, 1)[0];
    r--;
  }
}
function g1(e) {
  const { pos: t } = e;
  if (e.consume(B.SquareBracketOpen))
    return Zs(e, ir(e, L.LinkLabel)), !0;
  if (e.consume(B.SquareBracketClose) && e.format & L.LinkLabel) {
    const i = ir(e, L.LinkLabel);
    if (e.consume(B.RoundBracketOpen)) {
      const r = ir(e, L.Link), n = e.pos;
      if (y1(e)) {
        const a = e.substring(n);
        return Ys(e, i), Zs(e, r), e.push({
          type: E.Link,
          format: e.format,
          value: a,
          link: a,
          auto: !1,
          sticky: !1
        }), e.pos++, Ys(e, ir(e, L.Link)), !0;
      }
    }
  }
  return e.pos = t, !1;
}
function y1(e) {
  let t = 2e3, i;
  const { pos: r } = e;
  for (; e.hasNext() && --t; ) {
    if (i = e.peek(), i === B.RoundBracketClose)
      return !0;
    if (Sr(i))
      break;
    e.next();
  }
  return e.pos = r, !1;
}
const b1 = /* @__PURE__ */ new Set([
  "abbott",
  "abogado",
  "ac",
  "academy",
  "accountant",
  "accountants",
  "active",
  "actor",
  "ad",
  "ads",
  "adult",
  "ae",
  "aero",
  "af",
  "afl",
  "ag",
  "agency",
  "ai",
  "airforce",
  "al",
  "allfinanz",
  "alsace",
  "am",
  "amsterdam",
  "an",
  "android",
  "ao",
  "apartments",
  "aq",
  "aquarelle",
  "ar",
  "archi",
  "army",
  "arpa",
  "as",
  "asia",
  "associates",
  "at",
  "attorney",
  "au",
  "auction",
  "audio",
  "autos",
  "aw",
  "ax",
  "axa",
  "az",
  "ba",
  "band",
  "bank",
  "bar",
  "barclaycard",
  "barclays",
  "bargains",
  "bauhaus",
  "bayern",
  "bb",
  "bbc",
  "bd",
  "be",
  "beer",
  "berlin",
  "best",
  "bf",
  "bg",
  "bh",
  "bi",
  "bid",
  "bike",
  "bingo",
  "bio",
  "biz",
  "bj",
  "bl",
  "black",
  "blackfriday",
  "bloomberg",
  "blue",
  "bm",
  "bmw",
  "bn",
  "bnpparibas",
  "bo",
  "boats",
  "bond",
  "boo",
  "boutique",
  "bq",
  "br",
  "brussels",
  "bs",
  "bt",
  "budapest",
  "build",
  "builders",
  "business",
  "buzz",
  "bv",
  "bw",
  "by",
  "bz",
  "bzh",
  "ca",
  "cab",
  "cafe",
  "cal",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cartier",
  "casa",
  "cash",
  "casino",
  "cat",
  "catering",
  "cbn",
  "cc",
  "cd",
  "center",
  "ceo",
  "cern",
  "cf",
  "cfd",
  "cg",
  "ch",
  "channel",
  "chat",
  "cheap",
  "chloe",
  "christmas",
  "chrome",
  "church",
  "ci",
  "citic",
  "city",
  "ck",
  "cl",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clothing",
  "club",
  "cm",
  "cn",
  "co",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "com",
  "community",
  "company",
  "computer",
  "condos",
  "construction",
  "consulting",
  "contractors",
  "cooking",
  "cool",
  "coop",
  "country",
  "courses",
  "cr",
  "credit",
  "creditcard",
  "cricket",
  "crs",
  "cruises",
  "cu",
  "cuisinella",
  "cv",
  "cw",
  "cx",
  "cy",
  "cymru",
  "cyou",
  "cz",
  "dabur",
  "dad",
  "dance",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "de",
  "deals",
  "degree",
  "delivery",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "dj",
  "dk",
  "dm",
  "dnp",
  "do",
  "docs",
  "doha",
  "domains",
  "doosan",
  "download",
  "durban",
  "dvag",
  "dz",
  "eat",
  "ec",
  "edu",
  "education",
  "ee",
  "eg",
  "eh",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epson",
  "equipment",
  "er",
  "erni",
  "es",
  "esq",
  "estate",
  "et",
  "eu",
  "eurovision",
  "eus",
  "events",
  "everbank",
  "exchange",
  "expert",
  "exposed",
  "express",
  "fail",
  "faith",
  "fan",
  "fans",
  "farm",
  "fashion",
  "feedback",
  "fi",
  "film",
  "finance",
  "financial",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "fj",
  "fk",
  "flights",
  "florist",
  "flowers",
  "flsmidth",
  "fly",
  "fm",
  "fo",
  "foo",
  "football",
  "forex",
  "forsale",
  "foundation",
  "fr",
  "frl",
  "frogans",
  "fund",
  "furniture",
  "futbol",
  "ga",
  "gal",
  "gallery",
  "garden",
  "gb",
  "gbiz",
  "gd",
  "gdn",
  "ge",
  "gent",
  "gf",
  "gg",
  "ggee",
  "gh",
  "gi",
  "gift",
  "gifts",
  "gives",
  "gl",
  "glass",
  "gle",
  "global",
  "globo",
  "gm",
  "gmail",
  "gmo",
  "gmx",
  "gn",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goog",
  "google",
  "gop",
  "gov",
  "gp",
  "gq",
  "gr",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "gs",
  "gt",
  "gu",
  "guge",
  "guide",
  "guitars",
  "guru",
  "gw",
  "gy",
  "hamburg",
  "hangout",
  "haus",
  "healthcare",
  "help",
  "here",
  "hermes",
  "hiphop",
  "hiv",
  "hk",
  "hm",
  "hn",
  "holdings",
  "holiday",
  "homes",
  "horse",
  "host",
  "hosting",
  "house",
  "how",
  "hr",
  "ht",
  "hu",
  "ibm",
  "id",
  "ie",
  "ifm",
  "il",
  "im",
  "immo",
  "immobilien",
  "in",
  "industries",
  "infiniti",
  "info",
  "ing",
  "ink",
  "institute",
  "insure",
  "int",
  "international",
  "investments",
  "io",
  "iq",
  "ir",
  "irish",
  "is",
  "it",
  "iwc",
  "java",
  "jcb",
  "je",
  "jetzt",
  "jm",
  "jo",
  "jobs",
  "joburg",
  "jp",
  "juegos",
  "kaufen",
  "kddi",
  "ke",
  "kg",
  "kh",
  "ki",
  "kim",
  "kitchen",
  "kiwi",
  "km",
  "kn",
  "koeln",
  "komatsu",
  "kp",
  "kr",
  "krd",
  "kred",
  "kw",
  "ky",
  "kyoto",
  "kz",
  "la",
  "lacaixa",
  "land",
  "lat",
  "latrobe",
  "lawyer",
  "lb",
  "lc",
  "lds",
  "lease",
  "leclerc",
  "legal",
  "lgbt",
  "li",
  "lidl",
  "life",
  "lighting",
  "limited",
  "limo",
  "link",
  "lk",
  "loan",
  "loans",
  "london",
  "lotte",
  "lotto",
  "love",
  "lr",
  "ls",
  "lt",
  "ltda",
  "lu",
  "luxe",
  "luxury",
  "lv",
  "ly",
  "ma",
  "madrid",
  "maif",
  "maison",
  "management",
  "mango",
  "market",
  "marketing",
  "markets",
  "marriott",
  "mc",
  "md",
  "me",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "menu",
  "mf",
  "mg",
  "mh",
  "miami",
  "mil",
  "mini",
  "mk",
  "ml",
  "mm",
  "mma",
  "mn",
  "mo",
  "mobi",
  "moda",
  "moe",
  "monash",
  "money",
  "mormon",
  "mortgage",
  "moscow",
  "motorcycles",
  "mov",
  "movie",
  "mp",
  "mq",
  "mr",
  "ms",
  "msk",
  "mt",
  "mtn",
  "mtpc",
  "mu",
  "museum",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nagoya",
  "name",
  "navy",
  "nc",
  "ne",
  "net",
  "network",
  "neustar",
  "new",
  "news",
  "nexus",
  "nf",
  "ng",
  "ngo",
  "nhk",
  "ni",
  "nico",
  "ninja",
  "nissan",
  "nl",
  "no",
  "np",
  "nr",
  "nra",
  "nrw",
  "ntt",
  "nu",
  "nyc",
  "nz",
  "okinawa",
  "om",
  "one",
  "ong",
  "onl",
  "online",
  "ooo",
  "org",
  "organic",
  "osaka",
  "otsuka",
  "ovh",
  "pa",
  "page",
  "panerai",
  "paris",
  "partners",
  "parts",
  "party",
  "pe",
  "pf",
  "pg",
  "ph",
  "pharmacy",
  "photo",
  "photography",
  "photos",
  "physio",
  "piaget",
  "pics",
  "pictet",
  "pictures",
  "pink",
  "pizza",
  "pk",
  "pl",
  "place",
  "plumbing",
  "plus",
  "pm",
  "pn",
  "pohl",
  "poker",
  "porn",
  "post",
  "pr",
  "praxi",
  "press",
  "pro",
  "prod",
  "productions",
  "prof",
  "properties",
  "property",
  "ps",
  "pt",
  "pub",
  "pw",
  "py",
  "qa",
  "qpon",
  "quebec",
  "racing",
  "re",
  "realtor",
  "recipes",
  "red",
  "redstone",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "ren",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rich",
  "rio",
  "rip",
  "ro",
  "rocks",
  "rodeo",
  "rs",
  "rsvp",
  "ru",
  "ruhr",
  "rw",
  "ryukyu",
  "sa",
  "saarland",
  "sale",
  "samsung",
  "sap",
  "sarl",
  "saxo",
  "sb",
  "sc",
  "sca",
  "scb",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scot",
  "sd",
  "se",
  "services",
  "sew",
  "sexy",
  "sg",
  "sh",
  "shiksha",
  "shoes",
  "shriram",
  "si",
  "singles",
  "site",
  "sj",
  "sk",
  "sky",
  "sl",
  "sm",
  "sn",
  "so",
  "social",
  "software",
  "sohu",
  "solar",
  "solutions",
  "soy",
  "space",
  "spiegel",
  "spreadbetting",
  "sr",
  "ss",
  "st",
  "study",
  "style",
  "su",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "sv",
  "sx",
  "sy",
  "sydney",
  "systems",
  "sz",
  "taipei",
  "tatar",
  "tattoo",
  "tax",
  "tc",
  "td",
  "team",
  "tech",
  "technology",
  "tel",
  "temasek",
  "tennis",
  "tf",
  "tg",
  "th",
  "tickets",
  "tienda",
  "tips",
  "tires",
  "tirol",
  "tj",
  "tk",
  "tl",
  "tm",
  "tn",
  "to",
  "today",
  "tokyo",
  "tools",
  "top",
  "toshiba",
  "tours",
  "town",
  "toys",
  "tp",
  "tr",
  "trade",
  "trading",
  "training",
  "travel",
  "trust",
  "tt",
  "tui",
  "tv",
  "tw",
  "tz",
  "ua",
  "ug",
  "uk",
  "um",
  "university",
  "uno",
  "uol",
  "us",
  "uy",
  "uz",
  "va",
  "vacations",
  "vc",
  "ve",
  "vegas",
  "ventures",
  "versicherung",
  "vet",
  "vg",
  "vi",
  "viajes",
  "video",
  "villas",
  "vision",
  "vlaanderen",
  "vn",
  "vodka",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vu",
  "wales",
  "wang",
  "watch",
  "webcam",
  "website",
  "wed",
  "wedding",
  "wf",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "wme",
  "work",
  "works",
  "world",
  "ws",
  "wtc",
  "wtf",
  "xin",
  "测试",
  "परीक्षा",
  "佛山",
  "慈善",
  "集团",
  "在线",
  "한국",
  "ভারত",
  "八卦",
  "موقع",
  "বাংলা",
  "公益",
  "公司",
  "移动",
  "我爱你",
  "москва",
  "испытание",
  "қаз",
  "онлайн",
  "сайт",
  "срб",
  "бел",
  "时尚",
  "테스트",
  "淡马锡",
  "орг",
  "삼성",
  "சிங்கப்பூர்",
  "商标",
  "商店",
  "商城",
  "дети",
  "мкд",
  "טעסט",
  "中文网",
  "中信",
  "中国",
  "中國",
  "谷歌",
  "భారత్",
  "ලංකා",
  "測試",
  "ભારત",
  "भारत",
  "آزمایشی",
  "பரிட்சை",
  "网店",
  "संगठन",
  "网络",
  "укр",
  "香港",
  "δοκιμή",
  "飞利浦",
  "إختبار",
  "台湾",
  "台灣",
  "手机",
  "мон",
  "الجزائر",
  "عمان",
  "ایران",
  "امارات",
  "بازار",
  "پاکستان",
  "الاردن",
  "بھارت",
  "المغرب",
  "السعودية",
  "سودان",
  "عراق",
  "مليسيا",
  "政府",
  "شبكة",
  "გე",
  "机构",
  "组织机构",
  "健康",
  "ไทย",
  "سورية",
  "рус",
  "рф",
  "تونس",
  "みんな",
  "グーグル",
  "世界",
  "ਭਾਰਤ",
  "网址",
  "游戏",
  "vermögensberater",
  "vermögensberatung",
  "企业",
  "信息",
  "مصر",
  "قطر",
  "广东",
  "இலங்கை",
  "இந்தியா",
  "հայ",
  "新加坡",
  "فلسطين",
  "テスト",
  "政务",
  "xxx",
  "xyz",
  "yachts",
  "yandex",
  "ye",
  "yodobashi",
  "yoga",
  "yokohama",
  "youtube",
  "yt",
  "za",
  "zip",
  "zm",
  "zone",
  "zuerich",
  "zw",
  "xn--p1ai"
]), v1 = 63, Ih = 43, x1 = new Set(Ki("$-_.+")), w1 = new Set(Ki(`!*"'()[],|`)), k1 = new Set(Ki("!,.:;?")), _1 = Ki("mailto:", !0), M1 = Ki("magnet:", !0), S1 = new Set(Ki(";?&=:")), C1 = new Set(Ki("!$%&*+=^`{|}~")), L1 = ql([
  "skype://",
  "http://",
  "https://",
  "tamtam://",
  "tt://",
  "tg://",
  "ftp://",
  "contact://",
  "//"
], !0);
function Rh(e, t = L1) {
  if (e.options.link && e.atWordBound()) {
    const { pos: i } = e, r = D1(e) || B1(e) || A1(e, t) || E1(e);
    return r === 0 ? (e.pos = i, !1) : (r === 2 && e.markPending(i), !0);
  }
  return !1;
}
function B1(e) {
  const { pos: t } = e;
  return Za(e, _1, !0) ? qh(e, Mo(e), t) ? 1 : 2 : 0;
}
function A1(e, t) {
  let { pos: i } = e;
  const r = i;
  if (Th(e, t, !0)) {
    const n = F1(e);
    if (Mo(e, Ih)) {
      jh(e), Vh(e), So(e), Hh(e);
      const a = e.substring(r);
      return e.push(Co(a, /^\/\//.test(a) ? `http:${a}` : a)), 1;
    } else if (!n)
      return 2;
    i = e.pos;
  }
  return 0;
}
function E1(e) {
  const { pos: t } = e;
  let i = Mo(e);
  if (qh(e, i, t))
    return 1;
  if (Ya(
    i,
    64
    /* TrailingPrintable */
  ) && Ul(
    i,
    128
    /* MiddlePrintable */
  )) {
    for (; Xh(e.peekPrev()); )
      e.pos--;
    i &= -69;
  }
  return T1(e, i, t) ? 1 : i ? 2 : 0;
}
function D1(e) {
  const { pos: t } = e;
  if (Za(e, M1, !0)) {
    So(e);
    const i = e.substring(t);
    return e.push(Co(i, i)), 1;
  }
  return 0;
}
function qh(e, t, i) {
  if (N1(t) && e.consume(B.At)) {
    const r = Mo(e, Ih);
    if (Jh(r)) {
      So(e);
      const n = e.substring(i);
      return e.push(Co(n, /^mailto:/i.test(n) ? n : `mailto:${n}`)), !0;
    }
    e.pos--;
  }
  return !1;
}
function T1(e, t, i) {
  if (Jh(t)) {
    jh(e), Vh(e), So(e), Hh(e);
    const r = e.substring(i);
    return e.push(Co(r, /^[a-z0-9+-]+:/i.test(r) ? r : `http://${r}`)), !0;
  }
  return !1;
}
function Mo(e, t = 4294967295) {
  const i = e.pos;
  let r = 0, n = i, a = i, o, s = !1;
  const l = t & 2, u = t & 1, c = t & 4, d = t & 8, h = t & 32;
  for (; e.hasNext(); ) {
    if (o = e.pos, Rl(e) || d1(e)) {
      e.pos = o;
      break;
    }
    if (c && e.consume(Xh))
      r |= 4, s = !0;
    else {
      if (l && e.consume(B.Dot)) {
        if (_n(e.peek())) {
          e.pos--;
          break;
        }
        if (o === n) {
          e.pos = o;
          break;
        }
        n = e.pos, r |= 2;
      } else if (u && e.consume(O1))
        r |= 1;
      else if (d && e.consume(Il))
        r |= 8;
      else
        break;
      a = e.pos, s === !0 && (s = !1, r |= 128), e.pos - n > v1 && (r |= 16);
    }
  }
  return h && n !== i && b1.has(e.substring(n, a).toLowerCase()) && (r |= 32), s && (r |= 64), r;
}
function jh(e) {
  const { pos: t } = e;
  if (e.consume(B.Colon)) {
    let i = 0;
    for (; e.hasNext(); ) {
      if (i = e.pos, Rl(e)) {
        e.pos = i;
        break;
      }
      if (!e.consume(yt))
        break;
    }
  }
  return e.pos - t > 1 ? !0 : (e.pos = t, !1);
}
function Vh(e) {
  const { pos: t } = e;
  return e.resetBrackets(), e.consume(B.Slash) && Wl(e), e.pos !== t;
}
function So(e) {
  const { pos: t } = e;
  return e.consume(B.Question) && !Uh(e) ? (e.resetBrackets(), Wl(e), !0) : (e.pos = t, !1);
}
function Hh(e) {
  return e.consume(B.Hash) ? (e.resetBrackets(), Wl(e), !0) : !1;
}
function F1(e) {
  const { pos: t } = e;
  for (; K1(e) || e.consumeWhile(V1); )
    ;
  return t !== e.pos && e.consume(B.At) ? !0 : (e.pos = t, !1);
}
function Wl(e) {
  let { pos: t } = e;
  const i = t;
  let r, n;
  for (; e.hasNext(); )
    if (t = e.pos, n = e.peek(), Ah(n)) {
      if (Wh(e, n))
        break;
      e.next();
    } else if (e.consume(Gh)) {
      if (Sr(e.peek())) {
        e.pos = t;
        break;
      }
    } else if (r = R1(e)) {
      if (r === 2)
        break;
    } else if (!e.consume(z1))
      break;
  return i !== e.pos;
}
function z1(e) {
  return e > 0 && e === e && e !== B.Question && e !== B.Hash && e !== B.SingleQuote && e !== B.DoubleQuote && !Ut(e) && !Lh(e);
}
function K1(e) {
  return $1(e) || P1(e);
}
function $1(e) {
  const { pos: t } = e;
  return e.consume(B.Percent) && e.consume(Lu) && e.consume(Lu) ? !0 : (e.pos = t, !1);
}
function P1(e) {
  return Wh(e, e.peek()) ? !1 : e.consume(I1);
}
function Wh(e, t) {
  return Ah(t) ? e.hasQuote(Uf(t)) : !1;
}
function Ya(e, t) {
  return (e & t) === t;
}
function Ul(e, t) {
  return (e & t) === 0;
}
function Uh(e) {
  const t = e.peek();
  return Sr(t) || Gh(t);
}
function N1(e) {
  return Ul(
    e,
    24
    /* OctetOverflow */
  ) && (Ya(
    e,
    1
    /* ASCII */
  ) || Ya(
    e,
    4
    /* Printable */
  ));
}
function Jh(e) {
  return Ul(
    e,
    20
    /* OctetOverflow */
  ) && Ya(
    e,
    34
    /* ValidTLD */
  ) && (e & 9) !== 0;
}
function O1(e) {
  return e === B.Hyphen || e === B.Underscore || Mn(e) || yt(e);
}
function Xh(e) {
  return C1.has(e);
}
function I1(e) {
  return Il(e) || yt(e) || x1.has(e) || w1.has(e);
}
function Lu(e) {
  return yt(e) ? !0 : (e &= -33, e >= 65 && e <= 70);
}
function Gh(e) {
  return k1.has(e);
}
function R1(e) {
  const t = e.peek(), i = q1(t);
  if (i) {
    const { pos: r } = e;
    return e.pos++, j1(t) ? (e.brackets[i]++, 1) : e.brackets[i] > 0 ? (e.brackets[i]--, 1) : Uh(e) ? (e.pos = r, 2) : 1;
  }
  return 0;
}
function q1(e) {
  switch (e) {
    case B.CurlyBracketOpen:
    case B.CurlyBracketClose:
      return "curly";
    case B.RoundBracketOpen:
    case B.RoundBracketClose:
      return "round";
    case B.SquareBracketOpen:
    case B.SquareBracketClose:
      return "square";
  }
}
function j1(e) {
  return e === B.CurlyBracketOpen || e === B.RoundBracketOpen || e === B.SquareBracketOpen;
}
function V1(e) {
  return S1.has(e);
}
function Co(e, t) {
  return {
    type: E.Link,
    format: L.None,
    value: e,
    link: t,
    auto: !0,
    sticky: !1
  };
}
function H1(e) {
  const { pos: t } = e;
  if (Zh(e)) {
    const i = e.substring(t);
    return e.push({
      type: E.Newline,
      format: L.None,
      value: i
    }), !0;
  }
}
function Zh(e) {
  return e.consume(B.Return) ? (e.consume(B.NewLine), !0) : e.consume(B.NewLine) || e.consume(B.LineFeed);
}
function W1(e) {
  const { pos: t } = e;
  if (!e.options.formula) return !1;
  if (Ut(e.peekPrev()) && e.consume(B.BackSlash))
    return console.log("FORMULA_CREATOR SLASH", e, e.atWordBound()), e.push({
      type: E.Formula,
      format: L.None,
      value: Bu(),
      event: Ti.Create,
      id: Math.random().toString(36).substring(7)
    }), !0;
  if (e.pos = t, e.atWordBound()) {
    if (Nf(e) && X1(e)) {
      console.log("FORMULA_CREATOR", e, e.atWordBound());
      const i = e.substring(t);
      return e.push({
        type: E.Formula,
        format: L.None,
        value: Bu(i),
        event: Ti.Create,
        id: Math.random().toString(36).substring(7),
        command: U1(i)
      }), !0;
    }
    e.pos = t;
  }
  return !1;
}
function U1(e) {
  if (!e) return;
  const { operator: t } = Yh(e), i = t.charCodeAt(0);
  if (i === B.Slash || i === B.Caret)
    return "moveToPreviousPlaceholder";
}
const J1 = [
  B.Plus,
  B.Hyphen,
  B.Asterisk,
  B.Slash,
  B.Caret
];
function X1(e) {
  return e.consume((t) => J1.includes(t));
}
function Kn(e) {
  return `$${e}$`;
}
function Bu(e) {
  if (!e) return Kn("\\placeholder{}");
  const { number: t, operator: i } = Yh(e), r = i.charCodeAt(0);
  return r === B.Asterisk ? Kn(`${t}\\cdot`) : r === B.Slash ? Kn(`\\frac{${t}}{\\placeholder{}}`) : r === B.Slash ? Kn(`${t}^\\placeholder{}`) : e;
}
function Yh(e) {
  const t = e.at(-1);
  return { number: e.slice(0, -1), operator: t };
}
function G1(e) {
  const { pos: t } = e;
  if (e.options.formula && e.peekPrev() !== B.Dollar && e.consume(B.Dollar)) {
    if (Z1(e) && e.consume(B.Dollar)) {
      const i = e.substring(t);
      return e.push({
        type: E.Formula,
        format: L.None,
        value: i,
        event: Ti.Update,
        id: Math.random().toString(36).substring(7)
      }), !0;
    }
    e.pos = t;
  }
  return !1;
}
function Z1(e) {
  return e.consumeWhile((t) => t !== B.Dollar && t !== B.Space);
}
function gt(e, t) {
  const i = Fe(Ch, t), r = new Dh(e, i), { linkProtocols: n } = i;
  let a;
  for (n && (a = Array.isArray(n) ? ql(n, !0) : n); r.hasNext(); )
    W1(r) || G1(r) || c1(r) || H1(r) || Xs(r) || Gs(r) || Kh(r) || $h(r) || Ph(r) || Nh(r) || Rh(r, a) || r.consumeText();
  r.flushText();
  let { tokens: o } = r;
  if (i.markdown && r.formatStack.length) {
    for (let s = 0, l; s < r.formatStack.length; s++)
      l = r.formatStack[s], l.format = L.None, l.type = E.Text;
    o = Lt(o);
  }
  return o;
}
var Y1 = Object.defineProperty, Q1 = Object.defineProperties, eg = Object.getOwnPropertyDescriptors, Qa = Object.getOwnPropertySymbols, Qh = Object.prototype.hasOwnProperty, ep = Object.prototype.propertyIsEnumerable, Au = (e, t, i) => t in e ? Y1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i, f = (e, t) => {
  for (var i in t || (t = {})) Qh.call(t, i) && Au(e, i, t[i]);
  if (Qa) for (var i of Qa(t)) ep.call(t, i) && Au(e, i, t[i]);
  return e;
}, b = (e, t) => Q1(e, eg(t)), Eu = (e) => typeof e == "symbol" ? e : e + "", eo = (e, t) => {
  var i = {};
  for (var r in e) Qh.call(e, r) && t.indexOf(r) < 0 && (i[r] = e[r]);
  if (e != null && Qa) for (var r of Qa(e)) t.indexOf(r) < 0 && ep.call(e, r) && (i[r] = e[r]);
  return i;
};
function Me(e) {
  return Array.isArray(e);
}
var tg = { en: { "keyboard.tooltip.symbols": "Symbols", "keyboard.tooltip.greek": "Greek Letters", "keyboard.tooltip.numeric": "Numeric", "keyboard.tooltip.alphabetic": "Roman Letters", "tooltip.copy to clipboard": "Copy to Clipboard", "tooltip.cut to clipboard": "Cut to Clipboard", "tooltip.paste from clipboard": "Paste from Clipboard", "tooltip.redo": "Redo", "tooltip.toggle virtual keyboard": "Toggle Virtual Keyboard", "tooltip.menu": "Menu", "tooltip.undo": "Undo", "menu.borders": "Borders", "menu.insert matrix": "Insert Matrix", "menu.array.add row above": "Add Row Before", "menu.array.add row below": "Add Row After", "menu.array.add column after": "Add Column After", "menu.array.add column before": "Add Column Before", "menu.array.delete row": "Delete Row", "menu.array.delete rows": "Delete Selected Rows", "menu.array.delete column": "Delete Column", "menu.array.delete columns": "Delete Selected Columns", "menu.mode": "Mode", "menu.mode-math": "Math", "menu.mode-text": "Text", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Blackboard", "tooltip.bold": "Bold", "tooltip.italic": "Italic", "tooltip.fraktur": "Fraktur", "tooltip.script": "Script", "tooltip.caligraphic": "Caligraphic", "tooltip.typewriter": "Typewriter", "tooltip.roman-upright": "Roman Upright", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Font Style", "menu.accent": "Accent", "menu.decoration": "Decoration", "menu.color": "Color", "menu.background-color": "Background", "menu.evaluate": "Evaluate", "menu.simplify": "Simplify", "menu.solve": "Solve", "menu.solve-for": "Solve for %@", "menu.cut": "Cut", "menu.copy": "Copy", "menu.copy-as-latex": "Copy as LaTeX", "menu.copy-as-ascii-math": "Copy as ASCII Math", "menu.copy-as-mathml": "Copy as MathML", "menu.paste": "Paste", "menu.select-all": "Select All", "color.red": "Red", "color.orange": "Orange", "color.yellow": "Yellow", "color.lime": "Lime", "color.green": "Green", "color.teal": "Teal", "color.cyan": "Cyan", "color.blue": "Blue", "color.indigo": "Indigo", "color.purple": "Purple", "color.magenta": "Magenta", "color.black": "Black", "color.dark-grey": "Dark Grey", "color.grey": "Grey", "color.light-grey": "Light Grey", "color.white": "White" }, ar: { "keyboard.tooltip.symbols": "حرف او رمز", "keyboard.tooltip.greek": "حروف يونانية", "keyboard.tooltip.numeric": "الرقمية", "keyboard.tooltip.alphabetic": "رموز الاحرف الرومانية", "tooltip.copy to clipboard": "نسخ إلى الحافظة", "tooltip.cut to clipboard": "قص إلى الحافظة", "tooltip.paste from clipboard": "لصق من الحافظة", "tooltip.redo": "الإعادة", "tooltip.toggle virtual keyboard": "تبديل لوحة المفاتيح الإفتراضية", "tooltip.undo": "إلغاء", "menu.insert matrix": "أدخل المصفوفة", "menu.borders": "محددات المصفوفة", "menu.array.add row above": "أضف صفًا بعد ذلك", "menu.array.add row below": "أضف الصف قبل", "menu.array.add column after": "أضف العمود بعد ذلك", "menu.array.add column before": "أضف العمود قبل", "menu.array.delete row": "احذف صف", "menu.array.delete rows": "حذف الصفوف المحددة", "menu.array.delete column": "حذف العمود", "menu.array.delete columns": "حذف الأعمدة المحددة", "menu.mode": "وضع", "menu.mode-math": "رياضيات", "menu.mode-text": "نص", "menu.mode-latex": "لاتكس", "tooltip.blackboard": "سبورة", "tooltip.bold": "عريض", "tooltip.italic": "مائل", "tooltip.fraktur": "فراكتور", "tooltip.script": "سكريبت", "tooltip.caligraphic": "كاليجرافيك", "tooltip.typewriter": "آلة كاتبة", "tooltip.roman-upright": "روماني مستقيم", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "نمط الخط", "menu.accent": "تشكيل", "menu.decoration": "زخرفة", "menu.color": "لون", "menu.background-color": "الخلفية", "menu.evaluate": "تقييم", "menu.simplify": "تبسيط", "menu.solve": "حل", "menu.solve-for": "حل لـ %@", "menu.cut": "قص", "menu.copy": "نسخ", "menu.copy-as-latex": "نسخ كـ LaTeX", "menu.copy-as-ascii-math": "نسخ كـ ASCII Math", "menu.copy-as-mathml": "نسخ كـ MathML", "menu.paste": "لصق", "menu.select-all": "تحديد الكل", "color.red": "أحمر", "color.orange": "برتقالي", "color.yellow": "أصفر", "color.lime": "ليموني", "color.green": "أخضر", "color.teal": "سماوي", "color.cyan": "سماوي فاتح", "color.blue": "أزرق", "color.indigo": "نيلي", "color.purple": "بنفسجي", "color.magenta": "أرجواني", "color.black": "أسود", "color.dark-grey": "رمادي غامق", "color.grey": "رمادي", "color.light-grey": "رمادي فاتح", "color.white": "أبيض" }, de: { "keyboard.tooltip.symbols": "Symbole", "keyboard.tooltip.greek": "Griechische Buchstaben", "keyboard.tooltip.numeric": "Numerisch", "keyboard.tooltip.alphabetic": "Römische Buchstaben", "tooltip.copy to clipboard": "In die Zwischenablage kopieren", "tooltip.redo": "Wiederholen", "tooltip.toggle virtual keyboard": "Virtuelle Tastatur umschalten", "tooltip.undo": "Widerrufen", "menu.insert matrix": "Matrix einfügen", "menu.borders": "Matrixtrennzeichen", "menu.array.add row above": "Zeile hinzufügen nach", "menu.array.add row below": "Zeile hinzufügen vor", "menu.array.add column after": "Spalte hinzufügen nach", "menu.array.add column before": "Spalte hinzufügen vor", "menu.array.delete row": "Zeile löschen", "menu.array.delete rows": "Ausgewählte Zeilen löschen", "menu.array.delete column": "Spalte löschen", "menu.array.delete columns": "Ausgewählte Spalten löschen", "menu.mode": "Modus", "menu.mode-math": "Mathematik", "menu.mode-text": "Text", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Tafel", "tooltip.bold": "Fett", "tooltip.italic": "Kursiv", "tooltip.fraktur": "Fraktur", "tooltip.script": "Skript", "tooltip.caligraphic": "Kalligraphie", "tooltip.typewriter": "Schreibmaschine", "tooltip.roman-upright": "Römisch aufrecht", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Schriftstil", "menu.accent": "Akzent", "menu.decoration": "Dekoration", "menu.color": "Farbe", "menu.background-color": "Hintergrund", "menu.evaluate": "Auswerten", "menu.simplify": "Vereinfachen", "menu.solve": "Lösen", "menu.solve-for": "Lösen für %@", "menu.cut": "Ausschneiden", "menu.copy": "Kopieren", "menu.copy-as-latex": "Als LaTeX kopieren", "menu.copy-as-ascii-math": "Als ASCII Math kopieren", "menu.copy-as-mathml": "Als MathML kopieren", "menu.paste": "Einfügen", "menu.select-all": "Alles auswählen", "color.red": "Rot", "color.orange": "Orange", "color.yellow": "Gelb", "color.lime": "Limette", "color.green": "Grün", "color.teal": "Blaugrün", "color.cyan": "Cyan", "color.blue": "Blau", "color.indigo": "Indigo", "color.purple": "Lila", "color.magenta": "Magenta", "color.black": "Schwarz", "color.dark-grey": "Dunkelgrau", "color.grey": "Grau", "color.light-grey": "Hellgrau", "color.white": "Weiß" }, el: { "keyboard.tooltip.symbols": "σύμβολα", "keyboard.tooltip.greek": "ελληνικά γράμματα", "keyboard.tooltip.numeric": "Αριθμητικός", "keyboard.tooltip.alphabetic": "Ρωμαϊκά γράμματα", "tooltip.copy to clipboard": "Αντιγραφή στο πρόχειρο", "tooltip.redo": "Ξανακάνω", "tooltip.toggle virtual keyboard": "Εναλλαγή εικονικού πληκτρολογίου", "tooltip.undo": "Ξεκάνω", "menu.insert matrix": "Εισαγωγή μήτρα", "menu.borders": "Οριοθέτες μήτρα", "menu.array.add row above": "Προσθήκη σειράς μετά", "menu.array.add row below": "Προσθήκη σειράς πριν", "menu.array.add column after": "Προσθήκη στήλης μετά", "menu.array.add column before": "Προσθήκη στήλης πριν", "menu.array.delete row": "Διαγραφή σειράς", "menu.array.delete rows": "Διαγραφή επιλεγμένων σειρών", "menu.array.delete column": "Διαγραφή στήλης", "menu.array.delete columns": "Διαγραφή επιλεγμένων στηλών", "menu.mode": "Λειτουργία", "menu.mode-math": "Μαθηματικά", "menu.mode-text": "Κείμενο", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Πίνακας", "tooltip.bold": "Έντονη", "tooltip.italic": "Πλάγια", "tooltip.fraktur": "Φράκτουρ", "tooltip.script": "Σενάριο", "tooltip.caligraphic": "Καλλιγραφική", "tooltip.typewriter": "Μηχανή γραφής", "tooltip.roman-upright": "Ρωμαϊκό Κατακόρυφο", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Στυλ γραμματοσειράς", "menu.accent": "Τόνος", "menu.decoration": "Διακόσμηση", "menu.color": "Χρώμα", "menu.background-color": "Χρώμα φόντου", "menu.evaluate": "Αξιολόγηση", "menu.simplify": "Απλοποίηση", "menu.solve": "Λύση", "menu.solve-for": "Λύση για %@", "menu.cut": "Αποκοπή", "menu.copy": "Αντιγραφή", "menu.copy-as-latex": "Αντιγραφή ως LaTeX", "menu.copy-as-ascii-math": "Αντιγραφή ως ASCII Math", "menu.copy-as-mathml": "Αντιγραφή ως MathML", "menu.paste": "Επικόλληση", "menu.select-all": "Επιλογή όλων", "color.red": "Κόκκινο", "color.orange": "Πορτοκαλί", "color.yellow": "Κίτρινο", "color.lime": "Λαχανί", "color.green": "Πράσινο", "color.teal": "Κυανό", "color.cyan": "Γαλάζιο", "color.blue": "Μπλε", "color.indigo": "Ινδικό", "color.purple": "Μωβ", "color.magenta": "Ματζέντα", "color.black": "Μαύρο", "color.dark-grey": "Σκούρο Γκρι", "color.grey": "Γκρι", "color.light-grey": "Ανοιχτό Γκρι", "color.white": "Λευκό" }, es: { "keyboard.tooltip.symbols": "Símbolos", "keyboard.tooltip.greek": "Letras griegas", "keyboard.tooltip.numeric": "Numérico", "keyboard.tooltip.alphabetic": "Letras romanas", "tooltip.copy to clipboard": "Copiar al portapapeles", "tooltip.redo": "Rehacer", "tooltip.toggle virtual keyboard": "Alternar teclado virtual", "tooltip.undo": "Deshacer", "menu.insert matrix": "Añadir Matriz", "menu.borders": "Delimitadores de Matriz", "menu.array.add row above": "Añadir Línea Antes", "menu.array.add row below": "Añadir Línea Despues", "menu.array.add column after": "Añadir Columna Despues", "menu.array.add column before": "Añadir Columna Antes", "menu.array.delete row": "Borrar Línea", "menu.array.delete rows": "Borrar Líneas Seleccionadas", "menu.array.delete column": "Borrar Columna", "menu.array.delete columns": "Borrar Columnas Seleccionadas", "menu.mode": "Modo", "menu.mode-math": "Matemáticas", "menu.mode-text": "Texto", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Pizarra", "tooltip.bold": "Negrita", "tooltip.italic": "Cursiva", "tooltip.fraktur": "Fraktur", "tooltip.script": "Script", "tooltip.caligraphic": "Caligráfico", "tooltip.typewriter": "Máquina de escribir", "tooltip.roman-upright": "Romano Vertical", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Estilo de fuente", "menu.accent": "Acento", "menu.decoration": "Decoración", "menu.color": "Color", "menu.background-color": "Fondo", "menu.evaluate": "Evaluar", "menu.simplify": "Simplificar", "menu.solve": "Resolver", "menu.solve-for": "Resolver para %@", "menu.cut": "Cortar", "menu.copy": "Copiar", "menu.copy-as-latex": "Copiar como LaTeX", "menu.copy-as-ascii-math": "Copiar como ASCII Math", "menu.copy-as-mathml": "Copiar como MathML", "menu.paste": "Pegar", "menu.select-all": "Seleccionar todo", "color.red": "Rojo", "color.orange": "Naranja", "color.yellow": "Amarillo", "color.lime": "Lima", "color.green": "Verde", "color.teal": "Verde azulado", "color.cyan": "Cian", "color.blue": "Azul", "color.indigo": "Índigo", "color.purple": "Morado", "color.magenta": "Magenta", "color.black": "Negro", "color.dark-grey": "Gris oscuro", "color.grey": "Gris", "color.light-grey": "Gris claro", "color.white": "Blanco" }, fr: { "keyboard.tooltip.symbols": "Symboles", "keyboard.tooltip.greek": "Lettres grecques", "keyboard.tooltip.numeric": "Numérique", "keyboard.tooltip.alphabetic": "Lettres romaines", "tooltip.menu": "Menu", "tooltip.copy to clipboard": "Copier dans le presse-papiers", "tooltip.redo": "Rétablir", "tooltip.toggle virtual keyboard": "Afficher/Masquer le clavier virtuel", "tooltip.undo": "Annuler", "menu.insert matrix": "Insérer une Matrice", "menu.borders": "Bords", "menu.array.add row above": "Ajouter une Ligne Avant", "menu.array.add row below": "Ajouter une Ligne Après", "menu.array.add column before": "Ajouter une Colonne Avant", "menu.array.add column after": "Ajouter une Colonne Après", "menu.array.delete row": "Enlever une Ligne", "menu.array.delete rows": "Enlever les Lignes Sélectionées", "menu.array.delete column": "Enlever une Colone", "menu.array.delete columns": "Enlever les Colonnes Sélectionées", "menu.mode": "Mode", "menu.mode-math": "Math", "menu.mode-text": "Text", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Tableau noir", "tooltip.bold": "Gras", "tooltip.italic": "Italique", "tooltip.fraktur": "Fraktur", "tooltip.script": "Script", "tooltip.caligraphic": "Calligraphique", "tooltip.typewriter": "Machine à écrire", "tooltip.roman-upright": "Romain droit", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Style de police", "menu.accent": "Accent", "menu.decoration": "Décoration", "menu.color": "Couleur", "menu.background-color": "Arrière-plan", "menu.evaluate": "Évaluer", "menu.simplify": "Simplifier", "menu.solve": "Résoudre", "menu.solve-for": "Résoudre pour %@", "menu.cut": "Couper", "menu.copy": "Copier", "menu.copy-as-latex": "Copier en LaTeX", "menu.copy-as-ascii-math": "Copier en ASCII Math", "menu.copy-as-mathml": "Copier en MathML", "menu.paste": "Coller", "menu.select-all": "Sélectionner tout", "color.red": "Rouge", "color.orange": "Orange", "color.yellow": "Jaune", "color.lime": "Citron vert", "color.green": "Vert", "color.teal": "Turquoise", "color.cyan": "Cyan", "color.blue": "Bleu", "color.indigo": "Indigo", "color.purple": "Violet", "color.magenta": "Magenta", "color.black": "Noir", "color.dark-grey": "Gris foncé", "color.grey": "Gris", "color.light-grey": "Gris clair", "color.white": "Blanc" }, he: { "keyboard.tooltip.symbols": "סמלים", "keyboard.tooltip.greek": "אותיות יווניות", "keyboard.tooltip.numeric": "מספרי", "keyboard.tooltip.alphabetic": "מכתבים רומיים", "tooltip.copy to clipboard": "העתק ללוח", "tooltip.redo": "לַעֲשׂוֹת שׁוּב", "tooltip.toggle virtual keyboard": "החלף את המקלדת הווירטואלית", "tooltip.undo": "לבטל", "menu.insert matrix": "הכנס מטריקס", "menu.borders": "מפרידי מטריקס", "menu.array.add row above": "הוסף שורה אחרי", "menu.array.add row below": "הוסף שורה לפני", "menu.array.add column after": "הוסף עמודה אחרי", "menu.array.add column before": "הוסף עמודה לפני", "menu.array.delete row": "מחק שורה", "menu.array.delete rows": "מחק שורות שנבחרו", "menu.array.delete column": "מחק עמודה", "menu.array.delete columns": "מחק עמודות שנבחרו", "menu.mode": "מצב", "menu.mode-math": "מתמטיקה", "menu.mode-text": "טקסט", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "לוח שחור", "tooltip.bold": "מודגש", "tooltip.italic": "נטוי", "tooltip.fraktur": "פרקטור", "tooltip.script": "כתב", "tooltip.caligraphic": "קליגרפי", "tooltip.typewriter": "מכונת כתיבה", "tooltip.roman-upright": "רומי ישר", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "סגנון גופן", "menu.accent": "צליל", "menu.decoration": "קישוט", "menu.color": "צבע", "menu.background-color": "רקע", "menu.evaluate": "חשב", "menu.simplify": "פשט", "menu.solve": "פתור", "menu.solve-for": "פתור עבור %@", "menu.cut": "גזור", "menu.copy": "העתק", "menu.copy-as-latex": "העתק כ־LaTeX", "menu.copy-as-ascii-math": "העתק כ־ASCII Math", "menu.copy-as-mathml": "העתק כ־MathML", "menu.paste": "הדבק", "menu.select-all": "בחר הכל", "color.red": "אדום", "color.orange": "כתום", "color.yellow": "צהוב", "color.lime": "ירוק ליים", "color.green": "ירוק", "color.teal": "טיל", "color.cyan": "ציאן", "color.blue": "כחול", "color.indigo": "אינדיגו", "color.purple": "סגול", "color.magenta": "מגנטה", "color.black": "שחור", "color.dark-grey": "אפור כהה", "color.grey": "אפור", "color.light-grey": "אפור בהיר", "color.white": "לבן" }, it: { "keyboard.tooltip.symbols": "Simboli", "keyboard.tooltip.greek": "Lettere greche", "keyboard.tooltip.numeric": "Numerico", "keyboard.tooltip.alphabetic": "Lettere romane", "tooltip.copy to clipboard": "Copia negli appunti", "tooltip.redo": "Rifare", "tooltip.toggle virtual keyboard": "Attiva / disattiva la tastiera virtuale", "tooltip.undo": "Disfare", "menu.insert matrix": "Inserisci una Matrice", "menu.borders": "Delimitatori di Matrice", "menu.array.add row above": "Aggiungi una Riga Prima", "menu.array.add row below": "Aggiungi una Riga Dopo", "menu.array.add column before": "Aggiungi una Colonna Prima", "menu.array.add column after": "Aggiungi una Colonna Dopo", "menu.array.delete row": "Rimuovi una Riga", "menu.array.delete rows": "Rimuovi le Righe Selezionate", "menu.array.delete column": "Rimuovi una Colonna", "menu.array.delete columns": "Rimuovi le Colonne Selezionate", "menu.mode": "Modalità", "menu.mode-math": "Matematica", "menu.mode-text": "Testo", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Lavagna", "tooltip.bold": "Grassetto", "tooltip.italic": "Corsivo", "tooltip.fraktur": "Fraktur", "tooltip.script": "Script", "tooltip.caligraphic": "Caligrafico", "tooltip.typewriter": "Macchina da scrivere", "tooltip.roman-upright": "Romano dritto", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Stile del carattere", "menu.accent": "Accento", "menu.decoration": "Decorazione", "menu.color": "Colore", "menu.background-color": "Sfondo", "menu.evaluate": "Valuta", "menu.simplify": "Semplifica", "menu.solve": "Risolvi", "menu.solve-for": "Risolvi per %@", "menu.cut": "Taglia", "menu.copy": "Copia", "menu.copy-as-latex": "Copia come LaTeX", "menu.copy-as-ascii-math": "Copia come ASCII Math", "menu.copy-as-mathml": "Copia come MathML", "menu.paste": "Incolla", "menu.select-all": "Seleziona tutto", "color.red": "Rosso", "color.orange": "Arancione", "color.yellow": "Giallo", "color.lime": "Lime", "color.green": "Verde", "color.teal": "Verde acqua", "color.cyan": "Ciano", "color.blue": "Blu", "color.indigo": "Indaco", "color.purple": "Viola", "color.magenta": "Magenta", "color.black": "Nero", "color.dark-grey": "Grigio scuro", "color.grey": "Grigio", "color.light-grey": "Grigio chiaro", "color.white": "Bianco" }, ja: { "keyboard.tooltip.symbols": "シンボル", "keyboard.tooltip.greek": "ギリシャ文字", "keyboard.tooltip.numeric": "数値", "keyboard.tooltip.alphabetic": "ローマ字", "tooltip.menu": "メニュー", "tooltip.copy to clipboard": "クリップボードにコピー", "tooltip.redo": "やり直し", "tooltip.toggle virtual keyboard": "仮想キーボードの切り替え", "tooltip.undo": "元に戻す", "menu.insert matrix": "マトリックスを挿入", "menu.borders": "行列区切り文字", "menu.array.add row above": "後に行を追加", "menu.array.add row below": "前に行を追加", "menu.array.add column after": "後に列を追加", "menu.array.add column before": "前に列を追加", "menu.array.delete row": "行を削除", "menu.array.delete rows": "選択した行を削除する", "menu.array.delete column": "列を削除", "menu.array.delete columns": "選択した列を削除する", "menu.mode": "モード", "menu.mode-math": "数式", "menu.mode-text": "テキスト", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "黒板", "tooltip.bold": "太字", "tooltip.italic": "イタリック", "tooltip.fraktur": "フラクトゥール", "tooltip.script": "スクリプト", "tooltip.caligraphic": "カリグラフィック", "tooltip.typewriter": "タイプライター", "tooltip.roman-upright": "ローマ直立", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "フォントスタイル", "menu.accent": "アクセント", "menu.decoration": "装飾", "menu.color": "色", "menu.background-color": "背景", "menu.evaluate": "評価", "menu.simplify": "簡略化", "menu.solve": "解く", "menu.solve-for": "%@ を解く", "menu.cut": "切り取り", "menu.copy": "コピー", "menu.copy-as-latex": "LaTeXとしてコピー", "menu.copy-as-ascii-math": "ASCII Mathとしてコピー", "menu.copy-as-mathml": "MathMLとしてコピー", "menu.paste": "貼り付け", "menu.select-all": "すべて選択", "color.red": "赤", "color.orange": "オレンジ", "color.yellow": "黄色", "color.lime": "ライム", "color.green": "緑", "color.teal": "ティール", "color.cyan": "シアン", "color.blue": "青", "color.indigo": "インディゴ", "color.purple": "紫", "color.magenta": "マゼンタ", "color.black": "黒", "color.dark-grey": "濃いグレー", "color.grey": "グレー", "color.light-grey": "薄いグレー", "color.white": "白" }, ko: { "keyboard.tooltip.symbols": "기호", "keyboard.tooltip.greek": "그리스 문자", "keyboard.tooltip.numeric": "숫자", "keyboard.tooltip.alphabetic": "로마 문자", "tooltip.copy to clipboard": "클립 보드에 복사", "tooltip.redo": "다시 하다", "tooltip.toggle virtual keyboard": "가상 키보드 전환", "tooltip.undo": "실행 취소", "menu.insert matrix": "매트릭스 삽입", "menu.borders": "행렬 구분 기호", "menu.array.add row above": "뒤에 행 추가", "menu.array.add row below": "앞에 행 추가", "menu.array.add column after": "뒤에 열 추가", "menu.array.add column before": "앞에 열 추가", "menu.array.delete row": "행 삭제", "menu.array.delete rows": "선택한 행 삭제", "menu.array.delete column": "열 삭제", "menu.array.delete columns": "선택한 열 삭제", "menu.mode": "モード", "menu.mode-math": "数式", "menu.mode-text": "テキスト", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "칠판", "tooltip.bold": "굵게", "tooltip.italic": "이탤릭", "tooltip.fraktur": "프랙투어", "tooltip.script": "스크립트", "tooltip.caligraphic": "캘리그래픽", "tooltip.typewriter": "타자기", "tooltip.roman-upright": "로마 직립", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "글꼴 스타일", "menu.accent": "악센트", "menu.decoration": "장식", "menu.color": "색상", "menu.background-color": "배경", "menu.evaluate": "평가", "menu.simplify": "간소화", "menu.solve": "해결", "menu.solve-for": "%@에 대해 해결", "menu.cut": "잘라내기", "menu.copy": "복사", "menu.copy-as-latex": "LaTeX로 복사", "menu.copy-as-ascii-math": "ASCII Math로 복사", "menu.copy-as-mathml": "MathML로 복사", "menu.paste": "붙여넣기", "menu.select-all": "모두 선택", "color.red": "빨강", "color.orange": "주황", "color.yellow": "노랑", "color.lime": "라임", "color.green": "초록", "color.teal": "청록", "color.cyan": "청색", "color.blue": "파랑", "color.indigo": "남색", "color.purple": "보라", "color.magenta": "자홍", "color.black": "검정", "color.dark-grey": "진한 회색", "color.grey": "회색", "color.light-grey": "연한 회색", "color.white": "흰색" }, pl: { "keyboard.tooltip.symbols": "Symbolika", "keyboard.tooltip.greek": "Litery greckie", "keyboard.tooltip.numeric": "Numeryczne", "keyboard.tooltip.alphabetic": "Litery rzymskie", "tooltip.copy to clipboard": "Kopiuj do Schowka", "tooltip.redo": "Przywróć", "tooltip.toggle virtual keyboard": "Przełącz wirtualną klawiaturę", "tooltip.undo": "Cofnij", "menu.insert matrix": "Wstaw macierz", "menu.borders": "Ograniczniki macierzy", "menu.array.add row above": "Dodaj wiersz po", "menu.array.add row below": "Dodaj wiersz przed", "menu.array.add column after": "Dodaj kolumnę po", "menu.array.add column before": "Dodaj kolumnę przed", "menu.array.delete row": "Usuń wiersz", "menu.array.delete rows": "Usuń wybrane wiersze", "menu.array.delete column": "Usuń kolumnę", "menu.array.delete columns": "Usuń wybrane kolumny", "menu.mode": "Tryb", "menu.mode-math": "Formuła", "menu.mode-text": "Tekst", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Tablica", "tooltip.bold": "Pogrubienie", "tooltip.italic": "Kursywa", "tooltip.fraktur": "Fraktura", "tooltip.script": "Skrypt", "tooltip.caligraphic": "Kaligraficzny", "tooltip.typewriter": "Maszynowy", "tooltip.roman-upright": "Rzymski prosto", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Styl czcionki", "menu.accent": "Akcent", "menu.decoration": "Dekoracja", "menu.color": "Kolor", "menu.background-color": "Tło", "menu.evaluate": "Oblicz", "menu.simplify": "Uprość", "menu.solve": "Rozwiąż", "menu.solve-for": "Rozwiąż dla %@", "menu.cut": "Wytnij", "menu.copy": "Kopiuj", "menu.copy-as-latex": "Kopiuj jako LaTeX", "menu.copy-as-ascii-math": "Kopiuj jako ASCII Math", "menu.copy-as-mathml": "Kopiuj jako MathML", "menu.paste": "Wklej", "menu.select-all": "Zaznacz wszystko", "color.red": "Czerwony", "color.orange": "Pomarańczowy", "color.yellow": "Żółty", "color.lime": "Limetkowy", "color.green": "Zielony", "color.teal": "Turkusowy", "color.cyan": "Cyjan", "color.blue": "Niebieski", "color.indigo": "Indygo", "color.purple": "Fioletowy", "color.magenta": "Magenta", "color.black": "Czarny", "color.dark-grey": "Ciemnoszary", "color.grey": "Szary", "color.light-grey": "Jasnoszary", "color.white": "Biały" }, pt: { "keyboard.tooltip.symbols": "Símbolos", "keyboard.tooltip.greek": "Letras gregas", "keyboard.tooltip.numeric": "Numérico", "keyboard.tooltip.alphabetic": "Letras romanas", "tooltip.copy to clipboard": "Copiar para área de transferência", "tooltip.redo": "Refazer", "tooltip.toggle virtual keyboard": "Alternar teclado virtual", "tooltip.undo": "Desfazer", "menu.insert matrix": "Inserir Matriz", "menu.borders": "Delimitadores de matriz", "menu.array.add row above": "Adicionar linha depois", "menu.array.add row below": "Adicionar linha antes", "menu.array.add column after": "Adicionar coluna depois", "menu.array.add column before": "Adicionar coluna antes", "menu.array.delete row": "Excluir linha", "menu.array.delete rows": "Excluir linhas selecionadas", "menu.array.delete column": "Apagar Coluna", "menu.array.delete columns": "Excluir Colunas Selecionadas", "menu.mode": "Modo", "menu.mode-math": "Fórmula", "menu.mode-text": "Texto", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Quadro Negro", "tooltip.bold": "Negrito", "tooltip.italic": "Itálico", "tooltip.fraktur": "Fraktur", "tooltip.script": "Script", "tooltip.caligraphic": "Caligráfico", "tooltip.typewriter": "Máquina de Escrever", "tooltip.roman-upright": "Romano Vertical", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Estilo da Fonte", "menu.accent": "Acento", "menu.decoration": "Decoração", "menu.color": "Cor", "menu.background-color": "Cor de Fundo", "menu.evaluate": "Avaliar", "menu.simplify": "Simplificar", "menu.solve": "Resolver", "menu.solve-for": "Resolver para %@", "menu.cut": "Recortar", "menu.copy": "Copiar", "menu.copy-as-latex": "Copiar como LaTeX", "menu.copy-as-ascii-math": "Copiar como ASCII Math", "menu.copy-as-mathml": "Copiar como MathML", "menu.paste": "Colar", "menu.select-all": "Selecionar Tudo", "color.red": "Vermelho", "color.orange": "Laranja", "color.yellow": "Amarelo", "color.lime": "Verde Lima", "color.green": "Verde", "color.teal": "Verde-azulado", "color.cyan": "Ciano", "color.blue": "Azul", "color.indigo": "Índigo", "color.purple": "Roxo", "color.magenta": "Magenta", "color.black": "Preto", "color.dark-grey": "Cinza Escuro", "color.grey": "Cinza", "color.light-grey": "Cinza Claro", "color.white": "Branco" }, uk: { "keyboard.tooltip.symbols": "Символи", "keyboard.tooltip.greek": "Грецькі літери", "keyboard.tooltip.numeric": "Числовий", "keyboard.tooltip.alphabetic": "Римські літери", "tooltip.copy to clipboard": "Копіювати в буфер обміну", "tooltip.redo": "Повторити", "tooltip.toggle virtual keyboard": "Переключити віртуальну клавіатуру", "tooltip.undo": "Скасувати", "menu.insert matrix": "Вставити матрицю", "menu.borders": "Матричні роздільники", "menu.array.add row above": "Додати рядок після", "menu.array.add row below": "Додати рядок до", "menu.array.add column after": "Додати стовпець після", "menu.array.add column before": "Додати стовпець перед", "menu.array.delete row": "Видалити рядок", "menu.array.delete rows": "Видалити вибрані рядки", "menu.array.delete column": "Видалити стовпець", "menu.array.delete columns": "Видалити вибрані стовпці", "menu.mode": "Режим", "menu.mode-math": "Математика", "menu.mode-text": "Текст", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "Чорна дошка", "tooltip.bold": "Жирний", "tooltip.italic": "Курсив", "tooltip.fraktur": "Фрактурний", "tooltip.script": "Скрипт", "tooltip.caligraphic": "Каліграфічний", "tooltip.typewriter": "Машинка для письма", "tooltip.roman-upright": "Римський прямий", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "Стиль шрифту", "menu.accent": "Акцент", "menu.decoration": "Декорація", "menu.color": "Колір", "menu.background-color": "Фон", "menu.evaluate": "Обчислити", "menu.simplify": "Спростити", "menu.solve": "Вирішити", "menu.solve-for": "Вирішити для %@", "menu.cut": "Вирізати", "menu.copy": "Копіювати", "menu.copy-as-latex": "Копіювати як LaTeX", "menu.copy-as-ascii-math": "Копіювати як ASCII Math", "menu.copy-as-mathml": "Копіювати як MathML", "menu.paste": "Вставити", "menu.select-all": "Вибрати все", "color.red": "Червоний", "color.orange": "Помаранчевий", "color.yellow": "Жовтий", "color.lime": "Лайм", "color.green": "Зелений", "color.teal": "Бірюзовий", "color.cyan": "Синьо-зелений", "color.blue": "Синій", "color.indigo": "Індиго", "color.purple": "Фіолетовий", "color.magenta": "Пурпурний", "color.black": "Чорний", "color.dark-grey": "Темно-сірий", "color.grey": "Сірий", "color.light-grey": "Світло-сірий", "color.white": "Білий" }, zh_cn: { "keyboard.tooltip.symbols": "符号", "keyboard.tooltip.greek": "希腊字母", "keyboard.tooltip.numeric": "数字", "keyboard.tooltip.alphabetic": "罗马字母", "tooltip.copy to clipboard": "复制到剪贴板", "tooltip.redo": "重做", "tooltip.toggle virtual keyboard": "切换虚拟键盘", "tooltip.undo": "撤消", "menu.insert matrix": "插入矩阵", "menu.borders": "矩阵分隔符", "menu.array.add row above": "在后面添加行", "menu.array.add row below": "在前面添加行", "menu.array.add column after": "在后面添加列r", "menu.array.add column before": "在前面添加列", "menu.array.delete row": "删除行", "menu.array.delete rows": "删除选定行", "menu.array.delete column": "删除列", "menu.array.delete columns": "删除选定的列", "menu.mode": "模式", "menu.mode-math": "数学", "menu.mode-text": "文本", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "黑板", "tooltip.bold": "粗体", "tooltip.italic": "斜体", "tooltip.fraktur": "Fraktur", "tooltip.script": "脚本", "tooltip.caligraphic": "草书", "tooltip.typewriter": "打字机", "tooltip.roman-upright": "罗马直立", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "字体样式", "menu.accent": "重音", "menu.decoration": "装饰", "menu.color": "颜色", "menu.background-color": "背景", "menu.evaluate": "计算", "menu.simplify": "简化", "menu.solve": "求解", "menu.solve-for": "求解 %@", "menu.cut": "剪切", "menu.copy": "复制", "menu.copy-as-latex": "复制为 LaTeX", "menu.copy-as-ascii-math": "复制为 ASCII Math", "menu.copy-as-mathml": "复制为 MathML", "menu.paste": "粘贴", "menu.select-all": "全选", "color.red": "红色", "color.orange": "橙色", "color.yellow": "黄色", "color.lime": "绿黄色", "color.green": "绿色", "color.teal": "青色", "color.cyan": "蓝绿色", "color.blue": "蓝色", "color.indigo": "靛蓝色", "color.purple": "紫色", "color.magenta": "洋红色", "color.black": "黑色", "color.dark-grey": "深灰色", "color.grey": "灰色", "color.light-grey": "浅灰色", "color.white": "白色" }, zh_tw: { "keyboard.tooltip.symbols": "符號", "keyboard.tooltip.greek": "希臘字母", "keyboard.tooltip.numeric": "數字", "keyboard.tooltip.alphabetic": "羅馬字母", "tooltip.copy to clipboard": "複製到剪貼板", "tooltip.redo": "重做", "tooltip.toggle virtual keyboard": "切換虛擬鍵盤", "tooltip.undo": "撤消", "menu.insert matrix": "插入矩陣", "menu.borders": "矩陣分隔符", "menu.array.add row above": "在後面添加行", "menu.array.add row below": "在前面添加行", "menu.array.add column after": "在後面添加列", "menu.array.add column before": "在前面添加列", "menu.array.delete row": "刪除行", "menu.array.delete rows": "刪除選定行", "menu.array.delete column": "刪除列", "menu.array.delete columns": "刪除選定的列", "menu.mode": "模式", "menu.mode-math": "數學", "menu.mode-text": "文本", "menu.mode-latex": "LaTeX", "tooltip.blackboard": "黑板", "tooltip.bold": "粗體", "tooltip.italic": "斜體", "tooltip.fraktur": "Fraktur", "tooltip.script": "腳本", "tooltip.caligraphic": "草書", "tooltip.typewriter": "打字機", "tooltip.roman-upright": "羅馬直立", "tooltip.row-by-col": "%@ × %@", "menu.font-style": "字體樣式", "menu.accent": "重音", "menu.decoration": "裝飾", "menu.color": "顏色", "menu.background-color": "背景", "menu.evaluate": "計算", "menu.simplify": "簡化", "menu.solve": "求解", "menu.solve-for": "求解 %@", "menu.cut": "剪下", "menu.copy": "複製", "menu.copy-as-latex": "複製為 LaTeX", "menu.copy-as-ascii-math": "複製為 ASCII Math", "menu.copy-as-mathml": "複製為 MathML", "menu.paste": "貼上", "menu.select-all": "全選", "color.red": "紅色", "color.orange": "橙色", "color.yellow": "黃色", "color.lime": "綠黃色", "color.green": "綠色", "color.teal": "青色", "color.cyan": "藍綠色", "color.blue": "藍色", "color.indigo": "靛藍色", "color.purple": "紫色", "color.magenta": "洋紅色", "color.black": "黑色", "color.dark-grey": "深灰色", "color.grey": "灰色", "color.light-grey": "淺灰色", "color.white": "白色" } };
function Re() {
  return "window" in globalThis && "document" in globalThis;
}
function ig() {
  return "matchMedia" in window ? window.matchMedia("(pointer: coarse)").matches : "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
function tp() {
  return typeof navigator.vibrate == "function";
}
function Cr() {
  var e, t;
  if (!Re()) return "other";
  let i = (t = (e = navigator.userAgentData) == null ? void 0 : e.platform) != null ? t : navigator.platform;
  return /^mac/i.test(i) ? navigator.maxTouchPoints === 5 ? "ios" : "macos" : /^win/i.test(i) ? "windows" : /android/i.test(navigator.userAgent) ? "android" : /iphone|ipod|ipad/i.test(navigator.userAgent) ? "ios" : /\bcros\b/i.test(navigator.userAgent) ? "chromeos" : "other";
}
function rg() {
  if (!Re()) return !0;
  if (/firefox/i.test(navigator.userAgent)) {
    let e = navigator.userAgent.match(/firefox\/(\d+)/i);
    return e ? parseInt(e[1]) >= 78 : !1;
  }
  if (/trident/i.test(navigator.userAgent)) return !1;
  if (/edge/i.test(navigator.userAgent)) {
    let e = navigator.userAgent.match(/edg\/(\d+)/i);
    return e ? parseInt(e[1]) >= 79 : !1;
  }
  return !0;
}
function Du() {
  return HTMLElement.prototype.hasOwnProperty("popover");
}
var N = { strings: tg, _locale: "", _dirty: !1, _subscribers: [], _numberFormatter: void 0, get locale() {
  return N._locale || (N._locale = Re() ? navigator.language.slice(0, 5) : "en-US"), N._locale;
}, set locale(e) {
  N._locale = e, N._numberFormatter = void 0, N.dirty = !0;
}, get numberFormatter() {
  return N._numberFormatter || (N._numberFormatter = new Intl.NumberFormat(N.locale)), N._numberFormatter;
}, merge(e, t) {
  if (typeof e == "string" && t) N.strings[e] = f(f({}, N.strings[e]), t), N.dirty = !0;
  else for (let i of Object.keys(e)) N.merge(i, e[i]);
}, get dirty() {
  return N._dirty;
}, set dirty(e) {
  N._dirty || N._dirty === e || (N._dirty = !0, setTimeout(() => {
    N._dirty = !1, this._subscribers.forEach((t) => t == null ? void 0 : t());
  }, 0));
}, subscribe(e) {
  return N._subscribers.push(e), N._subscribers.length - 1;
}, unsubscribe(e) {
  e < 0 || e >= N._subscribers.length || (N._subscribers[e] = void 0);
}, update(e) {
  let t = e.querySelectorAll("[data-l10n-tooltip]");
  for (let i of t) {
    let r = i.getAttribute("data-l10n-tooltip");
    if (r) {
      let n = $(r);
      n && i.setAttribute("data-tooltip", n);
    }
  }
  t = e.querySelectorAll("[data-l10n-arial-label]");
  for (let i of t) {
    let r = i.getAttribute("data-l10n-arial-label");
    if (r) {
      let n = $(r);
      n && i.setAttribute("aria-label", n);
    }
  }
} };
function $(e, ...t) {
  if (e === void 0) return;
  let i = "", r = N.locale;
  N.strings[r] && (i = N.strings[r][e]);
  let n = r.slice(0, 2);
  if (!i && N.strings[n] && (i = N.strings[n][e]), i || (i = N.strings.en[e]), !i) return;
  let a = /(%@|%([0-9]+)\$@)/g, o = a.exec(i), s = 0;
  for (; o; ) {
    if (t[s++]) {
      let l = o[2] ? parseInt(o[2], 10) - 1 : s - 1, u = t[l];
      typeof u == "number" && (u = N.numberFormatter.format(u)), i = i.replace(o[1], u);
    }
    o = a.exec(i);
  }
  return i = i.replace(/%%/g, "%"), i;
}
var ng = { m0: "#3F3D99", m1: "#993D71", m2: "#998B3D", m3: "#3D9956", m4: "#3D5A99", m5: "#993D90", m6: "#996D3D", m7: "#43993D", m8: "#3D7999", m9: "#843D99" }, ag = { blue: "#0072BD", orange: "#D95319", yellow: "#EDB120", purple: "#7E2F8E", green: "#77AC30", cyan: "#4DBEEE", red: "#A2142F" }, Bi = { red: "#fbbbb6", orange: "#ffe0c2", yellow: "#fff1c2", lime: "#d0e8b9", green: "#bceac4", teal: "#b9f1f1", cyan: "#b8e5c9", blue: "#b6d9fb", indigo: "#d1c2f0", purple: "#e3baf8", magenta: "#f9c8e0", black: "#353535", "dark-grey": "#8C8C8C", grey: "#D0D0D0", "light-grey": "#F0F0F0", white: "#ffffff" }, Ai = { red: "#d7170b", orange: "#fe8a2b", yellow: "#ffc02b", lime: "#63b215", green: "#21ba3a", teal: "#17cfcf", cyan: "#13a7ec", blue: "#0d80f2", indigo: "#63c", purple: "#a219e6", magenta: "#eb4799", black: "#000", "dark-grey": "#666", grey: "#A6A6A6", "light-grey": "#d4d5d2", white: "#ffffff" }, ip = { Red: "red", Orange: "orange", Yellow: "yellow", LimeGreen: "lime", Green: "green", TealBlue: "teal", Blue: "blue", Violet: "indigo", Purple: "purple", Magenta: "magenta", Black: "black", Gray: "grey", White: "white" }, og = { Apricot: "#FBB982", Aquamarine: "#00B5BE", Bittersweet: "#C04F17", Black: "#221E1F", Blue: "#2D2F92", BlueGreen: "#00B3B8", BlueViolet: "#473992", BrickRed: "#B6321C", Brown: "#792500", BurntOrange: "#F7921D", CadetBlue: "#74729A", CarnationPink: "#F282B4", Cerulean: "#00A2E3", CornflowerBlue: "#41B0E4", Cyan: "#00AEEF", Dandelion: "#FDBC42", DarkOrchid: "#A4538A", Emerald: "#00A99D", ForestGreen: "#009B55", Fuchsia: "#8C368C", Goldenrod: "#FFDF42", Gray: "#949698", Green: "#00A64F", GreenYellow: "#DFE674", JungleGreen: "#00A99A", Lavender: "#F49EC4", Limegreen: "#8DC73E", Magenta: "#EC008C", Mahogany: "#A9341F", Maroon: "#AF3235", Melon: "#F89E7B", MidnightBlue: "#006795", Mulberry: "#A93C93", NavyBlue: "#006EB8", OliveGreen: "#3C8031", Orange: "#F58137", OrangeRed: "#ED135A", Orchid: "#AF72B0", Peach: "#F7965A", Periwinkle: "#7977B8", PineGreen: "#008B72", Plum: "#92268F", ProcessBlue: "#00B0F0", Purple: "#99479B", RawSienna: "#974006", Red: "#ED1B23", RedOrange: "#F26035", RedViolet: "#A1246B", Rhodamine: "#EF559F", RoyalBlue: "#0071BC", RoyalPurple: "#613F99", RubineRed: "#ED017D", Salmon: "#F69289", SeaGreen: "#3FBC9D", Sepia: "#671800", SkyBlue: "#46C5DD", SpringGreen: "#C6DC67", Tan: "#DA9D76", TealBlue: "#00AEB3", Thistle: "#D883B7", Turquoise: "#00B4CE", Violet: "#58429B", VioletRed: "#EF58A0", White: "#FFFFFF", WildStrawberry: "#EE2967", Yellow: "#FFF200", YellowGreen: "#98CC70", YellowOrange: "#FAA21A" };
function Lo(e) {
  var t, i, r, n, a, o;
  let s = e.split("!"), l, u, c, d = 255, h = 255, p = 255, m = -1, y = s.length > 0 && s[0].startsWith("-");
  y && (s[0] = s[0].slice(1));
  for (let w = 0; w < s.length; w++) {
    l = d, u = h, c = p;
    let g = (t = s[w].trim().match(/^([A-Za-z\d-]+)/)) == null ? void 0 : t[1], k = g == null ? void 0 : g.toLowerCase(), A = g && (o = (a = (n = (r = (i = Ai[k]) != null ? i : Ai[ip[g]]) != null ? r : ag[g]) != null ? n : og[g]) != null ? a : ng[g]) != null ? o : s[w].trim(), _ = A.match(/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    if (_ != null && _[1] && _[2] && _[3]) d = Math.max(0, Math.min(255, Number.parseInt(_[1], 16))), h = Math.max(0, Math.min(255, Number.parseInt(_[2], 16))), p = Math.max(0, Math.min(255, Number.parseInt(_[3], 16)));
    else if (_ = A.match(/^#([\da-f]{3})$/i), _ != null && _[1]) {
      let T = Number.parseInt(_[1][0], 16), K = Number.parseInt(_[1][1], 16), z = Number.parseInt(_[1][2], 16);
      d = Math.max(0, Math.min(255, T * 16 + T)), h = Math.max(0, Math.min(255, K * 16 + K)), p = Math.max(0, Math.min(255, z * 16 + z));
    } else if (_ = A.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i), _ != null && _[1] && _[2] && _[3]) d = Math.max(0, Math.min(255, Number.parseInt(_[1]))), h = Math.max(0, Math.min(255, Number.parseInt(_[2]))), p = Math.max(0, Math.min(255, Number.parseInt(_[3])));
    else return;
    m >= 0 && (d = (1 - m) * d + m * l, h = (1 - m) * h + m * u, p = (1 - m) * p + m * c, m = -1), w + 1 < s.length && (m = Math.max(0, Math.min(100, Number.parseInt(s[++w]))) / 100);
  }
  return m >= 0 && (d = m * d + (1 - m) * l, h = m * h + (1 - m) * u, p = m * p + (1 - m) * c), y && (d = 255 - d, h = 255 - h, p = 255 - p), "#" + ("00" + Math.round(d).toString(16)).slice(-2) + ("00" + Math.round(h).toString(16)).slice(-2) + ("00" + Math.round(p).toString(16)).slice(-2);
}
function Jl(e) {
  var t, i;
  return e = e.trim(), (i = (t = Bi[e.toLowerCase()]) != null ? t : Bi[ip[e]]) != null ? i : Lo(e);
}
function sg(e) {
  if (!e || e[0] !== "#") return;
  e = e.slice(1);
  let t;
  return e.length <= 4 ? (t = { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16) }, e.length === 4 && (t.a = parseInt(e[3] + e[3], 16) / 255)) : (t = { r: parseInt(e[0] + e[1], 16), g: parseInt(e[2] + e[3], 16), b: parseInt(e[4] + e[5], 16) }, e.length === 8 && (t.a = parseInt(e[6] + e[7], 16) / 255)), t && t.a === void 0 && (t.a = 1), t;
}
function Wo(e, t, i) {
  return i < 0 && (i += 6), i >= 6 && (i -= 6), i < 1 ? (t - e) * i + e : i < 3 ? t : i < 4 ? (t - e) * (4 - i) + e : e;
}
function lg(e) {
  let [t, i, r] = [e.h, e.s, e.l];
  t = (t + 360) % 360 / 60, r = Math.max(0, Math.min(r, 1)), i = Math.max(0, Math.min(i, 1));
  let n = r <= 0.5 ? r * (i + 1) : r + i - r * i, a = r * 2 - n;
  return { r: Math.round(255 * Wo(a, n, t + 2)), g: Math.round(255 * Wo(a, n, t)), b: Math.round(255 * Wo(a, n, t - 2)) };
}
function Uo(e) {
  return e < 0 ? 0 : e > 255 ? 255 : Math.round(e);
}
function ug(e) {
  let { r: t, g: i, b: r } = e, n = ((1 << 24) + (Uo(t) << 16) + (Uo(i) << 8) + Uo(r)).toString(16).slice(1);
  return n[0] === n[1] && n[2] === n[3] && n[4] === n[5] && n[6] === n[7] && (n = n[0] + n[2] + n[4]), "#" + n;
}
function cg(e) {
  let { r: t, g: i, b: r } = e;
  t = t / 255, i = i / 255, r = r / 255;
  let n = Math.min(t, i, r), a = Math.max(t, i, r), o = a - n, s, l;
  a === n ? s = 0 : t === a ? s = (i - r) / o : i === a ? s = 2 + (r - t) / o : r === a && (s = 4 + (t - i) / o), s = Math.min(s * 60, 360), s < 0 && (s += 360);
  let u = (n + a) / 2;
  return a === n ? l = 0 : u <= 0.5 ? l = o / (a + n) : l = o / (2 - a - n), { h: s, s: l, l: u };
}
function dg(e) {
  let t = sg(e);
  if (!t) return e;
  let { h: i, s: r, l: n } = cg(t);
  return r += 0.1, n -= 0.1, ug(lg({ h: i, s: r, l: n }));
}
var rp = { 60: "\\lt", 62: "\\gt", 111: "o", 38: "\\&", 123: "\\lbrace", 125: "\\rbrace", 91: "\\lbrack", 93: "\\rbrack", 58: "\\colon", 160: "~", 172: "\\neg", 183: "\\cdot", 188: "\\frac{1}{4}", 189: "\\frac{1}{2}", 190: "\\frac{3}{4}", 8304: "^{0}", 8305: "^{i}", 185: "^{1}", 178: "^{2}", 179: "^{3}", 8224: "\\dagger", 8225: "\\ddagger", 8230: "\\ldots", 8308: "^{4}", 8309: "^{5}", 8310: "^{6}", 8311: "^{7}", 8312: "^{8}", 8313: "^{9}", 8314: "^{+}", 8315: "^{-}", 8316: "^{=}", 8319: "^{n}", 8320: "_{0}", 8321: "_{1}", 8322: "_{2}", 8323: "_{3}", 8324: "_{4}", 8325: "_{5}", 8326: "_{6}", 8327: "_{7}", 8328: "_{8}", 8329: "_{9}", 8330: "_{+}", 8331: "_{-}", 8332: "_{=}", 8336: "_{a}", 8337: "_{e}", 8338: "_{o}", 8339: "_{x}", 8242: "\\prime", 39: "\\prime", 8592: "\\gets", 8594: "\\to", 9651: "\\triangle", 9661: "\\triangledown", 8715: "\\owns", 8727: "\\ast", 8739: "\\vert", 8741: "\\Vert", 8743: "\\land", 8744: "\\lor", 8901: "\\cdot", 8904: "\\bowtie", 8800: "\\ne", 8804: "\\le", 8805: "\\ge", 8869: "\\bot", 10231: "\\biconditional", 10232: "\\impliedby", 10233: "\\implies", 10234: "\\iff", 8450: "\\mathbb{C}", 8469: "\\mathbb{N}", 8473: "\\mathbb{P}", 8474: "\\mathbb{Q}", 8477: "\\mathbb{R}", 8484: "\\mathbb{Z}", 8461: "\\mathbb{H}", 8476: "\\Re", 8465: "\\Im", 42: "\\ast", 11036: "\\square", 9633: "\\square", 8720: "\\coprod", 8716: "\\not\\ni", 9671: "\\diamond", 8846: "\\uplus", 8851: "\\sqcap", 8852: "\\sqcup", 8768: "\\wr", 8750: "\\oint", 8226: "\\textbullet", 8722: "-", 978: "\\Upsilon" }, Qs = { 119893: 8462, 119965: 8492, 119968: 8496, 119969: 8497, 119971: 8459, 119972: 8464, 119975: 8466, 119976: 8499, 119981: 8475, 119994: 8495, 119996: 8458, 120004: 8500, 120070: 8493, 120075: 8460, 120076: 8465, 120085: 8476, 120093: 8488, 120122: 8450, 120127: 8461, 120133: 8469, 120135: 8473, 120136: 8474, 120137: 8477, 120145: 8484 }, np = [{ start: 119808, len: 26, offset: 65, style: "bold" }, { start: 119834, len: 26, offset: 97, style: "bold" }, { start: 119860, len: 26, offset: 65, style: "italic" }, { start: 119886, len: 26, offset: 97, style: "italic" }, { start: 119912, len: 26, offset: 65, style: "bolditalic" }, { start: 119938, len: 26, offset: 97, style: "bolditalic" }, { start: 119964, len: 26, offset: 65, variant: "script" }, { start: 119990, len: 26, offset: 97, variant: "script" }, { start: 120016, len: 26, offset: 65, variant: "script", style: "bold" }, { start: 120042, len: 26, offset: 97, variant: "script", style: "bold" }, { start: 120068, len: 26, offset: 65, variant: "fraktur" }, { start: 120094, len: 26, offset: 97, variant: "fraktur" }, { start: 120172, len: 26, offset: 65, variant: "fraktur", style: "bold" }, { start: 120198, len: 26, offset: 97, variant: "fraktur", style: "bold" }, { start: 120120, len: 26, offset: 65, variant: "double-struck" }, { start: 120146, len: 26, offset: 97, variant: "double-struck" }, { start: 120224, len: 26, offset: 65, variant: "sans-serif" }, { start: 120250, len: 26, offset: 97, variant: "sans-serif" }, { start: 120276, len: 26, offset: 65, variant: "sans-serif", style: "bold" }, { start: 120302, len: 26, offset: 97, variant: "sans-serif", style: "bold" }, { start: 120328, len: 26, offset: 65, variant: "sans-serif", style: "italic" }, { start: 120354, len: 26, offset: 97, variant: "sans-serif", style: "italic" }, { start: 120380, len: 26, offset: 65, variant: "sans-serif", style: "bolditalic" }, { start: 120406, len: 26, offset: 97, variant: "sans-serif", style: "bolditalic" }, { start: 120432, len: 26, offset: 65, variant: "monospace" }, { start: 120458, len: 26, offset: 97, variant: "monospace" }, { start: 120488, len: 25, offset: 913, style: "bold" }, { start: 120514, len: 25, offset: 945, style: "bold" }, { start: 120546, len: 25, offset: 913, style: "italic" }, { start: 120572, len: 25, offset: 945, style: "italic" }, { start: 120604, len: 25, offset: 913, style: "bolditalic" }, { start: 120630, len: 25, offset: 945, style: "bolditalic" }, { start: 120662, len: 25, offset: 913, variant: "sans-serif", style: "bold" }, { start: 120688, len: 25, offset: 945, variant: "sans-serif", style: "bold" }, { start: 120720, len: 25, offset: 913, variant: "sans-serif", style: "bolditalic" }, { start: 120746, len: 25, offset: 945, variant: "sans-serif", style: "bolditalic" }, { start: 120782, len: 10, offset: 48, variant: "main", style: "bold" }, { start: 120792, len: 10, offset: 48, variant: "double-struck" }, { start: 120803, len: 10, offset: 48, variant: "sans-serif" }, { start: 120812, len: 10, offset: 48, variant: "sans-serif", style: "bold" }, { start: 120822, len: 10, offset: 48, variant: "monospace" }];
function ap(e, t, i) {
  if (!/[A-Za-z\d]/.test(e) || (i === "up" && (i = void 0), !t && !i)) return e;
  let r = e.codePointAt(0);
  if (r === void 0) return e;
  for (let n of np) if ((!t || n.variant === t) && (!i || n.style === i) && r >= n.offset && r < n.offset + n.len) {
    let a = n.start + r - n.offset;
    return String.fromCodePoint(Qs[a] || a);
  }
  return e;
}
function hg(e) {
  var t;
  if ((e < 119808 || e > 120831) && (e < 8448 || e > 8527)) return { char: String.fromCodePoint(e) };
  for (let i in Qs) if (Qs[i] === e) {
    e = (t = i.codePointAt(0)) != null ? t : 0;
    break;
  }
  for (let i of np) if (e >= i.start && e < i.start + i.len) return { char: String.fromCodePoint(e - i.start + i.offset), variant: i.variant, style: i.style };
  return { char: String.fromCodePoint(e) };
}
function pg(e) {
  var t;
  if ("{}<>[]$&*#^_%:'˜".includes(e) || e.length > 1) return;
  let i = (t = e.codePointAt(0)) != null ? t : 0, r = rp[i];
  if (r) return r;
  let { char: n, variant: a, style: o } = hg(i);
  if (!(!a && !o)) {
    switch (r = n, a) {
      case "double-struck":
        r = `\\mathbb{${r}}`;
        break;
      case "fraktur":
        r = `\\mathfrak{${r}}`;
        break;
      case "script":
        r = `\\mathscr{${r}}`;
        break;
      case "sans-serif":
        r = `\\mathsf{${r}}`;
        break;
      case "monospace":
        r = `\\mathtt{${r}}`;
        break;
      case "calligraphic":
        r = `\\mathcal{${r}}`;
        break;
    }
    switch (o) {
      case "bold":
        r = `\\mathbf{${r}}`;
        break;
      case "italic":
        r = `\\mathit{${r}}`;
        break;
      case "bolditalic":
        r = `\\mathbfit{${r}}`;
        break;
    }
    return r;
  }
}
function D(e) {
  return e ? Array.isArray(e) ? e : typeof e == "object" && "group" in e ? e.group : [] : [];
}
var fn = {}, to = f({}, rp), dr = {}, Xl = {}, mg = { darr: "\\downarrow", dArr: "\\Downarrow", Darr: "\\Downarrow", lang: "\\langle", rang: "\\rangle", uarr: "\\uparrow", uArr: "\\Uparrow", Uarr: "\\Uparrow", N: "\\mathbb{N}", R: "\\mathbb{R}", Z: "\\mathbb{Z}", alef: "\\aleph", alefsym: "\\aleph", Alpha: "\\mathrm{A}", Beta: "\\mathrm{B}", bull: "\\bullet", Chi: "\\mathrm{X}", clubs: "\\clubsuit", cnums: "\\mathbb{C}", Complex: "\\mathbb{C}", Dagger: "\\ddagger", diamonds: "\\diamondsuit", empty: "\\emptyset", Epsilon: "\\mathrm{E}", Eta: "\\mathrm{H}", exist: "\\exists", harr: "\\leftrightarrow", hArr: "\\Leftrightarrow", Harr: "\\Leftrightarrow", hearts: "\\heartsuit", image: "\\Im", infin: "\\infty", Iota: "\\mathrm{I}", isin: "\\in", Kappa: "\\mathrm{K}", larr: "\\leftarrow", lArr: "\\Leftarrow", Larr: "\\Leftarrow", lrarr: "\\leftrightarrow", lrArr: "\\Leftrightarrow", Lrarr: "\\Leftrightarrow", Mu: "\\mathrm{M}", natnums: "\\mathbb{N}", Nu: "\\mathrm{N}", Omicron: "\\mathrm{O}", plusmn: "\\pm", rarr: "\\rightarrow", rArr: "\\Rightarrow", Rarr: "\\Rightarrow", real: "\\Re", reals: "\\mathbb{R}", Reals: "\\mathbb{R}", Rho: "\\mathrm{P}", sdot: "\\cdot", sect: "\\S", spades: "\\spadesuit", sub: "\\subset", sube: "\\subseteq", supe: "\\supseteq", Tau: "\\mathrm{T}", thetasym: "\\vartheta", weierp: "\\wp", Zeta: "\\mathrm{Z}" }, fg = { varGamma: "\\mathit{\\Gamma}", varDelta: "\\mathit{\\Delta}", varTheta: "\\mathit{\\Theta}", varLambda: "\\mathit{\\Lambda}", varXi: "\\mathit{\\Xi}", varPi: "\\mathit{\\Pi}", varSigma: "\\mathit{\\Sigma}", varUpsilon: "\\mathit{\\Upsilon}", varPhi: "\\mathit{\\Phi}", varPsi: "\\mathit{\\Psi}", varOmega: "\\mathit{\\Omega}", pmod: { def: "\\quad(\\operatorname{mod}\\ #1)", args: 1, expand: !1, captureSelection: !1 }, mod: { def: "\\quad\\operatorname{mod}\\,\\,#1", args: 1, expand: !1 }, bmod: { def: "\\;\\mathbin{\\operatorname{mod }}", expand: !1 } }, gg = { bra: { def: "\\mathinner{\\langle{#1}|}", args: 1, captureSelection: !1 }, ket: { def: "\\mathinner{|{#1}\\rangle}", args: 1, captureSelection: !1 }, braket: { def: "\\mathinner{\\langle{#1}\\rangle}", args: 1, captureSelection: !1 }, set: { def: "\\mathinner{\\lbrace #1 \\rbrace}", args: 1, captureSelection: !1 }, Bra: { def: "\\left\\langle #1\\right|", args: 1, captureSelection: !1 }, Ket: { def: "\\left|#1\\right\\rangle", args: 1, captureSelection: !1 }, Braket: { def: "\\left\\langle{#1}\\right\\rangle", args: 1, captureSelection: !1 }, Set: { def: "\\left\\lbrace #1 \\right\\rbrace", args: 1, captureSelection: !1 } }, yg = { iff: { primitive: !0, captureSelection: !0, def: '\\;\\char"27FA\\;' }, nicefrac: "^{#1}\\!\\!/\\!_{#2}", phase: { def: "\\enclose{phasorangle}{#1}", args: 1, captureSelection: !1 }, rd: "\\mathrm{d}", rD: "\\mathrm{D}", doubleStruckCapitalN: "\\mathbb{N}", doubleStruckCapitalR: "\\mathbb{R}", doubleStruckCapitalQ: "\\mathbb{Q}", doubleStruckCapitalZ: "\\mathbb{Z}", doubleStruckCapitalP: "\\mathbb{P}", scriptCapitalE: "\\mathscr{E}", scriptCapitalH: "\\mathscr{H}", scriptCapitalL: "\\mathscr{L}", gothicCapitalC: "\\mathfrak{C}", gothicCapitalH: "\\mathfrak{H}", gothicCapitalI: "\\mathfrak{I}", gothicCapitalR: "\\mathfrak{R}", imaginaryI: "\\mathrm{i}", imaginaryJ: "\\mathrm{j}", exponentialE: "\\mathrm{e}", differentialD: "\\mathrm{d}", capitalDifferentialD: "\\mathrm{D}", mathstrut: { def: "\\vphantom{(}", primitive: !0 }, angl: "\\enclose{actuarial}{#1}", angln: "\\enclose{actuarial}{n}", anglr: "\\enclose{actuarial}{r}", anglk: "\\enclose{actuarial}{k}", mathtools: { primitive: !0, package: { ordinarycolon: ":", vcentcolon: "\\mathrel{\\mathop\\ordinarycolon}", dblcolon: '{\\mathop{\\char"2237}}', coloneqq: '{\\mathop{\\char"2254}}', Coloneqq: '{\\mathop{\\char"2237\\char"3D}}', coloneq: '{\\mathop{\\char"3A\\char"2212}}', Coloneq: '{\\mathop{\\char"2237\\char"2212}}', eqqcolon: '{\\mathop{\\char"2255}}', Eqqcolon: '{\\mathop{\\char"3D\\char"2237}}', eqcolon: '{\\mathop{\\char"2239}}', Eqcolon: '{\\mathop{\\char"2212\\char"2237}}', colonapprox: '{\\mathop{\\char"003A\\char"2248}}', Colonapprox: '{\\mathop{\\char"2237\\char"2248}}', colonsim: '{\\mathop{\\char"3A\\char"223C}}', Colonsim: '{\\mathop{\\char"2237\\char"223C}}', colondash: "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}", Colondash: "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}", dashcolon: "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}", Dashcolon: "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}" } }, ratio: "\\vcentcolon", coloncolon: "\\dblcolon", colonequals: "\\coloneq", coloncolonequals: "\\Coloneq", equalscolon: "\\eqcolon", equalscoloncolon: "\\Eqcolon", colonminus: "\\colondash", coloncolonminus: "\\Colondash", minuscolon: "\\dashcolon", minuscoloncolon: "\\Dashcolon", coloncolonapprox: "\\Colonapprox", coloncolonsim: "\\Colonsim", simcolon: "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}", Simcolon: "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}", simcoloncolon: "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}", approxcolon: "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}", Approxcolon: "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}", approxcoloncolon: "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}", notni: "\\mathrel{\\char`∌}", limsup: "\\operatorname*{lim\\,sup}", liminf: "\\operatorname*{lim\\,inf}", injlim: "\\operatorname*{inj\\,lim}", projlim: "\\operatorname*{proj\\,lim}", varlimsup: "\\operatorname*{\\overline{lim}}", varliminf: "\\operatorname*{\\underline{lim}}", varinjlim: "\\operatorname*{\\underrightarrow{lim}}", varprojlim: "\\operatorname*{\\underleftarrow{lim}}", argmin: "\\operatorname*{arg\\,min}", argmax: "\\operatorname*{arg\\,max}", plim: "\\mathop{\\operatorname{plim}}\\limits", tripledash: { def: "\\vphantom{-}\\raise{4mu}{\\mkern1.5mu\\rule{2mu}{1.5mu}\\mkern{2.25mu}\\rule{2mu}{1.5mu}\\mkern{2.25mu}\\rule{2mu}{1.5mu}\\mkern{2mu}}", expand: !0 }, "braket.sty": { package: gg }, "amsmath.sty": { package: fg, primitive: !0 }, "texvc.sty": { package: mg, primitive: !1 } }, rr = { " ": 32, "\\!": 33, "\\#": 35, "\\$": 36, "\\%": 37, "\\&": 38, "\\_": 95, "-": 45, "\\textunderscore": 95, "\\euro": 8364, "\\maltese": 10016, "\\{": 123, "\\}": 125, "\\textbraceleft": 123, "\\textbraceright": 125, "\\lbrace": 123, "\\rbrace": 125, "\\lbrack": 91, "\\rbrack": 93, "\\nobreakspace": 160, "\\ldots": 8230, "\\textellipsis": 8230, "\\backslash": 92, "`": 8216, "'": 8217, "``": 8220, "''": 8221, "\\degree": 176, "\\textasciicircum": 94, "\\textasciitilde": 126, "\\textasteriskcentered": 42, "\\textbackslash": 92, "\\textbullet": 8226, "\\textdollar": 36, "\\textsterling": 163, "\\textdagger": 8224, "\\textdaggerdbl": 8225, "–": 8211, "—": 8212, "‘": 8216, "’": 8217, "“": 8220, "”": 8221, '"': 8221, "\\ss": 223, "\\ae": 230, "\\oe": 339, "\\AE": 198, "\\OE": 338, "\\O": 216, "\\i": 305, "\\j": 567, "\\aa": 229, "\\AA": 197 }, bg = /[\w!@*()-=+{}\[\]\\';:?/.,~<>`|$%#&^" ]/, el, gn;
rg() ? (el = new RegExp("\\p{Letter}", "u"), gn = new RegExp("[0-9\\p{Letter}]", "u")) : (el = /[a-zA-ZаАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяĄąĆćĘęŁłŃńÓóŚśŹźŻżàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒößÖẞìíòúÌÍÒÚáñÁÑ]/, gn = /[\da-zA-ZаАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяĄąĆćĘęŁłŃńÓóŚśŹźŻżàâäôéèëêïîçùûüÿæœÀÂÄÔÉÈËÊÏÎŸÇÙÛÜÆŒößÖẞìíòúÌÍÒÚáñÁÑ]/);
function tl(e, t, i = "mord", r) {
  t !== void 0 && (fn[e] = { definitionType: "symbol", type: i, variant: r, codepoint: t }, to[t] || (to[t] = e));
}
function de(e, t, i) {
  if (typeof e == "string") {
    for (let r = 0; r < e.length; r++) {
      let n = e.charAt(r);
      tl(n, n.codePointAt(0));
    }
    return;
  }
  for (let [r, n, a, o] of e) tl(r, n, a ?? t, o ?? i);
}
function op(e, t) {
  for (let i = e; i <= t; i++) tl(String.fromCodePoint(i), i);
}
function vg(e) {
  var t;
  return (t = Xl[e]) != null ? t : null;
}
function xg(e, t) {
  var i, r;
  if (t.length === 0 || t === "\\" || !t.startsWith("\\")) return [];
  let n = [];
  for (let o in dr) o.startsWith(t) && !dr[o].infix && n.push({ match: o, frequency: (i = dr[o].frequency) != null ? i : 0 });
  for (let o in fn) o.startsWith(t) && n.push({ match: o, frequency: (r = fn[o].frequency) != null ? r : 0 });
  let a = t.substring(1);
  for (let o of Object.keys(e.options.macros)) o.startsWith(a) && n.push({ match: "\\" + o, frequency: 0 });
  return n.sort((o, s) => {
    var l, u;
    return o.frequency === s.frequency ? o.match.length === s.match.length ? o.match < s.match ? -1 : 1 : o.match.length - s.match.length : ((l = s.frequency) != null ? l : 0) - ((u = o.frequency) != null ? u : 0);
  }), n.map((o) => o.match);
}
function Tu(e) {
  let t = "auto", i = e.match(/:([^=]+)/);
  return i && (t = i[1].trim()), t;
}
function io(e) {
  if (!e) return [];
  let t = [], i = e.split("]");
  if (i[0].startsWith("[")) {
    t.push({ isOptional: !0, type: Tu(i[0].slice(1)) });
    for (let r = 1; r <= i.length; r++) t.push(...io(i[r]));
  } else if (i = e.split("}"), i[0].startsWith("{")) {
    t.push({ isOptional: !1, type: Tu(i[0].slice(1)) });
    for (let r = 1; r <= i.length; r++) t.push(...io(i[r]));
  }
  return t;
}
function sp(e) {
  if (!e) return "";
  let t = "", i = !0;
  for (let r of e) typeof r.value == "string" ? t += r.value : i = !1;
  return i ? t : "";
}
function lp(e, t) {
  typeof e == "string" && (e = [e]);
  let i = { tabular: !1, params: [], createAtom: t };
  for (let r of e) Xl[r] = i;
}
function Bt(e, t, i) {
  typeof e == "string" && (e = [e]);
  let r = { tabular: !0, params: io(t), createAtom: i };
  for (let n of e) Xl[n] = r;
}
function x(e, t, i) {
  var r, n;
  i || (i = {});
  let a = { definitionType: "function", params: io(t), ifMode: i.ifMode, isFunction: (r = i.isFunction) != null ? r : !1, applyMode: i.applyMode, infix: (n = i.infix) != null ? n : !1, parse: i.parse, createAtom: i.createAtom, applyStyle: i.applyStyle, serialize: i.serialize, render: i.render };
  if (typeof e == "string") dr["\\" + e] = a;
  else for (let o of e) dr["\\" + o] = a;
}
var Jo;
function Gl(e) {
  return Jo || (Jo = up(yg)), Jo;
}
function Fu(e, t) {
  var i, r, n, a;
  if (typeof e == "string") {
    let o = 0, s = e;
    return /(^|[^\\])#1/.test(s) && (o = 1), /(^|[^\\])#2/.test(s) && (o = 2), /(^|[^\\])#3/.test(s) && (o = 3), /(^|[^\\])#4/.test(s) && (o = 4), /(^|[^\\])#5/.test(s) && (o = 5), /(^|[^\\])#6/.test(s) && (o = 6), /(^|[^\\])#7/.test(s) && (o = 7), /(^|[^\\])#8/.test(s) && (o = 8), /(^|[^\\])#9/.test(s) && (o = 9), { expand: (i = t == null ? void 0 : t.expand) != null ? i : !0, captureSelection: (r = t == null ? void 0 : t.captureSelection) != null ? r : !0, args: o, def: s };
  }
  return f({ expand: (n = t == null ? void 0 : t.expand) != null ? n : !0, captureSelection: (a = t == null ? void 0 : t.captureSelection) != null ? a : !0, args: 0 }, e);
}
function up(e) {
  if (!e) return {};
  let t = {};
  for (let i of Object.keys(e)) {
    let r = e[i];
    if (r == null) delete t[i];
    else if (typeof r == "object" && "package" in r) for (let n of Object.keys(r.package)) t[n] = Fu(r.package[n], { expand: !r.primitive, captureSelection: r.captureSelection });
    else t[i] = Fu(r);
  }
  return t;
}
function fe(e, t = "math") {
  if (!e || e.length === 0) return null;
  let i = null;
  if (e.startsWith("\\")) {
    if (i = dr[e], i) return !i.ifMode || i.ifMode === t ? i : null;
    t === "math" ? i = fn[e] : rr[e] && (i = { definitionType: "symbol", type: "mord", codepoint: rr[e] });
  } else if (t === "math") {
    if (i = fn[e], !i && e.length === 1) {
      let r = dp("math", e.codePointAt(0));
      return r.startsWith("\\") ? b(f({}, fe(r, "math")), { command: r }) : null;
    }
  } else rr[e] ? i = { definitionType: "symbol", type: "mord", codepoint: rr[e] } : t === "text" && (i = { definitionType: "symbol", type: "mord", codepoint: e.codePointAt(0) });
  return i ?? null;
}
function cp(e, t) {
  if (!e.startsWith("\\")) return null;
  let i = e.slice(1);
  return t[i];
}
function dp(e, t) {
  return t === void 0 ? "" : e === "math" && to[t] ? to[t] : e === "text" && Object.keys(rr).find((r) => rr[r] === t) || String.fromCodePoint(t);
}
var ze = [0, 0.68889, 0, 0, 0.72222], ii = [0, 0.68889, 0, 0, 0.66667], Xo = [0, 0.68889, 0, 0, 0.77778], $n = [0, 0.68889, 0, 0, 0.61111], zu = [0.16667, 0.68889, 0, 0, 0.77778], Ar = [0, 0.68889, 0, 0, 0.55556], V = [0, 0, 0, 0, 0.25], Ku = [0, 0.825, 0, 0, 2.33334], $u = [0, 0.9, 0, 0, 2.33334], Pn = [0, 0.68889, 0, 0, 0.54028], Go = [-0.03598, 0.46402, 0, 0, 0.5], ye = [-0.13313, 0.36687, 0, 0, 1], Nn = [0.01354, 0.52239, 0, 0, 1], Pu = [0.01354, 0.52239, 0, 0, 1.11111], Nu = [0, 0.54986, 0, 0, 1], On = [0, 0.69224, 0, 0, 0.5], Zo = [0, 0.43056, 0, 0, 1], Et = [0.08198, 0.58198, 0, 0, 0.77778], In = [0.19444, 0.69224, 0, 0, 0.41667], Rn = [0.1808, 0.675, 0, 0, 1], Ou = [0.19444, 0.69224, 0, 0, 0.83334], Iu = [0.13667, 0.63667, 0, 0, 1], Ru = [-0.064, 0.437, 0, 0, 1.334], Dt = [0.08167, 0.58167, 0, 0, 0.77778], Er = [0, 0.69224, 0, 0, 0.72222], Yo = [0, 0.69224, 0, 0, 0.66667], qn = [-0.13313, 0.36687, 0, 0, 0.77778], qu = [0.06062, 0.54986, 0, 0, 0.77778], jn = [0, 0.69224, 0, 0, 0.77778], Oi = [0.25583, 0.75583, 0, 0, 0.77778], rt = [0.25142, 0.75726, 0, 0, 0.77778], Ii = [0.20576, 0.70576, 0, 0, 0.77778], He = [0.30274, 0.79383, 0, 0, 0.77778], Dr = [0.22958, 0.72958, 0, 0, 0.77778], ju = [0.1808, 0.675, 0, 0, 0.77778], nt = [0.13667, 0.63667, 0, 0, 0.77778], Se = [0.13597, 0.63597, 0, 0, 0.77778], Tt = [0.03517, 0.54986, 0, 0, 0.77778], Ri = [0, 0.675, 0, 0, 0.77778], Vu = [0.19444, 0.69224, 0, 0, 0.61111], Hu = [0, 0.54986, 0, 0, 0.76042], Wu = [0, 0.54986, 0, 0, 0.66667], Ft = [0.0391, 0.5391, 0, 0, 0.77778], Uu = [0.03517, 0.54986, 0, 0, 1.33334], Ju = [0.38569, 0.88569, 0, 0, 0.77778], Vn = [0.23222, 0.74111, 0, 0, 0.77778], Xu = [0.19444, 0.69224, 0, 0, 0.77778], Gu = [0, 0.37788, 0, 0, 0.5], Hn = [0, 0.54986, 0, 0, 0.72222], Zu = [0, 0.69224, 0, 0, 0.83334], Yu = [0.11111, 0.69224, 0, 0, 0.66667], qi = [0.26167, 0.75726, 0, 0, 0.77778], Qu = [0.48256, 0.98256, 0, 0, 0.77778], ec = [0.28481, 0.79383, 0, 0, 0.77778], tc = [0.08167, 0.58167, 0, 0, 0.22222], ic = [0.08167, 0.58167, 0, 0, 0.38889], rc = [0, 0.43056, 0.04028, 0, 0.66667], nc = [0.41951, 0.91951, 0, 0, 0.77778], ac = [0.24982, 0.74947, 0, 0, 0.38865], oc = [0.08319, 0.58283, 0, 0, 0.75623], sc = [0, 0.10803, 0, 0, 0.27764], Qo = [0, 0.47534, 0, 0, 0.50181], Tr = [0.18906, 0.47534, 0, 0, 0.50181], lc = [0, 0.69141, 0, 0, 0.50181], uc = [0.24982, 0.74947, 0, 0, 0.27764], es = [0, 0.69141, 0, 0, 0.21471], Wn = [0.25, 0.75, 0, 0, 0.44722], Ke = [0, 0.64444, 0, 0, 0.575], ji = [0.08556, 0.58556, 0, 0, 0.89444], Un = [0, 0.69444, 0, 0, 0.89444], Jn = [0, 0.68611, 0, 0, 0.9], ts = [0, 0.68611, 0, 0, 0.86944], zt = [0.25, 0.75, 0, 0, 0.575], Xn = [0.25, 0.75, 0, 0, 0.31944], ri = [0, 0.69444, 0, 0, 0.63889], Vi = [0, 0.69444, 0, 0, 0.31944], cc = [0, 0.44444, 0, 0, 0.63889], dc = [0, 0.44444, 0, 0, 0.51111], Kt = [0, 0.69444, 0, 0, 0.575], We = [0.13333, 0.63333, 0, 0, 0.89444], hc = [0, 0.44444, 0, 0, 0.31944], pc = [0, 0.69444, 0, 0, 0.86944], mc = [0, 0.68611, 0, 0, 0.69166], Gn = [0, 0.68611, 0, 0, 0.83055], is = [0, 0.68611, 0, 0, 0.89444], rs = [0, 0.69444, 0, 0, 0.60278], fc = [0.19444, 0.69444, 0, 0, 0.51111], gc = [0, 0.69444, 0, 0, 0.83055], at = [-0.10889, 0.39111, 0, 0, 1.14999], yc = [0.19444, 0.69444, 0, 0, 0.575], Fr = [0.19444, 0.69444, 0, 0, 1.14999], bc = [0.19444, 0.69444, 0, 0, 0.70277], vc = [0.05556, 0.75, 0, 0, 0.575], ns = [0, 0.68611, 0, 0, 0.95833], xc = [0.08556, 0.58556, 0, 0, 0.76666], as = [-0.02639, 0.47361, 0, 0, 0.575], wc = [0, 0.44444, 0, 0, 0.89444], ni = [0, 0.55556, 0, 0, 0.76666], kc = [-0.10889, 0.39111, 0, 0, 0.89444], os = [222e-5, 0.50222, 0, 0, 0.89444], $t = [0.19667, 0.69667, 0, 0, 0.89444], _c = [0.08556, 0.58556, 0, 0, 1.14999], ss = [0, 0.69444, 0, 0, 0.70277], Zn = [-0.02778, 0.47222, 0, 0, 0.575], Yn = [0.25, 0.75, 0, 0, 0.51111], Mc = [-0.13889, 0.36111, 0, 0, 1.14999], Sc = [0.19444, 0.69444, 0, 0, 1.02222], Qn = [0.12963, 0.69444, 0, 0, 0.89444], Cc = [0.19444, 0.69444, 0, 0, 0.44722], Pt = [0, 0.64444, 0.13167, 0, 0.59111], Lc = [0.19444, 0.64444, 0.13167, 0, 0.59111], ls = [0, 0.68611, 0.17208, 0, 0.8961], Bc = [0.19444, 0.44444, 0.105, 0, 0.53222], Ac = [0, 0.44444, 0.085, 0, 0.82666], Ec = [0, 0.69444, 0.06709, 0, 0.59111], ea = [0, 0.69444, 0.12945, 0, 0.35555], Dc = [0, 0.69444, 0, 0, 0.94888], us = [0, 0.69444, 0.11472, 0, 0.59111], Tc = [0, 0.68611, 0.10778, 0, 0.88555], Fc = [0, 0.69444, 0.07939, 0, 0.62055], ta = [0, 0.69444, 0.12417, 0, 0.30667], Nt = [0, 0.64444, 0.13556, 0, 0.51111], zc = [0.19444, 0.64444, 0.13556, 0, 0.51111], ia = [0, 0.68333, 0.16389, 0, 0.74333], Kc = [0.19444, 0.43056, 0.08847, 0, 0.46], $c = [0, 0.43056, 0.07514, 0, 0.71555], Pc = [0, 0.69444, 0.06646, 0, 0.51111], Nc = [0, 0.69444, 0, 0, 0.83129], Oc = [0, 0.69444, 0.1225, 0, 0.51111], Ic = [0, 0.68333, 0.09403, 0, 0.76666], Rc = [0, 0.68333, 0.11111, 0, 0.76666], qc = [0, 0.69444, 0.06961, 0, 0.51444], vt = [0, 0.69444, 0, 0, 0.27778], Hi = [0.25, 0.75, 0, 0, 0.38889], $e = [0, 0.64444, 0, 0, 0.5], ai = [0, 0.69444, 0, 0, 0.77778], oi = [0, 0.68333, 0, 0, 0.75], zr = [0, 0.68333, 0, 0, 0.77778], jc = [0, 0.68333, 0, 0, 0.68056], Kr = [0, 0.68333, 0, 0, 0.72222], xt = [0.25, 0.75, 0, 0, 0.5], ra = [0.25, 0.75, 0, 0, 0.27778], se = [0, 0.69444, 0, 0, 0.5], Wi = [0, 0.69444, 0, 0, 0.55556], cs = [0, 0.43056, 0, 0, 0.44445], $r = [0, 0.43056, 0, 0, 0.5], Vc = [0.19444, 0.43056, 0, 0, 0.55556], Hc = [0, 0.43056, 0, 0, 0.55556], Pe = [0.08333, 0.58333, 0, 0, 0.77778], Wc = [0, 0.43056, 0, 0, 0.27778], Uc = [0, 0.66786, 0, 0, 0.27778], Jc = [0, 0.69444, 0, 0, 0.75], Xc = [0, 0.66786, 0, 0, 0.5], Gc = [0, 0.68333, 0, 0, 0.625], ds = [0.19444, 0.69444, 0, 0, 0.44445], Pr = [0, 0.69444, 0, 0, 0.72222], Zc = [0.19444, 0.69444, 0, 0, 0.5], Nr = [0.19444, 0.69444, 0, 0, 1], Yc = [0.011, 0.511, 0, 0, 1.126], hs = [0.19444, 0.69444, 0, 0, 0.61111], ps = [0.05556, 0.75, 0, 0, 0.5], Qc = [0, 0.68333, 0, 0, 0.83334], e0 = [0.0391, 0.5391, 0, 0, 0.66667], ms = [-0.05555, 0.44445, 0, 0, 0.5], t0 = [0, 0.43056, 0, 0, 0.77778], si = [0, 0.55556, 0, 0, 0.66667], na = [-0.03625, 0.46375, 0, 0, 0.77778], i0 = [-0.01688, 0.48312, 0, 0, 0.77778], r0 = [0.0391, 0.5391, 0, 0, 1], Ot = [0, 0.69444, 0, 0, 0.61111], aa = [-0.03472, 0.46528, 0, 0, 0.5], oa = [0.25, 0.75, 0, 0, 0.44445], n0 = [-0.14236, 0.35764, 0, 0, 1], sa = [0.244, 0.744, 0, 0, 0.412], a0 = [0.19444, 0.69444, 0, 0, 0.88889], la = [0.12963, 0.69444, 0, 0, 0.77778], o0 = [0.19444, 0.69444, 0, 0, 0.38889], s0 = [0.011, 0.511, 0, 0, 1.638], l0 = [0.19444, 0.69444, 0, 0, 0], ua = [0, 0.44444, 0, 0, 0.575], Or = [0.19444, 0.44444, 0, 0, 0.575], u0 = [0, 0.68611, 0, 0, 0.75555], c0 = [0, 0.69444, 0, 0, 0.66759], d0 = [0, 0.68611, 0, 0, 0.80555], h0 = [0, 0.68611, 0.08229, 0, 0.98229], p0 = [0, 0.68611, 0, 0, 0.76666], m0 = [0, 0.44444, 0, 0, 0.58472], f0 = [0.19444, 0.44444, 0, 0, 0.6118], Ir = [0.19444, 0.43056, 0, 0, 0.5], g0 = [0, 0.68333, 0.02778, 0.08334, 0.76278], y0 = [0, 0.68333, 0.08125, 0.05556, 0.83125], b0 = [0, 0.43056, 0, 0.05556, 0.48472], v0 = [0.19444, 0.43056, 0, 0.08334, 0.51702], x0 = [0.25, 0.75, 0, 0, 0.42778], me = [0, 0.69444, 0, 0, 0.55], wt = [0, 0.69444, 0, 0, 0.73334], It = [0, 0.69444, 0, 0, 0.79445], w0 = [0, 0.69444, 0, 0, 0.51945], fs = [0, 0.69444, 0, 0, 0.70278], k0 = [0, 0.69444, 0, 0, 0.76389], _0 = [0.25, 0.75, 0, 0, 0.34306], gs = [0, 0.69444, 0, 0, 0.56111], M0 = [0, 0.69444, 0, 0, 0.25556], S0 = [0.19444, 0.45833, 0, 0, 0.56111], C0 = [0, 0.45833, 0, 0, 0.56111], ca = [0, 0.69444, 0, 0, 0.30556], L0 = [0, 0.69444, 0, 0, 0.58056], B0 = [0, 0.69444, 0, 0, 0.67223], ys = [0, 0.69444, 0, 0, 0.85556], bs = [0, 0.69444, 0, 0, 0.55834], ot = [0, 0.65556, 0.11156, 0, 0.5], vs = [0, 0.69444, 0.08094, 0, 0.70834], xs = [0.17014, 0, 0, 0, 0.44445], A0 = [0, 0.69444, 0.0799, 0, 0.5], E0 = [0, 0.69444, 0, 0, 0.73752], D0 = [0, 0.69444, 0.09205, 0, 0.5], T0 = [0, 0.69444, 0.09031, 0, 0.77778], ws = [0, 0.69444, 0.07816, 0, 0.27778], F0 = [0, 0.69444, 316e-5, 0, 0.5], z0 = [0.19444, 0.69444, 0, 0, 0.83334], K0 = [0.05556, 0.75, 0, 0, 0.83334], $0 = [0, 0.75, 0, 0, 0.5], P0 = [0.125, 0.08333, 0, 0, 0.27778], N0 = [0, 0.08333, 0, 0, 0.27778], st = [0, 0.65556, 0, 0, 0.5], ks = [0, 0.69444, 0, 0, 0.47222], kt = [0, 0.69444, 0, 0, 0.66667], O0 = [0, 0.69444, 0, 0, 0.59722], _s = [0, 0.69444, 0, 0, 0.54167], Ms = [0, 0.69444, 0, 0, 0.70834], I0 = [0.25, 0.75, 0, 0, 0.28889], Ss = [0, 0.69444, 0, 0, 0.51667], R0 = [0, 0.44444, 0, 0, 0.44445], q0 = [0.19444, 0.44444, 0, 0, 0.51667], j0 = [0, 0.44444, 0, 0, 0.38333], V0 = [0, 0.44444, 0, 0, 0.51667], H0 = [0, 0.69444, 0, 0, 0.83334], W0 = [0.35001, 0.85, 0, 0, 0.45834], U0 = [0.35001, 0.85, 0, 0, 0.57778], J0 = [0.35001, 0.85, 0, 0, 0.41667], X0 = [0.35001, 0.85, 0, 0, 0.58334], da = [0, 0.72222, 0, 0, 0.55556], G0 = [1e-5, 0.6, 0, 0, 0.66667], Z0 = [1e-5, 0.6, 0, 0, 0.77778], Y0 = [0.25001, 0.75, 0, 0, 0.94445], Q0 = [0.306, 0.805, 0.19445, 0, 0.47222], ed = [0.30612, 0.805, 0.19445, 0, 0.47222], Ui = [0.25001, 0.75, 0, 0, 0.83334], Ji = [0.35001, 0.85, 0, 0, 0.47222], Cs = [0.25001, 0.75, 0, 0, 1.11111], td = [0.65002, 1.15, 0, 0, 0.59722], id = [0.65002, 1.15, 0, 0, 0.81111], rd = [0.65002, 1.15, 0, 0, 0.47222], nd = [0.65002, 1.15, 0, 0, 0.66667], ha = [0, 0.75, 0, 0, 1], ad = [0.55001, 1.05, 0, 0, 1.27778], od = [0.862, 1.36, 0.44445, 0, 0.55556], sd = [0.86225, 1.36, 0.44445, 0, 0.55556], Xi = [0.55001, 1.05, 0, 0, 1.11111], pa = [0.65002, 1.15, 0, 0, 0.52778], ld = [0.65002, 1.15, 0, 0, 0.61111], Ls = [0.55001, 1.05, 0, 0, 1.51112], ud = [0.95003, 1.45, 0, 0, 0.73611], cd = [0.95003, 1.45, 0, 0, 1.04445], dd = [0.95003, 1.45, 0, 0, 0.52778], ma = [0.95003, 1.45, 0, 0, 0.75], fa = [0, 0.75, 0, 0, 1.44445], ga = [0.95003, 1.45, 0, 0, 0.58334], hd = [1.25003, 1.75, 0, 0, 0.79167], pd = [1.25003, 1.75, 0, 0, 1.27778], md = [1.25003, 1.75, 0, 0, 0.58334], ya = [1.25003, 1.75, 0, 0, 0.80556], ba = [0, 0.825, 0, 0, 1.8889], va = [1.25003, 1.75, 0, 0, 0.63889], xa = [0.64502, 1.155, 0, 0, 0.875], fd = [1e-5, 0.6, 0, 0, 0.875], Bs = [-99e-5, 0.601, 0, 0, 0.66667], wa = [0.64502, 1.155, 0, 0, 0.66667], gd = [1e-5, 0.9, 0, 0, 0.88889], yd = [0.65002, 1.15, 0, 0, 0.88889], bd = [0.90001, 0, 0, 0, 0.88889], vd = [-499e-5, 0.605, 0, 0, 1.05556], ka = [0, 0.12, 0, 0, 0.45], F = [0, 0.61111, 0, 0, 0.525], Ue = [0.08333, 0.69444, 0, 0, 0.525], xd = [-0.08056, 0.53055, 0, 0, 0.525], wd = [-0.05556, 0.55556, 0, 0, 0.525], we = [0, 0.43056, 0, 0, 0.525], Rr = [0.22222, 0.43056, 0, 0, 0.525], kd = [0, 0, 0, 0, 0.525], wg = { "AMS-Regular": { 32: V, 65: ze, 66: ii, 67: ze, 68: ze, 69: ii, 70: $n, 71: Xo, 72: Xo, 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: Xo, 76: ii, 77: [0, 0.68889, 0, 0, 0.94445], 78: ze, 79: zu, 80: $n, 81: zu, 82: ze, 83: Ar, 84: ii, 85: ze, 86: ze, 87: [0, 0.68889, 0, 0, 1], 88: ze, 89: ze, 90: ii, 107: Ar, 160: V, 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: Ar, 295: Pn, 710: Ku, 732: $u, 770: Ku, 771: $u, 989: Dt, 1008: rc, 8245: [0, 0.54986, 0, 0, 0.275], 8463: Pn, 8487: ze, 8498: Ar, 8502: ii, 8503: [0, 0.68889, 0, 0, 0.44445], 8504: ii, 8513: [0, 0.68889, 0, 0, 0.63889], 8592: Go, 8594: Go, 8602: ye, 8603: ye, 8606: Nn, 8608: Nn, 8610: Pu, 8611: Pu, 8619: Nu, 8620: Nu, 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: ye, 8624: On, 8625: On, 8630: Zo, 8631: Zo, 8634: Et, 8635: Et, 8638: In, 8639: In, 8642: In, 8643: In, 8644: Rn, 8646: Rn, 8647: Rn, 8648: Ou, 8649: Rn, 8650: Ou, 8651: Nn, 8652: Nn, 8653: ye, 8654: ye, 8655: ye, 8666: Iu, 8667: Iu, 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: Ru, 8674: Ru, 8705: [0, 0.825, 0, 0, 0.5], 8708: Ar, 8709: Dt, 8717: [0, 0.43056, 0, 0, 0.42917], 8722: Go, 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: Dt, 8733: jn, 8736: Er, 8737: Er, 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: tc, 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: ic, 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: Yo, 8757: Yo, 8764: qn, 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: qn, 8770: na, 8774: He, 8776: i0, 8778: Dt, 8782: qu, 8783: qu, 8785: Et, 8786: Et, 8787: Et, 8790: jn, 8791: Dr, 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: Oi, 8807: Oi, 8808: rt, 8809: rt, 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: Ii, 8815: Ii, 8816: He, 8817: He, 8818: Dr, 8819: Dr, 8822: ju, 8823: ju, 8828: nt, 8829: nt, 8830: Dr, 8831: Dr, 8832: Ii, 8833: Ii, 8840: He, 8841: He, 8842: Se, 8843: Se, 8847: Tt, 8848: Tt, 8858: Et, 8859: Et, 8861: Et, 8862: Ri, 8863: Ri, 8864: Ri, 8865: Ri, 8872: [0, 0.69224, 0, 0, 0.61111], 8873: Er, 8874: [0, 0.69224, 0, 0, 0.88889], 8876: $n, 8877: $n, 8878: ze, 8879: ze, 8882: Tt, 8883: Tt, 8884: nt, 8885: nt, 8888: [0, 0.54986, 0, 0, 1.11111], 8890: Vc, 8891: Vu, 8892: Vu, 8901: [0, 0.54986, 0, 0, 0.27778], 8903: Dt, 8905: Dt, 8906: Dt, 8907: jn, 8908: jn, 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: Hu, 8911: Hu, 8912: Tt, 8913: Tt, 8914: Wu, 8915: Wu, 8916: Yo, 8918: Ft, 8919: Ft, 8920: Uu, 8921: Uu, 8922: Ju, 8923: Ju, 8926: nt, 8927: nt, 8928: He, 8929: He, 8934: Vn, 8935: Vn, 8936: Vn, 8937: Vn, 8938: Ii, 8939: Ii, 8940: He, 8941: He, 8994: Xu, 8995: Xu, 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: On, 9488: On, 9492: Gu, 9496: Gu, 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: Ri, 9633: Ri, 9650: Hn, 9651: Hn, 9654: Tt, 9660: Hn, 9661: Hn, 9664: Tt, 9674: Yu, 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: Zu, 10016: Zu, 10731: Yu, 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: nt, 10878: nt, 10885: Oi, 10886: Oi, 10887: Se, 10888: Se, 10889: qi, 10890: qi, 10891: Qu, 10892: Qu, 10901: nt, 10902: nt, 10933: rt, 10934: rt, 10935: qi, 10936: qi, 10937: qi, 10938: qi, 10949: Oi, 10950: Oi, 10955: ec, 10956: ec, 57350: tc, 57351: ic, 57352: Dt, 57353: rc, 57356: rt, 57357: rt, 57358: nc, 57359: He, 57360: He, 57361: nc, 57366: rt, 57367: rt, 57368: rt, 57369: rt, 57370: Se, 57371: Se }, "Caligraphic-Regular": { 32: V, 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: V }, "Fraktur-Regular": { 32: V, 33: [0, 0.69141, 0, 0, 0.29574], 34: es, 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: ac, 41: ac, 42: [0, 0.62119, 0, 0, 0.27764], 43: oc, 44: sc, 45: oc, 46: sc, 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: Qo, 49: Qo, 50: Qo, 51: Tr, 52: Tr, 53: Tr, 54: lc, 55: Tr, 56: lc, 57: Tr, 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: uc, 93: uc, 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: V, 8216: es, 8217: es, 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: V, 33: [0, 0.69444, 0, 0, 0.35], 34: rs, 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: vc, 37: [0.05556, 0.75, 0, 0, 0.95833], 38: Un, 39: Vi, 40: Wn, 41: Wn, 42: [0, 0.75, 0, 0, 0.575], 43: We, 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: j0, 46: [0, 0.15556, 0, 0, 0.31944], 47: zt, 48: Ke, 49: Ke, 50: Ke, 51: Ke, 52: Ke, 53: Ke, 54: Ke, 55: Ke, 56: Ke, 57: Ke, 58: hc, 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: ji, 61: kc, 62: ji, 63: [0, 0.69444, 0, 0, 0.54305], 64: Un, 65: ts, 66: [0, 0.68611, 0, 0, 0.81805], 67: Gn, 68: [0, 0.68611, 0, 0, 0.88194], 69: u0, 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: Jn, 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: mc, 77: [0, 0.68611, 0, 0, 1.09166], 78: Jn, 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: ts, 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: Xn, 92: zt, 93: Xn, 94: Kt, 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: ri, 99: dc, 100: ri, 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: ri, 105: Vi, 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: Vi, 109: [0, 0.44444, 0, 0, 0.95833], 110: cc, 111: ua, 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: cc, 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: dc, 123: zt, 124: Xn, 125: zt, 126: [0.35, 0.34444, 0, 0, 0.575], 160: V, 163: [0, 0.69444, 0, 0, 0.86853], 168: Kt, 172: [0, 0.44444, 0, 0, 0.76666], 176: pc, 177: We, 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: We, 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: O0, 230: [0, 0.44444, 0, 0, 0.83055], 247: We, 248: [0.09722, 0.54167, 0, 0, 0.575], 305: hc, 338: [0, 0.68611, 0, 0, 1.16944], 339: wc, 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: Kt, 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: Kt, 715: Kt, 728: Kt, 729: Vi, 730: pc, 732: Kt, 733: Kt, 915: mc, 916: ns, 920: is, 923: d0, 926: p0, 928: Jn, 931: Gn, 933: is, 934: Gn, 936: is, 937: Gn, 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: Vi, 8217: Vi, 8220: rs, 8221: rs, 8224: fc, 8225: fc, 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: c0, 8465: gc, 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: gc, 8501: ss, 8592: at, 8593: yc, 8594: at, 8595: yc, 8596: at, 8597: zt, 8598: Fr, 8599: Fr, 8600: Fr, 8601: Fr, 8636: at, 8637: at, 8640: at, 8641: at, 8656: at, 8657: bc, 8658: at, 8659: bc, 8660: at, 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: ri, 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: ri, 8709: vc, 8711: ns, 8712: xc, 8715: xc, 8722: We, 8723: We, 8725: zt, 8726: zt, 8727: Zn, 8728: as, 8729: as, 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: wc, 8734: [0, 0.44444, 0, 0, 1.14999], 8736: Er, 8739: Xn, 8741: zt, 8743: ni, 8744: ni, 8745: ni, 8746: ni, 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: kc, 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: os, 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: os, 8801: os, 8804: $t, 8805: $t, 8810: _c, 8811: _c, 8826: ji, 8827: ji, 8834: ji, 8835: ji, 8838: $t, 8839: $t, 8846: ni, 8849: $t, 8850: $t, 8851: ni, 8852: ni, 8853: We, 8854: We, 8855: We, 8856: We, 8857: We, 8866: ss, 8867: ss, 8868: Un, 8869: Un, 8900: as, 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: Zn, 8968: Yn, 8969: Yn, 8970: Yn, 8971: Yn, 8994: Mc, 8995: Mc, 9651: Sc, 9657: Zn, 9661: Sc, 9667: Zn, 9711: Fr, 9824: Qn, 9825: Qn, 9826: Qn, 9827: Qn, 9837: [0, 0.75, 0, 0, 0.44722], 9838: Cc, 9839: Cc, 10216: Wn, 10217: Wn, 10815: Jn, 10927: $t, 10928: $t, 57376: l0 }, "Main-BoldItalic": { 32: V, 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: Fc, 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: ea, 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: Pt, 49: Pt, 50: Pt, 51: Pt, 52: Lc, 53: Pt, 54: Pt, 55: Lc, 56: Pt, 57: Pt, 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: us, 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: ls, 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: ls, 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: Ec, 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: Bc, 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: Bc, 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: V, 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: Dc, 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: Ac, 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: Ac, 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: Ec, 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: ea, 730: Dc, 732: us, 733: us, 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: ls, 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: Tc, 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: Tc, 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: ea, 8217: ea, 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: Fc }, "Main-Italic": { 32: V, 33: ta, 34: qc, 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: ta, 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: Nt, 49: Nt, 50: Nt, 51: Nt, 52: zc, 53: Nt, 54: Nt, 55: zc, 56: Nt, 57: Nt, 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: Oc, 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: ia, 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: ia, 79: Ic, 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: ia, 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: Pc, 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: Kc, 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: Kc, 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: V, 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: Nc, 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: $c, 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: $c, 710: Pc, 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: Nc, 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: Oc, 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: Ic, 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: ia, 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: Rc, 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: Rc, 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: ta, 8217: ta, 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: qc, 8463: Pn }, "Main-Regular": { 32: V, 33: vt, 34: se, 35: z0, 36: ps, 37: K0, 38: ai, 39: vt, 40: Hi, 41: Hi, 42: $0, 43: Pe, 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: xt, 48: $e, 49: $e, 50: $e, 51: $e, 52: $e, 53: $e, 54: $e, 55: $e, 56: $e, 57: $e, 58: Wc, 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: Ft, 61: qn, 62: Ft, 63: ks, 64: ai, 65: oi, 66: [0, 0.68333, 0, 0, 0.70834], 67: Kr, 68: [0, 0.68333, 0, 0, 0.76389], 69: jc, 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: oi, 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: zr, 76: Gc, 77: [0, 0.68333, 0, 0, 0.91667], 78: oi, 79: zr, 80: jc, 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: Kr, 85: oi, 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: oi, 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: ra, 92: xt, 93: ra, 94: se, 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: $r, 98: Wi, 99: cs, 100: Wi, 101: cs, 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: Wi, 105: Uc, 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: vt, 109: [0, 0.43056, 0, 0, 0.83334], 110: Hc, 111: $r, 112: Vc, 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: Hc, 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: cs, 123: xt, 124: ra, 125: xt, 126: [0.35, 0.31786, 0, 0, 0.5], 160: V, 163: [0, 0.69444, 0, 0, 0.76909], 167: ds, 168: Xc, 172: [0, 0.43056, 0, 0, 0.66667], 176: Jc, 177: Pe, 182: hs, 184: xs, 198: [0, 0.68333, 0, 0, 0.90278], 215: Pe, 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: se, 230: [0, 0.43056, 0, 0, 0.72222], 247: Pe, 248: [0.09722, 0.52778, 0, 0, 0.5], 305: Wc, 338: [0, 0.68333, 0, 0, 1.01389], 339: t0, 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: se, 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: se, 715: se, 728: se, 729: Uc, 730: Jc, 732: Xc, 733: se, 915: Gc, 916: Qc, 920: zr, 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: oi, 931: Kr, 933: zr, 934: Kr, 936: zr, 937: Kr, 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: vt, 8217: vt, 8220: se, 8221: se, 8224: ds, 8225: ds, 8230: [0, 0.12, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: Pn, 8465: Pr, 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: Pr, 8501: Ot, 8592: ye, 8593: Zc, 8594: ye, 8595: Zc, 8596: ye, 8597: xt, 8598: Nr, 8599: Nr, 8600: Nr, 8601: Nr, 8614: [0.011, 0.511, 0, 0, 1], 8617: Yc, 8618: Yc, 8636: ye, 8637: ye, 8640: ye, 8641: ye, 8652: [0.011, 0.671, 0, 0, 1], 8656: ye, 8657: hs, 8658: ye, 8659: hs, 8660: ye, 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: Wi, 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: Wi, 8709: ps, 8711: Qc, 8712: e0, 8715: e0, 8722: Pe, 8723: Pe, 8725: xt, 8726: xt, 8727: aa, 8728: ms, 8729: ms, 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: t0, 8734: Zo, 8736: Er, 8739: ra, 8741: xt, 8743: si, 8744: si, 8745: si, 8746: si, 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: qn, 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: na, 8773: [-0.022, 0.589, 0, 0, 1], 8776: i0, 8781: na, 8784: [-0.133, 0.67, 0, 0, 0.778], 8801: na, 8804: Se, 8805: Se, 8810: r0, 8811: r0, 8826: Ft, 8827: Ft, 8834: Ft, 8835: Ft, 8838: Se, 8839: Se, 8846: si, 8849: Se, 8850: Se, 8851: si, 8852: si, 8853: Pe, 8854: Pe, 8855: Pe, 8856: Pe, 8857: Pe, 8866: Ot, 8867: Ot, 8868: ai, 8869: ai, 8872: [0.249, 0.75, 0, 0, 0.867], 8900: ms, 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: aa, 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.9, 0, 0, 0.278], 8943: [-0.19, 0.31, 0, 0, 1.172], 8945: [-0.1, 0.82, 0, 0, 1.282], 8968: oa, 8969: oa, 8970: oa, 8971: oa, 8994: n0, 8995: n0, 9136: sa, 9137: sa, 9651: a0, 9657: aa, 9661: a0, 9667: aa, 9711: Nr, 9824: la, 9825: la, 9826: la, 9827: la, 9837: [0, 0.75, 0, 0, 0.38889], 9838: o0, 9839: o0, 10216: Hi, 10217: Hi, 10222: sa, 10223: sa, 10229: [0.011, 0.511, 0, 0, 1.609], 10230: s0, 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: s0, 10815: oi, 10927: Se, 10928: Se, 57376: l0 }, "Math-BoldItalic": { 32: V, 48: ua, 49: ua, 50: ua, 51: Or, 52: Or, 53: Or, 54: Ke, 55: Or, 56: Ke, 57: Or, 65: ts, 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: h0, 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: u0, 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: c0, 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: m0, 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: V, 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: ns, 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: d0, 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: h0, 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: p0, 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: m0, 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: f0, 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: f0, 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: V, 48: $r, 49: $r, 50: $r, 51: Ir, 52: Ir, 53: Ir, 54: $e, 55: Ir, 56: $e, 57: Ir, 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: y0, 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: g0, 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: b0, 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: V, 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: g0, 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: y0, 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: b0, 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: v0, 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: v0, 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: V, 33: [0, 0.69444, 0, 0, 0.36667], 34: bs, 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: ca, 40: x0, 41: x0, 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: me, 49: me, 50: me, 51: me, 52: me, 53: me, 54: me, 55: me, 56: me, 57: me, 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: w0, 64: wt, 65: wt, 66: wt, 67: fs, 68: It, 69: [0, 0.69444, 0, 0, 0.64167], 70: Ot, 71: wt, 72: It, 73: [0, 0.69444, 0, 0, 0.33056], 74: w0, 75: k0, 76: L0, 77: [0, 0.69444, 0, 0, 0.97778], 78: It, 79: It, 80: fs, 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: fs, 83: Ot, 84: wt, 85: k0, 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: wt, 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: B0, 91: _0, 93: _0, 94: me, 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: gs, 99: [0, 0.45833, 0, 0, 0.48889], 100: gs, 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: gs, 105: M0, 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: M0, 109: [0, 0.45833, 0, 0, 0.86667], 110: C0, 111: [0, 0.45833, 0, 0, 0.55], 112: S0, 113: S0, 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: C0, 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: V, 168: me, 176: wt, 180: me, 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: me, 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: me, 729: ca, 730: wt, 732: me, 733: me, 915: L0, 916: [0, 0.69444, 0, 0, 0.91667], 920: ys, 923: B0, 926: wt, 928: It, 931: It, 933: ys, 934: It, 936: ys, 937: It, 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: ca, 8217: ca, 8220: bs, 8221: bs }, "SansSerif-Italic": { 32: V, 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: F0, 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: ws, 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: P0, 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: N0, 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: ot, 49: ot, 50: ot, 51: ot, 52: ot, 53: ot, 54: ot, 55: ot, 56: ot, 57: ot, 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: kt, 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: vs, 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: _s, 77: [0, 0.69444, 0.08094, 0, 0.875], 78: vs, 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: A0, 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: V, 168: [0, 0.67937, 0.06385, 0, 0.5], 176: E0, 184: xs, 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: A0, 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: D0, 715: se, 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: E0, 732: [0, 0.67659, 0.08826, 0, 0.5], 733: D0, 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: H0, 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: Ot, 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: vs, 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: T0, 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: T0, 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: ws, 8217: ws, 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: F0 }, "SansSerif-Regular": { 32: V, 33: [0, 0.69444, 0, 0, 0.31945], 34: se, 35: z0, 36: ps, 37: K0, 38: [0, 0.69444, 0, 0, 0.75834], 39: vt, 40: Hi, 41: Hi, 42: $0, 43: Pe, 44: P0, 45: [0, 0.44444, 0, 0, 0.33333], 46: N0, 47: xt, 48: st, 49: st, 50: st, 51: st, 52: st, 53: st, 54: st, 55: st, 56: st, 57: st, 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: ks, 64: kt, 65: kt, 66: kt, 67: ri, 68: [0, 0.69444, 0, 0, 0.72223], 69: O0, 70: [0, 0.69444, 0, 0, 0.56945], 71: kt, 72: Ms, 73: vt, 74: ks, 75: [0, 0.69444, 0, 0, 0.69445], 76: _s, 77: [0, 0.69444, 0, 0, 0.875], 78: Ms, 79: [0, 0.69444, 0, 0, 0.73611], 80: ri, 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: Wi, 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: kt, 89: [0, 0.69444, 0.025, 0, 0.66667], 90: Ot, 91: I0, 93: I0, 94: se, 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: Ss, 99: R0, 100: Ss, 101: R0, 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: Ss, 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: V0, 111: [0, 0.44444, 0, 0, 0.5], 112: q0, 113: q0, 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: j0, 116: [0, 0.57143, 0, 0, 0.36111], 117: V0, 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: V, 168: [0, 0.67937, 0, 0, 0.5], 176: kt, 184: xs, 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: se, 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: se, 715: se, 728: se, 729: [0, 0.67937, 0, 0, 0.27778], 730: kt, 732: [0, 0.67659, 0, 0, 0.5], 733: se, 915: _s, 916: H0, 920: ai, 923: Ot, 926: kt, 928: Ms, 931: Pr, 933: ai, 934: Pr, 936: ai, 937: Pr, 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: vt, 8217: vt, 8220: se, 8221: se }, "Script-Regular": { 32: V, 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: V }, "Size1-Regular": { 32: V, 40: W0, 41: W0, 47: U0, 91: J0, 92: U0, 93: J0, 123: X0, 125: X0, 160: V, 710: da, 732: da, 770: da, 771: da, 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: G0, 8595: G0, 8657: Z0, 8659: Z0, 8719: Y0, 8720: Y0, 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: ed, 8748: Q0, 8749: Q0, 8750: ed, 8896: Ui, 8897: Ui, 8898: Ui, 8899: Ui, 8968: Ji, 8969: Ji, 8970: Ji, 8971: Ji, 9168: Bs, 10216: Ji, 10217: Ji, 10752: Cs, 10753: Cs, 10754: Cs, 10756: Ui, 10758: Ui }, "Size2-Regular": { 32: V, 40: td, 41: td, 47: id, 91: rd, 92: id, 93: rd, 123: nd, 125: nd, 160: V, 710: ha, 732: ha, 770: ha, 771: ha, 8719: ad, 8720: ad, 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: sd, 8748: od, 8749: od, 8750: sd, 8896: Xi, 8897: Xi, 8898: Xi, 8899: Xi, 8968: pa, 8969: pa, 8970: pa, 8971: pa, 10216: ld, 10217: ld, 10752: Ls, 10753: Ls, 10754: Ls, 10756: Xi, 10758: Xi }, "Size3-Regular": { 32: V, 40: ud, 41: ud, 47: cd, 91: dd, 92: cd, 93: dd, 123: ma, 125: ma, 160: V, 710: fa, 732: fa, 770: fa, 771: fa, 8730: [0.95003, 1.45, 0, 0, 1], 8968: ga, 8969: ga, 8970: ga, 8971: ga, 10216: ma, 10217: ma }, "Size4-Regular": { 32: V, 40: hd, 41: hd, 47: pd, 91: md, 92: pd, 93: md, 123: ya, 125: ya, 160: V, 710: ba, 732: ba, 770: ba, 771: ba, 8730: [1.25003, 1.75, 0, 0, 1], 8968: va, 8969: va, 8970: va, 8971: va, 9115: xa, 9116: fd, 9117: xa, 9118: xa, 9119: fd, 9120: xa, 9121: wa, 9122: Bs, 9123: wa, 9124: wa, 9125: Bs, 9126: wa, 9127: gd, 9128: yd, 9129: bd, 9130: [0, 0.3, 0, 0, 0.88889], 9131: gd, 9132: yd, 9133: bd, 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: ya, 10217: ya, 57344: vd, 57345: vd, 57680: ka, 57681: ka, 57682: ka, 57683: ka }, "Typewriter-Regular": { 32: kd, 33: F, 34: F, 35: F, 36: Ue, 37: Ue, 38: F, 39: F, 40: Ue, 41: Ue, 42: [0, 0.52083, 0, 0, 0.525], 43: xd, 44: [0.13889, 0.125, 0, 0, 0.525], 45: xd, 46: [0, 0.125, 0, 0, 0.525], 47: Ue, 48: F, 49: F, 50: F, 51: F, 52: F, 53: F, 54: F, 55: F, 56: F, 57: F, 58: we, 59: [0.13889, 0.43056, 0, 0, 0.525], 60: wd, 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: wd, 63: F, 64: F, 65: F, 66: F, 67: F, 68: F, 69: F, 70: F, 71: F, 72: F, 73: F, 74: F, 75: F, 76: F, 77: F, 78: F, 79: F, 80: F, 81: [0.13889, 0.61111, 0, 0, 0.525], 82: F, 83: F, 84: F, 85: F, 86: F, 87: F, 88: F, 89: F, 90: F, 91: Ue, 92: Ue, 93: Ue, 94: F, 95: [0.09514, 0, 0, 0, 0.525], 96: F, 97: we, 98: F, 99: we, 100: F, 101: we, 102: F, 103: Rr, 104: F, 105: F, 106: [0.22222, 0.61111, 0, 0, 0.525], 107: F, 108: F, 109: we, 110: we, 111: we, 112: Rr, 113: Rr, 114: we, 115: we, 116: [0, 0.55358, 0, 0, 0.525], 117: we, 118: we, 119: we, 120: we, 121: Rr, 122: we, 123: Ue, 124: Ue, 125: Ue, 126: F, 127: F, 160: kd, 176: F, 184: [0.19445, 0, 0, 0, 0.525], 305: we, 567: Rr, 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: F, 715: F, 728: F, 730: F, 770: F, 771: F, 776: F, 915: F, 916: F, 920: F, 923: F, 926: F, 928: F, 931: F, 933: F, 934: F, 936: F, 937: F, 8216: F, 8217: F, 8242: F, 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, kg = /[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uAC00-\uD7AF]/, br = 10, Ze = 0.25, _g = 1.2, Jt = 0.431, _d = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [Jt, Jt, Jt], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.5, 0.732, 0.925], num2: [0.394, 0.384, 0.5], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [Ze, Ze, Ze], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04] }, il = [0, 0.5, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], Zl = 5, Md = { " ": " ", "​": " ", Å: "A", Ç: "C", Ð: "D", Þ: "o", å: "a", ç: "c", ð: "d", þ: "o", А: "A", Б: "B", В: "B", Г: "F", Д: "A", Е: "E", Ж: "K", З: "3", И: "N", Й: "N", К: "K", Л: "N", М: "M", Н: "H", О: "O", П: "N", Р: "P", С: "C", Т: "T", У: "y", Ф: "O", Х: "X", Ц: "U", Ч: "h", Ш: "W", Щ: "W", Ъ: "B", Ы: "X", Ь: "B", Э: "3", Ю: "X", Я: "R", а: "a", б: "b", в: "a", г: "r", д: "y", е: "e", ж: "m", з: "e", и: "n", й: "n", к: "n", л: "n", м: "m", н: "n", о: "o", п: "n", р: "p", с: "c", т: "o", у: "y", ф: "b", х: "x", ц: "n", ч: "n", ш: "w", щ: "w", ъ: "a", ы: "m", ь: "a", э: "e", ю: "m", я: "r" };
function nr(e, t) {
  e === void 0 && (e = 77);
  let i = wg[t][e];
  if (i) return { defaultMetrics: !1, depth: i[0], height: i[1], italic: i[2], skew: i[3], width: i[4] };
  if (e === 11034) return { defaultMetrics: !0, depth: 0.2, height: 0.8, italic: 0, skew: 0, width: 0.8 };
  let r = String.fromCodePoint(e);
  if (r in Md) e = Md[r].codePointAt(0);
  else if (kg.test(r)) return e = 77, { defaultMetrics: !0, depth: 0.2, height: 0.9, italic: 0, skew: 0, width: 1 };
  return { defaultMetrics: !0, depth: 0.2, height: 0.7, italic: 0, skew: 0, width: 0.8 };
}
var rl = { overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"], underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"], xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], longrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"], xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], longleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"], Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"], xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"], xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"], overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"], xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"], overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"], xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"], xlongequal: [["longequal"], 0.888, 334, "xMinYMin"], xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"], xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"], overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548], underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548], underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522], xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], longleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522], xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560], xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], longrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716], xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], longleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716], xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522], xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522], overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522], overgroup: [["leftgroup", "rightgroup"], 0.888, 342], undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342], xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522], xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528], xleftrightarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], longleftrightarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901], xRightleftharpoons: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], longRightleftharpoons: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716], xLeftrightharpoons: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716], longLeftrightharpoons: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716] }, nl = { widehat1: [1062, 239, 0.24], widehat2: [2364, 300, 0.3], widehat3: [2364, 360, 0.36], widehat4: [2364, 420, 0.42], widecheck1: [1062, 239, 0.24], widecheck2: [2364, 300, 0.3], widecheck3: [2364, 360, 0.36], widecheck4: [2364, 420, 0.42], widetilde1: [600, 260, 0.26], widetilde2: [1033, 286, 0.286], widetilde3: [2339, 306, 0.306], widetilde4: [2340, 312, 0.34], overarc: [1061, 159, 0.3], underarc: [1061, 159, 0.3] }, Sd = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, overarc: "M529 0c179 0 524 115 524 115 5 1 9 5 9 10 0 1-1 2-1 3l-4 22c-1 5-5 9-11 9h-2s-338-93-512-92c-174 0-513 92-513 92h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13 0 0 342-115 520-115z", underarc: `m 529 160
  c -179 0 -524 -115 -524 -115
  c -5 -1 -9 -5 -9 -10
  c 0 -1 1 -2 1 -3
  l 4 -22
  c 1 -5 5 -9 11 -9
  h 2
  s 338 93 512 92
  c 174 0 513 -92 513 -92
  h 2
  c 5 0 9 4 11 9
  l 5 22
  c 1 6 -2 12 -8 13
  c 0 0 -342 115 -520 115
  z
  `, leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`, leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`, leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`, midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`, rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, widetilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, widetilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, widetilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, widetilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` };
function Mg(e) {
  if (nl[e]) {
    let [u, c, d] = nl[e], h = `<span class="ML__stretchy" style="height:${d}em"><svg width="100%" height="${d}em" viewBox="0 0 ${u} ${c}" preserveAspectRatio="none" ><path fill="currentcolor" d="${Sd[e]}"></path></svg></span>`;
    return `<span style="display:inline-block;height:${Math.floor(100 * d / 2) / 100}em;min-width:0">${h}</span>`;
  }
  let [t, i, r, n] = rl[e], a, o, s = r / 1e3;
  t.length === 3 ? (a = ["slice-1-of-3", "slice-2-of-3", "slice-3-of-3"], o = ["xMinYMin", "xMidYMin", "xMaxYMin"]) : t.length === 2 ? (a = ["slice-1-of-2", "slice-2-of-2"], o = ["xMinYMin", "xMaxYMin"]) : (a = ["slice-1-of-1"], o = [n]);
  let l = t.map((u, c) => `<span class="${a[c]}" style=height:${s}em><svg width=400em height=${s}em viewBox="0 0 400000 ${r}" preserveAspectRatio="${o[c]} slice"><path fill="currentcolor" d="${Sd[u]}"></path></svg></span>`).join("");
  return `<span style="display:inline-block;height:${s}em;min-width:${i}em;">${l}</span>`;
}
function Sg(e) {
  return rl[e] ? rl[e][2] / 1e3 : nl[e][2];
}
function Cg(e) {
  let t = [];
  for (let i = 0; i < e.length; i++) {
    let r = e.charCodeAt(i);
    if (r === 13 && e.charCodeAt(i + 1) === 10 && (r = 10, i++), (r === 13 || r === 12) && (r = 10), r === 0 && (r = 65533), r >= 55296 && r <= 56319) {
      let n = e.charCodeAt(i + 1);
      if (n >= 56320 && n <= 57343) {
        let a = r - 55296, o = n - 56320;
        r = 2 ** 16 + a * 2 ** 10 + o, i++;
      }
    }
    t.push(r);
  }
  return t;
}
var Ra = 8205, Lg = [[Ra, 1], [65038, 2], [127995, 5], [129456, 4], [917536, 96]], _a, Cd = [127462, 127487];
function Ld(e) {
  var t;
  if (_a === void 0) {
    _a = {};
    for (let i of Lg) for (let r = i[0]; r <= i[0] + i[1] - 1; r++) _a[r] = !0;
  }
  return (t = _a[e]) != null ? t : !1;
}
function Bg(e) {
  return e >= Cd[0] && e <= Cd[1];
}
function hp(e) {
  if (/^[\u0020-\u00FF]*$/.test(e)) return e;
  let t = [], i = Cg(e), r = 0;
  for (; r < i.length; ) {
    let n = i[r++], a = i[r];
    if (a === Ra) {
      let o = r - 1;
      for (r += 2; i[r] === Ra; ) r += 2;
      t.push(String.fromCodePoint(...i.slice(o, r - o + 1)));
    } else if (Ld(a)) {
      let o = r - 1;
      for (; Ld(i[r]); ) r += i[r] === Ra ? 2 : 1;
      t.push(String.fromCodePoint(...i.slice(o, 2 * r - o - 1)));
    } else Bg(n) ? (r += 1, t.push(String.fromCodePoint(...i.slice(r - 2, 2)))) : t.push(String.fromCodePoint(n));
  }
  return t;
}
var Ag = class {
  constructor(e) {
    this.obeyspaces = !1, this.pos = 0, this.s = hp(e);
  }
  end() {
    return this.pos >= this.s.length;
  }
  get() {
    return this.pos < this.s.length ? this.s[this.pos++] : "";
  }
  peek() {
    return this.s[this.pos];
  }
  match(e) {
    let t = typeof this.s == "string" ? e.exec(this.s.slice(this.pos)) : e.exec(this.s.slice(this.pos).join(""));
    return t != null && t[0] ? (this.pos += t[0].length, t[0]) : "";
  }
  next() {
    if (this.end()) return null;
    if (!this.obeyspaces && this.match(/^[ \f\n\r\t\v\u00A0\u2028\u2029]+/) || this.obeyspaces && this.match(/^[ \f\n\r\t\v\u00A0\u2028\u2029]/)) return "<space>";
    let e = this.get();
    if (e === "\\") {
      if (!this.end()) {
        let t = this.match(/^[a-zA-Z\*]+/);
        return t ? this.match(/^[ \f\n\r\t\v\u00A0\u2028\u2029]*/) : t = this.get(), "\\" + t;
      }
    } else {
      if (e === "{") return "<{>";
      if (e === "}") return "<}>";
      if (e === "^") {
        if (this.peek() === "^") {
          this.get();
          let t = this.match(/^(\^(\^(\^(\^[\da-f])?[\da-f])?[\da-f])?[\da-f])?[\da-f]{2}/);
          if (t) return String.fromCodePoint(Number.parseInt(t.slice(t.lastIndexOf("^") + 1), 16));
        }
        return e;
      } else if (e === "#") {
        if (!this.end()) {
          let t = !1;
          if (/[\d?@]/.test(this.peek()) && (t = !0, this.pos + 1 < this.s.length)) {
            let i = this.s[this.pos + 1];
            t = /[^\dA-Za-z]/.test(i);
          }
          return t ? "#" + this.get() : "#";
        }
      } else if (e === "$") return this.peek() === "$" ? (this.get(), "<$$>") : "<$>";
    }
    return e;
  }
};
function Eg(e, t) {
  var i, r, n, a;
  let o = [], s = e.next();
  if (s && s !== "\\relax") {
    if (s === "\\noexpand") s = e.next(), s && o.push(s);
    else if (s === "\\obeyspaces") e.obeyspaces = !0;
    else if (s === "\\bgroup") o.push("<{>");
    else if (s === "\\egroup") o.push("<}>");
    else if (s === "\\string") {
      if (s = e.next(), s) if (s.startsWith("\\")) for (let l of s) o.push(l === "\\" ? "\\backslash" : l);
      else s === "<{>" ? o.push("\\{") : s === "<space>" ? o.push("~") : s === "<}>" && o.push("\\}");
    } else if (s === "\\csname") {
      for (; e.peek() === "<space>"; ) e.next();
      let l = "", u = !1, c = [];
      do {
        if (c.length === 0) if (/^#[\d?@]$/.test(e.peek())) {
          let d = e.get().slice(1);
          c = yn((r = (i = t == null ? void 0 : t(d)) != null ? i : t == null ? void 0 : t("?")) != null ? r : "\\placeholder{}", t), s = c[0];
        } else s = e.next(), c = s ? [s] : [];
        u = c.length === 0, !u && s === "\\endcsname" && (u = !0, c.shift()), u || (u = s === "<$>" || s === "<$$>" || s === "<{>" || s === "<}>" || typeof s == "string" && s.length > 1 && s.startsWith("\\")), u || (l += c.shift());
      } while (!u);
      l && o.push("\\" + l), o.push(...c);
    } else if (s !== "\\endcsname") if (s.length > 1 && s.startsWith("#")) {
      let l = s.slice(1);
      o.push(...yn((a = (n = t == null ? void 0 : t(l)) != null ? n : t == null ? void 0 : t("?")) != null ? a : "\\placeholder{}", t));
    } else o.push(s);
  }
  return o;
}
function yn(e, t = null) {
  let i = [], r = "";
  for (let o of e.toString().split(/\r?\n/)) {
    r && i.push(r), r = " ";
    let s = o.match(/((?:\\%)|[^%])*/);
    s !== null && i.push(s[0]);
  }
  let n = new Ag(i.join("")), a = [];
  do
    a.push(...Eg(n, t));
  while (!n.end());
  return a;
}
function R(e) {
  let t = "", i = [];
  for (let r of e) r && (t && /^[a-zA-Z\*]/.test(r) && i.push(t), i.push(r), /^\\[a-zA-Z]+\*?[\"\'][^\ ]+$/.test(r) && i.push(" "), t = /\\[a-zA-Z]+\*?$/.test(r) ? " " : "");
  return i.join("");
}
function Z(e, ...t) {
  return e.startsWith("\\"), t.length === 0 ? e : R([e, ...t.map((i) => `{${i}}`)]);
}
function li(e) {
  return R(e.map((t) => {
    var i;
    return (i = { "<space>": " ", "<$$>": "$$", "<$>": "$", "<{>": "{", "<}>": "}" }[t]) != null ? i : t;
  }));
}
var pp = class Qr {
  constructor(t) {
    Qr._registry[t] = this;
  }
  static createAtom(t, i, r) {
    return Qr._registry[t].createAtom(i, fe(i, t), r);
  }
  static serialize(t, i) {
    var r;
    if (!t || t.length === 0) return "";
    if ((r = i.skipStyles) != null && r) {
      let n = [];
      for (let a of mp(t)) {
        let o = Qr._registry[a[0].mode];
        n.push(...o.serialize(a, i));
      }
      return R(n);
    }
    return R(Tg(t, i));
  }
  static getFont(t, i, r) {
    return Qr._registry[t].getFont(i, r);
  }
};
pp._registry = {};
var De = pp;
function mp(e) {
  let t = [], i = [], r = "NONE";
  for (let n of e) n.type !== "first" && (n.mode !== r ? (i.length > 0 && t.push(i), i = [n], r = n.mode) : i.push(n));
  return i.length > 0 && t.push(i), t;
}
function ei(e, t) {
  let i = [], r = [], n;
  for (let a of e) if (a.type !== "first" && a.style) {
    let o;
    t === "variant" ? (o = a.style.variant, a.style.variantStyle && a.style.variantStyle !== "up" && (o += "-" + a.style.variantStyle)) : o = a.style[t], o === n ? r.push(a) : (r.length > 0 && i.push(r), r = [a], n = o);
  }
  return r.length > 0 && i.push(r), i;
}
function Bd(e, t) {
  var i;
  let { parent: r } = e[0], n = r == null ? void 0 : r.computedStyle.color, a = [];
  for (let o of mp(e)) {
    let s = t.defaultMode;
    for (let l of ei(o, "color")) {
      let u = l[0].computedStyle, c = De._registry[l[0].mode].serialize(l, b(f({}, t), { defaultMode: s === "text" ? "text" : "math" }));
      !t.skipStyles && u.color && u.color !== "none" && (!r || n !== u.color) ? a.push(Z("\\textcolor", (i = u.verbatimColor) != null ? i : u.color, R(c))) : a.push(R(c));
    }
  }
  return a;
}
function Dg(e, t) {
  let { parent: i } = e[0], r = i == null ? void 0 : i.computedStyle.backgroundColor;
  return ei(e, "backgroundColor").map((n) => {
    var a;
    if (n.length > 0 || n[0].type !== "box") {
      let o = n[0].computedStyle;
      if (o.backgroundColor && o.backgroundColor !== "none" && (!i || r !== o.backgroundColor)) return Z("\\colorbox", (a = o.verbatimBackgroundColor) != null ? a : o.backgroundColor, R(Bd(n, b(f({}, t), { defaultMode: "text" }))));
    }
    return R(Bd(n, t));
  });
}
function Tg(e, t) {
  if (e.length === 0) return [];
  let { parent: i } = e[0], r = i == null ? void 0 : i.computedStyle.fontSize, n = [];
  for (let a of ei(e, "fontSize")) {
    let o = a[0].computedStyle.fontSize, s = Dg(a, t);
    s && (o && o !== "auto" && (!i || r !== o) ? n.push(["", "\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"][o], ...s) : n.push(...s));
  }
  return n;
}
function al(e) {
  return e ? { mord: "ord", mbin: "bin", mop: "op", mrel: "rel", mopen: "open", mclose: "close", mpunct: "punct", minner: "inner", spacing: "ignore", latex: "latex", composition: "inner", error: "inner", placeholder: "ord", supsub: "ignore" }[e] : void 0;
}
function Cn(e) {
  if (e.length === 0) return "ord";
  let t = al(e[0].type), i = al(e[e.length - 1].type);
  return t && t === i ? t : "ord";
}
function qr(e, t) {
  if (typeof e == "string") return e;
  if (typeof e == "number") {
    let i = Math.ceil(100 * e) / 100;
    return i === 0 ? "0" : i.toString() + (t ?? "");
  }
  return "";
}
var S = class fp {
  constructor(t, i) {
    var r, n, a, o, s;
    if (typeof t == "number" ? this.value = String.fromCodePoint(t) : typeof t == "string" ? this.value = t : Me(t) ? this.children = t.filter((u) => u !== null) : t && t instanceof fp && (this.children = [t]), this.children) for (let u of this.children) u.parent = this;
    this.type = (r = i == null ? void 0 : i.type) != null ? r : "ignore", this.isSelected = (i == null ? void 0 : i.isSelected) === !0, i != null && i.caret && (this.caret = i.caret), this.classes = (n = i == null ? void 0 : i.classes) != null ? n : "", this.isTight = (a = i == null ? void 0 : i.isTight) != null ? a : !1, i != null && i.attributes && (this.attributes = i.attributes);
    let l = i == null ? void 0 : i.fontFamily;
    i != null && i.style && this.value && (l = (s = De.getFont((o = i.mode) != null ? o : "math", this, b(f({ variant: "normal" }, i.style), { letterShapeStyle: i.letterShapeStyle }))) != null ? s : void 0), l || (l = "Main-Regular"), this._height = 0, this._depth = 0, this._width = 0, this.hasExplicitWidth = !1, this.skew = 0, this.italic = 0, this.maxFontSize = 0, this.scale = 1, (i == null ? void 0 : i.maxFontSize) !== void 0 && (this.maxFontSize = i.maxFontSize), Fg(this, l);
  }
  set atomID(t) {
    t === void 0 || t.length === 0 || (this.id = t);
  }
  selected(t) {
    if (this.isSelected !== t && (this.isSelected = t, this.children)) for (let i of this.children) i.selected(t);
  }
  setStyle(t, i, r) {
    if (i === void 0) return;
    let n = qr(i, r);
    n.length > 0 && (this.cssProperties || (this.cssProperties = {}), this.cssProperties[t] = n);
  }
  setTop(t) {
    Number.isFinite(t) && Math.abs(t) > 0.01 && (this.cssProperties || (this.cssProperties = {}), this.cssProperties.top = qr(t, "em"), this.height -= t, this.depth += t);
  }
  get left() {
    var t;
    return (t = this.cssProperties) != null && t["margin-left"] ? Number.parseFloat(this.cssProperties["margin-left"]) : 0;
  }
  set left(t) {
    Number.isFinite(t) && (t === 0 ? this.cssProperties && delete this.cssProperties["margin-left"] : (this.cssProperties || (this.cssProperties = {}), this.cssProperties["margin-left"] = qr(t, "em")));
  }
  set right(t) {
    Number.isFinite(t) && (t === 0 ? this.cssProperties && delete this.cssProperties["margin-right"] : (this.cssProperties || (this.cssProperties = {}), this.cssProperties["margin-right"] = qr(t, "em")));
  }
  set bottom(t) {
    Number.isFinite(t) && (t === 0 ? this.cssProperties && delete this.cssProperties["margin-bottom"] : (this.cssProperties || (this.cssProperties = {}), this.cssProperties["margin-bottom"] = qr(t, "em")));
  }
  get width() {
    return this._width * this.scale;
  }
  set width(t) {
    this._width = t, this.hasExplicitWidth = !0;
  }
  set softWidth(t) {
  }
  get height() {
    return this._height * this.scale;
  }
  set height(t) {
    this._height = t;
  }
  get depth() {
    return this._depth * this.scale;
  }
  set depth(t) {
    this._depth = t;
  }
  wrap(t) {
    let i = t.parent;
    if (!i) return this;
    t.isPhantom && this.setStyle("opacity", 0);
    let r = t.color;
    r && r !== i.color && this.setStyle("color", r);
    let n = t.backgroundColor;
    this.isSelected && (n = dg(n)), n && n !== i.backgroundColor && (this.setStyle("background-color", n), this.setStyle("display", "inline-block"));
    let a = t.scalingFactor;
    return this.scale = a, this.skew *= a, this.italic *= a, this;
  }
  toMarkup() {
    var t, i, r, n;
    let a = (t = this.value) != null ? t : "";
    if (this.children) for (let p of this.children) a += p.toMarkup();
    let o = "";
    if (this.svgBody) o = Mg(this.svgBody);
    else if (this.svgOverlay) {
      o = '<span style="', o += "display: inline-block;", o += `height:${Math.floor(100 * (this.height + this.depth)) / 100}em;`, o += `vertical-align:${Math.floor(100 * this.depth) / 100}em;`, o += '">', o += a, o += "</span>", o += '<svg style="position:absolute;overflow:visible;', o += `height:${Math.floor(100 * (this.height + this.depth)) / 100}em;`;
      let p = (i = this.cssProperties) == null ? void 0 : i.padding;
      p ? (o += `top:${p};`, o += `left:${p};`, o += `width:calc(100% - 2 * ${p} );`) : o += "top:0;left:0;width:100%;", o += "z-index:2;", o += '"', this.svgStyle && (o += this.svgStyle), o += ` viewBox="0 0 ${Math.floor(100 * this.width) / 100} ${Math.floor(100 * (this.height + this.depth)) / 100}"`, o += `>${this.svgOverlay}</svg>`;
    }
    let s = "", l = this.classes.split(" ");
    l.push((r = { latex: "ML__raw-latex", placeholder: "ML__placeholder", error: "ML__error" }[this.type]) != null ? r : ""), this.caret === "latex" && l.push("ML__latex-caret"), this.isSelected && l.push("ML__selected");
    let u = l.length === 1 ? l[0] : l.filter((p, m, y) => p.length > 0 && y.indexOf(p) === m).join(" ");
    if (u.length > 0 && (s += ` class="${u}"`), this.id && (s += ` data-atom-id=${this.id}`), this.cssId && (s += ` id="${this.cssId.replace(/ /g, "-")}" `), this.attributes && (s += " " + Object.keys(this.attributes).map((p) => `${p}="${this.attributes[p]}"`).join(" ")), this.htmlData) {
      let p = this.htmlData.split(",");
      for (let m of p) {
        let y = m.match(/([^=]+)=(.+$)/);
        if (y) {
          let w = y[1].trim().replace(/ /g, "-");
          w && (s += ` data-${w}="${y[2]}" `);
        } else {
          let w = m.trim().replace(/ /g, "-");
          w && (s += ` data-${w} `);
        }
      }
    }
    let c = (n = this.cssProperties) != null ? n : {};
    this.hasExplicitWidth && c.width === void 0 && (c.width = `${Math.ceil(this._width * 100) / 100}em`);
    let d = Object.keys(c).map((p) => `${p}:${c[p]}`);
    if (this.scale !== void 0 && this.scale !== 1 && (a.length > 0 || o.length > 0) && d.push(`font-size: ${Math.ceil(this.scale * 1e4) / 100}%`), this.htmlStyle) {
      let p = this.htmlStyle.split(";"), m = "";
      for (let y of p) {
        let w = y.match(/([^=]+):(.+$)/);
        if (w) {
          let g = w[1].trim().replace(/ /g, "-");
          g && (m += `${g}:${w[2]};`);
        }
      }
      m && (s += ` style="${m}"`);
    }
    d.length > 0 && (s += ` style="${d.join(";")}"`);
    let h = "";
    return s.length > 0 || o.length > 0 ? h = `<span${s}>${a}${o}</span>` : h = a, this.caret === "text" ? h += '<span class="ML__text-caret"></span>' : this.caret === "math" && (h += '<span class="ML__caret"></span>'), h;
  }
  tryCoalesceWith(t) {
    if (this.svgBody || !this.value || t.svgBody || !t.value) return !1;
    let i = this.children && this.children.length > 0, r = t.children && t.children.length > 0;
    if (i || r) return !1;
    if (t.cssProperties || this.cssProperties) {
      for (let l of ["border", "border-left", "border-right", "border-right-width", "left", "margin", "margin-left", "margin-right", "padding", "position", "width"]) if (t.cssProperties && l in t.cssProperties || this.cssProperties && l in this.cssProperties) return !1;
    }
    let n = this.cssProperties ? Object.keys(this.cssProperties).length : 0, a = t.cssProperties ? Object.keys(t.cssProperties).length : 0;
    if (n !== a) return !1;
    if (n > 0) {
      for (let l of Object.keys(this.cssProperties)) if (this.cssProperties[l] !== t.cssProperties[l]) return !1;
    }
    let o = this.classes.trim().replace(/\s+/g, " ").split(" "), s = t.classes.trim().replace(/\s+/g, " ").split(" ");
    if (o.length !== s.length) return !1;
    o.sort(), s.sort();
    for (let [l, u] of o.entries()) if (u === "ML__vertical-separator" || u !== s[l]) return !1;
    return this.value += t.value, this.height = Math.max(this.height, t.height), this.depth = Math.max(this.depth, t.depth), this._width = this._width + t._width, this.maxFontSize = Math.max(this.maxFontSize, t.maxFontSize), this.italic = t.italic, !0;
  }
};
function ol(e) {
  if (!e || e.length === 0) return [];
  e[0].children = ol(e[0].children);
  let t = [e[0]];
  for (let i = 1; i < e.length; i++) t[t.length - 1].tryCoalesceWith(e[i]) || (e[i].children = ol(e[i].children), t.push(e[i]));
  return t;
}
function Bo(e) {
  return e.children && (e.children = ol(e.children)), e;
}
function Ao(e, t) {
  if (!e) return new S(null, t);
  let i = new S(null, { classes: "ML__strut", type: "ignore" });
  i.setStyle("height", Math.max(0, e.height), "em");
  let r = [i];
  if (e.depth !== 0) {
    let n = new S(null, { classes: "ML__strut--bottom", type: "ignore" });
    n.setStyle("height", e.height + e.depth, "em"), n.setStyle("vertical-align", -e.depth, "em"), r.push(n);
  }
  return r.push(e), new S(r, b(f({}, t), { type: "lift" }));
}
function qa(e) {
  let t = Sg(e) / 2, i = new S(null, { maxFontSize: 0 });
  return i.height = t + 0.166, i.depth = t - 0.166, i.svgBody = e, i;
}
function Fg(e, t) {
  var i;
  if (e.type === "latex") {
    e.height = 0.9, e.depth = 0.2, e._width = 1;
    return;
  }
  if (e.value) {
    e.height = -1 / 0, e.depth = -1 / 0, e._width = 0, e.skew = -1 / 0, e.italic = -1 / 0;
    for (let r = 0; r < e.value.length; r++) {
      let n = nr(e.value.codePointAt(r), t);
      e.height = Math.max(e.height, n.height), e.depth = Math.max(e.depth, n.depth), e._width += n.width, e.skew = n.skew, e.italic = n.italic;
    }
    return;
  }
  if (e.children && e.children.length > 0) {
    let r = -1 / 0, n = -1 / 0, a = 0;
    for (let o of e.children) o.height > r && (r = o.height), o.depth > n && (n = o.depth), a = Math.max(a, (i = o.maxFontSize) != null ? i : 0);
    e.height = r, e.depth = n, e._width = e.children.reduce((o, s) => o + s.width, 0), e.maxFontSize = a;
  }
}
function zg(e) {
  if ("individualShift" in e) {
    let t = e.individualShift, i = t[0];
    if (i == null) return [null, 0];
    let r = [i], n = -i.shift - i.box.depth, a = n;
    for (let o = 1; o < t.length; o++) {
      let s = t[o], l = -s.shift - a - s.box.depth, u = l - (i.box.height + i.box.depth);
      a = a + l, r.push(u), r.push(s), i = s;
    }
    return [r, n];
  }
  if ("top" in e) {
    let t = e.top;
    for (let i of e.children) t -= typeof i == "number" ? i : i.box.height + i.box.depth;
    return [e.children, t];
  } else {
    if ("bottom" in e) return [e.children, -e.bottom];
    if ("firstBaseline" in e) {
      let t = e.firstBaseline[0];
      if (typeof t == "number") throw new Error("First child must be an element.");
      return [e.firstBaseline, -t.box.depth];
    } else if ("shift" in e) {
      let t = e.children[0];
      if (typeof t == "number") throw new Error("First child must be an element.");
      return [e.children, -t.box.depth - e.shift];
    }
  }
  return [null, 0];
}
function Kg(e) {
  var t;
  let [i, r] = zg(e);
  if (!i) return [[], 0, 0];
  let n = new S(null, { classes: "ML__pstrut" }), a = 0;
  for (let m of i) if (typeof m != "number") {
    let y = m.box;
    a = Math.max(a, y.maxFontSize, y.height);
  }
  a += 2, n.height = a, n.setStyle("height", a, "em");
  let o = [], s = r, l = r, u = r, c = 0;
  for (let m of i) {
    if (typeof m == "number") u += m;
    else {
      let y = m.box, w = (t = m.classes) != null ? t : [], g = new S([n, y], { classes: w.join(" "), style: m.style });
      y.setStyle("height", y.height + y.depth, "em"), y.setStyle("display", "inline-block"), g.setStyle("top", -a - u - y.depth, "em"), m.marginLeft && g.setStyle("margin-left", m.marginLeft, "em"), m.marginRight && g.setStyle("margin-right", m.marginRight, "em"), o.push(g), u += y.height + y.depth, c = Math.max(c, g.width);
    }
    s = Math.min(s, u), l = Math.max(l, u);
  }
  o.forEach((m) => {
    m.softWidth = c;
  });
  let d = new S(o, { classes: "ML__vlist" });
  if (d.softWidth = c, d.height = l, d.setStyle("height", l, "em"), s >= 0) return [[new S(d, { classes: "ML__vlist-r" })], l, -s];
  let h = new S(new S(null), { classes: "ML__vlist" });
  h.height = -s, h.setStyle("height", -s, "em");
  let p = new S(8203, { classes: "ML__vlist-s", maxFontSize: 0 });
  return p.softWidth = 0, p.height = 0, p.depth = 0, [[new S([d, p], { classes: "ML__vlist-r" }), new S(h, { classes: "ML__vlist-r" })], l, -s];
}
var ae = class extends S {
  constructor(e, t) {
    var i;
    let [r, n, a] = Kg(e);
    super(r.length === 1 ? r[0] : r, { type: t == null ? void 0 : t.type, classes: ((i = t == null ? void 0 : t.classes) != null ? i : "") + " ML__vlist-t" + (r.length === 2 ? " ML__vlist-t2" : "") }), this.height = n, this.depth = a, this.softWidth = r.reduce((o, s) => Math.max(o, s.width), 0);
  }
};
function $g(e, t) {
  var i, r, n, a, o;
  let s = e.metrics, l = new S(t.base), u = (i = t.baseShift) != null ? i : 0, c = (r = t.slant) != null ? r : 0, d = 0, h = 0;
  t.above && (d = (n = t.aboveShift) != null ? n : Math.max(s.bigOpSpacing1, s.bigOpSpacing3 - t.above.depth)), t.below && (h = (a = t.belowShift) != null ? a : Math.max(s.bigOpSpacing2, s.bigOpSpacing4 - t.below.height));
  let p = null;
  if (t.below && t.above) {
    let m = s.bigOpSpacing5 + t.below.height + t.below.depth + h + l.depth + u;
    p = new ae({ bottom: m, children: [s.bigOpSpacing5, { box: t.below, marginLeft: -c, classes: ["ML__center"] }, h, { box: l, classes: ["ML__center"] }, d, { box: t.above, marginLeft: c, classes: ["ML__center"] }, s.bigOpSpacing5] }).wrap(e);
  } else if (t.below && !t.above) p = new ae({ top: l.height - u, children: [s.bigOpSpacing5, { box: t.below, marginLeft: -c, classes: ["ML__center"] }, h, { box: l, classes: ["ML__center"] }] }).wrap(e);
  else if (!t.below && t.above) {
    let m = l.depth + u;
    p = new ae({ bottom: m, children: [{ box: l, classes: ["ML__center"] }, d, { box: t.above, marginLeft: c, classes: ["ML__center"] }, s.bigOpSpacing5] }).wrap(e);
  } else {
    let m = l.depth + u;
    p = new ae({ bottom: m, children: [{ box: l }, s.bigOpSpacing5] }).wrap(e);
  }
  return new S(p, { type: (o = t.type) != null ? o : "op" });
}
var Yl = 7, ro = 6, Eo = 5, xi = 4, hr = 3, Ae = 2, Mi = 1, be = 0, Rt = class {
  constructor(e, t, i) {
    this.id = e, this.sizeDelta = t, this.cramped = i;
    let r = { "-4": 2, "-3": 1, 0: 0 }[t];
    this.metrics = Object.keys(_d).reduce((n, a) => b(f({}, n), { [a]: _d[a][r] }), {});
  }
  getFontSize(e) {
    return Math.max(1, e + this.sizeDelta);
  }
  get sup() {
    return ht[[be, Mi, be, Mi, Ae, hr, Ae, hr][this.id]];
  }
  get sub() {
    return ht[[be, be, be, be, Ae, Ae, Ae, Ae][this.id]];
  }
  get fracNum() {
    return ht[[be, Mi, be, Mi, Ae, hr, xi, Eo][this.id]];
  }
  get fracDen() {
    return ht[[be, be, be, be, Ae, Ae, xi, xi][this.id]];
  }
  get cramp() {
    return ht[[be, be, Ae, Ae, xi, xi, ro, ro][this.id]];
  }
  get isTight() {
    return this.sizeDelta < 0;
  }
}, jr = { 7: new Rt(Yl, 0, !1), 6: new Rt(ro, 0, !0), 5: new Rt(Eo, 0, !1), 4: new Rt(xi, 0, !0), 3: new Rt(hr, -3, !1), 2: new Rt(Ae, -3, !0), 1: new Rt(Mi, -4, !1), 0: new Rt(be, -4, !0) }, ht = b(f({}, jr), { displaystyle: jr[Yl], textstyle: jr[Eo], scriptstyle: jr[hr], scriptscriptstyle: jr[Mi] });
function gp(e, t) {
  var i;
  if (!e) return 0;
  let r = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, ex: 35271 / 8192, px: 3 / 4, em: br, bp: 803 / 800, dd: 1238 / 1157, pc: 12, in: 72.27, mu: 10 / 18 }[(i = e.unit) != null ? i : "pt"];
  if (Number.isFinite(t)) {
    let n = 10 ** t;
    return Math.round(e.dimension / br * r * n) / n;
  }
  return e.dimension * r;
}
function yp(e, t) {
  if (e === null) return 0;
  let i = gp(e) / br;
  if (Number.isFinite(t)) {
    let r = 10 ** t;
    return Math.round(i * r) / r;
  }
  return i;
}
function As(e) {
  var t;
  return `${e.dimension}${(t = e.unit) != null ? t : "pt"}`;
}
function Pg(e) {
  let t = As(e.glue);
  return e.grow && e.grow.dimension !== 0 && (t += ` plus ${As(e.grow)}`), e.shrink && e.shrink.dimension !== 0 && (t += ` minus ${As(e.shrink)}`), t;
}
function pe(e) {
  var t, i;
  if (e == null) return null;
  let r = "";
  if ("dimension" in e && (r = `${e.dimension}${(t = e.unit) != null ? t : "pt"}`), "glue" in e && (r = Pg(e)), "number" in e) if (!("base" in e) || e.base === "decimal") r = Number(e.number).toString();
  else if (e.base === "alpha") r = `\`${String.fromCodePoint(e.number)}`;
  else {
    let n = Math.round(e.number) >>> 0;
    e.base === "hexadecimal" ? (r = Number(n).toString(16).toUpperCase(), n <= 255 ? r = r.padStart(2, "0") : n <= 65535 ? r = r.padStart(4, "0") : n <= 16777215 ? r = r.padStart(6, "0") : r = r.padStart(8, "0"), r = `"${r}`) : e.base === "octal" && (r = Number(n).toString(8), n <= 63 ? r = r.padStart(2, "0") : n <= 30583 ? r = r.padStart(4, "0") : r = r.padStart(8, "0"), r = `'${r}`);
  }
  return "register" in e && ("factor" in e && (e.factor === -1 ? r = "-" : e.factor !== 1 && (r = Number(e.factor).toString())), "global" in e && e.global && (r += "\\global"), r += `\\${e.register}`), "string" in e && (r = e.string), (i = e.relax) != null && i && (r += "\\relax"), r;
}
function lt(e, t) {
  return e == null ? null : "number" in e ? b(f({}, e), { number: e.number * t }) : "register" in e ? "factor" in e && e.factor ? b(f({}, e), { factor: e.factor * t }) : b(f({}, e), { factor: t }) : "dimension" in e ? b(f({}, e), { dimension: e.dimension * t }) : "glue" in e ? e.shrink && e.grow ? { glue: lt(e.glue, t), shrink: lt(e.shrink, t), grow: lt(e.grow, t) } : e.shrink ? { glue: lt(e.glue, t), shrink: lt(e.shrink, t) } : e.grow ? { glue: lt(e.glue, t), grow: lt(e.grow, t) } : { glue: lt(e.glue, t) } : null;
}
var Ng = { "p@": { dimension: 1 }, "z@": { dimension: 0 }, maxdimen: { dimension: 16383.99999 }, hfuzz: { dimension: 0.1 }, vfuzz: { dimension: 0.1 }, overfullrule: { dimension: 5 }, hsize: { dimension: 6.5, unit: "in" }, vsize: { dimension: 8.9, unit: "in" }, parindent: { dimension: 20 }, maxdepth: { dimension: 4 }, splitmaxdepth: { register: "maxdimen" }, boxmaxdepth: { register: "maxdimen" }, delimitershortfall: { dimension: 5 }, nulldelimiterspace: { dimension: 1.2, unit: "pt" }, scriptspace: { dimension: 0.5 }, topskip: { dimension: 10 }, splittopskip: { dimension: 10 }, normalbaselineskip: { dimension: 12 }, normallineskip: { dimension: 1 }, normallineskiplimit: { dimension: 0 }, jot: { dimension: 3 }, doublerulesep: { dimension: 2 }, arrayrulewidth: { dimension: 0.4 }, arraycolsep: { dimension: 5 }, fboxsep: { dimension: 3 }, fboxrule: { dimension: 0.4 }, "z@skip": { glue: { dimension: 0 }, shrink: { dimension: 0 }, grow: { dimension: 0 } }, hideskip: { glue: { dimension: -1e3 }, grow: { dimension: 1, unit: "fill" } }, "@flushglue": { glue: { dimension: 0 }, grow: { dimension: 1, unit: "fill" } }, parskip: { glue: { dimension: 0 }, grow: { dimension: 1 } }, abovedisplayskip: { glue: { dimension: 12 }, grow: { dimension: 3 }, shrink: { dimension: 9 } }, abovedisplayshortskip: { glue: { dimension: 0 }, grow: { dimension: 3 } }, belowdisplayskip: { glue: { dimension: 12 }, grow: { dimension: 3 }, shrink: { dimension: 9 } }, belowdisplayshortskip: { glue: { dimension: 7 }, grow: { dimension: 3 }, shrink: { dimension: 4 } }, parfillskip: { glue: { dimension: 0 }, grow: { dimension: 1, unit: "fil" } }, thinmuskip: { glue: { dimension: 3, unit: "mu" } }, medmuskip: { glue: { dimension: 4, unit: "mu" }, grow: { dimension: 2, unit: "mu" }, shrink: { dimension: 4, unit: "mu" } }, thickmuskip: { glue: { dimension: 5, unit: "mu" }, grow: { dimension: 5, unit: "mu" } }, smallskipamount: { glue: { dimension: 3 }, grow: { dimension: 1 }, shrink: { dimension: 1 } }, medskipamount: { glue: { dimension: 6 }, grow: { dimension: 2 }, shrink: { dimension: 3 } }, bigskipamount: { glue: { dimension: 12 }, grow: { dimension: 2 }, shrink: { dimension: 4 } }, pretolerance: 100, tolerance: 200, hbadness: 1e3, vbadness: 1e3, linepenalty: 10, hyphenpenalty: 50, exhyphenpenalty: 50, binoppenalty: 700, relpenalty: 500, clubpenalty: 150, widowpenalty: 150, displaywidowpenalty: 50, brokenpenalty: 100, predisplaypenalty: 1e4, doublehyphendemerits: 1e4, finalhyphendemerits: 5e3, adjdemerits: 1e4, tracinglostchars: 1, uchyph: 1, delimiterfactor: 901, defaulthyphenchar: "\\-", defaultskewchar: -1, newlinechar: -1, showboxbreadth: 5, showboxdepth: 3, errorcontextlines: 5, interdisplaylinepenalty: 100, interfootnotelinepenalty: 100, baselineSkip: 1.2, arraystretch: 1, month: (/* @__PURE__ */ new Date()).getMonth() + 1, day: (/* @__PURE__ */ new Date()).getDate(), year: (/* @__PURE__ */ new Date()).getFullYear() };
function bp() {
  return f({}, Ng);
}
function vp() {
  return { registers: bp(), smartFence: !1, renderPlaceholder: void 0, placeholderSymbol: "▢", letterShapeStyle: N.locale.startsWith("fr") ? "french" : "tex", minFontScale: 0, colorMap: Lo, backgroundColorMap: Jl, getMacro: (e) => cp(e, Gl()) };
}
var I = class xp {
  constructor(t, i) {
    var r, n, a, o, s, l, u, c, d, h, p, m, y, w, g;
    let k;
    t != null && t.parent ? (this.parent = t.parent, k = t.parent, this.registers = {}) : (k = f(f({}, vp()), (r = t == null ? void 0 : t.from) != null ? r : {}), this.registers = k.registers), k.atomIdsSettings && (this.atomIdsSettings = f({}, k.atomIdsSettings)), this.renderPlaceholder = k.renderPlaceholder, this.isPhantom = (o = (a = t == null ? void 0 : t.isPhantom) != null ? a : (n = this.parent) == null ? void 0 : n.isPhantom) != null ? o : !1, this.letterShapeStyle = k.letterShapeStyle, this.minFontScale = k.minFontScale, i != null && i.color && i.color !== "none" ? this.color = i.color : this.color = (l = (s = this.parent) == null ? void 0 : s.color) != null ? l : "", i != null && i.backgroundColor && i.backgroundColor !== "none" ? this.backgroundColor = i.backgroundColor : this.backgroundColor = (c = (u = this.parent) == null ? void 0 : u.backgroundColor) != null ? c : "", i != null && i.fontSize && i.fontSize !== "auto" && i.fontSize !== ((d = this.parent) == null ? void 0 : d.size) ? this.size = i.fontSize : this.size = (p = (h = this.parent) == null ? void 0 : h.size) != null ? p : Zl;
    let A = (y = (m = this.parent) == null ? void 0 : m.mathstyle) != null ? y : ht.displaystyle;
    if (typeof (t == null ? void 0 : t.mathstyle) == "string") {
      if (k instanceof xp) switch (t.mathstyle) {
        case "cramp":
          A = A.cramp;
          break;
        case "superscript":
          A = A.sup;
          break;
        case "subscript":
          A = A.sub;
          break;
        case "numerator":
          A = A.fracNum;
          break;
        case "denominator":
          A = A.fracDen;
          break;
      }
      switch (t.mathstyle) {
        case "textstyle":
          A = ht.textstyle;
          break;
        case "displaystyle":
          A = ht.displaystyle;
          break;
        case "scriptstyle":
          A = ht.scriptstyle;
          break;
        case "scriptscriptstyle":
          A = ht.scriptscriptstyle;
          break;
      }
    }
    this.mathstyle = A, this.smartFence = k.smartFence, this.placeholderSymbol = k.placeholderSymbol, this.colorMap = (w = k.colorMap) != null ? w : (_) => _, this.backgroundColorMap = (g = k.backgroundColorMap) != null ? g : (_) => _, this.getMacro = k.getMacro, this.parent !== void 0 || this.registers;
  }
  makeID() {
    if (!this.atomIdsSettings) return;
    if (this.atomIdsSettings.overrideID) return this.atomIdsSettings.overrideID;
    if (typeof this.atomIdsSettings.seed != "number") return `${Date.now().toString(36).slice(-2)}${Math.floor(Math.random() * 1e5).toString(36)}`;
    let t = this.atomIdsSettings.seed.toString(36);
    return this.atomIdsSettings.seed += 1, t;
  }
  scale(t) {
    return t * this.effectiveFontSize;
  }
  get scalingFactor() {
    return this.parent ? this.effectiveFontSize / this.parent.effectiveFontSize : 1;
  }
  get isDisplayStyle() {
    return this.mathstyle.id === Yl || this.mathstyle.id === ro;
  }
  get isCramped() {
    return this.mathstyle.cramped;
  }
  get isTight() {
    return this.mathstyle.isTight;
  }
  get metrics() {
    return this.mathstyle.metrics;
  }
  get effectiveFontSize() {
    return Math.max(il[Math.max(1, this.size + this.mathstyle.sizeDelta)], this.minFontScale);
  }
  getRegister(t) {
    var i;
    if ((i = this.registers) != null && i[t]) return this.registers[t];
    if (this.parent) return this.parent.getRegister(t);
  }
  getRegisterAsNumber(t) {
    let i = this.getRegister(t);
    if (typeof i == "number") return i;
    if (typeof i == "string") return Number(i);
  }
  getRegisterAsGlue(t) {
    var i;
    if ((i = this.registers) != null && i[t]) {
      let r = this.registers[t];
      return typeof r == "object" && "glue" in r ? r : typeof r == "object" && "dimension" in r ? { glue: { dimension: r.dimension } } : typeof r == "number" ? { glue: { dimension: r } } : void 0;
    }
    if (this.parent) return this.parent.getRegisterAsGlue(t);
  }
  getRegisterAsEm(t, i) {
    return yp(this.getRegisterAsDimension(t), i);
  }
  getRegisterAsDimension(t) {
    var i;
    if ((i = this.registers) != null && i[t]) {
      let r = this.registers[t];
      return typeof r == "object" && "glue" in r ? r.glue : typeof r == "object" && "dimension" in r ? r : typeof r == "number" ? { dimension: r } : void 0;
    }
    if (this.parent) return this.parent.getRegisterAsDimension(t);
  }
  setRegister(t, i) {
    if (i === void 0) {
      delete this.registers[t];
      return;
    }
    this.registers[t] = i;
  }
  evaluate(t) {
    if (!t || !("register" in t)) return t;
    let i = this;
    if ("global" in t && t.global) for (; i.parent; ) i = i.parent;
    let r = 1;
    "factor" in t && t.factor !== 1 && t.factor !== void 0 && (r = t.factor);
    let n = i.getRegister(t.register);
    if (n === void 0) return;
    if (typeof n == "string") return { string: Number(n).toString() + n };
    if (typeof n == "number") return { number: r * n };
    let a = i.evaluate(n);
    if (a !== void 0) return "string" in a ? { string: Number(n).toString() + a.string } : "number" in a ? { number: r * a.number } : "dimension" in a ? b(f({}, a), { dimension: r * a.dimension }) : "glue" in a ? b(f({}, a), { glue: b(f({}, a.glue), { dimension: r * a.glue.dimension }), shrink: a.shrink ? b(f({}, a.shrink), { dimension: r * a.shrink.dimension }) : void 0, grow: a.grow ? b(f({}, a.grow), { dimension: r * a.grow.dimension }) : void 0 }) : t;
  }
  toDimension(t) {
    let i = this.evaluate(t);
    return i === void 0 ? null : "dimension" in i ? i : "glue" in i ? i.glue : "number" in i ? { dimension: i.number } : null;
  }
  toEm(t, i) {
    if (t === null) return 0;
    let r = this.toDimension(t);
    return r === null ? 0 : gp(r, i) / br;
  }
  toNumber(t) {
    if (t === null) return null;
    let i = this.evaluate(t);
    return i === void 0 ? null : "number" in i ? i.number : "dimension" in i ? i.dimension : "glue" in i ? i.glue.dimension : "string" in i ? Number(i.string) : null;
  }
  toColor(t) {
    var i, r;
    if (t === null) return null;
    let n = this.evaluate(t);
    return n === void 0 ? null : "string" in n ? (r = (i = this.colorMap) == null ? void 0 : i.call(this, n.string)) != null ? r : n.string : null;
  }
  toBackgroundColor(t) {
    var i, r;
    if (t === null) return null;
    let n = this.evaluate(t);
    return n === void 0 ? null : "string" in n ? (r = (i = this.backgroundColorMap) == null ? void 0 : i.call(this, n.string)) != null ? r : n.string : null;
  }
}, vr = ["body", "above", "below", "superscript", "subscript"];
function gi(e) {
  return typeof e == "string" && vr.includes(e);
}
function no(e) {
  return e !== void 0 && Array.isArray(e) && e.length === 2;
}
var v = class _t {
  constructor(t) {
    var i, r, n, a, o, s;
    this.type = t.type, typeof t.value == "string" && (this.value = t.value), this.command = (r = (i = t.command) != null ? i : this.value) != null ? r : "", this.mode = (n = t.mode) != null ? n : "math", t.isFunction && (this.isFunction = !0), t.limits && (this.subsupPlacement = t.limits), this.style = f({}, t.style), this.displayContainsHighlight = (a = t.displayContainsHighlight) != null ? a : !1, this.captureSelection = (o = t.captureSelection) != null ? o : !1, this.skipBoundary = (s = t.skipBoundary) != null ? s : !1, t.verbatimLatex !== void 0 && t.verbatimLatex !== null && (this.verbatimLatex = t.verbatimLatex), t.args && (this.args = t.args), t.body && (this.body = t.body), this._changeCounter = 0;
  }
  static createBox(t, i, r) {
    var n;
    if (!i) return null;
    let a = Og(i), o = [];
    for (let l of a) {
      let u = l[0].style, c = Ig(t, l, { style: { color: u.color, backgroundColor: u.backgroundColor, fontSize: u.fontSize } });
      c && o.push(c);
    }
    if (o.length === 0) return null;
    let s = ((n = r == null ? void 0 : r.classes) != null ? n : "").trim();
    return o.length === 1 && !s && !(r != null && r.type) ? o[0].wrap(t) : new S(o, { classes: s, type: r == null ? void 0 : r.type }).wrap(t);
  }
  static serialize(t, i) {
    return De.serialize(t, i);
  }
  static commonAncestor(t, i) {
    if (t === i || t.parent === i.parent) return t.parent;
    let r = /* @__PURE__ */ new WeakSet(), { parent: n } = t;
    for (; n; ) r.add(n), n = n.parent;
    for (n = i.parent; n; ) {
      if (r.has(n)) return n;
      n = n.parent;
    }
  }
  static fromJson(t) {
    return typeof t == "string" ? new _t({ type: "mord", value: t, mode: "math" }) : new _t(t);
  }
  get latexMode() {
    return this.mode === "math" ? "math" : "text";
  }
  toJson() {
    let t = {};
    if (this.type && (t.type = this.type), this.mode !== "math" && (t.mode = this.mode), this.command && this.command !== this.value && (t.command = this.command), this.value !== void 0 && (t.value = this.value), this.style && Object.keys(this.style).length > 0 && (t.style = f({}, this.style)), this.verbatimLatex !== void 0 && (t.verbatimLatex = this.verbatimLatex), this.subsupPlacement && (t.subsupPlacement = this.subsupPlacement), this.explicitSubsupPlacement && (t.explicitSubsupPlacement = !0), this.isFunction && (t.isFunction = !0), this.displayContainsHighlight && (t.displayContainsHighlight = !0), this.isExtensibleSymbol && (t.isExtensibleSymbol = !0), this.skipBoundary && (t.skipBoundary = !0), this.captureSelection && (t.captureSelection = !0), this.args && (t.args = Rg(this.args)), this._branches) for (let i of Object.keys(this._branches)) this._branches[i] && (t[i] = this._branches[i].filter((r) => r.type !== "first").map((r) => r.toJson()));
    return t.type === "mord" && Object.keys(t).length === 2 && "value" in t ? t.value : t;
  }
  get changeCounter() {
    return this.parent ? this.parent.changeCounter : this._changeCounter;
  }
  set isDirty(t) {
    if (t) {
      this.parent || this._changeCounter++, "verbatimLatex" in this && (this.verbatimLatex = void 0), this._children = void 0;
      let { parent: i } = this;
      for (; i; ) i.parent || i._changeCounter++, "verbatimLatex" in i && (i.verbatimLatex = void 0), i._children = void 0, i = i.parent;
    }
  }
  _serialize(t) {
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let i = fe(this.command, this.mode);
    return i != null && i.serialize ? i.serialize(this, t) : this.body && this.command ? R([Z(this.command, this.bodyToLatex(t)), this.supsubToLatex(t)]) : this.body ? R([this.bodyToLatex(t), this.supsubToLatex(t)]) : !this.value || this.value === "​" ? "" : this.command;
  }
  bodyToLatex(t) {
    var i;
    return De.serialize(this.body, b(f({}, t), { defaultMode: (i = t.defaultMode) != null ? i : this.latexMode }));
  }
  aboveToLatex(t) {
    return De.serialize(this.above, t);
  }
  belowToLatex(t) {
    return De.serialize(this.below, t);
  }
  supsubToLatex(t) {
    let i = "";
    if (t = b(f({}, t), { defaultMode: "math" }), this.branch("subscript") !== void 0) {
      let r = De.serialize(this.subscript, t);
      r.length === 0 ? i += "_{}" : r.length === 1 ? /^[0-9]$/.test(r) ? i += `_${r}` : i += `_{${r}}` : i += `_{${r}}`;
    }
    if (this.branch("superscript") !== void 0) {
      let r = De.serialize(this.superscript, t);
      r.length === 0 ? i += "^{}" : r.length === 1 ? r === "′" ? i += "^\\prime " : r === "″" ? i += "^\\doubleprime " : /^[0-9]$/.test(r) ? i += `^${r}` : i += `^{${r}}` : i += `^{${r}}`;
    }
    return i;
  }
  get treeDepth() {
    let t = 1, i = this.parent;
    for (; i; ) i = i.parent, t += 1;
    return t;
  }
  get inCaptureSelection() {
    let t = this;
    for (; t; ) {
      if (t.captureSelection) return !0;
      t = t.parent;
    }
    return !1;
  }
  get parentPrompt() {
    let t = this.parent;
    for (; t; ) {
      if (t.type === "prompt" && !t.captureSelection) return t;
      t = t.parent;
    }
    return null;
  }
  branch(t) {
    if (gi(t) && this._branches) return this._branches[t];
  }
  get branches() {
    if (!this._branches) return [];
    let t = [];
    for (let i of vr) this._branches[i] && t.push(i);
    return t;
  }
  createBranch(t) {
    return gi(t), gi(t) ? (this._branches ? this._branches[t] || (this._branches[t] = [this.makeFirstAtom(t)]) : this._branches = { [t]: [this.makeFirstAtom(t)] }, this.isDirty = !0, this._branches[t]) : [];
  }
  get row() {
    return no(this.parentBranch) ? this.parentBranch[0] : -1;
  }
  get col() {
    return no(this.parentBranch) ? this.parentBranch[1] : -1;
  }
  get body() {
    var t;
    return (t = this._branches) == null ? void 0 : t.body;
  }
  set body(t) {
    this.setChildren(t, "body");
  }
  get superscript() {
    var t;
    return (t = this._branches) == null ? void 0 : t.superscript;
  }
  set superscript(t) {
    this.setChildren(t, "superscript");
  }
  get subscript() {
    var t;
    return (t = this._branches) == null ? void 0 : t.subscript;
  }
  set subscript(t) {
    this.setChildren(t, "subscript");
  }
  get above() {
    var t;
    return (t = this._branches) == null ? void 0 : t.above;
  }
  set above(t) {
    this.setChildren(t, "above");
  }
  get below() {
    var t;
    return (t = this._branches) == null ? void 0 : t.below;
  }
  set below(t) {
    this.setChildren(t, "below");
  }
  get computedStyle() {
    var t, i;
    let r = typeof this.style.verbatimColor == "string", n = typeof this.style.verbatimBackgroundColor == "string", a = f(f({}, (i = (t = this.parent) == null ? void 0 : t.computedStyle) != null ? i : {}), this.style);
    return delete a.variant, delete a.variantStyle, n || delete a.verbatimBackgroundColor, r || delete a.verbatimColor, a;
  }
  applyStyle(t) {
    this.isDirty = !0, this.style = f(f({}, this.style), t), this.style.fontFamily === "none" && delete this.style.fontFamily, this.style.fontShape === "auto" && delete this.style.fontShape, this.style.fontSeries === "auto" && delete this.style.fontSeries, this.style.color === "none" && (delete this.style.color, delete this.style.verbatimColor), this.style.backgroundColor === "none" && (delete this.style.backgroundColor, delete this.style.verbatimBackgroundColor), this.style.fontSize === "auto" && delete this.style.fontSize;
    for (let i of this.children) i.applyStyle(t);
  }
  getInitialBaseElement() {
    var t, i, r;
    return this.hasEmptyBranch("body") ? this : ((t = this.body) == null || t[0].type, (r = (i = this.body[1]) == null ? void 0 : i.getInitialBaseElement()) != null ? r : this);
  }
  getFinalBaseElement() {
    return this.hasEmptyBranch("body") ? this : this.body[this.body.length - 1].getFinalBaseElement();
  }
  isCharacterBox() {
    return this.type === "leftright" || this.type === "genfrac" || this.type === "subsup" || this.type === "delim" || this.type === "array" || this.type === "surd" ? !1 : this.getFinalBaseElement().type === "mord";
  }
  hasEmptyBranch(t) {
    let i = this.branch(t);
    return i ? (i.length > 0, i[0].type, i.length === 1) : !0;
  }
  setChildren(t, i) {
    var r;
    if (!t || (gi(i), !gi(i))) return;
    (r = t[0]) == null || r.type;
    let n = [this.makeFirstAtom(i), ...t];
    this._branches ? this._branches[i] = n : this._branches = { [i]: n };
    for (let a of t) a.parent = this, a.parentBranch = i;
    this.isDirty = !0;
  }
  makeFirstAtom(t) {
    let i = new _t({ type: "first", mode: this.mode });
    return i.parent = this, i.parentBranch = t, i;
  }
  addChild(t, i) {
    t.type, this.createBranch(i).push(t), this.isDirty = !0, t.parent = this, t.parentBranch = i;
  }
  addChildBefore(t, i) {
    i.parentBranch;
    let r = this.createBranch(i.parentBranch);
    r.splice(r.indexOf(i), 0, t), this.isDirty = !0, t.parent = this, t.parentBranch = i.parentBranch;
  }
  addChildAfter(t, i) {
    i.parentBranch;
    let r = this.createBranch(i.parentBranch);
    r.splice(r.indexOf(i) + 1, 0, t), this.isDirty = !0, t.parent = this, t.parentBranch = i.parentBranch;
  }
  addChildren(t, i) {
    let r = this.createBranch(i);
    for (let n of t) n.parent = this, n.parentBranch = i, r.push(n);
    this.isDirty = !0;
  }
  addChildrenAfter(t, i) {
    t.length === 0 || t[0].type, i.parentBranch;
    let r = this.createBranch(i.parentBranch);
    r.splice(r.indexOf(i) + 1, 0, ...t), this.isDirty = !0;
    for (let n of t) n.parent = this, n.parentBranch = i.parentBranch;
    return t[t.length - 1];
  }
  removeBranch(t) {
    let i = this.branch(t);
    if (gi(t) && (this._branches[t] = void 0), !i) return [];
    for (let r of i) r.parent = void 0, r.parentBranch = void 0;
    return i[0].type, i.shift(), this.isDirty = !0, i;
  }
  removeChild(t) {
    if (t.parent, t.type === "first") return;
    let i = this.branch(t.parentBranch), r = i.indexOf(t);
    i.splice(r, 1), this.isDirty = !0, t.parent = void 0, t.parentBranch = void 0;
  }
  get siblings() {
    return this.parent ? this.parent.branch(this.parentBranch) : [];
  }
  get firstSibling() {
    return this.siblings[0];
  }
  get lastSibling() {
    let { siblings: t } = this;
    return t[t.length - 1];
  }
  get isFirstSibling() {
    return this === this.firstSibling;
  }
  get isLastSibling() {
    return this === this.lastSibling;
  }
  get hasNoSiblings() {
    return this.siblings.length === 1;
  }
  get leftSibling() {
    this.parent;
    let t = this.parent.branch(this.parentBranch);
    return t[t.indexOf(this) - 1];
  }
  get rightSibling() {
    this.parent;
    let t = this.parent.branch(this.parentBranch);
    return t[t.indexOf(this) + 1];
  }
  get hasChildren() {
    return !!(this._branches && this.children.length > 0);
  }
  get firstChild() {
    return this.hasChildren, this.children[0];
  }
  get lastChild() {
    this.hasChildren;
    let { children: t } = this;
    return t[t.length - 1];
  }
  get children() {
    if (this._children) return this._children;
    if (!this._branches) return [];
    let t = [];
    for (let i of vr) if (this._branches[i]) for (let r of this._branches[i]) t.push(...r.children), t.push(r);
    return this._children = t, t;
  }
  render(t) {
    if (this.type === "first" && !t.atomIdsSettings) return null;
    let i = fe(this.command, this.mode);
    if (i != null && i.render) return i.render(this, t);
    let r = new I({ parent: t }, this.style), n = this.createBox(r, { classes: this.parent ? "" : "ML__base" });
    return n ? (!this.subsupPlacement && (this.superscript || this.subscript) && (n = this.attachSupsub(r, { base: n })), n.wrap(r)) : null;
  }
  attachSupsub(t, i) {
    var r;
    let n = i.base, a = this.superscript, o = this.subscript;
    if (!a && !o) return n;
    let s = null, l = null, u = (r = i.isCharacterBox) != null ? r : this.isCharacterBox(), c = 0;
    if (a) {
      let y = new I({ parent: t, mathstyle: "superscript" });
      s = _t.createBox(y, a), u || (c = n.height - t.metrics.supDrop * y.scalingFactor);
    }
    let d = 0;
    if (o) {
      let y = new I({ parent: t, mathstyle: "subscript" });
      l = _t.createBox(y, o), u || (d = n.depth + t.metrics.subDrop * y.scalingFactor);
    }
    let h;
    t.isDisplayStyle ? h = t.metrics.sup1 : t.isCramped ? h = t.metrics.sup3 : h = t.metrics.sup2;
    let p = 0.5 / br / t.scalingFactor, m = null;
    if (l && s) {
      c = Math.max(c, h, s.depth + 0.25 * t.metrics.xHeight), d = Math.max(d, t.metrics.sub2);
      let y = t.metrics.defaultRuleThickness;
      if (c - s.depth - (l.height - d) < 4 * y) {
        d = 4 * y - (c - s.depth) + l.height;
        let g = 0.8 * t.metrics.xHeight - (c - s.depth);
        g > 0 && (c += g, d -= g);
      }
      let w = this.isExtensibleSymbol && n.italic ? -n.italic : 0;
      m = new ae({ individualShift: [{ box: l, shift: d, marginLeft: w }, { box: s, shift: -c }] }).wrap(t);
    } else l && !s ? (d = Math.max(d, t.metrics.sub1, l.height - 0.8 * Jt), m = new ae({ shift: d, children: [{ box: l, marginRight: p, marginLeft: this.isCharacterBox() ? -n.italic : 0 }] })) : !l && s && (c = Math.max(c, h, s.depth + 0.25 * Jt), m = new ae({ shift: -c, children: [{ box: s, marginRight: p }] }));
    return new S([n, new S(m, { caret: this.caret, isSelected: this.isSelected, classes: "ML__msubsup" })], { type: i.type });
  }
  attachLimits(t, i) {
    let r = this.superscript ? _t.createBox(new I({ parent: t, mathstyle: "superscript" }, this.style), this.superscript) : null, n = this.subscript ? _t.createBox(new I({ parent: t, mathstyle: "subscript" }, this.style), this.subscript) : null;
    return !r && !n ? i.base.wrap(t) : $g(t, b(f({}, i), { above: r, below: n }));
  }
  bind(t, i) {
    if (!i || t.isPhantom || this.value === "​") return i;
    let r = this.parent;
    for (; r && !r.captureSelection; ) r = r.parent;
    return r != null && r.captureSelection || (this.id || (this.id = t.makeID()), i.atomID = this.id), i;
  }
  createBox(t, i) {
    var r, n, a, o;
    let s = (r = this.value) != null ? r : this.body, l = (n = i == null ? void 0 : i.boxType) != null ? n : al(this.type), u = (a = i == null ? void 0 : i.classes) != null ? a : "";
    this.mode === "text" && (u += " ML__text");
    let c = typeof s == "string" || s === void 0 ? new S(s ?? null, { type: l, isSelected: this.isSelected, mode: this.mode, maxFontSize: t.scalingFactor, style: b(f({ variant: "normal" }, this.style), { fontSize: Math.max(1, t.size + t.mathstyle.sizeDelta) }), letterShapeStyle: t.letterShapeStyle, classes: u }) : (o = _t.createBox(t, s, { type: l, classes: u })) != null ? o : new S(null);
    return t.isTight && (c.isTight = !0), (this.mode !== "math" || this.style.variant === "main") && (c.italic = 0), c.right = c.italic, this.bind(t, c), this.caret && !this.superscript && !this.subscript && (c.caret = this.caret), c;
  }
  isDigit() {
    var t;
    return this.type === "mord" && this.value ? /^[\d,\.]$/.test(this.value) : this.type === "group" && ((t = this.body) == null ? void 0 : t.length) === 2 ? this.body[0].type === "first" && this.body[1].value === "," : !1;
  }
  asDigit() {
    var t;
    return this.type === "mord" && this.value && /^[\d,\.]$/.test(this.value) ? this.value : this.type === "group" && ((t = this.body) == null ? void 0 : t.length) === 2 && this.body[0].type === "first" && this.body[1].value === "," ? "." : "";
  }
};
function Og(e) {
  let t, i = [], r = [];
  for (let n of e) if (!t && !n.style) r.push(n);
  else {
    let a = n.computedStyle;
    t && a.color === t.color && a.backgroundColor === t.backgroundColor && a.fontSize === t.fontSize ? r.push(n) : (r.length > 0 && i.push(r), r = [n], t = a);
  }
  return r.length > 0 && i.push(r), i;
}
function Ig(e, t, i) {
  var r, n, a, o, s;
  if (!t || t.length === 0) return null;
  let l = new I({ parent: e }, i.style), u = !((r = l.atomIdsSettings) != null && r.groupNumbers), c = [];
  if (t.length === 1) {
    let h = t[0], p = h.render(l);
    p && (u && h.isSelected && p.selected(!0), c = [p]);
  } else {
    let h = "", p = !0;
    for (let m of t) {
      (n = l.atomIdsSettings) != null && n.groupNumbers && h && (p && m.isDigit() || !p && Es(m)) && (l.atomIdsSettings.overrideID = h);
      let y = m.render(l);
      l.atomIdsSettings && (l.atomIdsSettings.overrideID = void 0), y && ((a = l.atomIdsSettings) != null && a.groupNumbers && ((m.isDigit() || Es(m)) && (!h || p !== m.isDigit()) && (p = m.isDigit(), h = (o = m.id) != null ? o : ""), h && (!(m.isDigit() || Es(m)) || !m.hasEmptyBranch("superscript") || !m.hasEmptyBranch("subscript")) && (h = "")), u && m.isSelected && y.selected(!0), c.push(y));
    }
  }
  if (c.length === 0) return null;
  let d = new S(c, b(f({ isTight: l.isTight }, i), { type: (s = i.type) != null ? s : "lift" }));
  return d.isSelected = c.every((h) => h.isSelected), d.wrap(l);
}
function Es(e) {
  return e.mode === "text";
}
function Rg(e) {
  return e.map((t) => t === null ? "<null>" : Array.isArray(t) && t[0] instanceof v ? { atoms: t.map((i) => i.toJson()) } : typeof t == "object" && "group" in t ? { group: t.group.map((i) => i.toJson()) } : t);
}
var Ln = class wp extends v {
  constructor(t, i, r) {
    super({ type: "text", command: t, mode: "text", displayContainsHighlight: !0 }), this.value = i, this.verbatimLatex = i, this.applyStyle(r);
  }
  static fromJson(t) {
    return new wp(t.command, t.value, t.style);
  }
  render(t) {
    let i = this.createBox(t);
    return this.caret && (i.caret = this.caret), i;
  }
  _serialize(t) {
    var i;
    return (i = this.verbatimLatex) != null ? i : dp("text", this.value.codePointAt(0));
  }
};
function qg(e, t) {
  if (e.direction === t.direction) {
    let i = e.ranges.length;
    if (t.ranges.length === i) {
      let r = 0;
      for (; r < i && jg(e.ranges[r], t.ranges[r]) === "equal"; ) r++;
      return r === i ? "equal" : "different";
    }
  }
  return "different";
}
function jg(e, t) {
  return e[0] === t[0] && e[1] === t[1] ? "equal" : "different";
}
function ge(e) {
  let t = 1 / 0, i = -1 / 0;
  for (let r of e.ranges) t = Math.min(t, r[0], r[1]), i = Math.max(i, r[0], r[1]);
  return [t, i];
}
function Vt(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function ao(e) {
  return Array.isArray(e) && e.length === 2;
}
function ja(e) {
  return e != null && typeof e == "object" && "ranges" in e && Array.isArray(e.ranges);
}
function Vg(e, t) {
  let i = e.at(t), r;
  if (i) {
    r = i.mode;
    let n = i.parent;
    for (; !r && n; ) n && (r = n.mode), n = n.parent;
  }
  return r;
}
function Hg(e, t) {
  if (!t) return "";
  if (typeof t == "string") return t;
  if (!e || t.after === void 0) return t.value;
  let i = !1, r = !1, n = !1, a = !1, o = !1, s = !1, l = !1, u = !1, c = !1, d = !1, h = !1, p = !1, m = !1, y = !1, w = !1, g = e[0], k = 0;
  for (; g != null && g.type && /^(subsup|placeholder)$/.test(g.type); ) k += 1, g = e[k];
  return i = !g || g.type === "first", g && (y = g.mode === "text", r = !y && g.type === "mord" && el.test(g.value), n = !y && g.type === "mord" && /\d+$/.test(g.value), a = !y && g.isFunction, o = g.type === "genfrac", s = g.type === "surd", l = g.type === "mbin", u = g.type === "mrel", c = g.type === "mop" || g.type === "operator" || g.type === "extensible-symbol", d = g.type === "mpunct" || g.type === "minner", h = g.type === "array", p = g.type === "mopen", m = g.type === "mclose" || g.type === "leftright", w = g.type === "space"), t.after.includes("nothing") && i || t.after.includes("letter") && r || t.after.includes("digit") && n || t.after.includes("function") && a || t.after.includes("frac") && o || t.after.includes("surd") && s || t.after.includes("binop") && l || t.after.includes("relop") && u || t.after.includes("operator") && c || t.after.includes("punct") && d || t.after.includes("array") && h || t.after.includes("openfence") && p || t.after.includes("closefence") && m || t.after.includes("text") && y || t.after.includes("space") && w ? t.value : "";
}
function Ql(e, t, i) {
  return i ? Hg(e, i[t]) : "";
}
var kp = { "&": "\\&", "%": "\\%", $: "\\$", "''": "^{\\doubleprime}", "'''": "^{\\prime\\prime\\prime}", "''''": "^{\\prime\\prime\\prime\\prime}", alpha: "\\alpha", delta: "\\delta", Delta: "\\Delta", pi: "\\pi", Pi: "\\Pi", theta: "\\theta", Theta: "\\Theta", ii: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\imaginaryI" }, jj: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\imaginaryJ" }, ee: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\exponentialE" }, nabla: "\\nabla", grad: "\\nabla", del: "\\partial", deg: { after: "digit+space", value: "\\degree" }, infty: "\\infty", "∞": "\\infty", oo: { after: "nothing+digit+frac+surd+binop+relop+punct+array+openfence+closefence+space", value: "\\infty" }, "∑": "\\sum", sum: "\\sum_{#?}^{#?}", int: "\\int_{#?}^{#?}", prod: "\\prod_{#?}^{#?}", sqrt: "\\sqrt{#?}", "∆": "\\differentialD", "∂": "\\differentialD", arcsin: "\\arcsin", arccos: "\\arccos", arctan: "\\arctan", arcsec: "\\arcsec", arccsc: "\\arccsc", arsinh: "\\arsinh", arcosh: "\\arcosh", artanh: "\\artanh", arcsech: "\\arcsech", arccsch: "\\arccsch", arg: "\\arg", ch: "\\ch", cosec: "\\cosec", cosh: "\\cosh", cot: "\\cot", cotg: "\\cotg", coth: "\\coth", csc: "\\csc", ctg: "\\ctg", cth: "\\cth", sec: "\\sec", sinh: "\\sinh", sh: "\\sh", tanh: "\\tanh", tg: "\\tg", th: "\\th", sin: "\\sin", cos: "\\cos", tan: "\\tan", lg: "\\lg", lb: "\\lb", log: "\\log", ln: "\\ln", exp: "\\exp", lim: "\\lim_{#?}", dx: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\differentialD x" }, dy: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\differentialD y" }, dt: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\differentialD t" }, AA: "\\forall", EE: "\\exists", "!EE": "\\nexists", "&&": "\\land", xin: { after: "nothing+text+relop+punct+openfence+space", value: "x \\in" }, sint: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\sin t" }, in: { after: "nothing+letter+closefence", value: "\\in" }, "!in": "\\notin", NN: "\\mathbb{N}", ZZ: "\\Z", QQ: "\\Q", RR: "\\R", CC: "\\C", xx: "\\times", "+-": "\\pm", "≠": "\\ne", "!=": "\\ne", "≥": "\\ge", ">=": "\\ge", "≤": "\\le", "<=": "\\le", "<<": "\\ll", ">>": "\\gg", "~~": "\\approx", "≈": "\\approx", "?=": "\\questeq", "÷": "\\div", "¬": "\\neg", ":=": "\\coloneq", "::": "\\Colon", "(:": "\\langle", ":)": "\\rangle", beta: "\\beta", chi: "\\chi", epsilon: "\\epsilon", varepsilon: "\\varepsilon", eta: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\eta" }, gamma: "\\gamma", Gamma: "\\Gamma", iota: "\\iota", kappa: "\\kappa", lambda: "\\lambda", Lambda: "\\Lambda", mu: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\mu" }, nu: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\nu" }, µ: "\\mu", phi: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\phi" }, Phi: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\Phi" }, varphi: "\\varphi", psi: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\psi" }, Psi: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\Psi" }, rho: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\rho" }, sigma: "\\sigma", Sigma: "\\Sigma", tau: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\tau" }, vartheta: "\\vartheta", upsilon: "\\upsilon", xi: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space", value: "\\xi" }, Xi: { after: "nothing+digit+function+frac+surd+binop+relop+punct+array+openfence+closefence+space+text", value: "\\Xi" }, zeta: "\\zeta", omega: "\\omega", Omega: "\\Omega", Ω: "\\omega", forall: "\\forall", exists: "\\exists", "!exists": "\\nexists", ":.": "\\therefore", liminf: "\\liminf_{#?}", limsup: "\\limsup_{#?}", argmin: "\\operatorname*{arg~min}_{#?}", argmax: "\\operatorname*{arg~max}_{#?}", det: "\\det", mod: "\\bmod{#?}", "(mod": "\\pmod{#?}", max: "\\max", min: "\\min", erf: "\\operatorname{erf}", erfc: "\\operatorname{erfc}", bessel: "\\operatorname{bessel}", mean: "\\operatorname{mean}", median: "\\operatorname{median}", fft: "\\operatorname{fft}", lcm: "\\operatorname{lcm}", gcd: "\\operatorname{gcd}", randomReal: "\\operatorname{randomReal}", randomInteger: "\\operatorname{randomInteger}", Re: "\\operatorname{Re}", Im: "\\operatorname{Im}", mm: { after: "nothing+digit+operator", value: "\\operatorname{mm}" }, cm: { after: "nothing+digit+operator", value: "\\operatorname{cm}" }, km: { after: "nothing+digit+operator", value: "\\operatorname{km}" }, kg: { after: "nothing+digit+operator", value: "\\operatorname{kg}" }, "...": "\\ldots", "+...": "+\\cdots", "-...": "-\\cdots", "->...": "\\to\\cdots", "-->...": "\\longrightarrow\\cdots", "->": "\\to", "|->": "\\mapsto", "-->": "\\longrightarrow", "<--": "\\longleftarrow", "=>": "\\Rightarrow", "==>": "\\Longrightarrow", "<=>": "\\Leftrightarrow", "<->": "\\leftrightarrow", "(.)": "\\odot", "(+)": "\\oplus", "(/)": "\\oslash", "(*)": "\\otimes", "(-)": "\\ominus", "||": "\\Vert", "*": "\\cdot", "**": "\\star", "***": "\\ast", "//": "\\slash", "\\\\": "\\backslash", setminus: "\\backslash", "|><": "\\ltimes", "><|": "\\rtimes", "|><|": "\\bowtie", "-:": "\\div", divide: "\\div", "@": "\\circ", "^^": "\\wedge", "^^^": "\\bigwedge", vv: "\\vee", vvv: "\\bigvee", nn: "\\cap", nnn: "\\bigcap", uu: "\\cup", uuu: "\\bigcup", "-=": "\\equiv", "~=": "\\cong", lt: "<", "lt=": "\\leq", gt: ">", "gt=": "\\geq", "-<": "\\prec", "-lt": "\\prec", "-<=": "\\preceq", ">-=": "\\succeq", prop: "\\propto", diamond: "\\diamond", square: "\\square", iff: "\\iff", sub: "\\subset", sup: "\\supset", sube: "\\subseteq", supe: "\\supseteq", uarr: "\\uparrow", darr: "\\downarrow", rarr: "\\rightarrow", rArr: "\\Rightarrow", larr: "\\leftarrow", lArr: "\\Leftarrow", harr: "\\leftrightarrow", hArr: "\\Leftrightarrow", aleph: "\\aleph", and: "\\land", or: "\\lor", not: "\\neg", "_|_": "\\bot", TT: "\\top", "|--": "\\vdash", "|==": "\\models", "|__": "\\lfloor", "__|": "\\rfloor", "|~": "\\lceil", "~|": "\\rceil", ">->": "\\rightarrowtail", "->>": "\\twoheadrightarrow", ">->>": "\\twoheadrightarrowtail", frac: "\\frac{#?}{#?}", cbrt: "\\sqrt[3]{#?}", nthroot: "\\sqrt[#?]{#?}" };
function Ad(e, t) {
  var i;
  let r = (i = t == null ? void 0 : t.format) != null ? i : "auto";
  return r === "auto" && ([r, e] = Wg(e)), r === "ascii-math" ? (e = e.replace(/\u2061/gu, ""), e = e.replace(/\u3016/gu, "{"), e = e.replace(/\u3017/gu, "}"), e = e.replace(/([^\\])sinx/g, "$1\\sin x"), e = e.replace(/([^\\])cosx/g, "$1\\cos x "), e = e.replace(/\u2013/g, "-"), ["ascii-math", ke(e, { inlineShortcuts: t == null ? void 0 : t.inlineShortcuts })]) : ["latex", e];
}
function ke(e, t) {
  var i;
  if (e = e.trim(), !e) return "";
  let r = (i = t.inlineShortcuts) != null ? i : kp;
  if (e.startsWith("^") || e.startsWith("_")) {
    let { match: s, rest: l } = ui(e.slice(1), { inlineShortcuts: r, noWrap: !0 });
    return `${e[0]}{${s}}${ke(l, t)}`;
  }
  let n = e.match(/^(sqrt|\u221A)(.*)/);
  if (n) {
    let { match: s, rest: l } = ui(n[2], { inlineShortcuts: r, noWrap: !0 });
    return `\\sqrt{${s ?? "\\placeholder{}"}}${ke(l, t)}`;
  }
  if (n = e.match(/^(\\cbrt|\u221B)(.*)/), n) {
    let { match: s, rest: l } = ui(n[2], { inlineShortcuts: r, noWrap: !0 });
    return `\\sqrt[3]{${s ?? "\\placeholder{}"}}${ke(l, t)}`;
  }
  if (n = e.match(/^abs(.*)/), n) {
    let { match: s, rest: l } = ui(n[1], { inlineShortcuts: r, noWrap: !0 });
    return `\\left|${s ?? "\\placeholder{}"}\\right|${ke(l, t)}`;
  }
  if (n = e.match(/^["”“](.*?)["”“](.*)/), n) return `\\text{${n[1]}}${ke(n[2], t)}`;
  if (n = e.match(/^([^a-zA-Z\(\{\[\_\^\\\s"]+)(.*)/), n) return `${Ed(n[1], r)}${ke(n[2], t)}`;
  if (/^([fgh])[^a-zA-Z]/.test(e)) {
    let { rest: s, match: l } = ui(e.slice(1), { inlineShortcuts: r, noWrap: !0 }), u = "";
    return e[1] === "(" ? u = `${e[0]}\\left(${l}\\right)` : u = e[0] + l, u + ke(s, t);
  }
  if (n = e.match(/^([a-zA-Z]+)(.*)/), n) return Ed(n[1], r) + ke(n[2], t);
  let { match: a, rest: o } = ui(e, { inlineShortcuts: r, noWrap: !0 });
  if (a && o[0] === "/") {
    let s = ui(o.slice(1), { inlineShortcuts: r, noWrap: !0 });
    if (s.match) return `\\frac{${a}}{${s.match}}${ke(s.rest, t)}`;
  } else if (a) return e.startsWith("(") ? "\\left(" + a + "\\right)" + ke(o, t) : a + ke(o, t);
  return n = e.match(/^(\s+)(.*)$/), n ? " " + ke(n[2], t) : e;
}
function ui(e, t) {
  let i = "";
  e = e.trim();
  let r = e, n = e.charAt(0), a = { "(": ")", "{": "}", "[": "]" }[n];
  if (a) {
    let o = 1, s = 1;
    for (; s < e.length && o > 0; ) e[s] === n && o++, e[s] === a && o--, s++;
    o === 0 ? (t.noWrap && n === "(" ? i = ke(e.substring(1, s - 1), t) : (n === "{" && a === "}" && (n = "\\{", a = "\\}"), i = "\\left" + n + ke(e.substring(1, s - 1), t) + "\\right" + a), r = e.slice(Math.max(0, s))) : (i = e.substring(1, s), r = "");
  } else {
    let o = e.match(/^([a-zA-Z]+)/);
    if (o) {
      let s = Ql(null, e, t.inlineShortcuts);
      if (s) return s = s.replace("_{#?}", ""), s = s.replace("^{#?}", ""), { match: s, rest: e.slice(s.length) };
    }
    if (o = e.match(/^([a-zA-Z])/), o) return { match: o[1], rest: e.slice(1) };
    if (o = e.match(/^(-)?\d+(\.\d*)?/), o) return { match: o[0], rest: e.slice(o[0].length) };
    /^\\(left|right)/.test(e) || (o = e.match(/^(\\[a-zA-Z]+)/), o && (r = e.slice(o[1].length), i = o[1]));
  }
  return { match: i, rest: r };
}
function Ed(e, t) {
  let i = Ql(null, e, t);
  return i ? (i = i.replace("_{#?}", ""), i = i.replace("^{#?}", ""), i += " ") : i = e, i;
}
var _p = [["\\[", "\\]"], ["\\(", "\\)"], ["$$", "$$"], ["$", "$"], ["\\begin{math}", "\\end{math}"], ["\\begin{displaymath}", "\\end{displaymath}"], ["\\begin{equation}", "\\end{equation}"], ["\\begin{equation*}", "\\end{equation*}"]];
function eu(e) {
  let t = e.trim();
  for (let i of _p) if (t.startsWith(i[0]) && t.endsWith(i[1])) return [!0, t.substring(i[0].length, t.length - i[1].length)];
  return [!1, e];
}
function Wg(e) {
  if (e = e.trim(), e.length <= 1) return ["latex", e];
  let t;
  return [t, e] = eu(e), t ? ["latex", e] : e.startsWith("`") && e.endsWith("`") ? (e = e.substring(1, e.length - 1), ["ascii-math", e]) : e.includes("\\") ? ["latex", e] : /\$.+\$/.test(e) ? ["latex", `\\text{${e}}`] : [void 0, e];
}
var Ug = "$$", Jg = "$$", Xg = (e, t, i) => (_p.some((r) => t.startsWith(r[0]) && t.endsWith(r[1])) || (t = `${Ug} ${t} ${Jg}`), t), Mp = class Va {
  constructor(t) {
    Va._modes[t] = this;
  }
  static onPaste(t, i, r) {
    var n;
    if (!i.contentEditable && i.userSelect === "none") return i.model.announce("plonk"), !1;
    if (typeof r == "string") {
      let o = new DataTransfer();
      o.setData("text/plain", r), r = o;
    }
    let a = new ClipboardEvent("paste", { clipboardData: r, cancelable: !0 });
    return (n = i.host) != null && n.dispatchEvent(a) ? Va._modes[t].onPaste(i, r) : !1;
  }
  static copyToClipboard(t, i) {
    if (!t.contentEditable && t.userSelect === "none") {
      t.model.announce("plonk");
      return;
    }
    let r = t.model, n = r.selectionIsCollapsed ? [0, r.lastOffset] : ge(r.selection), a = r.getValue(n, i);
    navigator.clipboard.writeText(a).then(() => {
    }, () => t.model.announce("plonk"));
  }
  static onCopy(t, i) {
    var r;
    if (!i.clipboardData) return;
    if (!t.contentEditable && t.userSelect === "none") {
      t.model.announce("plonk");
      return;
    }
    let n = t.model, a = n.selectionIsCollapsed ? [0, n.lastOffset] : ge(n.selection), o = n.getAtoms(a);
    if (o.every((s) => s.mode === "text" || !s.mode)) i.clipboardData.setData("text/plain", o.filter((s) => s instanceof Ln).map((s) => s.value).join(""));
    else if (o.every((s) => s.mode === "latex")) i.clipboardData.setData("text/plain", n.getAtoms(a, { includeChildren: !0 }).map((s) => {
      var l;
      return (l = s.value) != null ? l : "";
    }).join(""));
    else {
      let s;
      o.length === 1 && o[0].verbatimLatex !== void 0 ? s = o[0].verbatimLatex : s = n.getValue(a, "latex-expanded"), i.clipboardData.setData("application/x-latex", s);
      try {
        i.clipboardData.setData("text/plain", t.options.onExport(t, s, a));
      } catch {
      }
      if (o.length === 1) {
        let l = o[0];
        (l.type === "root" || l.type === "group") && (o = l.body.filter((u) => u.type !== "first"));
      }
      try {
        i.clipboardData.setData("application/json+mathlive", JSON.stringify(o.map((l) => l.toJson())));
      } catch {
      }
      if ((r = window[Symbol.for("io.cortexjs.compute-engine")]) != null && r.ComputeEngine) {
        let l = globalThis.MathfieldElement.computeEngine;
        if (l) try {
          let u = l.jsonSerializationOptions;
          l.jsonSerializationOptions = { metadata: ["latex"] };
          let c = l.parse(n.getValue(a, "latex-unstyled"));
          l.jsonSerializationOptions = u;
          let d = JSON.stringify(c.json);
          d && i.clipboardData.setData("application/json", d);
        } catch {
        }
      }
    }
    i.preventDefault();
  }
  static insert(t, i, r = {}) {
    var n;
    let a = r.mode === "auto" ? t.mode : (n = r.mode) != null ? n : t.mode;
    return Va._modes[a].insert(t, i, r);
  }
  onPaste(t, i) {
    return !1;
  }
  insert(t, i, r) {
    return !1;
  }
};
Mp._modes = {};
var G = Mp, Gg = [{ key: "left", command: "moveToPreviousChar" }, { key: "right", command: "moveToNextChar" }, { key: "up", command: "moveUp" }, { key: "down", command: "moveDown" }, { key: "shift+[ArrowLeft]", command: "extendSelectionBackward" }, { key: "shift+[ArrowRight]", command: "extendSelectionForward" }, { key: "shift+[ArrowUp]", command: "extendSelectionUpward" }, { key: "shift+[ArrowDown]", command: "extendSelectionDownward" }, { key: "[Backspace]", command: "deleteBackward" }, { key: "alt+[Delete]", command: "deleteBackward" }, { key: "[Delete]", command: "deleteForward" }, { key: "alt+[Backspace]", command: "deleteForward" }, { key: "alt+[ArrowLeft]", command: "moveToPreviousWord" }, { key: "alt+[ArrowRight]", command: "moveToNextWord" }, { key: "shift+alt+[ArrowLeft]", command: "extendToPreviousWord" }, { key: "shift+alt+[ArrowRight]", command: "extendToNextWord" }, { key: "ctrl+[ArrowLeft]", command: "moveToGroupStart" }, { key: "ctrl+[ArrowRight]", command: "moveToGroupEnd" }, { key: "shift+ctrl+[ArrowLeft]", command: "extendToGroupStart" }, { key: "shift+ctrl+[ArrowRight]", command: "extendToGroupEnd" }, { key: "[Home]", command: "moveToMathfieldStart" }, { key: "cmd+[ArrowLeft]", command: "moveToMathfieldStart" }, { key: "shift+[Home]", command: "extendToMathFieldStart" }, { key: "shift+cmd+[ArrowLeft]", command: "extendToMathFieldStart" }, { key: "[End]", command: "moveToMathfieldEnd" }, { key: "cmd+[ArrowRight]", command: "moveToMathfieldEnd" }, { key: "shift+[End]", command: "extendToMathFieldEnd" }, { key: "shift+cmd+[ArrowRight]", command: "extendToMathFieldEnd" }, { key: "[Pageup]", command: "moveToGroupStart" }, { key: "[Pagedown]", command: "moveToGroupEnd" }, { key: "[Tab]", command: "moveToNextGroup" }, { key: "shift+[Tab]", command: "moveToPreviousGroup" }, { key: "[Escape]", ifMode: "math", command: ["switchMode", "latex"] }, { key: "[Escape]", ifMode: "text", command: ["switchMode", "latex"] }, { key: "[Escape]", ifMode: "latex", command: ["complete", "complete", { selectItem: "true" }] }, { key: "\\", ifMode: "math", command: ["switchMode", "latex", "\\"] }, { key: "[IntlBackslash]", ifMode: "math", command: ["switchMode", "latex", "\\"] }, { key: "[Tab]", ifMode: "latex", command: ["complete", "accept-suggestion"] }, { key: "[Return]", ifMode: "latex", command: "complete" }, { key: "[Enter]", ifMode: "latex", command: "complete" }, { key: "shift+[Escape]", ifMode: "latex", command: ["complete", "reject"] }, { key: "[ArrowDown]", ifMode: "latex", command: "nextSuggestion" }, { key: "[ArrowUp]", ifMode: "latex", command: "previousSuggestion" }, { key: "ctrl+a", ifPlatform: "!macos", command: "selectAll" }, { key: "cmd+a", command: "selectAll" }, { key: "[Cut]", command: "cutToClipboard" }, { key: "[Copy]", command: "copyToClipboard" }, { key: "[Paste]", command: "pasteFromClipboard" }, { key: "[Clear]", command: "deleteBackward" }, { key: "[Undo]", command: "undo" }, { key: "[Redo]", command: "redo" }, { key: "[EraseEof]", command: "deleteToGroupEnd" }, { key: "ctrl+x", ifPlatform: "ios", command: "cutToClipboard" }, { key: "cmd+x", ifPlatform: "ios", command: "cutToClipboard" }, { key: "ctrl+c", ifPlatform: "ios", command: "copyToClipboard" }, { key: "cmd+c", ifPlatform: "ios", command: "copyToClipboard" }, { key: "ctrl+v", ifPlatform: "ios", command: "pasteFromClipboard" }, { key: "cmd+v", ifPlatform: "ios", command: "pasteFromClipboard" }, { key: "ctrl+z", ifPlatform: "!macos", command: "undo" }, { key: "cmd+z", command: "undo" }, { key: "ctrl+y", ifPlatform: "!macos", command: "redo" }, { key: "shift+cmd+y", command: "redo" }, { key: "shift+ctrl+z", ifPlatform: "!macos", command: "redo" }, { key: "shift+cmd+z", command: "redo" }, { key: "ctrl+b", ifPlatform: "macos", command: "moveToPreviousChar" }, { key: "ctrl+f", ifPlatform: "macos", command: "moveToNextChar" }, { key: "ctrl+p", ifPlatform: "macos", command: "moveUp" }, { key: "ctrl+n", ifPlatform: "macos", command: "moveDown" }, { key: "ctrl+a", ifPlatform: "macos", command: "moveToMathfieldStart" }, { key: "ctrl+e", ifPlatform: "macos", command: "moveToMathfieldEnd" }, { key: "shift+ctrl+b", ifPlatform: "macos", command: "extendSelectionBackward" }, { key: "shift+ctrl+f", ifPlatform: "macos", command: "extendSelectionForward" }, { key: "shift+ctrl+p", ifPlatform: "macos", command: "extendSelectionUpward" }, { key: "shift+ctrl+n", ifPlatform: "macos", command: "extendSelectionDownward" }, { key: "shift+ctrl+a", ifPlatform: "macos", command: "extendToMathFieldStart" }, { key: "shift+ctrl+e", ifPlatform: "macos", command: "extendToMathFieldEnd" }, { key: "alt+ctrl+b", ifPlatform: "macos", command: "moveToPreviousWord" }, { key: "alt+ctrl+f", ifPlatform: "macos", command: "moveToNextWord" }, { key: "shift+alt+ctrl+b", ifPlatform: "macos", command: "extendToPreviousWord" }, { key: "shift+alt+ctrl+f", ifPlatform: "macos", command: "extendToNextWord" }, { key: "ctrl+h", ifPlatform: "macos", command: "deleteBackward" }, { key: "ctrl+d", ifPlatform: "macos", command: "deleteForward" }, { key: "ctrl+l", ifPlatform: "macos", command: "scrollIntoView" }, { key: "ctrl+[Digit2]", ifMode: "math", command: ["insert", "\\sqrt{#0}"] }, { key: "ctrl+[Digit5]", ifMode: "math", command: "moveToOpposite" }, { key: "ctrl+[Digit6]", ifMode: "math", command: "moveToSuperscript" }, { key: "ctrl+[Return]", ifMode: "math", command: "addRowAfter" }, { key: "ctrl+[Enter]", ifMode: "math", command: "addRowAfter" }, { key: "cmd+[Return]", ifMode: "math", command: "addRowAfter" }, { key: "cmd+[Enter]", ifMode: "math", command: "addRowAfter" }, { key: "alt+p", ifMode: "math", command: ["insert", "\\pi"] }, { key: "alt+v", ifMode: "math", command: ["insert", "\\sqrt{#0}"] }, { key: "alt+o", ifMode: "math", command: ["insert", "\\emptyset"] }, { key: "alt+d", ifMode: "math", command: ["insert", "\\differentialD"] }, { key: "shift+alt+o", ifMode: "math", command: ["insert", "\\varnothing"] }, { key: "shift+alt+d", ifMode: "math", command: ["insert", "\\partial"] }, { key: "alt+[Backslash]", ifMode: "math", command: ["insert", "\\backslash"] }, { key: "[NumpadDivide]", ifMode: "math", command: ["insert", "\\frac{#@}{#?}"] }, { key: "alt+[NumpadDivide]", ifMode: "math", command: ["insert", "\\frac{#?}{#@}"] }, { key: "shift+alt+k", command: "toggleKeystrokeCaption" }, { key: "alt+[Space]", command: "toggleContextMenu" }, { key: "alt+shift+[Space]", command: "toggleVirtualKeyboard" }, { key: "alt+ctrl+[ArrowUp]", command: ["speak", "all", { withHighlighting: !1 }] }, { key: "alt+ctrl+[ArrowDown]", command: ["speak", "selection", { withHighlighting: !1 }] }, { key: "shift+[Quote]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["switchMode", "text", "", ""] }, { key: "shift+alt+[KeyT]", ifMode: "math", command: ["switchMode", "text", "", ""] }, { key: "shift+[Quote]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "text", command: ["switchMode", "math", "", ""] }, { key: "shift+alt+[KeyT]", ifMode: "text", command: ["switchMode", "math", "", ""] }, { key: "/", ifMode: "math", command: ["insert", "\\frac{#@}{#?}"] }, { key: "alt+/", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "/"] }, { key: "alt+shift+/", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "/"] }, { key: "alt+[BracketLeft]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "\\left\\lbrack #0 \\right\\rbrack"] }, { key: "ctrl+[Minus]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: "moveToSubscript" }, { key: "shift+alt+[BracketLeft]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "\\left\\lbrace #0 \\right\\rbrace"] }, { key: "ctrl+;", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: "addRowAfter" }, { key: "cmd+;", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: "addRowAfter" }, { key: "shift+ctrl+;", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: "addRowBefore" }, { key: "shift+cmd+;", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: "addRowBefore" }, { key: "ctrl+[Backspace]", ifMode: "math", command: "removeRow" }, { key: "cmd+[Backspace]", ifMode: "math", command: "removeRow" }, { key: "alt+[Tab]", ifMode: "math", command: "addColumnAfter" }, { key: "shift+alt+[Tab]", ifMode: "math", command: "addColumnBefore" }, { key: "alt+[Enter]", ifMode: "math", command: "addRowAfter" }, { key: "shift+alt+[Enter]", ifMode: "math", command: "addRowBefore" }, { key: "alt+[Return]", ifMode: "math", command: "addRowAfter" }, { key: "shift+alt+[Return]", ifMode: "math", command: "addRowBefore" }, { key: "shift+[Backspace]", ifMode: "math", command: "removeColumn" }, { key: "alt+[Digit5]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "$\\infty"] }, { key: "alt+[Digit9]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "("] }, { key: "alt+[Digit0]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", ")"] }, { key: "alt+|", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "|"] }, { key: "shift+[Backquote]", ifLayout: ["apple.en-intl", "windows.en-intl", "linux.en"], ifMode: "math", command: ["insert", "\\~"] }, { key: "[Backquote]", ifLayout: ["windows.french", "linux.french"], ifMode: "math", command: ["insert", "^2"] }, { key: "[Backquote]", ifLayout: ["windows.german", "linux.german"], ifMode: "math", command: ["insert", "^"] }, { key: "[IntlBackslash]", ifLayout: ["apple.german"], ifMode: "math", command: ["insert", "^"] }], Zg = { "\\sqrt": ["alt+v", "ctrl+[Digit2]"], "\\pi": "alt+p", "\\infty": "alt+[Digit5]", "\\differentialD": "alt+d", "\\partial": "shift+alt+d", "\\frac": "Slash", "\\emptyset": "alt+o", "\\varnothing": "shift+alt+o", "\\~": "~" };
function wi(e) {
  var t;
  return ((t = e.element) == null ? void 0 : t.mathfield) === e;
}
function Yg(e) {
  var t, i;
  return (i = (t = e.querySelector(".ML__caret")) != null ? t : e.querySelector(".ML__text-caret")) != null ? i : e.querySelector(".ML__latex-caret");
}
function en(e) {
  let t = Yg(e);
  if (!t) return null;
  let i = t.getBoundingClientRect();
  return { x: i.right, y: i.bottom, height: i.height };
}
function Qg(e) {
  var t;
  if (!e.parent) return "root";
  let i = (t = e.parent.id) != null ? t : "";
  return i += typeof e.parentBranch == "string" ? "-" + e.parentBranch : `-${e.parentBranch[0]}/${e.parentBranch[0]}`, i;
}
function Sp(e, t, i) {
  if (!t) return null;
  let r = e.field.getBoundingClientRect(), n = t.right - t.left, a = t.bottom - t.top, o = Math.ceil(t.left - r.left + e.field.scrollLeft * i), s = Math.ceil(t.top - r.top);
  return { left: o, right: o + n, top: s, bottom: s + a };
}
function Cp(e) {
  let t = e.getBoundingClientRect(), i = parseInt(getComputedStyle(e).marginRight), r = { top: t.top - 1, bottom: t.bottom, left: t.left, right: t.right - 1 + i };
  if (e.children.length === 0 || e.tagName.toUpperCase() === "SVG") return r;
  for (let n of e.children) if (n.nodeType === 1 && "atomId" in n.dataset && !n.classList.contains("ML__pstrut")) {
    let a = Cp(n);
    r.left = Math.min(r.left, a.left), r.right = Math.max(r.right, a.right), r.top = Math.min(r.top, a.top), r.bottom = Math.max(r.bottom, a.bottom);
  }
  return r;
}
function Bn(e, t) {
  var i, r;
  if (!t.id) return null;
  let n = (r = (i = e.atomBoundsCache) == null ? void 0 : i.get(t.id)) != null ? r : null;
  if (n !== null) return n;
  let a = e.field.querySelector(`[data-atom-id="${t.id}"]`);
  return n = a ? Cp(a) : null, e.atomBoundsCache && (n ? e.atomBoundsCache.set(t.id, n) : e.atomBoundsCache.delete(t.id)), n ?? null;
}
function e4(e, t, i) {
  let r = /* @__PURE__ */ new Map();
  for (let n of e.model.getAtoms(t, { includeChildren: !0 })) {
    if (i != null && i.excludeAtomsWithBackground && n.style.backgroundColor) continue;
    let a = e.field, o = a.offsetWidth, s = Math.floor(a.getBoundingClientRect().width) / o;
    s = isNaN(s) ? 1 : s;
    let l = Sp(e, Bn(e, n), s);
    if (l) {
      let u = Qg(n);
      if (r.has(u)) {
        let c = r.get(u);
        r.set(u, { left: Math.min(c.left, l.left), right: Math.max(c.right, l.right), top: Math.min(c.top, l.top), bottom: Math.max(c.bottom, l.bottom) });
      } else r.set(u, l);
    }
  }
  return [...r.values()];
}
function Lp(e, t) {
  return e.model.selection.ranges.reduce((i, r) => i.concat(...e4(e, r, t)), []);
}
function tu(e, t) {
  return e === "*" || t === "none" ? !0 : t === "same-origin" ? !window.origin || e === window.origin : typeof t == "function" ? t(e) : !1;
}
function Bp(e) {
  let t = 0, i = 0, r = e.offsetWidth, n = e.offsetHeight;
  for (; e instanceof HTMLElement; ) t += e.offsetTop, i += e.offsetLeft, e = e.offsetParent;
  return new DOMRect(i, t, r, n);
}
var t4 = `@keyframes ML__caret-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.ML__container {
  display: inline-flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 39px;
  /* Need some room for the virtual keyboard toggle */
  width: 100%;
  /* Encourage browsers to consider allocating a hardware accelerated
   layer for this element. */
  isolation: isolate;
  /* Prevent the browser from trying to interpret touch gestures in the field */
  /* "Disabling double-tap to zoom removes the need for browsers to
        delay the generation of click events when the user taps the screen." */
  touch-action: none;
  --_caret-color: var(--caret-color, hsl(var(--_hue), 40%, 49%));
  --_selection-color: var(--selection-color, #000);
  --_selection-background-color: var(--selection-background-color, hsl(var(--_hue), 70%, 85%));
  --_text-highlight-background-color: var(--highlight-text, hsla(var(--_hue), 40%, 50%, 0.1));
  --_contains-highlight-background-color: var(--contains-highlight-background-color, hsl(var(--_hue), 40%, 95%));
  --_smart-fence-color: var(--smart-fence-color, currentColor);
  --_smart-fence-opacity: var(--smart-fence-opacity, 0.5);
  --_latex-color: var(--latex-color, hsl(var(--_hue), 80%, 40%));
  --_correct-color: var(--correct-color, #10a000);
  --_incorrect-color: var(--incorrect-color, #a01b00);
  --_composition-background-color: var(--composition-background-color, #fff1c2);
  --_composition-text-color: var(--composition-text-color, black);
  --_composition-underline-color: var(--composition-underline-color, transparent);
}
/* This is the actual field content (formula) */
.ML__content {
  display: flex;
  align-items: center;
  align-self: center;
  position: relative;
  overflow: hidden;
  padding: 2px 3px 2px 1px;
  width: 100%;
}
.ML__virtual-keyboard-toggle,
.ML__menu-toggle {
  box-sizing: border-box;
  display: flex;
  align-self: center;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  margin-right: 4px;
  cursor: pointer;
  /* Avoid some weird blinking with :hover */
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  color: hsl(var(--_hue), 40%, 50%);
  fill: currentColor;
  background: transparent;
}
.ML__virtual-keyboard-toggle:hover,
.ML__menu-toggle:hover {
  background: hsla(0, 0%, 70%, 0.3);
  color: #333;
  fill: currentColor;
}
.ML__virtual-keyboard-toggle > span,
.ML__menu-toggle > span {
  display: flex;
  align-self: center;
  align-items: center;
}
/* The invisible element used to capture keyboard events. We're just trying
 really hard to make sure it doesn't show. */
.ML__keyboard-sink {
  display: inline-block;
  resize: none;
  outline: none;
  border: none;
  /* Need these for Microsoft Edge */
  position: fixed;
  clip: rect(0 0 0 0);
  /* Need this to prevent iOS Safari from auto-zooming */
  font-size: 1em;
  font-family: KaTeX_Main;
  line-height: 0.5;
  /* On Chromium, if this is 0, no keyboard events are received */
}
[part="placeholder"] {
  color: var(--neutral-400);
}
.ML__composition {
  background: var(--_composition-background-color);
  color: var(--_composition-text-color);
  text-decoration: underline var(--_composition-underline-color);
}
.ML__caret::after {
  content: '';
  visibility: hidden;
  width: 0;
  display: inline-block;
  height: 0.76em;
  --_caret-width: clamp(2px, 0.08em, 10px);
  border: none;
  border-radius: calc(var(--_caret-width) / 2);
  border-right: var(--_caret-width) solid var(--_caret-color);
  margin-right: calc(-1 * var(--_caret-width));
  position: relative;
  left: -0.045em;
  bottom: -0.05em;
  animation: ML__caret-blink 1.05s step-end forwards infinite;
}
.ML__text-caret::after {
  content: '';
  visibility: hidden;
  width: 0;
  display: inline-block;
  height: 0.76em;
  --_caret-width: clamp(2px, 0.08em, 10px);
  border: none;
  border-radius: calc(var(--_caret-width) / 2);
  border-right: var(--_caret-width) solid var(--_caret-color);
  margin-right: calc(-1 * var(--_caret-width));
  position: relative;
  left: -0.045em;
  bottom: -0.05em;
  animation: ML__caret-blink 1.05s step-end forwards infinite;
}
.ML__latex-caret::after {
  content: '';
  visibility: hidden;
  --_caret-width: clamp(2px, 0.08em, 10px);
  border: none;
  border-radius: calc(var(--_caret-width) / 2);
  border-right: var(--_caret-width) solid var(--_latex-color);
  margin-right: calc(-1 * var(--_caret-width));
  position: relative;
  left: -0.019em;
  animation: ML__caret-blink 1.05s step-end forwards infinite;
}
.ML__focused .ML__latex-caret::after,
.ML__focused .ML__text-caret::after,
.ML__focused .ML__caret::after {
  visibility: visible;
}
.ML__focused .ML__text {
  background: var(--_text-highlight-background-color);
}
/* When using smartFence, the anticipated closing fence is displayed
with this style */
.ML__smart-fence__close {
  opacity: var(--_smart-fence-opacity);
  color: var(--_smart-fence-color);
}
.ML__selected,
.ML__focused .ML__selected .ML__contains-caret,
.ML__focused .ML__selected .ML__smart-fence__close,
.ML__focused .ML__selected .ML__placeholder {
  color: var(--_selection-color);
  opacity: 1;
}
.ML__selection {
  box-sizing: border-box;
  background: var(--_selection-background-color) !important;
}
.ML__contains-caret.ML__close,
.ML__contains-caret.ML__open,
.ML__contains-caret > .ML__close,
.ML__contains-caret > .ML__open,
.ML__contains-caret .ML__sqrt-sign,
.ML__contains-caret .ML__sqrt-line {
  color: var(--_caret-color);
}
.ML__contains-highlight {
  box-sizing: border-box;
  background: transparent;
}
.ML__focused .ML__contains-highlight {
  background: var(--_contains-highlight-background-color);
}
.ML__raw-latex {
  font-family: 'Berkeley Mono', 'IBM Plex Mono', 'Source Code Pro', Consolas, 'Roboto Mono', Menlo, 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Courier, monospace;
  font-weight: 400;
  font-size: 0.8em;
  letter-spacing: -0.05em;
  color: var(--_latex-color);
}
.ML__suggestion {
  color: var(--neutral-500);
}
.ML__virtual-keyboard-toggle.is-visible.is-pressed:hover {
  background: hsl(var(--_hue), 25%, 35%);
  color: #fafafa;
  fill: currentColor;
}
.ML__virtual-keyboard-toggle:focus {
  outline: none;
  border-radius: 8px;
  border: 2px solid hsl(var(--_hue), 40%, 50%);
}
.ML__virtual-keyboard-toggle.is-pressed,
.ML__virtual-keyboard-toggle.is-active:hover,
.ML__virtual-keyboard-toggle.is-active {
  background: hsl(var(--_hue), 25%, 35%);
  color: #fafafa;
  fill: currentColor;
}
/* Add an attribute 'data-tooltip' to automatically show a
   tooltip over a element on hover.
*/
[data-tooltip] {
  position: relative;
}
[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  display: block;
  z-index: 2;
  pointer-events: none;
  right: auto;
  top: calc(-100% - 4px);
  width: max-content;
  max-width: 200px;
  padding: 8px 8px;
  border-radius: 4px;
  background: #616161;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  /* Phone */
  opacity: 0;
  transform: scale(0.5);
}
@media only screen and (max-width: 767px) {
  [data-tooltip]::after {
    padding: 8px 16px;
    font-size: 16px;
  }
}
menu [data-tooltip]::after {
  left: 100%;
  top: 0%;
}
menu .ML__base {
  cursor: default;
}
/** Don't display if we're tracking, i.e. have the pointer down */
.tracking [data-tooltip]:hover::after {
  /* Use visibility, not display. Display will remove the after from the DOM, and the override below will not work */
  visibility: hidden;
}
/** But do display if tracking and inside a menu */
.tracking menu li[data-tooltip]:hover::after,
[data-tooltip]:hover::after {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
  transition-property: opacity, scale;
  transition-duration: 0.15s;
  transition-delay: 1s;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ML__prompt {
  border-radius: 2px;
}
.ML__editablePromptBox {
  outline: 1px solid #acacac;
  border-radius: 2px;
  z-index: -1;
}
.ML__focusedPromptBox {
  outline: highlight auto 1px;
}
.ML__lockedPromptBox {
  background-color: rgba(142, 142, 141, 0.4);
  z-index: -1;
}
.ML__correctPromptBox {
  outline: 1px solid var(--_correct-color);
  box-shadow: 0 0 5px var(--_correct-color);
}
.ML__incorrectPromptBox {
  outline: 1px solid var(--_incorrect-color);
  box-shadow: 0 0 5px var(--_incorrect-color);
}
.variant-submenu {
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.variant-submenu [part=menu-item] {
  font-size: 2rem;
  text-align: center;
  margin: 0;
}
.insert-matrix-submenu {
  display: grid;
  padding: 8px;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.insert-matrix-submenu [part=menu-item] {
  font-size: 21px;
  border: none;
  border-radius: 0;
  line-height: 21px;
  text-align: center;
  padding: 0;
  margin: 0;
}
.border-submenu [part=menu-item] {
  font-size: 2rem;
  line-height: 1.2;
  text-align: center;
}
.swatches-submenu {
  --_swatch-size: 2rem;
  --_columns: 4;
  display: flex;
  flex-flow: wrap;
  padding: 8px;
  max-width: calc(var(--_columns) * (var(--_swatch-size) + 18px) + 16px);
  box-sizing: border-box;
}
.menu-swatch {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  margin: 2px;
  padding: 0;
  background: var(--neutral-200);
}
.menu-swatch > .label {
  padding: 0;
  margin: 0;
  line-height: 0;
}
.menu-swatch > .label > span {
  display: inline-block;
  margin: 6px;
  min-width: var(--_swatch-size);
  min-height: var(--_swatch-size);
  border-radius: 50%;
}
.menu-swatch.active {
  background: var(--neutral-100);
  scale: 1.4;
}
.menu-swatch.active > .label > span {
  border-radius: 2px;
}
.menu-swatch .ui-checkmark,
.menu-swatch .ui-mixedmark {
  position: absolute;
  margin: 0;
  padding: 0;
  color: white;
}
.menu-swatch.dark-contrast .ui-checkmark,
.menu-swatch.dark-contrast .ui-mixedmark {
  color: #000;
}
`, i4 = `.ML__container {
  min-height: auto !important;
  --_hue: var(--hue, 212);
  --_placeholder-color: var(--placeholder-color, hsl(var(--_hue), 40%, 49%));
  --_placeholder-opacity: var(--placeholder-opacity, 0.4);
  --_text-font-family: var(--text-font-family, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif);
}
.ML__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.ML__is-inline {
  display: inline-block;
}
.ML__base {
  visibility: inherit;
  display: inline-block;
  position: relative;
  cursor: text;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  font-weight: inherit;
  font-family: inherit;
  font-style: inherit;
  text-decoration: none;
  width: min-content;
}
.ML__strut,
.ML__strut--bottom {
  display: inline-block;
  min-height: 0.5em;
}
.ML__small-delim {
  font-family: KaTeX_Main;
}
/* Text mode */
.ML__text {
  font-family: var(--_text-font-family);
  white-space: pre;
}
/* Use cmr for 'math upright' */
.ML__cmr {
  font-family: KaTeX_Main;
  font-style: normal;
}
.ML__mathit {
  font-family: KaTeX_Math;
  /* The KaTeX_Math font is italic by default, so the font-style below is only 
     useful when a fallback font is used
  */
  font-style: italic;
}
.ML__mathbf {
  font-family: KaTeX_Main;
  font-weight: bold;
}
/* Lowercase greek symbols should stick to math font when \\mathbf is applied 
   to match TeX idiosyncratic behavior */
.lcGreek.ML__mathbf {
  font-family: KaTeX_Math;
  font-weight: normal;
}
.ML__mathbfit {
  font-family: KaTeX_Math;
  font-weight: bold;
  font-style: italic;
}
.ML__ams {
  font-family: KaTeX_AMS;
}
/* Blackboard */
.ML__bb {
  font-family: KaTeX_AMS;
}
.ML__cal {
  font-family: KaTeX_Caligraphic;
}
.ML__frak {
  font-family: KaTeX_Fraktur;
}
.ML__tt {
  font-family: KaTeX_Typewriter;
}
.ML__script {
  font-family: KaTeX_Script;
}
.ML__sans {
  font-family: KaTeX_SansSerif;
}
.ML__series_ul {
  font-weight: 100;
}
.ML__series_el {
  font-weight: 100;
}
.ML__series_l {
  font-weight: 200;
}
.ML__series_sl {
  font-weight: 300;
}
.ML__series_sb {
  font-weight: 500;
}
.ML__bold,
.ML__boldsymbol {
  font-weight: 700;
}
.ML__series_eb {
  font-weight: 800;
}
.ML__series_ub {
  font-weight: 900;
}
.ML__series_uc {
  font-stretch: ultra-condensed;
}
.ML__series_ec {
  font-stretch: extra-condensed;
}
.ML__series_c {
  font-stretch: condensed;
}
.ML__series_sc {
  font-stretch: semi-condensed;
}
.ML__series_sx {
  font-stretch: semi-expanded;
}
.ML__series_x {
  font-stretch: expanded;
}
.ML__series_ex {
  font-stretch: extra-expanded;
}
.ML__series_ux {
  font-stretch: ultra-expanded;
}
.ML__it {
  font-style: italic;
}
.ML__shape_ol {
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
  color: transparent;
}
.ML__shape_sc {
  font-variant: small-caps;
}
.ML__shape_sl {
  font-style: oblique;
}
/* First level emphasis */
.ML__emph {
  color: #bc2612;
}
/* Second level emphasis */
.ML__emph .ML__emph {
  color: #0c7f99;
}
.ML__highlight {
  color: #007cb2;
  background: #edd1b0;
}
.ML__center {
  text-align: center;
}
.ML__left {
  text-align: left;
}
.ML__right {
  text-align: right;
}
.ML__label_padding {
  padding: 0 0.5em;
}
.ML__frac-line {
  width: 100%;
  min-height: 1px;
}
.ML__frac-line:after {
  content: '';
  display: block;
  margin-top: max(-1px, -0.04em);
  min-height: max(1px, 0.04em);
  /* Ensure the line is visible when printing even if "turn off background images" is on*/
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  /* There's a bug since Chrome 62 where 
      sub-pixel border lines don't draw at some zoom 
      levels (110%, 90%). 
      Setting the min-height used to work around it, but that workaround
      broke in Chrome 84 or so.
      Setting the background (and the min-height) seems to work for now.
      */
  background: currentColor;
  box-sizing: content-box;
  /* Vuetify sets the box-sizing to inherit 
            causes the fraction line to not draw at all sizes (see #26) */
  /* On some versions of Firefox on Windows, the line fails to 
            draw at some zoom levels, but setting the transform triggers
            the hardware accelerated path, which works */
  transform: translate(0, 0);
}
.ML__sqrt {
  display: inline-block;
}
.ML__sqrt-sign {
  display: inline-block;
  position: relative;
}
.ML__sqrt-line {
  display: inline-block;
  height: max(1px, 0.04em);
  width: 100%;
}
.ML__sqrt-line:before {
  content: '';
  display: block;
  margin-top: min(-1px, -0.04em);
  min-height: max(1px, 0.04em);
  /* Ensure the line is visible when printing even if "turn off background images" is on*/
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  background: currentColor;
  /* On some versions of Firefox on Windows, the line fails to 
            draw at some zoom levels, but setting the transform triggers
            the hardware accelerated path, which works */
  transform: translate(0, 0);
}
.ML__sqrt-line:after {
  border-bottom-width: 1px;
  content: ' ';
  display: block;
  margin-top: -0.1em;
}
.ML__sqrt-index {
  margin-left: 0.27777778em;
  margin-right: -0.55555556em;
}
.ML__delim-size1 {
  font-family: KaTeX_Size1;
}
.ML__delim-size2 {
  font-family: KaTeX_Size2;
}
.ML__delim-size3 {
  font-family: KaTeX_Size3;
}
.ML__delim-size4 {
  font-family: KaTeX_Size4;
}
.ML__delim-mult .delim-size1 > span {
  font-family: KaTeX_Size1;
}
.ML__delim-mult .delim-size4 > span {
  font-family: KaTeX_Size4;
}
.ML__accent-body > span {
  font-family: KaTeX_Main;
  width: 0;
}
.ML__accent-vec {
  position: relative;
  left: 0.24em;
}
/** The markup for a LaTeX formula, either in an editable mathfield or 
    in a static display.
*/
.ML__latex {
  display: inline-block;
  direction: ltr;
  text-align: left;
  text-indent: 0;
  text-rendering: auto;
  font-family: KaTeX_Main, 'Times New Roman', serif;
  font-style: normal;
  font-size-adjust: none;
  font-stretch: normal;
  font-variant-caps: normal;
  letter-spacing: normal;
  line-height: 1.2;
  word-wrap: normal;
  word-spacing: normal;
  white-space: nowrap;
  text-shadow: none;
  -webkit-user-select: none;
  user-select: none;
  width: min-content;
}
.ML__latex .style-wrap {
  position: relative;
}
.ML__latex .ML__mfrac {
  display: inline-block;
}
.ML__latex .ML__left-right {
  display: inline-block;
}
.ML__latex .ML__vlist-t {
  display: inline-table;
  table-layout: fixed;
  border-collapse: collapse;
}
.ML__latex .ML__vlist-r {
  display: table-row;
}
.ML__latex .ML__vlist {
  display: table-cell;
  vertical-align: bottom;
  position: relative;
}
.ML__latex .ML__vlist > span {
  display: block;
  height: 0;
  position: relative;
}
.ML__latex .ML__vlist > span > span {
  display: inline-block;
}
.ML__latex .ML__vlist > span > .ML__pstrut {
  overflow: hidden;
  width: 0;
}
.ML__latex .ML__vlist-t2 {
  margin-right: -2px;
}
.ML__latex .ML__vlist-s {
  display: table-cell;
  vertical-align: bottom;
  font-size: 1px;
  width: 2px;
  min-width: 2px;
}
.ML__latex .ML__msubsup {
  text-align: left;
}
.ML__latex .ML__negativethinspace {
  display: inline-block;
  margin-left: -0.16667em;
  height: 0.71em;
}
.ML__latex .ML__thinspace {
  display: inline-block;
  width: 0.16667em;
  height: 0.71em;
}
.ML__latex .ML__mediumspace {
  display: inline-block;
  width: 0.22222em;
  height: 0.71em;
}
.ML__latex .ML__thickspace {
  display: inline-block;
  width: 0.27778em;
  height: 0.71em;
}
.ML__latex .ML__enspace {
  display: inline-block;
  width: 0.5em;
  height: 0.71em;
}
.ML__latex .ML__quad {
  display: inline-block;
  width: 1em;
  height: 0.71em;
}
.ML__latex .ML__qquad {
  display: inline-block;
  width: 2em;
  height: 0.71em;
}
.ML__latex .ML__llap,
.ML__latex .ML__rlap {
  width: 0;
  position: relative;
  display: inline-block;
}
.ML__latex .ML__llap > .ML__inner,
.ML__latex .ML__rlap > .ML__inner {
  position: absolute;
}
.ML__latex .ML__llap > .ML__fix,
.ML__latex .ML__rlap > .ML__fix {
  display: inline-block;
}
.ML__latex .ML__llap > .ML__inner {
  right: 0;
}
.ML__latex .ML__rlap > .ML__inner {
  left: 0;
}
.ML__latex .ML__rule {
  display: inline-block;
  border: solid 0;
  position: relative;
  box-sizing: border-box;
}
.ML__latex .overline .overline-line,
.ML__latex .underline .underline-line {
  width: 100%;
}
.ML__latex .overline .overline-line:before,
.ML__latex .underline .underline-line:before {
  content: '';
  border-bottom-style: solid;
  border-bottom-width: max(1px, 0.04em);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  display: block;
}
.ML__latex .overline .overline-line:after,
.ML__latex .underline .underline-line:after {
  border-bottom-style: solid;
  border-bottom-width: max(1px, 0.04em);
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  content: '';
  display: block;
  margin-top: -1px;
}
.ML__latex .ML__stretchy {
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  overflow: hidden;
}
.ML__latex .ML__stretchy:before,
.ML__latex .ML__stretchy:after {
  content: '';
}
.ML__latex .ML__stretchy svg {
  display: block;
  position: absolute;
  width: 100%;
  height: inherit;
  fill: currentColor;
  stroke: currentColor;
  fill-rule: nonzero;
  fill-opacity: 1;
  stroke-width: 1;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-dashoffset: 0;
  stroke-opacity: 1;
}
.ML__latex .slice-1-of-2 {
  display: inline-flex;
  position: absolute;
  left: 0;
  width: 50.2%;
  overflow: hidden;
}
.ML__latex .slice-2-of-2 {
  display: inline-flex;
  position: absolute;
  right: 0;
  width: 50.2%;
  overflow: hidden;
}
.ML__latex .slice-1-of-3 {
  display: inline-flex;
  position: absolute;
  left: 0;
  width: 25.1%;
  overflow: hidden;
}
.ML__latex .slice-2-of-3 {
  display: inline-flex;
  position: absolute;
  left: 25%;
  width: 50%;
  overflow: hidden;
}
.ML__latex .slice-3-of-3 {
  display: inline-flex;
  position: absolute;
  right: 0;
  width: 25.1%;
  overflow: hidden;
}
.ML__latex .slice-1-of-1 {
  display: inline-flex;
  position: absolute;
  width: 100%;
  left: 0;
  overflow: hidden;
}
.ML__latex .ML__nulldelimiter {
  display: inline-block;
}
.ML__latex .ML__op-group {
  display: inline-block;
}
.ML__latex .ML__op-symbol {
  position: relative;
}
.ML__latex .ML__op-symbol.ML__small-op {
  font-family: KaTeX_Size1;
}
.ML__latex .ML__op-symbol.ML__large-op {
  font-family: KaTeX_Size2;
}
.ML__latex .ML__mtable .ML__vertical-separator {
  display: inline-block;
  min-width: 1px;
  box-sizing: border-box;
}
.ML__latex .ML__mtable .ML__arraycolsep {
  display: inline-block;
}
.ML__latex .ML__mtable .col-align-m > .ML__vlist-t {
  text-align: center;
}
.ML__latex .ML__mtable .col-align-c > .ML__vlist-t {
  text-align: center;
}
.ML__latex .ML__mtable .col-align-l > .ML__vlist-t {
  text-align: left;
}
.ML__latex .ML__mtable .col-align-r > .ML__vlist-t {
  text-align: right;
}
.ML__error {
  display: inline-block;
  background-image: radial-gradient(ellipse at center, hsl(341, 100%, 40%), rgba(0, 0, 0, 0) 70%);
  background-color: hsla(341, 100%, 40%, 0.1);
  background-repeat: repeat-x;
  background-size: 3px 3px;
  padding-bottom: 3px;
  background-position: 0 100%;
}
.ML__error > .ML__error {
  background: transparent;
  padding: 0;
}
.ML__placeholder {
  color: var(--_placeholder-color);
  opacity: var(--_placeholder-opacity);
  padding-left: 0.4ex;
  padding-right: 0.4ex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
.ML__notation {
  position: absolute;
  box-sizing: border-box;
  line-height: 0;
}
/* This class is used to implement the \`\\mathtip\` and \`\\texttip\` commands
   For UI elements, see \`[data-ML__tooltip]\`
*/
.ML__tooltip-container {
  position: relative;
  transform: scale(0);
}
.ML__tooltip-container .ML__tooltip-content {
  position: fixed;
  display: inline-table;
  visibility: hidden;
  z-index: 2;
  width: max-content;
  max-width: 400px;
  padding: 12px 12px;
  border-radius: 8px;
  background: #616161;
  --_selection-color: #fff;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
}
.ML__tooltip-container .ML__tooltip-content .ML__text {
  white-space: normal;
}
.ML__tooltip-container .ML__tooltip-content .ML__base {
  display: contents;
}
.ML__tooltip-container:hover .ML__tooltip-content {
  visibility: visible;
  opacity: 1;
  font-size: 0.75em;
  transform: scale(1) translate(0, 3em);
}
`, r4 = `#mathlive-environment-popover.is-visible {
  visibility: visible;
}
#mathlive-environment-popover {
  --_environment-panel-height: var(--environment-panel-height, 70px);
  --_accent-color: var(--accent-color, #aaa);
  --_background: var(--environment-panel-background, #fff);
  --_button-background: var(--environment-panel-button-background, white);
  --_button-background-hover: var(--environment-panel-button-background-hover, #f5f5f7);
  --_button-background-active: var(--environment-panel-button-background-active, #f5f5f7);
  --_button-text: var(--environment-panel-button-text, #e3e4e8);
  position: absolute;
  width: calc(var(--_environment-panel-height) * 2);
  height: var(--_environment-panel-height);
  border-radius: 4px;
  border: 1.5px solid var(--_accent-color);
  background-color: var(--_background);
  box-shadow: 0 0 30px 0 var(--environment-shadow, rgba(0, 0, 0, 0.4));
  pointer-events: all;
  visibility: hidden;
}
#mathlive-environment-popover .MLEP__array-buttons {
  height: calc(var(--_environment-panel-height) * 5/4);
  width: calc(var(--_environment-panel-height) * 5/4);
  margin-left: calc(0px - var(--_environment-panel-height) * 0.16);
  margin-top: calc(0px - var(--_environment-panel-height) * 0.19);
}
#mathlive-environment-popover .MLEP__array-buttons .font {
  fill: white;
}
#mathlive-environment-popover .MLEP__array-buttons circle {
  fill: #7f7f7f;
  transition: fill 300ms;
}
#mathlive-environment-popover .MLEP__array-buttons .MLEP__array-insert-background {
  fill-opacity: 1;
  fill: var(--_background);
  stroke: var(--_accent-color);
  stroke-width: 3px;
}
#mathlive-environment-popover .MLEP__array-buttons line {
  stroke: var(--_accent-color);
  stroke-opacity: 0;
  stroke-width: 40;
  pointer-events: none;
  transition: stroke-opacity 300ms;
  stroke-linecap: round;
}
#mathlive-environment-popover .MLEP__array-buttons g[data-command]:hover circle {
  fill: var(--_accent-color);
}
#mathlive-environment-popover .MLEP__array-buttons g[data-command]:hover line {
  stroke-opacity: 1;
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls {
  height: 100%;
  width: 50%;
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options {
  width: var(--_environment-panel-height);
  height: var(--_environment-panel-height);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg {
  pointer-events: all;
  margin-top: 2px;
  width: calc(var(--_environment-panel-height) / 3 * 28 / 24);
  height: calc(var(--_environment-panel-height) / 3 - 2px);
  border-radius: calc(var(--_environment-panel-height) / 25);
  background-color: var(--_button-background);
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg:hover {
  background-color: var(--_button-background-hover);
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg path,
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg line {
  stroke: var(--_button-text);
  stroke-width: 2;
  stroke-linecap: round;
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg rect,
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg path {
  fill-opacity: 0;
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg.active {
  pointer-events: none;
  background-color: var(--_button-background-active);
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg.active path,
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg.active line {
  stroke: var(--_accent-color);
}
#mathlive-environment-popover .MLEP__environment-delimiter-controls .MLEP__array-delimiter-options svg.active circle {
  fill: var(--_accent-color);
}
`, n4 = `/* The element that display info while in latex mode */
#mathlive-suggestion-popover {
  background-color: rgba(97, 97, 97);
  color: #fff;
  text-align: center;
  border-radius: 8px;
  position: fixed;
  z-index: 1;
  display: none;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
#mathlive-suggestion-popover.top-tip::after {
  content: '';
  position: absolute;
  top: -15px;
  left: calc(50% - 15px);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid rgba(97, 97, 97);
  font-size: 1rem;
}
#mathlive-suggestion-popover.bottom-tip::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: calc(50% - 15px);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid rgba(97, 97, 97);
  font-size: 1rem;
}
#mathlive-suggestion-popover.is-animated {
  transition: all 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  animation: ML__fade-in cubic-bezier(0, 0, 0.2, 1) 0.15s;
}
#mathlive-suggestion-popover.is-visible {
  display: flex;
}
@keyframes ML__fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* The wrapper class for the entire content of the popover panel */
#mathlive-suggestion-popover ul {
  display: flex;
  flex-flow: column;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  max-height: 400px;
  overflow-y: auto;
}
#mathlive-suggestion-popover li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px;
  padding: 8px;
  width: calc(100% - 16px - 16px);
  column-gap: 1em;
  border-radius: 8px;
  cursor: pointer;
  /* Since the content can be clicked on, provide feedback on hover */
}
#mathlive-suggestion-popover li a {
  color: #5ea6fd;
  padding-top: 0.3em;
  margin-top: 0.4em;
  display: block;
}
#mathlive-suggestion-popover li a:hover {
  color: #5ea6fd;
  text-decoration: underline;
}
#mathlive-suggestion-popover li:hover,
#mathlive-suggestion-popover li.is-pressed,
#mathlive-suggestion-popover li.is-active {
  background: rgba(255, 255, 255, 0.1);
}
/* The command inside a popover (inside a #mathlive-suggestion-popover) */
.ML__popover__command {
  font-size: 1.6rem;
  font-family: KaTeX_Main;
}
.ML__popover__current {
  background: #5ea6fd;
  color: #fff;
}
.ML__popover__latex {
  font-family: 'IBM Plex Mono', 'Source Code Pro', Consolas, 'Roboto Mono', Menlo, 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Courier, monospace;
  align-self: center;
}
/* The keyboard shortcuts for a symbol as displayed in the popover */
.ML__popover__keybinding {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8em;
  opacity: 0.7;
}
/* Style for the character that joins the modifiers of a keyboard shortcut 
(usually a "+" sign)*/
.ML__shortcut-join {
  opacity: 0.5;
}
`, a4 = `/* The element that displays the keys as the user type them */
#mathlive-keystroke-caption-panel {
  visibility: hidden;
  /*min-width: 160px;*/
  /*background-color: rgba(97, 97, 200, .95);*/
  background: var(--secondary, hsl(var(--_hue), 19%, 26%));
  border-color: var(--secondary-border, hsl(0, 0%, 91%));
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  text-align: center;
  border-radius: 6px;
  padding: 16px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  --keystroke: white;
  --on-keystroke: #555;
  --keystroke-border: #f7f7f7;
}
@media (prefers-color-scheme: dark) {
  body:not([theme='light']) #mathlive-keystroke-caption-panel {
    --keystroke: hsl(var(--_hue), 50%, 30%);
    --on-keystroke: hsl(0, 0%, 98%);
    --keystroke-border: hsl(var(--_hue), 50%, 25%);
  }
}
body[theme='dark'] #mathlive-keystroke-caption-panel {
  --keystroke: hsl(var(--_hue), 50%, 30%);
  --on-keystroke: hsl(0, 0%, 98%);
  --keystroke-border: hsl(var(--_hue), 50%, 25%);
}
#mathlive-keystroke-caption-panel > span {
  min-width: 14px;
  /*height: 8px;*/
  margin: 0 8px 0 0;
  padding: 4px;
  background-color: var(--keystroke);
  color: var(--on-keystroke);
  fill: currentColor;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;
  border-radius: 6px;
  border: 2px solid var(--keystroke-border);
  /*box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);*/
}
`, o4 = `.ML__keyboard {
  --_keyboard-height: 0;
  --_keyboard-zindex: var(--keyboard-zindex, 105);
  --_accent-color: var(--keyboard-accent-color, #0c75d8);
  --_background: var(--keyboard-background, #cacfd7);
  --_border: var(--keyboard-border, #ddd);
  --_padding-horizontal: var(--keyboard-padding-horizontal, 0px);
  --_padding-top: var(--keyboard-padding-top, 5px);
  --_padding-bottom: var(--keyboard-padding-bottom, 0px);
  --_row-padding-left: var(--keyboard-row-padding-left, 0px);
  --_row-padding-right: var(--keyboard-row-padding-right, 0px);
  --_toolbar-text: var(--keyboard-toolbar-text, #2c2e2f);
  --_toolbar-text-active: var(--keyboard-toolbar-text-active, var(--_accent-color));
  --_toolbar-background: var(--keyboard-toolbar-background, transparent);
  --_toolbar-background-hover: var(--keyboard-toolbar-background-hover, #eee);
  --_toolbar-background-selected: var(--keyboard-toolbar-background-selected, transparent);
  --_toolbar-font-size: var(--keyboard-toolbar-font-size, '135%');
  --_horizontal-rule: var(--keyboard-horizontal-rule, 1px solid #fff);
  --_keycap-background: var(--keycap-background, white);
  --_keycap-background-hover: var(--keycap-background-hover, #f5f5f7);
  --_keycap-background-active: var(--keycap-background-active, var(--_accent-color));
  --_keycap-background-pressed: var(--keycap-background-pressed, var(--_accent-color));
  --_keycap-border: var(--keycap-border, #e5e6e9);
  --_keycap-border-bottom: var(--keycap-border-bottom, #8d8f92);
  --_keycap-text: var(--keycap-text, #000);
  --_keycap-text-active: var(--keycap-text-active, #fff);
  --_keycap-text-hover: var(--keycap-text-hover, var(--_keycap-text));
  --_keycap-text-pressed: var(--keycap-text-pressed, #fff);
  --_keycap-shift-text: var(--keycap-shift-text, var(--_accent-color));
  --_keycap-primary-background: var(--keycap-primary-background, var(--_accent-color));
  --_keycap-primary-text: var(--keycap-primary-text, #ddd);
  --_keycap-primary-background-hover: var(--keycap-primary-background-hover, #0d80f2);
  --_keycap-secondary-background: var(--keycap-secondary-background, #a0a9b8);
  --_keycap-secondary-background-hover: var(--keycap-secondary-background-hover, #7d8795);
  --_keycap-secondary-text: var(--keycap-secondary-text, #060707);
  --_keycap-secondary-border: var(--keycap-secondary-border, #c5c9d0);
  --_keycap-secondary-border-bottom: var(--keycap-secondary-border-bottom, #989da6);
  --_keycap-height: var(--keycap-height, 60px);
  /* Keycap width (incl. margin) */
  --_keycap-max-width: var(--keycap-max-width, 100px);
  --_keycap-gap: var(--keycap-gap, 8px);
  --_keycap-font-size: var(--keycap-font-size, clamp(16px, 4cqw, 24px));
  --_keycap-small-font-size: var(--keycap-small-font-size, calc(var(--keycap-font-size) * 0.8));
  --_keycap-extra-small-font-size: var(--keycap-extra-small-font-size, calc(var(--keycap-font-size) / 1.42));
  --_variant-panel-background: var(--variant-panel-background, #fff);
  --_variant-keycap-text: var(--variant-keycap-text, var(--_keycap-text));
  --_variant-keycap-text-active: var(--variant-keycap-text-active, var(--_keycap-text-active));
  --_variant-keycap-background-active: var(--variant-keycap-background-active, var(--_accent-color));
  --_variant-keycap-length: var(--variant-keycap-length, 70px);
  --_variant-keycap-font-size: var(--variant-keycap-font-size, 30px);
  --_variant-keycap-aside-font-size: var(--variant-keycap-aside-font-size, 12px);
  --_keycap-shift-font-size: var(--keycap-shift-font-size, 16px);
  --_keycap-shift-color: var(--keycap-shift-color, var(--_accent-color));
  --_box-placeholder-color: var(--box-placeholder-color, var(--_accent-color));
  --_box-placeholder-pressed-color: var(--box-placeholder-pressed-color, var(--keycap-text-pressed));
}
.is-math-mode .MLK__rows .if-text-mode,
.is-text-mode .MLK__rows .if-math-mode {
  display: none;
}
.if-can-undo,
.if-can-redo,
.if-can-copy,
.if-can-cut,
.if-can-paste {
  opacity: 0.4;
  pointer-events: none;
}
.can-undo .if-can-undo,
.can-redo .if-can-redo,
.can-copy .if-can-copy,
.can-cut .if-can-cut,
.can-paste .if-can-paste {
  opacity: 1;
  pointer-events: all;
}
body > .ML__keyboard {
  position: fixed;
  --_padding-bottom: calc(var(--keyboard-padding-bottom, 0px) + env(safe-area-inset-bottom, 0));
}
body > .ML__keyboard.is-visible > .MLK__backdrop {
  box-shadow: 0 -5px 6px rgba(0, 0, 0, 0.08);
  border-top: 1px solid var(--_border);
}
body > .ML__keyboard.backdrop-is-transparent.is-visible > .MLK__backdrop {
  box-shadow: none;
  border: none;
}
body > .ML__keyboard.is-visible.animate > .MLK__backdrop {
  transition: 0.28s cubic-bezier(0, 0, 0.2, 1);
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ML__keyboard {
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: var(--_keyboard-zindex);
  box-sizing: border-box;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  line-height: 1;
  overflow-wrap: unset;
  text-align: left;
  vertical-align: baseline;
  cursor: auto;
  white-space: pre;
  box-shadow: none;
  opacity: 1;
  transform: none;
  pointer-events: none;
}
.ML__keyboard :where(div) {
  box-sizing: border-box;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  line-height: 1;
  overflow-wrap: unset;
  text-align: left;
  vertical-align: baseline;
  cursor: auto;
  white-space: pre;
  box-shadow: none;
  transform: none;
}
.MLK__backdrop {
  position: absolute;
  bottom: calc(-1 * var(--_keyboard-height));
  width: 100%;
  height: var(--_keyboard-height);
  box-sizing: border-box;
  padding-top: var(--_padding-top);
  padding-bottom: var(--_padding-bottom);
  padding-left: var(--_padding-horizontal);
  padding-right: var(--_padding-horizontal);
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 0);
  background: var(--_background);
}
.backdrop-is-transparent .MLK__backdrop {
  background: transparent;
}
/* If a custom layout has a custom container/backdrop
  (backdrop-is-transparent), make sure to let pointer event go through. */
.backdrop-is-transparent .MLK__plate {
  background: transparent;
  pointer-events: none;
}
/* If a custom layout has a custom container/backdrop, make sure to 
   allow pointer events on it. */
.backdrop-is-transparent .MLK__layer > div > div {
  pointer-events: all;
}
.ML__keyboard.is-visible > .MLK__backdrop {
  transform: translate(0, calc(-1 * var(--_keyboard-height)));
  opacity: 1;
  visibility: visible;
}
.caps-lock-indicator {
  display: none;
  width: 8px;
  height: 8px;
  background: #0cbc0c;
  box-shadow: inset 0 0 4px 0 #13ca13, 0 0 4px 0 #a9ef48;
  border-radius: 8px;
  right: 8px;
  top: 8px;
  position: absolute;
}
.ML__keyboard.is-caps-lock .caps-lock-indicator {
  display: block;
}
.ML__keyboard.is-caps-lock .shift {
  background: var(--_keycap-background-active);
  color: var(--_keycap-text-active);
}
.MLK__plate {
  position: absolute;
  top: var(--_padding-top);
  left: var(--_padding-horizontal);
  width: calc(100% - 2 * var(--_padding-horizontal));
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  container-type: inline-size;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: all;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  /* Size of toolbar labels */
  font-weight: 400;
  text-shadow: none;
}
.ML__box-placeholder {
  color: var(--_box-placeholder-color);
}
.MLK__tex {
  font-family: KaTeX_Main, KaTeX_Math, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
}
.MLK__tex-math {
  font-family: KaTeX_Math, KaTeX_Main, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
  font-style: italic;
}
.MLK__layer {
  display: none;
  outline: none;
}
.MLK__layer.is-visible {
  display: flex;
  flex-flow: column;
}
/* Keyboard layouts are made or rows of keys... */
.MLK__rows {
  --_keycap-width: var(--keycap-width, min(var(--_keycap-max-width), 10cqw));
  display: flex;
  flex-flow: column;
  align-items: center;
  border-collapse: separate;
  clear: both;
  border: 0;
  margin: 0;
  margin-bottom: var(--_keycap-gap);
  gap: var(--_keycap-gap);
  /* If the styling include, e.g., some shadows, they will be
  cut off by the overflow. In that case, set the padding to 
  compensate. */
  padding-left: var(--_row-padding-left);
  padding-right: var(--_row-padding-right);
  overflow: visible;
  touch-action: none;
}
.MLK__rows > .MLK__row {
  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 100%;
  gap: var(--_keycap-gap);
  margin: 0;
  padding: 0;
  /* For the alignment of the text on some modifiers (e.g. shift) */
  /* Extra spacing between two adjacent keys */
}
.MLK__rows > .MLK__row .tex {
  font-family: KaTeX_Math, KaTeX_Main, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
}
.MLK__rows > .MLK__row .tex-math {
  font-family: KaTeX_Math, 'Cambria Math', 'Asana Math', OpenSymbol, Symbola, STIX, Times, serif !important;
}
.MLK__rows > .MLK__row .big-op {
  font-size: calc(1.25 * var(--_keycap-font-size));
}
.MLK__rows > .MLK__row .small {
  font-size: var(--_keycap-small-font-size);
}
.MLK__rows > .MLK__row .bottom {
  justify-content: flex-end;
}
.MLK__rows > .MLK__row .left {
  align-items: flex-start;
  padding-left: 12px;
}
.MLK__rows > .MLK__row .right {
  align-items: flex-end;
  padding-right: 12px;
}
.MLK__rows > .MLK__row .w0 {
  width: 0;
}
.MLK__rows > .MLK__row .w5 {
  width: calc(0.5 * var(--_keycap-width) - var(--_keycap-gap));
}
.MLK__rows > .MLK__row .w15 {
  width: calc(1.5 * var(--_keycap-width) - var(--_keycap-gap));
}
.MLK__rows > .MLK__row .w20 {
  width: calc(2 * var(--_keycap-width) - var(--_keycap-gap));
}
.MLK__rows > .MLK__row .w40 {
  width: calc(4 * var(--_keycap-width) - var(--_keycap-gap));
}
.MLK__rows > .MLK__row .w50 {
  width: calc(5 * var(--_keycap-width) - var(--_keycap-gap));
}
.MLK__rows > .MLK__row .MLK__keycap.w50 {
  font-size: 80%;
  padding-top: 10px;
  font-weight: 100;
}
.MLK__rows > .MLK__row .separator {
  background: transparent;
  border: none;
  pointer-events: none;
}
.MLK__rows > .MLK__row .horizontal-rule {
  height: 6px;
  margin-top: 3px;
  margin-bottom: 0;
  width: 100%;
  border-radius: 0;
  border-top: var(--_horizontal-rule);
}
.MLK__rows > .MLK__row .ghost {
  background: var(--_toolbar-background);
  border: none;
  color: var(--_toolbar-text);
}
.MLK__rows > .MLK__row .ghost:hover {
  background: var(--_toolbar-background-hover);
}
.MLK__rows > .MLK__row .bigfnbutton {
  font-size: var(--_keycap-extra-small-font-size);
}
.MLK__rows > .MLK__row .shift,
.MLK__rows > .MLK__row .action {
  color: var(--_keycap-secondary-text);
  background: var(--_keycap-secondary-background);
  border-color: var(--_keycap-secondary-border);
  border-bottom-color: var(--_keycap-secondary-border-bottom);
  line-height: 0.8;
  font-size: min(1rem, var(--_keycap-small-font-size));
  font-weight: 600;
  padding: 8px 12px 8px 12px;
}
.MLK__rows > .MLK__row .shift:hover,
.MLK__rows > .MLK__row .action:hover {
  background: var(--_keycap-secondary-background-hover);
}
.MLK__rows > .MLK__row .action.primary {
  background: var(--_keycap-primary-background);
  color: var(--_keycap-primary-text);
}
.MLK__rows > .MLK__row .action.primary:hover {
  background: var(--_keycap-primary-background-hover);
  color: var(--_keycap-primary-text);
}
.MLK__rows > .MLK__row .shift.selected,
.MLK__rows > .MLK__row .action.selected {
  color: var(--_toolbar-text-active);
}
.MLK__rows > .MLK__row .shift.selected.is-pressed,
.MLK__rows > .MLK__row .action.selected.is-pressed,
.MLK__rows > .MLK__row .shift.selected.is-active,
.MLK__rows > .MLK__row .action.selected.is-active {
  color: white;
}
.MLK__rows > .MLK__row .warning {
  background: #cd0030;
  color: white;
}
.MLK__rows > .MLK__row .warning svg.svg-glyph {
  width: 24px;
  height: 24px;
  min-height: 24px;
}
/** A regular keycap
 * Use the :where() pseudo-class to give it a very low specifity, 
 * so that it can be overriden by custom style.
 */
:where(.MLK__rows > .MLK__row  div) {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;
  width: calc(var(--_keycap-width) - var(--_keycap-gap));
  height: var(--_keycap-height);
  box-sizing: border-box;
  padding: 0;
  vertical-align: top;
  text-align: center;
  float: left;
  color: var(--_keycap-text);
  fill: currentColor;
  font-size: var(--_keycap-font-size);
  background: var(--_keycap-background);
  border: 1px solid var(--_keycap-border);
  border-bottom-color: var(--_keycap-border-bottom);
  border-radius: 6px;
  cursor: pointer;
  touch-action: none;
  /* Keys with a variants panel */
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
:where(.MLK__rows > .MLK__row  div):hover {
  overflow: visible;
  background: var(--_keycap-background-hover);
}
:where(.MLK__rows > .MLK__row  div) .ML__latex {
  pointer-events: none;
  touch-action: none;
}
:where(.MLK__rows > .MLK__row  div) svg.svg-glyph {
  margin: 8px 0;
  width: 20px;
  height: 20px;
  min-height: 20px;
}
:where(.MLK__rows > .MLK__row  div) svg.svg-glyph-lg {
  margin: 8px 0;
  width: 24px;
  height: 24px;
  min-height: 24px;
}
:where(.MLK__rows > .MLK__row  div).MLK__tex-math {
  font-size: 25px;
}
:where(.MLK__rows > .MLK__row  div).is-pressed {
  background: var(--_keycap-background-pressed);
  color: var(--_keycap-text-pressed);
  --_box-placeholder-color: var(--_box-placeholder-pressed-color);
}
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-active,
:where(.MLK__rows > .MLK__row  div).action.is-active,
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-pressed,
:where(.MLK__rows > .MLK__row  div).action.is-pressed {
  z-index: calc(var(--_keyboard-zindex) - 5);
}
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-active aside,
:where(.MLK__rows > .MLK__row  div).action.is-active aside,
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-pressed aside,
:where(.MLK__rows > .MLK__row  div).action.is-pressed aside {
  display: none;
}
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-active .MLK__shift,
:where(.MLK__rows > .MLK__row  div).action.is-active .MLK__shift,
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-pressed .MLK__shift,
:where(.MLK__rows > .MLK__row  div).action.is-pressed .MLK__shift {
  display: none;
}
:where(.MLK__rows > .MLK__row  div).shift.is-pressed,
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-pressed,
:where(.MLK__rows > .MLK__row  div).action.is-pressed {
  background: var(--_keycap-background-pressed);
  color: var(--_keycap-text-pressed);
}
:where(.MLK__rows > .MLK__row  div).shift.is-active,
:where(.MLK__rows > .MLK__row  div).MLK__keycap.is-active,
:where(.MLK__rows > .MLK__row  div).action.is-active {
  background: var(--_keycap-background-active);
  color: var(--_keycap-text-active);
  --_box-placeholder-color: var(--_box-placeholder-pressed-color);
}
:where(.MLK__rows > .MLK__row  div) small {
  color: var(--_keycap-secondary-text);
}
:where(.MLK__rows > .MLK__row  div) aside {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 10px;
  line-height: 10px;
  color: var(--_keycap-secondary-text);
}
/* Add an attribute 'data-tooltip' to display a tooltip on hover.
Note there are a different set of tooltip rules for the keyboard toggle
(it's in a different CSS tree) */
.ML__keyboard [data-tooltip] {
  position: relative;
}
.ML__keyboard [data-tooltip]::after {
  position: absolute;
  display: inline-table;
  content: attr(data-tooltip);
  top: inherit;
  bottom: 100%;
  width: max-content;
  max-width: 200px;
  padding: 8px 8px;
  background: #616161;
  color: #fff;
  text-align: center;
  z-index: 2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 12px;
  transition: all 0.15s cubic-bezier(0.4, 0, 1, 1) 1s;
  opacity: 0;
  transform: scale(0.5);
}
.ML__keyboard [data-tooltip]:hover {
  position: relative;
}
.ML__keyboard [data-tooltip]:hover::after {
  opacity: 1;
  transform: scale(1);
}
.MLK__toolbar {
  align-self: center;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  max-width: 996px;
  min-height: 32px;
  /* Icons for undo/redo, etc. */
}
.MLK__toolbar svg {
  height: 20px;
  width: 20px;
}
.MLK__toolbar > .left {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-flow: row;
}
.MLK__toolbar > .right {
  display: flex;
  justify-content: flex-end;
  flex-flow: row;
}
.MLK__toolbar > div > div {
  /* "button" in the toolbar */
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--_toolbar-text);
  fill: currentColor;
  background: var(--_toolbar-background);
  font-size: var(--_toolbar-font-size);
  padding: 4px 15px;
  cursor: pointer;
  width: max-content;
  min-width: 42px;
  min-height: 34px;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-top: 0;
  margin-bottom: 4px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 8px;
  box-shadow: none;
  border-bottom: 2px solid transparent;
}
.MLK__toolbar > div > div:not(.disabled):not(.selected):hover {
  background: var(--_toolbar-background-hover);
}
.MLK__toolbar > div > div.disabled svg,
.MLK__toolbar > div > div.disabled:hover svg,
.MLK__toolbar > div > div.disabled.is-pressed svg {
  color: var(--_toolbar-text);
  opacity: 0.2;
}
.MLK__toolbar > div > div:hover,
.MLK__toolbar > div > div:active,
.MLK__toolbar > div > div.is-pressed,
.MLK__toolbar > div > div.is-active {
  color: var(--_toolbar-text-active);
}
.MLK__toolbar > div > div.selected {
  color: var(--_toolbar-text-active);
  background: var(--_toolbar-background-selected);
  border-radius: 0;
  border-bottom-color: var(--_toolbar-text-active);
  padding-bottom: 4px;
  margin-bottom: 8px;
}
/* This is the element that displays variants on press+hold */
.MLK__variant-panel {
  visibility: hidden;
  position: fixed;
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 0;
  bottom: auto;
  top: 0;
  box-sizing: content-box;
  transform: none;
  z-index: calc(var(--_keyboard-zindex) + 1);
  touch-action: none;
  max-width: 350px;
  background: var(--_variant-panel-background);
  text-align: center;
  border-radius: 6px;
  padding: 6px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: none;
}
.MLK__variant-panel.is-visible {
  visibility: visible;
}
.MLK__variant-panel.compact {
  --_variant-keycap-length: var(--variant-keycap-length, 50px);
  --_variant-keycap-font-size: var(--variant-keycap-font-size, 24px);
  --_variant-keycap-aside-font-size: var(--variant-keycap-aside-font-size, 10px);
}
.MLK__variant-panel .item {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: var(--_variant-keycap-font-size);
  height: var(--_variant-keycap-length);
  width: var(--_variant-keycap-length);
  margin: 0;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid transparent;
  background: transparent;
  pointer-events: all;
  cursor: pointer;
  color: var(--_variant-keycap-text);
  fill: currentColor;
}
@media (max-height: 412px) {
  .MLK__variant-panel .item {
    --_variant-keycap-font-size: var(--variant-keycap-font-size, 24px);
    --_variant-keycap-length: var(--variant-keycap-length, 50px);
  }
}
.MLK__variant-panel .item .ML__latex {
  pointer-events: none;
}
.MLK__variant-panel .item.is-active {
  background: var(--_variant-keycap-background-active);
  color: var(--_variant-keycap-text-active);
}
.MLK__variant-panel .item.is-pressed {
  background: var(--_variant-keycap-background-pressed);
  color: var(--_variant-keycap-text-pressed);
}
.MLK__variant-panel .item.small {
  font-size: var(--_keycap-small-font-size);
}
.MLK__variant-panel .item.swatch-button {
  box-sizing: border-box;
  background: #fbfbfb;
}
.MLK__variant-panel .item.swatch-button > span {
  display: inline-block;
  margin: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  border-radius: 50%;
}
.MLK__variant-panel .item.swatch-button:hover {
  background: #f0f0f0;
}
.MLK__variant-panel .item.swatch-button:hover > span {
  border-radius: 2px;
}
.MLK__variant-panel .item.box > div,
.MLK__variant-panel .item.box > span {
  border: 1px dashed rgba(0, 0, 0, 0.24);
}
.MLK__variant-panel .item .warning {
  min-height: 60px;
  min-width: 60px;
  background: #cd0030;
  color: white;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
.MLK__variant-panel .item .warning.is-pressed,
.MLK__variant-panel .item .warning.is-active {
  background: red;
}
.MLK__variant-panel .item .warning svg.svg-glyph {
  width: 50px;
  height: 50px;
}
.MLK__variant-panel .item aside {
  font-size: var(--_variant-keycap-aside-font-size);
  line-height: 12px;
  opacity: 0.78;
  padding-top: 2px;
}
.MLK__keycap {
  position: relative;
}
.MLK__shift {
  display: block;
  position: absolute;
  right: 4px;
  top: 4px;
  font-size: var(--_keycap-shift-font-size);
  color: var(--_keycap-shift-color);
}
.hide-shift .MLK__shift {
  display: none;
}
@media (max-width: 414px) {
  .MLK__variant-panel {
    max-width: 350px;
    --_variant-keycap-font-size: var(--variant-keycap-font-size, 24px);
    --_variant-keycap-length: var(--variant-keycap-length, 50px);
  }
}
/* @xs breakpoint: iPhone 5 */
@container (max-width: 414px) {
  .MLK__rows {
    --_keycap-gap: max(var(--_keycap-gap, 2px), 2px);
    --_keycap-height: max(var(--_keycap-height), 42px);
    --_keycap-width: var(--keycap-width, min(min(var(--_keycap-max-width)), 10cqw), 62px));
  }
  .MLK__toolbar > div > div {
    font-size: 100%;
    margin-left: 2px;
    margin-right: 2px;
  }
  .MLK__rows .shift,
  .MLK__rows .action {
    font-size: 65%;
  }
  .MLK__rows .warning svg.svg-glyph {
    width: 14px;
    height: 14px;
    min-height: 14px;
  }
}
@container (max-width: 744px) {
  .MLK__rows {
    --_keycap-gap: max(var(--keycap-gap, 2px), 2px);
    --_keycap-height: max(var(--keycap-height, 52px), 52px);
    --_keycap-width: var(--keycap-width, min(min(var(--_keycap-max-width), 10cqw), 62px));
  }
  .MLK__toolbar > div > div {
    padding-left: 0;
    padding-right: 0;
  }
  .MLK__tooltip::after {
    padding: 8px 16px;
    font-size: 16px;
  }
  .MLK__rows > .MLK__row > div.fnbutton {
    font-size: 16px;
  }
  .MLK__rows > .MLK__row > div.bigfnbutton {
    font-size: calc(var(--_keycap-extra-small-font-size) / 1.55);
  }
  .MLK__rows > .MLK__row > div.small {
    font-size: 13px;
  }
  .MLK__rows > .MLK__row > div > aside {
    display: none;
  }
  .MLK__shift {
    display: none;
  }
}
/* Medium breakpoint: larger phones */
@container (max-width: 768px) {
  .MLK__rows {
    --_keycap-height: max(var(--keycap-height, 42px), 42px);
  }
  .MLK__rows > .MLK__row > div > small {
    font-size: 14px;
  }
}
@media (max-height: 768px) {
  .MLK__rows {
    --_keycap-height: max(var(--keycap-height, 42px), 42px);
  }
  .MLK__rows > .MLK__row > div > small {
    font-size: 14px;
  }
}
@container (max-width: 1444px) {
  .MLK__rows .if-wide {
    display: none;
  }
}
@media (prefers-color-scheme: dark) {
  .ML__keyboard {
    --_accent-color: var(--keyboard-accent-color, #0b5c9c);
    --_background: var(--keyboard-background, #151515);
    --_border: var(--keyboard-border, transparent);
    --_toolbar-text: var(--keyboard-toolbar-text, #e3e4e8);
    --_toolbar-background-hover: var(--keyboard-toolbar-background-hover, #303030);
    --keyboard-toolbar-background-hover: #303030;
    --_horizontal-rule: var(--keyboard-horizontal-rule, 1px solid #303030);
    --_keycap-background: var(--keycap-background, #1f2022);
    --_keycap-background-hover: var(--keycap-background-hover, #2f3032);
    --_keycap-border: var(--_keycap-border, transparent);
    --_keycap-border-bottom: var(--_keycap-border-bottom, transparent);
    --_keycap-text: var(--keycap-text, #e3e4e8);
    --_keycap-secondary-background: var(--keycap-secondary-background, #3d4144);
    --_keycap-secondary-background-hover: var(--keycap-secondary-background-hover, #4d5154);
    --_keycap-secondary-text: var(--keycap-secondary-text, #e7ebee);
    --keycap-secondary-border: transparent;
    --keycap-secondary-border-bottom: transparent;
    --_keycap-secondary-border: var(--keycap-secondary-border, transparent);
    --_keycap-secondary-border-bottom: var(--keycap-secondary-border-bottom, transparent);
    --_variant-panel-background: var(--variant-panel-background, #303030);
    --_variant-keycap-text-active: var(--variant-keycap-text-active, #fff);
  }
}
/* Same as the media query, but with a class */
[theme='dark'] .ML__keyboard {
  --_accent-color: var(--keyboard-accent-color, #0b5c9c);
  --_background: var(--keyboard-background, #151515);
  --_border: var(--keyboard-border, transparent);
  --_toolbar-text: var(--keyboard-toolbar-text, #e3e4e8);
  --_toolbar-background-hover: var(--keyboard-toolbar-background-hover, #303030);
  --keyboard-toolbar-background-hover: #303030;
  --_horizontal-rule: var(--keyboard-horizontal-rule, 1px solid #303030);
  --_keycap-background: var(--keycap-background, #1f2022);
  --_keycap-background-hover: var(--keycap-background-hover, #2f3032);
  --_keycap-border: var(--_keycap-border, transparent);
  --_keycap-border-bottom: var(--_keycap-border-bottom, transparent);
  --_keycap-text: var(--keycap-text, #e3e4e8);
  --_keycap-secondary-background: var(--keycap-secondary-background, #3d4144);
  --_keycap-secondary-background-hover: var(--keycap-secondary-background-hover, #4d5154);
  --_keycap-secondary-text: var(--keycap-secondary-text, #e7ebee);
  --keycap-secondary-border: transparent;
  --keycap-secondary-border-bottom: transparent;
  --_keycap-secondary-border: var(--keycap-secondary-border, transparent);
  --_keycap-secondary-border-bottom: var(--keycap-secondary-border-bottom, transparent);
  --_variant-panel-background: var(--variant-panel-background, #303030);
  --_variant-keycap-text-active: var(--variant-keycap-text-active, #fff);
}
[theme='light'] .ML__keyboard {
  --_accent-color: var(--keyboard-accent-color, #0c75d8);
  --_background: var(--keyboard-background, #cacfd7);
  --_border: var(--keyboard-border, #ddd);
  --_toolbar-text: var(--keyboard-toolbar-text, #2c2e2f);
  --_toolbar-background: var(--keyboard-toolbar-background, transparent);
  --_toolbar-background-hover: var(--keyboard-toolbar-background-hover, #eee);
  --_toolbar-background-selected: var(--keyboard-toolbar-background-selected, transparent);
  --_horizontal-rule: var(--keyboard-horizontal-rule, 1px solid #fff);
  --_keycap-background: var(--keycap-background, white);
  --_keycap-background-hover: var(--keycap-background-hover, #f5f5f7);
  --_keycap-background-active: var(--keycap-background-active, var(--_accent-color));
  --_keycap-background-pressed: var(--keycap-background-pressed, var(--_accent-color));
  --_keycap-border: var(--_keycap-border, #e5e6e9);
  --_keycap-border-bottom: var(--_keycap-border-bottom, #8d8f92);
  --_keycap-text: var(--keycap-text, #000);
  --_keycap-text-active: var(--keycap-text-active, #fff);
  --_keycap-text-hover: var(--keycap-text-hover, var(--_keycap-text));
  --_keycap-text-pressed: var(--keycap-text-pressed, #fff);
  --_keycap-shift-text: var(--keycap-shift-text, var(--_accent-color));
  --_keycap-secondary-background: var(--keycap-secondary-background, #a0a9b8);
  --_keycap-secondary-background-hover: var(--keycap-secondary-background-hover, #7d8795);
  --_keycap-secondary-text: var(--keycap-secondary-text, #060707);
  --_keycap-secondary-border: var(--keycap-secondary-border, #c5c9d0);
  --_keycap-secondary-border-bottom: var(--keycap-secondary-border-bottom, #989da6);
  --_variant-panel-background: var(--variant-panel-background, #fff);
  --_variant-keycap-text: var(--variant-keycap-textvar, var(--_keycap-text));
  --_variant-keycap-text-active: var(--variant-keycap-text-active, var(--_keycap-text-active));
  --_variant-keycap-background-active: var(--variant-keycap-background-active, var(--_accent-color));
}
`, s4 = `:host {
  --primary-color: #5898ff;
  --primary-color-dimmed: #c0c0f0;
  --primary-color-dark: var(--blue-500);
  --primary-color-light: var(--blue-100);
  --primary-color-reverse: #ffffff;
  --secondary-color: #ff8a65;
  --secondary-color-dimmed: #f0d5c5;
  --secondary-color-dark: var(--orange-500);
  --secondary-color-light: var(--orange-100);
  --secondary-color-reverse: #ffffff;
  --link-color: #5898ff;
  --link-color-dimmed: #c5c5c5;
  --link-color-dark: #121212;
  --link-color-light: #e2e2e2;
  --link-color-reverse: #ffffff;
  --semantic-blue: var(--blue-700);
  --semantic-red: var(--red-400);
  --semantic-orange: var(--orange-400);
  --semantic-green: var(--green-700);
  --neutral-100: #f5f5f5;
  --neutral-200: #eeeeee;
  --neutral-300: #e0e0e0;
  --neutral-400: #bdbdbd;
  --neutral-500: #9e9e9e;
  --neutral-600: #757575;
  --neutral-700: #616161;
  --neutral-800: #424242;
  --neutral-900: #212121;
  --red-25: #fff8f7;
  --red-50: #fff1ef;
  --red-100: #ffeae6;
  --red-200: #ffcac1;
  --red-300: #ffa495;
  --red-400: #ff7865;
  --red-500: #f21c0d;
  --red-600: #e50018;
  --red-700: #d30024;
  --red-800: #bd002c;
  --red-900: #a1002f;
  --orange-25: #fffbf8;
  --orange-50: #fff7f1;
  --orange-100: #fff3ea;
  --orange-200: #ffe1c9;
  --orange-300: #ffcca2;
  --orange-400: #ffb677;
  --orange-500: #fe9310;
  --orange-600: #f58700;
  --orange-700: #ea7c00;
  --orange-800: #dc6d00;
  --orange-900: #ca5b00;
  --brown-25: #fff8ef;
  --brown-50: #fff1df;
  --brown-100: #ffe9ce;
  --brown-200: #ebcca6;
  --brown-300: #cdaf8a;
  --brown-400: #af936f;
  --brown-500: #856a47;
  --brown-600: #7f5e34;
  --brown-700: #78511f;
  --brown-800: #6e4200;
  --brown-900: #593200;
  --yellow-25: #fffdf9;
  --yellow-50: #fffcf2;
  --yellow-100: #fffaec;
  --yellow-200: #fff2ce;
  --yellow-300: #ffe8ab;
  --yellow-400: #ffdf85;
  --yellow-500: #ffcf33;
  --yellow-600: #f1c000;
  --yellow-700: #dfb200;
  --yellow-800: #c9a000;
  --yellow-900: #ad8a00;
  --lime-25: #f4ffee;
  --lime-50: #e9ffdd;
  --lime-100: #ddffca;
  --lime-200: #a8fb6f;
  --lime-300: #94e659;
  --lime-400: #80d142;
  --lime-500: #63b215;
  --lime-600: #45a000;
  --lime-700: #268e00;
  --lime-800: #007417;
  --lime-900: #005321;
  --green-25: #f5fff5;
  --green-50: #ebffea;
  --green-100: #e0ffdf;
  --green-200: #a7ffa7;
  --green-300: #5afa65;
  --green-400: #45e953;
  --green-500: #17cf36;
  --green-600: #00b944;
  --green-700: #00a34a;
  --green-800: #008749;
  --green-900: #00653e;
  --teal-25: #f3ffff;
  --teal-50: #e6fffe;
  --teal-100: #d9fffe;
  --teal-200: #8dfffe;
  --teal-300: #57f4f4;
  --teal-400: #43e5e5;
  --teal-500: #17cfcf;
  --teal-600: #00c2c0;
  --teal-700: #00b5b1;
  --teal-800: #00a49e;
  --teal-900: #009087;
  --cyan-25: #f7fcff;
  --cyan-50: #eff8ff;
  --cyan-100: #e7f5ff;
  --cyan-200: #c2e6ff;
  --cyan-300: #95d5ff;
  --cyan-400: #61c4ff;
  --cyan-500: #13a7ec;
  --cyan-600: #069eda;
  --cyan-700: #0095c9;
  --cyan-800: #0088b2;
  --cyan-900: #0a7897;
  --blue-25: #f7faff;
  --blue-50: #eef5ff;
  --blue-100: #e5f1ff;
  --blue-200: #bfdbff;
  --blue-300: #92c2ff;
  --blue-400: #63a8ff;
  --blue-500: #0d80f2;
  --blue-600: #0077db;
  --blue-700: #006dc4;
  --blue-800: #0060a7;
  --blue-900: #005086;
  --indigo-25: #f8f7ff;
  --indigo-50: #f1efff;
  --indigo-100: #eae7ff;
  --indigo-200: #ccc3ff;
  --indigo-300: #ac99ff;
  --indigo-400: #916aff;
  --indigo-500: #63c;
  --indigo-600: #5a21b2;
  --indigo-700: #4e0b99;
  --indigo-800: #3b0071;
  --indigo-900: #220040;
  --purple-25: #fbf7ff;
  --purple-50: #f8f0ff;
  --purple-100: #f4e8ff;
  --purple-200: #e4c4ff;
  --purple-300: #d49aff;
  --purple-400: #c36aff;
  --purple-500: #a219e6;
  --purple-600: #9000c4;
  --purple-700: #7c009f;
  --purple-800: #600073;
  --purple-900: #3d0043;
  --magenta-25: #fff8fb;
  --magenta-50: #fff2f6;
  --magenta-100: #ffebf2;
  --magenta-200: #ffcddf;
  --magenta-300: #ffa8cb;
  --magenta-400: #ff7fb7;
  --magenta-500: #eb4799;
  --magenta-600: #da3689;
  --magenta-700: #c82179;
  --magenta-800: #b00065;
  --magenta-900: #8a004c;
}
@media (prefers-color-scheme: dark) {
  :host {
    --semantic-blue: var(--blue-700);
    --semantic-red: var(--red-400);
    --semantic-orange: var(--orange-400);
    --semantic-green: var(--green-700);
    --semantic-bg-blue: var(--blue-25);
    --semantic-bg-red: var(--red-25);
    --semantic-bg-orange: var(--orange-25);
    --semantic-bg-green: var(--green-25);
    --neutral-100: #121212;
    --neutral-200: #424242;
    --neutral-300: #616161;
    --neutral-400: #757575;
    --neutral-500: #9e9e9e;
    --neutral-600: #bdbdbd;
    --neutral-700: #e0e0e0;
    --neutral-800: #eeeeee;
    --neutral-900: #f5f5f5;
  }
}
:host([theme='dark']) {
  --semantic-blue: var(--blue-700);
  --semantic-red: var(--red-400);
  --semantic-orange: var(--orange-400);
  --semantic-green: var(--green-700);
  --semantic-bg-blue: var(--blue-25);
  --semantic-bg-red: var(--red-25);
  --semantic-bg-orange: var(--orange-25);
  --semantic-bg-green: var(--green-25);
  --neutral-100: #121212;
  --neutral-200: #424242;
  --neutral-300: #616161;
  --neutral-400: #757575;
  --neutral-500: #9e9e9e;
  --neutral-600: #bdbdbd;
  --neutral-700: #e0e0e0;
  --neutral-800: #eeeeee;
  --neutral-900: #f5f5f5;
}
/* @media (prefers-color-scheme: dark) {
  :host {
      --label-color: #fff;
      --active-label-color: #000;
      --menu-bg: #525252;
      --active-bg: #5898ff;
      --active-bg-dimmed: #5c5c5c;
  }
} */
:host {
  --ui-font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  --ui-font-size: 14px;
  --ui-line-height: 1.5;
  --ui-letter-spacing: 0.007em;
  --mono-font-family: 'Berkeley Mono', 'JetBrains Mono', 'IBM Plex Mono',
    'Source Code Pro', Menlo, Monaco, 'Courier New', monospace;
  --ui-layer-1: var(--neutral-100);
  --ui-layer-2: var(--neutral-200);
  --ui-layer-3: var(--neutral-300);
  --ui-layer-4: var(--neutral-400);
  --ui-layer-5: var(--neutral-500);
  --ui-layer-6: var(--neutral-600);
  --ui-border-color: var(--primary-color);
  --ui-border-radius: 4px;
  --ui-text: var(--neutral-900);
  --ui-text-secondary: var(--neutral-700);
  --ui-text-placeholder: var(--neutral-500);
  --ui-text-muted: var(--neutral-300);
  /** A field is a UI element in which a user can type data, for
  * example an input or textarea element.
  */
  --ui-field-bg: var(--neutral-100);
  --ui-field-bg-hover: var(--neutral-100);
  --ui-field-bg-disabled: var(--neutral-300);
  --ui-field-bg-invalid: var(--red-100);
  --ui-field-bg-focus: var(--neutral-100);
  --ui-field-border: 0.5px solid var(--border-color);
  --ui-field-border-hover: 0.5px solid var(--border-color);
  --ui-field-border-disabled: 0.5px solid var(--border-color);
  --ui-field-border-invalid: 0.5px solid var(--border-color);
  --ui-field-border-focus: 0.5px solid var(--border-color);
  --ui-menu-bg: var(--neutral-100);
  --ui-menu-text: var(--neutral-900);
  --ui-menu-bg-hover: var(--neutral-200);
  --ui-menu-text-hover: var(--neutral-900);
  /** The \`active\` state is used for the state of menu items
  * when they are selected.
  */
  --ui-menu-bg-active: var(--primary-color);
  --ui-menu-text-active: var(--primary-color-reverse);
  /** The \`active-muted\` set is used for the state of
  * submenus when they are open.
  */
  --ui-menu-bg-active-muted: var(--neutral-300);
  --ui-menu-text-active-muted: var(--neutral-900);
  /* --ui-menu-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
0 2px 6px 2px rgba(60, 64, 67, 0.149); */
  --ui-menu-shadow: 0 0 2px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.2);
  --ui-menu-divider: 0.5px solid #c7c7c7;
  /* var(--neutral-300); */
  --ui-menu-z-index: 10000;
  --page-bg: var(--neutral-100);
  --content-bg: var(--neutral-200);
}
@media (prefers-color-scheme: dark) {
  :host {
    --ui-menu-bg: var(--neutral-200);
  }
}
:host([theme='dark']) {
  --ui-menu-bg: var(--neutral-200);
}
/* PingFang SC is a macOS font. Microsoft Yahei is a Windows font. 
  Noto  is a Linux/Android font.
*/
:lang(zh-cn),
:lang(zh-sg),
:lang(zh-my),
:lang(zh) {
  --ui-font-family: -apple-system, system-ui, 'PingFang SC', 'Hiragino Sans GB',
    'Noto Sans CJK SC', 'Noto Sans SC', 'Noto Sans', 'Microsoft Yahei UI',
    'Microsoft YaHei New', 'Microsoft Yahei', '微软雅黑', SimSun, '宋体',
    STXihei, '华文细黑', sans-serif;
}
:lang(zh-tw),
:lang(zh-hk),
:lang(zh-mo) {
  --ui-font-family: -apple-system, system-ui, 'Noto Sans',
    'Microsoft JhengHei UI', 'Microsoft JhengHei', '微軟正黑體', '新細明體',
    'PMingLiU', '細明體', 'MingLiU', sans-serif;
}
:lang(ja),
:lang(ja-jp),
:lang(ja-jp-mac) {
  --ui-font-family: -apple-system, system-ui, 'Hiragino Sans',
    'Hiragino Kaku Gothic ProN', 'Noto Sans CJK JP', 'Noto Sans JP', 'Noto Sans',
    '游ゴシック', '游ゴシック体', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo,
    'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}
:lang(ko),
:lang(ko-kr),
:lang(ko-kr-std) {
  --ui-font-family: -apple-system, system-ui, 'Noto Sans CJK KR', 'Noto Sans KR',
    'Noto Sans', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo',
    '애플 SD 산돌고딕 Neo', 'Apple SD 산돌고딕 Neo', '돋움', Dotum, sans-serif;
}
:lang(ko-kr-apple) {
  --ui-font-family: -apple-system, system-ui, 'Noto Sans CJK KR', 'Noto Sans KR',
    'Noto Sans', 'Apple SD Gothic Neo', '애플 SD 산돌고딕 Neo',
    'Apple SD 산돌고딕 Neo', '돋움', Dotum, sans-serif;
}
:lang(zh-cn),
:lang(zh-sg),
:lang(zh-my),
:lang(zh),
:lang(zh-tw),
:lang(zh-hk),
:lang(zh-mo),
:lang(ja),
:lang(ja-jp),
:lang(ja-jp-mac),
:lang(ko),
:lang(ko-kr),
:lang(ko-kr-std),
:lang(ko-kr-apple) {
  --ui-font-size: 1rem;
  --ui-line-height: 1.7;
  --ui-letter-spacing: 0;
}
:dir(rtl) {
  --ui-line-height: auto;
  --ui-letter-spacing: 0;
}
`, l4 = `.ui-menu *,
.ui-menu ::before,
.ui-menu ::after {
  box-sizing: border-box;
}
.ui-menu {
  display: none;
  color-scheme: light dark;
  -webkit-user-select: none;
  /* Important: Safari iOS doesn't respect user-select */
  user-select: none;
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0 0 0 0);
  --active-label-color: #fff;
  /* ui-menu-text-active */
  --label-color: #121212;
  /* ui-menu-text */
  --menu-bg: #e2e2e2;
  /* ui-menu-background */
  --active-bg: #5898ff;
  /* ui-menu-background-active */
  --active-bg-dimmed: #c5c5c5;
  /* ui-menu-background-active-muted */
}
/** Use the :where pseudo selector to make the specificity of the
 * selector 0, so that it can be overridden by the user.
 */
:where(.ui-menu-container) {
  position: absolute;
  overflow: visible;
  width: auto;
  height: auto;
  z-index: 10000;
  border-radius: 8px;
  background: var(--ui-menu-bg);
  box-shadow: var(--ui-menu-shadow);
  list-style: none;
  padding: 6px 0 6px 0;
  margin: 0;
  user-select: none;
  cursor: default;
  color: var(--ui-menu-text);
  font-weight: normal;
  font-style: normal;
  text-shadow: none;
  text-transform: none;
  letter-spacing: 0;
  outline: none;
  opacity: 1;
  /* The [popover] elements have a 1px solid black border. Ugh. */
  border: none;
  width: fit-content;
  height: fit-content;
}
:where(.ui-menu-container > li) {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 1px 7px 1px 7px;
  margin-top: 0;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 4px;
  white-space: nowrap;
  position: relative;
  outline: none;
  fill: currentColor;
  user-select: none;
  cursor: default;
  text-align: left;
  color: inherit;
  font-family: var(--ui-font-family);
  font-size: var(--ui-font-size);
  line-height: var(--ui-line-height);
  letter-spacing: var(--ui-letter-spacing);
}
:where(.ui-menu-container > li > .label) {
  appearance: none;
  background: none;
  outline: none;
  width: 100%;
  margin: 0;
  padding: 1px 2px 1px 1px;
  overflow: visible;
  border: 1px solid transparent;
  white-space: nowrap;
  text-align: start;
}
:where(.ui-menu-container > li:has(.heading)) {
  margin-top: 0.5em;
}
:where(.ui-menu-container > li > .label.heading) {
  font-weight: bold;
  opacity: 0.4;
}
:where(.ui-menu-container > li.indent > .label) {
  margin-inline-start: 12px;
}
:where(.ui-menu-container > li > .label.indent) {
  margin-inline-start: 12px;
}
:where(.ui-menu-container > li[role='divider']) {
  border-bottom: 1px solid var(--ui-menu-divider);
  border-radius: 0;
  padding: 0;
  margin-left: 15px;
  margin-right: 15px;
  padding-top: 5px;
  margin-bottom: 5px;
  width: calc(100% - 30px);
  /** 100% - (margin-left + margin-right) */
}
:where(.ui-menu-container > li[aria-disabled='true']) {
  opacity: 0.5;
}
:where(.ui-menu-container > li.active) {
  background: var(--ui-menu-bg-active);
  background: -apple-system-control-accent;
  color: var(--ui-menu-text-active);
}
:where(.ui-menu-container > li.active.is-submenu-open) {
  background: var(--ui-menu-bg-active-muted);
  color: inherit;
}
:where(.ui-menu-container > li[aria-haspopup='true'] > .label) {
  padding-inline-end: 0;
}
:where(.ui-menu-container > li[aria-haspopup='true'].active::after) {
  color: var(--ui-menu-text-active);
}
/** Keyboard shortcut */
:where(.ui-menu-container > li > kbd) {
  font-family: var(--ui-font-family);
  margin-inline-start: 12px;
  opacity: 0.4;
}
:where(.ui-menu-container > li.active > kbd) {
  opacity: 0.85;
}
.ui-trailing-chevron {
  display: flex;
  margin-inline-start: 24px;
  width: 10px;
  height: 10px;
  margin-bottom: 4px;
}
.ui-trailing-chevron:dir(rtl) {
  transform: scaleX(-1);
}
.ui-checkmark {
  display: flex;
  margin-inline-end: -11px;
  margin-inline-start: -4px;
  margin-top: 2px;
  width: 16px;
  height: 16px;
}
.ui-mixedmark {
  display: flex;
  margin-inline-end: -11px;
  margin-inline-start: -4px;
  margin-top: 2px;
  width: 16px;
  height: 16px;
}
`, yi;
function ki(e) {
  let t = "";
  switch (e) {
    case "mathfield-element":
      t = `
    :host { display: inline-block; background-color: field; color: fieldtext; border-width: 1px; border-style: solid; border-color: #acacac; border-radius: 2px; padding:4px;}
    :host([hidden]) { display: none; }
    :host([disabled]), :host([disabled]:focus), :host([disabled]:focus-within) { outline: none; opacity:  .5; }
    :host(:focus), :host(:focus-within) {
      outline: Highlight auto 1px;    /* For Firefox */
      outline: -webkit-focus-ring-color auto 1px;
    }
    :host([readonly]:focus), :host([readonly]:focus-within),
    :host([read-only]:focus), :host([read-only]:focus-within) {
      outline: none;
    }
    @media (hover: none) and (pointer: coarse) {
      :host(:not(:focus)) :first-child { pointer-events: none !important; }
    }`;
      break;
    case "core":
      t = i4;
      break;
    case "mathfield":
      t = t4;
      break;
    case "environment-popover":
      t = r4;
      break;
    case "suggestion-popover":
      t = n4;
      break;
    case "keystroke-caption":
      t = a4;
      break;
    case "virtual-keyboard":
      t = o4;
      break;
    case "ui":
      t = s4;
      break;
    case "menu":
      t = l4;
      break;
  }
  return t;
}
function er(e) {
  return yi || (yi = {}), yi[e] || (yi[e] = new CSSStyleSheet(), yi[e].replaceSync(ki(e))), yi[e];
}
var Ct;
function Zt(e) {
  var t;
  if (!("adoptedStyleSheets" in document)) {
    if (window.document.getElementById(`mathlive-style-${e}`)) return;
    let i = window.document.createElement("style");
    i.id = `mathlive-style-${e}`, i.append(window.document.createTextNode(ki(e))), window.document.head.appendChild(i);
    return;
  }
  if (Ct || (Ct = {}), ((t = Ct[e]) != null ? t : 0) !== 0) Ct[e] += 1;
  else {
    let i = er(e);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, i], Ct[e] = 1;
  }
}
function Yt(e) {
  if ("adoptedStyleSheets" in document && Ct != null && Ct[e] && (Ct[e] -= 1, Ct[e] <= 0)) {
    let t = yi[e];
    document.adoptedStyleSheets = document.adoptedStyleSheets.filter((i) => i !== t);
  }
}
var Do = class Ap extends v {
  constructor(t) {
    var i;
    super(b(f({}, t), { type: "accent", body: (i = t.body) != null ? i : void 0 })), t.accentChar ? this.accent = t.accentChar : this.svgAccent = t == null ? void 0 : t.svgAccent, this.skipBoundary = !0, this.captureSelection = !0;
  }
  static fromJson(t) {
    return new Ap(t);
  }
  toJson() {
    return b(f({}, super.toJson()), { accentChar: this.accent, svgAccent: this.svgAccent });
  }
  render(t) {
    var i;
    let r = new I({ parent: t, mathstyle: "cramp" }, this.style), n = (i = v.createBox(r, this.body)) != null ? i : new S("▢", { style: this.style }), a = 0;
    !this.hasEmptyBranch("body") && this.body.length === 2 && this.body[1].isCharacterBox() && (a = n.skew);
    let o = Math.min(n.height, Jt), s;
    if (this.svgAccent) s = qa(this.svgAccent), o = r.metrics.bigOpSpacing1 - o;
    else if (this.accent) {
      let u = new S(this.accent, { fontFamily: "Main-Regular" });
      u.italic = 0;
      let c = this.accent === 8407 ? " ML__accent-vec" : "";
      s = new S(new S(u), { classes: "ML__accent-body" + c });
    }
    s = new ae({ shift: 0, children: [{ box: new S(n) }, -o, { box: s, marginLeft: n.left + 2 * a, classes: ["ML__center"] }] });
    let l = new S(s, { type: "lift" });
    return this.caret && (l.caret = this.caret), this.bind(r, l.wrap(r)), this.attachSupsub(r, { base: l });
  }
}, To = { "(": ")", "{": "}", "[": "]", "|": "|", "\\lbrace": "\\rbrace", "\\lparen": "\\rparen", "\\{": "\\}", "\\langle": "\\rangle", "\\lfloor": "\\rfloor", "\\lceil": "\\rceil", "\\vert": "\\vert", "\\lvert": "\\rvert", "\\Vert": "\\Vert", "\\lVert": "\\rVert", "\\lbrack": "\\rbrack", "\\ulcorner": "\\urcorner", "\\llcorner": "\\lrcorner", "\\lgroup": "\\rgroup", "\\lmoustache": "\\rmoustache" }, oo = Object.fromEntries(Object.entries(To).map(([e, t]) => [t, e]));
function Fo(e) {
  var t;
  return (t = { "[": 91, "]": 93, "(": 40, ")": 41, "\\mid": 8739, "|": 8739, "∣": 8739, "∥": 8741, "\\|": 8739, "\\{": 123, "\\}": 125, "\\lbrace": 123, "\\rbrace": 125, "\\lparen": 40, "\\rparen": 41, "\\lbrack": 91, "\\rbrack": 93, "\\vert": 8739, "\\lvert": 8739, "\\mvert": 8739, "\\rvert": 8739, "\\Vert": 8741, "\\lVert": 8741, "\\mVert": 8741, "\\rVert": 8741, "\\parallel": 8741, "\\shortparallel": 8741, "\\langle": 10216, "\\rangle": 10217, "\\lfloor": 8970, "\\rfloor": 8971, "\\lceil": 8968, "\\rceil": 8969, "\\ulcorner": 9484, "\\urcorner": 9488, "\\llcorner": 9492, "\\lrcorner": 9496, "\\lgroup": 10222, "\\rgroup": 10223, "\\lmoustache": 9136, "\\rmoustache": 9137, "\\surd": 8730 }[e]) != null ? t : e.codePointAt(0);
}
function u4(e, t, i, r) {
  var n;
  let a = new S(Fo(e), { fontFamily: "Main-Regular", isSelected: r.isSelected, classes: "ML__small-delim " + ((n = r.classes) != null ? n : "") }).wrap(t);
  return i && a.setTop((1 - t.scalingFactor) * Ze), a;
}
function Ep(e, t, i, r, n) {
  var a, o;
  let s = new I({ parent: r, mathstyle: "textstyle" }, n == null ? void 0 : n.style), l = new S(Fo(e), { fontFamily: `Size${t}-Regular`, isSelected: n.isSelected, classes: ((a = n.classes) != null ? a : "") + ` ML__delim-size${t}`, type: (o = n.type) != null ? o : "ignore" }).wrap(s);
  return i && l.setTop((1 - s.scalingFactor) * Ze), l;
}
function Dp(e, t, i, r, n) {
  var a;
  let o, s, l, u;
  o = l = u = Fo(e), s = null;
  let c = "Size1-Regular";
  e === "\\vert" || e === "\\lvert" || e === "\\rvert" || e === "\\mvert" || e === "\\mid" ? l = o = u = 8739 : e === "\\Vert" || e === "\\lVert" || e === "\\rVert" || e === "\\mVert" || e === "\\|" ? l = o = u = 8741 : e === "\\uparrow" ? l = u = 9168 : e === "\\Uparrow" ? l = u = 8214 : e === "\\downarrow" ? o = l = 9168 : e === "\\Downarrow" ? o = l = 8214 : e === "\\updownarrow" ? (o = 8593, l = 9168, u = 8595) : e === "\\Updownarrow" ? (o = 8657, l = 8214, u = 8659) : e === "[" || e === "\\lbrack" ? (o = 9121, l = 9122, u = 9123, c = "Size4-Regular") : e === "]" || e === "\\rbrack" ? (o = 9124, l = 9125, u = 9126, c = "Size4-Regular") : e === "\\lfloor" || e === "⌊" ? (l = o = 9122, u = 9123, c = "Size4-Regular") : e === "\\lceil" || e === "⌈" ? (o = 9121, l = u = 9122, c = "Size4-Regular") : e === "\\rfloor" || e === "⌋" ? (l = o = 9125, u = 9126, c = "Size4-Regular") : e === "\\rceil" || e === "⌉" ? (o = 9124, l = u = 9125, c = "Size4-Regular") : e === "(" || e === "\\lparen" ? (o = 9115, l = 9116, u = 9117, c = "Size4-Regular") : e === ")" || e === "\\rparen" ? (o = 9118, l = 9119, u = 9120, c = "Size4-Regular") : e === "\\{" || e === "\\lbrace" ? (o = 9127, s = 9128, u = 9129, l = 9130, c = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = 9131, s = 9132, u = 9133, l = 9130, c = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = 9127, u = 9129, l = 9130, c = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = 9131, u = 9133, l = 9130, c = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = 9127, u = 9133, l = 9130, c = "Size4-Regular") : e === "\\rmoustache" || e === "⎱" ? (o = 9131, u = 9129, l = 9130, c = "Size4-Regular") : e === "\\surd" ? (o = 57345, u = 9143, l = 57344, c = "Size4-Regular") : e === "\\ulcorner" ? (o = 9484, l = u = 32) : e === "\\urcorner" ? (o = 9488, l = u = 32) : e === "\\llcorner" ? (u = 9492, l = o = 32) : e === "\\lrcorner" && (o = 9496, l = o = 32);
  let d = nr(o, c), h = d.height + d.depth, p = nr(l, c), m = p.height + p.depth, y = nr(u, c), w = y.height + y.depth, g = 0, k = 1;
  if (s !== null) {
    let he = nr(s, c);
    g = he.height + he.depth, k = 2;
  }
  let A = h + w + g, _ = Math.max(0, Math.ceil((t - A) / (k * m))), T = A + _ * k * m, K = Ze;
  i && (K = K * r.scalingFactor);
  let z = T / 2 - K, O = [];
  O.push({ box: new S(u, { fontFamily: c }) }), O.push(-8e-3);
  let ne = new S(l, { fontFamily: c });
  if (s === null) for (let he = 0; he < _; he++) O.push({ box: ne });
  else {
    for (let he = 0; he < _; he++) O.push({ box: ne });
    O.push(-8e-3), O.push({ box: new S(s, { fontFamily: c }) }), O.push(-8e-3);
    for (let he = 0; he < _; he++) O.push({ box: ne });
  }
  O.push(-8e-3), O.push({ box: new S(o, { fontFamily: c }) });
  let C = "";
  c === "Size1-Regular" ? C = " delim-size1" : c === "Size4-Regular" && (C = " delim-size4");
  let bt = new ae({ bottom: z, children: O }, { classes: C });
  return new S(bt, b(f({}, n ?? {}), { classes: ((a = n == null ? void 0 : n.classes) != null ? a : "") + " ML__delim-mult" }));
}
var Tp = /* @__PURE__ */ new Set(["(", ")", "\\lparen", "\\rparen", "[", "]", "\\lbrack", "\\rbrack", "\\{", "\\}", "\\lbrace", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd", "⌊", "⌋", "⌈", "⌉"]), c4 = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\mvert", "\\mid", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "⟮", "⟯", "⎰", "⎱"]), Fp = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), d4 = [0, 1.2, 1.8, 2.4, 3];
function h4(e, t, i, r) {
  return e === void 0 || e === "." ? Fi(i, r.classes) : (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), Tp.has(e) || Fp.has(e) ? Ep(e, t, !1, i, r) : c4.has(e) ? Dp(e, d4[t], !1, i, r) : null);
}
var p4 = [{ type: "small", mathstyle: "scriptscriptstyle" }, { type: "small", mathstyle: "scriptstyle" }, { type: "small", mathstyle: "textstyle" }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }], m4 = [{ type: "small", mathstyle: "scriptscriptstyle" }, { type: "small", mathstyle: "scriptscriptstyle" }, { type: "small", mathstyle: "textstyle" }, { type: "stack" }], f4 = [{ type: "small", mathstyle: "scriptscriptstyle" }, { type: "small", mathstyle: "scriptstyle" }, { type: "small", mathstyle: "textstyle" }, { type: "large", size: 1 }, { type: "large", size: 2 }, { type: "large", size: 3 }, { type: "large", size: 4 }, { type: "stack" }];
function g4(e) {
  return e.type === "small" ? "Main-Regular" : e.type === "large" ? "Size" + e.size + "-Regular" : (e.type, "Size4-Regular");
}
function y4(e, t, i, r) {
  let n = { "-4": 0, "-3": 1, 0: 2 }[r.mathstyle.sizeDelta];
  for (let a = n; a < i.length && i[a].type !== "stack"; a++) {
    let o = nr(e, g4(i[a]));
    if (o.defaultMetrics) return { type: "small", mathstyle: "scriptstyle" };
    let s = o.height + o.depth;
    if (i[a].type === "small" && (i[a].mathstyle === "scriptscriptstyle" ? s *= Math.max(il[Math.max(1, r.size - 2)], r.minFontScale) : i[a].mathstyle === "scriptstyle" && (s *= Math.max(il[Math.max(1, r.size - 1)], r.minFontScale))), s > t) return i[a];
  }
  return i[i.length - 1];
}
function so(e, t, i, r, n, a) {
  if (!t || t.length === 0 || t === ".") return Fi(n);
  t === "<" || t === "\\lt" ? t = "\\langle" : (t === ">" || t === "\\gt") && (t = "\\rangle");
  let o;
  Fp.has(t) ? o = p4 : Tp.has(t) ? o = f4 : o = m4;
  let s = y4(Fo(t), i, o, n), l = new I({ parent: n, mathstyle: s.mathstyle }, a == null ? void 0 : a.style);
  return s.type === "small" ? u4(t, l, r, b(f({}, a), { type: e })) : s.type === "large" ? Ep(t, s.size, r, l, b(f({}, a), { type: e })) : (s.type, Dp(t, i, r, l, b(f({}, a), { type: e })));
}
function bn(e, t, i, r, n, a) {
  if (t === ".") return Fi(n, a == null ? void 0 : a.classes);
  let o = Ze * n.scalingFactor, s = 901, l = 5 / br, u = Math.max(i - o, r + o), c = Math.max(u / 500 * s, 2 * u - l);
  return so(e, t, c, !0, n, a);
}
function Fi(e, t) {
  let i = new S(null, { classes: " ML__nulldelimiter " + (t ?? ""), type: "ignore" });
  return i.width = e.getRegisterAsEm("nulldelimiterspace"), i.wrap(new I({ parent: e, mathstyle: "textstyle" }));
}
var Ye = class zp extends v {
  constructor(t) {
    var i;
    super({ type: "placeholder", command: "\\placeholder", mode: (i = t == null ? void 0 : t.mode) != null ? i : "math", style: t == null ? void 0 : t.style }), this.captureSelection = !0;
  }
  static fromJson(t) {
    return new zp(t);
  }
  toJson() {
    return super.toJson();
  }
  render(t) {
    let i;
    return this.value = t.placeholderSymbol, typeof t.renderPlaceholder == "function" ? i = t.renderPlaceholder(t) : i = this.createBox(t), this.caret && (i.classes += " ML__placeholder-selected"), i;
  }
  _serialize(t) {
    return t.skipPlaceholders ? "" : "\\placeholder{}";
  }
}, Kp = ["matrix", "matrix*", "pmatrix", "pmatrix*", "bmatrix", "bmatrix*", "Bmatrix", "Bmatrix*", "vmatrix", "vmatrix*", "Vmatrix", "Vmatrix*"], $p = ["cases", "dcases", "rcases"], Pp = ["align", "align*", "aligned", "gather", "gather*", "gathered", "split"], b4 = ["array", "subequations", "eqnarray"];
function v4(e) {
  return b4.concat(Pp).concat($p).concat(Kp).includes(e);
}
function Np(e) {
  return Kp.includes(e);
}
function x4(e) {
  return $p.includes(e);
}
function w4(e) {
  return Pp.includes(e);
}
function k4(e, t, i) {
  let r = 0;
  for (let u of i) "align" in u && (r += 1);
  let n = 0, a = [];
  for (let u of t) {
    let c = 0;
    for (n = Math.max(n, Math.min(u.length, r)); c < u.length; ) {
      let d = [], h = Math.min(u.length, c + r);
      for (; c < h; ) {
        let p = u[c];
        p.length === 0 ? d.push([new v({ type: "first", mode: e.mode })]) : p[0].type !== "first" ? d.push([new v({ type: "first", mode: e.mode }), ...p]) : (p.slice(1).some((m) => m.type === "first"), d.push(p)), c += 1;
      }
      a.push(d);
    }
  }
  a.length > 0 && a[a.length - 1].length === 1 && a[a.length - 1][0].length === 1 && a[a.length - 1][0][0].type === "first" && a.pop();
  let o = [];
  for (let u of a) {
    if (u.length !== n) for (let c = u.length; c < n; c++) u.push([new v({ type: "first", mode: e.mode }), new Ye()]);
    o.push(u);
  }
  let s = 0, l = 0;
  for (let u of o) {
    l = 0;
    for (let c of u) {
      for (let d of c) d.parent = e, d.parentBranch = [s, l];
      l += 1;
    }
    s += 1;
  }
  return e.isDirty = !0, o;
}
var H = class Op extends v {
  constructor(t, i, r, n = {}) {
    var a;
    super({ type: "array" }), this.environmentName = t, this.rowGaps = r, n.mathstyleName && (this.mathstyleName = n.mathstyleName), n.columns && (n.columns.length === 0 ? this.colFormat = [{ align: "l" }] : this.colFormat = n.columns), this.colFormat || (this.colFormat = [{ align: "l" }, { align: "l" }, { align: "l" }, { align: "l" }, { align: "l" }, { align: "l" }, { align: "l" }, { align: "l" }, { align: "l" }, { align: "l" }]), this.array = k4(this, i, this.colFormat), n.leftDelim && (this.leftDelim = n.leftDelim), n.rightDelim && (this.rightDelim = n.rightDelim), n.arraycolsep !== void 0 && (this.arraycolsep = n.arraycolsep), this.colSeparationType = n.colSeparationType, n.arraystretch !== void 0 && (this.arraystretch = n.arraystretch), this.minColumns = (a = n.minColumns) != null ? a : 1;
  }
  static fromJson(t) {
    return new Op(t.environmentName, t.array, t.rowGaps, t);
  }
  toJson() {
    let t = b(f({}, super.toJson()), { environmentName: this.environmentName, array: this.array.map((i) => i.map((r) => r.map((n) => n.toJson()))), rowGaps: this.rowGaps, columns: this.colFormat, colSeparationType: this.colSeparationType });
    return this.arraystretch !== void 0 && (t.arraystretch = this.arraystretch), this.arraycolsep !== void 0 && (t.arraycolsep = this.arraycolsep), this.leftDelim && (t.leftDelim = this.leftDelim), this.rightDelim && (t.rightDelim = this.rightDelim), t;
  }
  branch(t) {
    var i;
    if (no(t)) return (i = this.array[t[0]][t[1]]) != null ? i : void 0;
  }
  createBranch(t) {
    var i;
    return no(t) ? (this.isDirty = !0, (i = this.branch(t)) != null ? i : []) : [];
  }
  get rowCount() {
    return this.array.length;
  }
  get colCount() {
    return this.array[0].length;
  }
  get maxColumns() {
    return this.colFormat.filter((t) => !!t.align).length;
  }
  removeBranch(t) {
    if (gi(t)) return super.removeBranch(t);
    let i = this.branch(t);
    return this.array[t[0]][t[1]] = void 0, i.forEach((r) => {
      r.parent = void 0, r.parentBranch = void 0;
    }), i[0].type, i.shift(), this.isDirty = !0, i;
  }
  get hasChildren() {
    return this.children.length > 0;
  }
  get children() {
    let t = [];
    for (let i of this.array) for (let r of i) if (r) for (let n of r) t.push(...n.children), t.push(n);
    return [...t, ...super.children];
  }
  render(t) {
    var i, r, n, a, o, s;
    let l = new I({ parent: t, mathstyle: this.mathstyleName }, this.style), u = l.getRegisterAsEm("arrayrulewidth"), c = l.getRegisterAsEm("arraycolsep"), d = l.getRegisterAsEm("doublerulesep"), h = (r = (i = this.arraystretch) != null ? i : l.getRegisterAsNumber("arraystretch")) != null ? r : 1, p = typeof this.arraycolsep == "number" ? this.arraycolsep : c;
    this.colSeparationType === "small" && (p = 0.2778 * (new I({ parent: t, mathstyle: "scriptstyle" }).scalingFactor / t.scalingFactor));
    let m = h * _g, y = 0.7 * m, w = 0.3 * m, g = 0, k = [], A = 0, _ = this.array.length;
    for (let U = 0; U < _; ++U) {
      let te = this.array[U];
      A = Math.max(A, te.length);
      let oe = new I({ parent: l, mathstyle: this.mathstyleName }, this.style), Qe = y / oe.scalingFactor, et = w / oe.scalingFactor, tt = { cells: [], height: 0, depth: 0, pos: 0 };
      for (let Ve of te) {
        let Ho = (n = v.createBox(oe, Ve, { type: "ignore" })) != null ? n : new S(null, { type: "ignore" });
        et = Math.max(et, Ho.depth), Qe = Math.max(Qe, Ho.height), tt.cells.push(Ho);
      }
      let it = (a = yp(this.rowGaps[U])) != null ? a : 0;
      it > 0 && (it += w, et = Math.max(et, it), it = 0), U < _ - 1 && !Np(this.environmentName) && this.environmentName !== "cases" && this.environmentName !== "array" && (et += l.getRegisterAsEm("jot")), tt.height = Qe, tt.depth = et, g += Qe, tt.pos = g, g += et + it, k.push(tt);
    }
    let T = g / 2 + Ze, K = [];
    for (let U = 0; U < A; U++) {
      let te = [];
      for (let oe of k) {
        let Qe = oe.cells[U];
        Qe.depth = oe.depth, Qe.height = oe.height, te.push({ box: Qe, shift: oe.pos - T });
      }
      te.length > 0 && K.push(new ae({ individualShift: te }));
    }
    let z = [], O = !1, ne = !1, C = 0, bt = !this.leftDelim, { colFormat: he } = this;
    for (let U of he) {
      if ("align" in U && C >= K.length) break;
      if ("align" in U) O ? z.push(Sa(2 * p)) : (ne || bt) && z.push(Sa(p)), z.push(new S(K[C], { classes: "col-align-" + U.align })), C++, O = !0, ne = !1, bt = !1;
      else if ("gap" in U) {
        if (typeof U.gap == "number") z.push(Sa(U.gap));
        else {
          let te = _4(t, k, T, U.gap);
          te && z.push(te);
        }
        O = !1, ne = !1, bt = !1;
      } else if ("separator" in U) {
        let te = new S(null, { classes: "ML__vertical-separator" });
        te.height = g, te.setStyle("height", g, "em"), te.setStyle("border-right", `${u}em ${U.separator} currentColor`), te.setStyle("vertical-align", -(g - T), "em");
        let oe = 0;
        ne ? oe = d - u : O && (oe = p - u), te.left = oe, z.push(te), O = !1, ne = !0, bt = !1;
      }
    }
    O && !this.rightDelim && z.push(Sa(p));
    let je = new S(z, { classes: "ML__mtable" });
    if ((!this.leftDelim || this.leftDelim === ".") && (!this.rightDelim || this.rightDelim === ".")) return this.caret && (je.caret = this.caret), this.bind(t, je);
    let At = je.height, Le = je.depth, xe = this.bind(t, new S([this.bind(t, bn("open", (o = this.leftDelim) != null ? o : ".", At, Le, l, { isSelected: this.isSelected })), je, this.bind(t, bn("close", (s = this.rightDelim) != null ? s : ".", At, Le, l, { isSelected: this.isSelected }))], { type: "ord" }));
    return xe ? (xe.setStyle("display", "inline-block"), this.caret && (xe.caret = this.caret), this.bind(t, this.attachSupsub(t, { base: xe }))) : null;
  }
  _serialize(t) {
    var i;
    let r = [];
    if (this.environmentName === "lines" ? r.push("{\\displaylines") : r.push(`\\begin{${this.environmentName}}`), this.environmentName === "array") {
      if (r.push("{"), this.colFormat !== void 0) for (let n of this.colFormat) "align" in n && typeof n.align == "string" ? r.push(n.align) : "separator" in n && n.separator === "solid" ? r.push("|") : "separator" in n && n.separator === "dashed" && r.push(":");
      r.push("}");
    }
    for (let n = 0; n < this.array.length; n++) {
      for (let a = 0; a < this.array[n].length; a++) a > 0 && r.push(" & "), r.push(v.serialize(this.array[n][a], t));
      if (n < this.array.length - 1) {
        let a = this.rowGaps[n];
        a != null && a.dimension ? r.push(`\\\\[${a.dimension} ${(i = a.unit) != null ? i : "pt"}] `) : r.push("\\\\ ");
      }
    }
    return this.environmentName === "lines" ? r.push("}") : r.push(`\\end{${this.environmentName}}`), R(r);
  }
  getCell(t, i) {
    return this.array[t][i];
  }
  setCell(t, i, r) {
    this.type === "array" && Array.isArray(this.array) && this.array[t][i];
    for (let a of this.array[t][i]) a.parent = void 0, a.parentBranch = void 0;
    let n = r;
    (r.length === 0 || r[0].type !== "first") && (n = [new v({ type: "first", mode: this.mode }), ...r]), this.array[t][i] = n;
    for (let a of n) a.parent = this, a.parentBranch = [t, i];
    this.isDirty = !0;
  }
  addRowBefore(t) {
    this.type === "array" && Array.isArray(this.array);
    let i = [];
    for (let r = 0; r < this.colCount; r++) i.push(Ma(this));
    this.array.splice(t, 0, i);
    for (let r = t; r < this.rowCount; r++) for (let n = 0; n < this.colCount; n++) {
      let a = this.array[r][n];
      if (a) for (let o of a) o.parentBranch = [r, n];
    }
    this.isDirty = !0;
  }
  addRowAfter(t) {
    this.type === "array" && Array.isArray(this.array);
    let i = [];
    for (let r = 0; r < this.colCount; r++) i.push(Ma(this));
    this.array.splice(t + 1, 0, i);
    for (let r = t + 1; r < this.rowCount; r++) for (let n = 0; n < this.colCount; n++) {
      let a = this.array[r][n];
      if (a) for (let o of a) o.parentBranch = [r, n];
    }
    this.isDirty = !0;
  }
  removeRow(t) {
    this.type === "array" && Array.isArray(this.array) && this.rowCount > t;
    let i = this.array.splice(t, 1);
    for (let r of i) for (let n of r) if (n) for (let a of n) a.parent = void 0, a.parentBranch = void 0;
    for (let r = t; r < this.rowCount; r++) for (let n = 0; n < this.colCount; n++) {
      let a = this.array[r][n];
      if (a) for (let o of a) o.parentBranch = [r, n];
    }
    this.isDirty = !0;
  }
  addColumnBefore(t) {
    this.type === "array" && Array.isArray(this.array);
    for (let i of this.array) i.splice(t, 0, Ma(this));
    for (let i = 0; i < this.rowCount; i++) for (let r = t; r < this.colCount; r++) {
      let n = this.array[i][r];
      if (n) for (let a of n) a.parentBranch = [i, r];
    }
    this.isDirty = !0;
  }
  addColumnAfter(t) {
    this.type === "array" && Array.isArray(this.array);
    for (let i of this.array) i.splice(t + 1, 0, Ma(this));
    for (let i = 0; i < this.rowCount; i++) for (let r = t + 1; r < this.colCount; r++) {
      let n = this.array[i][r];
      if (n) for (let a of n) a.parentBranch = [i, r];
    }
    this.isDirty = !0;
  }
  addColumn() {
    this.addColumnAfter(this.colCount - 1);
  }
  removeColumn(t) {
    this.type === "array" && Array.isArray(this.array) && this.colCount > t;
    for (let i of this.array) {
      let r = i.splice(t, 1);
      for (let n of r) if (n) for (let a of n) a.parent = void 0, a.parentBranch = void 0;
    }
    for (let i = 0; i < this.rowCount; i++) for (let r = t; r < this.colCount; r++) {
      let n = this.array[i][r];
      if (n) for (let a of n) a.parentBranch = [i, r];
    }
    this.isDirty = !0;
  }
  get cells() {
    let t = [];
    for (let i of this.array) for (let r of i) r && t.push(r.filter((n) => n.type !== "first"));
    return t;
  }
};
function Ma(e) {
  let t = new v({ type: "first", mode: e.mode });
  t.parent = e;
  let i = new Ye();
  return i.parent = e, [t, i];
}
function Sa(e) {
  let t = new S(null, { classes: "ML__arraycolsep" });
  return t.width = e, t;
}
function _4(e, t, i, r) {
  if (!r) return null;
  let n = [];
  for (let a of t) {
    let o = v.createBox(e, r, { type: "ignore" });
    o && (o.depth = a.depth, o.height = a.height, n.push({ box: o, shift: a.pos - i }));
  }
  return new ae({ individualShift: n }).wrap(e);
}
var Qt = class Ip extends v {
  constructor(t) {
    super({ mode: t.mode, command: t.command, style: t.style, body: t.body, type: "box" }), this.framecolor = t.framecolor, this.backgroundcolor = t.backgroundcolor, this.padding = t.padding, this.offset = t.offset, this.border = t.border;
  }
  static fromJson(t) {
    return new Ip(t);
  }
  toJson() {
    return b(f({}, super.toJson()), { framecolor: this.framecolor, backgroundcolor: this.backgroundcolor, padding: this.padding, offset: this.offset, border: this.border });
  }
  render(t) {
    var i, r, n, a;
    let o = v.createBox(t, this.body, { type: "lift" });
    if (!o) return null;
    let s = t.toEm((i = this.offset) != null ? i : { dimension: 0 });
    o.depth += s, o.setStyle("display", "inline-block"), o.setStyle("position", "relative"), o.setStyle("height", Math.floor(100 * o.height + o.depth) / 100, "em"), o.setStyle("vertical-align", -Math.floor(100 * o.height) / 100, "em");
    let l = new I({ parent: t }, this.style), u = l.toEm((r = this.padding) != null ? r : { register: "fboxsep" }), c = new S(null, { classes: "ML__box" });
    c.height = o.height + u, c.depth = o.depth + u, c.setStyle("box-sizing", "border-box"), c.setStyle("position", "absolute"), c.setStyle("top", -u + 0.3, "em"), c.setStyle("left", 0), c.setStyle("height", c.height + c.depth, "em"), c.setStyle("width", "100%"), this.backgroundcolor && c.setStyle("background-color", (n = l.toColor(this.backgroundcolor)) != null ? n : "transparent"), this.framecolor && c.setStyle("border", `${l.getRegisterAsEm("fboxrule", 2)}em solid ${(a = l.toColor(this.framecolor)) != null ? a : "black"}`), this.border && c.setStyle("border", this.border);
    let d = new S([c, o], { type: "lift" });
    return d.setStyle("display", "inline-block"), d.setStyle("position", "relative"), d.setStyle("line-height", 0), d.height = o.height + u + (s > 0 ? s : 0), d.depth = o.depth + u + (s < 0 ? -s : 0), d.setStyle("padding-left", u, "em"), d.setStyle("padding-right", u, "em"), d.setStyle("height", Math.floor(100 * (o.height + o.depth + 2 * u + Math.abs(s))) / 100, "em"), d.setStyle("margin-top", -u, "em"), d.setStyle("top", Math.floor(100 * (o.depth - o.height + 2 * u - s)) / 100, "em"), d.setStyle("vertical-align", Math.floor(100 * (o.depth + 2 * u)) / 100, "em"), this.caret && (d.caret = this.caret), this.attachSupsub(t, { base: d });
  }
  _serialize(t) {
    return t.skipStyles ? R([this.bodyToLatex(t), this.supsubToLatex(t)]) : super._serialize(t);
  }
}, Rp = class qp extends v {
  constructor(t, i) {
    var r;
    super({ type: "composition", mode: (r = i == null ? void 0 : i.mode) != null ? r : "math", value: t });
  }
  static fromJson(t) {
    return new qp(t.value, t);
  }
  toJson() {
    return super.toJson();
  }
  get computedStyle() {
    return {};
  }
  render(t) {
    let i = new S(this.value, { classes: "ML__composition", type: "composition" });
    return this.bind(t, i), this.caret && (i.caret = this.caret), i;
  }
  _serialize(t) {
    return "";
  }
}, bi = class jp extends v {
  constructor(t) {
    super({ type: "error", value: t, command: t, mode: "math" }), this.verbatimLatex = t;
  }
  static fromJson(t) {
    return new jp(t.command);
  }
  toJson() {
    return super.toJson();
  }
  render(t) {
    let i = this.createBox(t, { classes: "ML__error" });
    return this.caret && (i.caret = this.caret), i;
  }
}, Vp = class Hp extends v {
  constructor(t, i, r) {
    super({ type: "group", mode: i, style: r }), this.body = t, this.boxType = t.length > 1 ? "ord" : "ignore", this.skipBoundary = !0, this.displayContainsHighlight = !1, t && t.length === 1 && t[0].command === "," && (this.captureSelection = !0);
  }
  static fromJson(t) {
    return new Hp(t.body, t.mode, t.style);
  }
  render(t) {
    let i = v.createBox(t, this.body, { type: this.boxType });
    return i ? (this.caret && (i.caret = this.caret), this.bind(t, i)) : null;
  }
  _serialize(t) {
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let i = fe(this.command, this.mode);
    return i != null && i.serialize ? i.serialize(this, t) : `{${this.bodyToLatex(t)}}`;
  }
}, Q = class Wp extends v {
  constructor(t, i, r) {
    super({ type: "leftright", style: r.style, displayContainsHighlight: !0 }), this.variant = t, this.body = i, this.leftDelim = r.leftDelim, this.rightDelim = r.rightDelim;
  }
  static fromJson(t) {
    var i;
    return new Wp((i = t.variant) != null ? i : "", t.body, t);
  }
  toJson() {
    let t = super.toJson();
    return this.variant && (t.variant = this.variant), this.leftDelim && (t.leftDelim = this.leftDelim), this.rightDelim && (t.rightDelim = this.rightDelim), t;
  }
  _serialize(t) {
    var i, r;
    let n = this.matchingRightDelim();
    return this.variant === "left...right" ? R(["\\left", (i = this.leftDelim) != null ? i : ".", this.bodyToLatex(t), "\\right", n]) : this.variant === "mleft...mright" ? R(["\\mleft", (r = this.leftDelim) != null ? r : ".", this.bodyToLatex(t), "\\mright", n]) : R([!this.leftDelim || this.leftDelim === "." ? "" : this.leftDelim, this.bodyToLatex(t), n]);
  }
  matchingRightDelim() {
    var t, i;
    if (this.rightDelim && this.rightDelim !== "?") return this.rightDelim;
    let r = (t = this.leftDelim) != null ? t : ".";
    return (i = To[r]) != null ? i : r;
  }
  render(t) {
    var i, r;
    let n = new I({ parent: t }, this.style);
    this.body;
    let a = new I({ parent: t, mathstyle: "textstyle" }, this.style), o = (i = v.createBox(n, this.body, { type: "inner" })) != null ? i : new S(null, { type: "inner" }), s = o.height / a.scalingFactor, l = o.depth / a.scalingFactor, u = [];
    if (this.leftDelim && u.push(this.bind(a, bn("open", this.leftDelim, s, l, a, { isSelected: this.isSelected, classes: "ML__open" + (this.containsCaret ? " ML__contains-caret" : ""), mode: this.mode, style: this.style }))), o && (Up(o.children, this, n, s, l), u.push(o)), this.rightDelim) {
      let p = this.containsCaret ? " ML__contains-caret" : "", m = this.rightDelim;
      m === "?" && (n.smartFence ? (m = this.matchingRightDelim(), p += " ML__smart-fence__close") : m = "."), u.push(this.bind(a, bn("close", m, s, l, a, { isSelected: this.isSelected, classes: p + " ML__close", mode: this.mode, style: this.style })));
    }
    let c = this.variant === "mleft...mright", d = this.leftSibling;
    d && (!c && d.isFunction && (c = !0), !c && d.type === "subsup" && (r = d.leftSibling) != null && r.isFunction && (c = !0));
    let h = new S(u, { type: c ? "close" : "inner", classes: "ML__left-right" });
    return h.setStyle("margin-top", `${-o.depth}em`), h.setStyle("height", `${o.height + o.depth}em`), this.caret && (h.caret = this.caret), this.bind(n, h.wrap(n));
  }
};
function Up(e, t, i, r, n) {
  if (e) for (let a = 0; a < e.length; a++) {
    let o = e[a];
    o.type === "middle" ? (e[a] = t.bind(i, bn("inner", o.value, r, n, i, { isSelected: t.isSelected })), e[a].caret = o.caret, e[a].isSelected = o.isSelected, e[a].cssId = o.cssId, e[a].htmlData = o.htmlData, e[a].htmlStyle = o.htmlStyle, e[a].attributes = o.attributes, e[a].cssProperties = o.cssProperties) : o.children && Up(o.children, t, i, r, n);
  }
}
var Jp = class Xp extends v {
  constructor(t, i) {
    var r;
    super({ type: "macro", command: t, style: i.style }), this.body = i.body, i.captureSelection === void 0 ? i.args ? this.captureSelection = !1 : this.captureSelection = !0 : this.captureSelection = i.captureSelection, this.macroArgs = i.args, this.expand = (r = i.expand) != null ? r : !1;
  }
  static fromJson(t) {
    return new Xp(t.command, t);
  }
  toJson() {
    let t = super.toJson();
    return this.expand && (t.expand = !0), this.captureSelection !== void 0 && (t.captureSelection = this.captureSelection), this.macroArgs && (t.args = this.macroArgs), t;
  }
  _serialize(t) {
    var i;
    return t.expandMacro && this.expand ? this.bodyToLatex(t) : this.command + ((i = this.macroArgs) != null ? i : "");
  }
  render(t) {
    let i = v.createBox(t, this.body);
    return i ? (this.caret && (i.caret = this.caret), this.bind(t, i)) : null;
  }
}, M4 = class Gp extends v {
  constructor() {
    super({ type: "macro-argument" });
  }
  static fromJson(t) {
    return new Gp();
  }
  toJson() {
    return super.toJson();
  }
  _serialize(t) {
    return "";
  }
  render(t) {
    return null;
  }
}, Zp = class Yp extends v {
  constructor(t, i, r = !1, n, a) {
    var o;
    super({ type: "prompt", mode: (o = a == null ? void 0 : a.mode) != null ? o : "math", style: a == null ? void 0 : a.style, command: "\\placeholder" }), this.body = n, this.correctness = i, this.placeholderId = t, this.locked = r, this.captureSelection = this.locked;
  }
  static fromJson(t) {
    return new Yp(t.placeholderId, t.correctness, t.locked, t.body, t);
  }
  toJson() {
    let t = super.toJson();
    return this.placeholderId && (t.placeholderId = this.placeholderId), this.body || delete t.body, this.body && (t.body = this.body.filter((i) => i.type !== "first").map((i) => i.toJson())), this.correctness && (t.correctness = this.correctness), t.locked = this.locked, t;
  }
  render(t) {
    let i = new I({ parent: t }), r = i.getRegisterAsEm("fboxsep"), n = r, a = r, o = v.createBox(t, this.body);
    if (!o) return null;
    o.height || (o.height = i.metrics.xHeight), o.setStyle("vertical-align", -o.height, "em"), this.correctness === "correct" ? o.setStyle("color", "var(--correct-color, var(--ML__correct-color))") : this.correctness === "incorrect" && o.setStyle("color", "var(--incorrect-color, var(--ML__incorrect-color))");
    let s = new S(o, { type: "ord" });
    s.setStyle("display", "inline-block"), s.setStyle("height", o.height + o.depth, "em"), s.setStyle("vertical-align", -a, "em");
    let l = "ML__prompt ";
    this.locked ? l += " ML__lockedPromptBox " : l += " ML__editablePromptBox ", this.correctness === "correct" ? l += " ML__correctPromptBox " : this.correctness === "incorrect" && (l += " ML__incorrectPromptBox "), this.containsCaret && (l += " ML__focusedPromptBox ");
    let u = new S(null, { classes: l, attributes: { part: "prompt" } });
    u.height = s.height + a, u.depth = s.depth + a, u.width = s.width + 2 * n, u.setStyle("box-sizing", "border-box"), u.setStyle("position", "absolute"), u.setStyle("height", s.height + s.depth + 2 * a, "em"), n === 0 && u.setStyle("width", "100%"), n !== 0 && (u.setStyle("width", `calc(100% + ${2 * n}em)`), u.setStyle("top", r, "em"), u.setStyle("left", -n, "em")), (!this.body || this.body.length === 1) && (u.width = 3 * n, u.setStyle("width", `calc(100% + ${3 * n}em)`), u.setStyle("left", -1.5 * n, "em"));
    let c = "";
    this.correctness === "incorrect" && (c += '<line x1="3%"  y1="97%" x2="97%" y2="3%" stroke-width="0.5" stroke="var(--incorrect-color, var(--ML__incorrect-color))" stroke-linecap="round" />'), c && (u.svgOverlay = c);
    let d = new S([u, s], { classes: "ML__prompt-atom" });
    return s.setStyle("line-height", 1), d.setStyle("position", "relative"), d.setStyle("display", "inline-block"), d.setStyle("line-height", 0), d.height = s.height + a + 0.2, d.depth = s.depth + a, d.left = n, d.right = n, d.setStyle("height", s.height + a, "em"), d.setStyle("top", s.depth - s.height, "em"), d.setStyle("vertical-align", s.depth + a, "em"), d.setStyle("margin-left", 0.5, "em"), d.setStyle("margin-right", 0.5, "em"), this.caret && (d.caret = this.caret), this.bind(i, this.attachSupsub(t, { base: d }));
  }
  _serialize(t) {
    var i;
    let r = (i = this.bodyToLatex(t)) != null ? i : "";
    if (t.skipPlaceholders) return r;
    let n = "\\placeholder";
    return this.placeholderId && (n += `[${this.placeholderId}]`), this.correctness === "correct" ? n += "[correct]" : this.correctness === "incorrect" && (n += "[incorrect]"), this.locked && (n += "[locked]"), Z(n, r);
  }
}, zo = class Qp extends v {
  constructor(t) {
    super({ type: "subsup", style: t == null ? void 0 : t.style }), this.subsupPlacement = "auto";
  }
  static fromJson(t) {
    let i = new Qp(t);
    for (let r of vr) t[r] && i.setChildren(t[r], r);
    return i;
  }
  render(t) {
    var i;
    let r = new I({ parent: t, isPhantom: !0 }), n = this.leftSibling, a = (i = n.render(r)) != null ? i : new S(null), o = new S(null);
    return o.height = a.height, o.depth = a.depth, this.attachSupsub(t, { base: o, isCharacterBox: n.isCharacterBox(), type: "ignore" });
  }
  _serialize(t) {
    return this.supsubToLatex(t);
  }
};
function Gi(e) {
  return e ? !/^(<$$>|<$>|<space>|<{>|<}>|#[0-9\?]|\\.+)$/.test(e) : !1;
}
var em = class {
  constructor(e, t, i) {
    this.errors = [], this.index = 0, this.endCount = 0;
    var r, n, a, o;
    i != null || (i = {}), this.tokens = e, this.context = t instanceof I && !(i != null && i.parseMode) && !i.mathstyle ? t : new I({ from: t, mathstyle: i.mathstyle }, i.style), this.args = (r = i.args) != null ? r : void 0, this.smartFence = this.context.smartFence, this.parsingContext = { parent: void 0, mathlist: [], style: (n = i.style) != null ? n : {}, parseMode: (a = i.parseMode) != null ? a : "math", mathstyle: (o = i.mathstyle) != null ? o : "displaystyle", tabular: !1 };
  }
  beginContext(e) {
    var t, i, r;
    let n = this.parsingContext, a = { parent: n, mathlist: [], style: f({}, n.style), parseMode: (t = e == null ? void 0 : e.mode) != null ? t : n.parseMode, mathstyle: (i = e == null ? void 0 : e.mathstyle) != null ? i : n.mathstyle, tabular: (r = e == null ? void 0 : e.tabular) != null ? r : !1 };
    this.parsingContext = a;
  }
  endContext() {
    this.parsingContext = this.parsingContext.parent;
  }
  onError(e) {
    this.errors.push(f({ before: li(this.tokens.slice(this.index, this.index + 10)), after: li(this.tokens.slice(Math.max(0, this.index - 10), this.index)) }, e));
  }
  get mathlist() {
    return this.parsingContext.mathlist;
  }
  set mathlist(e) {
    this.parsingContext.mathlist = e;
  }
  get parseMode() {
    return this.parsingContext.parseMode;
  }
  set parseMode(e) {
    this.parsingContext.parseMode = e;
  }
  get tabularMode() {
    return this.parsingContext.tabular;
  }
  get style() {
    let e = this.parsingContext;
    for (; e; ) {
      if (e.style) return f({}, e.style);
      e = e.parent;
    }
    return {};
  }
  set style(e) {
    this.parsingContext.style = e;
  }
  end() {
    return this.endCount++, this.index >= this.tokens.length || this.endCount > 1e3;
  }
  next() {
    this.index += 1;
  }
  get() {
    return this.endCount = 0, this.index < this.tokens.length ? this.tokens[this.index++] : "";
  }
  peek() {
    return this.tokens[this.index];
  }
  expandUnicode() {
    if (!this.peek() || this.parseMode !== "math") return;
    let e = pg(this.peek());
    e && this.tokens.splice(this.index, 1, ...yn(e));
  }
  match(e) {
    return this.tokens[this.index] === e ? (this.index++, !0) : !1;
  }
  lastSubsupAtom() {
    let e;
    return this.mathlist.length > 0 && (e = this.mathlist[this.mathlist.length - 1], e.type === "subsup" || e.subsupPlacement !== void 0) || (e = new zo({ style: this.style }), this.mathlist.push(e)), e;
  }
  hasPattern(e) {
    return e.test(this.tokens[this.index]);
  }
  hasInfixCommand() {
    var e;
    let { index: t } = this;
    if (t < this.tokens.length && this.tokens[t].startsWith("\\")) {
      let i = fe(this.tokens[t], this.parseMode);
      return !i || i.definitionType === "symbol" || i.ifMode && !i.ifMode.includes(this.parseMode) ? !1 : (e = i.infix) != null ? e : !1;
    }
    return !1;
  }
  matchColumnSeparator() {
    return !this.tabularMode || this.peek() !== "&" ? !1 : (this.index++, !0);
  }
  matchRowSeparator() {
    if (!this.tabularMode) return !1;
    let e = this.peek();
    return e !== "\\\\" && e !== "\\cr" && e !== "\\tabularnewline" ? !1 : (this.index++, !0);
  }
  placeholder() {
    var e;
    let t = (e = this.args) == null ? void 0 : e.call(this, "?");
    return t ? Te(t, { parseMode: this.parseMode, mathstyle: "textstyle" }) : [new Ye({ mode: this.parseMode, style: this.style })];
  }
  skipWhitespace() {
    for (; this.match("<space>"); ) ;
  }
  skipUntilToken(e) {
    let t = this.tokens[this.index];
    for (; t && t !== e; ) t = this.tokens[++this.index];
    t === e && this.index++;
  }
  skipFiller() {
    for (; this.match("\\relax") || this.match("<space>"); ) ;
  }
  matchKeyword(e) {
    let t = this.index, i = this.end(), r = "";
    for (; !i; ) {
      let a = this.get();
      Gi(a) ? (r += a, i = this.end() || r.length >= e.length) : i = !0;
    }
    let n = e.toUpperCase() === r.toUpperCase();
    return n || (this.index = t), n;
  }
  scanString() {
    let e = "";
    for (; !this.end(); ) {
      let t = this.peek();
      if (t === "]") return e;
      if (t === "<space>") e += " ";
      else if (t.startsWith("\\")) this.onError({ code: "unexpected-command-in-string" }), e += t.substring(1);
      else if (Gi(t)) e += t;
      else return e;
      this.next();
    }
    return e;
  }
  scanBalancedString() {
    let e = "", t = this.end(), i = 1;
    for (; !t; ) {
      let r = this.get();
      r === "<space>" ? e += " " : r === "<{>" ? (e += "{", i += 1) : r === "<}>" ? (i -= 1, i > 0 ? e += "}" : this.index -= 1) : r === "<$>" ? e += "$" : r === "<$$>" ? e += "$$" : e += r, t = i === 0 || this.end();
    }
    return e;
  }
  scanLiteralGroup() {
    var e;
    if (!this.match("<{>")) return "";
    let t = "", i = 1;
    for (; i > 0 && !this.end(); ) {
      let r = this.get();
      r === "<}>" ? (i -= 1, i > 0 && (t += "}")) : r === "<{>" ? (i += 1, t += "{") : (/\\[a-zA-Z]+$/.test(t) && /^[a-zA-Z]/.test(r) && (t += " "), t += (e = { "<space>": " ", "<$$>": "$$", "<$>": "$" }[r]) != null ? e : r);
    }
    return t;
  }
  scanNumber(e = !0) {
    var t, i;
    let r = !1, n = this.peek();
    for (; n === "<space>" || n === "+" || n === "-"; ) this.get(), n === "-" && (r = !r), n = this.peek();
    e = !!e;
    let a = 10, o = /\d/;
    if (this.match("'")) a = 8, o = /[0-7]/, e = !0;
    else if (this.match('"')) a = 16, o = /[\dA-F]/, e = !0;
    else if (this.match("x")) a = 16, o = /[\dA-Fa-f]/, e = !0;
    else if (this.match("`")) return n = this.get(), n ? n.length === 2 && n.startsWith("\\") ? { number: (r ? -1 : 1) * ((t = n.codePointAt(1)) != null ? t : 0), base: "alpha" } : { number: (r ? -1 : 1) * ((i = n.codePointAt(0)) != null ? i : 0), base: "alpha" } : null;
    let s = "";
    for (; this.hasPattern(o); ) s += this.get();
    if (!e && (this.match(".") || this.match(","))) for (s += "."; this.hasPattern(o); ) s += this.get();
    let l = e ? Number.parseInt(s, a) : Number.parseFloat(s);
    return Number.isNaN(l) ? null : { number: r ? -l : l, base: a === 16 ? "hexadecimal" : a === 8 ? "octal" : "decimal" };
  }
  scanRegister() {
    var e;
    let t = this.index, i = this.scanNumber(!1);
    if (this.skipWhitespace(), this.match("\\relax")) return i;
    let r = !1;
    if (i === null) for (; ; ) {
      let a = this.peek();
      if (a === "-") r = !r;
      else if (a !== "+") break;
      this.next(), this.skipWhitespace();
    }
    if (this.match("\\global")) {
      this.skipWhitespace();
      let a = this.get();
      return a.startsWith("\\") ? i ? { register: a, global: !0, factor: (r ? -1 : 1) * i.number } : r ? { register: a, global: !0, factor: -1 } : { register: a, global: !0 } : (this.index = t, null);
    }
    let n = this.get();
    return n != null && n.startsWith("\\") ? (n = n.substring(1), this.context.registers[n] ? !r || i !== null ? { register: n, factor: (r ? -1 : 1) * ((e = i == null ? void 0 : i.number) != null ? e : 1) } : { register: n } : (this.index = t, null)) : (this.index = t, null);
  }
  scanValue() {
    let e = this.scanRegister();
    if (e) return e;
    let t = this.index, i = this.scanGlueOrDimen();
    if (i && ("unit" in i || "glue" in i && "unit" in i.glue)) return i;
    this.index = t;
    let r = this.scanNumber();
    if (r) return r;
    if (this.end() || !Gi(this.peek())) return null;
    let n = this.scanString();
    return n.length > 0 ? { string: n } : null;
  }
  scanDimen() {
    let e = this.scanNumber(!1);
    if (e === null) return null;
    let t = e.number;
    this.skipWhitespace(), this.matchKeyword("true"), this.skipWhitespace();
    let i;
    return this.matchKeyword("pt") ? i = "pt" : this.matchKeyword("mm") ? i = "mm" : this.matchKeyword("cm") ? i = "cm" : this.matchKeyword("ex") ? i = "ex" : this.matchKeyword("px") ? i = "px" : this.matchKeyword("em") ? i = "em" : this.matchKeyword("bp") ? i = "bp" : this.matchKeyword("dd") ? i = "dd" : this.matchKeyword("pc") ? i = "pc" : this.matchKeyword("in") ? i = "in" : this.matchKeyword("mu") && (i = "mu"), i ? { dimension: t, unit: i } : { dimension: t };
  }
  scanGlueOrDimen() {
    let e = this.scanDimen();
    if (e === null) return null;
    if (this.skipWhitespace(), this.match("\\relax")) return e;
    let t = { glue: e };
    if (this.matchKeyword("plus")) {
      let i = this.scanDimen();
      if (i) t.grow = i;
      else return t;
    }
    if (this.skipWhitespace(), this.match("\\relax")) return t;
    if (this.skipWhitespace(), this.matchKeyword("minus")) {
      let i = this.scanDimen();
      if (i) t.shrink = i;
      else return t;
    }
    return !t.grow && !t.shrink ? e : t;
  }
  scanColspec() {
    this.skipWhitespace();
    let e = [];
    for (; !this.end() && !(this.peek() === "<}>" || this.peek() === "]"); ) {
      let t = this.get();
      t === "c" || t === "r" || t === "l" ? e.push({ align: t }) : t === "|" ? e.push({ separator: "solid" }) : t === ":" ? e.push({ separator: "dashed" }) : t === "@" && (this.match("<{>") && (this.beginContext({ mode: "math" }), e.push({ gap: this.scan((i) => i === "<}>") }), this.endContext()), this.match("<}>") || this.onError({ code: "unbalanced-braces" }));
    }
    return e;
  }
  scanModeSet() {
    let e;
    if (this.match("\\(") && (e = "textstyle"), !e && this.match("\\[") && (e = "displaystyle"), !e) return null;
    this.beginContext({ mode: "math", mathstyle: e });
    let t = this.scan((i) => i === (e === "displaystyle" ? "\\]" : "\\)"));
    return this.match(e === "displaystyle" ? "\\]" : "\\)") || this.onError({ code: "unbalanced-mode-shift" }), this.endContext(), t;
  }
  scanModeShift() {
    let e = "";
    if (this.match("<$>") && (e = "<$>"), !e && this.match("<$$>") && (e = "<$$>"), !e) return null;
    this.beginContext({ mode: "math", mathstyle: "textstyle" });
    let t = this.scan((i) => i === e);
    return this.match(e) || this.onError({ code: "unbalanced-mode-shift" }), this.endContext(), t;
  }
  scanEnvironment() {
    if (!this.match("\\begin")) return null;
    let e = this.scanArgument("string");
    if (!e) return null;
    let t = vg(e);
    if (!t) return this.onError({ code: "unknown-environment", arg: e }), null;
    let i = [];
    if (t.params) for (let s of t.params) if (s.isOptional) i.push(this.scanOptionalArgument(s.type));
    else {
      let l = this.scanArgument(s.type);
      l || this.onError({ code: "missing-argument", arg: e }), i.push(l);
    }
    this.beginContext({ tabular: t.tabular });
    let r = [], n = [], a = [], o = !1;
    do
      if (this.end() && (this.onError({ code: "unbalanced-environment", arg: e }), o = !0), !o && this.match("\\end") && (this.scanArgument("string") !== e && this.onError({ code: "unbalanced-environment", arg: e }), o = !0), !o) if (this.matchColumnSeparator()) a.push(this.mathlist), this.mathlist = [];
      else if (this.matchRowSeparator()) {
        a.push(this.mathlist), this.mathlist = [];
        let s = null;
        this.skipWhitespace(), this.match("[") && (s = this.scanDimen(), this.skipWhitespace(), this.match("]")), n.push(s ?? { dimension: 0 }), r.push(a), a = [];
      } else this.mathlist.push(...this.scan((s) => ["<}>", "&", "\\end", "\\cr", "\\\\", "\\tabularnewline"].includes(s)));
    while (!o);
    return a.push(this.mathlist), a.length > 0 && r.push(a), this.endContext(), t.createAtom(e, r, n, i);
  }
  scanExpression() {
    let e = this.mathlist;
    if (this.mathlist = [], this.parseExpression()) {
      let t = this.mathlist;
      return this.mathlist = e, t;
    }
    return this.mathlist = e, null;
  }
  scan(e) {
    this.beginContext(), e || (e = (o) => o === "<}>");
    let t = "", i = null, r = [], n = null;
    for (; !this.end() && !e(this.peek()); ) this.hasInfixCommand() && !t ? (t = this.get(), i = fe(t, "math"), i && (r = this.scanArguments(i)[1]), n = this.mathlist, this.mathlist = []) : this.parseExpression();
    let a;
    return t ? (r.unshift(this.mathlist), n && r.unshift(n), a = [i.createAtom({ command: t, args: r, style: this.style, mode: this.parseMode })]) : a = this.mathlist, this.endContext(), a;
  }
  scanGroup() {
    let e = this.index;
    if (!this.match("<{>")) return null;
    let t = this.scan((r) => r === "<}>");
    this.match("<}>") || this.onError({ code: "unbalanced-braces" });
    let i = new Vp(t, this.parseMode, this.style);
    return i.verbatimLatex = li(this.tokens.slice(e, this.index)), i;
  }
  scanSmartFence() {
    if (this.skipWhitespace(), !this.match("(")) return null;
    this.beginContext();
    let e = 1;
    for (; !this.end() && e !== 0; ) this.match("(") && (e += 1), this.match(")") && (e -= 1), e !== 0 && this.parseExpression();
    let t = new Q("", this.mathlist, { leftDelim: "(", rightDelim: e === 0 ? ")" : "?" });
    return this.endContext(), t;
  }
  scanDelim() {
    this.skipWhitespace();
    let e = this.peek();
    if (!e) return this.onError({ code: "unexpected-end-of-string" }), null;
    if (!Gi(e) && !e.startsWith("\\")) return null;
    this.next();
    let t = fe(e, "math");
    return t ? t.definitionType === "function" && t.ifMode && !t.ifMode.includes(this.parseMode) ? (this.onError({ code: "unexpected-delimiter", arg: e }), null) : t.definitionType === "symbol" && (t.type === "mopen" || t.type === "mclose") || /^(\.|\?|\||<|>|\\vert|\\Vert|\\\||\\surd|\\uparrow|\\downarrow|\\Uparrow|\\Downarrow|\\updownarrow|\\Updownarrow|\\mid|\\mvert|\\mVert)$/.test(e) ? e : (this.onError({ code: "unexpected-delimiter", arg: e }), null) : (this.onError({ code: "unknown-command", arg: e }), null);
  }
  scanLeftRight() {
    var e;
    if (this.match("\\right")) return this.onError({ code: "unbalanced-braces" }), new bi("\\right");
    if (this.match("\\mright")) return this.onError({ code: "unbalanced-braces" }), new bi("\\mright");
    let t = "\\right";
    if (!this.match("\\left")) {
      if (!this.match("\\mleft")) return null;
      t = "\\mright";
    }
    let i = this.scanDelim();
    if (!i) return this.onError({ code: "unexpected-delimiter" }), new bi(t === "\\right" ? "\\left" : "\\mleft");
    for (this.beginContext(); !this.end() && !this.match(t); ) this.parseExpression();
    let r = this.mathlist;
    this.endContext();
    let n = (e = this.scanDelim()) != null ? e : ".";
    return new Q(t === "\\right" ? "left...right" : "mleft...mright", r, { leftDelim: i, rightDelim: n, style: this.style });
  }
  parseSupSub() {
    if (this.parseMode !== "math") return !1;
    let e = this.peek();
    if (e !== "^" && e !== "_" && e !== "'") return !1;
    let t = this.lastSubsupAtom();
    for (; e === "^" || e === "_" || e === "'"; ) this.match("'") ? this.match("'") ? t.addChild(new v({ type: "mord", command: "\\doubleprime", mode: "math", value: "′′" }), "superscript") : t.addChild(new v({ type: "mord", command: "\\prime", mode: "math", value: "′" }), "superscript") : (this.match("^") || this.match("_")) && t.addChildren(D(this.scanArgument("expression")), e === "_" ? "subscript" : "superscript"), e = this.peek();
    return !0;
  }
  parseLimits() {
    if (this.parseMode !== "math") return !1;
    let e = this.match("\\limits"), t = !e && this.match("\\nolimits"), i = !t && !e && this.match("\\displaylimits");
    if (!e && !t && !i) return !1;
    let r = this.mathlist.length > 0 ? this.mathlist[this.mathlist.length - 1] : null;
    return r === null ? !1 : (r.explicitSubsupPlacement = !0, e && (r.subsupPlacement = "over-under"), t && (r.subsupPlacement = "adjacent"), i && (r.subsupPlacement = "auto"), !0);
  }
  scanArguments(e) {
    if (!(e != null && e.params)) return [void 0, []];
    let t, i = [], r = e.infix ? 2 : 0;
    for (; r < e.params.length; ) {
      let n = e.params[r];
      n.type === "rest" ? i.push(this.scan((a) => ["<}>", "&", "\\end", "\\cr", "\\\\", "\\tabularnewline", "\\right"].includes(a))) : n.isOptional ? i.push(this.scanOptionalArgument(n.type)) : n.type.endsWith("*") ? t = n.type.slice(0, -1) : i.push(this.scanArgument(n.type)), r += 1;
    }
    return [t, i];
  }
  scanSymbolOrLiteral() {
    let e = this.peek();
    if (!e) return null;
    this.next();
    let t;
    if (Gi(e)) {
      let i = De.createAtom(this.parseMode, e, f({}, this.style));
      return i ? [i] : null;
    }
    if (t = this.scanMacro(e), t) return [t];
    if (e.startsWith("\\")) {
      let i = fe(e, this.parseMode);
      if (!i) return this.onError({ code: "unknown-command", arg: e }), [new bi(e)];
      if (i.definitionType === "symbol") {
        let r = f({}, this.style);
        i.variant && (r.variant = i.variant), t = new v({ type: i.type, command: e, style: r, value: String.fromCodePoint(i.codepoint), mode: this.parseMode, verbatimLatex: e });
      } else {
        if (i.applyMode || i.applyStyle || i.infix) return this.onError({ code: "invalid-command", arg: e }), [new bi(e)];
        i.createAtom && (t = i.createAtom({ command: e, args: [], style: this.style, mode: this.parseMode }));
      }
    }
    return t ? [t] : null;
  }
  scanArgument(e) {
    var t;
    this.skipFiller();
    let i = this.parseMode;
    if (e === "auto" && (e = i), !this.match("<{>")) {
      if (e === "string") return this.scanString();
      if (e === "value") return this.scanValue();
      if (e === "delim") return (t = this.scanDelim()) != null ? t : ".";
      if (e === "expression") return this.scanExpression();
      if (e === "math") {
        e !== i && this.beginContext({ mode: "math" });
        let n = this.scanSymbolOrLiteral();
        return e !== i && this.endContext(), n;
      }
      if (e === "text") {
        e !== i && this.beginContext({ mode: "text" });
        let n = this.scanSymbolOrLiteral();
        return e !== i && this.endContext(), n;
      }
      return e === "balanced-string" ? null : e === "rest" ? this.scan((n) => ["<}>", "&", "\\end", "\\cr", "\\\\", "\\tabularnewline", "\\right"].includes(n)) : null;
    }
    if (e === "text") {
      this.beginContext({ mode: "text" });
      do
        this.mathlist.push(...this.scan());
      while (!this.match("<}>") && !this.end());
      let n = this.mathlist;
      return this.endContext(), { group: n };
    }
    if (e === "math") {
      this.beginContext({ mode: "math" });
      do
        this.mathlist.push(...this.scan());
      while (!this.match("<}>") && !this.end());
      let n = this.mathlist;
      return this.endContext(), { group: n };
    }
    let r = null;
    if (e === "expression") {
      this.beginContext({ mode: "math" });
      do
        this.mathlist.push(...this.scan());
      while (!this.match("<}>") && !this.end());
      let n = this.mathlist;
      return this.endContext(), { group: n };
    }
    return e === "string" ? r = this.scanString() : e === "balanced-string" ? r = this.scanBalancedString() : e === "colspec" ? r = this.scanColspec() : e === "value" && (r = this.scanValue()), this.skipUntilToken("<}>"), r;
  }
  scanOptionalArgument(e) {
    if (e = e === "auto" ? this.parseMode : e, this.skipFiller(), !this.match("[")) return null;
    let t = null;
    for (; !this.end() && !this.match("]"); ) if (e === "string") t = this.scanString();
    else if (e === "value") t = this.scanValue();
    else if (e === "colspec") t = this.scanColspec();
    else if (e === "bbox") {
      let i = {}, r = this.scanString().toLowerCase().trim().split(/,(?![^(]*\)(?:(?:[^(]*\)){2})*[^"]*$)/);
      for (let n of r) {
        let a = n.match(/^\s*([\d.]+)\s*([a-z]{2})/);
        if (a) i.padding = { dimension: parseInt(a[1]), unit: a[2] };
        else {
          let o = n.match(/^\s*border\s*:\s*(.*)/);
          o ? i.border = o[1] : i.backgroundcolor = { string: n };
        }
      }
      t = i;
    } else e === "math" && (this.beginContext({ mode: "math" }), t = this.mathlist.concat(this.scan((i) => i === "]")), this.endContext());
    return t;
  }
  scanSymbolOrCommand(e) {
    var t, i, r;
    if (e === "\\placeholder") {
      let s = this.scanOptionalArgument("string"), l = this.scanOptionalArgument("math"), u = v.serialize(l, { defaultMode: "math" }), c = [], d;
      !d && u === "correct" ? d = "correct" : !d && u === "incorrect" ? d = "incorrect" : u !== "" && (c = l);
      let h = this.scanOptionalArgument("string") === "locked", p = this.scanArgument("auto"), m;
      return p && Array.isArray(p) && p.length > 0 ? m = p : p && typeof p == "object" && "group" in p ? m = p.group : m = c, s ? [new Zp(s, d, h, m ?? c, { mode: this.parseMode, style: this.style })] : [new Ye({ mode: this.parseMode, style: this.style })];
    }
    if (e === "\\renewcommand" || e === "\\newcommand" || e === "\\providecommand" || e === "\\def") {
      let s = this.index, l = this.scanLiteralGroup() || this.next();
      if (!l) return null;
      if (this.context.registers[l.substring(1)]) {
        let u = this.scanArgument("string");
        u !== null && (this.context.registers[l.substring(1)] = u);
        let c = R([e, li(this.tokens.slice(s, this.index))]);
        return [new v({ type: "text", value: "", verbatimLatex: c })];
      }
    }
    let n = this.scanMacro(e);
    if (n) return [n];
    let a = fe(e, this.parseMode);
    if (!a) return this.parseMode === "text" ? (/[a-zA-Z]/.test((t = this.peek()) != null ? t : "") && (e += " "), [...e].map((s) => new v({ type: "text", value: s, mode: "text", style: this.style }))) : (this.onError({ code: "unknown-command", arg: e }), [new bi(e)]);
    let o = this.index;
    if (a.definitionType === "symbol") {
      let s = f({}, this.style);
      a.variant && (s.variant = a.variant), n = new v({ type: a.type, command: e, style: s, value: String.fromCodePoint(a.codepoint), mode: this.parseMode });
    } else {
      if (a.ifMode && !a.ifMode.includes(this.parseMode)) return [];
      let s = this.parseMode;
      a.applyMode && (this.parseMode = a.applyMode);
      let l, u = [];
      if (a.parse ? u = a.parse(this) : [l, u] = this.scanArguments(a), this.parseMode = s, a.applyMode && !a.applyStyle && !a.createAtom) return D(u[0]);
      if (a.infix) return this.onError({ code: "too-many-infix-commands", arg: e }), null;
      if (typeof a.createAtom == "function") n = a.createAtom({ command: e, args: u, style: this.style, mode: this.parseMode }), l && (n.body = D(this.scanArgument(l)));
      else if (typeof a.applyStyle == "function") {
        let c = f(f({}, this.style), a.applyStyle(e, u, this.context)), d = this.parseMode;
        if (a.applyMode && (this.parseMode = a.applyMode), l) {
          let h = this.style;
          this.style = c;
          let p = this.scanArgument(l);
          return this.style = h, this.parseMode = d, D(p);
        }
        this.style = c;
      } else n = new v({ type: "mord", command: (i = a.command) != null ? i : e, style: f({}, this.style), value: e, mode: (r = a.applyMode) != null ? r : this.parseMode });
    }
    if (!n) return null;
    if (n instanceof v && n.verbatimLatex === void 0 && !/^\\(llap|rlap|class|cssId|htmlData)$/.test(e)) {
      let s = R([e, li(this.tokens.slice(o, this.index))]);
      s && (n.verbatimLatex = s);
    }
    if (n.verbatimLatex === null && (n.verbatimLatex = void 0), n.isFunction && this.smartFence) {
      let s = this.scanSmartFence();
      if (s) return [n, s];
    }
    return [n];
  }
  scanSymbolCommandOrLiteral() {
    this.expandUnicode();
    let e = this.get();
    if (!e) return null;
    if (Gi(e)) {
      let t = De.createAtom(this.parseMode, e, f({}, this.style));
      if (!t) return null;
      if (t.isFunction && this.smartFence) {
        let i = this.scanSmartFence();
        if (i) return [t, i];
      }
      return [t];
    }
    return e.startsWith("\\") ? this.scanSymbolOrCommand(e) : e === "<space>" ? this.parseMode === "text" ? [new Ln(" ", " ", this.style)] : null : (e === "<}>" ? this.onError({ latex: "", code: "unbalanced-braces" }) : this.onError({ latex: "", code: "unexpected-token", arg: e }), null);
  }
  scanMacro(e) {
    var t;
    let i = this.context.getMacro(e);
    if (!i) return null;
    let r = this.index, n = i.args, a = { "?": (t = this.args) == null ? void 0 : t.call(this, "?") };
    for (let o = 1; o <= n; o++) {
      let s = this.scanLiteralGroup();
      if (!s) {
        let l = this.index;
        this.scanExpression(), s = li(this.tokens.slice(l, this.index));
      }
      a[o] = s;
    }
    return new Jp(e, { expand: i.expand, captureSelection: i.captureSelection, args: r === this.index ? null : li(this.tokens.slice(r, this.index)), style: this.parsingContext.style, body: Te(i.def, { context: this.context, parseMode: this.parseMode, args: (o) => a[o], mathstyle: this.parsingContext.mathstyle, style: this.parsingContext.style }) });
  }
  parseExpression() {
    var e, t, i, r;
    let n = (r = (i = (t = (e = this.scanEnvironment()) != null ? e : this.scanModeShift()) != null ? t : this.scanModeSet()) != null ? i : this.scanGroup()) != null ? r : this.scanLeftRight();
    if (n === null) {
      if (this.parseSupSub() || this.parseLimits()) return !0;
      n = this.scanSymbolCommandOrLiteral();
    }
    return n ? (Array.isArray(n) ? this.mathlist.push(...n) : this.mathlist.push(n), !0) : !1;
  }
};
function Te(e, t) {
  var i, r, n, a;
  let o = (i = t == null ? void 0 : t.args) != null ? i : void 0, s = new em(yn(e, o), t == null ? void 0 : t.context, { args: o, mathstyle: (r = t == null ? void 0 : t.mathstyle) != null ? r : "displaystyle", parseMode: (n = t == null ? void 0 : t.parseMode) != null ? n : "math", style: (a = t == null ? void 0 : t.style) != null ? a : {} }), l = [];
  for (; !s.end(); ) l.push(...s.scan(() => !1));
  return l;
}
function S4(e, t) {
  var i;
  let r = new em(yn(e, null), t == null ? void 0 : t.context, { mathstyle: "displaystyle", parseMode: (i = t == null ? void 0 : t.parseMode) != null ? i : "math" });
  for (; !r.end(); ) r.scan();
  return r.errors;
}
var tm = class im extends v {
  constructor(t, i) {
    super({ type: "chem" }, { command: t, mode: "math" });
    let r = Y.go(M.go(i, t === "\\pu" ? "pu" : "ce"), !1);
    this.body = Te(r), this._verbatimLatex = t + "{" + i + "}", this.arg = i, this.captureSelection = !0;
  }
  static fromJson(t) {
    return new im(t.command, t.arg);
  }
  set verbatimLatex(t) {
  }
  get verbatimLatex() {
    return this._verbatimLatex;
  }
  toJson() {
    return b(f({}, super.toJson()), { arg: this.arg });
  }
  render(t) {
    let i = v.createBox(t, this.body, { type: "inner" });
    return this.caret && (i.caret = this.caret), this.bind(t, i);
  }
  _serialize(t) {
    return this.verbatimLatex, this.verbatimLatex;
  }
};
x(["ce", "pu"], "{chemformula:balanced-string}", { createAtom: (e) => {
  var t;
  return new tm(e.command, (t = e.args[0]) != null ? t : "");
} });
var M = { go: function(e, t) {
  if (!e) return [];
  t === void 0 && (t = "ce");
  var i = "0", r = {};
  r.parenthesisLevel = 0, e = e.replace(/\n/g, " "), e = e.replace(/[\u2212\u2013\u2014\u2010]/g, "-"), e = e.replace(/[\u2026]/g, "...");
  for (var n, a = 10, o = []; ; ) {
    n !== e ? (a = 10, n = e) : a--;
    var s = M.stateMachines[t], l = s.transitions[i] || s.transitions["*"];
    e: for (var u = 0; u < l.length; u++) {
      var c = M.patterns.match_(l[u].pattern, e);
      if (c) {
        for (var d = l[u].task, h = 0; h < d.action_.length; h++) {
          var p;
          if (s.actions[d.action_[h].type_]) p = s.actions[d.action_[h].type_](r, c.match_, d.action_[h].option);
          else if (M.actions[d.action_[h].type_]) p = M.actions[d.action_[h].type_](r, c.match_, d.action_[h].option);
          else throw ["MhchemBugA", "mhchem bug A. Please report. (" + d.action_[h].type_ + ")"];
          M.concatArray(o, p);
        }
        if (i = d.nextState || i, e.length > 0) {
          if (d.revisit || (e = c.remainder), !d.toContinue) break e;
        } else return o;
      }
    }
    if (a <= 0) throw ["MhchemBugU", "mhchem bug U. Please report."];
  }
}, concatArray: function(e, t) {
  if (t) if (Object.prototype.toString.call(t) === "[object Array]") for (var i = 0; i < t.length; i++) e.push(t[i]);
  else e.push(t);
}, patterns: { patterns: { empty: /^$/, else: /^./, else2: /^./, space: /^\s/, "space A": /^\s(?=[A-Z\\$])/, space$: /^\s$/, "a-z": /^[a-z]/, x: /^x/, x$: /^x$/, i$: /^i$/, letters: /^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/, "\\greek": /^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/, "one lowercase latin letter $": /^(?:([a-z])(?:$|[^a-zA-Z]))$/, "$one lowercase latin letter$ $": /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/, "one lowercase greek letter $": /^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/, digits: /^[0-9]+/, "-9.,9": /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/, "-9.,9 no missing 0": /^[+\-]?[0-9]+(?:[.,][0-9]+)?/, "(-)(9.,9)(e)(99)": function(e) {
  var t = e.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:(?:([eE])|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);
  return t && t[0] ? { match_: t.slice(1), remainder: e.substr(t[0].length) } : null;
}, "(-)(9)^(-9)": function(e) {
  var t = e.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/);
  return t && t[0] ? { match_: t.slice(1), remainder: e.substr(t[0].length) } : null;
}, "state of aggregation $": function(e) {
  var t = M.patterns.findObserveGroups(e, "", /^\([a-z]{1,3}(?=[\),])/, ")", "");
  if (t && t.remainder.match(/^($|[\s,;\)\]\}])/)) return t;
  var i = e.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);
  return i ? { match_: i[0], remainder: e.substr(i[0].length) } : null;
}, "_{(state of aggregation)}$": /^_\{(\([a-z]{1,3}\))\}/, "{[(": /^(?:\\\{|\[|\()/, ")]}": /^(?:\)|\]|\\\})/, ", ": /^[,;]\s*/, ",": /^[,;]/, ".": /^[.]/, ". ": /^([.\u22C5\u00B7\u2022])\s*/, "...": /^\.\.\.(?=$|[^.])/, "* ": /^([*])\s*/, "^{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "^{", "", "", "}");
}, "^($...$)": function(e) {
  return M.patterns.findObserveGroups(e, "^", "$", "$", "");
}, "^a": /^\^([0-9]+|[^\\_])/, "^\\x{}{}": function(e) {
  return M.patterns.findObserveGroups(e, "^", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0);
}, "^\\x{}": function(e) {
  return M.patterns.findObserveGroups(e, "^", /^\\[a-zA-Z]+\{/, "}", "");
}, "^\\x": /^\^(\\[a-zA-Z]+)\s*/, "^(-1)": /^\^(-?\d+)/, "'": /^'/, "_{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "_{", "", "", "}");
}, "_($...$)": function(e) {
  return M.patterns.findObserveGroups(e, "_", "$", "$", "");
}, _9: /^_([+\-]?[0-9]+|[^\\])/, "_\\x{}{}": function(e) {
  return M.patterns.findObserveGroups(e, "_", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0);
}, "_\\x{}": function(e) {
  return M.patterns.findObserveGroups(e, "_", /^\\[a-zA-Z]+\{/, "}", "");
}, "_\\x": /^_(\\[a-zA-Z]+)\s*/, "^_": /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/, "{}": /^\{\}/, "{...}": function(e) {
  return M.patterns.findObserveGroups(e, "", "{", "}", "");
}, "{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "{", "", "", "}");
}, "$...$": function(e) {
  return M.patterns.findObserveGroups(e, "", "$", "$", "");
}, "${(...)}$": function(e) {
  return M.patterns.findObserveGroups(e, "${", "", "", "}$");
}, "$(...)$": function(e) {
  return M.patterns.findObserveGroups(e, "$", "", "", "$");
}, "=<>": /^[=<>]/, "#": /^[#\u2261]/, "+": /^\+/, "-$": /^-(?=[\s_},;\]/]|$|\([a-z]+\))/, "-9": /^-(?=[0-9])/, "- orbital overlap": /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/, "-": /^-/, "pm-operator": /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/, operator: /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/, arrowUpDown: /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/, "\\bond{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "\\bond{", "", "", "}");
}, "->": /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/, CMT: /^[CMT](?=\[)/, "[(...)]": function(e) {
  return M.patterns.findObserveGroups(e, "[", "", "", "]");
}, "1st-level escape": /^(&|\\\\|\\hline)\s*/, "\\,": /^(?:\\[,\ ;:])/, "\\x{}{}": function(e) {
  return M.patterns.findObserveGroups(e, "", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", !0);
}, "\\x{}": function(e) {
  return M.patterns.findObserveGroups(e, "", /^\\[a-zA-Z]+\{/, "}", "");
}, "\\ca": /^\\ca(?:\s+|(?![a-zA-Z]))/, "\\x": /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/, orbital: /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/, others: /^[\/~|]/, "\\frac{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "\\frac{", "", "", "}", "{", "", "", "}");
}, "\\overset{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "\\overset{", "", "", "}", "{", "", "", "}");
}, "\\underset{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "\\underset{", "", "", "}", "{", "", "", "}");
}, "\\underbrace{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "\\underbrace{", "", "", "}_", "{", "", "", "}");
}, "\\color{(...)}0": function(e) {
  return M.patterns.findObserveGroups(e, "\\color{", "", "", "}");
}, "\\color{(...)}{(...)}1": function(e) {
  return M.patterns.findObserveGroups(e, "\\color{", "", "", "}", "{", "", "", "}");
}, "\\color(...){(...)}2": function(e) {
  return M.patterns.findObserveGroups(e, "\\color", "\\", "", /^(?=\{)/, "{", "", "", "}");
}, "\\ce{(...)}": function(e) {
  return M.patterns.findObserveGroups(e, "\\ce{", "", "", "}");
}, oxidation$: /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/, "d-oxidation$": /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/, "roman numeral": /^[IVX]+/, "1/2$": /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/, amount: function(e) {
  var t;
  if (t = e.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/), t) return { match_: t[0], remainder: e.substr(t[0].length) };
  var i = M.patterns.findObserveGroups(e, "", "$", "$", "");
  return i && (t = i.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/), t) ? { match_: t[0], remainder: e.substr(t[0].length) } : null;
}, amount2: function(e) {
  return this.amount(e);
}, "(KV letters),": /^(?:[A-Z][a-z]{0,2}|i)(?=,)/, formula$: function(e) {
  if (e.match(/^\([a-z]+\)$/)) return null;
  var t = e.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);
  return t ? { match_: t[0], remainder: e.substr(t[0].length) } : null;
}, uprightEntities: /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/, "/": /^\s*(\/)\s*/, "//": /^\s*(\/\/)\s*/, "*": /^\s*[*.]\s*/ }, findObserveGroups: function(e, t, i, r, n, a, o, s, l, u) {
  var c = function(g, k) {
    if (typeof k == "string") return g.indexOf(k) !== 0 ? null : k;
    var A = g.match(k);
    return A ? A[0] : null;
  }, d = function(g, k, A) {
    for (var _ = 0; k < g.length; ) {
      var T = g.charAt(k), K = c(g.substr(k), A);
      if (K !== null && _ === 0) return { endMatchBegin: k, endMatchEnd: k + K.length };
      if (T === "{") _++;
      else if (T === "}") {
        if (_ === 0) throw ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"];
        _--;
      }
      k++;
    }
    return null;
  }, h = c(e, t);
  if (h === null || (e = e.substr(h.length), h = c(e, i), h === null)) return null;
  var p = d(e, h.length, r || n);
  if (p === null) return null;
  var m = e.substring(0, r ? p.endMatchEnd : p.endMatchBegin);
  if (a || o) {
    var y = this.findObserveGroups(e.substr(p.endMatchEnd), a, o, s, l);
    if (y === null) return null;
    var w = [m, y.match_];
    return { match_: u ? w.join("") : w, remainder: y.remainder };
  } else return { match_: m, remainder: e.substr(p.endMatchEnd) };
}, match_: function(e, t) {
  var i = M.patterns.patterns[e];
  if (i === void 0) throw ["MhchemBugP", "mhchem bug P. Please report. (" + e + ")"];
  if (typeof i == "function") return M.patterns.patterns[e](t);
  var r = t.match(i);
  if (r) {
    var n;
    return r[2] ? n = [r[1], r[2]] : r[1] ? n = r[1] : n = r[0], { match_: n, remainder: t.substr(r[0].length) };
  }
  return null;
} }, actions: { "a=": function(e, t) {
  e.a = (e.a || "") + t;
}, "b=": function(e, t) {
  e.b = (e.b || "") + t;
}, "p=": function(e, t) {
  e.p = (e.p || "") + t;
}, "o=": function(e, t) {
  e.o = (e.o || "") + t;
}, "q=": function(e, t) {
  e.q = (e.q || "") + t;
}, "d=": function(e, t) {
  e.d = (e.d || "") + t;
}, "rm=": function(e, t) {
  e.rm = (e.rm || "") + t;
}, "text=": function(e, t) {
  e.text_ = (e.text_ || "") + t;
}, insert: function(e, t, i) {
  return { type_: i };
}, "insert+p1": function(e, t, i) {
  return { type_: i, p1: t };
}, "insert+p1+p2": function(e, t, i) {
  return { type_: i, p1: t[0], p2: t[1] };
}, copy: function(e, t) {
  return t;
}, rm: function(e, t) {
  return { type_: "rm", p1: t || "" };
}, text: function(e, t) {
  return M.go(t, "text");
}, "{text}": function(e, t) {
  var i = ["{"];
  return M.concatArray(i, M.go(t, "text")), i.push("}"), i;
}, "tex-math": function(e, t) {
  return M.go(t, "tex-math");
}, "tex-math tight": function(e, t) {
  return M.go(t, "tex-math tight");
}, bond: function(e, t, i) {
  return { type_: "bond", kind_: i || t };
}, "color0-output": function(e, t) {
  return { type_: "color0", color: t[0] };
}, ce: function(e, t) {
  return M.go(t);
}, "1/2": function(e, t) {
  var i = [];
  t.match(/^[+\-]/) && (i.push(t.substr(0, 1)), t = t.substr(1));
  var r = t.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);
  return r[1] = r[1].replace(/\$/g, ""), i.push({ type_: "frac", p1: r[1], p2: r[2] }), r[3] && (r[3] = r[3].replace(/\$/g, ""), i.push({ type_: "tex-math", p1: r[3] })), i;
}, "9,9": function(e, t) {
  return M.go(t, "9,9");
} }, createTransitions: function(e) {
  var t, i, r, n, a = {};
  for (t in e) for (i in e[t]) for (r = i.split("|"), e[t][i].stateArray = r, n = 0; n < r.length; n++) a[r[n]] = [];
  for (t in e) for (i in e[t]) for (r = e[t][i].stateArray || [], n = 0; n < r.length; n++) {
    var o = e[t][i];
    if (o.action_) {
      o.action_ = [].concat(o.action_);
      for (var s = 0; s < o.action_.length; s++) typeof o.action_[s] == "string" && (o.action_[s] = { type_: o.action_[s] });
    } else o.action_ = [];
    for (var l = t.split("|"), u = 0; u < l.length; u++) if (r[n] === "*") for (var c in a) a[c].push({ pattern: l[u], task: o });
    else a[r[n]].push({ pattern: l[u], task: o });
  }
  return a;
}, stateMachines: {} };
M.stateMachines = { ce: { transitions: M.createTransitions({ empty: { "*": { action_: "output" } }, else: { "0|1|2": { action_: "beginsWithBond=false", revisit: !0, toContinue: !0 } }, oxidation$: { 0: { action_: "oxidation-output" } }, CMT: { r: { action_: "rdt=", nextState: "rt" }, rd: { action_: "rqt=", nextState: "rdt" } }, arrowUpDown: { "0|1|2|as": { action_: ["sb=false", "output", "operator"], nextState: "1" } }, uprightEntities: { "0|1|2": { action_: ["o=", "output"], nextState: "1" } }, orbital: { "0|1|2|3": { action_: "o=", nextState: "o" } }, "->": { "0|1|2|3": { action_: "r=", nextState: "r" }, "a|as": { action_: ["output", "r="], nextState: "r" }, "*": { action_: ["output", "r="], nextState: "r" } }, "+": { o: { action_: "d= kv", nextState: "d" }, "d|D": { action_: "d=", nextState: "d" }, q: { action_: "d=", nextState: "qd" }, "qd|qD": { action_: "d=", nextState: "qd" }, dq: { action_: ["output", "d="], nextState: "d" }, 3: { action_: ["sb=false", "output", "operator"], nextState: "0" } }, amount: { "0|2": { action_: "a=", nextState: "a" } }, "pm-operator": { "0|1|2|a|as": { action_: ["sb=false", "output", { type_: "operator", option: "\\pm" }], nextState: "0" } }, operator: { "0|1|2|a|as": { action_: ["sb=false", "output", "operator"], nextState: "0" } }, "-$": { "o|q": { action_: ["charge or bond", "output"], nextState: "qd" }, d: { action_: "d=", nextState: "d" }, D: { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" }, q: { action_: "d=", nextState: "qd" }, qd: { action_: "d=", nextState: "qd" }, "qD|dq": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" } }, "-9": { "3|o": { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "3" } }, "- orbital overlap": { o: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" }, d: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" } }, "-": { "0|1|2": { action_: [{ type_: "output", option: 1 }, "beginsWithBond=true", { type_: "bond", option: "-" }], nextState: "3" }, 3: { action_: { type_: "bond", option: "-" } }, a: { action_: ["output", { type_: "insert", option: "hyphen" }], nextState: "2" }, as: { action_: [{ type_: "output", option: 2 }, { type_: "bond", option: "-" }], nextState: "3" }, b: { action_: "b=" }, o: { action_: { type_: "- after o/d", option: !1 }, nextState: "2" }, q: { action_: { type_: "- after o/d", option: !1 }, nextState: "2" }, "d|qd|dq": { action_: { type_: "- after o/d", option: !0 }, nextState: "2" }, "D|qD|p": { action_: ["output", { type_: "bond", option: "-" }], nextState: "3" } }, amount2: { "1|3": { action_: "a=", nextState: "a" } }, letters: { "0|1|2|3|a|as|b|p|bp|o": { action_: "o=", nextState: "o" }, "q|dq": { action_: ["output", "o="], nextState: "o" }, "d|D|qd|qD": { action_: "o after d", nextState: "o" } }, digits: { o: { action_: "q=", nextState: "q" }, "d|D": { action_: "q=", nextState: "dq" }, q: { action_: ["output", "o="], nextState: "o" }, a: { action_: "o=", nextState: "o" } }, "space A": { "b|p|bp": {} }, space: { a: { nextState: "as" }, 0: { action_: "sb=false" }, "1|2": { action_: "sb=true" }, "r|rt|rd|rdt|rdq": { action_: "output", nextState: "0" }, "*": { action_: ["output", "sb=true"], nextState: "1" } }, "1st-level escape": { "1|2": { action_: ["output", { type_: "insert+p1", option: "1st-level escape" }] }, "*": { action_: ["output", { type_: "insert+p1", option: "1st-level escape" }], nextState: "0" } }, "[(...)]": { "r|rt": { action_: "rd=", nextState: "rd" }, "rd|rdt": { action_: "rq=", nextState: "rdq" } }, "...": { "o|d|D|dq|qd|qD": { action_: ["output", { type_: "bond", option: "..." }], nextState: "3" }, "*": { action_: [{ type_: "output", option: 1 }, { type_: "insert", option: "ellipsis" }], nextState: "1" } }, ". |* ": { "*": { action_: ["output", { type_: "insert", option: "addition compound" }], nextState: "1" } }, "state of aggregation $": { "*": { action_: ["output", "state of aggregation"], nextState: "1" } }, "{[(": { "a|as|o": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" }, "0|1|2|3": { action_: ["o=", "output", "parenthesisLevel++"], nextState: "2" }, "*": { action_: ["output", "o=", "output", "parenthesisLevel++"], nextState: "2" } }, ")]}": { "0|1|2|3|b|p|bp|o": { action_: ["o=", "parenthesisLevel--"], nextState: "o" }, "a|as|d|D|q|qd|qD|dq": { action_: ["output", "o=", "parenthesisLevel--"], nextState: "o" } }, ", ": { "*": { action_: ["output", "comma"], nextState: "0" } }, "^_": { "*": {} }, "^{(...)}|^($...$)": { "0|1|2|as": { action_: "b=", nextState: "b" }, p: { action_: "b=", nextState: "bp" }, "3|o": { action_: "d= kv", nextState: "D" }, q: { action_: "d=", nextState: "qD" }, "d|D|qd|qD|dq": { action_: ["output", "d="], nextState: "D" } }, "^a|^\\x{}{}|^\\x{}|^\\x|'": { "0|1|2|as": { action_: "b=", nextState: "b" }, p: { action_: "b=", nextState: "bp" }, "3|o": { action_: "d= kv", nextState: "d" }, q: { action_: "d=", nextState: "qd" }, "d|qd|D|qD": { action_: "d=" }, dq: { action_: ["output", "d="], nextState: "d" } }, "_{(state of aggregation)}$": { "d|D|q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" } }, "_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x": { "0|1|2|as": { action_: "p=", nextState: "p" }, b: { action_: "p=", nextState: "bp" }, "3|o": { action_: "q=", nextState: "q" }, "d|D": { action_: "q=", nextState: "dq" }, "q|qd|qD|dq": { action_: ["output", "q="], nextState: "q" } }, "=<>": { "0|1|2|3|a|as|o|q|d|D|qd|qD|dq": { action_: [{ type_: "output", option: 2 }, "bond"], nextState: "3" } }, "#": { "0|1|2|3|a|as|o": { action_: [{ type_: "output", option: 2 }, { type_: "bond", option: "#" }], nextState: "3" } }, "{}": { "*": { action_: { type_: "output", option: 1 }, nextState: "1" } }, "{...}": { "0|1|2|3|a|as|b|p|bp": { action_: "o=", nextState: "o" }, "o|d|D|q|qd|qD|dq": { action_: ["output", "o="], nextState: "o" } }, "$...$": { a: { action_: "a=" }, "0|1|2|3|as|b|p|bp|o": { action_: "o=", nextState: "o" }, "as|o": { action_: "o=" }, "q|d|D|qd|qD|dq": { action_: ["output", "o="], nextState: "o" } }, "\\bond{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "bond"], nextState: "3" } }, "\\frac{(...)}": { "*": { action_: [{ type_: "output", option: 1 }, "frac-output"], nextState: "3" } }, "\\overset{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "overset-output"], nextState: "3" } }, "\\underset{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "underset-output"], nextState: "3" } }, "\\underbrace{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "underbrace-output"], nextState: "3" } }, "\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: [{ type_: "output", option: 2 }, "color-output"], nextState: "3" } }, "\\color{(...)}0": { "*": { action_: [{ type_: "output", option: 2 }, "color0-output"] } }, "\\ce{(...)}": { "*": { action_: [{ type_: "output", option: 2 }, "ce"], nextState: "3" } }, "\\,": { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "1" } }, "\\x{}{}|\\x{}|\\x": { "0|1|2|3|a|as|b|p|bp|o|c0": { action_: ["o=", "output"], nextState: "3" }, "*": { action_: ["output", "o=", "output"], nextState: "3" } }, others: { "*": { action_: [{ type_: "output", option: 1 }, "copy"], nextState: "3" } }, else2: { a: { action_: "a to o", nextState: "o", revisit: !0 }, as: { action_: ["output", "sb=true"], nextState: "1", revisit: !0 }, "r|rt|rd|rdt|rdq": { action_: ["output"], nextState: "0", revisit: !0 }, "*": { action_: ["output", "copy"], nextState: "3" } } }), actions: { "o after d": function(e, t) {
  var i;
  if ((e.d || "").match(/^[0-9]+$/)) {
    var r = e.d;
    e.d = void 0, i = this.output(e), e.b = r;
  } else i = this.output(e);
  return M.actions["o="](e, t), i;
}, "d= kv": function(e, t) {
  e.d = t, e.dType = "kv";
}, "charge or bond": function(e, t) {
  if (e.beginsWithBond) {
    var i = [];
    return M.concatArray(i, this.output(e)), M.concatArray(i, M.actions.bond(e, t, "-")), i;
  } else e.d = t;
}, "- after o/d": function(e, t, i) {
  var r = M.patterns.match_("orbital", e.o || ""), n = M.patterns.match_("one lowercase greek letter $", e.o || ""), a = M.patterns.match_("one lowercase latin letter $", e.o || ""), o = M.patterns.match_("$one lowercase latin letter$ $", e.o || ""), s = t === "-" && (r && r.remainder === "" || n || a || o);
  s && !e.a && !e.b && !e.p && !e.d && !e.q && !r && a && (e.o = "$" + e.o + "$");
  var l = [];
  return s ? (M.concatArray(l, this.output(e)), l.push({ type_: "hyphen" })) : (r = M.patterns.match_("digits", e.d || ""), i && r && r.remainder === "" ? (M.concatArray(l, M.actions["d="](e, t)), M.concatArray(l, this.output(e))) : (M.concatArray(l, this.output(e)), M.concatArray(l, M.actions.bond(e, t, "-")))), l;
}, "a to o": function(e) {
  e.o = e.a, e.a = void 0;
}, "sb=true": function(e) {
  e.sb = !0;
}, "sb=false": function(e) {
  e.sb = !1;
}, "beginsWithBond=true": function(e) {
  e.beginsWithBond = !0;
}, "beginsWithBond=false": function(e) {
  e.beginsWithBond = !1;
}, "parenthesisLevel++": function(e) {
  e.parenthesisLevel++;
}, "parenthesisLevel--": function(e) {
  e.parenthesisLevel--;
}, "state of aggregation": function(e, t) {
  return { type_: "state of aggregation", p1: M.go(t, "o") };
}, comma: function(e, t) {
  var i = t.replace(/\s*$/, ""), r = i !== t;
  return r && e.parenthesisLevel === 0 ? { type_: "comma enumeration L", p1: i } : { type_: "comma enumeration M", p1: i };
}, output: function(e, t, i) {
  var r;
  if (!e.r) r = [], !e.a && !e.b && !e.p && !e.o && !e.q && !e.d && !i || (e.sb && r.push({ type_: "entitySkip" }), !e.o && !e.q && !e.d && !e.b && !e.p && i !== 2 ? (e.o = e.a, e.a = void 0) : !e.o && !e.q && !e.d && (e.b || e.p) ? (e.o = e.a, e.d = e.b, e.q = e.p, e.a = e.b = e.p = void 0) : e.o && e.dType === "kv" && M.patterns.match_("d-oxidation$", e.d || "") ? e.dType = "oxidation" : e.o && e.dType === "kv" && !e.q && (e.dType = void 0), r.push({ type_: "chemfive", a: M.go(e.a, "a"), b: M.go(e.b, "bd"), p: M.go(e.p, "pq"), o: M.go(e.o, "o"), q: M.go(e.q, "pq"), d: M.go(e.d, e.dType === "oxidation" ? "oxidation" : "bd"), dType: e.dType }));
  else {
    var n;
    e.rdt === "M" ? n = M.go(e.rd, "tex-math") : e.rdt === "T" ? n = [{ type_: "text", p1: e.rd || "" }] : n = M.go(e.rd);
    var a;
    e.rqt === "M" ? a = M.go(e.rq, "tex-math") : e.rqt === "T" ? a = [{ type_: "text", p1: e.rq || "" }] : a = M.go(e.rq), r = { type_: "arrow", r: e.r, rd: n, rq: a };
  }
  for (var o in e) o !== "parenthesisLevel" && o !== "beginsWithBond" && delete e[o];
  return r;
}, "oxidation-output": function(e, t) {
  var i = ["{"];
  return M.concatArray(i, M.go(t, "oxidation")), i.push("}"), i;
}, "frac-output": function(e, t) {
  return { type_: "frac-ce", p1: M.go(t[0]), p2: M.go(t[1]) };
}, "overset-output": function(e, t) {
  return { type_: "overset", p1: M.go(t[0]), p2: M.go(t[1]) };
}, "underset-output": function(e, t) {
  return { type_: "underset", p1: M.go(t[0]), p2: M.go(t[1]) };
}, "underbrace-output": function(e, t) {
  return { type_: "underbrace", p1: M.go(t[0]), p2: M.go(t[1]) };
}, "color-output": function(e, t) {
  return { type_: "color", color1: t[0], color2: M.go(t[1]) };
}, "r=": function(e, t) {
  e.r = t;
}, "rdt=": function(e, t) {
  e.rdt = t;
}, "rd=": function(e, t) {
  e.rd = t;
}, "rqt=": function(e, t) {
  e.rqt = t;
}, "rq=": function(e, t) {
  e.rq = t;
}, operator: function(e, t, i) {
  return { type_: "operator", kind_: i || t };
} } }, a: { transitions: M.createTransitions({ empty: { "*": {} }, "1/2$": { 0: { action_: "1/2" } }, else: { 0: { nextState: "1", revisit: !0 } }, "$(...)$": { "*": { action_: "tex-math tight", nextState: "1" } }, ",": { "*": { action_: { type_: "insert", option: "commaDecimal" } } }, else2: { "*": { action_: "copy" } } }), actions: {} }, o: { transitions: M.createTransitions({ empty: { "*": {} }, "1/2$": { 0: { action_: "1/2" } }, else: { 0: { nextState: "1", revisit: !0 } }, letters: { "*": { action_: "rm" } }, "\\ca": { "*": { action_: { type_: "insert", option: "circa" } } }, "\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "{(...)}": { "*": { action_: "{text}" } }, else2: { "*": { action_: "copy" } } }), actions: {} }, text: { transitions: M.createTransitions({ empty: { "*": { action_: "output" } }, "{...}": { "*": { action_: "text=" } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "\\greek": { "*": { action_: ["output", "rm"] } }, "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: ["output", "copy"] } }, else: { "*": { action_: "text=" } } }), actions: { output: function(e) {
  if (e.text_) {
    var t = { type_: "text", p1: e.text_ };
    for (var i in e) delete e[i];
    return t;
  }
} } }, pq: { transitions: M.createTransitions({ empty: { "*": {} }, "state of aggregation $": { "*": { action_: "state of aggregation" } }, i$: { 0: { nextState: "!f", revisit: !0 } }, "(KV letters),": { 0: { action_: "rm", nextState: "0" } }, formula$: { 0: { nextState: "f", revisit: !0 } }, "1/2$": { 0: { action_: "1/2" } }, else: { 0: { nextState: "!f", revisit: !0 } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "{(...)}": { "*": { action_: "text" } }, "a-z": { f: { action_: "tex-math" } }, letters: { "*": { action_: "rm" } }, "-9.,9": { "*": { action_: "9,9" } }, ",": { "*": { action_: { type_: "insert+p1", option: "comma enumeration S" } } }, "\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } }, "\\color{(...)}0": { "*": { action_: "color0-output" } }, "\\ce{(...)}": { "*": { action_: "ce" } }, "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } }, else2: { "*": { action_: "copy" } } }), actions: { "state of aggregation": function(e, t) {
  return { type_: "state of aggregation subscript", p1: M.go(t, "o") };
}, "color-output": function(e, t) {
  return { type_: "color", color1: t[0], color2: M.go(t[1], "pq") };
} } }, bd: { transitions: M.createTransitions({ empty: { "*": {} }, x$: { 0: { nextState: "!f", revisit: !0 } }, formula$: { 0: { nextState: "f", revisit: !0 } }, else: { 0: { nextState: "!f", revisit: !0 } }, "-9.,9 no missing 0": { "*": { action_: "9,9" } }, ".": { "*": { action_: { type_: "insert", option: "electron dot" } } }, "a-z": { f: { action_: "tex-math" } }, x: { "*": { action_: { type_: "insert", option: "KV x" } } }, letters: { "*": { action_: "rm" } }, "'": { "*": { action_: { type_: "insert", option: "prime" } } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, "{(...)}": { "*": { action_: "text" } }, "\\color{(...)}{(...)}1|\\color(...){(...)}2": { "*": { action_: "color-output" } }, "\\color{(...)}0": { "*": { action_: "color0-output" } }, "\\ce{(...)}": { "*": { action_: "ce" } }, "\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "copy" } }, else2: { "*": { action_: "copy" } } }), actions: { "color-output": function(e, t) {
  return { type_: "color", color1: t[0], color2: M.go(t[1], "bd") };
} } }, oxidation: { transitions: M.createTransitions({ empty: { "*": {} }, "roman numeral": { "*": { action_: "roman-numeral" } }, "${(...)}$|$(...)$": { "*": { action_: "tex-math" } }, else: { "*": { action_: "copy" } } }), actions: { "roman-numeral": function(e, t) {
  return { type_: "roman numeral", p1: t || "" };
} } }, "tex-math": { transitions: M.createTransitions({ empty: { "*": { action_: "output" } }, "\\ce{(...)}": { "*": { action_: ["output", "ce"] } }, "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } }, else: { "*": { action_: "o=" } } }), actions: { output: function(e) {
  if (e.o) {
    var t = { type_: "tex-math", p1: e.o };
    for (var i in e) delete e[i];
    return t;
  }
} } }, "tex-math tight": { transitions: M.createTransitions({ empty: { "*": { action_: "output" } }, "\\ce{(...)}": { "*": { action_: ["output", "ce"] } }, "{...}|\\,|\\x{}{}|\\x{}|\\x": { "*": { action_: "o=" } }, "-|+": { "*": { action_: "tight operator" } }, else: { "*": { action_: "o=" } } }), actions: { "tight operator": function(e, t) {
  e.o = (e.o || "") + "{" + t + "}";
}, output: function(e) {
  if (e.o) {
    var t = { type_: "tex-math", p1: e.o };
    for (var i in e) delete e[i];
    return t;
  }
} } }, "9,9": { transitions: M.createTransitions({ empty: { "*": {} }, ",": { "*": { action_: "comma" } }, else: { "*": { action_: "copy" } } }), actions: { comma: function() {
  return { type_: "commaDecimal" };
} } }, pu: { transitions: M.createTransitions({ empty: { "*": { action_: "output" } }, space$: { "*": { action_: ["output", "space"] } }, "{[(|)]}": { "0|a": { action_: "copy" } }, "(-)(9)^(-9)": { 0: { action_: "number^", nextState: "a" } }, "(-)(9.,9)(e)(99)": { 0: { action_: "enumber", nextState: "a" } }, space: { "0|a": {} }, "pm-operator": { "0|a": { action_: { type_: "operator", option: "\\pm" }, nextState: "0" } }, operator: { "0|a": { action_: "copy", nextState: "0" } }, "//": { d: { action_: "o=", nextState: "/" } }, "/": { d: { action_: "o=", nextState: "/" } }, "{...}|else": { "0|d": { action_: "d=", nextState: "d" }, a: { action_: ["space", "d="], nextState: "d" }, "/|q": { action_: "q=", nextState: "q" } } }), actions: { enumber: function(e, t) {
  var i = [];
  return t[0] === "+-" || t[0] === "+/-" ? i.push("\\pm ") : t[0] && i.push(t[0]), t[1] && (M.concatArray(i, M.go(t[1], "pu-9,9")), t[2] && (t[2].match(/[,.]/) ? M.concatArray(i, M.go(t[2], "pu-9,9")) : i.push(t[2])), (t[3] || t[4]) && (t[3] === "e" || t[4] === "*" ? i.push({ type_: "cdot" }) : i.push({ type_: "times" }))), t[5] && i.push("10^{" + t[5] + "}"), i;
}, "number^": function(e, t) {
  var i = [];
  return t[0] === "+-" || t[0] === "+/-" ? i.push("\\pm ") : t[0] && i.push(t[0]), M.concatArray(i, M.go(t[1], "pu-9,9")), i.push("^{" + t[2] + "}"), i;
}, operator: function(e, t, i) {
  return { type_: "operator", kind_: i || t };
}, space: function() {
  return { type_: "pu-space-1" };
}, output: function(e) {
  var t, i = M.patterns.match_("{(...)}", e.d || "");
  i && i.remainder === "" && (e.d = i.match_);
  var r = M.patterns.match_("{(...)}", e.q || "");
  if (r && r.remainder === "" && (e.q = r.match_), e.d && (e.d = e.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C"), e.d = e.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F")), e.q) {
    e.q = e.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C"), e.q = e.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
    var n = { d: M.go(e.d, "pu"), q: M.go(e.q, "pu") };
    e.o === "//" ? t = { type_: "pu-frac", p1: n.d, p2: n.q } : (t = n.d, n.d.length > 1 || n.q.length > 1 ? t.push({ type_: " / " }) : t.push({ type_: "/" }), M.concatArray(t, n.q));
  } else t = M.go(e.d, "pu-2");
  for (var a in e) delete e[a];
  return t;
} } }, "pu-2": { transitions: M.createTransitions({ empty: { "*": { action_: "output" } }, "*": { "*": { action_: ["output", "cdot"], nextState: "0" } }, "\\x": { "*": { action_: "rm=" } }, space: { "*": { action_: ["output", "space"], nextState: "0" } }, "^{(...)}|^(-1)": { 1: { action_: "^(-1)" } }, "-9.,9": { 0: { action_: "rm=", nextState: "0" }, 1: { action_: "^(-1)", nextState: "0" } }, "{...}|else": { "*": { action_: "rm=", nextState: "1" } } }), actions: { cdot: function() {
  return { type_: "tight cdot" };
}, "^(-1)": function(e, t) {
  e.rm += "^{" + t + "}";
}, space: function() {
  return { type_: "pu-space-2" };
}, output: function(e) {
  var t = [];
  if (e.rm) {
    var i = M.patterns.match_("{(...)}", e.rm || "");
    i && i.remainder === "" ? t = M.go(i.match_, "pu") : t = { type_: "rm", p1: e.rm };
  }
  for (var r in e) delete e[r];
  return t;
} } }, "pu-9,9": { transitions: M.createTransitions({ empty: { 0: { action_: "output-0" }, o: { action_: "output-o" } }, ",": { 0: { action_: ["output-0", "comma"], nextState: "o" } }, ".": { 0: { action_: ["output-0", "copy"], nextState: "o" } }, else: { "*": { action_: "text=" } } }), actions: { comma: function() {
  return { type_: "commaDecimal" };
}, "output-0": function(e) {
  var t = [];
  if (e.text_ = e.text_ || "", e.text_.length > 4) {
    var i = e.text_.length % 3;
    i === 0 && (i = 3);
    for (var r = e.text_.length - 3; r > 0; r -= 3) t.push(e.text_.substr(r, 3)), t.push({ type_: "1000 separator" });
    t.push(e.text_.substr(0, i)), t.reverse();
  } else t.push(e.text_);
  for (var n in e) delete e[n];
  return t;
}, "output-o": function(e) {
  var t = [];
  if (e.text_ = e.text_ || "", e.text_.length > 4) {
    for (var i = e.text_.length - 3, r = 0; r < i; r += 3) t.push(e.text_.substr(r, 3)), t.push({ type_: "1000 separator" });
    t.push(e.text_.substr(r));
  } else t.push(e.text_);
  for (var n in e) delete e[n];
  return t;
} } } };
var Y = { go: function(e, t) {
  if (!e) return "";
  for (var i = "", r = !1, n = 0; n < e.length; n++) {
    var a = e[n];
    typeof a == "string" ? i += a : (i += Y._go2(a), a.type_ === "1st-level escape" && (r = !0));
  }
  return !t && !r && i && (i = "{" + i + "}"), i;
}, _goInner: function(e) {
  return e && Y.go(e, !0);
}, _go2: function(e) {
  var t;
  switch (e.type_) {
    case "chemfive":
      t = "";
      var i = { a: Y._goInner(e.a), b: Y._goInner(e.b), p: Y._goInner(e.p), o: Y._goInner(e.o), q: Y._goInner(e.q), d: Y._goInner(e.d) };
      i.a && (i.a.match(/^[+\-]/) && (i.a = "{" + i.a + "}"), t += i.a + "\\,"), (i.b || i.p) && (t += "{\\vphantom{X}}", t += "^{\\hphantom{" + (i.b || "") + "}}_{\\hphantom{" + (i.p || "") + "}}", t += "{\\vphantom{X}}", t += "^{\\smash[t]{\\vphantom{2}}\\llap{" + (i.b || "") + "}}", t += "_{\\vphantom{2}\\llap{\\smash[t]{" + (i.p || "") + "}}}"), i.o && (i.o.match(/^[+\-]/) && (i.o = "{" + i.o + "}"), t += i.o), e.dType === "kv" ? ((i.d || i.q) && (t += "{\\vphantom{X}}"), i.d && (t += "^{" + i.d + "}"), i.q && (t += "_{\\smash[t]{" + i.q + "}}")) : e.dType === "oxidation" ? (i.d && (t += "{\\vphantom{X}}", t += "^{" + i.d + "}"), i.q && (t += "{\\vphantom{X}}", t += "_{\\smash[t]{" + i.q + "}}")) : (i.q && (t += "{\\vphantom{X}}", t += "_{\\smash[t]{" + i.q + "}}"), i.d && (t += "{\\vphantom{X}}", t += "^{" + i.d + "}"));
      break;
    case "rm":
      t = "\\mathrm{" + e.p1 + "}";
      break;
    case "text":
      e.p1.match(/[\^_]/) ? (e.p1 = e.p1.replace(" ", "~").replace("-", "\\text{-}"), t = "\\mathrm{" + e.p1 + "}") : t = "\\text{" + e.p1 + "}";
      break;
    case "roman numeral":
      t = "\\mathrm{" + e.p1 + "}";
      break;
    case "state of aggregation":
      t = "\\mskip2mu " + Y._goInner(e.p1);
      break;
    case "state of aggregation subscript":
      t = "\\mskip1mu " + Y._goInner(e.p1);
      break;
    case "bond":
      if (t = Y._getBond(e.kind_), !t) throw ["MhchemErrorBond", "mhchem Error. Unknown bond type (" + e.kind_ + ")"];
      break;
    case "frac":
      var r = "\\frac{" + e.p1 + "}{" + e.p2 + "}";
      t = "\\mathchoice{\\textstyle" + r + "}{" + r + "}{" + r + "}{" + r + "}";
      break;
    case "pu-frac":
      var n = "\\frac{" + Y._goInner(e.p1) + "}{" + Y._goInner(e.p2) + "}";
      t = "\\mathchoice{\\textstyle" + n + "}{" + n + "}{" + n + "}{" + n + "}";
      break;
    case "tex-math":
      t = e.p1 + " ";
      break;
    case "frac-ce":
      t = "\\frac{" + Y._goInner(e.p1) + "}{" + Y._goInner(e.p2) + "}";
      break;
    case "overset":
      t = "\\overset{" + Y._goInner(e.p1) + "}{" + Y._goInner(e.p2) + "}";
      break;
    case "underset":
      t = "\\underset{" + Y._goInner(e.p1) + "}{" + Y._goInner(e.p2) + "}";
      break;
    case "underbrace":
      t = "\\underbrace{" + Y._goInner(e.p1) + "}_{" + Y._goInner(e.p2) + "}";
      break;
    case "color":
      t = "{\\color{" + e.color1 + "}{" + Y._goInner(e.color2) + "}}";
      break;
    case "color0":
      t = "\\color{" + e.color + "}";
      break;
    case "arrow":
      var a = { rd: Y._goInner(e.rd), rq: Y._goInner(e.rq) }, o = Y._getArrow(e.r);
      a.rd || a.rq ? e.r === "<=>" || e.r === "<=>>" || e.r === "<<=>" || e.r === "<-->" ? (o = "\\long" + o, a.rd && (o = "\\overset{" + a.rd + "}{" + o + "}"), a.rq && (e.r === "<-->" ? o = "\\underset{\\lower2mu{" + a.rq + "}}{" + o + "}" : o = "\\underset{\\lower6mu{" + a.rq + "}}{" + o + "}"), o = " {}\\mathrel{" + o + "}{} ") : (a.rq && (o += "[{" + a.rq + "}]"), o += "{" + a.rd + "}", o = " {}\\mathrel{\\x" + o + "}{} ") : o = " {}\\mathrel{\\long" + o + "}{} ", t = o;
      break;
    case "operator":
      t = Y._getOperator(e.kind_);
      break;
    case "1st-level escape":
      t = e.p1 + " ";
      break;
    case "space":
      t = " ";
      break;
    case "entitySkip":
      t = "~";
      break;
    case "pu-space-1":
      t = "~";
      break;
    case "pu-space-2":
      t = "\\mkern3mu ";
      break;
    case "1000 separator":
      t = "\\mkern2mu ";
      break;
    case "commaDecimal":
      t = "{,}";
      break;
    case "comma enumeration L":
      t = "{" + e.p1 + "}\\mkern6mu ";
      break;
    case "comma enumeration M":
      t = "{" + e.p1 + "}\\mkern3mu ";
      break;
    case "comma enumeration S":
      t = "{" + e.p1 + "}\\mkern1mu ";
      break;
    case "hyphen":
      t = "\\text{-}";
      break;
    case "addition compound":
      t = "\\,{\\cdot}\\,";
      break;
    case "electron dot":
      t = "\\mkern1mu \\bullet\\mkern1mu ";
      break;
    case "KV x":
      t = "{\\times}";
      break;
    case "prime":
      t = "\\prime ";
      break;
    case "cdot":
      t = "\\cdot ";
      break;
    case "tight cdot":
      t = "\\mkern1mu{\\cdot}\\mkern1mu ";
      break;
    case "times":
      t = "\\times ";
      break;
    case "circa":
      t = "{\\sim}";
      break;
    case "^":
      t = "uparrow";
      break;
    case "v":
      t = "downarrow";
      break;
    case "ellipsis":
      t = "\\ldots ";
      break;
    case "/":
      t = "/";
      break;
    case " / ":
      t = "\\,/\\,";
      break;
    default:
      throw ["MhchemBugT", "mhchem bug T. Please report."];
  }
  return t;
}, _getArrow: function(e) {
  switch (e) {
    case "->":
      return "rightarrow";
    case "→":
      return "rightarrow";
    case "⟶":
      return "rightarrow";
    case "<-":
      return "leftarrow";
    case "<->":
      return "leftrightarrow";
    case "<-->":
      return "leftrightarrows";
    case "<=>":
      return "rightleftharpoons";
    case "⇌":
      return "rightleftharpoons";
    case "<=>>":
      return "Rightleftharpoons";
    case "<<=>":
      return "Leftrightharpoons";
    default:
      throw ["MhchemBugT", "mhchem bug T. Please report."];
  }
}, _getBond: function(e) {
  switch (e) {
    case "-":
      return "{-}";
    case "1":
      return "{-}";
    case "=":
      return "{=}";
    case "2":
      return "{=}";
    case "#":
      return "{\\equiv}";
    case "3":
      return "{\\equiv}";
    case "~":
      return "{\\tripledash}";
    case "~-":
      return "{\\rlap{\\lower.1em{-}}\\raise.1em{\\tripledash}}";
    case "~=":
      return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";
    case "~--":
      return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";
    case "-~-":
      return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{-}}\\tripledash}";
    case "...":
      return "{{\\cdot}{\\cdot}{\\cdot}}";
    case "....":
      return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
    case "->":
      return "{\\rightarrow}";
    case "<-":
      return "{\\leftarrow}";
    case "<":
      return "{<}";
    case ">":
      return "{>}";
    default:
      throw ["MhchemBugT", "mhchem bug T. Please report."];
  }
}, _getOperator: function(e) {
  switch (e) {
    case "+":
      return " {}+{} ";
    case "-":
      return " {}-{} ";
    case "=":
      return " {}={} ";
    case "<":
      return " {}<{} ";
    case ">":
      return " {}>{} ";
    case "<<":
      return " {}\\ll{} ";
    case ">>":
      return " {}\\gg{} ";
    case "\\pm":
      return " {}\\pm{} ";
    case "\\approx":
      return " {}\\approx{} ";
    case "$\\approx$":
      return " {}\\approx{} ";
    case "v":
      return " \\downarrow{} ";
    case "(v)":
      return " \\downarrow{} ";
    case "^":
      return " \\uparrow{} ";
    case "(^)":
      return " \\uparrow{} ";
    default:
      throw ["MhchemBugT", "mhchem bug T. Please report."];
  }
} }, rm = class nm extends v {
  constructor(t) {
    super(b(f({}, t), { type: "delim" })), this.value = t.delim, this.size = t.size;
  }
  static fromJson(t) {
    return new nm(t);
  }
  toJson() {
    return b(f({}, super.toJson()), { delim: this.value, size: this.size });
  }
  render(t) {
    return new S(this.value, { type: "middle" });
  }
  _serialize(t) {
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let i = fe(this.command, this.mode);
    return i != null && i.serialize ? i.serialize(this, t) : Z(this.command, this.value);
  }
}, am = class om extends v {
  constructor(t) {
    super(b(f({}, t), { type: "sizeddelim", value: t.delim })), this.delimType = t.delimType, this.size = t.size;
  }
  static fromJson(t) {
    return new om(t);
  }
  toJson() {
    return b(f({}, super.toJson()), { delim: this.value, size: this.size, delimType: this.delimType });
  }
  render(t) {
    let i = h4(this.value, this.size, t, { classes: { open: "ML__open", close: "ML__close" }[this.delimType], type: this.delimType, isSelected: this.isSelected });
    return i ? (i = this.bind(t, i), this.caret && (i.caret = this.caret), i) : null;
  }
  _serialize(t) {
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let i = fe(this.command, this.mode);
    return i != null && i.serialize ? i.serialize(this, t) : Z(this.command, this.value);
  }
}, An = class sm extends v {
  constructor(t, i, r, n) {
    var a, o;
    super({ type: "enclose", command: t, style: n.style }), this.body = i, this.backgroundcolor = n.backgroundcolor, r.updiagonalarrow && (r.updiagonalstrike = !1), r.box && (r.left = !1, r.right = !1, r.bottom = !1, r.top = !1), this.notation = r, this.shadow = (a = n.shadow) != null ? a : "none", this.strokeWidth = (o = n.strokeWidth) != null ? o : "0.06em", this.strokeWidth || (this.strokeWidth = "0.06em"), this.strokeStyle = n.strokeStyle, this.svgStrokeStyle = n.svgStrokeStyle, this.strokeColor = n.strokeColor, this.borderStyle = n.borderStyle, this.padding = n.padding, this.captureSelection = !1;
  }
  static fromJson(t) {
    return new sm(t.command, t.body, t.notation, t);
  }
  toJson() {
    return b(f({}, super.toJson()), { notation: this.notation, shadow: this.shadow, strokeWidth: this.strokeWidth, strokeStyle: this.strokeStyle, svgStrokeStyle: this.svgStrokeStyle, strokeColor: this.strokeColor, borderStyle: this.borderStyle, padding: this.padding });
  }
  _serialize(t) {
    var i;
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let r = fe(this.command, this.mode);
    if (r != null && r.serialize) return r.serialize(this, t);
    let n = (i = this.command) != null ? i : "";
    if (this.command === "\\enclose") {
      n += "{" + Object.keys(this.notation).join(" ") + "}";
      let a = "", o = "";
      this.backgroundcolor && this.backgroundcolor !== "transparent" && (a += o + 'mathbackground="' + this.backgroundcolor + '"', o = ","), this.shadow && this.shadow !== "auto" && (a += o + 'shadow="' + this.shadow + '"', o = ","), this.strokeWidth || this.strokeStyle !== "solid" ? (a += o + this.borderStyle, o = ",") : this.strokeColor && this.strokeColor !== "currentColor" && (a += o + 'mathcolor="' + this.strokeColor + '"', o = ","), a && (n += `[${a}]`);
    }
    return Z(n, this.bodyToLatex(t));
  }
  render(t) {
    let i = new I({ parent: t }, this.style), r = v.createBox(i, this.body);
    if (!r) return null;
    let n = C4(this.borderStyle), a = i.toEm(!this.padding || this.padding === "auto" ? { register: "fboxsep" } : { string: this.padding });
    r.setStyle("position", "relative"), r.setStyle("display", "inline-block"), r.setStyle("top", a, "em"), r.setStyle("height", r.height + r.depth, "em"), r.setStyle("width", r.width, "em");
    let o = new S(null, { classes: "ML__notation" }), s = r.height + r.depth + 2 * a, l = r.width + 2 * a, u = "";
    if (this.notation.horizontalstrike && (u += this.line(3, 50, 97, 50)), this.notation.verticalstrike && (u += this.line(50, 3, 50, 97)), this.notation.updiagonalstrike && (u += this.line(3, 97, 97, 3)), this.notation.downdiagonalstrike && (u += this.line(3, 3, 97, 97)), this.notation.updiagonalarrow) {
      u += this.line(a.toString(), (a + r.depth + r.height).toString(), (a + r.width).toString(), a.toString());
      let h = 0.03 * Math.sqrt(l * l + s * s) * 1, p = r.width * h, m = (r.depth + r.height) * h, y = a + r.width, w = a;
      w + m - 0.4 * p < 0 && (w = 0.4 * p - m), u += '<polygon points="', u += `${y},${w} ${y - p - 0.4 * m},${w + m - 0.4 * p} `, u += `${y - 0.7 * p},${w + 0.7 * m} ${y - p + 0.4 * m},${w + m + 0.4 * p} `, u += `${y},${w}`, u += `" stroke='none' fill="${this.strokeColor}"`, u += "/>";
    }
    let c = 0;
    if (this.notation.phasorangle) {
      let h = Dd(i), p = (r.height + r.depth + 2 * h + a).toString(), m = (r.height + r.depth) / 2;
      u += this.line(a.toString(), p, (a + m + r.width).toString(), p), u += this.line(a.toString(), p, (a + m).toString(), (a - h).toString()), s += h, c = m, r.left += s / 2 - a;
    }
    if (this.notation.longdiv) {
      let h = Dd(i);
      s += h, u += this.line(a.toString(), a.toString(), (a + r.width).toString(), a.toString());
      let p = 0.3;
      c = p + h, r.left += p + h, r.setTop(a + h), u += '<path d="', u += `M ${a} ${a}  a${p} ${(r.depth + r.height + 2 * h) / 2}, 0, 1, 1, 0 ${r.depth + r.height + 2 * h} "`, u += ` stroke-width="${L4(i)}" stroke="${this.strokeColor}" fill="none"`, u += "/>";
    }
    if (o.width = r.width + 2 * a + c, o.height = r.height + a, o.depth = r.depth + a, o.setStyle("box-sizing", "border-box"), o.setStyle("left", `calc(-${n} / 2 )`), o.setStyle("height", `${Math.floor(100 * s) / 100}em`), o.setStyle("top", `calc(${n} / 2 )`), this.backgroundcolor && o.setStyle("background-color", this.backgroundcolor), this.notation.box && o.setStyle("border", "1px solid red"), this.notation.actuarial && (o.setStyle("border-top", this.borderStyle), o.setStyle("border-right", this.borderStyle)), this.notation.madruwb && (o.setStyle("border-bottom", this.borderStyle), o.setStyle("border-right", this.borderStyle)), this.notation.roundedbox && (o.setStyle("border-radius", "8px"), o.setStyle("border", this.borderStyle)), this.notation.circle && (o.setStyle("border-radius", "50%"), o.setStyle("border", this.borderStyle)), this.notation.top && o.setStyle("border-top", this.borderStyle), this.notation.left && o.setStyle("border-left", this.borderStyle), this.notation.right && o.setStyle("border-right", this.borderStyle), this.notation.bottom && o.setStyle("border-bottom", this.borderStyle), u) {
      let h = "";
      this.shadow === "auto" && (h += "filter: drop-shadow(0 0 .5px rgba(255, 255, 255, .7)) drop-shadow(1px 1px 2px #333)"), this.shadow !== "none" && (h += `filter: drop-shadow(${this.shadow})`), h += ` stroke-width="${this.strokeWidth}" stroke="${this.strokeColor}"`, h += ' stroke-linecap="round"', this.svgStrokeStyle && (h += ` stroke-dasharray="${this.svgStrokeStyle}"`), o.svgStyle = h, o.svgOverlay = u;
    }
    let d = new S([o, r]);
    return d.setStyle("position", "relative"), d.setStyle("vertical-align", a, "em"), d.setStyle("height", `${Math.floor(100 * (r.height + r.depth + 2 * a)) / 100}em`), d.setStyle("display", "inline-block"), d.height = o.height, d.depth = o.depth, d.width = o.width - 2 * a, d.left = a, d.right = a, this.caret && (d.caret = this.caret), d.wrap(i);
  }
  line(t, i, r, n) {
    return `<line x1="${Ca(t)}"  y1="${Ca(i)}" x2="${Ca(r)}" y2="${Ca(n)}" vector-effect="non-scaling-stroke"></line>`;
  }
};
function Ca(e) {
  return typeof e == "number" ? `${Math.floor(100 * e) / 100}%` : e;
}
function C4(e) {
  if (!e) return "1px";
  let t = e.match(/([0-9][a-zA-Z\%]+)/);
  return t === null ? "1px" : t[1];
}
function L4(e) {
  return (Math.floor(100 * e.metrics.sqrtRuleThickness / e.scalingFactor) / 100 / 10).toString() + "em";
}
function Dd(e) {
  let t = e.isDisplayStyle ? Jt : e.metrics.defaultRuleThickness;
  return e.metrics.defaultRuleThickness + e.scalingFactor * t / 4;
}
var $i = class lm extends v {
  constructor(t, i, r) {
    var n, a, o;
    super(b(f({}, r), { type: "genfrac", displayContainsHighlight: !0 })), this.above = t, this.below = i, this.hasBarLine = (n = r == null ? void 0 : r.hasBarLine) != null ? n : !0, this.continuousFraction = (a = r == null ? void 0 : r.continuousFraction) != null ? a : !1, this.align = (o = r == null ? void 0 : r.align) != null ? o : "center", this.numerPrefix = r == null ? void 0 : r.numerPrefix, this.denomPrefix = r == null ? void 0 : r.denomPrefix, this.mathstyleName = r == null ? void 0 : r.mathstyleName, this.leftDelim = r == null ? void 0 : r.leftDelim, this.rightDelim = r == null ? void 0 : r.rightDelim, this.fractionNavigationOrder = r == null ? void 0 : r.fractionNavigationOrder;
  }
  static fromJson(t) {
    return new lm(t.above, t.below, t);
  }
  toJson() {
    let t = {};
    return this.continuousFraction && (t.continuousFraction = !0), this.align !== "center" && (t.align = this.align), this.numerPrefix && (t.numerPrefix = this.numerPrefix), this.denomPrefix && (t.denomPrefix = this.denomPrefix), this.leftDelim && (t.leftDelim = this.leftDelim), this.rightDelim && (t.rightDelim = this.rightDelim), this.hasBarLine || (t.hasBarLine = !1), this.mathstyleName && (t.mathstyleName = this.mathstyleName), this.fractionNavigationOrder && (t.fractionNavigationOrder = this.fractionNavigationOrder), f(f({}, super.toJson()), t);
  }
  get children() {
    if (this._children) return this._children;
    let t = [];
    if (this.fractionNavigationOrder === "denominator-numerator") {
      for (let i of this.below) t.push(...i.children), t.push(i);
      for (let i of this.above) t.push(...i.children), t.push(i);
    } else {
      for (let i of this.above) t.push(...i.children), t.push(i);
      for (let i of this.below) t.push(...i.children), t.push(i);
    }
    return this._children = t, t;
  }
  render(t) {
    var i, r;
    let n = new I({ parent: t, mathstyle: this.mathstyleName }, this.style), a = n.metrics, o = new I({ parent: n, mathstyle: this.continuousFraction ? "" : "numerator" }, this.style), s = this.numerPrefix ? new S([new S(this.numerPrefix), v.createBox(o, this.above)], { isTight: o.isTight, type: "ignore" }) : (i = v.createBox(o, this.above, { type: "ignore" })) != null ? i : new S(null, { type: "ignore" }), l = new I({ parent: n, mathstyle: this.continuousFraction ? "" : "denominator" }, this.style), u = this.denomPrefix ? new S([new S(this.denomPrefix), v.createBox(l, this.below, { type: "ignore" })]) : (r = v.createBox(l, this.below, { type: "ignore" })) != null ? r : new S(null, { type: "ignore" }), c = this.hasBarLine ? a.defaultRuleThickness : 0, d, h = 0, p;
    n.isDisplayStyle ? (d = o.metrics.num1, h = c > 0 ? 3 * c : 7 * c, p = l.metrics.denom1) : (c > 0 ? (d = o.metrics.num2, h = c) : (d = o.metrics.num3, h = 3 * a.defaultRuleThickness), p = l.metrics.denom2);
    let m = [];
    this.isSelected && m.push("ML__selected");
    let y = s.depth, w = u.height, g;
    if (c <= 0) {
      let z = d - y - (w - p);
      z < h && (d += (h - z) / 2, p += (h - z) / 2), g = new ae({ individualShift: [{ box: s, shift: -d, classes: [...m, La(this.align)] }, { box: u, shift: p, classes: [...m, La(this.align)] }] }).wrap(n);
    } else {
      let z = new S(null, { classes: "ML__frac-line", mode: this.mode, style: this.style });
      z.softWidth = Math.max(s.width, u.width), z.height = c / 2, z.depth = c / 2;
      let O = Ze + c / 2;
      d < h + y + O && (d = h + y + O);
      let ne = Ze - c / 2;
      p < h + w - ne && (p = h + w - ne), g = new ae({ individualShift: [{ box: u, shift: p, classes: [...m, La(this.align)] }, { box: z, shift: -ne, classes: m }, { box: s, shift: -d, classes: [...m, La(this.align)] }] }).wrap(n);
    }
    let k = n.isDisplayStyle ? a.delim1 : a.delim2, A = this.leftDelim ? this.bind(t, so("open", this.leftDelim, k, !0, t, { style: this.style, mode: this.mode, isSelected: this.isSelected })) : Fi(n, "ML__open"), _ = null;
    this.continuousFraction ? _ = new S(null, { type: "close" }) : this.rightDelim ? _ = this.bind(t, so("close", this.rightDelim, k, !0, t, { style: this.style, mode: this.mode, isSelected: this.isSelected })) : _ = Fi(n, "ML__close");
    let T = new S([A, g, _], { isTight: n.isTight, type: "inner", classes: "ML__mfrac" }), K = this.bind(t, T);
    return this.caret && (K.caret = this.caret), this.attachSupsub(t, { base: K });
  }
};
function La(e) {
  var t;
  return (t = { left: "ML__left", right: "ML__right", center: "ML__center" }[e]) != null ? t : "ML__center";
}
var ce = class um extends v {
  constructor(t, i) {
    var r;
    super({ type: "latex", value: t, mode: "latex" }), this.isSuggestion = (r = i == null ? void 0 : i.isSuggestion) != null ? r : !1, this.isError = !1;
  }
  static fromJson(t) {
    let i = new um(t.value);
    return t.isSuggestion && (i.isSuggestion = !0), t.isError && (i.isError = !0), i;
  }
  toJson() {
    let t = {};
    return this.isSuggestion && (t.isSuggestion = !0), this.isError && (t.isError = !0), f({ type: "latex", value: this.value }, t);
  }
  get computedStyle() {
    return {};
  }
  render(t) {
    let i = new S(this.value, { classes: this.isSuggestion ? "ML__suggestion" : this.isError ? "ML__error" : "", type: "latex", maxFontSize: 1 });
    return i ? (this.caret && (i.caret = this.caret), this.bind(t, i)) : null;
  }
}, an = class cm extends v {
  constructor(t) {
    super({ type: "latexgroup", mode: "latex" }), this.body = [...t].map((i) => new ce(i)), this.skipBoundary = !1;
  }
  static fromJson(t) {
    return new cm("");
  }
  toJson() {
    return super.toJson();
  }
  render(t) {
    let i = v.createBox(t, this.body);
    return i ? (this.caret && (i.caret = this.caret), this.bind(t, i)) : null;
  }
  _serialize(t) {
    var i, r;
    return (r = (i = this.body) == null ? void 0 : i.map((n) => n.value).join("")) != null ? r : "";
  }
}, iu = class dm extends v {
  constructor(t, i) {
    super(b(f({}, i), { type: "extensible-symbol", isFunction: i == null ? void 0 : i.isFunction })), this.value = t, this.variant = i == null ? void 0 : i.variant, this.subsupPlacement = i == null ? void 0 : i.limits;
  }
  static fromJson(t) {
    return new dm(t.symbol, t);
  }
  toJson() {
    let t = super.toJson();
    return this.variant && (t.variant = this.variant), this.subsupPlacement && (t.limits = this.subsupPlacement), this.isExtensibleSymbol && (t.isExtensibleSymbol = !0), this.value && (t.symbol = this.value), t;
  }
  render(t) {
    var i;
    let r = t.isDisplayStyle && this.value !== "\\smallint", n = new S(this.value, { fontFamily: r ? "Size2-Regular" : "Size1-Regular", classes: "ML__op-symbol " + (r ? "ML__large-op" : "ML__small-op"), type: "op", maxFontSize: t.scalingFactor, isSelected: this.isSelected });
    if (!n) return null;
    n.right = n.italic;
    let a = (n.height - n.depth) / 2 - Ze * t.scalingFactor, o = n.italic;
    n.setTop(a);
    let s = n;
    if (this.superscript || this.subscript) {
      let l = (i = this.subsupPlacement) != null ? i : "auto";
      s = l === "over-under" || l === "auto" && t.isDisplayStyle ? this.attachLimits(t, { base: n, baseShift: a, slant: o }) : this.attachSupsub(t, { base: n });
    }
    return new S(this.bind(t, s), { type: "op", caret: this.caret, isSelected: this.isSelected, classes: "ML__op-group" }).wrap(t);
  }
  _serialize(t) {
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let i = fe(this.command, this.mode);
    if (i != null && i.serialize) return i.serialize(this, t);
    let r = [];
    return r.push(this.command), this.explicitSubsupPlacement && (this.subsupPlacement === "over-under" && r.push("\\limits"), this.subsupPlacement === "adjacent" && r.push("\\nolimits"), this.subsupPlacement === "auto" && r.push("\\displaylimits")), r.push(this.supsubToLatex(t)), R(r);
  }
}, Pi = class hm extends v {
  constructor(t) {
    let i = t.body;
    super(b(f({}, t), { type: "overlap", body: typeof i == "string" ? [new v({ value: i })] : i, style: t == null ? void 0 : t.style })), this.skipBoundary = !0, this.align = t == null ? void 0 : t.align, this.boxType = t == null ? void 0 : t.boxType;
  }
  static fromJson(t) {
    return new hm(t);
  }
  toJson() {
    let t = {};
    return this.align && (t.align = this.align), this.boxType && (t.boxType = this.boxType), f(f({}, super.toJson()), t);
  }
  render(t) {
    let i = v.createBox(t, this.body, { classes: "ML__inner" });
    return i ? (this.caret && (i.caret = this.caret), this.bind(t, new S([i, new S(null, { classes: "ML__fix" })], { classes: this.align === "right" ? "ML__rlap" : "ML__llap", type: this.boxType }))) : null;
  }
}, qe = class pm extends v {
  constructor(t) {
    var i, r, n, a;
    super({ type: "overunder", command: t.command, style: t.style, mode: t.mode, body: t.body, skipBoundary: (i = t.skipBoundary) != null ? i : !0 }), this.subsupPlacement = t.supsubPlacement, this.svgAbove = t.svgAbove, this.svgBelow = t.svgBelow, this.svgBody = t.svgBody, this.above = t.above, this.below = t.below, this.boxType = (r = t.boxType) != null ? r : "ord", this.paddedBody = (n = t.paddedBody) != null ? n : !1, this.paddedLabels = (a = t.paddedLabels) != null ? a : !1;
  }
  static fromJson(t) {
    return new pm(t);
  }
  toJson() {
    let t = super.toJson();
    return this.skipBoundary || (t.skipBoundary = !1), this.subsupPlacement && (t.subsupPlacement = this.subsupPlacement), this.svgAbove && (t.svgAbove = this.svgAbove), this.svgBelow && (t.svgBelow = this.svgBelow), this.svgBody && (t.svgBody = this.svgBody), this.boxType !== "ord" && (t.boxType = this.boxType), this.paddedBody && (t.paddedBody = !0), this.paddedLabels && (t.paddedLabels = !0), t;
  }
  render(t) {
    let i = this.svgBody ? qa(this.svgBody) : v.createBox(t, this.body, { type: "ignore" }), r = new I({ parent: t, mathstyle: "scriptstyle" }, this.style), n = null;
    this.svgAbove ? n = qa(this.svgAbove) : this.above && (n = v.createBox(r, this.above, { type: "ignore" }));
    let a = null;
    this.svgBelow ? a = qa(this.svgBelow) : this.below && (a = v.createBox(r, this.below, { type: "ignore" })), this.paddedBody && (i = new S([Fi(t, "ML__open"), i, Fi(t, "ML__close")], { type: "ignore" }));
    let o = B4(t, { base: i, above: n, below: a, type: this.boxType === "bin" || this.boxType === "rel" ? this.boxType : "ord", paddedAboveBelow: this.paddedLabels });
    return o ? (this.subsupPlacement === "over-under" ? o = this.attachLimits(t, { base: o, type: o.type }) : o = this.attachSupsub(t, { base: o }), this.caret && (o.caret = this.caret), this.bind(t, o)) : null;
  }
};
function B4(e, t) {
  if (!t.base) return null;
  if (!t.above && !t.below) {
    let s = new S(t.base, { type: t.type });
    return s.setStyle("position", "relative"), s;
  }
  let i = 0;
  t.above && (i = e.metrics.bigOpSpacing5);
  let r = null, n = t.base, a = 0, o = ["ML__center"];
  if (t.paddedAboveBelow && o.push("ML__label_padding"), t.below && t.above) {
    let s = e.metrics.bigOpSpacing5 + t.below.height + t.below.depth + n.depth + a;
    r = new ae({ bottom: s, children: [e.metrics.bigOpSpacing5, { box: t.below, classes: o }, { box: n, classes: ["ML__center"] }, i, { box: t.above, classes: o }, e.metrics.bigOpSpacing5] });
  } else t.below ? r = new ae({ top: n.height - a, children: [e.metrics.bigOpSpacing5, { box: t.below, classes: o }, { box: n, classes: ["ML__center"] }] }) : t.above && (r = new ae({ bottom: n.depth + a, children: [{ box: n, classes: ["ML__center"] }, i, { box: t.above, classes: o }, e.metrics.bigOpSpacing5] }));
  return new S(r, { type: t.type });
}
var En = class mm extends v {
  constructor(t) {
    var i, r, n, a;
    super(b(f({}, t), { type: "phantom" })), this.captureSelection = !0, this.isInvisible = (i = t.isInvisible) != null ? i : !1, this.smashDepth = (r = t.smashDepth) != null ? r : !1, this.smashHeight = (n = t.smashHeight) != null ? n : !1, this.smashWidth = (a = t.smashWidth) != null ? a : !1;
  }
  static fromJson(t) {
    return new mm(t);
  }
  toJson() {
    let t = {};
    return this.isInvisible && (t.isInvisible = !0), this.smashDepth && (t.smashDepth = !0), this.smashHeight && (t.smashHeight = !0), this.smashWidth && (t.smashWidth = !0), f(f({}, super.toJson()), t);
  }
  render(t) {
    let i = new I({ parent: t, isPhantom: !0 });
    if (!this.smashDepth && !this.smashHeight && !this.smashWidth) return this.isInvisible, v.createBox(i, this.body, { classes: "ML__inner" });
    let r = v.createBox(this.isInvisible ? i : t, this.body);
    if (!r) return null;
    if (this.smashWidth) {
      let n = new S(null, { classes: "ML__fix" });
      return new S([r, n], { classes: "ML__rlap" }).wrap(t);
    }
    if (!this.smashHeight && !this.smashDepth) return r;
    if (this.smashHeight && (r.height = 0), this.smashDepth && (r.depth = 0), r.children) for (let n of r.children) this.smashHeight && (n.height = 0), this.smashDepth && (n.depth = 0);
    return new ae({ firstBaseline: [{ box: r }] }, { type: r.type }).wrap(t);
  }
}, Dn = class fm extends v {
  constructor(t) {
    var i;
    super(f({ type: "spacing" }, t)), this.width = t == null ? void 0 : t.width, this._braced = (i = t == null ? void 0 : t.braced) != null ? i : !1;
  }
  static fromJson(t) {
    return new fm(t);
  }
  toJson() {
    let t = super.toJson();
    return this.width !== void 0 && (t.width = this.width), this._braced && (t.braced = !0), t;
  }
  render(t) {
    var i;
    if (this.command === "space") return new S(this.mode === "math" ? null : " ");
    let r;
    if (this.width !== void 0) r = new S(null, { classes: "ML__mspace" }), r.left = t.toEm(this.width);
    else {
      let n = (i = { "\\qquad": "ML__qquad", "\\quad": "ML__quad", "\\enspace": "ML__enspace", "\\;": "ML__thickspace", "\\:": "ML__mediumspace", "\\>": "ML__mediumspace", "\\,": "ML__thinspace", "\\!": "ML__negativethinspace" }[this.command]) != null ? i : "ML__mediumspace";
      r = new S(null, { classes: n });
    }
    return r = this.bind(t, r), this.caret && (r.caret = this.caret), r;
  }
  _serialize(t) {
    var i;
    if (!t.expandMacro && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let r = fe(this.command, this.mode);
    if (r != null && r.serialize) return r.serialize(this, t);
    let n = (i = this.command) != null ? i : "";
    return this.width === void 0 ? n : this._braced && !("register" in this.width) ? `${n}{${pe(this.width)}}` : `${n}${pe(this.width)}`;
  }
}, gm = class ym extends v {
  constructor(t) {
    var i;
    super(b(f({}, t), { type: "surd", mode: (i = t.mode) != null ? i : "math", style: t.style, displayContainsHighlight: !0, body: t.body })), this.above = t.index;
  }
  static fromJson(t) {
    return new ym(b(f({}, t), { index: t.above }));
  }
  _serialize(t) {
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let i = fe(this.command, this.mode);
    if (i != null && i.serialize) return i.serialize(this, t);
    let r = this.command, n = this.bodyToLatex(t);
    return this.above && !this.hasEmptyBranch("above") ? Z(`${r}[${this.aboveToLatex(t)}]`, n) : /^[0-9]$/.test(n) ? `${r}${n}` : Z(r, n);
  }
  get children() {
    if (this._children) return this._children;
    let t = [];
    if (this.above) for (let i of this.above) t.push(...i.children), t.push(i);
    if (this.body) for (let i of this.body) t.push(...i.children), t.push(i);
    return this._children = t, t;
  }
  render(t) {
    var i;
    let r = new I({ parent: t, mathstyle: "cramp" }, this.style), n = (i = v.createBox(r, this.body, { type: "inner" })) != null ? i : new S(null), a = r.scalingFactor, o = r.metrics.defaultRuleThickness / a, s = t.isDisplayStyle ? Jt : o, l = new S(null, { classes: "ML__sqrt-line", style: this.style });
    l.height = o, l.softWidth = n.width;
    let u = a * (o + s / 4), c = Math.max(a * 2 * s, n.height + n.depth) + u + o, d = new I({ parent: t }, this.style), h = this.bind(d, new S(so("inner", "\\surd", c, !1, d, { isSelected: this.isSelected }), { isSelected: this.isSelected, classes: "ML__sqrt-sign", style: this.style }));
    if (!h) return null;
    let p = h.height + h.depth - o;
    p > n.height + n.depth + u && (u = (u + p - (n.height + n.depth)) / 2), h.setTop(h.height - n.height - u);
    let m = this.bind(t, new ae({ firstBaseline: [{ box: new S(n) }, u - 2 * o, { box: l }, o] })), y = v.createBox(new I({ parent: t, mathstyle: "scriptscriptstyle" }), this.above, { type: "ignore" });
    if (!y) {
      let k = new S([h, m], { classes: this.containsCaret ? "ML__contains-caret" : "", type: "inner" });
      return k.setStyle("display", "inline-block"), k.setStyle("height", k.height + k.depth, "em"), this.caret && (k.caret = this.caret), this.bind(t, k);
    }
    let w = new ae({ shift: -0.6 * (Math.max(h.height, m.height) - Math.max(h.depth, m.depth)), children: [{ box: y }] }), g = new S([new S(w, { classes: "ML__sqrt-index", type: "ignore" }), h, m], { type: "inner", classes: this.containsCaret ? "ML__contains-caret" : "" });
    return g.height = h.height, g.depth = h.depth, this.caret && (g.caret = this.caret), this.bind(t, g);
  }
}, A4 = class extends S {
  constructor(e) {
    super(null, { type: "skip" }), this._width = e;
  }
  toMarkup() {
    return `<span style="display:inline-block;width:${Math.ceil(this.width * 100) / 100}em"></span>`;
  }
};
function Ha(e, t) {
  if (!e.parent) return;
  let i = e.parent.children, r = i.indexOf(e), n = r - 1;
  for (; n >= 0 && i[n].type === "ignore"; ) n -= 1;
  if (n < 0 && e.parent.parent && e.parent.type === "lift") {
    Ha(e.parent, t);
    return;
  }
  r > 0 && i[r - 1].type === "skip" ? i[r - 1].width += t : i.splice(r, 0, new A4(t));
}
var E4 = { ord: { op: 3, bin: 4, rel: 5, inner: 3 }, op: { ord: 3, op: 3, rel: 5, inner: 3 }, bin: { ord: 4, op: 4, open: 4, inner: 4 }, rel: { ord: 5, op: 5, open: 5, inner: 5 }, close: { op: 3, bin: 4, rel: 5, inner: 3 }, punct: { ord: 3, op: 3, rel: 3, open: 3, punct: 3, inner: 3 }, inner: { ord: 3, op: 3, bin: 4, rel: 5, open: 3, punct: 3, inner: 3 } }, D4 = { ord: { op: 3 }, op: { ord: 3, op: 3 }, close: { op: 3 }, inner: { op: 3 } };
function T4(e) {
  on(e, (t, i) => {
    i.type === "bin" && (!t || /^(middle|bin|op|rel|open|punct)$/.test(t.type)) && (i.type = "ord"), (t == null ? void 0 : t.type) === "bin" && /^(rel|close|punct)$/.test(i.type) && (t.type = "ord"), i.type !== "ignore" && (t = i);
  });
}
function Tn(e, t) {
  if (!e.children) return e;
  let i = e.children;
  T4(i);
  let r = t.getRegisterAsEm("thinmuskip"), n = t.getRegisterAsEm("medmuskip"), a = t.getRegisterAsEm("thickmuskip");
  return on(i, (o, s) => {
    var l, u, c;
    if (!o) return;
    let d = o.type, h = s.isTight ? (l = D4[d]) != null ? l : null : (u = E4[d]) != null ? u : null, p = (c = h == null ? void 0 : h[s.type]) != null ? c : null;
    p === 3 && Ha(s, r), p === 4 && Ha(s, n), p === 5 && Ha(s, a);
  }), e;
}
function on(e, t, i = void 0) {
  if (!e) return i;
  e = [...e];
  for (let r of e) r.type === "lift" ? i = on(r.children, t, i) : r.type === "ignore" ? on(r.children, t) : (t(i, r), on(r.children, t), i = r);
  return i;
}
var ru = class bm extends v {
  constructor(t) {
    super({ type: "tooltip", command: t.command, mode: t.mode, style: t.style, body: t.body, displayContainsHighlight: !0 }), this.tooltip = new v({ type: "root", mode: t.content, body: t.tooltip, style: {} }), this.skipBoundary = !0, this.captureSelection = !1;
  }
  static fromJson(t) {
    return new bm(b(f({}, t), { tooltip: Xt(t.tooltip) }));
  }
  toJson() {
    var t;
    let i = (t = this.tooltip.body) == null ? void 0 : t.filter((r) => r.type !== "first").map((r) => r.toJson());
    return b(f({}, super.toJson()), { tooltip: i });
  }
  render(t) {
    let i = v.createBox(new I(), this.body);
    if (!i) return null;
    let r = new I({ parent: t, mathstyle: "displaystyle" }, { fontSize: Zl }), n = Bo(Tn(new S(this.tooltip.render(r), { classes: "ML__tooltip-content" }), r)), a = new S([n, i], { classes: "ML__tooltip-container" });
    return this.caret && (a.caret = this.caret), this.bind(t, a);
  }
}, Ni = class vm extends v {
  constructor(t, i) {
    super(b(f({}, i), { type: "operator", isFunction: i == null ? void 0 : i.isFunction })), this.value = t, this.variant = i == null ? void 0 : i.variant, this.variantStyle = i == null ? void 0 : i.variantStyle, this.subsupPlacement = i == null ? void 0 : i.limits;
  }
  static fromJson(t) {
    return new vm(t.symbol, t);
  }
  toJson() {
    let t = super.toJson();
    return this.variant && (t.variant = this.variant), this.variantStyle && (t.variantStyle = this.variantStyle), this.subsupPlacement && (t.limits = this.subsupPlacement), this.value && (t.symbol = this.value), t;
  }
  render(t) {
    var i;
    let r = new S(this.value, { type: "op", mode: "math", maxFontSize: t.scalingFactor, style: { variant: this.variant, variantStyle: this.variantStyle }, isSelected: this.isSelected, letterShapeStyle: t.letterShapeStyle }), n = r;
    if (this.superscript || this.subscript) {
      let a = (i = this.subsupPlacement) != null ? i : "auto";
      n = a === "over-under" || a === "auto" && t.isDisplayStyle ? this.attachLimits(t, { base: r }) : this.attachSupsub(t, { base: r });
    }
    return new S(this.bind(t, n), { type: "op", caret: this.caret, isSelected: this.isSelected, classes: "ML__op-group" }).wrap(t);
  }
  _serialize(t) {
    if (!(t.expandMacro || t.skipStyles || t.skipPlaceholders) && typeof this.verbatimLatex == "string") return this.verbatimLatex;
    let i = fe(this.command, this.mode);
    if (i != null && i.serialize) return i.serialize(this, t);
    let r = [this.command];
    return this.explicitSubsupPlacement && (this.subsupPlacement === "over-under" && r.push("\\limits"), this.subsupPlacement === "adjacent" && r.push("\\nolimits"), this.subsupPlacement === "auto" && r.push("\\displaylimits")), r.push(this.supsubToLatex(t)), R(r);
  }
};
function Xt(e) {
  if (Me(e)) return e.map((r) => Xt(r));
  if (typeof e == "string") return v.fromJson(e);
  e = f({}, e);
  for (let r of vr) e[r] && (e[r] = Xt(e[r]));
  e.args && (e.args = F4(e.args)), e.array && (e.array = Xt(e.array));
  let t = e.type, i;
  t === "accent" && (i = Do.fromJson(e)), t === "array" && (i = H.fromJson(e)), t === "box" && (i = Qt.fromJson(e)), t === "chem" && (i = tm.fromJson(e)), t === "composition" && (i = Rp.fromJson(e)), t === "delim" && (i = rm.fromJson(e)), t === "enclose" && (i = An.fromJson(e)), t === "error" && (i = bi.fromJson(e)), t === "extensible-symbol" && (i = iu.fromJson(e)), t === "genfrac" && (i = $i.fromJson(e)), t === "group" && (i = Vp.fromJson(e)), t === "latex" && (i = ce.fromJson(e)), t === "latexgroup" && (i = an.fromJson(e)), t === "leftright" && (i = Q.fromJson(e)), t === "macro" && (i = Jp.fromJson(e)), t === "macro-argument" && (i = M4.fromJson(e)), t === "operator" && (i = Ni.fromJson(e)), t === "overlap" && (i = Pi.fromJson(e)), t === "overunder" && (i = qe.fromJson(e)), t === "placeholder" && (i = Ye.fromJson(e)), t === "prompt" && (i = Zp.fromJson(e)), t === "phantom" && (i = En.fromJson(e)), t === "sizeddelim" && (i = am.fromJson(e)), t === "spacing" && (i = Dn.fromJson(e)), t === "subsup" && (i = zo.fromJson(e)), t === "surd" && (i = gm.fromJson(e)), t === "text" && (i = Ln.fromJson(e)), t === "tooltip" && (i = ru.fromJson(e)), i || (i = v.fromJson(e));
  for (let r of vr) e[r] && i.setChildren(e[r], r);
  return e.verbatimLatex !== void 0 && (i.verbatimLatex = e.verbatimLatex), e.subsupPlacement && (i.subsupPlacement = e.subsupPlacement), e.explicitSubsupPlacement && (i.explicitSubsupPlacement = !0), e.isFunction && (i.isFunction = !0), e.isExtensibleSymbol && (i.isExtensibleSymbol = !0), e.skipBoundary && (i.skipBoundary = !0), e.captureSelection && (i.captureSelection = !0), i;
}
function F4(e) {
  if (e && Array.isArray(e)) return e.map((t) => t === "<null>" ? null : typeof t == "object" && "group" in t ? { group: t.group.map((i) => Xt(i)) } : typeof t == "object" && "atoms" in t ? t.atoms.map((i) => Xt(i)) : t);
}
var Td = { main: ["Main-Regular", "ML__cmr"], "main-italic": ["Main-Italic", "ML__cmr ML__it"], "main-bold": ["Main-Bold", "ML__cmr ML__bold"], "main-bolditalic": ["Main-BoldItalic", "ML__cmr ML__bold ML__it"], normal: ["Main-Regular", "ML__cmr"], "normal-bold": ["Main-Bold", "ML__mathbf"], "normal-italic": ["Math-Italic", "ML__mathit"], "normal-bolditalic": ["Math-BoldItalic", "ML__mathbfit"], ams: ["AMS-Regular", "ML__ams"], "ams-bold": ["AMS-Regular", "ML__ams"], "ams-italic": ["AMS-Regular", "ML__ams"], "ams-bolditalic": ["AMS-Regular", "ML__ams"], "sans-serif": ["SansSerif-Regular", "ML__sans"], "sans-serif-bold": ["SansSerif-Regular", "ML__sans ML__bold"], "sans-serif-italic": ["SansSerif-Regular", "ML__sans"], "sans-serif-bolditalic": ["SansSerif-Regular", "ML__sans"], calligraphic: ["Caligraphic-Regular", "ML__cal"], "calligraphic-bold": ["Caligraphic-Regular", "ML__cal ML__bold"], "calligraphic-italic": ["Caligraphic-Regular", "ML__cal ML__it"], "calligraphic-bolditalic": ["Caligraphic-Regular", "ML__cal ML__bold ML__it"], script: ["Script-Regular", "ML__script"], "script-bold": ["Script-Regular", "ML__script ML__bold"], "script-italic": ["Script-Regular", "ML__script ML__it"], "script-bolditalic": ["Script-Regular", "ML__script ML__bold ML__it"], fraktur: ["Fraktur-Regular", "ML__frak"], "fraktur-bold": ["Fraktur-Regular", "ML__frak"], "fraktur-italic": ["Fraktur-Regular", "ML__frak"], "fraktur-bolditalic": ["Fraktur-Regular", "ML__frak"], monospace: ["Typewriter-Regular", "ML__tt"], "monospace-bold": ["Typewriter-Regular", "ML__tt ML__bold"], "monospace-italic": ["Typewriter-Regular", "ML__tt ML__it"], "monospace-bolditalic": ["Typewriter-Regular", "ML__tt ML__bold ML__it"], "double-struck": ["AMS-Regular", "ML__bb"], "double-struck-bold": ["AMS-Regular", "ML__bb"], "double-struck-italic": ["AMS-Regular", "ML__bb"], "double-struck-bolditalic": ["AMS-Regular", "ML__bb"] }, sl = { "double-struck": /^[A-Z ]$/, script: /^[A-Z ]$/, calligraphic: /^[\dA-Z ]$/, fraktur: /^[\dA-Za-z ]$|^[!"#$%&'()*+,\-./:;=?[]^’‘]$/, monospace: /^[\dA-Za-z ]$|^[!"&'()*+,\-./:;=?@[\]^_~\u0131\u0237\u0393\u0394\u0398\u039B\u039E\u03A0\u03A3\u03A5\u03A8\u03A9]$/, "sans-serif": /^[\dA-Za-z ]$|^[!"&'()*+,\-./:;=?@[\]^_~\u0131\u0237\u0393\u0394\u0398\u039B\u039E\u03A0\u03A3\u03A5\u03A8\u03A9]$/ }, xm = /^[\u03B1-\u03C9]|\u03D1|\u03D5|\u03D6|\u03F1|\u03F5]$/, z4 = /^[\u0393|\u0394\u0398\u039B\u039E\u03A0\u03A3\u03A5\u03A6\u03A8\u03A9]$/, K4 = [/^[a-z]$/, /^[A-Z]$/, xm, z4], $4 = { iso: ["it", "it", "it", "it"], tex: ["it", "it", "it", "up"], french: ["it", "up", "up", "up"], upright: ["up", "up", "up", "up"] }, P4 = class extends De {
  constructor() {
    super("math");
  }
  createAtom(e, t, i) {
    var r, n, a, o, s, l;
    if (t === null) return new v({ type: "mord", mode: "math", command: e, value: e, style: i });
    let u = (a = (n = globalThis.MathfieldElement) == null ? void 0 : n.isFunction((r = t.command) != null ? r : e)) != null ? a : !1;
    if (t.definitionType === "symbol") {
      let d = new v({ type: (o = t.type) != null ? o : "mord", mode: "math", command: (s = t.command) != null ? s : e, value: String.fromCodePoint(t.codepoint), style: i });
      return u && (d.isFunction = !0), e.startsWith("\\") && (d.verbatimLatex = e), d;
    }
    let c = new v({ type: "mord", mode: "math", command: (l = t.command) != null ? l : e, value: e, style: i });
    return u && (c.isFunction = !0), e.startsWith("\\") && (c.verbatimLatex = e), c;
  }
  serialize(e, t) {
    let i = N4(e, b(f({}, t), { defaultMode: "math" }));
    return i.length === 0 || t.defaultMode !== "text" ? i : ["$ ", ...i, " $"];
  }
  getFont(e, t) {
    if (t.variant, t.fontFamily) {
      let [s, l] = Td[t.fontFamily];
      return l && (e.classes += " " + l), s;
    }
    let { variant: i } = t, { variantStyle: r } = t;
    i === "normal" && !r && /[\u00A3\u0131\u0237]/.test(e.value) && (i = "main", r = "italic"), i === "normal" && !r && e.value.length === 1 && K4.forEach((s, l) => {
      var u;
      s.test(e.value) && $4[(u = t.letterShapeStyle) != null ? u : "tex"][l] === "it" && (r = "italic");
    }), r === "up" && (r = void 0);
    let n = r ? i + "-" + r : i, [a, o] = Td[n];
    return sl[i] && !sl[i].test(e.value) ? (e.value = ap(e.value, i, r), null) : (xm.test(e.value) && (e.classes += " lcGreek"), o && (e.classes += " " + o), a);
  }
};
function N4(e, t) {
  let { parent: i } = e[0], r = Fd(i);
  return ei(e, "variant").map((n) => {
    let a = Fd(n[0]), o = "";
    a && a !== r && (o = { calligraphic: "\\mathcal", fraktur: "\\mathfrak", "double-struck": "\\mathbb", script: "\\mathscr", monospace: "\\mathtt", "sans-serif": "\\mathsf", normal: "\\mathrm", "normal-italic": "\\mathnormal", "normal-bold": "\\mathbf", "normal-bolditalic": "\\mathbfit", ams: "", "ams-italic": "\\mathit", "ams-bold": "\\mathbf", "ams-bolditalic": "\\mathbfit", main: "", "main-italic": "\\mathit", "main-bold": "\\mathbf", "main-bolditalic": "\\mathbfit" }[a]);
    let s = R(n.map((l) => l._serialize(t)));
    return o ? Z(o, s) : s;
  });
}
function Fd(e) {
  if (!e) return "";
  let { style: t } = e;
  if (t.variant === void 0) return "";
  let i = t.variant;
  return !["calligraphic", "fraktur", "double-struck", "script", "monospace", "sans-serif"].includes(t.variant) && t.variantStyle && t.variantStyle !== "up" && (i += "-" + t.variantStyle), i;
}
new P4();
function O4(e, t) {
  return e.map((i) => i._serialize(t));
}
function I4(e, t) {
  return ei(e, "fontShape").map((i) => {
    let r = O4(i, t), { fontShape: n } = i[0].style, a = "";
    return n === "it" && (a = "\\textit"), n === "sl" && (a = "\\textsl"), n === "sc" && (a = "\\textsc"), n === "n" && (a = "\\textup"), !a && n ? `{${Z("\\fontshape", n)}${R(r)}}` : a ? Z(a, R(r)) : R(r);
  });
}
function R4(e, t) {
  return ei(e, "fontSeries").map((i) => {
    let r = I4(i, t), { fontSeries: n } = i[0].style, a = "";
    return n === "b" && (a = "\\textbf"), n === "l" && (a = "\\textlf"), n === "m" && (a = "\\textmd"), n && !a ? `{${Z("\\fontseries", n)}${R(r)}}` : a ? Z(a, R(r)) : R(r);
  });
}
function q4(e, t) {
  return ei(e, "fontSize").map((i) => {
    var r, n;
    let a = R4(i, t), o = (n = ["", "\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"][(r = i[0].style.fontSize) != null ? r : ""]) != null ? n : "";
    return o ? `${o} ${R(a)}` : R(a);
  });
}
function j4(e, t, i) {
  return ei(e, "fontFamily").map((r) => {
    var n, a;
    let o = q4(r, t), s = (a = { roman: "textrm", monospace: "texttt", "sans-serif": "textsf" }[(n = r[0].style.fontFamily) != null ? n : ""]) != null ? a : "";
    return s ? `\\${s}{${R(o)}}` : r[0].style.fontFamily ? `{\\fontfamily{${r[0].style.fontFamily}} ${R(o)}}` : i ? `\\text{${R(o)}}` : R(o);
  });
}
var zd = { roman: "", "sans-serif": "ML__sans", monospace: "ML__tt" }, V4 = class extends De {
  constructor() {
    super("text");
  }
  createAtom(e, t, i) {
    return t && t.definitionType === "symbol" ? new Ln(e, String.fromCodePoint(t.codepoint), i ?? {}) : null;
  }
  serialize(e, t) {
    return j4(e, b(f({}, t), { defaultMode: "text" }), t.defaultMode !== "text");
  }
  getFont(e, t) {
    var i, r, n, a, o;
    let { fontFamily: s } = t;
    if (zd[s] ? e.classes += " " + zd[s] : s && e.setStyle("font-family", s), t.fontShape && (e.classes += " ", e.classes += (i = { it: "ML__it", sl: "ML__shape_sl", sc: "ML__shape_sc", ol: "ML__shape_ol" }[t.fontShape]) != null ? i : ""), t.fontSeries) {
      let l = t.fontSeries.match(/(.?[lbm])?(.?[cx])?/);
      l && (e.classes += " ", e.classes += (n = { ul: "ML__series_ul", el: "ML__series_el", l: "ML__series_l", sl: "ML__series_sl", m: "", sb: "ML__series_sb", b: "ML__bold", eb: "ML__series_eb", ub: "ML__series_ub" }[(r = l[1]) != null ? r : ""]) != null ? n : "", e.classes += " ", e.classes += (o = { uc: "ML__series_uc", ec: "ML__series_ec", c: "ML__series_c", sc: "ML__series_sc", n: "", sx: "ML__series_sx", x: "ML__series_x", ex: "ML__series_ex", ux: "ML__series_ux" }[(a = l[2]) != null ? a : ""]) != null ? o : "");
    }
    return "Main-Regular";
  }
};
new V4();
var H4 = class extends De {
  constructor() {
    super("latex");
  }
  createAtom(e) {
    return new ce(e);
  }
  serialize(e, t) {
    return e.filter((i) => i instanceof ce && !i.isSuggestion).map((i) => i.value);
  }
  getFont() {
    return null;
  }
};
new H4();
var W4 = { id: "dvorak", locale: "en", displayName: "Dvorak", virtualLayout: "dvorak", platform: "", score: 0, mapping: { KeyA: ["a", "A", "å", "Å"], KeyB: ["x", "X", "≈", "˛"], KeyC: ["j", "J", "∆", "Ô"], KeyD: ["e", "E", "´", "´"], KeyE: [".", ">", "≥", "˘"], KeyF: ["u", "U", "¨", "¨"], KeyG: ["i", "I", "ˆ", "ˆ"], KeyH: ["d", "D", "∂", "Î"], KeyI: ["c", "C", "ç", "Ç"], KeyJ: ["h", "H", "˙", "Ó"], KeyK: ["t", "T", "†", "ˇ"], KeyL: ["n", "N", "˜", "˜"], KeyM: ["m", "M", "µ", "Â"], KeyN: ["b", "B", "∫", "ı"], KeyO: ["r", "R", "®", "‰"], KeyP: ["l", "L", "¬", "Ò"], KeyQ: ["'", '"', "æ", "Æ"], KeyR: ["p", "P", "π", "∏"], KeyS: ["o", "O", "ø", "Ø"], KeyT: ["y", "Y", "¥", "Á"], KeyU: ["g", "G", "©", "˝"], KeyV: ["k", "K", "˚", ""], KeyW: [",", "<", "≤", "¯"], KeyX: ["q", "Q", "œ", "Œ"], KeyY: ["f", "F", "ƒ", "Ï"], KeyZ: [";", ":", "…", "Ú"], Digit1: ["1", "!", "¡", "⁄"], Digit2: ["2", "@", "™", "€"], Digit3: ["3", "#", "£", "‹"], Digit4: ["4", "$", "¢", "›"], Digit5: ["5", "%", "∞", "ﬁ"], Digit6: ["6", "^", "§", "ﬂ"], Digit7: ["7", "&", "¶", "‡"], Digit8: ["8", "*", "•", "°"], Digit9: ["9", "(", "ª", "·"], Digit0: ["0", ")", "º", "‚"], Space: [" ", " ", " ", " "], Minus: ["[", "{", "“", "”"], Equal: ["]", "}", "‘", "’"], BracketLeft: ["/", "?", "÷", "¿"], BracketRight: ["=", "+", "≠", "±"], Backslash: ["\\", "|", "«", "»"], Semicolon: ["s", "S", "ß", "Í"], Quote: ["-", "_", "–", "—"], Backquote: ["`", "~", "`", "`"], Comma: ["w", "W", "∑", "„"], Period: ["v", "V", "√", "◊"], Slash: ["z", "Z", "Ω", "¸"], NumpadDivide: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], Numpad1: ["1", "1", "1", "1"], Numpad2: ["2", "2", "2", "2"], Numpad3: ["3", "3", "3", "3"], Numpad4: ["4", "4", "4", "4"], Numpad5: ["5", "5", "5", "5"], Numpad6: ["6", "6", "6", "6"], Numpad7: ["7", "7", "7", "7"], Numpad8: ["8", "8", "8", "8"], Numpad9: ["9", "9", "9", "9"], Numpad0: ["0", "0", "0", "0"], NumpadDecimal: [".", ".", ".", "."], IntlBackslash: ["§", "±", "§", "±"], NumpadEqual: ["=", "=", "=", "="], AudioVolumeUp: ["", "=", "", "="] } }, ll = { id: "apple.en-intl", displayName: "English (international)", virtualLayout: "qwerty", platform: "apple", locale: "en", score: 0, mapping: { KeyA: ["a", "A", "å", "Å"], KeyB: ["b", "B", "∫", "ı"], KeyC: ["c", "C", "ç", "Ç"], KeyD: ["d", "D", "∂", "Î"], KeyE: ["e", "E", "´", "´"], KeyF: ["f", "F", "ƒ", "Ï"], KeyG: ["g", "G", "©", "˝"], KeyH: ["h", "H", "˙", "Ó"], KeyI: ["i", "I", "ˆ", "ˆ"], KeyJ: ["j", "J", "∆", "Ô"], KeyK: ["k", "K", "˚", ""], KeyL: ["l", "L", "¬", "Ò"], KeyM: ["m", "M", "µ", "Â"], KeyN: ["n", "N", "˜", "˜"], KeyO: ["o", "O", "ø", "Ø"], KeyP: ["p", "P", "π", "∏"], KeyQ: ["q", "Q", "œ", "Œ"], KeyR: ["r", "R", "®", "‰"], KeyS: ["s", "S", "ß", "Í"], KeyT: ["t", "T", "†", "ˇ"], KeyU: ["u", "U", "¨", "¨"], KeyV: ["v", "V", "√", "◊"], KeyW: ["w", "W", "∑", "„"], KeyX: ["x", "X", "≈", "˛"], KeyY: ["y", "Y", "¥", "Á"], KeyZ: ["z", "Z", "Ω", "¸"], Digit1: ["1", "!", "¡", "⁄"], Digit2: ["2", "@", "™", "€"], Digit3: ["3", "#", "£", "‹"], Digit4: ["4", "$", "¢", "›"], Digit5: ["5", "%", "∞", "ﬁ"], Digit6: ["6", "^", "§", "ﬂ"], Digit7: ["7", "&", "¶", "‡"], Digit8: ["8", "*", "•", "°"], Digit9: ["9", "(", "ª", "·"], Digit0: ["0", ")", "º", "‚"], Space: [" ", " ", " ", " "], Minus: ["-", "_", "–", "—"], Equal: ["=", "+", "≠", "±"], BracketLeft: ["[", "{", "“", "”"], BracketRight: ["]", "}", "‘", "’"], Backslash: ["\\", "|", "«", "»"], Semicolon: [";", ":", "…", "Ú"], Quote: ["'", '"', "æ", "Æ"], Backquote: ["`", "˜", "`", "`"], Comma: [",", "<", "≤", "¯"], Period: [".", ">", "≥", "˘"], Slash: ["/", "?", "÷", "¿"], NumpadDivide: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], Numpad1: ["1", "1", "1", "1"], Numpad2: ["2", "2", "2", "2"], Numpad3: ["3", "3", "3", "3"], Numpad4: ["4", "4", "4", "4"], Numpad5: ["5", "5", "5", "5"], Numpad6: ["6", "6", "6", "6"], Numpad7: ["7", "7", "7", "7"], Numpad8: ["8", "8", "8", "8"], Numpad9: ["9", "9", "9", "9"], Numpad0: ["0", "0", "0", "0"], NumpadDecimal: [".", ".", ".", "."], IntlBackslash: ["§", "±", "§", "±"], NumpadEqual: ["=", "=", "=", "="], AudioVolumeUp: ["", "=", "", "="] } }, wm = { id: "windows.en-intl", displayName: "English (international)", platform: "windows", virtualLayout: "qwerty", locale: "en", score: 0, mapping: { KeyA: ["a", "A", "á", "Á"], KeyB: ["b", "B", "", ""], KeyC: ["c", "C", "©", "¢"], KeyD: ["d", "D", "ð", "Ð"], KeyE: ["e", "E", "é", "É"], KeyF: ["f", "F", "", ""], KeyG: ["g", "G", "", ""], KeyH: ["h", "H", "", ""], KeyI: ["i", "I", "í", "Í"], KeyJ: ["j", "J", "", ""], KeyK: ["k", "K", "", ""], KeyL: ["l", "L", "ø", "Ø"], KeyM: ["m", "M", "µ", ""], KeyN: ["n", "N", "ñ", "Ñ"], KeyO: ["o", "O", "ó", "Ó"], KeyP: ["p", "P", "ö", "Ö"], KeyQ: ["q", "Q", "ä", "Ä"], KeyR: ["r", "R", "®", ""], KeyS: ["s", "S", "ß", "§"], KeyT: ["t", "T", "þ", "Þ"], KeyU: ["u", "U", "ú", "Ú"], KeyV: ["v", "V", "", ""], KeyW: ["w", "W", "å", "Å"], KeyX: ["x", "X", "", ""], KeyY: ["y", "Y", "ü", "Ü"], KeyZ: ["z", "Z", "æ", "Æ"], Digit1: ["1", "!", "¡", "¹"], Digit2: ["2", "@", "²", ""], Digit3: ["3", "#", "³", ""], Digit4: ["4", "$", "¤", "£"], Digit5: ["5", "%", "€", ""], Digit6: ["6", "^", "¼", ""], Digit7: ["7", "&", "½", ""], Digit8: ["8", "*", "¾", ""], Digit9: ["9", "(", "‘", ""], Digit0: ["0", ")", "’", ""], Space: [" ", " ", "", ""], Minus: ["-", "_", "¥", ""], Equal: ["=", "+", "×", "÷"], BracketLeft: ["[", "{", "«", ""], BracketRight: ["]", "}", "»", ""], Backslash: ["\\", "|", "¬", "¦"], Semicolon: [";", ":", "¶", "°"], Quote: ["'", '"', "´", "¨"], Backquote: ["`", "~", "", ""], Comma: [",", "<", "ç", "Ç"], Period: [".", ">", "", ""], Slash: ["/", "?", "¿", ""], NumpadDivide: ["/", "/", "", ""], NumpadMultiply: ["*", "*", "", ""], NumpadSubtract: ["-", "-", "", ""], NumpadAdd: ["+", "+", "", ""], IntlBackslash: ["\\", "|", "", ""] } }, km = { id: "linux.en", displayName: "English", platform: "linux", virtualLayout: "qwerty", locale: "en", score: 0, mapping: { KeyA: ["a", "A", "a", "A"], KeyB: ["b", "B", "b", "B"], KeyC: ["c", "C", "c", "C"], KeyD: ["d", "D", "d", "D"], KeyE: ["e", "E", "e", "E"], KeyF: ["f", "F", "f", "F"], KeyG: ["g", "G", "g", "G"], KeyH: ["h", "H", "h", "H"], KeyI: ["i", "I", "i", "I"], KeyJ: ["j", "J", "j", "J"], KeyK: ["k", "K", "k", "K"], KeyL: ["l", "L", "l", "L"], KeyM: ["m", "M", "m", "M"], KeyN: ["n", "N", "n", "N"], KeyO: ["o", "O", "o", "O"], KeyP: ["p", "P", "p", "P"], KeyQ: ["q", "Q", "q", "Q"], KeyR: ["r", "R", "r", "R"], KeyS: ["s", "S", "s", "S"], KeyT: ["t", "T", "t", "T"], KeyU: ["u", "U", "u", "U"], KeyV: ["v", "V", "v", "V"], KeyW: ["w", "W", "w", "W"], KeyX: ["x", "X", "x", "X"], KeyY: ["y", "Y", "y", "Y"], KeyZ: ["z", "Z", "z", "Z"], Digit1: ["1", "!", "1", "!"], Digit2: ["2", "@", "2", "@"], Digit3: ["3", "#", "3", "#"], Digit4: ["4", "$", "4", "$"], Digit5: ["5", "%", "5", "%"], Digit6: ["6", "^", "6", "^"], Digit7: ["7", "&", "7", "&"], Digit8: ["8", "*", "8", "*"], Digit9: ["9", "(", "9", "("], Digit0: ["0", ")", "0", ")"], Space: [" ", " ", " ", " "], Minus: ["-", "_", "-", "_"], Equal: ["=", "+", "=", "+"], BracketLeft: ["[", "{", "[", "{"], BracketRight: ["]", "}", "]", "}"], Backslash: ["\\", "|", "\\", "|"], Semicolon: [";", ":", ";", ":"], Quote: ["'", '"', "'", '"'], Backquote: ["`", "~", "`", "~"], Comma: [",", "<", ",", "<"], Period: [".", ">", ".", ">"], Slash: ["/", "?", "/", "?"], NumpadDivide: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], Numpad1: ["1", "1", "1", "1"], Numpad2: ["2", "2", "2", "2"], Numpad3: ["3", "3", "3", "3"], Numpad4: ["4", "4", "4", "4"], Numpad5: ["5", "5", "5", "5"], Numpad6: ["6", "6", "6", "6"], Numpad7: ["7", "7", "7", "7"], Numpad8: ["8", "8", "8", "8"], Numpad9: ["9", "9", "9", "9"], Numpad0: ["0", "0", "0", "0"], NumpadDecimal: ["", ".", "", "."], IntlBackslash: ["<", ">", "|", "¦"], NumpadEqual: ["=", "=", "=", "="], NumpadComma: [".", ".", ".", "."], NumpadParenLeft: ["(", "(", "(", "("], NumpadParenRight: [")", ")", ")", ")"] } }, U4 = { id: "apple.french", locale: "fr", displayName: "French", platform: "apple", virtualLayout: "azerty", score: 0, mapping: { KeyA: ["q", "Q", "‡", "Ω"], KeyB: ["b", "B", "ß", "∫"], KeyC: ["c", "C", "©", "¢"], KeyD: ["d", "D", "∂", "∆"], KeyE: ["e", "E", "ê", "Ê"], KeyF: ["f", "F", "ƒ", "·"], KeyG: ["g", "G", "ﬁ", "ﬂ"], KeyH: ["h", "H", "Ì", "Î"], KeyI: ["i", "I", "î", "ï"], KeyJ: ["j", "J", "Ï", "Í"], KeyK: ["k", "K", "È", "Ë"], KeyL: ["l", "L", "¬", "|"], KeyM: [",", "?", "∞", "¿"], KeyN: ["n", "N", "~", "ı"], KeyO: ["o", "O", "œ", "Œ"], KeyP: ["p", "P", "π", "∏"], KeyQ: ["a", "A", "æ", "Æ"], KeyR: ["r", "R", "®", "‚"], KeyS: ["s", "S", "Ò", "∑"], KeyT: ["t", "T", "†", "™"], KeyU: ["u", "U", "º", "ª"], KeyV: ["v", "V", "◊", "√"], KeyW: ["z", "Z", "Â", "Å"], KeyX: ["x", "X", "≈", "⁄"], KeyY: ["y", "Y", "Ú", "Ÿ"], KeyZ: ["w", "W", "‹", "›"], Digit1: ["&", "1", "", "´"], Digit2: ["é", "2", "ë", "„"], Digit3: ['"', "3", "“", "”"], Digit4: ["'", "4", "‘", "’"], Digit5: ["(", "5", "{", "["], Digit6: ["§", "6", "¶", "å"], Digit7: ["è", "7", "«", "»"], Digit8: ["!", "8", "¡", "Û"], Digit9: ["ç", "9", "Ç", "Á"], Digit0: ["à", "0", "ø", "Ø"], Space: [" ", " ", " ", " "], Minus: [")", "°", "}", "]"], Equal: ["-", "_", "—", "–"], BracketLeft: ["^", "¨", "ô", "Ô"], BracketRight: ["$", "*", "€", "¥"], Backslash: ["`", "£", "@", "#"], Semicolon: ["m", "M", "µ", "Ó"], Quote: ["ù", "%", "Ù", "‰"], Backquote: ["<", ">", "≤", "≥"], Comma: [";", ".", "…", "•"], Period: [":", "/", "÷", "\\"], Slash: ["=", "+", "≠", "±"], NumpadDivide: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], NumpadDecimal: [",", ".", ",", "."], IntlBackslash: ["@", "#", "•", "Ÿ"], NumpadEqual: ["=", "=", "=", "="] } }, J4 = { id: "windows.french", locale: "fr", displayName: "French", virtualLayout: "azerty", platform: "windows", score: 0, mapping: { KeyA: ["q", "Q", "", ""], KeyB: ["b", "B", "", ""], KeyC: ["c", "C", "", ""], KeyD: ["d", "D", "", ""], KeyE: ["e", "E", "€", ""], KeyF: ["f", "F", "", ""], KeyG: ["g", "G", "", ""], KeyH: ["h", "H", "", ""], KeyI: ["i", "I", "", ""], KeyJ: ["j", "J", "", ""], KeyK: ["k", "K", "", ""], KeyL: ["l", "L", "", ""], KeyM: [",", "?", "", ""], KeyN: ["n", "N", "", ""], KeyO: ["o", "O", "", ""], KeyP: ["p", "P", "", ""], KeyQ: ["a", "A", "", ""], KeyR: ["r", "R", "", ""], KeyS: ["s", "S", "", ""], KeyT: ["t", "T", "", ""], KeyU: ["u", "U", "", ""], KeyV: ["v", "V", "", ""], KeyW: ["z", "Z", "", ""], KeyX: ["x", "X", "", ""], KeyY: ["y", "Y", "", ""], KeyZ: ["w", "W", "", ""], Digit1: ["&", "1", "", ""], Digit2: ["é", "2", "~", ""], Digit3: ['"', "3", "#", ""], Digit4: ["'", "4", "{", ""], Digit5: ["(", "5", "[", ""], Digit6: ["-", "6", "|", ""], Digit7: ["è", "7", "`", ""], Digit8: ["_", "8", "\\", ""], Digit9: ["ç", "9", "^", ""], Digit0: ["à", "0", "@", ""], Space: [" ", " ", "", ""], Minus: [")", "°", "]", ""], Equal: ["=", "+", "}", ""], BracketLeft: ["^", "¨", "", ""], BracketRight: ["$", "£", "¤", ""], Backslash: ["*", "µ", "", ""], Semicolon: ["m", "M", "", ""], Quote: ["ù", "%", "", ""], Backquote: ["²", "", "", ""], Comma: [";", ".", "", ""], Period: [":", "/", "", ""], Slash: ["!", "§", "", ""], NumpadDivide: ["/", "/", "", ""], NumpadMultiply: ["*", "*", "", ""], NumpadSubtract: ["-", "-", "", ""], NumpadAdd: ["+", "+", "", ""], IntlBackslash: ["<", ">", "", ""] } }, X4 = { id: "linux.french", locale: "fr", displayName: "French", virtualLayout: "azerty", platform: "linux", score: 0, mapping: { KeyA: ["q", "Q", "@", "Ω"], KeyB: ["b", "B", "”", "’"], KeyC: ["c", "C", "¢", "©"], KeyD: ["d", "D", "ð", "Ð"], KeyE: ["e", "E", "€", "¢"], KeyF: ["f", "F", "đ", "ª"], KeyG: ["g", "G", "ŋ", "Ŋ"], KeyH: ["h", "H", "ħ", "Ħ"], KeyI: ["i", "I", "→", "ı"], KeyJ: ["j", "J", "̉", "̛"], KeyK: ["k", "K", "ĸ", "&"], KeyL: ["l", "L", "ł", "Ł"], KeyM: [",", "?", "́", "̋"], KeyN: ["n", "N", "n", "N"], KeyO: ["o", "O", "ø", "Ø"], KeyP: ["p", "P", "þ", "Þ"], KeyQ: ["a", "A", "æ", "Æ"], KeyR: ["r", "R", "¶", "®"], KeyS: ["s", "S", "ß", "§"], KeyT: ["t", "T", "ŧ", "Ŧ"], KeyU: ["u", "U", "↓", "↑"], KeyV: ["v", "V", "“", "‘"], KeyW: ["z", "Z", "«", "<"], KeyX: ["x", "X", "»", ">"], KeyY: ["y", "Y", "←", "¥"], KeyZ: ["w", "W", "ł", "Ł"], Digit1: ["&", "1", "¹", "¡"], Digit2: ["é", "2", "~", "⅛"], Digit3: ['"', "3", "#", "£"], Digit4: ["'", "4", "{", "$"], Digit5: ["(", "5", "[", "⅜"], Digit6: ["-", "6", "|", "⅝"], Digit7: ["è", "7", "`", "⅞"], Digit8: ["_", "8", "\\", "™"], Digit9: ["ç", "9", "^", "±"], Digit0: ["à", "0", "@", "°"], Enter: ["\r", "\r", "\r", "\r"], Escape: ["\x1B", "\x1B", "\x1B", "\x1B"], Backspace: ["\b", "\b", "\b", "\b"], Tab: ["	", "", "	", ""], Space: [" ", " ", " ", " "], Minus: [")", "°", "]", "¿"], Equal: ["=", "+", "}", "̨"], BracketLeft: ["̂", "̈", "̈", "̊"], BracketRight: ["$", "£", "¤", "̄"], Backslash: ["*", "µ", "̀", "̆"], Semicolon: ["m", "M", "µ", "º"], Quote: ["ù", "%", "̂", "̌"], Backquote: ["²", "~", "¬", "¬"], Comma: [";", ".", "─", "×"], Period: [":", "/", "·", "÷"], Slash: ["!", "§", "̣", "̇"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], NumpadDecimal: ["", ".", "", "."], IntlBackslash: ["<", ">", "|", "¦"] } }, G4 = { id: "apple.german", locale: "de", displayName: "German", virtualLayout: "qwertz", platform: "apple", score: 0, mapping: { KeyA: ["a", "A", "å", "Å"], KeyB: ["b", "B", "∫", "‹"], KeyC: ["c", "C", "ç", "Ç"], KeyD: ["d", "D", "∂", "™"], KeyE: ["e", "E", "€", "‰"], KeyF: ["f", "F", "ƒ", "Ï"], KeyG: ["g", "G", "©", "Ì"], KeyH: ["h", "H", "ª", "Ó"], KeyI: ["i", "I", "⁄", "Û"], KeyJ: ["j", "J", "º", "ı"], KeyK: ["k", "K", "∆", "ˆ"], KeyL: ["l", "L", "@", "ﬂ"], KeyM: ["m", "M", "µ", "˘"], KeyN: ["n", "N", "~", "›"], KeyO: ["o", "O", "ø", "Ø"], KeyP: ["p", "P", "π", "∏"], KeyQ: ["q", "Q", "«", "»"], KeyR: ["r", "R", "®", "¸"], KeyS: ["s", "S", "‚", "Í"], KeyT: ["t", "T", "†", "˝"], KeyU: ["u", "U", "¨", "Á"], KeyV: ["v", "V", "√", "◊"], KeyW: ["w", "W", "∑", "„"], KeyX: ["x", "X", "≈", "Ù"], KeyY: ["z", "Z", "Ω", "ˇ"], KeyZ: ["y", "Y", "¥", "‡"], Digit1: ["1", "!", "¡", "¬"], Digit2: ["2", '"', "“", "”"], Digit3: ["3", "§", "¶", "#"], Digit4: ["4", "$", "¢", "£"], Digit5: ["5", "%", "[", "ﬁ"], Digit6: ["6", "&", "]", "^"], Digit7: ["7", "/", "|", "\\"], Digit8: ["8", "(", "{", "˜"], Digit9: ["9", ")", "}", "·"], Digit0: ["0", "=", "≠", "¯"], Space: [" ", " ", " ", " "], Minus: ["ß", "?", "¿", "˙"], Equal: ["´", "`", "'", "˚"], BracketLeft: ["ü", "Ü", "•", "°"], BracketRight: ["+", "*", "±", ""], Backslash: ["#", "'", "‘", "’"], Semicolon: ["ö", "Ö", "œ", "Œ"], Quote: ["ä", "Ä", "æ", "Æ"], Backquote: ["<", ">", "≤", "≥"], Comma: [",", ";", "∞", "˛"], Period: [".", ":", "…", "÷"], Slash: ["-", "_", "–", "—"], NumpadDivide: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], NumpadDecimal: [",", ",", ".", "."], IntlBackslash: ["^", "°", "„", "“"], NumpadEqual: ["=", "=", "=", "="] } }, Z4 = { id: "windows.german", locale: "de", displayName: "German", platform: "windows", virtualLayout: "qwertz", score: 0, mapping: { KeyA: ["a", "A", "", ""], KeyB: ["b", "B", "", ""], KeyC: ["c", "C", "", ""], KeyD: ["d", "D", "", ""], KeyE: ["e", "E", "€", ""], KeyF: ["f", "F", "", ""], KeyG: ["g", "G", "", ""], KeyH: ["h", "H", "", ""], KeyI: ["i", "I", "", ""], KeyJ: ["j", "J", "", ""], KeyK: ["k", "K", "", ""], KeyL: ["l", "L", "", ""], KeyM: ["m", "M", "µ", ""], KeyN: ["n", "N", "", ""], KeyO: ["o", "O", "", ""], KeyP: ["p", "P", "", ""], KeyQ: ["q", "Q", "@", ""], KeyR: ["r", "R", "", ""], KeyS: ["s", "S", "", ""], KeyT: ["t", "T", "", ""], KeyU: ["u", "U", "", ""], KeyV: ["v", "V", "", ""], KeyW: ["w", "W", "", ""], KeyX: ["x", "X", "", ""], KeyY: ["z", "Z", "", ""], KeyZ: ["y", "Y", "", ""], Digit1: ["1", "!", "", ""], Digit2: ["2", '"', "²", ""], Digit3: ["3", "§", "³", ""], Digit4: ["4", "$", "", ""], Digit5: ["5", "%", "", ""], Digit6: ["6", "&", "", ""], Digit7: ["7", "/", "{", ""], Digit8: ["8", "(", "[", ""], Digit9: ["9", ")", "]", ""], Digit0: ["0", "=", "}", ""], Space: [" ", " ", "", ""], Minus: ["ß", "?", "\\", "ẞ"], Equal: ["´", "`", "", ""], BracketLeft: ["ü", "Ü", "", ""], BracketRight: ["+", "*", "~", ""], Backslash: ["#", "'", "", ""], Semicolon: ["ö", "Ö", "", ""], Quote: ["ä", "Ä", "", ""], Backquote: ["^", "°", "", ""], Comma: [",", ";", "", ""], Period: [".", ":", "", ""], Slash: ["-", "_", "", ""], NumpadDivide: ["/", "/", "", ""], NumpadMultiply: ["*", "*", "", ""], NumpadSubtract: ["-", "-", "", ""], NumpadAdd: ["+", "+", "", ""], IntlBackslash: ["<", ">", "|", ""] } }, Y4 = { id: "linux.german", locale: "de", displayName: "German", platform: "windows", virtualLayout: "qwertz", score: 0, mapping: { KeyA: ["a", "A", "æ", "Æ"], KeyB: ["b", "B", "“", "‘"], KeyC: ["c", "C", "¢", "©"], KeyD: ["d", "D", "ð", "Ð"], KeyE: ["e", "E", "€", "€"], KeyF: ["f", "F", "đ", "ª"], KeyG: ["g", "G", "ŋ", "Ŋ"], KeyH: ["h", "H", "ħ", "Ħ"], KeyI: ["i", "I", "→", "ı"], KeyJ: ["j", "J", "̣", "̇"], KeyK: ["k", "K", "ĸ", "&"], KeyL: ["l", "L", "ł", "Ł"], KeyM: ["m", "M", "µ", "º"], KeyN: ["n", "N", "”", "’"], KeyO: ["o", "O", "ø", "Ø"], KeyP: ["p", "P", "þ", "Þ"], KeyQ: ["q", "Q", "@", "Ω"], KeyR: ["r", "R", "¶", "®"], KeyS: ["s", "S", "ſ", "ẞ"], KeyT: ["t", "T", "ŧ", "Ŧ"], KeyU: ["u", "U", "↓", "↑"], KeyV: ["v", "V", "„", "‚"], KeyW: ["w", "W", "ł", "Ł"], KeyX: ["x", "X", "«", "‹"], KeyY: ["z", "Z", "←", "¥"], KeyZ: ["y", "Y", "»", "›"], Digit1: ["1", "!", "¹", "¡"], Digit2: ["2", '"', "²", "⅛"], Digit3: ["3", "§", "³", "£"], Digit4: ["4", "$", "¼", "¤"], Digit5: ["5", "%", "½", "⅜"], Digit6: ["6", "&", "¬", "⅝"], Digit7: ["7", "/", "{", "⅞"], Digit8: ["8", "(", "[", "™"], Digit9: ["9", ")", "]", "±"], Digit0: ["0", "=", "}", "°"], Enter: ["\r", "\r", "\r", "\r"], Escape: ["\x1B", "\x1B", "\x1B", "\x1B"], Backspace: ["\b", "\b", "\b", "\b"], Tab: ["	", "", "	", ""], Space: [" ", " ", " ", " "], Minus: ["ß", "?", "\\", "¿"], Equal: ["́", "̀", "̧", "̨"], BracketLeft: ["ü", "Ü", "̈", "̊"], BracketRight: ["+", "*", "~", "¯"], Backslash: ["#", "'", "’", "̆"], Semicolon: ["ö", "Ö", "̋", "̣"], Quote: ["ä", "Ä", "̂", "̌"], Backquote: ["̂", "°", "′", "″"], Comma: [",", ";", "·", "×"], Period: [".", ":", "…", "÷"], Slash: ["-", "_", "–", "—"], PrintScreen: ["", "", "", ""], PageUp: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], Numpad1: ["", "1", "", "1"], Numpad2: ["", "2", "", "2"], Numpad3: ["", "3", "", "3"], Numpad4: ["", "4", "", "4"], Numpad5: ["", "5", "", "5"], Numpad6: ["", "6", "", "6"], Numpad7: ["", "7", "", "7"], Numpad8: ["", "8", "", "8"], Numpad9: ["", "9", "", "9"], Numpad0: ["", "0", "", "0"], NumpadDecimal: ["", ",", "", ","], IntlBackslash: ["<", ">", "|", "̱"], AltRight: ["\r", "\r", "\r", "\r"], MetaRight: [".", ".", ".", "."] } }, Q4 = { id: "apple.spanish", locale: "es", displayName: "Spanish ISO", platform: "apple", virtualLayout: "qwerty", score: 0, mapping: { KeyA: ["a", "A", "å", "Å"], KeyB: ["b", "B", "ß", ""], KeyC: ["c", "C", "©", " "], KeyD: ["d", "D", "∂", "∆"], KeyE: ["e", "E", "€", "€"], KeyF: ["f", "F", "ƒ", "ﬁ"], KeyG: ["g", "G", "", "ﬂ"], KeyH: ["h", "H", "™", " "], KeyI: ["i", "I", " ", " "], KeyJ: ["j", "J", "¶", "¯"], KeyK: ["k", "K", "§", "ˇ"], KeyL: ["l", "L", " ", "˘"], KeyM: ["m", "M", "µ", "˚"], KeyN: ["n", "N", " ", "˙"], KeyO: ["o", "O", "ø", "Ø"], KeyP: ["p", "P", "π", "∏"], KeyQ: ["q", "Q", "œ", "Œ"], KeyR: ["r", "R", "®", " "], KeyS: ["s", "S", "∫", " "], KeyT: ["t", "T", "†", "‡"], KeyU: ["u", "U", " ", " "], KeyV: ["v", "V", "√", "◊"], KeyW: ["w", "W", "æ", "Æ"], KeyX: ["x", "X", "∑", "›"], KeyY: ["y", "Y", "¥", " "], KeyZ: ["z", "Z", "Ω", "‹"], Digit1: ["1", "!", "|", "ı"], Digit2: ["2", '"', "@", "˝"], Digit3: ["3", "·", "#", "•"], Digit4: ["4", "$", "¢", "£"], Digit5: ["5", "%", "∞", "‰"], Digit6: ["6", "&", "¬", " "], Digit7: ["7", "/", "÷", "⁄"], Digit8: ["8", "(", "“", "‘"], Digit9: ["9", ")", "”", "’"], Digit0: ["0", "=", "≠", "≈"], Space: [" ", " ", " ", " "], Minus: ["'", "?", "´", "¸"], Equal: ["¡", "¿", "‚", "˛"], BracketLeft: ["`", "^", "[", "ˆ"], BracketRight: ["+", "*", "]", "±"], Backslash: ["ç", "Ç", "}", "»"], Semicolon: ["ñ", "Ñ", "~", "˜"], Quote: ["´", "¨", "{", "«"], Backquote: ["<", ">", "≤", "≥"], Comma: [",", ";", "„", ""], Period: [".", ":", "…", "…"], Slash: ["-", "_", "–", "—"], NumpadDivide: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], Numpad1: ["1", "1", "1", "1"], Numpad2: ["2", "2", "2", "2"], Numpad3: ["3", "3", "3", "3"], Numpad4: ["4", "4", "4", "4"], Numpad5: ["5", "5", "5", "5"], Numpad6: ["6", "6", "6", "6"], Numpad7: ["7", "7", "7", "7"], Numpad8: ["8", "8", "8", "8"], Numpad9: ["9", "9", "9", "9"], Numpad0: ["0", "0", "0", "0"], NumpadDecimal: [",", ",", ",", ","], IntlBackslash: ["º", "ª", "\\", "°"] } }, e3 = { id: "windows.spanish", locale: "es", displayName: "Spanish", platform: "windows", virtualLayout: "qwerty", score: 0, mapping: { KeyA: ["a", "A", "", ""], KeyB: ["b", "B", "", ""], KeyC: ["c", "C", "", ""], KeyD: ["d", "D", "", ""], KeyE: ["e", "E", "€", ""], KeyF: ["f", "F", "", ""], KeyG: ["g", "G", "", ""], KeyH: ["h", "H", "", ""], KeyI: ["i", "I", "", ""], KeyJ: ["j", "J", "", ""], KeyK: ["k", "K", "", ""], KeyL: ["l", "L", "", ""], KeyM: ["m", "M", "", ""], KeyN: ["n", "N", "", ""], KeyO: ["o", "O", "", ""], KeyP: ["p", "P", "", ""], KeyQ: ["q", "Q", "", ""], KeyR: ["r", "R", "", ""], KeyS: ["s", "S", "", ""], KeyT: ["t", "T", "", ""], KeyU: ["u", "U", "", ""], KeyV: ["v", "V", "", ""], KeyW: ["w", "W", "", ""], KeyX: ["x", "X", "", ""], KeyY: ["y", "Y", "", ""], KeyZ: ["z", "Z", "", ""], Digit1: ["1", "!", "|", ""], Digit2: ["2", '"', "@", ""], Digit3: ["3", "·", "#", ""], Digit4: ["4", "$", "~", ""], Digit5: ["5", "%", "€", ""], Digit6: ["6", "&", "¬", ""], Digit7: ["7", "/", "", ""], Digit8: ["8", "(", "", ""], Digit9: ["9", ")", "", ""], Digit0: ["0", "=", "", ""], Space: [" ", " ", "", ""], Minus: ["'", "?", "", ""], Equal: ["¡", "¿", "", ""], BracketLeft: ["`", "^", "[", ""], BracketRight: ["+", "*", "]", ""], Backslash: ["ç", "Ç", "}", ""], Semicolon: ["ñ", "Ñ", "", ""], Quote: ["´", "¨", "{", ""], Backquote: ["º", "ª", "\\", ""], Comma: [",", ";", "", ""], Period: [".", ":", "", ""], Slash: ["-", "_", "", ""], NumpadDivide: ["/", "/", "", ""], NumpadMultiply: ["*", "*", "", ""], NumpadSubtract: ["-", "-", "", ""], NumpadAdd: ["+", "+", "", ""], IntlBackslash: ["<", ">", "", ""] } }, t3 = { id: "linux.spanish", locale: "es", displayName: "Spanish", platform: "linux", virtualLayout: "qwerty", score: 0, mapping: { KeyA: ["a", "A", "æ", "Æ"], KeyB: ["b", "B", "”", "’"], KeyC: ["c", "C", "¢", "©"], KeyD: ["d", "D", "ð", "Ð"], KeyE: ["e", "E", "€", "¢"], KeyF: ["f", "F", "đ", "ª"], KeyG: ["g", "G", "ŋ", "Ŋ"], KeyH: ["h", "H", "ħ", "Ħ"], KeyI: ["i", "I", "→", "ı"], KeyJ: ["j", "J", "̉", "̛"], KeyK: ["k", "K", "ĸ", "&"], KeyL: ["l", "L", "ł", "Ł"], KeyM: ["m", "M", "µ", "º"], KeyN: ["n", "N", "n", "N"], KeyO: ["o", "O", "ø", "Ø"], KeyP: ["p", "P", "þ", "Þ"], KeyQ: ["q", "Q", "@", "Ω"], KeyR: ["r", "R", "¶", "®"], KeyS: ["s", "S", "ß", "§"], KeyT: ["t", "T", "ŧ", "Ŧ"], KeyU: ["u", "U", "↓", "↑"], KeyV: ["v", "V", "“", "‘"], KeyW: ["w", "W", "ł", "Ł"], KeyX: ["x", "X", "»", ">"], KeyY: ["y", "Y", "←", "¥"], KeyZ: ["z", "Z", "«", "<"], Digit1: ["1", "!", "|", "¡"], Digit2: ["2", '"', "@", "⅛"], Digit3: ["3", "·", "#", "£"], Digit4: ["4", "$", "~", "$"], Digit5: ["5", "%", "½", "⅜"], Digit6: ["6", "&", "¬", "⅝"], Digit7: ["7", "/", "{", "⅞"], Digit8: ["8", "(", "[", "™"], Digit9: ["9", ")", "]", "±"], Digit0: ["0", "=", "}", "°"], Enter: ["\r", "\r", "\r", "\r"], Escape: ["\x1B", "\x1B", "\x1B", "\x1B"], Backspace: ["\b", "\b", "\b", "\b"], Tab: ["	", "", "	", ""], Space: [" ", " ", " ", " "], Minus: ["'", "?", "\\", "¿"], Equal: ["¡", "¿", "̃", "~"], BracketLeft: ["̀", "̂", "[", "̊"], BracketRight: ["+", "*", "]", "̄"], Backslash: ["ç", "Ç", "}", "̆"], Semicolon: ["ñ", "Ñ", "~", "̋"], Quote: ["́", "̈", "{", "{"], Backquote: ["º", "ª", "\\", "\\"], Comma: [",", ";", "─", "×"], Period: [".", ":", "·", "÷"], Slash: ["-", "_", "̣", "̇"], NumpadDivide: ["/", "/", "/", "/"], NumpadMultiply: ["*", "*", "*", "*"], NumpadSubtract: ["-", "-", "-", "-"], NumpadAdd: ["+", "+", "+", "+"], NumpadEnter: ["\r", "\r", "\r", "\r"], Numpad1: ["", "1", "", "1"], Numpad2: ["", "2", "", "2"], Numpad3: ["", "3", "", "3"], Numpad4: ["", "4", "", "4"], Numpad5: ["", "5", "", "5"], Numpad6: ["", "6", "", "6"], Numpad7: ["", "7", "", "7"], Numpad8: ["", "8", "", "8"], Numpad9: ["", "9", "", "9"], Numpad0: ["", "0", "", "0"], NumpadDecimal: ["", ".", "", "."], IntlBackslash: ["<", ">", "|", "¦"], NumpadEqual: ["=", "=", "=", "="], NumpadComma: [".", ".", ".", "."], NumpadParenLeft: ["(", "(", "(", "("], NumpadParenRight: [")", ")", ")", ")"] } };
function _m(e) {
  let t = e.split("+"), i = { shift: !1, alt: !1, cmd: !1, win: !1, meta: !1, ctrl: !1, key: t.pop() };
  return t.includes("shift") && (i.shift = !0), t.includes("alt") && (i.alt = !0), t.includes("ctrl") && (i.ctrl = !0), t.includes("cmd") && (i.cmd = !0), t.includes("win") && (i.win = !0), t.includes("meta") && (i.meta = !0), i;
}
function ar(e) {
  let t = "";
  return e.shift && (t += "shift+"), e.alt && (t += "alt+"), e.ctrl && (t += "ctrl+"), e.cmd && (t += "cmd+"), e.win && (t += "win+"), e.meta && (t += "meta+"), t + e.key;
}
var i3 = { enter: "[Enter]", escape: "[Escape]", backspace: "[Backspace]", tab: "[Tab]", space: "[Space]", pausebreak: "[Pause]", insert: "[Insert]", home: "[Home]", pageup: "[PageUp]", delete: "[Delete]", end: "[End]", pagedown: "[PageDown]", right: "[ArrowRight]", left: "[ArrowLeft]", down: "[ArrowDown]", up: "[ArrowUp]", numpad0: "[Numpad0]", numpad1: "[Numpad1]", numpad2: "[Numpad2]", numpad3: "[Numpad3]", numpad4: "[Numpad4]", numpad5: "[Numpad5]", numpad6: "[Numpad6]", numpad7: "[Numpad7]", numpad8: "[Numpad8]", numpad9: "[Numpad9]", numpad_divide: "[NumpadDivide]", numpad_multiply: "[NumpadMultiply]", numpad_subtract: "[NumpadSubtract]", numpad_add: "[NumpadAdd]", numpad_decimal: "[NumpadDecimal]", numpad_separator: "[NumpadComma]", capslock: "[Capslock]", f1: "[F1]", f2: "[F2]", f3: "[F3]", f4: "[F4]", f5: "[F5]", f6: "[F6]", f7: "[F7]", f8: "[F8]", f9: "[F9]", f10: "[F10]", f11: "[F11]", f12: "[F12]", f13: "[F13]", f14: "[F14]", f15: "[F15]", f16: "[F16]", f17: "[F17]", f18: "[F18]", f19: "[F19]" }, lo = [];
function nu() {
  switch (Cr()) {
    case "macos":
    case "ios":
      return "apple";
    case "windows":
      return "windows";
  }
  return "linux";
}
function Be(e) {
  (!e.platform || e.platform === nu()) && lo.push(e);
}
function r3(e, t) {
  var i;
  let r = { shift: !1, alt: !1, cmd: !1, win: !1, meta: !1, ctrl: !1, key: "" };
  if (!e) return r;
  for (let [n, a] of Object.entries(t.mapping)) {
    if (a[0] === e) return r.key = `[${n}]`, r;
    if (a[1] === e) return r.shift = !0, r.key = `[${n}]`, r;
    if (a[2] === e) return r.alt = !0, r.key = `[${n}]`, r;
    if (a[3] === e) return r.shift = !0, r.alt = !0, r.key = `[${n}]`, r;
  }
  return r.key = (i = i3[e]) != null ? i : "", r;
}
function n3(e) {
  if (e.code) return e;
  let t = Object.entries(vn().mapping), i = !1, r = !1, n = "";
  for (let a = 0; a < 4; a++) {
    for (let [o, s] of t) if (s[a] === e.key) {
      n = o, a === 3 ? (i = !0, r = !0) : a === 2 ? i = !0 : a === 1 && (r = !0);
      break;
    }
    if (n) break;
  }
  return new KeyboardEvent(e.type, b(f({}, e), { altKey: i, shiftKey: r, code: n }));
}
function a3(e) {
  var t, i;
  if (!e || e.key === "Unidentified" || e.key === "Dead") return;
  let r = e.shiftKey && e.altKey ? 3 : e.altKey ? 2 : e.shiftKey ? 1 : 0;
  for (let n of lo) ((t = n.mapping[e.code]) == null ? void 0 : t[r]) === e.key ? n.score += 1 : (i = n.mapping[e.code]) != null && i[r] && (n.score = 0);
  lo.sort((n, a) => a.score - n.score);
}
function vn() {
  return lo[0];
}
function o3() {
  switch (nu()) {
    case "apple":
      return ll;
    case "windows":
      return wm;
    case "linux":
      return km;
  }
  return ll;
}
switch (nu()) {
  case "apple":
    Be(ll), Be(U4), Be(Q4), Be(G4);
    break;
  case "windows":
    Be(wm), Be(J4), Be(e3), Be(Z4);
    break;
  case "linux":
    Be(km), Be(X4), Be(t3), Be(Y4);
    break;
}
Be(W4);
function au(e) {
  var t;
  let i = /macos|ios/.test(Cr()), r = e.split("+"), n = "";
  for (let a of r) n && (n += i ? " " : '<span class="ML__shortcut-join">+</span>'), a.startsWith("[Key") ? n += a.slice(4, 5) : a.startsWith("Key") ? n += a.slice(3, 4) : a.startsWith("[Digit") ? n += a.slice(6, 7) : a.startsWith("Digit") ? n += a.slice(5, 6) : n += (t = { cmd: "⌘", meta: i ? "⌘" : "Ctrl", shift: i ? "⇧" : "Shift", alt: i ? "⌥" : "Alt", ctrl: i ? "⌃" : "Ctrl", "\n": i ? "⏎" : "Return", "[return]": i ? "⏎" : "Return", "[enter]": i ? "⌤" : "Enter", "[tab]": i ? "⇥" : "Tab", "[escape]": "Esc", "[backspace]": i ? "⌫" : "Backspace", "[delete]": i ? "⌦" : "Del", "[pageup]": i ? "⇞" : "Page Up", "[pagedown]": i ? "⇟" : "Page Down", "[home]": i ? "⤒" : "Home", "[end]": i ? "⤓" : "End", "[space]": "Space", "[equal]": "=", "[minus]": "-", "[comma]": ",", "[slash]": "/", "[backslash]": "\\", "[bracketleft]": "[", "[bracketright]": "]", semicolon: ";", period: ".", comma: ",", minus: "-", equal: "=", quote: "'", backslash: "\\", intlbackslash: "\\", backquote: "`", slash: "/", numpadmultiply: "* &#128290;", numpaddivide: "/ &#128290;", numpadsubtract: "- &#128290;", numpadadd: "+ &#128290;", numpaddecimal: ". &#128290;", numpadcomma: ", &#128290;", help: "help", left: "⇠", up: "⇡", right: "⇢", down: "⇣", "[arrowleft]": "⇠", "[arrowup]": "⇡", "[arrowright]": "⇢", "[arrowdown]": "⇣" }[a.toLowerCase()]) != null ? t : a.toUpperCase();
  return n;
}
function uo(e) {
  if (e instanceof MouseEvent || e instanceof PointerEvent) return { x: e.clientX, y: e.clientY };
  if (e instanceof TouchEvent) {
    let t = [...e.touches].reduce((r, n) => ({ x: r.x + n.clientX, y: r.y + n.clientY }), { x: 0, y: 0 }), i = e.touches.length;
    return { x: t.x / i, y: t.y / i };
  }
}
function Si(e) {
  let t = { alt: !1, control: !1, shift: !1, meta: !1 };
  return (e instanceof MouseEvent || e instanceof PointerEvent || e instanceof TouchEvent || e instanceof KeyboardEvent) && (e.altKey && (t.alt = !0), e.ctrlKey && (t.control = !0), e.metaKey && (t.meta = !0), e.shiftKey && (t.shift = !0)), t;
}
function s3(e, t) {
  return !e && t || e && !t ? !1 : !e || !t ? !0 : e.alt === t.alt && e.control === t.control && e.shift === t.shift && e.meta === t.meta;
}
var l3 = /* @__PURE__ */ new Set(["Backquote", "Digit0", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Minus", "Equal", "IntlYen", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "IntlRo", "Space", "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9", "NumpadAdd", "NumpadComma", "NumpadDecimal", "NumpadDivide", "NumpadEqual", "NumpadHash", "NumpadMultiply", "NumpadParenLeft", "NumpadParenRight", "NumpadStar", "NumpadSubstract"]);
function Ko(e) {
  return e.ctrlKey || e.metaKey || ["Dead", "Process"].includes(e.key) ? !1 : e.code === "" ? !0 : l3.has(e.code);
}
function co() {
  var e;
  let t = document.activeElement;
  for (; (e = t == null ? void 0 : t.shadowRoot) != null && e.activeElement; ) t = t.shadowRoot.activeElement;
  return t;
}
var Ge = class Mt {
  static get scrim() {
    return Mt._scrim || (Mt._scrim = new Mt()), Mt._scrim;
  }
  static open(t) {
    Mt.scrim.open(t);
  }
  static close() {
    Mt.scrim.close();
  }
  static get state() {
    return Mt.scrim.state;
  }
  static get element() {
    return Mt.scrim.element;
  }
  constructor(t) {
    var i, r;
    this.lightDismiss = (i = t == null ? void 0 : t.lightDismiss) != null ? i : !0, this.translucent = (r = t == null ? void 0 : t.translucent) != null ? r : !1, this.state = "closed";
  }
  get element() {
    if (this._element) return this._element;
    let t = document.createElement("div");
    return t.setAttribute("role", "presentation"), t.style.position = "fixed", t.style.contain = "content", t.style.top = "0", t.style.left = "0", t.style.right = "0", t.style.bottom = "0", t.style.zIndex = "var(--scrim-zindex, 10099)", t.style.outline = "none", this.translucent ? (t.style.background = "rgba(255, 255, 255, .2)", t.style.backdropFilter = "contrast(40%)") : t.style.background = "transparent", this._element = t, t;
  }
  open(t) {
    var i;
    if (this.state !== "closed") return;
    this.state = "opening", this.onDismiss = t == null ? void 0 : t.onDismiss, this.savedActiveElement = co();
    let { element: r } = this;
    ((i = t == null ? void 0 : t.root) != null ? i : document.body).appendChild(r), r.addEventListener("click", this), document.addEventListener("touchmove", this, !1), document.addEventListener("scroll", this, !1);
    let n = window.innerWidth - document.documentElement.clientWidth;
    this.savedMarginRight = document.body.style.marginRight, this.savedOverflow = document.body.style.overflow, document.body.style.overflow = "hidden";
    let a = Number.parseFloat(getComputedStyle(document.body).marginRight);
    document.body.style.marginRight = `${a + n}px`, t != null && t.child && r.append(t.child), this.state = "open";
  }
  close() {
    var t, i, r, n;
    if (this.state !== "open") {
      this.element.parentElement;
      return;
    }
    this.state = "closing", typeof this.onDismiss == "function" && this.onDismiss(), this.onDismiss = void 0;
    let { element: a } = this;
    a.removeEventListener("click", this), document.removeEventListener("touchmove", this, !1), document.removeEventListener("scroll", this, !1), a.remove(), document.body.style.overflow = (t = this.savedOverflow) != null ? t : "", document.body.style.marginRight = (i = this.savedMarginRight) != null ? i : "", co() !== this.savedActiveElement && ((n = (r = this.savedActiveElement) == null ? void 0 : r.focus) == null || n.call(r)), a.innerHTML = "", this.state = "closed";
  }
  handleEvent(t) {
    this.lightDismiss && (t.target === this._element && t.type === "click" ? (this.close(), t.preventDefault(), t.stopPropagation()) : t.target === document && (t.type === "touchmove" || t.type === "scroll") && (this.close(), t.preventDefault(), t.stopPropagation()));
  }
};
function u3(e, t, i) {
  let r = null, n = null, a = !1, o = !1, s = !1, l = new AbortController(), u = l.signal;
  return e.addEventListener("keydown", (c) => {
    if (a || c.key === "Process" || c.code === "CapsLock" || /(Control|Meta|Alt|Shift)(Left|Right)/.test(c.code)) {
      r = null;
      return;
    }
    r = c, n = null, i.onKeystroke(c) ? e.textContent = "" : r = null;
  }, { capture: !0, signal: u }), e.addEventListener("keypress", (c) => {
    a || (r && n && i.onKeystroke(r), n = c);
  }, { capture: !0, signal: u }), e.addEventListener("compositionstart", (c) => {
    e.textContent = "", a = !0, i.onCompositionStart(c.data);
  }, { capture: !0, signal: u }), e.addEventListener("compositionupdate", (c) => {
    a && i.onCompositionUpdate(c.data);
  }, { capture: !0, signal: u }), e.addEventListener("compositionend", (c) => {
    e.textContent = "", a && (a = !1, i.onCompositionEnd(c.data));
  }, { capture: !0, signal: u }), e.addEventListener("beforeinput", (c) => c.stopImmediatePropagation(), { signal: u }), e.addEventListener("input", (c) => {
    var d;
    if (!a && (e.textContent = "", c.inputType !== "insertCompositionText")) {
      if (c.inputType === "insertFromPaste") {
        c.preventDefault(), c.stopPropagation();
        return;
      }
      i.onInput((d = c.data) != null ? d : ""), c.preventDefault(), c.stopPropagation();
    }
  }, { signal: u }), e.addEventListener("paste", (c) => {
    e.focus({ preventScroll: !0 }), e.textContent = "", i.onPaste(c) || c.preventDefault(), c.stopImmediatePropagation();
  }, { signal: u }), e.addEventListener("cut", (c) => i.onCut(c), { capture: !0, signal: u }), e.addEventListener("copy", (c) => i.onCopy(c), { capture: !0, signal: u }), e.addEventListener("blur", (c) => {
    var d, h;
    if (((h = (d = c.relatedTarget) == null ? void 0 : d._mathfield) == null ? void 0 : h.element) === t) {
      e.focus({ preventScroll: !0 }), c.preventDefault(), c.stopPropagation();
      return;
    }
    let p = !1, m = c.relatedTarget;
    for (; m; ) {
      if (m.classList.contains("ML__keyboard")) {
        p = !0;
        break;
      }
      m = m.parentElement;
    }
    if (p) {
      e.focus({ preventScroll: !0 }), c.preventDefault(), c.stopPropagation();
      return;
    }
    let y = Ge.state;
    if (y === "open" || y === "opening") {
      c.preventDefault(), c.stopPropagation();
      return;
    }
    if (c.relatedTarget === c.target.getRootNode().host) {
      c.preventDefault(), c.stopPropagation();
      return;
    }
    s || o || (s = !0, r = null, n = null, i.onBlur(), s = !1);
  }, { capture: !0, signal: u }), e.addEventListener("focus", (c) => {
    s || o || (o = !0, i.onFocus(), o = !1);
  }, { capture: !0, signal: u }), { dispose: () => l.abort(), cancelComposition: () => {
    a && (e.blur(), requestAnimationFrame(() => e.focus({ preventScroll: !0 })));
  }, blur: () => {
    typeof e.blur == "function" && e.blur();
  }, focus: () => {
    !o && typeof e.focus == "function" && e.focus({ preventScroll: !0 });
  }, hasFocus: () => co() === e, setAriaLabel: (c) => e.setAttribute("aria-label", c), setValue: (c) => {
    var d;
    e.textContent = c, e.style.left = "-1000px", (d = window.getSelection()) == null || d.selectAllChildren(e);
  }, moveTo: (c, d) => {
    e.style.top = `${d}px`, e.style.left = `${c}px`;
  } };
}
function tr(e) {
  var t;
  if (!e || !Ko(e)) return "";
  let i;
  return e.key === "Unidentified" && e.target && (i = e.target.value), i = (t = i ?? e.key) != null ? t : e.code, /^(Dead|Return|Enter|Tab|Escape|Delete|PageUp|PageDown|Home|End|Help|ArrowLeft|ArrowRight|ArrowUp|ArrowDown)$/.test(i) && (i = ""), i;
}
function Mm(e) {
  e = n3(e);
  let t = [];
  return e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), e.altKey && t.push("alt"), e.shiftKey && t.push("shift"), t.length === 0 ? `[${e.code}]` : (t.push(`[${e.code}]`), t.join("+"));
}
function c3(e) {
  if (Re()) {
    let t = Cr(), i = e.startsWith("!"), r = e.endsWith(t);
    if (i && !r || !i && r) return !0;
  }
  return e === "!other" ? !1 : e === "other";
}
function d3(e, t, i) {
  if (e.length === 0) return "";
  let r = ar(_m(Mm(i))), n = ar({ key: i.key, shift: i.shiftKey, alt: i.altKey, ctrl: i.ctrlKey, meta: i.metaKey || i.ctrlKey && /macos|ios/.test(Cr()), cmd: !1, win: !1 });
  for (let a = e.length - 1; a >= 0; a--) if ((e[a].key === r || e[a].key === n) && (!e[a].ifMode || e[a].ifMode === t)) return e[a].command;
  return "";
}
function Kd(e) {
  let t = e;
  return Me(t) && (t = t.length > 0 ? t[0] + "(" + t.slice(1).join("") + ")" : ""), t;
}
function h3(e, t) {
  let i = [];
  if (typeof t == "string") {
    let a = Zg[t];
    Me(a) ? i = a.slice() : a && i.push(a);
  }
  let r = Kd(t), n = new RegExp("^" + r.replace("\\", "\\\\").replace("|", "\\|").replace("*", "\\*").replace("$", "\\$").replace("^", "\\^") + "([^*a-zA-Z]|$)");
  for (let a of e) n.test(Kd(a.command)) && i.push(a.key);
  return i.map(au);
}
function p3(e, t) {
  if (e.ifPlatform && !/^!?(macos|windows|android|ios|chromeos|other)$/.test(e.ifPlatform)) throw new Error(`Unexpected platform "${e.ifPlatform}" for keybinding ${e.key}`);
  if (e.ifLayout !== void 0 && (t.score === 0 || !e.ifLayout.includes(t.id))) return;
  let i = _m(e.key), r = e.ifPlatform;
  if (i.cmd) {
    if (r && r !== "macos" && r !== "ios") throw new Error('Unexpected "cmd" modifier with platform "' + r + `"
"cmd" modifier can only be used with macOS or iOS platform.`);
    r || (r = Cr() === "ios" ? "ios" : "macos"), i.win = !1, i.cmd = !1, i.meta = !0;
  }
  if (i.win) {
    if (r && r !== "windows") throw new Error('Unexpected "win" modifier with platform "' + r + `"
"win" modifier can only be used with Windows platform.`);
    r = "windows", i.win = !1, i.cmd = !1, i.meta = !0;
  }
  if (r && !c3(r)) return;
  if (/^\[.+\]$/.test(i.key)) return b(f({}, e), { key: ar(i) });
  let n = r3(i.key, t);
  if (!n) return b(f({}, e), { key: ar(i) });
  if (n.shift && i.shift || n.alt && i.alt) throw new Error(`The keybinding ${e.key} (${ul(e.command)}) is conflicting with the key combination ${ar(n)} using the ${t.displayName} keyboard layout`);
  return n.shift = n.shift || i.shift, n.alt = n.alt || i.alt, n.meta = i.meta, n.ctrl = i.ctrl, b(f({}, e), { key: ar(n) });
}
function ul(e) {
  if (Array.isArray(e)) {
    let t = [...e];
    return t.shift() + "(" + t.map((i) => typeof i == "string" ? `"${i}"` : i.toString()).join(", ") + ")";
  }
  return e;
}
function m3(e, t) {
  let i = [], r = [];
  for (let n of e) try {
    let a = p3(n, t);
    if (!a) continue;
    let o = r.find((s) => s.key === a.key && s.ifMode === a.ifMode);
    if (o) throw new Error(`Ambiguous key binding ${n.key} (${ul(n.command)}) matches ${o.key} (${ul(o.command)}) with the ${t.displayName} keyboard layout`);
    r.push(a);
  } catch (a) {
    a instanceof Error && i.push(a.message);
  }
  return [r, i];
}
var f3 = class extends G {
  constructor() {
    super("latex");
  }
  createAtom(e) {
    return new ce(e);
  }
  onPaste(e, t) {
    if (!t) return !1;
    let i = typeof t == "string" ? t : t.getData("application/x-latex") || t.getData("text/plain");
    return i && e.model.contentWillChange({ inputType: "insertFromPaste", data: i }) ? (e.stopCoalescingUndo(), e.stopRecording(), this.insert(e.model, i) && (e.startRecording(), e.snapshot("paste"), e.model.contentDidChange({ inputType: "insertFromPaste" }), ee(e)), e.startRecording(), !0) : !1;
  }
  insert(e, t, i) {
    if (!e.contentWillChange({ data: t, inputType: "insertText" })) return !1;
    i || (i = {}), i.insertionMode || (i.insertionMode = "replaceSelection"), i.selectionMode || (i.selectionMode = "placeholder");
    let { silenceNotifications: r } = e;
    i.silenceNotifications && (e.silenceNotifications = !0);
    let n = e.silenceNotifications;
    e.silenceNotifications = !0, i.insertionMode === "replaceSelection" && !e.selectionIsCollapsed ? e.deleteAtoms(ge(e.selection)) : i.insertionMode === "replaceAll" ? (e.root.setChildren([], "body"), e.position = 0) : i.insertionMode === "insertBefore" ? e.collapseSelection("backward") : i.insertionMode === "insertAfter" && e.collapseSelection("forward");
    let a = [];
    for (let l of t) bg.test(l) && a.push(new ce(l));
    let o = e.at(e.position);
    if (o instanceof an && (o = o.lastChild), !(o.parent instanceof an)) {
      let l = new an("");
      o.parent.addChildAfter(l, o), o = l.firstChild;
    }
    let s = o.parent.addChildrenAfter(a, o);
    return e.silenceNotifications = n, i.selectionMode === "before" || (i.selectionMode === "item" ? e.setSelection(e.anchor, e.offsetOf(s)) : s && (e.position = e.offsetOf(s))), e.contentDidChange({ data: t, inputType: "insertText" }), e.silenceNotifications = r, !0;
  }
};
function g3(e) {
  return e.atoms.find((t) => t.type === "latexgroup");
}
function xn(e) {
  var t, i;
  let r = e.atoms.find((n) => n.type === "latexgroup");
  return r ? (i = (t = r.body) == null ? void 0 : t.filter((n) => n.type === "latex")) != null ? i : [] : [];
}
function Sm(e, t) {
  var i;
  let r = 0, n = !1, a = Number.isFinite(t == null ? void 0 : t.before) ? (i = t == null ? void 0 : t.before) != null ? i : 0 : e.lastOffset;
  for (; r <= a && !n; ) {
    let l = e.at(r);
    n = l instanceof ce && l.isSuggestion, n || r++;
  }
  if (!n) return [void 0, void 0];
  let o = r, s = !1;
  for (; o <= a && !s; ) {
    let l = e.at(o);
    s = !(l instanceof ce && l.isSuggestion), s || o++;
  }
  return [r - 1, o - 1];
}
new f3();
function $o(e) {
  let t = xn(e.model).filter((i) => i.isSuggestion);
  if (t.length !== 0) {
    e.model.position = e.model.offsetOf(t[0].leftSibling);
    for (let i of t) i.parent.removeChild(i);
  }
}
function Fn(e, t) {
  var i;
  let { model: r } = e;
  $o(e);
  for (let c of xn(r)) c.isError = !1;
  if (!r.selectionIsCollapsed || e.options.popoverPolicy === "off") {
    wr(e);
    return;
  }
  let n = [], a = r.at(r.position);
  for (; a && a instanceof ce && /^[a-zA-Z\*]$/.test(a.value); ) a = a.leftSibling;
  if (a && a instanceof ce && a.value === "\\") for (n.push(a), a = a.rightSibling; a && a instanceof ce && /^[a-zA-Z\*]$/.test(a.value); ) n.push(a), a = a.rightSibling;
  let o = n.map((c) => c.value).join(""), s = xg(e, o);
  if (s.length === 0) {
    if (/^\\[a-zA-Z\*]+$/.test(o)) for (let c of n) c.isError = !0;
    wr(e);
    return;
  }
  let l = (i = t == null ? void 0 : t.atIndex) != null ? i : 0;
  e.suggestionIndex = l < 0 ? s.length - 1 : l % s.length;
  let u = s[e.suggestionIndex];
  if (u !== o) {
    let c = n[n.length - 1];
    c.parent.addChildrenAfter([...u.slice(o.length - u.length)].map((d) => new ce(d, { isSuggestion: !0 })), c), Ei(e, { interactive: !0 });
  }
  b3(e, s);
}
function $d(e) {
  let [t, i] = Sm(e, { before: e.position });
  if (t === void 0 || i === void 0) return !1;
  let r = !1;
  return e.getAtoms([t, i]).forEach((n) => {
    n.isSuggestion && (n.isSuggestion = !1, r = !0);
  }), r;
}
function xr(e, t = "accept", i) {
  var r, n;
  wr(e);
  let a = g3(e.model);
  if (!a) return !1;
  if (t === "accept-suggestion" || t === "accept-all") {
    let l = xn(e.model).filter((u) => u.isSuggestion);
    if (l.length !== 0) {
      for (let u of l) u.isSuggestion = !1;
      e.model.position = e.model.offsetOf(l[l.length - 1]);
    }
    if (t === "accept-suggestion") return l.length !== 0;
  }
  let o = xn(e.model).filter((l) => !l.isSuggestion).map((l) => l.value).join(""), s = a.leftSibling;
  return a.parent.removeChild(a), e.model.position = e.model.offsetOf(s), e.switchMode((r = i == null ? void 0 : i.mode) != null ? r : "math"), t === "reject" || (G.insert(e.model, o, { selectionMode: (n = i == null ? void 0 : i.selectItem) != null && n ? "item" : "placeholder", format: "latex", mode: "math" }), e.snapshot(), e.model.announce("replacement"), e.switchMode("math")), !0;
}
function Po(e) {
  var t;
  let i = document.getElementById(e);
  return i ? i.dataset.refcount = Number(Number.parseInt((t = i.dataset.refcount) != null ? t : "0") + 1).toString() : (i = document.createElement("div"), i.setAttribute("aria-hidden", "true"), i.dataset.refcount = "1", i.id = e, document.body.append(i)), i;
}
function ou(e) {
  var t;
  let i = document.getElementById(e);
  if (!i) return;
  let r = Number.parseInt((t = i.getAttribute("data-refcount")) != null ? t : "0");
  r <= 1 ? i.remove() : i.dataset.refcount = Number(r - 1).toString();
}
function y3(e, t) {
  let i = new I({ from: e.context }), r = new v({ mode: "math", type: "root", body: Te(t, { context: i }) }), n = Bo(Tn(new S(r.render(i), { classes: "ML__base" }), i));
  return Ao(n, { classes: "ML__latex" }).toMarkup();
}
function b3(e, t) {
  var i;
  if (t.length === 0) {
    wr(e);
    return;
  }
  let r = "";
  for (let [a, o] of t.entries()) {
    let s = o, l = y3(e, o), u = h3(e.keybindings, s).join("<br>");
    r += `<li role="button" data-command="${s}" ${a === e.suggestionIndex ? "class=ML__popover__current" : ""}><span class="ML__popover__latex">${s}</span><span class="ML__popover__command">${l}</span>`, u && (r += `<span class="ML__popover__keybinding">${u}</span>`), r += "</li>";
  }
  let n = v3(e, `<ul>${r}</ul>`);
  cl() && ((i = n.querySelector(".ML__popover__current")) == null || i.scrollIntoView({ block: "nearest", inline: "nearest" })), setTimeout(() => {
    var a;
    n && !cl() && (n.classList.add("is-visible"), No(e), (a = n.querySelector(".ML__popover__current")) == null || a.scrollIntoView({ block: "nearest", inline: "nearest" }));
  }, 32);
}
function cl() {
  let e = document.getElementById("mathlive-suggestion-popover");
  return e ? e.classList.contains("is-visible") : !1;
}
function No(e, t) {
  var i;
  if (!e.element || e.element.mathfield !== e || !cl()) return;
  if (((i = e.model.at(e.model.position)) == null ? void 0 : i.type) !== "latex") {
    wr(e);
    return;
  }
  if (t != null && t.deferred) {
    setTimeout(() => No(e), 32);
    return;
  }
  let r = en(e.field);
  if (!r) return;
  let n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, o = window.innerWidth - document.documentElement.clientWidth, s = window.innerHeight - document.documentElement.clientHeight, l = window.mathVirtualKeyboard.boundingRect.height, u = document.getElementById("mathlive-suggestion-popover");
  r.x + u.offsetWidth / 2 > a - o ? u.style.left = `${a - u.offsetWidth - o}px` : r.x - u.offsetWidth / 2 < 0 ? u.style.left = "0" : u.style.left = `${r.x - u.offsetWidth / 2}px`;
  let c = r.y - r.height;
  n - s - l - r.y < c ? (u.classList.add("ML__popover--reverse-direction"), u.classList.remove("top-tip"), u.classList.add("bottom-tip"), u.style.top = `${r.y - r.height - u.offsetHeight - 15}px`) : (u.classList.remove("ML__popover--reverse-direction"), u.classList.add("top-tip"), u.classList.remove("bottom-tip"), u.style.top = `${r.y + 15}px`);
}
function wr(e) {
  e.suggestionIndex = 0;
  let t = document.getElementById("mathlive-suggestion-popover");
  t && (t.classList.remove("is-visible"), t.innerHTML = "");
}
function v3(e, t) {
  let i = document.getElementById("mathlive-suggestion-popover");
  return i || (i = Po("mathlive-suggestion-popover"), Zt("suggestion-popover"), Zt("core"), i.addEventListener("pointerdown", (r) => r.preventDefault()), i.addEventListener("click", (r) => {
    let n = r.target;
    for (; n && !n.dataset.command; ) n = n.parentElement;
    n && (xr(e, "reject"), G.insert(e.model, n.dataset.command, { selectionMode: "placeholder", format: "latex", mode: "math" }), e.dirty = !0, e.focus());
  })), i.innerHTML = globalThis.MathfieldElement.createHTML(t), i;
}
function x3() {
  document.getElementById("mathlive-suggestion-popover") && (ou("mathlive-suggestion-popover"), Yt("suggestion-popover"), Yt("core"));
}
function w3() {
  let e = String(new Error().stack).replace(/^Error.*\n/, "").split(`
`);
  if (e.length === 0) return console.error(`Can't use relative paths to specify assets location because the sourcefile location could not be determined (unexpected stack trace format "${new Error().stack}").`), "";
  let t = e[1], i = t.match(/http.*\.ts[\?:]/);
  return i && (t = e[2]), i = t.match(/(https?:.*):[0-9]+:[0-9]+/), i || (i = t.match(/at (.*(\.ts))[\?:]/), i || (i = t.match(/at (.*(\.mjs|\.js))[\?:]/))), i ? i[1] : (console.error(e), console.error(`Can't use relative paths to specify assets location because the source file location could not be determined (unexpected location "${t}").`), "");
}
var Ba = null, Pd, Nd, Ds = ((Nd = (Pd = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : Pd.currentScript) == null ? void 0 : Nd.src) || w3();
async function Cm(e) {
  if (/^(?:[a-z+]+:)?\/\//i.test(e)) {
    try {
      return new URL(e).href;
    } catch {
    }
    if (e.startsWith("//")) try {
      return new URL(`${window.location.protocol}${e}`).href;
    } catch {
    }
    return e;
  }
  if (Ba === null) try {
    let t = await fetch(Ds, { method: "HEAD" });
    t.status === 200 && (Ba = t.url);
  } catch {
    console.error(`Invalid URL "${e}" (relative to "${Ds}")`);
  }
  return new URL(e, Ba ?? Ds).href;
}
function k3(e, t, i = {}) {
  return new FontFace(e, `url(${t}.woff2) format('woff2')`, i);
}
var Ee = "not-loaded";
async function _3() {
  return Ee = "not-loaded", su();
}
async function su() {
  var e;
  if (Ee === "not-loaded") {
    if (Ee = "loading", (e = getComputedStyle(document.documentElement).getPropertyValue("--ML__static-fonts")) != null ? e : !1) {
      Ee = "ready";
      return;
    }
    if (document.body.classList.remove("ML__fonts-did-not-load"), "fonts" in document) {
      let t = ["KaTeX_Main", "KaTeX_Math", "KaTeX_AMS", "KaTeX_Caligraphic", "KaTeX_Fraktur", "KaTeX_SansSerif", "KaTeX_Script", "KaTeX_Typewriter", "KaTeX_Size1", "KaTeX_Size2", "KaTeX_Size3", "KaTeX_Size4"], i = Array.from(document.fonts).map((a) => a.family);
      if (t.every((a) => i.includes(a))) {
        Ee = "ready";
        return;
      }
      if (!globalThis.MathfieldElement.fontsDirectory) {
        Ee = "not-loaded";
        return;
      }
      let r = await Cm(globalThis.MathfieldElement.fontsDirectory);
      if (!r) {
        document.body.classList.add("ML__fonts-did-not-load"), Ee = "error";
        return;
      }
      let n = [["KaTeX_Main-Regular"], ["KaTeX_Main-BoldItalic", { style: "italic", weight: "bold" }], ["KaTeX_Main-Bold", { weight: "bold" }], ["KaTeX_Main-Italic", { style: "italic" }], ["KaTeX_Math-Italic", { style: "italic" }], ["KaTeX_Math-BoldItalic", { style: "italic", weight: "bold" }], ["KaTeX_AMS-Regular"], ["KaTeX_Caligraphic-Regular"], ["KaTeX_Caligraphic-Bold", { weight: "bold" }], ["KaTeX_Fraktur-Regular"], ["KaTeX_Fraktur-Bold", { weight: "bold" }], ["KaTeX_SansSerif-Regular"], ["KaTeX_SansSerif-Bold", { weight: "bold" }], ["KaTeX_SansSerif-Italic", { style: "italic" }], ["KaTeX_Script-Regular"], ["KaTeX_Typewriter-Regular"], ["KaTeX_Size1-Regular"], ["KaTeX_Size2-Regular"], ["KaTeX_Size3-Regular"], ["KaTeX_Size4-Regular"]].map((a) => k3(a[0].replace(/-[a-zA-Z]+$/, ""), `${r}/${a[0]}`, a[1]));
      try {
        (await Promise.all(n.map((a) => {
          try {
            return a.load();
          } catch {
          }
        }))).forEach((a) => document.fonts.add(a)), Ee = "ready";
        return;
      } catch (a) {
        console.error(`MathLive 0.98.6: The math fonts could not be loaded from "${r}"`, { cause: a }), document.body.classList.add("ML__fonts-did-not-load");
      }
      Ee = "error";
    }
  }
}
function M3(e, t = 0) {
  let i = 3735928559 ^ t, r = 1103547991 ^ t;
  for (let n = 0; n < e.length; n++) {
    let a = e.charCodeAt(n);
    i = Math.imul(i ^ a, 2654435761), r = Math.imul(r ^ a, 1597334677);
  }
  return i = Math.imul(i ^ i >>> 16, 2246822507), i ^= Math.imul(r ^ r >>> 13, 3266489909), r = Math.imul(r ^ r >>> 16, 2246822507), r ^= Math.imul(i ^ i >>> 13, 3266489909), 4294967296 * (2097151 & r) + (i >>> 0);
}
function ee(e, t) {
  e && (e.dirty || (e.dirty = !0, requestAnimationFrame(() => {
    wi(e) && e.dirty && (e.atomBoundsCache = /* @__PURE__ */ new Map(), Ei(e, t), e.atomBoundsCache = void 0);
  })));
}
function S3(e, t) {
  var i;
  t = t ?? {};
  let r = new I({ from: b(f({}, e.context), { atomIdsSettings: { seed: t.forHighlighting ? M3(v.serialize([e.model.root], { expandMacro: !1, defaultMode: e.options.defaultMode })) : "random", groupNumbers: (i = t.forHighlighting) != null ? i : !1 }, letterShapeStyle: e.options.letterShapeStyle }), mathstyle: e.options.defaultMode === "inline-math" ? "textstyle" : "displaystyle" }), n = e.model.root.render(r);
  return Ao(Tn(n, r), { classes: e.hasEditablePrompts ? "ML__latex ML__prompting" : "ML__latex", attributes: { translate: "no", "aria-hidden": "true" } });
}
function Lm(e, t) {
  let { model: i } = e;
  i.root.caret = void 0, i.root.isSelected = !1, i.root.containsCaret = !0;
  for (let r of i.atoms) r.caret = void 0, r.isSelected = !1, r.containsCaret = !1;
  if (i.selectionIsCollapsed) {
    let r = i.at(i.position);
    r.caret = e.model.mode;
    let n = r.parent;
    for (; n; ) n.containsCaret = !0, n = n.parent;
  } else {
    let r = i.getAtoms(i.selection, { includeChildren: !0 });
    for (let n of r) n.isSelected = !0;
  }
  return S3(e, t).toMarkup();
}
function Ei(e, t) {
  if (!wi(e)) return;
  t != null || (t = {});
  let i = e.element.querySelector("[part=virtual-keyboard-toggle]");
  i && (i.style.display = e.hasEditableContent ? "" : "none");
  let r = e.field;
  if (!r) return;
  let n = e.isSelectionEditable && e.hasFocus(), a = r.classList.contains("ML__focused");
  a && !n ? r.classList.remove("ML__focused") : !a && n && r.classList.add("ML__focused");
  let o = Lm(e, t), s = e.element.querySelector("[part=menu-toggle]");
  if (s && (e.model.atoms.length <= 1 || e.disabled || e.readOnly && !e.hasEditableContent || e.userSelect === "none" ? s.style.display = "none" : s.style.display = ""), e.model.atoms.length <= 1) {
    let l = e.options.contentPlaceholder;
    l && (o += `<span part=placeholder class="ML__content-placeholder">${ue(l)}</span>`);
  }
  r.innerHTML = globalThis.MathfieldElement.createHTML(o), ho(e, t.interactive), e.dirty = !1;
}
function ho(e, t) {
  let i = e.field;
  if (!i) return;
  for (let s of i.querySelectorAll(".ML__selection, .ML__contains-highlight")) s.remove();
  !(t != null && t) && Ee !== "error" && Ee !== "ready" && setTimeout(() => {
    Ee === "ready" ? ho(e) : setTimeout(() => ho(e), 128);
  }, 32);
  let r = e.model, n = i.offsetWidth, a = i.getBoundingClientRect().width, o = Math.floor(a) / n;
  if (o = isNaN(o) ? 1 : o, r.selectionIsCollapsed) {
    No(e, { deferred: !0 });
    let s = r.at(r.position);
    for (; s && s.type !== "prompt" && !(s.containsCaret && s.displayContainsHighlight); ) s = s.parent;
    if (s != null && s.containsCaret && s.displayContainsHighlight) {
      let l = Sp(e, Bn(e, s), o);
      if (l) {
        l.left /= o, l.right /= o, l.top /= o, l.bottom /= o;
        let u = document.createElement("div");
        u.classList.add("ML__contains-highlight"), u.style.position = "absolute", u.style.left = `${l.left + 1}px`, u.style.top = `${Math.ceil(l.top)}px`, u.style.width = `${Math.ceil(l.right - l.left)}px`, u.style.height = `${Math.ceil(l.bottom - l.top)}px`, i.insertBefore(u, i.childNodes[0]);
      }
    }
    return;
  }
  for (let s of C3(Lp(e, { excludeAtomsWithBackground: !0 }))) {
    s.left /= o, s.right /= o, s.top /= o, s.bottom /= o;
    let l = document.createElement("div");
    l.classList.add("ML__selection"), l.style.position = "absolute", l.style.left = `${s.left}px`, l.style.top = `${s.top}px`, l.style.width = `${Math.ceil(s.right - s.left)}px`, l.style.height = `${Math.ceil(s.bottom - s.top - 1)}px`, i.insertBefore(l, i.childNodes[0]);
  }
}
function C3(e) {
  let t = [];
  for (let i of e) {
    let r = !1;
    for (let n of t) if (i.left === n.left && i.right === n.right && i.top === n.top && i.bottom === n.bottom) {
      r = !0;
      break;
    }
    r || t.push(i);
  }
  e = t, t = [];
  for (let i of e) {
    let r = 0;
    for (let n of e) if (i.left >= n.left && i.right <= n.right && i.top >= n.top && i.bottom <= n.bottom && (r += 1, r > 1)) break;
    r === 1 && t.push(i);
  }
  return t;
}
var Bm = 3, pt;
function Ce(e, t) {
  t = f({ target: "mathfield", canUndo: !1, audioFeedback: void 0, changeContent: !1, changeSelection: !1 }, t ?? {}), pt || (pt = {});
  for (let i of Object.keys(e)) pt[i], pt[i] = b(f({}, t), { fn: e[i] });
}
function lu(e) {
  let t;
  if (Array.isArray(e)) {
    if (e[0] === "performWithFeedback") return lu(e[1]);
    t = e[0];
  } else t = e;
  return t = t.replace(/-\w/g, (i) => i[1].toUpperCase()), pt[t];
}
function pr(e) {
  var t;
  return (t = lu(e)) == null ? void 0 : t.target;
}
function L3(e, t) {
  var i;
  if (!t) return !1;
  let r, n = [], a = !1, o = !1;
  Me(t) ? (r = t[0], n = t.slice(1)) : r = t, r = r.replace(/-\w/g, (u) => u[1].toUpperCase());
  let s = pt[r], l = s == null ? void 0 : s.target;
  if (l === "model") {
    if (!e.isSelectionEditable && s != null && s.changeContent) return e.model.announce("plonk"), !1;
    /^(delete|add)/.test(r) && (r !== "deleteBackward" && e.flushInlineShortcutBuffer(), e.snapshot(r)), /^complete/.test(r) || $o(e), pt[r].fn(e.model, ...n), Fn(e), o = !0, a = !0;
  } else if (l === "virtual-keyboard") o = (i = window.mathVirtualKeyboard.executeCommand(t)) != null ? i : !1, a = !0;
  else if (pt[r]) {
    if (!e.isSelectionEditable && s != null && s.changeContent) return e.model.announce("plonk"), !1;
    /^(undo|redo)/.test(r) && e.flushInlineShortcutBuffer(), o = pt[r].fn(e, ...n), a = !0;
  } else throw new Error(`Unknown command "${r}"`);
  return l !== "virtual-keyboard" && (!e.model.selectionIsCollapsed || s != null && s.changeSelection && t !== "deleteBackward") && (e.flushInlineShortcutBuffer(), s != null && s.changeContent || e.stopCoalescingUndo(), e.defaultStyle = {}), o && ee(e), a;
}
function B3(e, t) {
  var i;
  if (!e) return !1;
  e.focus(), lf.keypressVibration && tp() && navigator.vibrate(Bm);
  let r = lu(t);
  globalThis.MathfieldElement.playSound((i = r == null ? void 0 : r.audioFeedback) != null ? i : "keypress");
  let n = e.executeCommand(t);
  return e.scrollIntoView(), n;
}
Ce({ performWithFeedback: (e, t) => B3(e, t) });
function A3(e) {
  return Fn(e, { atIndex: e.suggestionIndex + 1 }), !1;
}
function E3(e) {
  return Fn(e, { atIndex: e.suggestionIndex - 1 }), !1;
}
Ce({ complete: xr }, { target: "mathfield", audioFeedback: "return", canUndo: !0, changeContent: !0, changeSelection: !0 });
Ce({ nextSuggestion: A3, previousSuggestion: E3 }, { target: "mathfield", audioFeedback: "keypress", changeSelection: !0 });
var po = "mathlive#virtual-keyboard-message";
function uu(e) {
  var t;
  return e.type !== "message" ? !1 : ((t = e.data) == null ? void 0 : t.type) === po;
}
var D3 = class Am {
  constructor() {
    this.targetOrigin = window.origin, this.originValidator = "none", this._boundingRect = new DOMRect(0, 0, 0, 0), this._isShifted = !1, window.addEventListener("message", this), this.sendMessage("proxy-created"), this.listeners = {};
  }
  static get singleton() {
    return this._singleton || (this._singleton = new Am()), this._singleton;
  }
  set alphabeticLayout(t) {
    this.sendMessage("update-setting", { alphabeticLayout: t });
  }
  set layouts(t) {
    this.sendMessage("update-setting", { layouts: t });
  }
  get normalizedLayouts() {
    return [];
  }
  set editToolbar(t) {
    this.sendMessage("update-setting", { editToolbar: t });
  }
  set actionKeycap(t) {
    this.sendMessage("update-setting", { actionKeycap: t });
  }
  set shiftKeycap(t) {
    this.sendMessage("update-setting", { shiftKeycap: t });
  }
  set backspaceKeycap(t) {
    this.sendMessage("update-setting", { backspaceKeycap: t });
  }
  set tabKeycap(t) {
    this.sendMessage("update-setting", { tabKeycap: t });
  }
  set container(t) {
    throw new Error("Container inside an iframe cannot be changed");
  }
  show(t) {
    this.sendMessage("show", t);
  }
  hide(t) {
    this.sendMessage("hide", t);
  }
  get isShifted() {
    return this._isShifted;
  }
  get visible() {
    return this._boundingRect.height > 0;
  }
  set visible(t) {
    t ? this.show() : this.hide();
  }
  get boundingRect() {
    return this._boundingRect;
  }
  executeCommand(t) {
    return this.sendMessage("execute-command", { command: t }), !0;
  }
  updateToolbar(t) {
    this.sendMessage("update-toolbar", t);
  }
  update(t) {
    this.sendMessage("update-setting", t);
  }
  connect() {
    this.sendMessage("connect");
  }
  disconnect() {
    this.sendMessage("disconnect");
  }
  addEventListener(t, i, r) {
    this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), this.listeners[t].has(i) || this.listeners[t].add(i);
  }
  dispatchEvent(t) {
    return !this.listeners[t.type] || this.listeners[t.type].size === 0 ? !0 : (this.listeners[t.type].forEach((i) => {
      typeof i == "function" ? i(t) : i == null || i.handleEvent(t);
    }), !t.defaultPrevented);
  }
  removeEventListener(t, i, r) {
    this.listeners[t] && this.listeners[t].delete(i);
  }
  handleEvent(t) {
    if (uu(t)) {
      if (!tu(t.origin, this.originValidator)) throw new DOMException(`Message from unknown origin (${t.origin}) cannot be handled`, "SecurityError");
      this.handleMessage(t.data);
    }
  }
  handleMessage(t) {
    let { action: i } = t;
    if (i === "execute-command") {
      let { command: r } = t;
      pr(r) === "virtual-keyboard" && this.executeCommand(r);
      return;
    }
    if (i === "synchronize-proxy") {
      this._boundingRect = t.boundingRect, this._isShifted = t.isShifted;
      return;
    }
    if (i === "geometry-changed") {
      this._boundingRect = t.boundingRect, this.dispatchEvent(new Event("geometrychange"));
      return;
    }
  }
  sendMessage(t, i = {}) {
    if (!window.top) throw new DOMException("A frame does not have access to the top window and can‘t communicate with the keyboard. Review virtualKeyboardTargetOrigin and originValidator on mathfields embedded in an iframe", "SecurityError");
    window.top.postMessage(f({ type: po, action: t }, i), this.targetOrigin);
  }
}, T3 = { numeric: { label: "123", labelClass: "MLK__tex-math", tooltip: "keyboard.tooltip.numeric", rows: [[{ latex: "x", shift: "y", variants: ["y", "z", "t", "r", "x^2", "x^n", "x^{#?}", "x_n", "x_i", "x_{#?}", { latex: "f(#?)", class: "small" }, { latex: "g(#?)", class: "small" }] }, { latex: "n", shift: "a", variants: ["i", "j", "p", "k", "a", "u"] }, "[separator-5]", "[7]", "[8]", "[9]", "[/]", "[separator-5]", { latex: "\\exponentialE", shift: "\\ln", variants: ["\\exp", "\\times 10^{#?}", "\\ln", "\\log_{10}", "\\log"] }, { latex: "\\imaginaryI", variants: ["\\Re", "\\Im", "\\imaginaryJ", "\\Vert #0 \\Vert"] }, { latex: "\\pi", shift: "\\sin", variants: ["\\prod", { latex: "\\theta", aside: "theta" }, { latex: "\\rho", aside: "rho" }, { latex: "\\tau", aside: "tau" }, "\\sin", "\\cos", "\\tan"] }], [{ label: "<", latex: "<", class: "hide-shift", shift: { latex: "\\le", label: "≤" } }, { label: ">", latex: ">", class: "hide-shift", shift: { latex: "\\ge", label: "≥" } }, "[separator-5]", "[4]", "[5]", "[6]", "[*]", "[separator-5]", { class: "hide-shift", latex: "#@^2}", shift: "#@^{\\prime}}" }, { latex: "#@^{#0}}", class: "hide-shift", shift: "#@_{#?}" }, { class: "hide-shift", latex: "\\sqrt{#0}", shift: { latex: "\\sqrt[#0]{#?}}" } }], ["[(]", "[)]", "[separator-5]", "[1]", "[2]", "[3]", "[-]", "[separator-5]", { latex: "\\int^{\\infty}_{0}\\!#?\\,\\mathrm{d}x", class: "small hide-shift", shift: "\\int", variants: [{ latex: "\\int_{#?}^{#?}", class: "small" }, { latex: "\\int", class: "small" }, { latex: "\\iint", class: "small" }, { latex: "\\iiint", class: "small" }, { latex: "\\oint", class: "small" }, "\\mathrm{d}x", { latex: "\\dfrac{\\mathrm{d}}{\\mathrm{d} x}", class: "small" }, { latex: "\\frac{\\partial}{\\partial x}", class: "small" }, "\\partial"] }, { class: "hide-shift", latex: "\\forall", shift: "\\exists" }, { label: "[backspace]", width: 1 }], [{ label: "[shift]", width: 2 }, "[separator-5]", "[0]", "[.]", "[=]", "[+]", "[separator-5]", "[left]", "[right]", { label: "[action]", width: 1 }]] }, greek: { label: "&alpha;&beta;&gamma;", labelClass: "MLK__tex-math", tooltip: "keyboard.tooltip.greek", rows: [[{ label: "<i>&#x03c6;</i>", class: "MLK__tex hide-shift", insert: "\\varphi", aside: "phi var.", shift: "\\Phi" }, { label: "<i>&#x03c2;</i>", class: "MLK__tex hide-shift", insert: "\\varsigma", aside: "sigma var.", shift: "\\Sigma" }, { label: "<i>&#x03f5;</i>", class: "MLK__tex hide-shift", insert: "\\epsilon", aside: "espilon", shift: '\\char"0190' }, { label: "<i>&rho;</i>", class: "MLK__tex hide-shift", insert: "\\rho", aside: "rho", shift: '\\char"3A1' }, { label: "<i>&tau;</i>", class: "MLK__tex hide-shift", insert: "\\tau", aside: "tau", shift: '\\char"3A4' }, { label: "<i>&upsilon;</i>", class: "MLK__tex hide-shift", insert: "\\upsilon", aside: "upsilon", shift: "\\Upsilon" }, { label: "<i>&theta;</i>", class: "MLK__tex hide-shift", insert: "\\theta", aside: "theta", shift: "\\Theta" }, { label: "<i>&iota;</i>", class: "MLK__tex hide-shift", insert: "\\iota", aside: "iota", shift: '\\char"399' }, { label: "<i>&omicron;</i>", class: "MLK__tex hide-shift", insert: "\\omicron", aside: "omicron", shift: '\\char"39F' }, { label: "<i>&pi;</i>", class: "MLK__tex hide-shift", insert: "\\pi", aside: "pi", shift: "\\Pi" }], ["[separator-5]", { label: "<i>&alpha;</i>", class: "MLK__tex hide-shift", insert: "\\alpha", aside: "alpha", shift: '\\char"391' }, { label: "<i>&sigma;</i>", class: "MLK__tex hide-shift", insert: "\\sigma", aside: "sigma", shift: "\\Sigma" }, { label: "<i>&delta;</i>", class: "MLK__tex hide-shift", insert: "\\delta", aside: "delta", shift: "\\Delta" }, { latex: "\\phi", class: "MLK__tex hide-shift", insert: "\\phi", aside: "phi", shift: "\\Phi" }, { label: "<i>&gamma;</i>", class: "MLK__tex hide-shift", insert: "\\gamma", aside: "gamma", shift: "\\Gamma" }, { label: "<i>&eta;</i>", class: "MLK__tex hide-shift", insert: "\\eta", aside: "eta", shift: '\\char"397' }, { label: "<i>&xi;</i>", class: "MLK__tex hide-shift", insert: "\\xi", aside: "xi", shift: "\\Xi" }, { label: "<i>&kappa;</i>", class: "MLK__tex hide-shift", insert: "\\kappa", aside: "kappa", shift: "\\Kappa" }, { label: "<i>&lambda;</i>", class: "MLK__tex hide-shift", insert: "\\lambda", aside: "lambda", shift: "\\Lambda" }, "[separator-5]"], ["[shift]", { label: "<i>&zeta;</i>", class: "MLK__tex hide-shift", insert: "\\zeta", aside: "zeta", shift: '\\char"396' }, { label: "<i>&chi;</i>", class: "MLK__tex hide-shift", insert: "\\chi", aside: "chi", shift: '\\char"3A7' }, { label: "<i>&psi;</i>", class: "MLK__tex hide-shift", insert: "\\psi", aside: "zeta", shift: "\\Psi" }, { label: "<i>&omega;</i>", class: "MLK__tex hide-shift", insert: "\\omega", aside: "omega", shift: "\\Omega" }, { label: "<i>&beta;</i>", class: "MLK__tex hide-shift", insert: "\\beta", aside: "beta", shift: '\\char"392' }, { label: "<i>&nu;</i>", class: "MLK__tex hide-shift", insert: "\\nu", aside: "nu", shift: '\\char"39D' }, { label: "<i>&mu;</i>", class: "MLK__tex hide-shift", insert: "\\mu", aside: "mu", shift: '\\char"39C' }, "[backspace]"], ["[separator]", { label: "<i>&#x03b5;</i>", class: "MLK__tex", insert: "\\varepsilon", aside: "espilon var." }, { label: "<i>&#x03d1;</i>", class: "MLK__tex", insert: "\\vartheta", aside: "theta var." }, { label: "<i>&#x3f0;</i>", class: "MLK__tex", insert: "\\varkappa", aside: "kappa var." }, { label: "<i>&#x03d6;</i>", class: "MLK__tex", insert: "\\varpi", aside: "pi var." }, { label: "<i>&#x03f1;</i>", class: "MLK__tex", insert: "\\varrho", aside: "rho var." }, "[left]", "[right]", "[action]"]] }, symbols: { label: "&infin;≠∈", labelClass: "MLK__tex", tooltip: "keyboard.tooltip.symbols", rows: [[{ latex: "\\sin", shift: "\\sin^{-1}", variants: [{ class: "small", latex: "\\sinh" }, { class: "small", latex: "\\sin^{-1}" }, { class: "small", latex: "\\arsinh" }] }, "\\ln", { latex: "\\mathrm{abs}", insert: "\\mathrm{abs}\\left(#0\\right)" }, { latex: "\\rarr", shift: "\\rArr", variants: [{ latex: "\\implies", aside: "implies" }, { latex: "\\to", aside: "to" }, "\\dashv", { latex: "\\roundimplies", aside: "round implies" }] }, { latex: "\\exists", variants: ["\\nexists"], shift: "\\nexists" }, { latex: "\\in", shift: "\\notin", variants: ["\\notin", "\\owns"] }, "\\cup", { latex: "\\overrightarrow{#@}", shift: "\\overleftarrow{#@}", variants: ["\\overleftarrow{#@}", "\\bar{#@}", "\\vec{#@}", "\\hat{#@}", "\\check{#@}", "\\dot{#@}", "\\ddot{#@}", "\\mathring{#@}", "\\breve{#@}", "\\acute{#@}", "\\tilde{#@}", "\\grave{#@}"] }, { class: "small hide-shift", latex: "\\lim_{#?}", shift: "\\lim_{x\\to\\infty}", variants: [{ class: "small", latex: "\\liminf_{#?}" }, { class: "small", latex: "\\limsup_{#?}" }] }, "\\exponentialE"], [{ latex: "\\cos", shift: "\\cos^{-1}", variants: [{ class: "small", latex: "\\cosh" }, { class: "small", latex: "\\cos^{-1}" }, { class: "small", latex: "\\arcosh" }] }, { latex: "\\log", shift: "\\log_{10}", variants: ["\\log_{#0}", "\\log_{10}"] }, "\\left\\vert#0\\right\\vert", { latex: "\\larr", shift: "\\lArr", variants: [{ latex: "\\impliedby", aside: "implied by" }, { latex: "\\gets", aside: "gets" }, "\\lArr", "\\vdash", { latex: "\\models", aside: "models" }] }, { latex: "\\forall", shift: "\\lnot", variants: [{ latex: "\\land", aside: "and" }, { latex: "\\lor", aside: "or" }, { latex: "\\oplus", aside: "xor" }, { latex: "\\lnot", aside: "not" }, { latex: "\\downarrow", aside: "nor" }, { latex: "\\uparrow", aside: "nand" }, { latex: "\\curlywedge", aside: "nor" }, { latex: "\\bar\\curlywedge", aside: "nand" }] }, { latex: "\\ni", shift: "\\not\\owns" }, "\\cap", { latex: "\\overline{#@}", shift: "\\underline{#@}", variants: ["\\overbrace{#@}", "\\overlinesegment{#@}", "\\overleftrightarrow{#@}", "\\overrightarrow{#@}", "\\overleftarrow{#@}", "\\overgroup{#@}", "\\underbrace{#@}", "\\underlinesegment{#@}", "\\underleftrightarrow{#@}", "\\underrightarrow{#@}", "\\underleftarrow{#@}", "\\undergroup{#@}"] }, { class: "hide-shift small", latex: "\\int", shift: "\\iint", variants: [{ latex: "\\int_{#?}^{#?}", class: "small" }, { latex: "\\int", class: "small" }, { latex: "\\smallint", class: "small" }, { latex: "\\iint", class: "small" }, { latex: "\\iiint", class: "small" }, { latex: "\\oint", class: "small" }, "\\intop", "\\iiint", "\\oiint", "\\oiiint", "\\intclockwise", "\\varointclockwise", "\\ointctrclockwise", "\\intctrclockwise"] }, { latex: "\\pi", shift: "\\tau", variants: ["\\tau"] }], [{ latex: "\\tan", shift: "\\tan^{-1}", variants: [{ class: "small", latex: "\\tanh" }, { class: "small", latex: "\\tan^{-1}" }, { class: "small", latex: "\\artanh" }, { class: "small", latex: "\\arctan" }, { class: "small", latex: "\\arctg" }, { class: "small", latex: "\\tg" }] }, { latex: "\\exp", insert: "\\exp\\left(#0\\right)", variants: ["\\exponentialE^{#0}"] }, "\\left\\Vert#0\\right\\Vert", { latex: "\\lrArr", shift: "\\leftrightarrow", variants: [{ latex: "\\iff", aside: "if and only if" }, "\\leftrightarrow", "\\leftrightarrows", "\\Leftrightarrow", { latex: "^\\biconditional", aside: "biconditional" }] }, { latex: "\\vert", shift: "!" }, { latex: "#@^{\\complement}", aside: "complement", variants: [{ latex: "\\setminus", aside: "set minus" }, { latex: "\\smallsetminus", aside: "small set minus" }] }, { latex: "\\subset", shift: "\\subseteq", variants: ["\\subset", "\\subseteq", "\\subsetneq", "\\varsubsetneq", "\\subsetneqq", "\\nsubset", "\\nsubseteq", "\\supset", "\\supseteq", "\\supsetneq", "\\supsetneqq", "\\nsupset", "\\nsupseteq"] }, { latex: "#@^{\\prime}", shift: "#@^{\\doubleprime}", variants: ["#@^{\\doubleprime}", "#@\\degree"] }, { latex: "\\mathrm{d}", shift: "\\partial", variants: ["\\mathrm{d}x", { latex: "\\dfrac{\\mathrm{d}}{\\mathrm{d} x}", class: "small" }, { latex: "\\frac{\\partial}{\\partial x}", class: "small" }, "\\partial"] }, { latex: "\\infty", variants: ["\\aleph_0", "\\aleph_1", "\\omega", "\\mathfrak{m}"] }], [{ label: "[shift]", width: 2 }, { class: "box", latex: ",", shift: ";", variants: [";", "?"] }, { class: "box", latex: "\\colon", shift: "\\Colon", variants: [{ latex: "\\Colon", aside: "such that", class: "box" }, { latex: ":", aside: "ratio", class: "box" }, { latex: "\\vdots", aside: "", class: "box" }, { latex: "\\ddots", aside: "", class: "box" }, { latex: "\\ldotp", aside: "low dot", class: "box" }, { latex: "\\cdotp", aside: "center dot", class: "box" }, { latex: "\\ldots", aside: "low ellipsis", class: "box" }, { latex: "\\cdots", aside: "center ellipsis", class: "box" }, { latex: "\\therefore", aside: "therefore", class: "box" }, { latex: "\\because", aside: "because", class: "box" }] }, { class: "box", latex: "\\cdot", aside: "centered dot", shift: "\\ast", variants: ["\\circ", "\\bigcirc", "\\bullet", "\\odot", "\\oslash", "\\circledcirc", "\\ast", "\\star", "\\times", "\\doteq", "\\doteqdot"] }, "[separator]", "[left]", "[right]", { label: "[backspace]", width: 1, class: "action hide-shift" }, { label: "[action]", width: 1 }]] }, compact: { label: "compact", rows: [["[+]", "[-]", "[*]", "[/]", "[=]", "[.]", "[(]", "[)]", "\\sqrt{#0}", "#@^{#?}"], ["[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]", "[9]", "[0]"], ["[hr]"], ["[undo]", "[redo]", "[separator]", "[separator]", "[separator]", "[left]", "[right]", { label: "[backspace]", class: "action hide-shift" }, "[hide-keyboard]"]] }, minimalist: { label: "minimalist", layers: [{ style: `
          .minimalist-backdrop {
            display: flex;
            justify-content: center;
          }          
          .minimalist-container {
            --keycap-height: 40px;
            --keycap-max-width: 53px;
            --keycap-small-font-size: 12px;
            background: var(--keyboard-background);
            padding: 20px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border: 1px solid var(--keyboard-border);
            box-shadow: 0 0 32px rgb(0 0 0 / 30%);
          }        
        `, backdrop: "minimalist-backdrop", container: "minimalist-container", rows: [["+", "-", "\\times", { latex: "\\frac{#@}{#0}", class: "small" }, "=", "[.]", "(", ")", { latex: "\\sqrt{#0}", class: "small" }, { latex: "#@^{#?}", class: "small" }], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], ["[hr]"], ["[undo]", "[redo]", "[separator]", "[separator]", "[separator]", "[left]", "[right]", { label: "[backspace]", class: "action hide-shift" }, "[hide-keyboard]"]] }] }, "numeric-only": { label: "123", labelClass: "MLK__tex-math", tooltip: "keyboard.tooltip.numeric", id: "numeric-only", rows: [["7", "8", "9", "[separator]", { label: "[backspace]", width: 2 }], ["4", "5", "6", "[separator]", "[separator]", "[separator]"], ["1", "2", "3", "[separator]", "[separator]", "[separator]"], ["0", { label: "[.]", variants: [] }, "-", "[separator]", "[left]", "[right]"]] } }, Wa = { 0: ["\\varnothing", "\\infty"], 1: ["\\frac{1}{#@}", "#@^{-1}", "\\times 10^{#?}", "\\phi", "\\imaginaryI"], 2: ["\\frac{1}{2}", "#@^2", "\\sqrt2", "\\exponentialE"], 3: ["\\frac{1}{3}", "#@^3", "\\sqrt3", "\\pi"], 4: ["\\frac{1}{4}", "#@^4"], 5: ["\\frac{1}{5}", "#@^5", "\\sqrt5"], 6: ["\\frac{1}{6}", "#@^6"], 7: ["\\frac{1}{7}", "#@^7"], 8: ["\\frac{1}{8}", "#@^8"], 9: ["\\frac{1}{9}", "#@^9"], ".": [".", ",", ";", "\\colon"], ",": ["{,}", ".", ";", "\\colon"], a: [{ latex: "\\aleph", aside: "aleph" }, { latex: "\\forall", aside: "for all" }, "à", "á", "â", "ä", "æ"], b: [{ latex: "\\beth", aside: "beth" }], c: [{ latex: "\\C", aside: "set of complex numbers" }, "ç"], d: [{ latex: "\\daleth", aside: "daleth" }], e: [{ latex: "\\exponentialE", aside: "exponential e" }, { latex: "\\exists", aside: "there is" }, { latex: "\\nexists", aside: "there isn’t" }, "è", "é", "ê", "ë"], g: [{ latex: "\\gimel", aside: "gimel" }], h: [{ latex: "\\hbar", aside: "h bar" }, { latex: "\\hslash", aside: "h slash" }], i: [{ latex: "\\imaginaryI", aside: "imaginary i" }, "ì", "í", "î", "ï"], j: [{ latex: "\\imaginaryJ", aside: "imaginary j" }], l: [{ latex: "\\ell", aside: "ell" }], n: [{ latex: "\\mathbb{N}", aside: "set of natural numbers" }, "ñ"], o: ["ø", "œ", "ò", "ó", "ô", "ö", "œ"], p: [{ latex: "\\mathbb{P}", aside: "set of primes" }], q: [{ latex: "\\mathbb{Q}", aside: "set of rational numbers" }], r: [{ latex: "\\mathbb{R}", aside: "set of real numbers" }], u: ["ù", "ú", "û", "ü"], z: [{ latex: "\\mathbb{Z}", aside: "set of integers" }], y: ["ý", "ÿ"], space: [{ latex: '\\char"203A\\!\\char"2039', insert: "\\!", aside: "negative thin space<br>⁻³⧸₁₈ em" }, { latex: '\\char"203A\\,\\char"2039', insert: "\\,", aside: "thin space<br>³⧸₁₈ em" }, { latex: '\\char"203A\\:\\char"2039', insert: "\\:", aside: "medium space<br>⁴⧸₁₈ em" }, { latex: '\\char"203A\\;\\char"2039', insert: "\\;", aside: "thick space<br>⁵⧸₁₈ em" }, { latex: '\\char"203A\\ \\char"2039', insert: "\\ ", aside: "⅓ em" }, { latex: '\\char"203A\\enspace\\char"2039', insert: "\\enspace", aside: "½ em" }, { latex: '\\char"203A\\quad\\char"2039', insert: "\\quad", aside: "1 em" }, { latex: '\\char"203A\\qquad\\char"2039', insert: "\\qquad", aside: "2 em" }] }, sn;
function Em(e, t) {
  var i, r, n;
  let a = ti.singleton;
  if (!a) return;
  let o = or(e), s = (r = (i = a.getKeycap(o == null ? void 0 : o.id)) == null ? void 0 : i.variants) != null ? r : "";
  if (typeof s == "string" && !Dm(s) || Array.isArray(s) && s.length === 0) {
    t == null || t();
    return;
  }
  let l = {}, u = "";
  for (let y of z3(s)) {
    let w = Fm(y), g = Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36);
    l[g] = w;
    let [k, A] = Oo(w);
    u += `<div id=${g} class="item ${A}">${k}</div>`;
  }
  let c = document.createElement("div");
  c.setAttribute("aria-hidden", "true"), c.className = "MLK__variant-panel", c.style.height = "auto";
  let d = Object.keys(l).length, h = 5;
  d === 1 ? h = 1 : d === 2 || d === 4 ? h = 2 : d === 3 || d === 5 || d === 6 ? h = 3 : d >= 7 && d < 14 && (h = 4), c.style.width = `calc(var(--variant-keycap-length) * ${h} + 12px)`, c.innerHTML = lf.createHTML(u), Ge.open({ root: (n = a == null ? void 0 : a.container) == null ? void 0 : n.querySelector(".ML__keyboard"), child: c }), sn = new AbortController();
  let { signal: p } = sn, m = e == null ? void 0 : e.getBoundingClientRect();
  if (m) {
    m.top - c.clientHeight < 0 && (c.style.width = "auto", d <= 6 ? c.style.height = "56px" : d <= 12 ? c.style.height = "108px" : d <= 18 ? c.style.height = "205px" : c.classList.add("compact"));
    let y = Math.max(0, Math.min(window.innerWidth - c.offsetWidth, (m.left + m.right - c.offsetWidth) / 2)), w = m.top - c.clientHeight + 5;
    c.style.transform = `translate(${y}px, ${w}px)`, c.classList.add("is-visible"), requestAnimationFrame(() => {
      c.addEventListener("pointerup", (g) => {
        let k = or(g.target);
        !(k != null && k.id) || !l[k.id] || (dl(l[k.id]), ln(), t == null || t(), g.preventDefault());
      }, { capture: !0, passive: !1, signal: p }), c.addEventListener("pointerenter", (g) => {
        let k = or(g.target);
        !(k != null && k.id) || !l[k.id] || k.classList.add("is-active");
      }, { capture: !0, signal: p }), c.addEventListener("pointerleave", (g) => {
        let k = or(g.target);
        !(k != null && k.id) || !l[k.id] || k.classList.remove("is-active");
      }, { capture: !0, signal: p }), window.addEventListener("pointercancel", () => {
        ln(), t == null || t();
      }, { signal: p }), window.addEventListener("pointerup", () => {
        ln(), t == null || t();
      }, { signal: p });
    });
  }
}
function ln() {
  sn == null || sn.abort(), sn = null, Ge.state === "open" && Ge.close();
}
function F3(e) {
  if (e === "foreground-color") {
    let t = [];
    for (let i of Object.keys(Ai)) t.push({ class: "swatch-button", label: '<span style="border: 3px solid ' + Ai[i] + '"></span>', command: ["applyStyle", { color: i }] });
    return t;
  }
  if (e === "background-color") {
    let t = [];
    for (let i of Object.keys(Bi)) t.push({ class: "swatch-button", label: '<span style="background:' + Bi[i] + '"></span>', command: ["applyStyle", { backgroundColor: i }] });
    return t;
  }
}
function Dm(e) {
  return Wa[e] !== void 0;
}
function z3(e) {
  var t;
  return typeof e != "string" ? e : (Wa[e] || (Wa[e] = (t = F3(e)) != null ? t : []), Wa[e]);
}
function K3(e) {
  return typeof e == "string" ? e : Object.entries(e).map(([t, i]) => `${t}:${i} !important`).join(";");
}
function $3(e) {
  return Object.keys(e).map((t) => `${t} {${K3(e[t])}}`).join("");
}
function Vr(e) {
  if (!e) return "";
  let t = new I(), i = new v({ mode: "math", type: "root", body: Te(e, { context: t, args: (n) => n === "@" ? "{\\class{ML__box-placeholder}{\\blacksquare}}" : "\\placeholder{}" }) }), r = Bo(Tn(new S(i.render(t), { classes: "ML__base" }), t));
  return Ao(r, { classes: "ML__latex" }).toMarkup();
}
function un(e) {
  if (Array.isArray(e)) return e.map((i) => un(i)).flat();
  let t = typeof e == "string" ? { markup: e } : e;
  return "rows" in t && Array.isArray(t.rows) && (t.rows = t.rows.map((i) => i.map((r) => Fm(r)))), t.id != null || (t.id = "ML__layer_" + Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36)), [t];
}
function P3() {
  var e, t;
  let i = window.mathVirtualKeyboard.alphabeticLayout;
  if (i === "auto") {
    let o = vn();
    o && (i = o.virtualLayout), (!i || i === "auto") && (i = (e = { fr: "azerty", be: "azerty", al: "qwertz", ba: "qwertz", cz: "qwertz", de: "qwertz", hu: "qwertz", sk: "qwertz", ch: "qwertz" }[N.locale.slice(0, 2)]) != null ? e : "qwerty");
  }
  let r = { qwerty: ["qwertyuiop", " asdfghjkl ", "^zxcvbnm~"], azerty: ["azertyuiop", "qsdfghjklm", "^ wxcvbn ~"], qwertz: ["qwertzuiop", " asdfghjkl ", "^yxcvbnm~"], dvorak: ["^  pyfgcrl ", "aoeuidhtns", "qjkxbmwvz~"], colemak: [" qwfpgjluy ", "arstdhneio", "^zxcvbkm~"] }, n = (t = r[i]) != null ? t : r.qwerty, a = i === "azerty" ? [[{ label: "1", variants: "1" }, { label: "2", shift: { latex: "é" }, variants: "2" }, { label: "3", shift: { latex: "ù" }, variants: "3" }, { label: "4", variants: "4" }, { label: "5", shift: { label: "(", latex: "(" }, variants: "5" }, { label: "6", shift: { label: ")", latex: ")" }, variants: "6" }, { label: "7", shift: { latex: "è" }, variants: "7" }, { label: "8", shift: { latex: "ê" }, variants: "8" }, { label: "9", shift: { latex: "ç" }, variants: "9" }, { label: "0", shift: { latex: "à" }, variants: "0" }]] : [[{ label: "1", variants: "1" }, { label: "2", variants: "2" }, { label: "3", variants: "3" }, { label: "4", variants: "4" }, { label: "5", shift: { latex: "\\frac{#@}{#?}" }, variants: "5" }, { label: "6", shift: { latex: "#@^#?" }, variants: "6" }, { label: "7", variants: "7" }, { label: "8", shift: { latex: "\\times" }, variants: "8" }, { label: "9", shift: { label: "(", latex: "(" }, variants: "9" }, { label: "0", shift: { label: ")", latex: ")" }, variants: "0" }]];
  for (let o of n) {
    let s = [];
    for (let l of o) /[a-z]/.test(l) ? s.push({ label: l, class: "hide-shift", shift: { label: l.toUpperCase() }, variants: Dm(l) ? l : void 0 }) : l === "~" ? i !== "dvorak" ? s.push("[backspace]") : s.push({ label: "[backspace]", width: 1 }) : l === "^" ? s.push("[shift]") : l === " " && s.push("[separator-5]");
    a.push(s);
  }
  return a.push(["[-]", "[+]", "[=]", { label: " ", width: 1.5 }, { label: ",", shift: ";", variants: ".", class: "hide-shift" }, "[.]", "[left]", "[right]", { label: "[action]", width: 1.5 }]), { label: "abc", labelClass: "MLK__tex-math", tooltip: "keyboard.tooltip.alphabetic", layers: un({ rows: a }) };
}
function Tm(e) {
  if (e === "alphabetic") return P3();
  if (typeof e == "string") return Tm(T3[e]);
  let t;
  if ("rows" in e && Array.isArray(e.rows)) {
    let n = e, { rows: a } = n, o = eo(n, ["rows"]);
    t = b(f({}, o), { layers: un({ rows: e.rows }) });
  } else if ("markup" in e && typeof e.markup == "string") {
    let n = e, { markup: a } = n, o = eo(n, ["markup"]);
    t = b(f({}, o), { layers: un(e.markup) });
  } else t = f({}, e), "layers" in e ? t.layers = un(e.layers) : console.error('MathLive 0.98.6: provide either a "rows", "markup" or "layers" property');
  let i = !1, r = !1;
  for (let n of t.layers) if (n.rows) for (let a of n.rows.flat()) {
    mr(a) && (i = !0);
    let o = a.command;
    typeof o == "string" && ["undo", "redo", "cut", "copy", "paste"].includes(o) && (r = !0);
  }
  return (!("displayShiftedKeycaps" in e) || e.displayShiftedKeycaps === void 0) && (t.displayShiftedKeycaps = i), (!("displayEditToolbar" in e) || e.displayEditToolbar === void 0) && (t.displayEditToolbar = !r), t;
}
function N3(e, t) {
  var i, r;
  let n = '<div class="left">';
  if (e.normalizedLayouts.length > 1) for (let [a, o] of e.normalizedLayouts.entries()) {
    let s = o, l = [a === t ? "selected" : "layer-switch"];
    s.tooltip && l.push("MLK__tooltip"), s.labelClass && l.push(...s.labelClass.split(" ")), n += `<div class="${l.join(" ")}"`, s.tooltip && (n += " data-tooltip='" + ((i = $(s.tooltip)) != null ? i : s.tooltip) + "' "), a !== t && (n += `data-layer="${s.layers[0].id}"`), n += `>${(r = s.label) != null ? r : "untitled"}</div>`;
  }
  return n += "</div>", n;
}
function O3(e, t) {
  let i = "";
  if (e.editToolbar === "none") return "";
  let r = [];
  t.selectionIsCollapsed ? r.push("undo", "redo", "pasteFromClipboard") : r.push("cutToClipboard", "copyToClipboard", "pasteFromClipboard");
  let n = { undo: `<div class='action ${t.canUndo === !1 ? "disabled" : ""}'
          data-command='"undo"'
          data-tooltip='${$("tooltip.undo")}'>
          <svg><use xlink:href='#svg-undo' /></svg>
      </div>`, redo: `<div class='action ${t.canRedo === !1 ? "disabled" : ""}'
          data-command='"redo"'
          data-tooltip='${$("tooltip.redo")}'>
          <svg><use xlink:href='#svg-redo' /></svg>
      </div>`, cutToClipboard: `
        <div class='action'
            data-command='"cutToClipboard"'
            data-tooltip='${$("tooltip.cut to clipboard")}'>
            <svg><use xlink:href='#svg-cut' /></svg>
        </div>
    `, copyToClipboard: `
        <div class='action'
            data-command='"copyToClipboard"'
            data-tooltip='${$("tooltip.copy to clipboard")}'>
            <svg><use xlink:href='#svg-copy' /></svg>
        </div>
    `, pasteFromClipboard: `
        <div class='action'
            data-command='"pasteFromClipboard"'
            data-tooltip='${$("tooltip.paste from clipboard")}'>
            <svg><use xlink:href='#svg-paste' /></svg>
        </div>
    ` };
  return i += r.map((a) => n[a]).join(""), i;
}
function I3(e) {
  for (let t of e) R3(t);
}
function R3(e) {
  let t = ti.singleton;
  if (!t) return;
  let i = {};
  if (!e.id) {
    if (e.hasAttribute("data-label") && (i.label = e.dataset.label), e.hasAttribute("data-latex") && (i.latex = e.dataset.latex), e.hasAttribute("data-key") && (i.key = e.dataset.key), e.hasAttribute("data-insert") && (i.insert = e.dataset.insert), e.hasAttribute("data-variants") && (i.variants = e.dataset.variants), e.hasAttribute("data-aside") && (i.aside = e.dataset.aside), e.className && (i.class = e.className), !i.label && !i.latex && !i.key && !i.insert && (i.latex = e.innerText, i.label = e.innerHTML), e.hasAttribute("data-command")) try {
      i.command = JSON.parse(e.dataset.command);
    } catch {
    }
    e.id = t.registerKeycap(i);
  }
  if (!e.innerHTML) {
    let [r, n] = Oo(i);
    e.innerHTML = globalThis.MathfieldElement.createHTML(r);
  }
}
function q3() {
  Zt("virtual-keyboard"), Zt("core"), su();
}
function j3() {
  Yt("core"), Yt("virtual-keyboard");
}
var V3 = `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">

<symbol id="svg-delete-backward" viewBox="0 0 576 512">
  <path d="M432.1 208.1L385.9 256L432.1 303C442.3 312.4 442.3 327.6 432.1 336.1C423.6 346.3 408.4 346.3 399 336.1L352 289.9L304.1 336.1C295.6 346.3 280.4 346.3 271 336.1C261.7 327.6 261.7 312.4 271 303L318.1 256L271 208.1C261.7 199.6 261.7 184.4 271 175C280.4 165.7 295.6 165.7 304.1 175L352 222.1L399 175C408.4 165.7 423.6 165.7 432.1 175C442.3 184.4 442.3 199.6 432.1 208.1V208.1zM512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64L512 64zM528 128C528 119.2 520.8 112 512 112H205.3C201 112 196.9 113.7 193.9 116.7L54.63 256L193.9 395.3C196.9 398.3 201 400 205.3 400H512C520.8 400 528 392.8 528 384V128z"/>
</symbol>

<symbol id="svg-shift" viewBox="0 0 384 512">
  <path d="M2.438 252.3C7.391 264.2 19.06 272 32 272h80v160c0 26.51 21.49 48 48 48h64C250.5 480 272 458.5 272 432v-160H352c12.94 0 24.61-7.797 29.56-19.75c4.953-11.97 2.219-25.72-6.938-34.88l-160-176C208.4 35.13 200.2 32 192 32S175.6 35.13 169.4 41.38l-160 176C.2188 226.5-2.516 240.3 2.438 252.3zM192 86.63L313.4 224H224v208H160V224H70.63L192 86.63z"/>
</symbol>

<symbol id="svg-commit" viewBox="0 0 512 512">
  <path d="M135 432.1l-128-128C2.344 300.3 0 294.2 0 288s2.344-12.28 7.031-16.97l128-128c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L81.94 264H464v-208C464 42.75 474.8 32 488 32S512 42.75 512 56V288c0 13.25-10.75 24-24 24H81.94l87.03 87.03c9.375 9.375 9.375 24.56 0 33.94S144.4 442.3 135 432.1z"/>
</symbol>


<symbol id="circle-plus" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344c0 13.3 10.7 24 24 24s24-10.7 24-24V280h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V168c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/></symbol>

<symbol id="svg-command" viewBox="0 0 640 512">
  <path d="M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z"/>
</symbol>

<symbol id="svg-undo" viewBox="0 0 512 512">
  <path d="M20 8h10c6.627 0 12 5.373 12 12v110.625C85.196 57.047 165.239 7.715 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.834 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.069-7.069c4.503-4.503 11.749-4.714 16.482-.454C150.782 449.238 200.935 470 256 470c117.744 0 214-95.331 214-214 0-117.744-95.331-214-214-214-82.862 0-154.737 47.077-190.289 116H180c6.627 0 12 5.373 12 12v10c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12V20c0-6.627 5.373-12 12-12z"/>
</symbol>
<symbol id="svg-redo" viewBox="0 0 512 512">
  <path d="M492 8h-10c-6.627 0-12 5.373-12 12v110.625C426.804 57.047 346.761 7.715 255.207 8.001 118.82 8.428 7.787 120.009 8 256.396 8.214 393.181 119.166 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-7.069-7.069c-4.503-4.503-11.749-4.714-16.482-.454C361.218 449.238 311.065 470 256 470c-117.744 0-214-95.331-214-214 0-117.744 95.331-214 214-214 82.862 0 154.737 47.077 190.289 116H332c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h160c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12z"/>
</symbol>
<symbol id="svg-arrow-left" viewBox="0 0 320 512">
  <path d="M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z"/>
</symbol>
<symbol id="svg-arrow-right" viewBox="0 0 320 512">
  <path d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"/>
</symbol>
<symbol id="svg-tab" viewBox="0 0 448 512">
  <path d="M32 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l143.5 143.1c6.3 6.3 6.3 16.4 0 22.7L205.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H48c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l143.6-143c18.8-18.8 18.8-49.2 0-68L228.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H48c-26.5 0-48 21.6-48 48zM436 64h-8c-6.6 0-12 5.4-12 12v360c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12z"/>
</symbol>
<symbol id="svg-paste" viewBox="0 0 512 512"><path d="M160 32c11.6 0 21.3 8.2 23.5 19.2C185 58.6 191.6 64 199.2 64H208c8.8 0 16 7.2 16 16V96H96V80c0-8.8 7.2-16 16-16h8.8c7.6 0 14.2-5.4 15.7-12.8C138.7 40.2 148.4 32 160 32zM64 64h2.7C65 69 64 74.4 64 80V96c0 17.7 14.3 32 32 32H224c17.7 0 32-14.3 32-32V80c0-5.6-1-11-2.7-16H256c17.7 0 32 14.3 32 32h32c0-35.3-28.7-64-64-64H210.6c-9-18.9-28.3-32-50.6-32s-41.6 13.1-50.6 32H64C28.7 32 0 60.7 0 96V384c0 35.3 28.7 64 64 64H192V416H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM288 480c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h96v56c0 22.1 17.9 40 40 40h56V448c0 17.7-14.3 32-32 32H288zM416 165.3L474.7 224H424c-4.4 0-8-3.6-8-8V165.3zM448 512c35.3 0 64-28.7 64-64V235.9c0-12.7-5.1-24.9-14.1-33.9l-59.9-59.9c-9-9-21.2-14.1-33.9-14.1H288c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H448z"/></symbol>
<symbol id="svg-cut" viewBox="0 0 512 512"><path d="M485.6 444.2L333.6 314.9C326.9 309.2 326.1 299.1 331.8 292.4C337.5 285.6 347.6 284.8 354.4 290.5L506.4 419.8C513.1 425.5 513.9 435.6 508.2 442.4C502.5 449.1 492.4 449.9 485.6 444.2zM485.7 67.76C492.5 62.07 502.5 62.94 508.2 69.69C513.9 76.45 513.1 86.55 506.3 92.24L208.5 343.1C218.3 359.7 224 379.2 224 400C224 461.9 173.9 512 112 512C50.14 512 0 461.9 0 400C0 338.1 50.14 288 112 288C141.5 288 168.4 299.4 188.4 318.1L262.2 256L188.4 193.9C168.4 212.6 141.5 224 112 224C50.14 224 0 173.9 0 112C0 50.14 50.14 0 112 0C173.9 0 224 50.14 224 112C224 132.8 218.3 152.3 208.5 168.9L287 235.1L485.7 67.76zM32 112C32 156.2 67.82 192 112 192C156.2 192 192 156.2 192 112C192 67.82 156.2 32 112 32C67.82 32 32 67.82 32 112zM112 480C156.2 480 192 444.2 192 400C192 355.8 156.2 320 112 320C67.82 320 32 355.8 32 400C32 444.2 67.82 480 112 480z"/></symbol>
<symbol id="svg-copy" viewBox="0 0 512 512"><path d="M272 416C263.2 416 256 423.2 256 432V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128H63.99c-35.35 0-64 28.65-64 64l.0098 256C0 483.3 28.65 512 64 512h160c35.35 0 64-28.65 64-64v-16C288 423.2 280.8 416 272 416zM502.6 86.63l-77.25-77.25C419.4 3.371 411.2 0 402.7 0H288C252.7 0 224 28.65 224 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3C512 100.8 508.6 92.63 502.6 86.63zM416 45.25L466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32h-160c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.0026 64c0 17.67 14.33 32 32 32H480V320z"/>
</symbol>
<symbol id="svg-angle-double-right" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
</symbol>
<symbol id="svg-angle-double-left" viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/>
</symbol>
<symbol id="svg-trash" viewBox="0 0 448 512">
  <path d="M336 64l-33.6-44.8C293.3 7.1 279.1 0 264 0h-80c-15.1 0-29.3 7.1-38.4 19.2L112 64H24C10.7 64 0 74.7 0 88v2c0 3.3 2.7 6 6 6h26v368c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V96h26c3.3 0 6-2.7 6-6v-2c0-13.3-10.7-24-24-24h-88zM184 32h80c5 0 9.8 2.4 12.8 6.4L296 64H152l19.2-25.6c3-4 7.8-6.4 12.8-6.4zm200 432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V96h320v368zm-176-44V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm-80 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm160 0V156c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v264c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12z"/>
</symbol>
<symbol id="svg-keyboard-down" viewBox="0 0 576 512"><path d="M64 48c-8.8 0-16 7.2-16 16V240c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H512c35.3 0 64 28.7 64 64V240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM159 359c9.4-9.4 24.6-9.4 33.9 0l95 95 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L305 505c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7L159 393c-9.4-9.4-9.4-24.6 0-33.9zm1-167c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V192zM120 88h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zm64 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H200c-8.8 0-16-7.2-16-16V104zm96-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H280c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zm64 16c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H360c-8.8 0-16-7.2-16-16V104zm96-16h16c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H440c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16z"/></symbol>
</svg>`;
function H3(e) {
  e.resetKeycapRegistry(), q3();
  let t = document.createElement("div");
  t.className = "ML__keyboard";
  let i = document.createElement("div");
  i.className = "MLK__plate", i.innerHTML = globalThis.MathfieldElement.createHTML(V3 + e.normalizedLayouts.map((o, s) => W3(e, o, s)).join(""));
  let r = document.createElement("div");
  r.className = "MLK__backdrop", r.appendChild(i), t.appendChild(r), t.addEventListener("pointerdown", J3, { passive: !1 });
  let n = t.querySelectorAll(".ML__edit-toolbar");
  if (n) for (let o of n) o.addEventListener("click", (s) => {
    var l, u;
    let c = s.target, d = "";
    for (; c && !d; ) d = (l = c == null ? void 0 : c.getAttribute("data-command")) != null ? l : "", c = (u = c == null ? void 0 : c.parentElement) != null ? u : null;
    d && e.executeCommand(JSON.parse(d));
  });
  I3(t.querySelectorAll(".MLK__keycap, .action, .fnbutton, .bigfnbutton"));
  let a = t.querySelectorAll(".MLK__layer");
  a.length > 0;
  for (let o of a) o.addEventListener("pointerdown", (s) => s.preventDefault());
  return e.currentLayer = e.latentLayer, t;
}
function W3(e, t, i) {
  let r = [];
  if (!("layers" in t)) return "";
  for (let n of t.layers) r.push(`<div tabindex="-1" class="MLK__layer" id="${n.id}">`), (e.normalizedLayouts.length > 1 || t.displayEditToolbar) && (r.push("<div class='MLK__toolbar' role='toolbar'>"), r.push(N3(e, i)), t.displayEditToolbar && r.push('<div class="ML__edit-toolbar right"></div>'), r.push("</div>")), r.push(U3(e, n)), r.push("</div>");
  return r.join("");
}
function U3(e, t) {
  if (typeof t == "string") return t;
  let i = "";
  if (typeof t.style == "string" ? i += `<style>${t.style}</style>` : typeof t.style == "object" && (i += `<style>${$3(t.style)}</style>`), t.backdrop && (i += `<div class='${t.backdrop}'>`), t.container && (i += `<div class='${t.container}'>`), t.rows) {
    i += "<div class=MLK__rows>";
    for (let r of t.rows) {
      i += '<div dir="ltr" class=MLK__row>';
      for (let n of r) if (n) {
        let a = e.registerKeycap(n), [o, s] = Oo(n);
        /(^|\s)separator/.test(s) ? i += `<div class="${s}"` : i += `<div tabindex="-1" id="${a}" class="${s}"`, n.tooltip && (i += ` data-tooltip="${n.tooltip}"`), i += `>${o}</div>`;
      }
      i += "</div>";
    }
    i += "</div>";
  } else t.markup && (i += t.markup);
  return t.container && (i += "</div>"), t.backdrop && (i += "</div>"), i;
}
function Oo(e, t = { shifted: !1 }) {
  var i, r, n, a, o, s, l;
  let u = "", c = (i = e.class) != null ? i : "";
  if (t.shifted && mr(e) && (c += " is-active"), t.shifted && "shift" in e) typeof e.shift == "string" ? u = Vr(e.shift) : typeof e.shift == "object" && (u = e.shift.label ? e.shift.label : (r = Vr(e.shift.latex || e.shift.insert || "") || e.shift.key) != null ? r : ""), typeof e.shift == "object" && (c = (a = (n = e.shift.class) != null ? n : e.class) != null ? a : "");
  else {
    if (u = e.label ? e.label : (o = Vr(e.latex || e.insert || "") || e.key) != null ? o : "", e.shift) {
      let d;
      typeof e.shift == "string" ? d = Vr(e.shift) : e.shift.label ? d = e.shift.label : d = (s = Vr(e.shift.latex || e.shift.insert || "") || e.shift.key) != null ? s : "", u += `<span class="MLK__shift">${d}</span>`;
    }
    e.aside && (u += `<aside>${e.aside}</aside>`);
  }
  return e.layer && !/layer-switch/.test(c) && (c += " layer-switch"), /(^|\s)(separator|action|shift|fnbutton|bigfnbutton)($|\s)/.test(c) || (c += " MLK__keycap"), !/\bw[0-9]+\b/.test(c) && e.width && (c += (l = { 0: " w0", 0.5: " w5", 1.5: " w15", 2: " w20", 5: " w50" }[e.width]) != null ? l : ""), [u, c || "MLK__keycap"];
}
var ci = { "[left]": { class: "action hide-shift", label: "<svg class=svg-glyph><use xlink:href=#svg-arrow-left /></svg>", command: ["performWithFeedback", "moveToPreviousChar"], shift: { label: "<svg class=svg-glyph><use xlink:href=#svg-angle-double-left /></svg>", command: ["performWithFeedback", "extendSelectionBackward"] } }, "[right]": { class: "action hide-shift", label: "<svg class=svg-glyph><use xlink:href=#svg-arrow-right /></svg>", command: ["performWithFeedback", "moveToNextChar"], shift: { label: "<svg class=svg-glyph><use xlink:href=#svg-angle-double-right /></svg>", command: ["performWithFeedback", "extendSelectionForward"] } }, "[up]": { class: "action hide-shift", label: "↑", command: ["performWithFeedback", "moveUp"], shift: { label: "↟", command: ["performWithFeedback", "extendSelectionUpward"] } }, "[down]": { class: "action hide-shift", label: "↓", command: ["performWithFeedback", "moveDown"], shift: { label: "↡", command: ["performWithFeedback", "extendSelectionDownward"] } }, "[return]": { class: "action hide-shift", command: ["performWithFeedback", "commit"], shift: { command: ["performWithFeedback", "addRowAfter"] }, width: 1.5, label: "<svg class=svg-glyph><use xlink:href=#svg-commit /></svg>" }, "[action]": { class: "action hide-shift", command: ["performWithFeedback", "commit"], shift: { label: "<svg class=svg-glyph><use xlink:href=#circle-plus /></svg>", command: ["performWithFeedback", "addRowAfter"] }, width: 1.5, label: "<svg class=svg-glyph><use xlink:href=#svg-commit /></svg>" }, "[hr]": { class: "separator horizontal-rule" }, "[hide-keyboard]": { class: "action", command: ["hideVirtualKeyboard"], width: 1.5, label: "<svg class=svg-glyph-lg><use xlink:href=#svg-keyboard-down /></svg>" }, "[.]": { variants: ".", command: ["performWithFeedback", "insertDecimalSeparator"], shift: ",", class: "big-op hide-shift", label: "." }, "[,]": { variants: ",", command: ["performWithFeedback", "insertDecimalSeparator"], shift: ".", class: "big-op hide-shift", label: "," }, "[+]": { variants: [{ latex: "\\sum_{#0}^{#0}", class: "small" }, "\\oplus"], latex: "+", label: "+", class: "big-op hide-shift", shift: { latex: "\\sum", insert: "\\sum", class: "small" } }, "[-]": { variants: ["\\pm", "\\ominus"], latex: "-", label: "&#x2212;", shift: "\\pm", class: "big-op hide-shift" }, "[/]": { class: "big-op hide-shift", shift: { class: "", latex: "\\frac{1}{#@}" }, variants: ["/", "\\div", "\\%", "\\oslash"], latex: "\\frac{#@}{#?}", label: "&divide;" }, "[*]": { variants: [{ latex: "\\prod_{#0}^{#0}", class: "small" }, "\\otimes", "\\cdot"], latex: "\\cdot", label: "&times;", shift: { latex: "\\times" }, class: "big-op hide-shift" }, "[=]": { variants: ["\\neq", "\\equiv", "\\varpropto", "\\thickapprox", "\\lt", "\\gt", "\\le", "\\ge"], latex: "=", label: "=", shift: { label: "≠", latex: "\\ne" }, class: "big-op hide-shift" }, "[backspace]": { class: "action bottom right hide-shift", width: 1.5, command: ["performWithFeedback", "deleteBackward"], label: "<svg class=svg-glyph><use xlink:href=#svg-delete-backward /></svg>", shift: { class: "action warning", label: "<svg class=svg-glyph><use xlink:href=#svg-trash /></svg>", command: "deleteAll" } }, "[undo]": { class: "ghost if-can-undo", command: "undo", label: "<svg class=svg-glyph><use xlink:href=#svg-undo /></svg>", tooltip: "tooltip.undo" }, "[redo]": { class: "ghost  if-can-redo", command: "redo", label: "<svg class=svg-glyph><use xlink:href=#svg-redo /></svg>", tooltip: "tooltip.redo" }, "[(]": { variants: [{ latex: "\\lbrack", key: "[" }, "\\langle", "\\lfloor", "\\lceil", { latex: "\\lbrace", key: "{" }], key: "(", label: "(", shift: { label: "[", key: "[" }, class: "hide-shift" }, "[)]": { variants: [{ latex: "\\rbrack", key: "]" }, "\\rangle", "\\rfloor", "\\rceil", { latex: "\\rbrace", key: "]" }], key: ")", label: ")", shift: { label: "]", latex: "\\rbrack" }, class: "hide-shift" }, "[0]": { variants: "0", latex: "0", label: "0", shift: "\\infty", class: "hide-shift" }, "[1]": { variants: "1", latex: "1", label: "1", shift: "#@^{-1}", class: "hide-shift" }, "[2]": { variants: "2", latex: "2", label: "2", shift: "#@^2", class: "hide-shift" }, "[3]": { variants: "3", latex: "3", label: "3", shift: "#@^3", class: "hide-shift" }, "[4]": { variants: "4", latex: "4", label: "4", shift: "#@^4", class: "hide-shift" }, "[5]": { variants: "5", latex: "5", label: "5", shift: "#@^5", class: "hide-shift" }, "[6]": { variants: "6", latex: "6", label: "6", shift: "#@^6", class: "hide-shift" }, "[7]": { variants: "7", latex: "7", label: "7", shift: "#@^7", class: "hide-shift" }, "[8]": { variants: "8", latex: "8", label: "8", shift: "#@^8", class: "hide-shift" }, "[9]": { variants: "9", latex: "9", label: "9", shift: "#@^9", class: "hide-shift" }, "[separator-5]": { class: "separator", width: 0.5 }, "[separator]": { class: "separator" }, "[separator-10]": { class: "separator" }, "[separator-15]": { class: "separator", width: 1.5 }, "[separator-20]": { class: "separator", width: 2 }, "[separator-50]": { class: "separator", width: 5 }, "[shift]": { class: "shift bottom left", width: 1.5, label: "<span class=caps-lock-indicator></span><svg class=svg-glyph><use xlink:href=#svg-shift /></svg>" }, "[foreground-color]": { variants: "foreground-color", command: ["applyStyle", { color: "red" }], label: "<span style='border-radius: 50%;width:22px;height:22px; border: 3px solid #cc2428; box-sizing: border-box'>" }, "[background-color]": { variants: "background-color", command: ["applyStyle", { backgroundColor: "yellow" }], label: "<span style='border-radius: 50%;width:22px;height:22px; background:#fff590; box-sizing: border-box'></span>" } };
function Fm(e) {
  var t;
  if (typeof e == "string") {
    if (e === "[.]" && globalThis.MathfieldElement.decimalSeparator === "," && (e = "[,]"), !ci[e]) return { latex: e };
    e = { label: e };
  }
  let i;
  return "label" in e && e.label && ci[e.label] && (i = b(f(f({}, ci[e.label]), e), { label: ci[e.label].label })), "key" in e && e.key && ci[e.key] && (i = b(f(f({}, ci[e.key]), e), { key: ci[e.key].key })), i ? (i.command === "insertDecimalSeparator" && (i.label = (t = globalThis.MathfieldElement.decimalSeparator) != null ? t : "."), e.label === "[action]" && (i = f(f({}, i), window.mathVirtualKeyboard.actionKeycap)), e.label === "[shift]" && (i = f(f({}, i), window.mathVirtualKeyboard.shiftKeycap)), e.label === "[backspace]" && (i = f(f({}, i), window.mathVirtualKeyboard.backspaceKeycap)), e.label === "[tab]" && (i = f(f({}, i), window.mathVirtualKeyboard.tabKeycap)), i) : e;
}
var cn;
function J3(e) {
  var t;
  if (e.button !== 0) return;
  let i = ti.singleton;
  if (!i) return;
  let r = e.target;
  for (; r && !r.getAttribute("data-layer"); ) r = r.parentElement;
  if (r) {
    i.currentLayer = (t = r.getAttribute("data-layer")) != null ? t : "", e.preventDefault();
    return;
  }
  let n = or(e.target);
  if (!(n != null && n.id)) return;
  let a = i.getKeycap(n.id);
  if (!a) return;
  e.type;
  let o = new AbortController(), s = o.signal;
  n.classList.add("is-pressed"), n.addEventListener("pointerenter", Aa(o), { capture: !0, signal: s }), n.addEventListener("pointerleave", Aa(o), { capture: !0, signal: s }), n.addEventListener("pointercancel", Aa(o), { signal: s }), n.addEventListener("pointerup", Aa(o), { signal: s }), mr(a) && (n.classList.add("is-active"), i.shiftPressCount++), a.variants && (cn && clearTimeout(cn), cn = setTimeout(() => {
    n.classList.contains("is-pressed") && (n.classList.remove("is-pressed"), n.classList.add("is-active"), e.target && "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId), Em(n, () => {
      o.abort(), n == null || n.classList.remove("is-active");
    }));
  }, 300)), e.preventDefault();
}
function Aa(e) {
  return (t) => {
    let i = or(t.target);
    if (!(i != null && i.id)) return;
    let r = ti.singleton;
    if (!r) return;
    let n = r.getKeycap(i.id);
    if (n) {
      if (t.type === "pointerenter" && t.target === i && t.isPrimary && i.classList.add("is-pressed"), t.type === "pointercancel") {
        i.classList.remove("is-pressed"), mr(n) && (r.shiftPressCount--, i.classList.toggle("is-active", r.isShifted)), e.abort();
        return;
      }
      if (t.type === "pointerleave" && t.target === i) {
        i.classList.remove("is-pressed"), mr(n) && (r.shiftPressCount--, i.classList.toggle("is-active", r.isShifted));
        return;
      }
      if (t.type === "pointerup") {
        cn && clearTimeout(cn), mr(n) ? i.classList.toggle("is-active", r.isShifted) : i.classList.contains("is-pressed") && (i.classList.remove("is-pressed"), r.isShifted && n.shift ? typeof n.shift == "string" ? r.executeCommand(["insert", n.shift, { focus: !0, feedback: !0, scrollIntoView: !0, mode: "math", format: "latex" }]) : dl(n.shift) : dl(n), r.shiftPressCount === 1 && !t.shiftKey && (r.shiftPressCount = 0)), e.abort(), t.preventDefault();
        return;
      }
    }
  };
}
function dl(e) {
  var t;
  let i = e.command;
  !i && e.insert && (i = ["insert", e.insert, { focus: !0, feedback: !0, scrollIntoView: !0, mode: "math", format: "latex" }]), !i && e.key && (i = ["typedText", e.key, { focus: !0, feedback: !0, simulateKeystroke: !0 }]), !i && e.latex && (i = ["insert", e.latex, { focus: !0, feedback: !0, scrollIntoView: !0, mode: "math", format: "latex" }]), i || (i = ["typedText", e.label, { focus: !0, feedback: !0, simulateKeystroke: !0 }]), (t = ti.singleton) == null || t.executeCommand(i);
}
function X3(e) {
  if (e.nodeType !== 1) return !1;
  let t = e.classList;
  return t.contains("MLK__keycap") || t.contains("shift") || t.contains("action") || t.contains("fnbutton") || t.contains("bigfnbutton");
}
function or(e) {
  if (!e) return;
  let t = e;
  for (; t && !X3(t); ) t = t.parentElement;
  return t ?? void 0;
}
function mr(e) {
  return !!e.class && /(^|\s)shift($|\s)/.test(e.class);
}
var ti = class zm {
  constructor() {
    this.originalContainerBottomPadding = null, this.keycapRegistry = {}, this._shiftPressCount = 0;
    var t, i, r;
    this.targetOrigin = window.origin, this.originValidator = "none", this._alphabeticLayout = "auto", this._layouts = Object.freeze(["default"]), this._editToolbar = "default", this._container = (i = (t = window.document) == null ? void 0 : t.body) != null ? i : null, this._visible = !1, this._rebuilding = !1, this.observer = new ResizeObserver((n) => {
      this.adjustBoundingRect(), this.dispatchEvent(new Event("geometrychange")), this.sendMessage("geometry-changed", { boundingRect: this.boundingRect });
    }), this.listeners = {};
    try {
      (r = window.top) == null || r.addEventListener("message", this);
    } catch {
      window.addEventListener("message", this);
    }
    document.body.addEventListener("focusin", (n) => {
      let a = n.target;
      a != null && a.isConnected && setTimeout(() => {
        let o = Od();
        o && !o.readOnly && o.mathVirtualKeyboardPolicy === "auto" && ig() && this.show({ animate: !0 });
      }, 300);
    }), document.addEventListener("focusout", (n) => {
      var a, o;
      ((o = (a = n.target) == null ? void 0 : a.tagName) == null ? void 0 : o.toLowerCase()) === "math-field" && n.target.mathVirtualKeyboardPolicy !== "manual" && setTimeout(() => {
        Od() || this.hide();
      }, 300);
    });
  }
  get currentLayer() {
    var t, i, r;
    return (r = (i = (t = this._element) == null ? void 0 : t.querySelector(".MLK__layer.is-visible")) == null ? void 0 : i.id) != null ? r : "";
  }
  set currentLayer(t) {
    var i;
    if (!this._element) {
      this.latentLayer = t;
      return;
    }
    let r = t ? this._element.querySelector(`#${t}.MLK__layer`) : null;
    r || (r = this._element.querySelector(".MLK__layer")), r && ((i = this._element.querySelector(".MLK__layer.is-visible")) == null || i.classList.remove("is-visible"), r.classList.add("is-visible")), this.render();
  }
  get shiftPressCount() {
    return this._shiftPressCount;
  }
  set shiftPressCount(t) {
    var i;
    this._shiftPressCount = t > 2 || t < 0 ? 0 : t, (i = this._element) == null || i.classList.toggle("is-caps-lock", this.shiftPressCount === 2), this.render();
  }
  get isShifted() {
    return this._shiftPressCount > 0;
  }
  resetKeycapRegistry() {
    this.keycapRegistry = {};
  }
  registerKeycap(t) {
    let i = "ML__k" + Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36);
    return this.keycapRegistry[i] = t, i;
  }
  getKeycap(t) {
    return t ? this.keycapRegistry[t] : void 0;
  }
  getLayer(t) {
    let i = this.normalizedLayouts;
    for (let r of i) for (let n of r.layers) if (n.id === t) return n;
  }
  get alphabeticLayout() {
    return this._alphabeticLayout;
  }
  set alphabeticLayout(t) {
    this._alphabeticLayout = t, this.rebuild();
  }
  get actionKeycap() {
    return this._actionKeycap;
  }
  set actionKeycap(t) {
    this._actionKeycap = typeof t == "string" ? { label: t } : t;
  }
  get shiftKeycap() {
    return this._shiftKeycap;
  }
  set shiftKeycap(t) {
    this._shiftKeycap = typeof t == "string" ? { label: t } : t;
  }
  get backspaceKeycap() {
    return this._backspaceKeycap;
  }
  set backspaceKeycap(t) {
    this._backspaceKeycap = typeof t == "string" ? { label: t } : t;
  }
  get tabKeycap() {
    return this._tabKeycap;
  }
  set tabKeycap(t) {
    this._tabKeycap = typeof t == "string" ? { label: t } : t;
  }
  get layouts() {
    return this._layouts;
  }
  set layouts(t) {
    this.updateNormalizedLayouts(t), this.rebuild();
  }
  updateNormalizedLayouts(t) {
    let i = Array.isArray(t) ? [...t] : [t], r = i.findIndex((n) => n === "default");
    r >= 0 && i.splice(r, 1, "numeric", "symbols", "alphabetic", "greek"), this._layouts = Object.freeze(i), this._normalizedLayouts = i.map((n) => Tm(n));
  }
  get normalizedLayouts() {
    return this._normalizedLayouts || this.updateNormalizedLayouts(this._layouts), this._normalizedLayouts;
  }
  get editToolbar() {
    return this._editToolbar;
  }
  set editToolbar(t) {
    this._editToolbar = t, this.rebuild();
  }
  get container() {
    return this._container;
  }
  set container(t) {
    this._container = t, this.rebuild();
  }
  static get singleton() {
    if (this._singleton === void 0) try {
      this._singleton = new zm();
    } catch {
      this._singleton = null;
    }
    return this._singleton;
  }
  get style() {
    return this._style;
  }
  addEventListener(t, i, r) {
    this.listeners[t] || (this.listeners[t] = /* @__PURE__ */ new Set()), this.listeners[t].has(i) || this.listeners[t].add(i);
  }
  dispatchEvent(t) {
    return !this.listeners[t.type] || this.listeners[t.type].size === 0 ? !0 : (this.listeners[t.type].forEach((i) => {
      typeof i == "function" ? i(t) : i == null || i.handleEvent(t);
    }), !t.defaultPrevented);
  }
  removeEventListener(t, i, r) {
    this.listeners[t] && this.listeners[t].delete(i);
  }
  get element() {
    return this._element;
  }
  set element(t) {
    var i;
    this._element !== t && ((i = this._element) == null || i.remove(), this._element = t);
  }
  get visible() {
    return this._visible;
  }
  set visible(t) {
    t ? this.show() : this.hide();
  }
  get boundingRect() {
    var t;
    if (!this._visible) return new DOMRect();
    let i = (t = this._element) == null ? void 0 : t.getElementsByClassName("MLK__plate")[0];
    return i ? i.getBoundingClientRect() : new DOMRect();
  }
  adjustBoundingRect() {
    var t, i;
    let r = this.boundingRect.height;
    if (this.container === document.body) {
      (t = this._element) == null || t.style.setProperty("--_keyboard-height", `calc(${r}px + var(--_padding-top) + var(--_padding-bottom) + env(safe-area-inset-bottom, 0))`);
      let n = r - 1;
      this.container.style.paddingBottom = this.originalContainerBottomPadding ? `calc(${this.originalContainerBottomPadding} + ${n}px)` : `${n}px`;
    } else (i = this._element) == null || i.style.setProperty("--_keyboard-height", `${r}px`);
  }
  rebuild() {
    if (this._rebuilding || !this._element) return;
    this._rebuilding = !0;
    let t = this.currentLayer;
    requestAnimationFrame(() => {
      this._rebuilding = !1, this._element && (this._element.remove(), this._element = void 0), this.visible && (this.buildAndAttachElement(), this.currentLayer = t, this.render(), this.adjustBoundingRect(), this._element.classList.add("is-visible"));
    });
  }
  render() {
    var t;
    if (!this._element) return;
    let i = this.getLayer(this.currentLayer);
    this._element.classList.toggle("backdrop-is-transparent", !!(i && (i.backdrop || i.container)));
    let r = this._element.querySelectorAll(".MLK__layer.is-visible .MLK__keycap, .MLK__layer.is-visible .action, .fnbutton, .MLK__layer.is-visible .bigfnbutton, .MLK__layer.is-visible .shift");
    if (!r) return;
    let n = this.isShifted;
    for (let a of r) {
      let o = this.getKeycap(a.id);
      if (o) {
        let [s, l] = Oo(o, { shifted: n });
        a.innerHTML = globalThis.MathfieldElement.createHTML(s), a.className = l, n && typeof o.shift == "object" && (t = o.shift) != null && t.tooltip ? a.dataset.tooltip = o.shift.tooltip : !n && o.tooltip && (a.dataset.tooltip = o.tooltip);
      }
    }
  }
  show(t) {
    var i;
    if (this._visible) return;
    let r = this.container;
    if (r && window.mathVirtualKeyboard && this.stateWillChange(!0)) {
      if (this._element || (this.buildAndAttachElement(), this.adjustBoundingRect()), !this._visible) {
        let n = this._element.getElementsByClassName("MLK__plate")[0];
        if (n && this.observer.observe(n), r === window.document.body) {
          let a = r.style.paddingBottom;
          this.originalContainerBottomPadding = a;
          let o = n.offsetHeight - 1;
          r.style.paddingBottom = a ? `calc(${a} + ${o}px)` : `${o}px`;
        }
        window.addEventListener("mouseup", this), window.addEventListener("blur", this), window.addEventListener("keydown", this, { capture: !0 }), window.addEventListener("keyup", this, { capture: !0 }), (i = this._element) == null || i.classList.toggle("is-caps-lock", this.shiftPressCount === 2), this.currentLayer = this.latentLayer;
      }
      this._visible = !0, t != null && t.animate ? requestAnimationFrame(() => {
        this._element && (this._element.classList.add("animate"), this._element.addEventListener("transitionend", () => {
          var n;
          return (n = this._element) == null ? void 0 : n.classList.remove("animate");
        }, { once: !0 }), this._element.classList.add("is-visible"), this.stateChanged());
      }) : (this._element.classList.add("is-visible"), this.stateChanged());
    }
  }
  hide(t) {
    var i;
    let r = this.container;
    if (r && this._visible && this.stateWillChange(!1)) {
      if (this._visible = !1, this._element) {
        this.latentLayer = this.currentLayer;
        let n = this._element.getElementsByClassName("MLK__plate")[0];
        n && this.observer.unobserve(n), window.removeEventListener("mouseup", this), window.removeEventListener("blur", this), window.removeEventListener("keydown", this, { capture: !0 }), window.removeEventListener("keyup", this, { capture: !0 }), window.removeEventListener("contextmenu", this, { capture: !0 }), ln(), j3(), (i = this._element) == null || i.remove(), this._element = void 0, this.originalContainerBottomPadding !== null && (r.style.paddingBottom = this.originalContainerBottomPadding);
      }
      this.stateChanged();
    }
  }
  get height() {
    var t, i;
    return (i = (t = this.element) == null ? void 0 : t.offsetHeight) != null ? i : 0;
  }
  buildAndAttachElement() {
    var t;
    this.element, this.element = H3(this), window.addEventListener("contextmenu", this, { capture: !0 }), this.element.addEventListener("contextmenu", (i) => {
      i.shiftKey || ((i.ctrlKey || i.button === 2) && Em(i.target), i.preventDefault(), i.stopPropagation());
    }, { capture: !0 }), (t = this.container) == null || t.appendChild(this.element);
  }
  handleEvent(t) {
    if (uu(t)) {
      if (!tu(t.origin, this.originValidator)) throw new DOMException(`Message from unknown origin (${t.origin}) cannot be handled`, "SecurityError");
      t.data.action === "disconnect" ? this.connectedMathfieldWindow = void 0 : t.data.action !== "update-setting" && t.data.action !== "proxy-created" && t.data.action !== "execute-command" && (t.source, this.connectedMathfieldWindow = t.source), this.handleMessage(t.data, t.source);
    }
    if (this._element) switch (t.type) {
      case "mouseup":
      case "blur":
        document.body.style.userSelect = "", this.shiftPressCount = 0;
        break;
      case "contextmenu":
        t.button !== 2 && t.preventDefault();
        break;
      case "keydown": {
        t.key === "Shift" && !t.repeat && (this.shiftPressCount = 1);
        break;
      }
      case "keyup": {
        (t.key === "Shift" || !t.getModifierState("Shift") && this.shiftPressCount !== 2) && (this.shiftPressCount = 0);
        break;
      }
    }
  }
  handleMessage(t, i) {
    let { action: r } = t;
    if (r === "execute-command") {
      let { command: n } = t, a = pr(n);
      if (window.top !== void 0 && a !== "virtual-keyboard") return;
      this.executeCommand(n);
      return;
    }
    if ((r === "connect" || r === "show") && this.sendMessage("synchronize-proxy", { boundingRect: this.boundingRect, alphabeticLayout: this._alphabeticLayout, layouts: this._layouts, editToolbar: this._editToolbar }, i), r !== "disconnect" && window === window.top) {
      if (r === "show") {
        typeof t.animate < "u" ? this.show({ animate: t.animate }) : this.show();
        return;
      }
      if (r === "hide") {
        typeof t.animate < "u" ? this.hide({ animate: t.animate }) : this.hide();
        return;
      }
      if (r === "update-setting") {
        t.alphabeticLayout && (this.alphabeticLayout = t.alphabeticLayout), t.layouts && (this.layouts = t.layouts), t.editToolbar && (this.editToolbar = t.editToolbar);
        return;
      }
      if (r === "proxy-created") {
        this.sendMessage("synchronize-proxy", { boundingRect: this.boundingRect, alphabeticLayout: this._alphabeticLayout, layouts: this._layouts, editToolbar: this._editToolbar }, i);
        return;
      }
    }
  }
  sendMessage(t, i, r) {
    if (r || (r = this.connectedMathfieldWindow), this.targetOrigin === null || this.targetOrigin === "null" || r === window) {
      window.dispatchEvent(new MessageEvent("message", { source: window, data: f({ type: po, action: t }, i) }));
      return;
    }
    if (r) r.postMessage(f({ type: po, action: t }, i), { targetOrigin: this.targetOrigin });
    else if (i.command && this.dispatchEvent(new CustomEvent("math-virtual-keyboard-command", { detail: i.command })), t === "execute-command" && Array.isArray(i.command) && i.command[0] === "insert") {
      let n = i.command[1].split("");
      for (let a of n) this.dispatchEvent(new KeyboardEvent("keydown", { key: a, bubbles: !0 })), this.dispatchEvent(new KeyboardEvent("keyup", { key: a, bubbles: !0 }));
    }
  }
  stateWillChange(t) {
    return this.dispatchEvent(new CustomEvent("before-virtual-keyboard-toggle", { detail: { visible: t }, bubbles: !0, cancelable: !0, composed: !0 }));
  }
  stateChanged() {
    this.dispatchEvent(new Event("virtual-keyboard-toggle")), this._visible || (this.dispatchEvent(new Event("geometrychange")), this.sendMessage("geometry-changed", { boundingRect: this.boundingRect }));
  }
  focus() {
    this.sendMessage("focus", {});
  }
  blur() {
    this.sendMessage("blur", {});
  }
  updateToolbar(t) {
    let i = this._element;
    if (!i) return;
    i.classList.toggle("is-math-mode", t.mode === "math"), i.classList.toggle("is-text-mode", t.mode === "text"), i.classList.toggle("can-undo", t.canUndo), i.classList.toggle("can-redo", t.canRedo), i.classList.toggle("can-copy", !t.selectionIsCollapsed), i.classList.toggle("can-copy", !t.selectionIsCollapsed), i.classList.toggle("can-paste", !0);
    let r = i.querySelectorAll(".ML__edit-toolbar");
    if (r) for (let n of r) n.innerHTML = O3(this, t);
  }
  update(t) {
    this._style = t.style, this.updateToolbar(t);
  }
  connect() {
    this.connectedMathfieldWindow = window;
  }
  disconnect() {
    this.connectedMathfieldWindow = void 0;
  }
  executeCommand(t) {
    let i, r = [], n = pr(t);
    return Me(t) ? (i = t[0], i === "performWithFeedback" && (t = t.slice(1), n = pr(t)), r = t.slice(1)) : i = t, i = i.replace(/-\w/g, (a) => a[1].toUpperCase()), n === "virtual-keyboard" ? pt[i].fn(void 0, ...r) : (this.sendMessage("execute-command", { command: t }), !1);
  }
  dispose() {
    window.removeEventListener("mouseup", this), window.removeEventListener("blur", this), window.removeEventListener("message", this);
  }
};
function Od() {
  var e, t;
  let i = co(), r = null;
  for (; i; ) {
    if ("host" in i && ((t = (e = i.host) == null ? void 0 : e.tagName) == null ? void 0 : t.toLowerCase()) === "math-field") {
      r = i.host;
      break;
    }
    i = i.parentNode;
  }
  return r;
}
if (Re() && !("mathVirtualKeyboard" in window)) if (window === window.top) {
  let e = ti.singleton;
  Object.defineProperty(window, "mathVirtualKeyboard", { get: () => e });
} else Object.defineProperty(window, "mathVirtualKeyboard", { get: () => D3.singleton, configurable: !0 });
function mo(e) {
  let t = {};
  for (let i of Object.keys(e)) switch (i) {
    case "scriptDepth":
      let r = e.scriptDepth;
      if (Me(r)) t.scriptDepth = [r[0], r[1]];
      else if (typeof r == "number") t.scriptDepth = [r, r];
      else if (typeof r == "string") {
        let [a, o] = r.split(",").map((s) => parseInt(s.trim()));
        t.scriptDepth = [a, o];
      } else throw new TypeError("Unexpected value for scriptDepth");
      break;
    case "mathVirtualKeyboardPolicy":
      let n = e.mathVirtualKeyboardPolicy.toLowerCase();
      if (n === "sandboxed") {
        if (window !== window.top) {
          let a = ti.singleton;
          Object.defineProperty(window, "mathVirtualKeyboard", { get: () => a });
        }
        n = "manual";
      }
      t.mathVirtualKeyboardPolicy = n;
      break;
    case "letterShapeStyle":
      e.letterShapeStyle === "auto" ? N.locale.startsWith("fr") ? t.letterShapeStyle = "french" : t.letterShapeStyle = "tex" : t.letterShapeStyle = e.letterShapeStyle;
      break;
    case "defaultMode":
      ["text", "math", "inline-math"].includes(e.defaultMode) ? t.defaultMode = e.defaultMode : (console.error('MathLive 0.98.6:  valid values for defaultMode are "text", "math" or "inline-math"'), t.defaultMode = "math");
      break;
    case "macros":
      t.macros = up(e.macros);
      break;
    default:
      Me(e[i]) ? t[i] = [...e[i]] : typeof e[i] == "object" && !(e[i] instanceof Element) && i !== "computeEngine" ? t[i] = f({}, e[i]) : t[i] = e[i];
  }
  return t;
}
function _i(e, t) {
  let i;
  typeof t == "string" ? i = [t] : t === void 0 ? i = Object.keys(e) : i = t;
  let r = {};
  for (let n of i) e[n] === null ? r[n] = null : Me(e[n]) ? r[n] = [...e[n]] : typeof e[n] == "object" && !(e[n] instanceof Element) && n !== "computeEngine" ? r[n] = f({}, e[n]) : r[n] = e[n];
  return typeof t == "string" ? r[t] : r;
}
function Ua() {
  return { readOnly: !1, defaultMode: "math", macros: {}, registers: {}, colorMap: Lo, backgroundColorMap: Jl, letterShapeStyle: N.locale.startsWith("fr") ? "french" : "tex", minFontScale: 0, smartMode: !1, smartFence: !0, smartSuperscript: !0, scriptDepth: [1 / 0, 1 / 0], removeExtraneousParentheses: !0, isImplicitFunction: (e) => ["\\sin", "\\cos", "\\tan", "\\arcsin", "\\arccos", "\\arctan", "\\arcsec", "\\arccsc", "\\arsinh", "\\arcosh", "\\artanh", "\\arcsech", "\\arccsch", "\\arg", "\\ch", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\sec", "\\sinh", "\\sh", "\\tanh", "\\tg", "\\th", "\\lg", "\\lb", "\\log", "\\ln"].includes(e), mathModeSpace: "", placeholderSymbol: "▢", contentPlaceholder: "", popoverPolicy: "auto", environmentPopoverPolicy: "off", keybindings: Gg, inlineShortcuts: kp, inlineShortcutTimeout: 0, mathVirtualKeyboardPolicy: "auto", virtualKeyboardTargetOrigin: window == null ? void 0 : window.origin, originValidator: "none", onInlineShortcut: () => "", onScrollIntoView: null, onExport: Xg, value: "" };
}
function Id(e) {
  return e.defaultMode === "inline-math" ? "math" : e.defaultMode;
}
function Ht(e, t) {
  !e || !t || (Me(e) ? e.forEach((i) => Ht(i, t)) : typeof e == "object" && !e.style.color && !e.style.backgroundColor && !e.style.fontFamily && !e.style.fontShape && !e.style.fontSeries && !e.style.fontSize && !e.style.variant && !e.style.variantStyle && (e.applyStyle(t), Ht(e.body, t), Ht(e.above, t), Ht(e.below, t), Ht(e.subscript, t), Ht(e.superscript, t)));
}
function hl(e, t, i, r) {
  function n(o, s) {
    for (let l of a) if (l.style[o] !== s) return !1;
    return !0;
  }
  if (t = e.normalizeRange(t), t[0] === t[1]) return !1;
  let a = e.getAtoms(t, { includeChildren: !0 });
  r.operation === "toggle" && (i.color && n("color", i.color) && (i.color = "none", delete i.verbatimColor), i.backgroundColor && n("backgroundColor", i.backgroundColor) && (i.backgroundColor = "none", delete i.verbatimBackgroundColor), i.fontFamily && n("fontFamily", i.fontFamily) && (i.fontFamily = "none"), i.fontSeries && n("fontSeries", i.fontSeries) && (i.fontSeries = "auto"), i.fontShape && n("fontShape", i.fontShape) && (i.fontShape = "auto"), i.fontSize && n("fontSize", i.fontSize) && (i.fontSize = Zl), i.variant && n("variant", i.variant) && (i.variant = "normal"), i.variantStyle && n("variantStyle", i.variantStyle) && (i.variantStyle = ""));
  for (let o of a) o.applyStyle(i);
  return !0;
}
function G3(e, t) {
  let i = e.at(e.position);
  if (i.type === "composition") i.value = t;
  else {
    let { caret: r } = i;
    i.caret = void 0;
    let n = new Rp(t, { mode: i.mode });
    n.caret = r, i.parent.addChildAfter(n, i), e.position += 1;
  }
}
function Z3(e) {
  let t = e.at(e.position);
  t.type === "composition" && (t.parent.removeChild(t), e.position -= 1);
}
lp(["math", "displaymath"], Ie);
lp("center", Ie);
x("displaylines", "", { parse: (e) => {
  let t = [], i = [];
  e.beginContext({ tabular: !0 });
  do {
    if (e.end() || e.match("<}>")) break;
    e.matchColumnSeparator() || e.matchRowSeparator() ? (t.push([i]), i = []) : i.push(...e.scan((r) => ["<}>", "&", "\\cr", "\\\\", "\\tabularnewline"].includes(r)));
  } while (!0);
  return e.endContext(), t.push([i]), t;
}, createAtom: (e) => new H("lines", e.args, [], { leftDelim: ".", rightDelim: ".", columns: [{ align: "l" }] }) });
Bt("array", "{columns:colspec}", (e, t, i, r) => new H(e, cu(t), i, { columns: r[0], mathstyleName: "textstyle" }));
Bt(["equation", "equation*", "subequations"], "", (e, t, i) => new H(e, cu(t), i, { columns: [{ align: "c" }] }));
Bt(["multline", "multline*"], "", Ie);
Bt(["align", "align*", "aligned", "eqnarray"], "", Ie);
Bt("split", "", Ie);
Bt(["gather", "gather*", "gathered"], "", Ie);
Bt(["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"], "[columns:colspec]", Ie);
Bt(["smallmatrix", "smallmatrix*"], "[columns:colspec]", Ie);
Bt(["cases", "dcases", "rcases"], "", Ie);
function Y3(e) {
  for (let t of e) for (let i of t) if (i.length > 0) return !1;
  return !0;
}
function cu(e, t = 1) {
  return Y3(e) ? Array(t).fill([[new v({ type: "first" }), new Ye()]]) : e.map((i) => i.length === 0 ? [[new v({ type: "first" })]] : i.map((r) => r.length === 0 ? [new v({ type: "first" })] : (r[0].type !== "first" && r.unshift(new v({ type: "first" })), r)));
}
function Ie(e, t = [[[]]], i = [], r = []) {
  switch (t = cu(t, ["split", "align", "align*", "aligned", "eqnarray"].includes(e) ? 2 : 1), e) {
    case "math":
      return new H(e, t, i, { mathstyleName: "textstyle" });
    case "displaymath":
      return new H(e, t, i, { mathstyleName: "textstyle" });
    case "center":
      return new H(e, t, i, { columns: [{ align: "c" }] });
    case "multline":
    case "multline*":
      return new H(e, t, i, { columns: [{ align: "m" }], leftDelim: ".", rightDelim: "." });
    case "split":
      return new H(e, t, i, { columns: [{ align: "r" }, { align: "l" }], minColumns: 2 });
    case "gather":
    case "gathered":
      return new H(e, t, i, { columns: [{ gap: 0.25 }, { align: "c" }, { gap: 0 }] });
    case "pmatrix":
    case "pmatrix*":
      return new H(e, t, i, { mathstyleName: "textstyle", leftDelim: "(", rightDelim: ")", columns: di(r[0]) });
    case "bmatrix":
    case "bmatrix*":
      return new H(e, t, i, { mathstyleName: "textstyle", leftDelim: "[", rightDelim: "]", columns: di(r[0]) });
    case "Bmatrix":
    case "Bmatrix*":
      return new H(e, t, i, { mathstyleName: "textstyle", leftDelim: "\\lbrace", rightDelim: "\\rbrace", columns: di(r[0]) });
    case "vmatrix":
    case "vmatrix*":
      return new H(e, t, i, { mathstyleName: "textstyle", leftDelim: "\\vert", rightDelim: "\\vert", columns: di(r[0]) });
    case "Vmatrix":
    case "Vmatrix*":
      return new H(e, t, i, { mathstyleName: "textstyle", leftDelim: "\\Vert", rightDelim: "\\Vert", columns: di(r[0]) });
    case "matrix":
    case "matrix*":
      return new H(e, t, i, { mathstyleName: "textstyle", leftDelim: ".", rightDelim: ".", columns: di(r == null ? void 0 : r[0]) });
    case "smallmatrix":
    case "smallmatrix*":
      return new H(e, t, i, { mathstyleName: "scriptstyle", columns: di(r == null ? void 0 : r[0]), colSeparationType: "small", arraystretch: 0.5 });
    case "cases":
    case "dcases":
      return new H(e, t, i, { mathstyleName: e === "dcases" ? "displaystyle" : "textstyle", arraystretch: 1.2, leftDelim: "\\lbrace", rightDelim: ".", columns: [{ align: "l" }, { gap: 1 }, { align: "l" }] });
    case "rcases":
      return new H(e, t, i, { arraystretch: 1.2, leftDelim: ".", rightDelim: "\\rbrace", columns: [{ align: "l" }, { gap: 1 }, { align: "l" }] });
    case "lines":
      return new H(e, t, i, { leftDelim: ".", rightDelim: ".", columns: [{ align: "l" }] });
    case "align":
    case "align*":
    case "aligned":
    case "eqnarray": {
      let n = 0;
      for (let s of t) n = Math.max(n, s.length);
      let a = [{ gap: 0 }, { align: "r" }, { gap: 0.25 }, { align: "l" }], o = 2;
      for (; o < n; ) a.push({ gap: 1 }, { align: "r" }, { gap: 0.25 }, { align: "l" }), o += 2;
      return a.push({ gap: 0 }), new H(e, t, i, { arraycolsep: 0, columns: a, minColumns: 2 });
    }
  }
  return new H(e, t, i, { mathstyleName: "textstyle" });
}
function di(e) {
  return e ?? [{ align: "c" }, { align: "c" }, { align: "c" }, { align: "c" }, { align: "c" }, { align: "c" }, { align: "c" }, { align: "c" }, { align: "c" }, { align: "c" }];
}
function Q3(e, t) {
  let i = e.at(e.position);
  for (; i && !(i.parent instanceof H); ) i = i.parent;
  if (i && i.type === "array" && i.environmentName, !i || !(i.parent instanceof H)) {
    let r = e.at(e.position);
    if (i = r, !i.parent.parent) {
      let n = e.extractAtoms([e.position, e.lastOffset]), a = e.extractAtoms([0, e.position]);
      a.length === 0 && (a = Da()), n.length === 0 && (n = Da());
      let o;
      return t.endsWith("column") ? (o = Ie("split", [[a, n]]), e.root = o, hi(o, 0, 0) ? pi(e, o, 0, 0) : hi(o, 0, 1) ? pi(e, o, 0, 1) : e.position = e.offsetOf(r)) : (o = Ie("lines", [[a], [n]]), e.root = o, hi(o, 0, 0) ? pi(e, o, 0, 0) : hi(o, 1, 0) ? pi(e, o, 1, 0) : e.position = e.offsetOf(r)), [void 0, [0, 0]];
    }
    if (i.parent instanceof Q) {
      let n = i.parent, a = e.extractAtoms([e.position, e.offsetOf(n.lastChild)]), o = e.extractAtoms([e.offsetOf(n.firstChild), e.position]);
      o.length === 0 && (o = Da()), a.length === 0 && (a = Da());
      let s = "pmatrix", l = n.leftDelim, u = n.rightDelim;
      l === "(" && (u === ")" || u === "?") ? s = "pmatrix" : (l === "[" || l === "\\lbrack") && (u === "]" || u === "\\rbrack" || u === "?") ? s = "bmatrix" : l === "\\vert" && u === "\\vert" ? s = "vmatrix" : l === "\\Vert" && u === "\\Vert" ? s = "Vmatrix" : (l === "{" || l === "\\lbrace") && (u === "." || u === "?") && (s = "cases");
      let c = Ie(s, t.endsWith("column") ? [[o, a]] : [[o], [a]]);
      return n.parent.addChildBefore(c, n), n.parent.removeChild(n), hi(c, 0, 0) ? pi(e, c, 0, 0) : t.endsWith("column") ? hi(c, 0, 1) ? pi(e, c, 0, 1) : e.position = e.offsetOf(i) : hi(c, 1, 0) ? pi(e, c, 1, 0) : e.position = e.offsetOf(i), [void 0, [0, 0]];
    }
  }
  return i && i.parent instanceof H ? [i.parent, i.parentBranch] : [void 0, [0, 0]];
}
function hi(e, t, i) {
  let r = e.getCell(t, i);
  return !r || r.length !== 2 ? !1 : r[1].type === "placeholder";
}
function e2(e, t, i, r) {
  let n = t.getCell(i, r);
  return n ? [e.offsetOf(n[0]), e.offsetOf(n[n.length - 1])] : -1;
}
function pi(e, t, i, r) {
  let n = e2(e, t, i, r);
  typeof n != "number" && e.setSelection(n);
}
function Ea(e, t, i, r, n) {
  let a = t.getCell(i, r);
  a && e.setPositionHandlingPlaceholder(e.offsetOf(a[n === "start" ? 0 : a.length - 1]));
}
function Io(e, t) {
  let [i, [r, n]] = Q3(e, t);
  if (i) switch (t) {
    case "after row":
      i.addRowAfter(r), Ea(e, i, r + 1, 0, "end");
      break;
    case "after column":
      if (i.maxColumns <= i.colCount) {
        e.announce("plonk");
        return;
      }
      i.addColumnAfter(n), Ea(e, i, r, n + 1, "end");
      break;
    case "before row":
      i.addRowBefore(r), Ea(e, i, r, 0, "start");
      break;
    case "before column":
      if (i.maxColumns <= i.colCount) {
        e.announce("plonk");
        return;
      }
      i.addColumnBefore(n), Ea(e, i, r, n, "start");
      break;
  }
}
function Km(e) {
  return e.contentWillChange({ inputType: "insertText" }) ? (Io(e, "after row"), e.contentDidChange({ inputType: "insertText" }), !0) : !1;
}
function t2(e) {
  return e.contentWillChange({ inputType: "insertText" }) ? (Io(e, "before row"), e.contentDidChange({ inputType: "insertText" }), !0) : !1;
}
function $m(e) {
  return e.contentWillChange({ inputType: "insertText" }) ? (Io(e, "after column"), e.contentDidChange({ inputType: "insertText" }), !0) : !1;
}
function i2(e) {
  return e.contentWillChange({ inputType: "insertText" }) ? (Io(e, "before column"), e.contentDidChange({ inputType: "insertText" }), !0) : !1;
}
function Pm(e, t) {
  if (!e.contentWillChange({})) return !1;
  e.mathfield.snapshot();
  let i = ".", r = ".";
  switch (t) {
    case "pmatrix":
    case "pmatrix*":
      i = "(", r = ")";
      break;
    case "bmatrix":
    case "bmatrix*":
      i = "[", r = "]";
      break;
    case "Bmatrix":
    case "Bmatrix*":
      i = "\\lbrace", r = "\\rbrace";
      break;
    case "vmatrix":
    case "vmatrix*":
      i = "\\vert", r = "\\vert";
      break;
    case "Vmatrix":
    case "Vmatrix*":
      i = "\\Vert", r = "\\Vert";
      break;
    case "matrix":
    case "matrix*":
      i = ".", r = ".";
      break;
    case "cases":
    case "dcases":
      i = "\\lbrace";
      break;
    case "rcases":
      r = "\\rbrace";
      break;
  }
  let n = e.at(e.position), a = n.type === "array" ? n : e.parentEnvironment;
  return a.environmentName = t, a.leftDelim = i, a.rightDelim = r, e.contentDidChange({}), !0;
}
function Nm(e, t) {
  let i = e.at(e.position);
  for (; i && !(Array.isArray(i.parentBranch) && i.parent instanceof H); ) i = i.parent;
  if (Array.isArray(i == null ? void 0 : i.parentBranch) && (i == null ? void 0 : i.parent) instanceof H) {
    let r = i.parent, n = i.parentBranch, a;
    switch (t) {
      case "row":
        if (r.rowCount > 1) {
          r.removeRow(n[0]);
          let o = r.getCell(Math.max(0, n[0] - 1), n[1]);
          a = e.offsetOf(o[o.length - 1]);
        }
        break;
      case "column":
        if (r.colCount > r.minColumns) {
          r.removeColumn(n[1]);
          let o = r.getCell(n[0], Math.max(0, n[1] - 1));
          a = e.offsetOf(o[o.length - 1]);
        }
        break;
    }
    a && e.setPositionHandlingPlaceholder(a);
  }
}
function r2(e) {
  return e.contentWillChange({ inputType: "deleteContent" }) ? (Nm(e, "row"), e.contentDidChange({ inputType: "deleteContent" }), !0) : !1;
}
function n2(e) {
  return e.contentWillChange({ inputType: "deleteContent" }) ? (Nm(e, "column"), e.contentDidChange({ inputType: "deleteContent" }), !0) : !1;
}
Ce({ addRowAfter: Km, addColumnAfter: $m, addRowBefore: t2, addColumnBefore: i2, removeRow: r2, removeColumn: n2, setEnvironment: Pm }, { target: "model", canUndo: !0, changeContent: !0, changeSelection: !0 });
function Da() {
  return [new Ye()];
}
var Om = class Im {
  constructor(t) {
    this.recording = !1, this.model = t, this.reset();
  }
  reset() {
    this.stack = [], this.index = -1, this.lastOp = "";
  }
  startRecording() {
    this.recording = !0;
  }
  stopRecording() {
    this.recording = !1;
  }
  canUndo() {
    return this.index - 1 >= 0;
  }
  canRedo() {
    return this.stack.length - 1 > this.index;
  }
  stopCoalescing(t) {
    t && this.index >= 0 && (this.stack[this.index].selection = t), this.lastOp = "";
  }
  undo() {
    return this.canUndo() ? (this.model.setState(this.stack[this.index - 1], { silenceNotifications: !1, type: "undo" }), this.index -= 1, this.lastOp = "", !0) : !1;
  }
  redo() {
    return this.canRedo() ? (this.index += 1, this.model.setState(this.stack[this.index], { silenceNotifications: !1, type: "redo" }), this.lastOp = "", !0) : !1;
  }
  pop() {
    this.canUndo() && (this.stack.splice(this.index, this.stack.length - this.index), this.index -= 1);
  }
  snapshot(t) {
    return this.recording ? (t && t === this.lastOp && this.pop(), this.stack.splice(this.index + 1, this.stack.length - this.index - 1), this.stack.push(this.model.getState()), this.index += 1, this.stack.length > Im.maximumDepth && (this.stack.shift(), this.index -= 1), this.lastOp = t ?? "", !0) : !1;
  }
};
Om.maximumDepth = 1e3;
var a2 = Om;
function pl(e, t, i) {
  if (e.at(t).mode !== "text") return t;
  let r = i === "backward" ? -1 : 1, n;
  if (gn.test(e.at(t).value)) {
    let a = t, o;
    do
      o = e.at(a).mode === "text" && gn.test(e.at(a).value), a += r;
    while (e.at(a) && o);
    n = e.at(a) ? a - 2 * r : a - r;
  } else if (/\s/.test(e.at(t).value)) {
    let a = t;
    for (; e.at(a) && e.at(a).mode === "text" && /\s/.test(e.at(a).value); ) a += r;
    if (!e.at(a)) n = a - r;
    else {
      let o = !0;
      do
        o = e.at(a).mode === "text" && !/\s/.test(e.at(a).value), a += r;
      while (e.at(a) && o);
      n = e.at(a) ? a - 2 * r : a - r;
    }
  } else {
    let a = t;
    for (; e.at(a) && e.at(a).mode === "text" && !/\s/.test(e.at(a).value); ) a += r;
    n = e.at(a) ? a : a - r;
    let o = !0;
    for (; e.at(a) && o; ) o = e.at(a).mode === "text" && /\s/.test(e.at(a).value), o && (n = a), a += r;
    n = e.at(a) ? a - 2 * r : a - r;
  }
  return n - (r > 0 ? 0 : 1);
}
function sr(e, t, i) {
  var r, n, a, o, s, l, u;
  let c = e.position;
  (r = i == null ? void 0 : i.extend) != null && r || e.collapseSelection(t);
  let d = e.at(e.position);
  if (t === "forward" && (d.type === "subsup" ? (d = d.rightSibling, d || (d = e.at(e.position + 1))) : d = e.at(e.position + 1)), !d) return e.announce("plonk"), !1;
  let h = e.offsetOf(d);
  if (d instanceof Ln) h = pl(e, h, t);
  else if (d instanceof ce) if (d.isSuggestion) for (; d && d instanceof ce; ) d.isSuggestion = !1, h = e.offsetOf(d), d = d.rightSibling;
  else if (t === "forward") {
    if (d = d.rightSibling, !d || !(d instanceof ce)) return e.announce("plonk"), !1;
    for (; d && d instanceof ce && /[a-zA-Z\*]/.test(d.value); ) h = e.offsetOf(d), d = d.rightSibling;
  } else {
    if (d = d.leftSibling, !d || !(d instanceof ce)) return e.announce("plonk"), !1;
    for (; d && d instanceof ce && /[a-zA-Z\*]/.test(d.value); ) h = e.offsetOf(d), d = d.leftSibling;
  }
  else if (t === "forward" && d.type === "mopen") {
    let p = 0;
    do
      d.type === "mopen" ? p += 1 : d.type === "mclose" && (p -= 1), d = d.rightSibling;
    while (!d.isLastSibling && p !== 0);
    h = e.offsetOf(d.leftSibling);
  } else if (t === "backward" && d.type === "mclose") {
    let p = 0;
    do
      d.type === "mopen" ? p += 1 : d.type === "mclose" && (p -= 1), d = d.leftSibling;
    while (!d.isFirstSibling && p !== 0);
    h = e.offsetOf(d);
  } else if (t === "backward") if (d.type === "first") for (; h > 0 && d.type === "first"; ) h -= 1, d = e.at(h);
  else {
    let p = d.type;
    d.type === "subsup" && (h = e.offsetOf(e.at(h).leftSibling)), h -= 1;
    let m = (n = e.at(h)) == null ? void 0 : n.type;
    for (; h >= 0 && m === p; ) ((a = e.at(h)) == null ? void 0 : a.type) === "subsup" ? h = e.offsetOf(e.at(h).leftSibling) : h -= 1, m = e.at(h).type;
  }
  else {
    let { type: p } = d, m = (o = e.at(h)) == null ? void 0 : o.type, { lastOffset: y } = e;
    for (; h <= y && (m === p || m === "subsup"); ) {
      for (; ((s = e.at(h).rightSibling) == null ? void 0 : s.type) === "subsup"; ) h = e.offsetOf(e.at(h).rightSibling);
      h += 1, m = (l = e.at(h)) == null ? void 0 : l.type;
    }
    h -= 1;
  }
  if ((u = i == null ? void 0 : i.extend) != null && u) {
    if (!e.setSelection(e.anchor, h)) return e.announce("plonk"), !1;
  } else {
    if (h === e.position) return e.announce("plonk"), !1;
    e.position = h;
  }
  return e.announce("move", c), e.mathfield.stopCoalescingUndo(), !0;
}
function mt(e, t, i) {
  var r, n;
  if (i = i ?? { extend: !1 }, e.mathfield.adoptStyle = t === "backward" ? "right" : "left", t !== "forward") {
    let [s, l] = Sm(e);
    s !== void 0 && l !== void 0 && e.deleteAtoms([s, l]);
  }
  if (t === "upward") return s2(e, i);
  if (t === "downward") return l2(e, i);
  if (i.extend) {
    let s = Ja(e, e.position, t);
    s < 0 && (s = 0), s > e.lastOffset && (s = e.lastOffset);
    let l = e.setSelection(e.anchor, s);
    return e.mathfield.stopCoalescingUndo(), l;
  }
  if (e.selectionIsPlaceholder) {
    e.collapseSelection(t);
    let s = mt(e, t);
    return e.mathfield.stopCoalescingUndo(), s;
  }
  let a = e.position, o = a;
  if (e.collapseSelection(t) ? (a = e.position, Rm(e, a) || (a = Ja(e, a, t))) : a = Ja(e, a, t), a < 0 || a > e.lastOffset) {
    let s = !0;
    return e.silenceNotifications || (s = (n = (r = e.mathfield.host) == null ? void 0 : r.dispatchEvent(new CustomEvent("move-out", { detail: { direction: t }, cancelable: !0, bubbles: !0, composed: !0 }))) != null ? n : !0), s && e.announce("plonk"), s;
  }
  return e.setPositionHandlingPlaceholder(a), e.mathfield.stopCoalescingUndo(), e.announce("move", o), !0;
}
function Ja(e, t, i) {
  return t = t + (i === "forward" ? 1 : -1), t < 0 || t > e.lastOffset || Rm(e, t) ? t : Ja(e, t, i);
}
function Rm(e, t) {
  var i;
  let r = e.at(t), n = r.parent;
  for (; n && !n.inCaptureSelection; ) n = n.parent;
  return !(n != null && n.inCaptureSelection || (i = r.parent) != null && i.skipBoundary && (!r.isFirstSibling && r.isLastSibling || r.type === "first") || e.mathfield.hasEditablePrompts && !r.parentPrompt);
}
function o2(e, t, i) {
  let r = 1 / 0, n = 0;
  for (; n < t.length; n++) {
    let a = Bp(e.getHTMLElement(t[n])).right, o = Math.abs(i - a);
    if (o <= r) r = o;
    else break;
  }
  return t[n - 1];
}
function fo(e, t, i, r, n) {
  let a = e.mathfield.hasEditablePrompts, o = a ? i.filter((u) => u.type === "prompt" && !u.captureSelection) : i, s = Bp(e.mathfield.getHTMLElement(t)).right, l = e.offsetOf(o2(e.mathfield, o, s)) - (a ? 1 : 0);
  if (r) {
    let [u, c] = e.selection.ranges[0], d;
    l < (n === "up" ? u : c) ? d = { ranges: [[l, c]], direction: "backward" } : d = { ranges: [[u, l]], direction: "forward" }, e.setSelection(d);
  } else e.setPositionHandlingPlaceholder(l);
  e.announce(`move ${n}`);
}
function s2(e, t) {
  var i, r;
  let n = (i = t == null ? void 0 : t.extend) != null ? i : !1;
  n || e.collapseSelection("backward");
  let a = () => {
    var l, u;
    let c = !0;
    return e.silenceNotifications || (c = (u = (l = e.mathfield.host) == null ? void 0 : l.dispatchEvent(new CustomEvent("move-out", { detail: { direction: "upward" }, cancelable: !0, bubbles: !0, composed: !0 }))) != null ? u : !0), e.announce(c ? "plonk" : "line"), c;
  }, o = e.at(e.position), s = o;
  for (; s && s.parentBranch !== "below" && !(Array.isArray(s.parentBranch) && s.parent instanceof H); ) s = s.parent;
  if (Array.isArray(s == null ? void 0 : s.parentBranch) && s.parent instanceof H) {
    let l = s.parent;
    if (s.parentBranch[0] < 1) return a();
    let u = s.parentBranch[0] - 1, c = l.array[u][s.parentBranch[1]];
    if (!c.some((d) => d.type === "prompt" && !d.captureSelection) && e.mathfield.hasEditablePrompts) return a();
    fo(e, o, c, n, "up");
  } else if (s) {
    let l = (r = s.parent.branch("above")) != null ? r : s.parent.createBranch("above");
    if (!l.some((u) => u.type === "prompt" && u.placeholderId) && e.mathfield.hasEditablePrompts) return a();
    fo(e, o, l, n, "up");
  } else return a();
  return e.mathfield.stopCoalescingUndo(), !0;
}
function l2(e, t) {
  var i, r;
  let n = (i = t == null ? void 0 : t.extend) != null ? i : !1;
  n || e.collapseSelection("forward");
  let a = () => {
    var l, u;
    let c = !0;
    return e.silenceNotifications || (c = (u = (l = e.mathfield.host) == null ? void 0 : l.dispatchEvent(new CustomEvent("move-out", { detail: { direction: "downward" }, cancelable: !0, bubbles: !0, composed: !0 }))) != null ? u : !0), e.announce(c ? "plonk" : "line"), c;
  }, o = e.at(e.position), s = o;
  for (; s && s.parentBranch !== "above" && !(Array.isArray(s.parentBranch) && s.parent instanceof H); ) s = s.parent;
  if (Array.isArray(s == null ? void 0 : s.parentBranch) && s.parent instanceof H) {
    let l = s.parent;
    if (s.parentBranch[0] + 1 > l.array.length - 1) return a();
    let u = s.parentBranch[0] + 1, c = l.array[u][s.parentBranch[1]];
    if (!c.some((d) => d.type === "prompt" && !d.captureSelection) && e.mathfield.hasEditablePrompts) return a();
    fo(e, o, c, n, "down");
  } else if (s) {
    let l = (r = s.parent.branch("below")) != null ? r : s.parent.createBranch("below");
    if (!l.some((u) => u.type === "prompt") && e.mathfield.hasEditablePrompts) return a();
    fo(e, o, l, n, "down");
  } else return a();
  return !0;
}
function qm(e) {
  let t = e.position, i = e.at(t).parent;
  return i != null && i.parent ? (e.position = e.offsetOf(i), e.mathfield.stopCoalescingUndo(), e.announce("move", t), !0) : (e.announce("plonk"), !1);
}
function u2(e) {
  let t = 0, i = e.at(e.position), r = !1;
  for (; i; ) (!i.hasEmptyBranch("superscript") || !i.hasEmptyBranch("subscript")) && (t += 1), i.hasEmptyBranch("superscript") ? i.hasEmptyBranch("subscript") || (r = !1) : r = !0, i = i.parent;
  return r ? t : 0;
}
function c2(e) {
  let t = 0, i = e.at(e.position), r = !1;
  for (; i; ) (!i.hasEmptyBranch("superscript") || !i.hasEmptyBranch("subscript")) && (t += 1), i.hasEmptyBranch("superscript") ? i.hasEmptyBranch("subscript") || (r = !0) : r = !1, i = i.parent;
  return r ? t : 0;
}
function Rd(e) {
  var t;
  if (e.collapseSelection(), u2(e) >= e.mathfield.options.scriptDepth[1]) return e.announce("plonk"), !1;
  let i = e.at(e.position);
  return i.subsupPlacement === void 0 && (((t = i.rightSibling) == null ? void 0 : t.type) !== "subsup" && i.parent.addChildAfter(new zo({ style: i.computedStyle }), i), i = i.rightSibling), i.createBranch("superscript"), e.setSelection(e.getSiblingsRange(e.offsetOf(i.superscript[0]))), !0;
}
function qd(e) {
  var t;
  if (e.collapseSelection(), c2(e) >= e.mathfield.options.scriptDepth[0]) return e.announce("plonk"), !1;
  let i = e.at(e.position);
  return i.subsupPlacement === void 0 && (((t = e.at(e.position + 1)) == null ? void 0 : t.type) !== "subsup" && i.parent.addChildAfter(new zo({ style: e.at(e.position).computedStyle }), i), i = e.at(e.position + 1)), i.createBranch("subscript"), e.setSelection(e.getSiblingsRange(e.offsetOf(i.subscript[0]))), !0;
}
function d2() {
  function e(l) {
    let u = [], c = [];
    return [...l.querySelectorAll(`input, select, textarea, a[href], button,
        [tabindex], audio[controls], video[controls],
        [contenteditable]:not([contenteditable="false"]), details>summary`)].filter(t).forEach((d, h) => {
      let p = r(d);
      p === 0 ? u.push(d) : c.push({ documentOrder: h, tabIndex: p, node: d });
    }), c.sort((d, h) => d.tabIndex === h.tabIndex ? d.documentOrder - h.documentOrder : d.tabIndex - h.tabIndex).map((d) => d.node).concat(u);
  }
  function t(l) {
    return !(!i(l) || n(l) || r(l) < 0);
  }
  function i(l) {
    return !(l.disabled || l.type === "hidden" && l.tagName.toUpperCase() === "INPUT" || s(l));
  }
  function r(l) {
    var u;
    let c = Number.parseInt((u = l.getAttribute("tabindex")) != null ? u : "NaN", 10);
    return Number.isNaN(c) ? l.contentEditable === "true" || (l.nodeName === "AUDIO" || l.nodeName === "VIDEO") && l.getAttribute("tabindex") === null ? 0 : l.tabIndex : c;
  }
  function n(l) {
    return l.tagName.toUpperCase() === "INPUT" && l.type === "radio" && !o(l);
  }
  function a(l, u) {
    for (let c of l) if (c.checked && c.form === u) return c;
    return null;
  }
  function o(l) {
    var u;
    if (!l.name) return !0;
    let c = ((u = l.form) != null ? u : l.ownerDocument).querySelectorAll('input[type="radio"][name="' + l.name + '"]'), d = a(c, l.form);
    return !d || d === l;
  }
  function s(l) {
    if (!Re() || l === document.activeElement || l.contains(document.activeElement)) return !1;
    if (getComputedStyle(l).visibility === "hidden") return !0;
    let u = l.getBoundingClientRect();
    if (u.width === 0 || u.height === 0) return !0;
    for (; l; ) {
      if (getComputedStyle(l).display === "none") return !0;
      l = l.parentElement;
    }
    return !1;
  }
  return Re() ? e(document.body) : [];
}
function ve(e, t, i = "forward") {
  let r = e.position;
  if (Array.isArray(t)) {
    let n = e.offsetOf(t[0]), a = e.offsetOf(t[t.length - 1]);
    return i === "forward" ? e.setSelection(n, a) : e.setSelection(a, n), e.announce("move", r), e.mathfield.stopCoalescingUndo(), !0;
  }
  return i === "forward" ? ve(e, [t.leftSibling, t]) : ve(e, [t, t.leftSibling]);
}
function Xe(e, t) {
  let i = e.position;
  if (typeof t == "number" && (t = e.at(t)), t.type === "prompt") e.setSelection(e.offsetOf(t.firstChild), e.offsetOf(t.lastChild));
  else {
    let r = e.offsetOf(t);
    t.type === "placeholder" ? e.setSelection(r - 1, r) : e.position = r;
  }
  return e.announce("move", i), e.mathfield.stopCoalescingUndo(), !0;
}
function lr(e, t, i = !0) {
  var r, n;
  let a = t === "forward" ? 1 : -1;
  e.at(e.anchor).type === "placeholder" && mt(e, t);
  let o, s = e.at(e.anchor).parentPrompt;
  s ? t === "forward" ? o = e.offsetOf(s) + 1 : o = e.offsetOf(s.leftSibling) : o = Math.max(e.position + a, 0);
  let l = ml(e, o, t);
  if (!l || t === "forward" && e.offsetOf(l) < o || t === "backward" && e.offsetOf(l) > o) {
    if (!i || !((n = (r = e.mathfield.host) == null ? void 0 : r.dispatchEvent(new CustomEvent("move-out", { detail: { direction: t }, cancelable: !0, bubbles: !0, composed: !0 }))) == null || n)) return e.announce("plonk"), !1;
    let u = d2();
    if (!document.activeElement || u.length <= 1) return e.announce("plonk"), !1;
    let c = u.indexOf(document.activeElement) + a;
    return c < 0 && (c = u.length - 1), c >= u.length && (c = 0), u[c].focus(), e.mathfield.stopCoalescingUndo(), !0;
  }
  return Xe(e, l), !0;
}
function ml(e, t = 0, i = "forward") {
  return e.findAtom((r) => r.type === "placeholder" || r.type === "prompt" || !e.mathfield.readOnly && r.treeDepth > 2 && r.isFirstSibling && r.isLastSibling, t, i);
}
Ce({ moveToOpposite: (e) => {
  let t = { superscript: "subscript", subscript: "superscript", above: "below", below: "above" }, i = e.at(e.position), { parent: r } = i;
  if (!r) return e.announce("plonk"), !1;
  let n = i.parentBranch, a;
  if (typeof n == "string" && (a = t[n]), !a) {
    let s = i.subsupPlacement ? qd(e) : Rd(e);
    return e.mathfield.stopCoalescingUndo(), s;
  }
  r.branch(a) || r.createBranch(a);
  let o = e.setSelection(e.getBranchRange(e.offsetOf(r), a));
  return e.mathfield.stopCoalescingUndo(), o;
}, moveBeforeParent: (e) => {
  let { parent: t } = e.at(e.position);
  return t ? (e.position = e.offsetOf(t), e.mathfield.stopCoalescingUndo(), !0) : (e.announce("plonk"), !1);
}, moveAfterParent: (e) => qm(e), moveToNextChar: (e) => mt(e, "forward"), moveToPreviousChar: (e) => mt(e, "backward"), moveUp: (e) => mt(e, "upward"), moveDown: (e) => mt(e, "downward"), moveToNextWord: (e) => sr(e, "forward"), moveToPreviousWord: (e) => sr(e, "backward"), moveToGroupStart: (e) => {
  let t = e.offsetOf(e.at(e.position).firstSibling);
  return t === e.position ? (e.announce("plonk"), !1) : (e.position = t, e.mathfield.stopCoalescingUndo(), !0);
}, moveToGroupEnd: (e) => {
  let t = e.offsetOf(e.at(e.position).lastSibling);
  return t === e.position ? (e.announce("plonk"), !1) : (e.position = t, e.mathfield.stopCoalescingUndo(), !0);
}, moveToNextGroup: (e) => {
  var t, i, r, n;
  if (e.position === e.lastOffset && e.anchor === e.lastOffset) return lr(e, "forward");
  let a = e.at(e.position);
  if (a.mode === "text") {
    if (e.selectionIsCollapsed) {
      let d = a;
      for (; d && d.mode === "text"; ) d = d.leftSibling;
      let h = a;
      for (; ((t = h.rightSibling) == null ? void 0 : t.mode) === "text"; ) h = h.rightSibling;
      if (d && h) return ve(e, [d, h]);
    }
    if (a.rightSibling.mode === "text") {
      let d = a;
      for (; d && d.mode === "text"; ) d = d.rightSibling;
      return d ? (Xe(e, (i = d.leftSibling) != null ? i : d), e.mathfield.switchMode("math"), !0) : Xe(e, e.lastOffset);
    }
  }
  let o = e.at(e.anchor).parentPrompt, s = o ? e.offsetOf(o) + 1 : Math.max(e.position + 1, 0), l = ml(e, s, "forward");
  if (l && e.offsetOf(l) < s) return lr(e, "forward");
  if (l) return Xe(e, l);
  let u = jd(e, a, (d) => d.type === "leftright" || d.type === "text", "forward");
  if (u) {
    if (u.mode === "text") {
      let d = u;
      for (; d && d.mode === "text"; ) d = d.rightSibling;
      return ve(e, [(r = u.leftSibling) != null ? r : u, (n = d.leftSibling) != null ? n : d]);
    }
    return ve(e, u);
  }
  let c = a.parent;
  if (c) {
    if (c.type === "leftright" || c.type === "surd") return ve(e, c);
    if (a.parentBranch === "superscript" && c.subscript) return ve(e, c.subscript);
    if (a.parentBranch === "above" && c.below) return ve(e, c.below);
    if (a.parentBranch === "superscript" || a.parentBranch === "subscript") return Xe(e, c);
    if (a.parentBranch === "above" || a.parentBranch === "below") return ve(e, c);
  }
  return Xe(e, e.lastOffset);
}, moveToPreviousGroup: (e) => {
  var t;
  if (e.position === 0 && e.anchor === 0) return lr(e, "backward");
  let i = e.at(e.position), r = i.mode;
  if (r === "text") {
    if (e.selectionIsCollapsed) {
      let s = i;
      for (; s && s.mode === "text"; ) s = s.leftSibling;
      let l = i;
      for (; ((t = l.rightSibling) == null ? void 0 : t.mode) === "text"; ) l = l.rightSibling;
      if (s && l) return ve(e, [s, l]);
    }
    for (; i && i.mode === "text"; ) i = i.leftSibling;
    return i ? Xe(e, i) : Xe(e, 0);
  }
  let n = e.at(e.anchor).parentPrompt, a = n ? e.offsetOf(n.leftSibling) : Math.max(e.position - 1, 0), o = ml(e, a, "backward");
  if (o && e.offsetOf(o) > a) return lr(e, "backward");
  if (o) return Xe(e, o);
  if (r === "math") {
    let s = jd(e, i, (u) => u.type === "leftright" || u.type === "text", "backward");
    if (s) {
      if (s.mode === "text") {
        let u = s;
        for (; u && u.mode === "text"; ) u = u.leftSibling;
        return ve(e, [s, u]);
      }
      return ve(e, s);
    }
    let l = i.parent;
    if (l) {
      if (l.type === "leftright" || l.type === "surd") return ve(e, l);
      if (i.parentBranch === "subscript" && l.superscript) return ve(e, l.superscript);
      if (i.parentBranch === "below" && l.above) return ve(e, l.above);
      if (i.parentBranch === "superscript" || i.parentBranch === "subscript") return Xe(e, l);
      if (i.parentBranch === "above" || i.parentBranch === "below") return ve(e, l);
    }
    return Xe(e, 0);
  }
  return !1;
}, moveToMathfieldStart: (e) => e.selectionIsCollapsed && e.position === 0 ? (e.announce("plonk"), !1) : (e.position = 0, e.mathfield.stopCoalescingUndo(), !0), moveToMathfieldEnd: (e) => e.selectionIsCollapsed && e.position === e.lastOffset ? (e.announce("plonk"), !1) : (e.position = e.lastOffset, e.mathfield.stopCoalescingUndo(), !0), moveToSuperscript: Rd, moveToSubscript: qd }, { target: "model", changeSelection: !0 });
Ce({ moveToNextPlaceholder: (e) => lr(e, "forward"), moveToPreviousPlaceholder: (e) => lr(e, "backward") }, { target: "model", changeSelection: !0, audioFeedback: "return" });
function jd(e, t, i, r) {
  if (r === "forward") {
    let a = t.rightSibling;
    for (; a && !i(a); ) a = a.rightSibling;
    return a;
  }
  let n = t.leftSibling;
  for (; n && !i(n); ) n = n.leftSibling;
  return n;
}
function Ta(e, t, i) {
  typeof t == "function" && (i = t, t = 1 / 0), t === void 0 && (t = 1 / 0);
  let r = e.position, n = !1, a = "";
  for (; !n; ) {
    let o = e.at(r);
    n = t === 0 || o === void 0 || o.type === "first" || o.mode !== "math" || !(o.type && /mord|mpunct|operator/.test(o.type) || o.type === "mop" && /[a-zA-Z ]+/.test(o.value)) || !o.hasEmptyBranch("superscript") || !o.hasEmptyBranch("subscript") || typeof i == "function" && !i(o), n || (o.mode = "text", o.command = o.value, o.verbatimLatex = void 0, a += o.value), r -= 1, t -= 1;
  }
  e.contentDidChange({ data: a, inputType: "insertText" });
}
function Hr(e, t, i) {
  typeof t == "function" && (i = t, t = 1 / 0), t === void 0 && (t = 1 / 0);
  let r = e.position, n = !1, a = [];
  for (; !n; ) {
    let o = e.at(r);
    n = t === 0 || !o || o.type === "first" || o.isFirstSibling || o.mode !== "text" || o.value === " " || typeof i == "function" && !i(o), n || (a.push(v.serialize([o], { defaultMode: "math" })), o.mode = "math"), r -= 1, t -= 1;
  }
  du(e), e.contentDidChange({ data: R(a), inputType: "insertText" });
}
function du(e) {
  var t;
  let i = e.position - 1;
  for (; i >= 0 && ((t = e.at(i)) == null ? void 0 : t.mode) === "math"; ) i -= 1;
  if (!(i < 0) && e.at(i).mode === "text" && e.at(i).value === " " && e.at(i - 1).mode === "math") {
    e.at(i - 1).parent.removeChild(e.at(i - 1));
    let r = e.silenceNotifications;
    e.silenceNotifications = !0, e.position -= 1, e.silenceNotifications = r, e.contentDidChange({ inputType: "deleteContent" });
  }
}
function h2(e) {
  let t = "", i = e.position, r = !1;
  for (; !r; ) {
    let n = e.at(i);
    r = !(n && (n.mode === "text" || n.mode === "math" && n.type && /mord|mpunct/.test(n.type))), r || (t = n.value + t), i -= 1;
  }
  return t;
}
function p2(e, t, i) {
  let { model: r } = e;
  if (r.mode === "latex" || !r.at(r.position).isLastSibling || !i || !Ko(i)) return !1;
  let n = tr(i);
  if (!r.selectionIsCollapsed) return !!(e.model.mode === "text" && /[/_^]/.test(n));
  let a = h2(r) + n;
  if (e.model.mode === "text") {
    if (t === "Esc" || /[/\\]/.test(n)) return !0;
    if (/[\^_]/.test(n)) return /(^|\s)[a-zA-Z][^_]$/.test(a) && Hr(r, 1), !0;
    let o = { ")": "(", "}": "{", "]": "[" }[n], { parent: s } = r.at(r.position);
    if (o && s instanceof Q && s.leftDelim === o) return !0;
    if (/(^|[^a-zA-Z])(a|I) $/.test(a)) return !1;
    if (/[$€£₤₺¥¤฿¢₡₧₨₹₩₱]/u.test(n)) return !0;
    if (/(^|[^a-zA-Z'’])[a-zA-Z] $/.test(a)) return Hr(r, 1), !1;
    if (/\D\.[^\d\s]$/.test(a)) {
      Hr(r, 1);
      let l = r.at(r.position);
      return l.value = "⋅", l.style.variant = "normal", l.command = "\\cdot", l.verbatimLatex = void 0, r.contentDidChange({ data: "\\cdot", inputType: "insertText" }), !0;
    }
    if (/(^|\s)[a-zA-Z][^a-zA-Z]$/.test(a) || /\.\d$/.test(a) || /\([\d+\-.]$/.test(a)) return Hr(r, 1), !0;
    if (/\([a-z][,;]$/.test(a)) return Hr(r, 2), !0;
    if (/[\d+\-=><*|]$/.test(n)) return du(r), !0;
  } else {
    if (t === "[Space]") return Ta(r, void 0, (o) => /[a-z][:,;.]$/.test(o.value)), !0;
    if (/[a-zA-Z]{3,}$/.test(a) && !/(dxd|abc|xyz|uvw)$/.test(a)) return Ta(r, void 0, (o) => /[a-zA-Z]/.test(o.value)), !0;
    if (/(^|\W)(if)$/i.test(a)) return Ta(r, 1), !0;
    if (/(\u0393|\u0394|\u0398|\u039B|\u039E|\u03A0|\u03A3|\u03A5|\u03A6|\u03A8|\u03A9|[\u03B1-\u03C9]|\u03D1|\u03D5|\u03D6|\u03F1|\u03F5){3,}$/u.test(a) && !/(αβγ)$/.test(a)) return Ta(r, void 0, (o) => /(:|,|;|.|\u0393|\u0394|\u0398|\u039B|\u039E|\u03A0|\u03A3|\u03A5|\u03A6|\u03A8|\u03A9|[\u03B1-\u03C9]|\u03D1|\u03D5|\u03D6|\u03F1|\u03F5)/u.test(o.value)), !0;
    if (n === "?" || n === "." && !/[\d-+]\.$/.test(a)) return !0;
  }
  return !1;
}
function m2(e, t) {
  if (!e.isSelectionEditable || !e.keystrokeCaptionVisible) return;
  let i = jm(), r = e.element.getBoundingClientRect();
  i.style.left = `${r.left}px`, i.style.top = `${r.top - 64}px`, i.innerHTML = globalThis.MathfieldElement.createHTML("<span>" + (au(t) || t) + "</span>" + i.innerHTML), i.style.visibility = "visible", setTimeout(() => {
    i.childNodes.length > 0 && i.childNodes[i.childNodes.length - 1].remove(), i.childNodes.length === 0 && (i.style.visibility = "hidden");
  }, 3e3);
}
function f2(e) {
  if (e.keystrokeCaptionVisible = !e.keystrokeCaptionVisible, e.keystrokeCaptionVisible) {
    let t = jm();
    t.innerHTML = "";
  } else {
    let t = Po("mathlive-keystroke-caption-panel");
    t.style.visibility = "hidden";
  }
  return !1;
}
function jm() {
  return document.getElementById("mathlive-keystroke-caption-panel") || (Zt("keystroke-caption"), Zt("core"), Po("mathlive-keystroke-caption-panel"));
}
function g2() {
  document.getElementById("mathlive-keystroke-caption-panel") && (ou("mathlive-keystroke-caption-panel"), Yt("core"), Yt("keystroke-caption"));
}
function Vm(e, t) {
  var i, r, n;
  let { model: a } = e, o = Mm(t);
  if (t.isTrusted) {
    a3(t);
    let p = vn();
    e.keyboardLayout !== p.id && (e.keyboardLayout = p.id, e._keybindings = void 0);
  }
  if (clearTimeout(e.inlineShortcutBufferFlushTimer), e.inlineShortcutBufferFlushTimer = 0, m2(e, o), t.isTrusted && t.defaultPrevented) return e.flushInlineShortcutBuffer(), !1;
  let s, l = "", u, c = e.inlineShortcutBuffer;
  if (e.isSelectionEditable) {
    if (a.mode === "math") if (o === "[Backspace]") c.pop();
    else if (!Ko(t)) e.flushInlineShortcutBuffer();
    else {
      let p = tr(t), m = [...(r = (i = c[c.length - 1]) == null ? void 0 : i.keystrokes) != null ? r : [], p];
      c.push({ state: a.getState(), keystrokes: m, leftSiblings: y2(e) });
      let y = 0, w = "";
      for (; !s && y < m.length; ) u = c.length - (m.length - y), w = m.slice(y).join(""), s = Ql(c[u].leftSiblings, w, e.options.inlineShortcuts), !s && /^[a-zA-Z][a-zA-Z0-9]+?([_\^][a-zA-Z0-9\*\+\-]+?)?$/.test(w) && (s = e.options.onInlineShortcut(e, w)), y += 1;
      e.flushInlineShortcutBuffer({ defer: !0 });
    }
    e.options.smartMode && (s ? e.switchMode("math") : p2(e, o, t) && (e.switchMode({ math: "text", text: "math" }[a.mode]), l = ""));
  }
  if (!s) {
    if (l || (l = d3(e.keybindings, a.mode, t)), !l && (o === "[Enter]" || o === "[Return]")) {
      let p = !1;
      return a.contentWillChange({ inputType: "insertLineBreak" }) && (e.host && (p = !e.host.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }))), p || t.preventDefault && (t.preventDefault(), t.stopPropagation()), a.contentDidChange({ inputType: "insertLineBreak" })), p;
    }
    if ((!l || o === "[Space]") && a.mode === "math") {
      if (o === "[Space]") {
        if (e.adoptStyle = "none", e.flushInlineShortcutBuffer(), e.options.mathModeSpace) return G.insert(a, e.options.mathModeSpace, { format: "latex", mode: "math" }), e.snapshot("insert-space"), l = "", e.dirty = !0, e.scrollIntoView(), t.preventDefault && (t.preventDefault(), t.stopPropagation()), !1;
        let p = a.at(a.position + 1), m = a.at(a.position - 1);
        if ((p == null ? void 0 : p.mode) === "text" || (m == null ? void 0 : m.mode) === "text") return G.insert(a, " ", { mode: "text" }), e.snapshot("insert-space"), e.dirty = !0, e.scrollIntoView(), !1;
      }
      (n = a.at(a.position)) != null && n.isDigit() && globalThis.MathfieldElement.decimalSeparator === "," && tr(t) === "," && (l = "insertDecimalSeparator");
    }
  }
  if (!s && !l) {
    if (a.mathfield.smartFence) {
      if (gl(a, tr(t), e.effectiveStyle)) return e.dirty = !0, e.scrollIntoView(), t.preventDefault && t.preventDefault(), !1;
    } else {
      let { parent: p } = a.at(a.position);
      if (p instanceof Q && p.rightDelim === "?" && a.at(a.position).isLastSibling && /^[)}\]|]$/.test(o)) return e.snapshot(), p.isDirty = !0, p.rightDelim = o, a.position += 1, a.selectionDidChange(), a.contentDidChange({ data: tr(t), inputType: "insertText" }), e.snapshot("insert-fence"), e.dirty = !0, e.scrollIntoView(), t.preventDefault && t.preventDefault(), !1;
      if (!a.selectionIsCollapsed) {
        let m = tr(t);
        if (m === "(" || m === "{" || m === "[") {
          let y = { "(": "(", "{": "\\lbrace", "[": "\\lbrack" }[m], w = { "(": ")", "{": "\\rbrace", "[": "\\rbrack" }[m], [g, k] = ge(a.selection);
          return e.snapshot(), a.position = k, G.insert(a, w, { format: "latex" }), a.position = g, G.insert(a, y, { format: "latex" }), a.setSelection(g + 1, k + 1), a.contentDidChange({ data: m, inputType: "insertText" }), e.snapshot("insert-fence"), e.dirty = !0, e.scrollIntoView(), t.preventDefault && t.preventDefault(), !1;
        }
      }
    }
    return !0;
  }
  let d = a.at(Math.max(a.position, a.anchor)), { parent: h } = d;
  if (l === "moveAfterParent" && (h == null ? void 0 : h.type) === "leftright" && d.isLastSibling && e.options.smartFence && gl(a, ".", e.defaultStyle) && (l = "", ee(e)), e.keyboardDelegate.cancelComposition(), l) e.executeCommand(l);
  else if (s) {
    let p = e.effectiveStyle;
    a.setState(c[u].state);
    let m = c[c.length - 1].keystrokes;
    for (let y of m) G.insert(a, y, { silenceNotifications: !0, style: p });
    e.snapshot("insert-shortcut"), a.setState(c[u].state), a.deferNotifications({ content: !0, selection: !0, data: s, type: "insertText" }, () => (G.insert(a, s, { format: "latex", style: p }), du(e.model), s.endsWith(" ") && (e.switchMode("text"), G.insert(a, " ", { style: p, mode: "text" })), e.snapshot(), a.selectionIsCollapsed || e.flushInlineShortcutBuffer(), !0)), e.dirty = !0, a.announce("replacement");
  }
  return e.scrollIntoView(), t.preventDefault && t.preventDefault(), !1;
}
function fl(e, t, i) {
  let { model: r } = e;
  if (!e.isSelectionEditable) {
    r.announce("plonk");
    return;
  }
  i != null || (i = {}), i.focus && e.focus(), i.feedback && globalThis.MathfieldElement.playSound("keypress"), typeof i.mode == "string" && (e.switchMode(i.mode), e.snapshot());
  let n = hp(t), a = window.mathVirtualKeyboard;
  if (a != null && a.isShifted && (n = typeof n == "string" ? n.toUpperCase() : n.map((l) => l.toUpperCase())), i.simulateKeystroke) {
    let l = !0;
    for (let u of n) Vm(e, new KeyboardEvent("keypress", { key: u })) && (l = !1);
    if (l) return;
  }
  let o = r.at(r.position), s = f(f({}, o.computedStyle), e.defaultStyle);
  if (r.selectionIsCollapsed || (r.deleteAtoms(ge(r.selection)), e.snapshot("delete")), r.mode === "latex") r.deferNotifications({ content: !0, selection: !0, data: t, type: "insertText" }, () => {
    $o(e);
    for (let l of n) G.insert(r, l);
    e.snapshot("insert-latex"), Fn(e);
  });
  else if (r.mode === "text") {
    for (let l of n) G.insert(r, l, { style: s });
    e.snapshot("insert-text");
  } else if (r.mode === "math") for (let l of n) b2(e, l, s, o);
  e.dirty = !0, e.scrollIntoView();
}
function y2(e) {
  let t = e.model, i = [], r = t.at(Math.min(t.position, t.anchor));
  for (; r.type !== "first"; ) i.push(r), r = r.leftSibling;
  return i;
}
function b2(e, t, i, r) {
  let n = e.model, a = { "^": "moveToSuperscript", _: "moveToSubscript", " ": "moveAfterParent" }[t];
  if (t === " " && e.options.mathModeSpace && (a = ["insert", e.options.mathModeSpace]), a) {
    e.executeCommand(a);
    return;
  }
  if (/\d/.test(t) && e.options.smartSuperscript && r.parentBranch === "superscript" && r.parent.type !== "mop" && r.parent.type !== "operator" && r.parent.type !== "extensible-symbol" && r.hasNoSiblings) {
    v2(n), G.insert(n, t, { style: i }), e.snapshot(), qm(n), e.snapshot();
    return;
  }
  if (/[a-zA-Z0-9]/.test(t) && e.adoptStyle !== "none") {
    let o = e.adoptStyle === "left" ? r : r.parent ? r.rightSibling : null;
    (o == null ? void 0 : o.type) === "mord" && /[a-zA-Z0-9]/.test(o.value) && (i = f({}, i), o.style.variant && (i.variant = o.style.variant), o.style.variantStyle && (i.variantStyle = o.style.variantStyle));
  }
  G.insert(n, t, { style: i }), e.snapshot(`insert-${n.at(n.position).type}`);
}
function v2(e) {
  e.selectionIsCollapsed || (e.deleteAtoms(ge(e.selection)), e.mathfield.snapshot("delete"));
}
function gl(e, t, i) {
  if (!t || e.mode !== "math") return !1;
  let r = e.at(e.position), { parent: n } = r, a = { "(": "(", ")": ")", "{": "\\lbrace", "}": "\\rbrace", "[": "\\lbrack", "]": "\\rbrack", "|": "|" }[t];
  if (!a) return !1;
  let o = oo[a], s = To[a];
  if (!e.selectionIsCollapsed) {
    e.mathfield.snapshot();
    let [l, u] = ge(e.selection), c = e.extractAtoms([l, u]), d = n.addChildrenAfter([new Q("left...right", c, { leftDelim: a, rightDelim: s })], e.at(l));
    return e.setSelection(e.offsetOf(d.firstChild), e.offsetOf(d.lastChild)), e.mathfield.snapshot("insert-fence"), e.contentDidChange({ data: a, inputType: "insertText" }), !0;
  }
  if (a === "|") {
    let l = n instanceof Q ? n.leftDelim + n.rightDelim : "";
    if (l === "\\lbrace\\rbrace" || l === "\\{\\}" || l === "\\lbrace?") return e.mathfield.snapshot(), G.insert(e, "\\,\\middle\\vert\\,", { format: "latex", style: i }), e.mathfield.snapshot("insert-fence"), e.contentDidChange({ data: a, inputType: "insertText" }), !0;
  }
  if (s) {
    if (n instanceof Q && n.firstChild === r && (n.leftDelim === "?" || n.leftDelim === ".")) return n.leftDelim = a, n.isDirty = !0, e.mathfield.snapshot(), e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
    if (!(n instanceof Q)) {
      let d = r;
      for (; d && !(d.type === "mclose" && d.value === s); ) d = d.rightSibling;
      if (d) {
        e.mathfield.snapshot();
        let h = e.extractAtoms([e.offsetOf(r), e.offsetOf(d)]);
        return h.pop(), n.addChildrenAfter([new Q("left...right", h, { leftDelim: a, rightDelim: s })], r), e.position = e.offsetOf(n.firstChild) + 1, e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
      }
    }
    let l = e.offsetOf(r.lastSibling), u;
    for (u = e.position; u <= l; u++) {
      let d = e.at(u);
      if (d instanceof Q && (d.leftDelim === "?" || d.leftDelim === ".") && Vd(a, d.rightDelim)) break;
    }
    let c = e.at(u);
    if (u <= l && c instanceof Q) {
      c.leftDelim = a, e.mathfield.snapshot();
      let d = e.extractAtoms([e.position, u - 1]);
      return d = d.filter((h) => h.type !== "first"), c.addChildren(d, c.parentBranch), e.position += 1, e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
    }
    if (n instanceof Q && (n.leftDelim === "?" || n.leftDelim === ".") && Vd(a, n.rightDelim)) {
      n.isDirty = !0, n.leftDelim = a, e.mathfield.snapshot();
      let d = e.extractAtoms([e.offsetOf(r.firstSibling), e.position]);
      for (let h of d) n.parent.addChildBefore(h, n);
      return e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
    }
    if (!(n instanceof Q && n.leftDelim === "|")) {
      if (e.mathfield.snapshot(), G.insert(e, `\\left${a}\\right?`, { format: "latex", style: i }), r.lastSibling.type !== "first") {
        let d = e.offsetOf(r.lastSibling), h = e.extractAtoms([e.position, d]);
        e.at(e.position).body = h, e.position -= 1;
      }
      return e.mathfield.snapshot("insert-fence"), !0;
    }
  }
  if (o) {
    let l = r;
    for (; l; ) {
      if (l.type === "mopen" && l.value === o) {
        e.mathfield.snapshot();
        let p = l.leftSibling, m = e.extractAtoms([e.offsetOf(l.leftSibling), e.offsetOf(r)]);
        m.shift();
        let y = new Q("left...right", m, { leftDelim: o, rightDelim: a });
        return n.addChildrenAfter([y], p), e.position = e.offsetOf(y), e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
      }
      l = l.leftSibling;
    }
    if (n instanceof Q && r.isLastSibling && Ts(n.leftDelim, a)) return e.mathfield.snapshot(), n.isDirty = !0, n.rightDelim = a, e.position += 1, e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
    let u = e.offsetOf(r.firstSibling), c;
    for (c = e.position; c >= u; c--) {
      let p = e.at(c);
      if (p instanceof Q && (p.rightDelim === "?" || p.rightDelim === ".") && Ts(p.leftDelim, a)) break;
    }
    let d = e.at(c);
    if (c >= u && d instanceof Q) return e.mathfield.snapshot(), d.rightDelim = a, d.addChildren(e.extractAtoms([c, e.position]), d.parentBranch), e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
    if (n instanceof Q && (n.rightDelim === "?" || n.rightDelim === ".") && Ts(n.leftDelim, a)) return e.mathfield.snapshot(), n.isDirty = !0, n.rightDelim = a, n.parent.addChildren(e.extractAtoms([e.position, e.offsetOf(r.lastSibling)]), n.parentBranch), e.position = e.offsetOf(n), e.contentDidChange({ data: a, inputType: "insertText" }), e.mathfield.snapshot("insert-fence"), !0;
    let h = n.parent;
    return h instanceof Q && (h.rightDelim === "?" || h.rightDelim === ".") && e.at(e.position).isLastSibling ? (e.position = e.offsetOf(h), gl(e, a, i)) : !1;
  }
  return !1;
}
function Ts(e, t) {
  return e ? ["(", "\\lparen", "{", "\\{", "\\lbrace", "[", "\\lbrack"].includes(e) ? [")", "\\rparen", "}", "\\}", "\\rbrace", "]", "\\rbrack"].includes(t) : To[e] === t : !0;
}
function Vd(e, t) {
  return t ? [")", "\\rparen", "}", "\\}", "\\rbrace", "]", "\\rbrack"].includes(t) ? ["(", "\\lparen", "{", "\\{", "\\lbrace", "[", "\\lbrack"].includes(e) : oo[t] === e : !0;
}
Ce({ undo: (e) => (e.undo(), !0), redo: (e) => (e.redo(), !0), scrollIntoView: (e) => (e.scrollIntoView(), !0), scrollToStart: (e) => (e.field.scroll(0, 0), !0), scrollToEnd: (e) => {
  let t = e.field.getBoundingClientRect();
  return e.field.scroll(t.left - window.scrollX, 0), !0;
}, toggleKeystrokeCaption: f2, toggleContextMenu: (e) => {
  let t = e.toggleContextMenu();
  return t || e.model.announce("plonk"), t;
}, plonk: (e) => (e.model.announce("plonk"), !0), switchMode: (e, t, i, r) => (e.switchMode(t, i, r), !0), insert: (e, t, i) => e.insert(t, i), typedText: (e, t, i) => (fl(e, t, i), !0), insertDecimalSeparator: (e) => {
  let t = e.model;
  return t.mode === "math" && globalThis.MathfieldElement.decimalSeparator === "," && t.at(Math.max(t.position, t.anchor)).isDigit() ? (e.insert("{,}", { format: "latex" }), e.snapshot("insert-mord"), !0) : (e.insert("."), !0);
}, commit: (e) => {
  var t;
  return e.model.contentWillChange({ inputType: "insertLineBreak" }) && ((t = e.host) == null || t.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 })), e.model.contentDidChange({ inputType: "insertLineBreak" })), !0;
}, insertPrompt: (e, t, i) => {
  let r = e.getPrompts(), n = "prompt-" + Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36), a = 0;
  for (; r.includes(n) && a < 100; ) {
    if (a === 99) return console.error("could not find a unique ID after 100 tries"), !1;
    n = "prompt-" + Date.now().toString(36).slice(-2) + Math.floor(Math.random() * 1e5).toString(36), a++;
  }
  return e.insert(`\\placeholder[${t ?? n}]{}`, i), !0;
} });
Ce({ copyToClipboard: (e) => (e.focus(), e.model.selectionIsCollapsed && e.select(), "queryCommandSupported" in document && document.queryCommandSupported("copy") ? document.execCommand("copy") : e.element.querySelector(".ML__keyboard-sink").dispatchEvent(new ClipboardEvent("copy", { bubbles: !0, composed: !0 })), !1) }, { target: "mathfield" });
Ce({ cutToClipboard: (e) => (e.focus(), "queryCommandSupported" in document && document.queryCommandSupported("cut") ? document.execCommand("cut") : e.element.querySelector(".ML__keyboard-sink").dispatchEvent(new ClipboardEvent("cut", { bubbles: !0, composed: !0 })), !0), pasteFromClipboard: (e) => (e.focus(), "queryCommandSupported" in document && document.queryCommandSupported("paste") ? (document.execCommand("paste"), !0) : (navigator.clipboard.readText().then((t) => {
  t && e.model.contentWillChange({ inputType: "insertFromPaste", data: t }) ? (e.stopCoalescingUndo(), e.stopRecording(), e.insert(t, { mode: e.model.mode }) && (Fn(e), e.startRecording(), e.snapshot("paste"), e.model.contentDidChange({ inputType: "insertFromPaste" }), ee(e))) : e.model.announce("plonk"), e.startRecording();
}), !0)) }, { target: "mathfield", canUndo: !0, changeContent: !0, changeSelection: !0 });
function x2(e, t) {
  e.flushInlineShortcutBuffer(), e.stopCoalescingUndo();
  let i = yl(e, t), { model: r } = e;
  return r.selectionIsCollapsed ? (e.defaultStyle.fontSeries && i.fontSeries === e.defaultStyle.fontSeries && (i.fontSeries = "auto"), i.fontShape && i.fontShape === e.defaultStyle.fontShape && (i.fontShape = "auto"), i.color && i.color === e.defaultStyle.color && (i.color = "none"), i.backgroundColor && i.backgroundColor === e.defaultStyle.backgroundColor && (i.backgroundColor = "none"), i.fontSize && i.fontSize === e.defaultStyle.fontSize && (i.fontSize = "auto"), e.defaultStyle = f(f({}, e.defaultStyle), i)) : e.model.deferNotifications({ content: !0, type: "insertText" }, () => {
    r.selection.ranges.forEach((n) => hl(r, n, i, { operation: "toggle" })), e.snapshot("style-change");
  }), !0;
}
Ce({ applyStyle: x2 }, { target: "mathfield", canUndo: !0, changeContent: !0 });
function yl(e, t) {
  var i, r, n, a, o, s, l, u, c, d;
  let h = {};
  if (typeof t.color == "string") {
    let m = (r = e.colorMap((i = t.color) != null ? i : t.verbatimColor)) != null ? r : "none";
    m !== t.color && (h.verbatimColor = (n = t.verbatimColor) != null ? n : t.color), h.color = m;
  }
  if (typeof t.backgroundColor == "string") {
    let m = (o = e.backgroundColorMap((a = t.backgroundColor) != null ? a : t.verbatimBackgroundColor)) != null ? o : "none";
    m !== t.backgroundColor && (h.verbatimBackgroundColor = (s = t.verbatimBackgroundColor) != null ? s : t.backgroundColor), h.backgroundColor = m;
  }
  typeof t.fontFamily == "string" && (h.fontFamily = t.fontFamily), typeof t.series == "string" && (h.fontSeries = t.series), typeof t.fontSeries == "string" && (h.fontSeries = t.fontSeries.toLowerCase()), h.fontSeries && (h.fontSeries = (l = { bold: "b", medium: "m", normal: "m" }[h.fontSeries]) != null ? l : h.fontSeries), typeof t.shape == "string" && (h.fontShape = t.shape), typeof t.fontShape == "string" && (h.fontShape = t.fontShape.toLowerCase()), h.fontShape && (h.fontShape = (u = { italic: "it", up: "n", upright: "n", normal: "n" }[h.fontShape]) != null ? u : h.fontShape), t.variant && (h.variant = t.variant.toLowerCase()), t.variantStyle && (h.variantStyle = t.variantStyle.toLowerCase());
  let p = (c = t.size) != null ? c : t.fontSize;
  return typeof p == "number" ? h.fontSize = Math.max(1, Math.min(10, p)) : typeof p == "string" && (h.fontSize = (d = { size1: 1, size2: 2, size3: 3, size4: 4, size5: 5, size6: 6, size7: 7, size8: 8, size9: 9, size10: 10 }[p.toLowerCase()]) != null ? d : { tiny: 1, scriptsize: 2, footnotesize: 3, small: 4, normal: 5, normalsize: 5, large: 6, Large: 7, LARGE: 8, huge: 9, Huge: 10 }[p]), h;
}
function bl(e) {
  let [t, i] = ge(e.selection);
  if (t = Hd(e, t, "backward"), i = Hd(e, i, "forward"), t === i) {
    let r = e.at(t);
    if (r.type === "leftright") return e.setSelection(e.offsetOf(r.firstChild) - 1, i);
    if (r.type === "first" && (r.parent.type === "leftright" || r.parent.type === "surd")) return e.setSelection(t - 1, e.offsetOf(r.parent.lastChild) + 1);
    e.setSelection(t - 1, i);
  } else e.setSelection(t, i);
  return !0;
}
function Hd(e, t, i) {
  var r, n, a;
  let o = e.at(t);
  if (!o) return t;
  let s = i === "forward" ? 1 : -1;
  if (o.mode === "text") {
    for (; o && !(o.mode !== "text" || !gn.test(o.value)); ) t += s, o = e.at(t);
    return i === "backward" ? t - 1 : t;
  }
  if (o.mode === "latex") {
    if (/[a-zA-Z\*]/.test(o.value)) if (i === "backward") for (; o && o.mode === "latex" && o.value !== "\\" && /[a-zA-Z]/.test(o.value); ) t += s, o = e.at(t);
    else for (; o && o.mode === "latex" && /[a-zA-Z\*]/.test(o.value); ) t += s, o = e.at(t);
    else if (o.value === "{") {
      if (i === "forward") {
        for (; o && o.mode === "latex" && o.value !== "}"; ) t += s, o = e.at(t);
        return t;
      }
      return t - 1;
    } else if (o.value === "}") {
      if (i === "backward") {
        for (; o && o.mode === "latex" && o.value !== "{"; ) t += s, o = e.at(t);
        return t - 1;
      }
      return t;
    }
    return t - 1;
  }
  if (o.mode === "math") {
    if (o.isDigit()) {
      for (; (r = e.at(t + s)) != null && r.isDigit(); ) t += s;
      return i === "backward" ? t - 1 : t;
    }
    if (o.style.variant || o.style.variantStyle) {
      let l = (n = e.at(t)) == null ? void 0 : n.style;
      for (; l && l.variant === o.style.variant && l.variantStyle === o.style.variantStyle; ) l = (a = e.at(t + s)) == null ? void 0 : a.style, t += s;
      return i === "backward" ? t - 1 : t;
    }
    return t;
  }
  return t;
}
Ce({ selectGroup: (e) => {
  let t = bl(e);
  return t || e.announce("plonk"), t;
}, selectAll: (e) => e.setSelection(0, e.lastOffset), extendSelectionForward: (e) => mt(e, "forward", { extend: !0 }), extendSelectionBackward: (e) => mt(e, "backward", { extend: !0 }), extendToNextWord: (e) => sr(e, "forward", { extend: !0 }), extendToPreviousWord: (e) => sr(e, "backward", { extend: !0 }), extendSelectionUpward: (e) => mt(e, "upward", { extend: !0 }), extendSelectionDownward: (e) => mt(e, "downward", { extend: !0 }), extendToNextBoundary: (e) => sr(e, "forward", { extend: !0 }), extendToPreviousBoundary: (e) => sr(e, "backward", { extend: !0 }), extendToGroupStart: (e) => {
  let t = e.setSelection(e.anchor, e.offsetOf(e.at(e.position).firstSibling));
  return t || e.announce("plonk"), t;
}, extendToGroupEnd: (e) => {
  let t = e.setSelection(e.anchor, e.offsetOf(e.at(e.position).lastSibling));
  return t || e.announce("plonk"), t;
}, extendToMathFieldStart: (e) => {
  let t = e.setSelection(e.anchor, 0);
  return t || e.announce("plonk"), t;
}, extendToMathFieldEnd: (e) => {
  let t = e.setSelection(e.anchor, e.lastOffset);
  return t || e.announce("plonk"), t;
} }, { target: "model", changeSelection: !0 });
var mi = null, Wr = 0, go = class Ne {
  static start(t, i, r, n) {
    var a;
    Ne.element = t, (a = Ne.controller) == null || a.abort(), Ne.controller = new AbortController();
    let o = { signal: Ne.controller.signal };
    "PointerEvent" in window ? (t.addEventListener("pointermove", r, o), t.addEventListener("pointerup", n, o), t.addEventListener("pointercancel", n, o), vl(i) && (Ne.pointerId = i.pointerId, t.setPointerCapture(i.pointerId))) : (window.addEventListener("mousemove", r, o), window.addEventListener("blur", n, o), window.addEventListener("mouseup", n, o));
  }
  static stop() {
    var t;
    (t = Ne.controller) == null || t.abort(), Ne.controller = void 0, typeof Ne.pointerId == "number" && (Ne.element.releasePointerCapture(Ne.pointerId), Ne.pointerId = void 0);
  }
};
function vl(e) {
  return e !== null && globalThis.PointerEvent !== void 0 && e instanceof PointerEvent;
}
function Wd(e, t) {
  var i;
  if (t.buttons > 1) return;
  e.atomBoundsCache = /* @__PURE__ */ new Map();
  let r = e, n, a = !1, o = !1, s = "none", l = !1, u = !1, c = t.clientX, d = t.clientY, h = Date.now(), p = r.field, m = setInterval(() => {
    l ? p.scroll({ top: 0, left: p.scrollLeft - 16 }) : u && p.scroll({ top: 0, left: p.scrollLeft + 16 });
  }, 32);
  function y() {
    go.stop(), a = !1, clearInterval(m), e.element.classList.remove("tracking"), t && t.preventDefault();
  }
  function w(k) {
    if (!r.hasFocus()) {
      y();
      return;
    }
    let A = k.clientX, _ = k.clientY, T = vl(k) && k.pointerType === "touch" ? 20 : 5;
    if (Date.now() < h + 500 && Math.abs(c - A) < T && Math.abs(d - _) < T) {
      k.preventDefault(), k.stopPropagation();
      return;
    }
    let K = p.getBoundingClientRect();
    u = A > K.right, l = A < K.left;
    let z = n;
    vl(k) && (k.isPrimary || (z = dn(r, k.clientX, k.clientY, { bias: 0 })));
    let O = dn(r, A, _, { bias: A <= c ? A === c ? 0 : -1 : 1 });
    z >= 0 && O >= 0 && (r.model.extendSelectionTo(z, O), ee(e)), o && bl(r.model);
  }
  mi && Math.abs(mi.x - c) < 5 && Math.abs(mi.y - d) < 5 && Date.now() < mi.time + 500 ? (Wr += 1, mi.time = h) : (mi = { x: c, y: d, time: h }, Wr = 1);
  let g = p.getBoundingClientRect();
  if (c >= g.left && c <= g.right && d >= g.top && d <= g.bottom) {
    if (e.flushInlineShortcutBuffer(), e.adoptStyle = "left", n = dn(e, c, d, { bias: 0 }), n >= 0) {
      if (e.element.classList.add("tracking"), t.shiftKey) {
        let k = e.model.selectionIsCollapsed;
        e.model.extendSelectionTo(e.model.anchor, n), $d(e.model) || k ? s = "all" : s = "selection";
      } else e.model.at(n).type === "placeholder" ? (e.model.setSelection(n - 1, n), s = "selection") : ((i = e.model.at(n).rightSibling) == null ? void 0 : i.type) === "placeholder" ? (e.model.setSelection(n, n + 1), s = "selection") : (e.model.position = n, $d(e.model) ? s = "all" : s = "selection");
      e.defaultStyle = {}, t.detail === 3 || Wr > 2 ? (y(), (t.detail === 3 || Wr === 3) && (e.model.selection = { ranges: [[0, e.model.lastOffset]] }, s = "all")) : a || (a = !0, go.start(p, t, w, y), (t.detail === 2 || Wr === 2) && (o = !0, bl(e.model), s = "all"));
    }
    e.hasFocus() || (s = "none", e.focus({ preventScroll: !0 }));
  } else mi = null;
  e.stopCoalescingUndo(), s !== "none" && (e.model.selectionIsCollapsed && (s = "all"), ee(e)), t.preventDefault();
}
function w2(e, t, i) {
  if (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom) return 0;
  let r = e - (i.left + i.right) / 2, n = t - (i.top + i.bottom) / 2;
  return r * r + n * n;
}
function Hm(e, t, i, r, n) {
  if (!i.id) return [1 / 0, null];
  if (t.has(i.id)) return t.get(i.id);
  let a = Bn(e, i);
  if (!a) return [1 / 0, null];
  let o = [1 / 0, null];
  if (i.hasChildren && !i.captureSelection && r >= a.left && r <= a.right) for (let s of i.children) {
    let l = Hm(e, t, s, r, n);
    l[0] <= o[0] && (o = l);
  }
  return o[1] || (o = [w2(r, n, a), i]), t.set(i.id, o), o;
}
function k2(e, t, i) {
  let [, r] = Hm(e, /* @__PURE__ */ new Map(), e.model.root, t, i);
  return r;
}
function dn(e, t, i, r) {
  var n;
  let a = e.field.querySelector(".ML__latex").getBoundingClientRect();
  if (!a) return 0;
  if (t > a.right || i > a.bottom + 8) return e.model.lastOffset;
  if (t < a.left || i < a.top - 8) return 0;
  r = r ?? {}, r.bias = (n = r.bias) != null ? n : 0;
  let o = k2(e, t, i), s = [], l = o;
  for (; l; ) s.unshift(l), l = l.parent;
  for (let c of s) if (c.captureSelection) {
    o = c;
    break;
  }
  let u = e.model.offsetOf(o);
  if (u < 0) return -1;
  if (o.leftSibling) if (r.bias === 0 && o.type !== "placeholder") {
    let c = Bn(e, o);
    c && t < (c.left + c.right) / 2 && (u = e.model.offsetOf(o.leftSibling));
  } else r.bias < 0 && (u = e.model.offsetOf(o.leftSibling));
  return u;
}
var _2 = class extends G {
  constructor() {
    super("math");
  }
  onPaste(e, t) {
    if (!t || !e.model.contentWillChange({ data: typeof t == "string" ? t : null, dataTransfer: typeof t == "string" ? null : t, inputType: "insertFromPaste" })) return !1;
    let i = "", r = "auto", n = typeof t != "string" ? t.getData("application/json+mathlive") : "";
    if (n) try {
      let a = JSON.parse(n);
      if (a && Array.isArray(a)) {
        e.snapshot();
        let o = Xt(a), { model: s } = e;
        s.selectionIsCollapsed || s.deleteAtoms(ge(s.selection));
        let l = s.at(s.position);
        if (l.parent instanceof H) {
          l.parentBranch;
          let u = [], c = [];
          o[0].type === "first" && o.shift(), o[o.length - 1].type === "first" && o.pop();
          for (let m of o) m.type === "first" && c.length > 0 ? (u.push(c), c = [m]) : c.push(m);
          c.length > 0 && u.push(c);
          let d = Number(l.parentBranch[0]), h = Number(l.parentBranch[1]), p = l.parent.maxColumns;
          for (; l.parent.colCount - h < u.length && l.parent.colCount < p; ) l.parent.addColumn();
          l.parent.addChildrenAfter(u[0], l);
          for (let m = 1; m < u.length; m++) h++, h >= p && (h = 0, l.parent.addRowAfter(d), d++), l.parent.setCell(d, h, u[m]);
        } else l.parent.addChildrenAfter(o.filter((u) => u.type !== "first"), l);
        return s.position = s.offsetOf(o[o.length - 1]), s.contentDidChange({ inputType: "insertFromPaste" }), ee(e), !0;
      }
    } catch {
    }
    if (n = typeof t != "string" ? t.getData("application/json") : "", n && globalThis.MathfieldElement.computeEngine) try {
      let a = JSON.parse(n);
      if (typeof a == "object" && "latex" in a && a.latex && (i = a.latex), !i) {
        let o = globalThis.MathfieldElement.computeEngine.box(a);
        o && !o.has("Error") && (i = o.latex);
      }
      i || (r = "latex");
    } catch {
    }
    if (!i && typeof t != "string" && (i = t.getData("application/x-latex"), i && (r = "latex")), i || (i = typeof t == "string" ? t : t.getData("text/plain")), i) {
      let a;
      return [a, i] = eu(i), r === "auto" && a && (r = "latex"), e.stopCoalescingUndo(), e.stopRecording(), this.insert(e.model, i, { format: r }) && (e.startRecording(), e.snapshot("paste"), ee(e)), e.startRecording(), !0;
    }
    return !1;
  }
  insert(e, t, i) {
    var r, n;
    let a = typeof t == "string" ? t : (n = (r = globalThis.MathfieldElement.computeEngine) == null ? void 0 : r.box(t).latex) != null ? n : "";
    if (!i.silenceNotifications && !e.contentWillChange({ data: a, inputType: "insertText" })) return !1;
    i.insertionMode || (i.insertionMode = "replaceSelection"), i.selectionMode || (i.selectionMode = "placeholder"), i.format || (i.format = "auto");
    let { silenceNotifications: o } = e;
    i.silenceNotifications && (e.silenceNotifications = !0);
    let s = e.silenceNotifications;
    e.silenceNotifications = !0;
    let l = { "?": "\\placeholder{}", "@": "\\placeholder{}" };
    l[0] = i.insertionMode === "replaceAll" ? "" : e.getValue(e.selection, "latex-unstyled"), i.insertionMode === "replaceSelection" && !e.selectionIsCollapsed ? e.deleteAtoms(ge(e.selection)) : i.insertionMode === "replaceAll" ? e.deleteAtoms() : i.insertionMode === "insertBefore" ? e.collapseSelection("backward") : i.insertionMode === "insertAfter" && e.collapseSelection("forward"), !e.at(e.position).isLastSibling && e.at(e.position + 1).type === "placeholder" ? e.deleteAtoms([e.position, e.position + 1]) : e.at(e.position).type === "placeholder" && e.deleteAtoms([e.position - 1, e.position]);
    let u = -1;
    l[0] ? l["@"] = l[0] : typeof t == "string" && /(^|[^\\])#@/.test(t) && (u = S2(e), u >= 0 && (l["@"] = e.getValue(u, e.position, "latex"))), l[0] || (l[0] = l["?"]);
    let c = !1, d = (A) => (c = !0, l[A]), [h, p] = Ud(e, t, d, i);
    if (!p) return !1;
    let m = p.length === 1 && p[0].type === "genfrac";
    m && u >= 0 && typeof e.mathfield.options.isImplicitFunction == "function" && e.mathfield.options.isImplicitFunction(e.at(e.position).command) ? (l["@"] = l["?"], c = !1, [h, p] = Ud(e, t, d, i)) : u >= 0 && e.deleteAtoms([u, e.position]);
    let { parent: y } = e.at(e.position), w = y.hasEmptyBranch("body");
    if (m && h !== "latex" && e.mathfield.options.removeExtraneousParentheses && y instanceof Q && y.leftDelim === "(" && w) {
      let A = y.parent, _ = y.parentBranch;
      A.removeChild(y), A.setChildren(p, _);
    }
    let g = e.at(e.position);
    g.parent.addChildrenAfter(p, g), h === "latex" && typeof t == "string" && (y == null ? void 0 : y.type) === "root" && w && !c && (y.verbatimLatex = t), e.silenceNotifications = s;
    let k = p[p.length - 1];
    if (i.selectionMode === "placeholder") {
      let A = p.flatMap((_) => [_, ..._.children]).find((_) => _.type === "placeholder");
      if (A) {
        let _ = e.offsetOf(A);
        e.setSelection(_ - 1, _), e.announce("move");
      } else k && (e.position = e.offsetOf(k));
    } else i.selectionMode === "before" || (i.selectionMode === "after" ? k && (e.position = e.offsetOf(k)) : i.selectionMode === "item" && e.setSelection(e.anchor, e.offsetOf(k)));
    return e.contentDidChange({ data: a, inputType: "insertText" }), e.silenceNotifications = o, !0;
  }
};
function Ud(e, t, i, r) {
  var n;
  let a, o = [];
  if (typeof t != "string" || r.format === "math-json") {
    let s = globalThis.MathfieldElement.computeEngine;
    if (!s) return ["math-json", []];
    [a, t] = ["latex", s.box(t).latex], o = Te(t, { context: e.mathfield.context });
  } else typeof t == "string" && r.format === "ascii-math" ? ([a, t] = Ad(t, { format: "ascii-math", inlineShortcuts: e.mathfield.options.inlineShortcuts }), o = Te(t, { context: e.mathfield.context }), a !== "latex" && e.mathfield.options.removeExtraneousParentheses && yo(o)) : (r.format === "auto" || (n = r.format) != null && n.startsWith("latex")) && (r.format === "auto" && ([a, t] = Ad(t, { format: "auto", inlineShortcuts: e.mathfield.options.inlineShortcuts })), r.format === "latex" && ([, t] = eu(t)), o = Te(t, { context: e.mathfield.context, args: i }), r.format !== "latex" && e.mathfield.options.removeExtraneousParentheses && yo(o));
  return Ht(o, r.style), [a ?? "latex", o];
}
function M2(e) {
  if (!e || (e[0].type, e.length > 1)) return null;
  let t = e[0];
  return t instanceof Q && t.leftDelim === "(" && t.rightDelim === ")" ? t.removeBranch("body") : null;
}
function yo(e) {
  if (e) {
    for (let t = 0; e[t]; t++) {
      let i = e[t];
      if (i instanceof Q && i.leftDelim === "(") {
        let r = 0, n = 0, a = 0;
        for (let o = 0; i.body[o]; o++) i.body[o].type === "genfrac" && (r++, n = o), a++;
        a === 0 && r === 1 && (e[t] = i.body[n]);
      }
    }
    for (let t of e) {
      for (let i of t.branches) if (!t.hasEmptyBranch(i)) {
        yo(t.branch(i));
        let r = M2(t.branch(i));
        r && t.setChildren(r, i);
      }
      if (t instanceof H) for (let i of t.cells) yo(i);
    }
  }
}
function S2(e) {
  let t = e.at(e.position);
  if (t.mode === "text") {
    for (; !t.isFirstSibling && t.mode === "text"; ) t = t.leftSibling;
    return e.offsetOf(t);
  }
  let i = t, r = !1;
  if (t.type === "mclose") {
    let n = oo[t.value];
    for (; !t.isFirstSibling && !(t.type === "mopen" && t.value === n); ) t = t.leftSibling;
    t.isFirstSibling || (t = t.leftSibling), r = !0;
  } else t.type === "leftright" && (t = t.leftSibling, r = !0);
  if (r) for (; !t.isFirstSibling && (t.isFunction || Jd(t)); ) t = t.leftSibling;
  else {
    let n = [];
    for (; !t.isFirstSibling && (Jd(t) || n.length > 0); ) t.type === "mclose" && n.unshift(t.value), t.type === "mopen" && n.length > 0 && t.value === oo[n[0]] && n.shift(), t = t.leftSibling;
  }
  return i === t ? -1 : e.offsetOf(t);
}
function Jd(e) {
  return e.isDigit() ? !0 : e.type && /^(mord|surd|subsup|leftright|mop|mclose)$/.test(e.type) ? !e.isExtensibleSymbol : !1;
}
new _2();
var C2 = class extends G {
  constructor() {
    super("text");
  }
  onPaste(e, t) {
    if (!t) return !1;
    let i = typeof t == "string" ? t : t.getData("text/plain");
    return i && e.model.contentWillChange({ inputType: "insertFromPaste", data: i }) ? (e.stopCoalescingUndo(), e.stopRecording(), this.insert(e.model, i) && (e.model.contentDidChange({ inputType: "insertFromPaste" }), e.startRecording(), e.snapshot("paste"), ee(e)), e.startRecording(), !0) : !1;
  }
  insert(e, t, i = {}) {
    if (!e.contentWillChange({ data: t, inputType: "insertText" })) return !1;
    i.insertionMode || (i.insertionMode = "replaceSelection"), i.selectionMode || (i.selectionMode = "placeholder"), i.format || (i.format = "auto");
    let { silenceNotifications: r } = e;
    i.silenceNotifications && (e.silenceNotifications = !0);
    let n = e.silenceNotifications;
    e.silenceNotifications = !0, i.insertionMode === "replaceSelection" && !e.selectionIsCollapsed ? e.deleteAtoms(ge(e.selection)) : i.insertionMode === "replaceAll" ? (e.root.setChildren([], "body"), e.position = 0) : i.insertionMode === "insertBefore" ? e.collapseSelection("backward") : i.insertionMode === "insertAfter" && e.collapseSelection("forward");
    let a = L2(t, e.mathfield.context);
    if (Ht(a, i.style), !a) return !1;
    let o = e.at(e.position), s = o.parent.addChildrenAfter(a, o);
    return e.silenceNotifications = n, i.selectionMode === "before" || (i.selectionMode === "item" ? e.setSelection(e.anchor, e.offsetOf(s)) : s && (e.position = e.offsetOf(s))), e.contentDidChange({ data: t, inputType: "insertText" }), e.silenceNotifications = r, !0;
  }
};
function L2(e, t) {
  return e = e.replace(/\\/g, "\\textbackslash "), e = e.replace(/#/g, "\\#"), e = e.replace(/\$/g, "\\$"), e = e.replace(/%/g, "\\%"), e = e.replace(/&/g, "\\&"), e = e.replace(/_/g, "\\_"), e = e.replace(/{/g, "\\textbraceleft "), e = e.replace(/}/g, "\\textbraceright "), e = e.replace(/lbrace/g, "\\textbraceleft "), e = e.replace(/rbrace/g, "\\textbraceright "), e = e.replace(/\^/g, "\\textasciicircum "), e = e.replace(/~/g, "\\textasciitilde "), e = e.replace(/£/g, "\\textsterling "), Te(e, { context: t, parseMode: "text" });
}
new C2();
function ut(e) {
  return { value: e.model.getValue(), selectionIsCollapsed: e.model.selectionIsCollapsed, canUndo: e.canUndo(), canRedo: e.canRedo(), style: e.selectionStyle, mode: e.model.mode };
}
var J = 4, _e = 20, re = 2 * (_e + J), Fa = (e, t) => `
  <line x1="${e + _e}" y1="${t + _e}" 
    x2="${e > t ? e + _e : 7 * _e + 10 * J}" 
    y2="${e < t ? t + _e : 7 * _e + 10 * J}"/>
  <svg id="plus" viewBox="0 0 40 40" x="${e}" y="${t}" width="40" height="40">
    <circle class="cls-2" cx="20" cy="20" r="20"/>
    <path class="font" d="m33.33,20c0,1.84-1.49,3.34-3.33,3.34h-6.67v6.66c0,1.84-1.49,3.34-3.33,3.34s-3.34-1.5-3.34-3.34v-6.66h-6.66c-1.84,0-3.34-1.5-3.34-3.34s1.5-3.33,3.34-3.33h6.66v-6.67c0-1.84,1.5-3.33,3.34-3.33s3.33,1.49,3.33,3.33v6.67h6.67c1.84,0,3.33,1.49,3.33,3.33Z"/>
  </svg>`, Xd = (e, t) => `
  <line x1="${e + _e}" y1="${t + _e}" 
    x2="${e > t ? e + _e : 7 * _e + 10 * J}" 
    y2="${e < t ? t + _e : 7 * _e + 10 * J}"/>
  <svg id="minus" viewBox="0 0 40 40" x="${e}" y="${t}" width="40" height="40">
    <circle class="cls-2" cx="20" cy="20" r="20"/>
    <path class="font" d="m33.33,20c0,1.84-1.49,3.33-3.33,3.33H10c-1.84,0-3.34-1.49-3.34-3.33s1.5-3.34,3.34-3.34h20c1.84,0,3.33,1.5,3.33,3.34Z"/>
  </svg>`, za = (e, t, i) => `
  <svg id="arrow" viewBox="0 0 40 40" x="${e}" y="${t}" width="40" height="40">
    <circle class="cls-2" cx="20" cy="20" r="20"/>
    <g transform="rotate(${i})" transform-origin="20 20">
      <path class="font" d="m17.7,7.23h4.6c.52,0,.94.42.94.94v13.82c0,.52.42.94.94.94h3.39c.83,0,1.25,1.01.66,1.6l-7.56,7.56c-.37.37-.96.37-1.32,0l-7.56-7.56c-.59-.59-.17-1.6.66-1.6h3.39c.52,0,.94-.42.94-.94v-13.82c0-.52.42-.94.94-.94Z"/>
    </g>  
  </svg>`, B2 = `
<svg class="MLEP__array-buttons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox=
"-2 -2 ${8 * _e + 10 * J + 5} ${8 * _e + 10 * J + 5}">
  <rect 
      class="MLEP__array-insert-background rows"
      x="0" 
      y="${re + J}" 
      height="${3 * re}" 
      width="${re}" 
      rx="${re / 2}"/>
      <rect 
      class="MLEP__array-insert-background columns"
      x="${re + J}" 
      y="0" 
      height="${re}" 
      width="${3 * re}" 
      rx="${re / 2}"/>
  <g data-command='"moveDown"'>
  ${za(2 * (J + re), 2 * J + 3 * re, 0)}
  </g>
  <g data-command='"moveUp"'>
  ${za(2 * (J + re), 2 * J + re, 180)}
  </g>
  <g data-command='"moveToNextWord"'>
  ${za(2 * J + 3 * re, 2 * (J + re), -90)}
  </g>
  <g data-command='"moveToPreviousWord"'>
  ${za(2 * J + re, 2 * (J + re), 90)}
  </g>
  <g>

  <g data-command='"addColumnBefore"'>
  ${Fa(2 * J + re, J)}
  </g>
  <g data-command='"removeColumn"'>
  ${Xd(2 * J + 2 * re, J)}
  </g>
  <g data-command='"addColumnAfter"'>
  ${Fa(2 * J + 3 * re, J)}
  </g>
  <g data-command='"addRowBefore"'>
  ${Fa(J, 2 * J + re)}
  </g>
  <g data-command='"removeRow"'>
  ${Xd(J, 2 * J + 2 * re)}
  </g>
  <g data-command='"addRowAfter"'>
    ${Fa(J, 2 * J + 3 * re)}
  </g>
</svg>`, A2 = (e) => `
<svg id="matrix" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" 
  data-command='["setEnvironment","matrix"]'>
  <rect class="cls-1" width="28" height="24"/>
  <circle cx="10" cy="8" r="1"/>
  <circle cx="14" cy="12" r="1"/>
  <circle cx="18" cy="16" r="1"/></svg>`, E2 = (e) => `
<svg id="pmatrix" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" 
data-command='["setEnvironment","pmatrix"]'>
  <rect class="cls-1" width="28" height="24"/>
  <path class="cls-2" d="m6,4c-3.96,4.6-3.96,11.4,0,16"/>
  <path class="cls-2" d="m22,4c3.96,4.6,3.96,11.4,0,16"/>
  <circle cx="10" cy="8" r="1"/>
  <circle cx="14" cy="12" r="1"/>
  <circle cx="18" cy="16" r="1"/></svg>`, Wm = (e) => `
<svg id="Bmatrix" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" 
  data-command='["setEnvironment","Bmatrix"]'>
  <rect class="cls-1" width="28" height="24"/>
  <path class="cls-2" d="m6,4c-1.1,0-2,.9-2,2v3c0,1.66-.9,3-2,3,1.1,0,2,1.34,2,3v3c0,1.1.9,2,2,2"/>
  <path class="cls-2" d="m22,4c1.1,0,2,.9,2,2v3c0,1.66.9,3,2,3-1.1,0-2,1.34-2,3v3c0,1.1-.9,2-2,2"/>
  <circle cx="10" cy="8" r="1"/>
  <circle cx="14" cy="12" r="1"/>
  <circle cx="18" cy="16" r="1"/>
</svg>`, D2 = (e) => `
<svg id="bmatrix" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" 
  data-command='["setEnvironment","bmatrix"]'>
  <rect class="cls-1" width="28" height="24"/>
  <path class="cls-2" d="m6,4h-3v16h3"/>
  <path class="cls-2" d="m22,4h3v16h-3"/>
  <circle cx="10" cy="8" r="1"/>
  <circle cx="14" cy="12" r="1"/>
  <circle cx="18" cy="16" r="1"/>
</svg>`, T2 = (e) => `
<svg id="vmatrix" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" 
  data-command='["setEnvironment","vmatrix"]'>
  <rect class="cls-1" width="28" height="24"/>
  <circle cx="10" cy="8" r="1"/>
  <circle cx="14" cy="12" r="1"/>
  <circle cx="18" cy="16" r="1"/>
  <line class="cls-2" x1="4" y1="4" x2="4" y2="20"/>
  <line class="cls-2" x1="24" y1="4" x2="24" y2="20"/>
</svg>`, F2 = (e) => `
<svg id="Vmatrix" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="-3.5 -3 35 30" 
  data-command='["setEnvironment","Vmatrix"]'>
  <rect class="cls-1" width="28" height="24"/>
  <circle cx="10" cy="8" r="1"/>
  <circle cx="14" cy="12" r="1"/>
  <circle cx="18" cy="16" r="1"/>
  <line class="cls-2" x1="6" y1="4" x2="6" y2="20"/>
  <line class="cls-2" x1="22" y1="4" x2="22" y2="20"/>
  <line class="cls-2" x1="2" y1="4" x2="2" y2="20"/>
  <line class="cls-2" x1="26" y1="4" x2="26" y2="20"/>
</svg>`, z2 = (e) => `
<svg id="cases" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" 
  data-command='["setEnvironment","cases"]'>
  <rect class="cls-1" width="28" height="24"/>
  <path class="cls-2" d="m10,4c-1.1,0-2,.9-2,2v3c0,1.66-.9,3-2,3,1.1,0,2,1.34,2,3v3c0,1.1.9,2,2,2"/>
  <circle cx="13" cy="8" r="1"/>
  <circle cx="13" cy="16" r="1"/>
  <circle cx="21" cy="8" r="1"/>
  <circle cx="21" cy="16" r="1"/>
</svg>`, K2 = (e) => `
<svg id="rcases" class="${e}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" 
  data-command='["setEnvironment","rcases"]'>
  <rect class="cls-1" width="28" height="24"/>
  <path class="cls-2" d="m18,20c1.1,0,2-.9,2-2v-3c0-1.66.9-3,2-3-1.1,0-2-1.34-2-3v-3c0-1.1-.9-2-2-2"/>
  <circle cx="15" cy="8" r="1"/>
  <circle cx="15" cy="16" r="1"/>
  <circle cx="7" cy="8" r="1"/>
  <circle cx="7" cy="16" r="1"/>
</svg>`, Fs = { matrix: A2, pmatrix: E2, bmatrix: D2, Bmatrix: Wm, vmatrix: T2, Vmatrix: F2 }, zs = { cases: z2, rcases: K2, Bmatrix: Wm };
function $2(e) {
  var t, i;
  let r = (t = e.model.parentEnvironment) == null ? void 0 : t.array;
  if (!r) return;
  let n = 0;
  r.forEach((p) => {
    (!n || p.length > n) && (n = p.length);
  });
  let a = document.getElementById("mathlive-environment-popover");
  a || (a = Po("mathlive-environment-popover"), Zt("environment-popover"), Zt("core"), a.setAttribute("aria-hidden", "true"));
  let o, s = a.querySelector(".MLEP__environment-controls");
  s ? o = s : (o = document.createElement("div"), a.innerHTML = "", a.appendChild(o)), o.className = "MLEP__environment-controls", o.style.display = "flex", o.style.width = "100%", o.style.height = "100%", o.style.boxSizing = "border-box", o.innerHTML = B2;
  let l = [], u = "", c = e.model.parentEnvironment.environmentName;
  if (Np(c)) {
    let p = N2(c);
    u = Fs[p]("active");
    let m = Fs, { [p]: y } = m, w = eo(m, [Eu(p)]);
    l = Object.values(w).map((g) => g("inactive"));
  } else if (x4(c)) {
    let p = O2(c);
    u = zs[p]("active");
    let m = zs, { [p]: y } = m, w = eo(m, [Eu(p)]);
    l = Object.values(w).map((g) => g("inactive"));
  } else w4(c) && (u = Fs.matrix("active"), l = Object.values(zs).map((p) => p("inactive")));
  let d = document.createElement("div");
  d.className = "MLEP__environment-delimiter-controls", d.style.display = "flex", d.style.flexDirection = "column", d.innerHTML = `
  <div class='MLEP__array-delimiter-options'>
  ${u}
  ${l.join("")}
  </div>`, u && o.appendChild(d), o.querySelectorAll("[data-command]").forEach((p) => {
    let m = p.dataset.command, y = m;
    try {
      y = JSON.parse(m);
    } catch {
    }
    p.addEventListener("mousedown", (w) => w.preventDefault()), y && p.addEventListener("click", () => e.executeCommand(y));
  });
  let h = (i = e.field) == null ? void 0 : i.getBoundingClientRect();
  h && (a.style.top = `${window.scrollY + (h.top - a.clientHeight - 15)}px`, a.style.left = `${h.left + 20}px`, a.classList.add("is-visible"));
}
function xl() {
  let e = document.getElementById("mathlive-environment-popover");
  e == null || e.classList.remove("is-visible");
}
function P2() {
  document.getElementById("mathlive-environment-popover") && (ou("mathlive-environment-popover"), Yt("environment-popover"), Yt("core"));
}
function Ka(e) {
  if (!e.hasFocus()) return;
  let t = !1;
  if (e.model.mode === "math") {
    let i = e.model.parentEnvironment;
    if (i != null && i.array && v4(i.environmentName)) {
      let r = e.options.environmentPopoverPolicy;
      t = r === "auto" || r === "on";
    }
  }
  t ? $2(e) : xl();
}
function N2(e) {
  return e.replace("*", "");
}
function O2(e) {
  return e === "dcases" ? "cases" : e;
}
function Um(e) {
  let t = getComputedStyle(e).direction;
  return t === "ltr" || t === "rtl" ? t : "ltr";
}
function Gd(e, t, i) {
  return t === "left" || t === "leading" && i === "ltr" || t === "trailing" && i === "rtl" ? e.left : e.right;
}
function Ks(e, t, i, r) {
  return i === "middle" ? e - t / 2 : i === "start" && r === "rtl" || i === "end" && r === "ltr" || i === "top" || i === "right" ? Math.max(0, e - t) : e;
}
function I2(e, t, i, r) {
  return i === "middle" ? e - t / 2 : i === "start" && r === "ltr" || i === "end" && r === "rtl" || i === "top" || i === "right" ? e : e - t;
}
function R2(e, t) {
  var i, r, n;
  let a = (i = Um(e)) != null ? i : "ltr";
  e.style.position = "fixed", e.style.left = "", e.style.top = "", e.style.right = "", e.style.bottom = "", e.style.height = "", e.style.width = "";
  let o = e.getBoundingClientRect(), s = Number.isFinite(t.maxHeight) ? Math.min(t.maxHeight, window.innerHeight) : window.innerHeight, l = Math.min(s, (r = t.height) != null ? r : o.height), u = Ks(t.location.y, l, t.verticalPos, a);
  u + l > window.innerHeight - 8 && (t.alternateLocation ? (u = Ks(t.alternateLocation.y, l, t.verticalPos, a), u + l > window.innerHeight - 8 && (u = void 0)) : u = void 0), Number.isFinite(u) || (u = Math.max(8, window.innerHeight - 8 - l), 8 + l > window.innerHeight - 8 && (e.style.bottom = "8px")), l = Math.min(u + l, window.innerHeight - 8) - u;
  let c = Number.isFinite(t.maxWidth) ? Math.min(t.maxWidth, window.innerWidth) : window.innerWidth, d = Math.min(c, (n = t.width) != null ? n : o.width), h = Ks(t.location.x, d, t.horizontalPos, a);
  h + d > window.innerWidth - 8 && (t.alternateLocation ? (h = I2(t.alternateLocation.x, d, t.verticalPos, a), h + d > window.innerWidth - 8 && (h = void 0)) : h = void 0), Number.isFinite(h) || (h = Math.max(8, window.innerWidth - 8 - d), 8 + d > window.innerWidth - 8 && (e.style.right = "8px")), d = Math.min(h + d, window.innerWidth - 8) - h, a === "rtl" ? e.style.right = `${Math.ceil(window.innerWidth - h - d).toString()}px` : e.style.left = `${Math.ceil(h).toString()}px`, e.style.top = `${Math.ceil(u).toString()}px`, l !== o.height && (e.style.height = `${Math.ceil(l).toString()}px`), d !== o.width && (e.style.width = `${Math.ceil(d).toString()}px`);
}
function q2(e, t) {
  return Math.hypot(t.x - e.x, t.y - e.y);
}
function ur(e) {
  return "submenu" in e;
}
function ct(e) {
  return "type" in e && e.type === "command" || "onMenuSelect" in e || "id" in e;
}
function wl(e) {
  return "type" in e && e.type === "divider";
}
function $s(e) {
  return "type" in e && e.type === "heading";
}
var Zd = {};
function Ps(e) {
  let t = Zd[e];
  if (!t) {
    let i;
    switch (e) {
      case "checkmark":
        i = `<span aria-hidden="true" class="ui-checkmark"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
      </span>`;
        break;
      case "trailing-chevron":
        i = '<span aria-hidden="true" class="ui-trailing-chevron"><svg focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></span>';
        break;
      case "mixedmark":
        i = '<span aria-hidden="true" class="ui-mixedmark"><svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512"><path fill="currentColor" d="M0 256c0-13.3 10.7-24 24-24H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24z"/></svg></span>';
    }
    if (i) {
      let r = document.createElement("template");
      r.innerHTML = i, Zd[e] = r, t = r;
    }
  }
  if (t) {
    if ("content" in t) return t.content.cloneNode(!0);
    let i = document.createElement("svg");
    return i.innerHTML = t.innerHTML, i;
  }
}
var Yd = 80, Jm = class {
  constructor(e, t) {
    this._element = null;
    var i;
    this.parentMenu = t, this._declaration = e, ur(e) ? (this.type = "submenu", this.submenu = new Xm(e.submenu, { parentMenu: t, submenuClass: e.submenuClass, columnCount: e.columnCount })) : this.type = (i = e.type) != null ? i : "command", this.hasCheck = ct(e) && e.checked !== void 0;
  }
  get rootMenu() {
    return this.parentMenu.rootMenu;
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
  dispose() {
    var e, t;
    (e = this._abortController) == null || e.abort(), this._abortController = void 0, (t = this._element) == null || t.remove(), this._element = null, this.submenu && this.submenu.dispose(), this.submenu = void 0;
  }
  get menuItem() {
    return this._declaration;
  }
  get label() {
    var e;
    return (e = this._label) != null ? e : "";
  }
  set label(e) {
    e === void 0 && (e = ""), e !== this._label && (this._label = e, this.dirty = !0);
  }
  get visible() {
    return this._visible;
  }
  set visible(e) {
    e !== this._visible && (this._visible = e, this.dirty = !0);
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e) {
    this._enabled = e, this.element && (e ? this.element.removeAttribute("aria-disabled") : this.element.setAttribute("aria-disabled", "true")), this.dirty = !0;
  }
  get checked() {
    return this._checked;
  }
  set checked(e) {
    this._checked = e, this.dirty = !0;
  }
  get tooltip() {
    return this._tooltip;
  }
  set tooltip(e) {
    e !== this._tooltip && (this._tooltip = e, this.dirty = !0);
  }
  get ariaLabel() {
    return this._ariaLabel;
  }
  set ariaLabel(e) {
    e !== this._ariaLabel && (this._ariaLabel = e, this.dirty = !0);
  }
  get active() {
    var e, t;
    return (t = (e = this.element) == null ? void 0 : e.classList.contains("active")) != null ? t : !1;
  }
  set active(e) {
    this.element && this.element.classList.toggle("active", e);
  }
  updateState(e) {
    var t, i, r;
    let n = this._declaration;
    if (wl(n)) {
      this.enabled = !1, this.checked = !1;
      return;
    }
    $s(n) && (this.enabled = !1, this.checked = !1, this.visible = !0), ct(n) && (this.checked = ct(n) && ((t = Zi(n.checked, e)) != null ? t : !1)), (ct(n) || ur(n)) && (this.enabled = (i = Zi(n.enabled, e)) != null ? i : !0, this.visible = (r = Zi(n.visible, e)) != null ? r : !0, this.visible && this.enabled && this.submenu && (this.submenu.updateState(e), this.submenu.visible || (this.visible = !1))), (ct(n) || $s(n) || ur(n)) && (this.label = Zi(n.label, e), this.tooltip = Zi(n.tooltip, e), this.ariaLabel = Zi(n.ariaLabel, e)), this._element && this.updateElement();
  }
  set dirty(e) {
    e && this.parentMenu && (this.parentMenu.dirty = !0);
  }
  updateElement() {
    if (!this.visible || !this.element) return;
    let e = this.element;
    e.textContent = "", this.enabled ? e.removeAttribute("aria-disabled") : e.setAttribute("aria-disabled", "true"), this.checked === !0 ? (e.setAttribute("aria-checked", "true"), e.append(Ps("checkmark"))) : this.checked === "mixed" ? (e.setAttribute("aria-checked", "mixed"), e.append(Ps("mixedmark"))) : e.removeAttribute("aria-checked"), this.ariaLabel && e.setAttribute("aria-label", this.ariaLabel);
    let t = document.createElement("span");
    if (t.className = this.parentMenu.hasCheck ? "label indent" : "label", this.type === "heading" && t.classList.add("heading"), t.innerHTML = this.label, e.append(t), this._tooltip && e.setAttribute("data-tooltip", this._tooltip), ct(this._declaration) && this._declaration.keyboardShortcut) {
      let i = document.createElement("kbd");
      i.innerHTML = au(this._declaration.keyboardShortcut), e.append(i);
    }
    this.type === "submenu" && e.append(Ps("trailing-chevron"));
  }
  get element() {
    if (this._element) return this._element;
    if (wl(this._declaration)) {
      let i = document.createElement("li");
      return i.setAttribute("part", "menu-divider"), i.setAttribute("role", "divider"), this._element = i, i;
    }
    let e = document.createElement("li");
    this._element = e, (ct(this._declaration) || $s(this._declaration) || ur(this._declaration)) && this._declaration.class && (e.className = this._declaration.class), e.setAttribute("part", "menu-item"), e.setAttribute("tabindex", "-1"), this.hasCheck ? e.setAttribute("role", "menuitemcheckbox") : e.setAttribute("role", "menuitem"), this.type === "submenu" && (e.setAttribute("aria-haspopup", "true"), e.setAttribute("aria-expanded", "false"));
    let t = this.abortController.signal;
    return e.addEventListener("pointerenter", this, { signal: t }), e.addEventListener("pointerleave", this, { signal: t }), e.addEventListener("pointerup", this, { signal: t }), e.addEventListener("click", this, { signal: t }), this._element;
  }
  dispatchSelect() {
    if (!ct(this._declaration)) return;
    let e = new CustomEvent("menu-select", { cancelable: !0, bubbles: !0, detail: { modifiers: this.rootMenu.modifiers, id: this._declaration.id, data: this._declaration.data } });
    this.parentMenu.dispatchEvent(e) && typeof this._declaration.onMenuSelect == "function" && this._declaration.onMenuSelect({ modifiers: this.rootMenu.modifiers, id: this._declaration.id, data: this._declaration.data });
  }
  handleEvent(e) {
    var t;
    if (!(!this.visible || !this.enabled)) {
      if (e.type === "click") {
        this.rootMenu.state === "modal" && this.select(), e.stopPropagation(), e.preventDefault();
        return;
      }
      if (e.type === "pointerenter") {
        let i = e;
        this.rootMenu.cancelDelayedOperation(), this.parentMenu.isSubmenuOpen && (t = this.parentMenu.activeMenuItem) != null && t.movingTowardSubmenu(i) ? this.rootMenu.scheduleOperation(() => {
          this.parentMenu.activeMenuItem = this, this.openSubmenu();
        }) : (this.parentMenu.activeMenuItem = this, this.openSubmenu({ withDelay: !0 }));
        return;
      }
      if (e.type === "pointerleave") {
        this.rootMenu.activeSubmenu === this.parentMenu && (this.parentMenu.activeMenuItem = null);
        return;
      }
      if (e.type === "pointerup") {
        this.rootMenu.state !== "modal" && this.select(), e.stopPropagation(), e.preventDefault();
        return;
      }
    }
  }
  select() {
    if (this.rootMenu.cancelDelayedOperation(), this.type === "submenu") {
      this.openSubmenu();
      return;
    }
    this.active = !1, setTimeout(() => {
      this.active = !0, setTimeout(() => {
        this.rootMenu.hide(), this.dispatchSelect();
      }, Yd);
    }, Yd);
  }
  openSubmenu(e) {
    var t;
    if (this.type !== "submenu" || !this.element) return;
    if ((t = e == null ? void 0 : e.withDelay) != null && t) {
      this.rootMenu.scheduleOperation(() => this.openSubmenu());
      return;
    }
    let i = this.element.getBoundingClientRect(), r = Um(this.element);
    this.submenu.show({ container: this.rootMenu.element.parentNode, location: { x: Gd(i, "trailing", r), y: i.top - 4 }, alternateLocation: { x: Gd(i, "leading", r), y: i.top - 4 } });
  }
  movingTowardSubmenu(e) {
    if (!this.element || this.type !== "submenu") return !1;
    let t = this.rootMenu.lastMoveEvent;
    if (!t) return !1;
    let i = e.timeStamp - t.timeStamp;
    if (i > 500) return !1;
    let r = e.clientX - t.clientX;
    if (j2(r, t.clientY - e.clientY, i) <= 0.2) return !1;
    let n = "right";
    if (this.submenu.element) {
      let a = this.submenu.element.getBoundingClientRect(), o = this.element.getBoundingClientRect();
      a.left < o.left + o.width / 2 && (n = "left");
    }
    return n === "right" ? r > 0 : r < 0;
  }
};
function j2(e, t, i) {
  return Math.hypot(e, t) / i;
}
function Zi(e, t) {
  return e === void 0 || typeof e != "function" ? e : (t != null || (t = { alt: !1, control: !1, shift: !1, meta: !1 }), e(t));
}
var Xm = class tn {
  constructor(t, i) {
    this._element = null, this._activeMenuItem = null, this._dirty = !0;
    var r, n;
    this.parentMenu = (r = i == null ? void 0 : i.parentMenu) != null ? r : null, this._submenuClass = i == null ? void 0 : i.submenuClass, this.columnCount = (n = i == null ? void 0 : i.columnCount) != null ? n : 1, this.isSubmenuOpen = !1, this.menuItems = t;
  }
  get children() {
    return this._menuItems;
  }
  set menuItems(t) {
    let i = this.parentMenu;
    this.dispose(), this.parentMenu = i, t = [...t], this._menuItems = t.map((r) => r.onCreate ? r.onCreate(r, this) : new Jm(r, this)), this.hasCheck = void 0, this.dirty = !0;
  }
  dispose() {
    var t;
    this.hide(), this._element && this._element.remove(), this._abortController && this._abortController.abort(), (t = this._menuItems) == null || t.forEach((i) => i.dispose()), this._menuItems = [], this._activeMenuItem = null, this.parentMenu = null;
  }
  handleEvent(t) {
    if (t.type === "wheel" && this._element) {
      let i = t;
      this._element.scrollBy(0, i.deltaY), t.stopPropagation();
    }
  }
  dispatchEvent(t) {
    return this.rootMenu.dispatchEvent(t);
  }
  get rootMenu() {
    return this.parentMenu.rootMenu;
  }
  updateState(t) {
    var i, r, n;
    this._menuItems.forEach((u) => u.updateState(t));
    let a = this.hasCheck;
    this.hasCheck = this._menuItems.some((u) => u.visible && u.hasCheck), this.hasCheck !== a && this._menuItems.forEach((u) => u.updateState(t));
    let o, s = 0;
    for (let u of this._menuItems) u.type === "heading" ? (o && s === 0 && (o.visible = !1), o = u, s = 0) : u.type === "divider" && o ? (o.visible = s > 0, o = void 0, s = 0) : o && u.visible && (s += 1);
    o && (o.visible = s > 0);
    let l = !0;
    for (let u of this._menuItems) u.type === "divider" ? (u.visible = !l, l = !0) : u.visible && (l = !1);
    (i = this.activeMenuItem) != null && i.visible || (this.activeMenuItem = null), !((r = this.activeMenuItem) != null && r.enabled) && ((n = this.activeMenuItem) == null ? void 0 : n.type) === "submenu" && this._activeMenuItem.submenu.hide(), this._dirty = !1;
  }
  get enabled() {
    return this.updateIfDirty(), this._menuItems.some((t) => t.type !== "divider" && t.visible && t.enabled);
  }
  get visible() {
    return this.updateIfDirty(), this._menuItems.some((t) => t.type !== "divider" && t.visible);
  }
  set dirty(t) {
    this._dirty !== t && t && this.parentMenu && (this._dirty = !0, this.parentMenu.dirty = !0);
  }
  updateIfDirty() {
    this._dirty && this.updateState(this.rootMenu.modifiers);
  }
  updateElement() {
    var t;
    if (this._element) {
      this._element.textContent = "";
      for (let { element: i, visible: r } of this._menuItems) i && r && this._element.append(i);
      (t = this._element.querySelector("li:first-of-type")) == null || t.setAttribute("tabindex", "0");
    }
  }
  get element() {
    if (this._element) return this._element;
    let t = document.createElement("menu");
    t.setAttribute("role", "menu"), t.setAttribute("tabindex", "-1"), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("part", "ui-menu-container"), this._submenuClass && t.classList.add(this._submenuClass), t.classList.add("ui-menu-container"), this._abortController || (this._abortController = new AbortController());
    let i = this._abortController.signal;
    return t.addEventListener("focus", this, { signal: i }), t.addEventListener("wheel", this, { passive: !0, signal: i }), this._element = t, this.updateElement(), t;
  }
  get activeMenuItem() {
    return this._activeMenuItem;
  }
  set activeMenuItem(t) {
    var i, r, n, a;
    if (this.rootMenu.cancelDelayedOperation(), t !== this._activeMenuItem) {
      if (this.activeMenuItem) {
        let o = this.activeMenuItem;
        o.active = !1, (i = o.submenu) == null || i.hide();
      }
      if (!((r = t == null ? void 0 : t.visible) == null || r)) {
        this._activeMenuItem = null;
        return;
      }
      this._activeMenuItem = t, t && (t.active = !0);
    }
    t ? (n = t.element) == null || n.focus({ preventScroll: !0 }) : (a = this._element) == null || a.focus({ preventScroll: !0 });
  }
  get firstMenuItem() {
    this.updateIfDirty();
    let t = 0, i = !1, r = this._menuItems;
    for (; !i && t <= r.length - 1; ) {
      let n = r[t];
      i = n.type !== "divider" && n.visible && n.enabled, t += 1;
    }
    return i ? r[t - 1] : null;
  }
  get lastMenuItem() {
    this.updateIfDirty();
    let t = this._menuItems, i = t.length - 1, r = !1;
    for (; !r && i >= 0; ) {
      let n = t[i];
      r = n.type !== "divider" && n.visible && n.enabled, i -= 1;
    }
    return r ? t[i + 1] : null;
  }
  nextMenuItem(t) {
    if (t === 0) return this._activeMenuItem;
    if (!this._activeMenuItem) return t > 0 ? this.firstMenuItem : this.lastMenuItem;
    if (!this.firstMenuItem || !this.lastMenuItem || !this._activeMenuItem) return null;
    this.updateIfDirty();
    let i = this._menuItems.indexOf(this.firstMenuItem), r = this._menuItems.indexOf(this.lastMenuItem), n = this._menuItems.indexOf(this._activeMenuItem), a = 1;
    for (; n >= i && n <= r; ) {
      n += t > 0 ? 1 : -1;
      let o = this._menuItems[n];
      if (!o) break;
      if (o.visible && o.enabled) {
        if (a === Math.abs(t)) return this._menuItems[n];
        a += 1;
      }
    }
    return t > 0 ? this.lastMenuItem : this.firstMenuItem;
  }
  getMenuItemColumn(t) {
    this.updateIfDirty();
    let i = this._menuItems.filter((r) => r.visible && r.enabled).indexOf(t);
    return i < 0 ? -1 : i % this.columnCount;
  }
  static get collator() {
    return tn._collator || (tn._collator = new Intl.Collator(void 0, { usage: "search", sensitivity: "base" })), tn._collator;
  }
  findMenuItem(t) {
    var i;
    this.updateIfDirty();
    let r = this._menuItems.filter((s) => s.type !== "divider" && s.visible && s.enabled);
    if (r.length === 0) return null;
    let n = Math.max(...r.map((s) => s.label.length)) - t.length;
    if (n < 0) return null;
    let a = null, o = 0;
    for (; o < n && !a; ) a = (i = r.find((s) => tn.collator.compare(t, s.label.substring(o, t.length)) === 0)) != null ? i : null, o++;
    return a;
  }
  show(t) {
    return !this.visible || !t.container ? !1 : (this.updateElement(), t.container.appendChild(this.element), Du() && (this.element.popover = "manual", this.element.showPopover()), t.location && R2(this.element, { location: t.location, alternateLocation: t.alternateLocation, verticalPos: "bottom", horizontalPos: "start" }), this.element.focus({ preventScroll: !0 }), this.parentMenu && (this.parentMenu.openSubmenu = this), !0);
  }
  hide() {
    var t, i, r, n, a;
    this.openSubmenu = null, this.activeMenuItem = null, this.parentMenu && (this.parentMenu.openSubmenu = null), Du() && (t = this._element) != null && t.popover && this.element.hidePopover(), (r = (i = this.parentMenu) == null ? void 0 : i.element) == null || r.focus(), (a = (n = this._element) == null ? void 0 : n.parentNode) == null || a.removeChild(this._element);
  }
  set openSubmenu(t) {
    var i, r, n, a;
    let o = t !== null;
    ((i = this.activeMenuItem) == null ? void 0 : i.type) === "submenu" && ((r = this.activeMenuItem.element) == null || r.setAttribute("aria-expanded", o.toString())), (a = (n = this.activeMenuItem) == null ? void 0 : n.element) == null || a.classList.toggle("is-submenu-open", o), this.isSubmenuOpen = o;
  }
}, Gm = class Zm extends Xm {
  constructor(t, i) {
    var r;
    super(t), this.state = "closed", this.typingBufferResetTimer = 0, this.hysteresisTimer = 0, this._updating = !1, this._host = (r = i == null ? void 0 : i.host) != null ? r : null, this.isDynamic = t.some(Ym), this._modifiers = { shift: !1, control: !1, alt: !1, meta: !1 }, this.typingBuffer = "", this.state = "closed";
  }
  get modifiers() {
    return this._modifiers;
  }
  set modifiers(t) {
    s3(this._modifiers, t) || (this._modifiers = t, this.dirty = !0);
  }
  get activeSubmenu() {
    let t = this;
    for (; t.isSubmenuOpen; ) t = t.activeMenuItem.submenu;
    return t;
  }
  set dirty(t) {
    this._updating || this._dirty !== t && (this._dirty = !0, t && setTimeout(() => {
      this.updateState(this.modifiers), this.updateElement();
    }));
  }
  updateState(t) {
    this._updating = !0, this.modifiers = t ?? this.modifiers, super.updateState(this.modifiers), this._updating = !1;
  }
  handleKeyupEvent(t) {
    this.isDynamic && (this.modifiers = Si(t)), t.stopImmediatePropagation();
  }
  handleKeydownEvent(t) {
    var i, r, n;
    if (t.key === "Tab" || t.key === "Escape") {
      this.hide();
      return;
    }
    this.isDynamic && (this.modifiers = Si(t));
    let a = !0, o = this.activeSubmenu, s = o.activeMenuItem;
    switch (t.key) {
      case " ":
      case "Space":
      case "Return":
      case "Enter":
        s == null || s.select(Si(t));
        break;
      case "ArrowRight":
        if ((s == null ? void 0 : s.type) === "submenu") s.select(Si(t)), this.activeSubmenu.activeMenuItem = this.activeSubmenu.firstMenuItem;
        else if (!s) o.activeMenuItem = o.firstMenuItem;
        else {
          let l = (i = o.getMenuItemColumn(s)) != null ? i : -1;
          if (l >= 0 && l < ((r = o.columnCount) != null ? r : 1) - 1) {
            let u = o.nextMenuItem(1);
            u && (o.activeMenuItem = u);
          }
        }
        break;
      case "ArrowLeft":
        if (o === this.rootMenu) s || (o.activeMenuItem = o.firstMenuItem);
        else if ((s && (n = o.getMenuItemColumn(s)) != null ? n : -1) <= 0 || !s) {
          o.hide();
          let l = o.parentMenu.activeMenuItem;
          if (l) {
            let { element: u } = l;
            u == null || u.focus(), u == null || u.classList.remove("is-submenu-open");
          }
        } else {
          let l = o.nextMenuItem(-1);
          l && (o.activeMenuItem = l);
        }
        break;
      case "ArrowDown":
        o.activeMenuItem = o.nextMenuItem(o.columnCount);
        break;
      case "ArrowUp":
        o.activeMenuItem = o.nextMenuItem(-o.columnCount);
        break;
      case "Home":
      case "PageUp":
        o.activeMenuItem = o.firstMenuItem;
        break;
      case "End":
      case "PageDown":
        o.activeMenuItem = o.lastMenuItem;
        break;
      case "Backspace":
        if (this.typingBuffer && (this.typingBuffer = this.typingBuffer.slice(0, -1), this.typingBuffer)) {
          clearTimeout(this.typingBufferResetTimer);
          let l = o.findMenuItem(this.typingBuffer);
          l && (o.activeMenuItem = l), this.typingBufferResetTimer = setTimeout(() => {
            this.typingBuffer = "";
          }, 500);
        }
        break;
      default:
        if (Ko(t)) {
          isFinite(this.typingBufferResetTimer) && clearTimeout(this.typingBufferResetTimer), this.typingBuffer += t.key;
          let l = o.findMenuItem(this.typingBuffer);
          l && (o.activeMenuItem = l), this.typingBufferResetTimer = setTimeout(() => {
            this.typingBuffer = "";
          }, 500);
        } else a = !1;
    }
    a && (t.preventDefault(), t.stopPropagation());
  }
  handleEvent(t) {
    if (t.type === "keydown") this.handleKeydownEvent(t);
    else if (t.type === "keyup") this.handleKeyupEvent(t);
    else if (t.type === "pointermove") this.lastMoveEvent = t;
    else if (t.type === "pointerup" && t.target === this.scrim) Number.isFinite(this.rootMenu._openTimestamp) && Date.now() - this.rootMenu._openTimestamp < 120 ? this.state = "modal" : this.state === "modal" && this.hide();
    else if (t.type === "contextmenu") {
      t.preventDefault(), t.stopPropagation();
      return;
    }
    super.handleEvent(t);
  }
  dispatchEvent(t) {
    return this._host ? this._host.dispatchEvent(t) : !0;
  }
  get scrim() {
    return Ge.element;
  }
  connectScrim(t) {
    let i = this.scrim;
    i.addEventListener("pointerup", this), i.addEventListener("contextmenu", this), i.addEventListener("keydown", this), i.addEventListener("keyup", this), i.addEventListener("pointermove", this), Ge.open({ root: t, onDismiss: () => this.hide() });
  }
  disconnectScrim() {
    let t = this.scrim;
    t.removeEventListener("pointerup", this), t.removeEventListener("contextmenu", this), t.removeEventListener("keydown", this), t.removeEventListener("keyup", this), t.removeEventListener("pointermove", this), Ge.state === "open" && Ge.scrim.close();
  }
  get rootMenu() {
    return this;
  }
  show(t) {
    return this._onDismiss = t == null ? void 0 : t.onDismiss, t != null && t.modifiers && (this.modifiers = t.modifiers), this.updateState(), this.connectScrim(t == null ? void 0 : t.target), super.show(b(f({}, t), { container: this.scrim })) ? (this._openTimestamp = Date.now(), this.state = "open", !0) : (this.disconnectScrim(), !1);
  }
  hide() {
    this.cancelDelayedOperation(), this.state !== void 0 && (this.state !== "closed" && (this.activeMenuItem = null, Ge.element.parentElement.focus(), super.hide(), this.state = "closed", this.disconnectScrim()), this._onDismiss && (this._onDismiss(), this._onDismiss = void 0));
  }
  scheduleOperation(t) {
    this.cancelDelayedOperation();
    let i = Zm.SUBMENU_DELAY;
    if (i <= 0) {
      t();
      return;
    }
    this.hysteresisTimer = setTimeout(() => {
      this.hysteresisTimer = 0, t();
    }, i);
  }
  cancelDelayedOperation() {
    this.hysteresisTimer && (clearTimeout(this.hysteresisTimer), this.hysteresisTimer = 0);
  }
};
Gm.SUBMENU_DELAY = 120;
var V2 = Gm;
function Ym(e) {
  return wl(e) ? !1 : typeof e.label == "function" || typeof e.ariaLabel == "function" || typeof e.tooltip == "function" || (ct(e) || ur(e)) && (typeof e.enabled == "function" || typeof e.visible == "function") || ct(e) && typeof e.checked == "function" ? !0 : ur(e) ? e.submenu.some(Ym) : !1;
}
var bo = class {
};
bo.DELAY = 300, bo.MAX_DISTANCE = 10;
function H2(e) {
  return new Promise((t, i) => {
    let r = uo(e);
    r || t(!1);
    let n = r, a = setTimeout(() => {
      o.abort(), t(q2(n, r) < bo.MAX_DISTANCE);
    }, bo.DELAY), o = new AbortController(), s = o.signal;
    for (let l of ["pointermove", "pointerup", "pointercancel"]) window.addEventListener(l, (u) => {
      if (u.type === "pointerup" || u.type === "pointercancel") clearTimeout(a), o.abort(), t(!1);
      else if (u.type === "pointermove") {
        let c = uo(u);
        c && (n = c);
      }
    }, { passive: !0, signal: s });
  });
}
async function Qd(e, t, i) {
  if (e.type === "contextmenu") {
    let r = e;
    if (i.show({ target: t, location: uo(r), modifiers: Si(r) })) return e.preventDefault(), e.stopPropagation(), !0;
  }
  if (e.type === "keydown") {
    let r = e;
    if (r.code === "ContextMenu" || r.code === "F10" && r.shiftKey) {
      let n = t == null ? void 0 : t.getBoundingClientRect();
      if (n && i.show({ target: t, location: { x: Math.ceil(n.left + n.width / 2), y: Math.ceil(n.top + n.height / 2) }, modifiers: Si(r) })) return e.preventDefault(), e.stopPropagation(), !0;
    }
  }
  if (e.type === "pointerdown" && e.pointerType !== "mouse" && e.button === 0) {
    let r = e.target;
    for (; r && t !== r; ) r = r.parentNode;
    if (!r || !i.visible) return !1;
    let n = uo(e);
    if (await H2(e)) return i.state !== "closed" ? !1 : (i.show({ target: t, location: n }), !0);
  }
  return !1;
}
var eh = { acute: 714, grave: 715, dot: 729, ddot: 168, mathring: 730, tilde: 126, bar: 713, breve: 728, check: 711, hat: 94, vec: 8407 };
x(Object.keys(eh), "{body:auto}", { createAtom: (e) => new Do(b(f({}, e), { body: D(e.args[0]), accentChar: eh[e.command.slice(1)] })) });
x(["widehat", "widecheck", "widetilde"], "{body:auto}", { createAtom: (e) => {
  let t = sp(D(e.args[0]));
  return new Do(b(f({}, e), { body: D(e.args[0]), svgAccent: e.command.slice(1) + (t.length > 5 ? "4" : ["1", "1", "2", "2", "3", "3"][t.length]) }));
} });
x(["overarc", "overparen", "wideparen"], "{body:auto}", { createAtom: (e) => new Do(b(f({}, e), { body: D(e.args[0]), svgAccent: "overarc" })) });
x(["underarc", "underparen"], "{body:auto}", { createAtom: (e) => new qe(b(f({}, e), { body: D(e.args[0]), svgBelow: "underarc" })) });
x("utilde", "{body:auto}", { createAtom: (e) => {
  let t = D(e.args[0]), i = sp(t), r = "widetilde" + (i.length > 5 ? "4" : ["1", "1", "2", "2", "3", "3"][i.length]);
  return new qe(b(f({}, e), { body: t, svgBelow: r, boxType: Cn(t) }));
} });
x("^", "{:string}", { createAtom: (e) => {
  var t;
  return new v(b(f({}, e), { type: "mord", isFunction: !1, limits: "adjacent", value: e.args[0] && (t = { a: "â", e: "ê", i: "î", o: "ô", u: "û", A: "Â", E: "Ê", I: "Î", O: "Ô", U: "Û" }[e.args[0]]) != null ? t : "^" }));
} });
x("`", "{:string}", { createAtom: (e) => {
  var t;
  return new v(b(f({}, e), { type: "mord", isFunction: !1, limits: "adjacent", value: e.args[0] && (t = { a: "à", e: "è", i: "ì", o: "ò", u: "ù", A: "À", E: "È", I: "Ì", O: "Ò", U: "Ù" }[e.args[0]]) != null ? t : "`" }));
} });
x("'", "{:string}", { createAtom: (e) => {
  var t;
  return new v(b(f({}, e), { type: "mord", isFunction: !1, limits: "adjacent", value: e.args[0] && (t = { a: "á", e: "é", i: "í", o: "ó", u: "ú", A: "Á", E: "É", I: "Í", O: "Ó", U: "Ú" }[e.args[0]]) != null ? t : "'" }));
} });
x('"', "{:string}", { createAtom: (e) => {
  var t, i;
  return new v(b(f({}, e), { type: "mord", isFunction: !1, limits: "adjacent", value: (t = e.args) != null && t[0] ? (i = { a: "ä", e: "ë", i: "ï", o: "ö", u: "ü", A: "Ä", E: "Ë", I: "Ë", O: "Ö", U: "Ü" }[e.args[0]]) != null ? i : '"' + e.args[0] : '"' }));
} });
x(".", "{:string}", { createAtom: (e) => {
  var t, i;
  return new v(b(f({}, e), { type: "mord", isFunction: !1, limits: "adjacent", value: (t = e.args) != null && t[0] ? (i = { a: "ȧ", e: "ė", i: "̇i", o: "ȯ", u: "̇u", A: "Ȧ", E: "Ė", I: "İ", O: "Ȯ", U: "̇U" }[e.args[0]]) != null ? i : "." + e.args[0] : "." }));
} });
x("=", "{:string}", { createAtom: (e) => {
  var t, i;
  return new v(b(f({}, e), { type: "mord", isFunction: !1, limits: "adjacent", value: (t = e.args) != null && t[0] ? (i = { a: "ā", e: "ē", i: "ī", o: "ō", u: "ū", A: "Ā", E: "Ē", I: "Ī", O: "Ō", U: "Ū" }[e.args[0]]) != null ? i : "=" + e.args[0] : "=" }));
} });
x("~", "{:string}", { createAtom: (e) => {
  var t;
  return new v(b(f({ type: "mord" }, e), { isFunction: !1, limits: "adjacent", value: e.args[0] && (t = { n: "ñ", N: "Ñ", a: "ã", o: "õ", A: "Ã", O: "Õ" }[e.args[0]]) != null ? t : "´" }));
} });
x("c", "{:string}", { createAtom: (e) => {
  var t;
  return new v(b(f({}, e), { type: "mord", isFunction: !1, limits: "adjacent", value: e.args[0] && (t = { c: "ç", C: "Ç" }[e.args[0]]) != null ? t : "" }));
} });
x("enclose", "{notation:string}[style:string]{body:auto}", { createAtom: (e) => {
  var t, i;
  let r = e.args, n = { strokeColor: "currentColor", strokeWidth: "", strokeStyle: "solid", backgroundcolor: "transparent", padding: "auto", shadow: "none", svgStrokeStyle: void 0, borderStyle: void 0, style: (t = e.style) != null ? t : {} };
  if (r[1]) {
    let o = r[1].split(/,(?![^(]*\)(?:(?:[^(]*\)){2})*[^"]*$)/);
    for (let s of o) {
      let l = s.match(/\s*(\S+)\s+(\S+)\s+(.*)/);
      if (l) n.strokeWidth = l[1], n.strokeStyle = l[2], n.strokeColor = l[3];
      else {
        let u = s.match(/\s*([a-z]*)\s*=\s*"(.*)"/);
        u && (u[1] === "mathbackground" ? n.backgroundcolor = u[2] : u[1] === "mathcolor" ? n.strokeColor = u[2] : u[1] === "padding" ? n.padding = u[2] : u[1] === "shadow" && (n.shadow = u[2]));
      }
    }
    n.strokeStyle === "dashed" ? n.svgStrokeStyle = "5,5" : n.strokeStyle === "dotted" && (n.svgStrokeStyle = "1,5");
  }
  n.borderStyle = `${n.strokeWidth} ${n.strokeStyle} ${n.strokeColor}`;
  let a = {};
  return ((i = r[0]) != null ? i : "").split(/[, ]/).filter((o) => o.length > 0).forEach((o) => {
    a[o.toLowerCase()] = !0;
  }), new An(e.command, D(r[2]), a, n);
} });
x("cancel", "{body:auto}", { createAtom: (e) => {
  var t;
  return new An(e.command, D(e.args[0]), { updiagonalstrike: !0 }, { strokeColor: "currentColor", strokeWidth: "", strokeStyle: "solid", borderStyle: "1px solid currentColor", backgroundcolor: "transparent", padding: "auto", shadow: "none", style: (t = e.style) != null ? t : {} });
} });
x("bcancel", "{body:auto}", { createAtom: (e) => {
  var t;
  return new An(e.command, D(e.args[0]), { downdiagonalstrike: !0 }, { strokeColor: "currentColor", strokeWidth: "", strokeStyle: "solid", borderStyle: "1px solid currentColor", backgroundcolor: "transparent", padding: "auto", shadow: "none", style: (t = e.style) != null ? t : {} });
} });
x("xcancel", "{body:auto}", { createAtom: (e) => {
  var t;
  return new An(e.command, D(e.args[0]), { updiagonalstrike: !0, downdiagonalstrike: !0 }, { strokeColor: "currentColor", strokeWidth: "", strokeStyle: "solid", borderStyle: "1px solid currentColor", backgroundcolor: "transparent", padding: "auto", shadow: "none", style: (t = e.style) != null ? t : {} });
} });
x(["overrightarrow", "overleftarrow", "Overrightarrow", "overleftharpoon", "overrightharpoon", "overleftrightarrow", "overlinesegment", "overgroup"], "{:auto}", { createAtom: (e) => {
  var t;
  return new qe(b(f({}, e), { body: D((t = e.args) == null ? void 0 : t[0]), skipBoundary: !1, supsubPlacement: "over-under", paddedBody: !0, boxType: "rel", svgAbove: e.command.slice(1) }));
} });
x("overbrace", "{:auto}", { createAtom: (e) => new qe(b(f({}, e), { body: D(e.args[0]), skipBoundary: !1, supsubPlacement: "over-under", paddedBody: !0, boxType: "ord", svgAbove: e.command.slice(1) })) });
x(["underrightarrow", "underleftarrow", "underleftrightarrow", "underlinesegment", "undergroup"], "{:auto}", { createAtom: (e) => new qe(b(f({}, e), { body: D(e.args[0]), skipBoundary: !1, supsubPlacement: "over-under", paddedBody: !0, boxType: "rel", svgBelow: e.command.slice(1) })) });
x(["underbrace"], "{:auto}", { createAtom: (e) => new qe(b(f({}, e), { body: D(e.args[0]), skipBoundary: !1, supsubPlacement: "over-under", paddedBody: !0, boxType: "ord", svgBelow: e.command.slice(1) })) });
x(["xrightarrow", "longrightarrow", "xleftarrow", "longleftarrow", "xRightarrow", "xLeftarrow", "xleftharpoonup", "xleftharpoondown", "xrightharpoonup", "xrightharpoondown", "xlongequal", "xtwoheadleftarrow", "xtwoheadrightarrow", "xleftrightarrow", "longleftrightarrow", "xLeftrightarrow", "xrightleftharpoons", "longrightleftharpoons", "xleftrightharpoons", "xhookleftarrow", "xhookrightarrow", "xmapsto", "xtofrom", "xleftrightarrows", "longleftrightarrows", "xRightleftharpoons", "longRightleftharpoons", "xLeftrightharpoons", "longLeftrightharpoons"], "[:auto]{:auto}", { createAtom: (e) => {
  var t, i, r, n, a;
  return new qe(b(f({}, e), { svgBody: e.command.slice(1), above: ((i = D((t = e.args) == null ? void 0 : t[1])) == null ? void 0 : i.length) === 0 ? void 0 : D((r = e.args) == null ? void 0 : r[1]), below: (a = D((n = e.args) == null ? void 0 : n[0])) != null ? a : null, skipBoundary: !1, supsubPlacement: "over-under", paddedBody: !0, paddedLabels: !0, boxType: "rel" }));
}, serialize: (e, t) => e.command + (e.hasEmptyBranch("below") ? "" : `[${e.belowToLatex(t)}]`) + `{${e.aboveToLatex(t)}}${e.supsubToLatex(t)}` });
x(["arccos", "arcsin", "arctan", "arctg", "arcctg", "arg", "ch", "cos", "cosh", "cot", "cotg", "coth", "ctg", "cth", "csc", "cosec", "deg", "dim", "exp", "gcd", "hom", "inf", "ker", "lb", "lg", "ln", "log", "Pr", "sec", "sh", "sin", "sinh", "sup", "tan", "tanh", "tg", "th", "arcsec", "arccsc", "arsinh", "arcosh", "artanh", "arcsech", "arccsch"], "", { isFunction: !0, ifMode: "math", createAtom: (e) => new Ni(e.command.slice(1), b(f({}, e), { limits: "adjacent", isFunction: !0, variant: "main", variantStyle: "up" })) });
x(["liminf", "limsup"], "", { ifMode: "math", createAtom: (e) => new Ni({ "\\liminf": "lim inf", "\\limsup": "lim sup" }[e.command], b(f({}, e), { limits: "over-under", variant: "main" })) });
x(["lim", "mod"], "", { ifMode: "math", createAtom: (e) => new Ni(e.command.slice(1), b(f({}, e), { limits: "over-under", variant: "main" })) });
x(["det", "max", "min"], "", { ifMode: "math", isFunction: !0, createAtom: (e) => new Ni(e.command.slice(1), b(f({}, e), { limits: "over-under", isFunction: !0, variant: "main" })) });
x(["ang"], "{:math}", { ifMode: "math", createAtom: (e) => new v(b(f({}, e), { body: D(e.args[0]) })), serialize: (e, t) => `\\ang{${e.bodyToLatex(t)}}`, render: (e, t) => {
  let i = e.createBox(t), r = i.caret;
  i.caret = void 0;
  let n = new S("°", { style: b(f({}, e.style), { variant: "normal", variantStyle: "up" }) });
  return new S([i, n], { type: "inner", isSelected: e.isSelected, caret: r });
} });
x("sqrt", "[index:auto]{radicand:expression}", { ifMode: "math", createAtom: (e) => new gm(b(f({}, e), { body: D(e.args[1]), index: e.args[0] ? D(e.args[0]) : void 0 })) });
x(["frac", "dfrac", "tfrac", "binom", "dbinom", "tbinom"], "{:expression}{:expression}", { ifMode: "math", createAtom: (e) => {
  let t = f({}, e), i = e.command, r = e.args;
  switch (i) {
    case "\\dfrac":
    case "\\frac":
    case "\\tfrac":
      t.hasBarLine = !0;
      break;
    case "\\atopfrac":
      t.hasBarLine = !1;
      break;
    case "\\dbinom":
    case "\\binom":
    case "\\tbinom":
      t.hasBarLine = !1, t.leftDelim = "(", t.rightDelim = ")";
      break;
    case "\\cfrac":
      t.hasBarLine = !0, t.continuousFraction = !0;
      break;
  }
  switch (i) {
    case "\\dfrac":
    case "\\dbinom":
      t.mathstyleName = "displaystyle";
      break;
    case "\\tfrac":
    case "\\tbinom":
      t.mathstyleName = "textstyle";
      break;
  }
  return new $i(r[0] ? D(r[0]) : [new Ye()], r[1] ? D(r[1]) : [new Ye()], t);
}, serialize: (e, t) => {
  let i = e.aboveToLatex(t), r = e.belowToLatex(t);
  return /^[0-9]$/.test(i) && /^[0-9]$/.test(r) ? `${e.command}${i}${r}` : Z(e.command, i, r);
} });
x(["cfrac"], "[:string]{:expression}{:expression}", { ifMode: "math", createAtom: (e) => {
  let t = f({}, e), i = e.args;
  return t.hasBarLine = !0, t.continuousFraction = !0, i[0] === "r" && (t.align = "right"), i[0] === "l" && (t.align = "left"), new $i(i[1] ? D(i[1]) : [new Ye()], i[2] ? D(i[2]) : [new Ye()], t);
}, serialize: (e, t) => {
  let i = e.aboveToLatex(t), r = e.belowToLatex(t);
  return Z(e.command, i, r);
} });
x(["brace", "brack"], "", { infix: !0, createAtom: (e) => new $i(D(e.args[0]), D(e.args[1]), b(f({}, e), { hasBarLine: !1, leftDelim: e.command === "\\brace" ? "\\lbrace" : "\\lbrack", rightDelim: e.command === "\\brace" ? "\\rbrace" : "\\rbrack" })), serialize: (e, t) => R([e.aboveToLatex(t), e.command, e.belowToLatex(t)]) });
x(["over", "atop", "choose"], "", { infix: !0, createAtom: (e) => {
  let t, i, r = e.args;
  return e.command === "\\choose" && (t = "(", i = ")"), new $i(D(r[0]), D(r[1]), b(f({}, e), { hasBarLine: e.command === "\\over", leftDelim: t, rightDelim: i }));
}, serialize: (e, t) => R([e.aboveToLatex(t), e.command, e.belowToLatex(t)]) });
x(["overwithdelims", "atopwithdelims"], "{numer:auto}{denom:auto}{left-delim:delim}{right-delim:delim}", { infix: !0, createAtom: (e) => {
  var t, i;
  let r = e.args;
  return new $i(D(r[0]), D(r[1]), b(f({}, e), { leftDelim: (t = r[2]) != null ? t : ".", rightDelim: (i = r[3]) != null ? i : ".", hasBarLine: !1 }));
}, serialize: (e, t) => `${e.aboveToLatex(t)} ${e.command}${e.leftDelim}${e.rightDelim}${e.belowToLatex(t)}` });
x("pdiff", "{numerator}{denominator}", { ifMode: "math", createAtom: (e) => new $i(D(e.args[0]), D(e.args[1]), b(f({}, e), { hasBarLine: !0, numerPrefix: "∂", denomPrefix: "∂" })) });
x(["sum", "prod", "bigcup", "bigcap", "coprod", "bigvee", "bigwedge", "biguplus", "bigotimes", "bigoplus", "bigodot", "bigsqcup", "intop"], "", { ifMode: "math", createAtom: (e) => new iu({ coprod: "∐", bigvee: "⋁", bigwedge: "⋀", biguplus: "⨄", bigcap: "⋂", bigcup: "⋃", intop: "∫", prod: "∏", sum: "∑", bigotimes: "⨂", bigoplus: "⨁", bigodot: "⨀", bigsqcup: "⨆", smallint: "∫" }[e.command.slice(1)], b(f({}, e), { limits: "auto", variant: "main" })) });
x("smallint", "", { ifMode: "math", createAtom: (e) => new Ni("∫", b(f({}, e), { limits: "adjacent", variant: "main" })) });
var th = { int: "∫", iint: "∬", iiint: "∭", oint: "∮", oiint: "∯", oiiint: "∰", intclockwise: "∱", varointclockwise: "∲", ointctrclockwise: "∳", intctrclockwise: "⨑", sqcup: "⊔", sqcap: "⊓", uplus: "⊎", wr: "≀", amalg: "⨿", Cap: "⋒", Cup: "⋓", doublecap: "⋒", doublecup: "⋓" };
x(Object.keys(th), "", { ifMode: "math", createAtom: (e) => {
  let t = e.command, i = th[t.slice(1)];
  return new iu(i, b(f({}, e), { limits: "adjacent", variant: { "⋒": "ams", "⋓": "ams" }[i] }));
} });
x(["Re", "Im"], "", { ifMode: "math", createAtom: (e) => new Ni({ "\\Re": "ℜ", "\\Im": "ℑ" }[e.command], b(f({}, e), { limits: "adjacent", isFunction: !0, variant: "fraktur" })) });
x("middle", "{:delim}", { ifMode: "math", createAtom: (e) => {
  var t;
  return new rm(b(f({}, e), { delim: (t = e.args[0]) != null ? t : "|", size: 1 }));
} });
x("the", "{:value}", { createAtom: (e) => new v(b(f({}, e), { captureSelection: !0, verbatimLatex: null })), render: (e, t) => {
  var i;
  let r = new I({ parent: t }, e.style), n = "";
  e.isSelected && (n += " ML__selected");
  let a = r.evaluate(e.args[0]);
  return new S(((i = pe(a)) != null ? i : "").split("").map((o) => new S(o, { type: "ord", classes: n, mode: e.mode, isSelected: e.isSelected, style: f({ variant: "main" }, e.style) })), { type: "lift", style: e.style, caret: e.caret, isSelected: e.isSelected, classes: n }).wrap(r);
}, serialize: (e) => {
  var t;
  return `\\the${(t = pe(e.args[0])) != null ? t : "\\relax"}`;
} });
x("mathtip", "{:auto}{:math}", { createAtom: (e) => new ru(b(f({}, e), { body: D(e.args[0]), tooltip: D(e.args[1]), content: "math" })), serialize: (e, t) => t.skipStyles ? e.bodyToLatex(t) : `\\texttip{${e.bodyToLatex(t)}}{${v.serialize([e.tooltip], b(f({}, t), { defaultMode: "math" }))}}` });
x("texttip", "{:auto}{:text}", { createAtom: (e) => new ru(b(f({}, e), { body: D(e.args[0]), tooltip: D(e.args[1]), content: "text" })), serialize: (e, t) => t.skipStyles ? e.bodyToLatex(t) : `\\texttip{${e.bodyToLatex(t)}}{${v.serialize([e.tooltip], b(f({}, t), { defaultMode: "text" }))}}` });
x("error", "{:math}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[0]) })), serialize: (e, t) => `\\error{${e.bodyToLatex(t)}}`, render: (e, t) => e.createBox(t, { classes: "ML__error" }) });
x("ensuremath", "{:math}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[0]) })), serialize: (e, t) => `${e.command}{${e.bodyToLatex(b(f({}, t), { defaultMode: "math" }))}}` });
x("color", "{:value}", { applyStyle: (e, t, i) => {
  var r, n;
  return { verbatimColor: (r = pe(t[0])) != null ? r : void 0, color: i.toColor((n = t[0]) != null ? n : { string: "red" }) };
} });
x("textcolor", "{:value}{content:auto*}", { applyStyle: (e, t, i) => {
  var r, n;
  return { verbatimColor: (r = pe(t[0])) != null ? r : void 0, color: i.toColor((n = t[0]) != null ? n : { string: "red" }) };
} });
x("boxed", "{content:math}", { createAtom: (e) => new Qt(b(f({}, e), { body: D(e.args[0]), framecolor: { string: "black" } })) });
x("colorbox", "{:value}{:text*}", { applyStyle: (e, t, i) => {
  var r, n;
  return { verbatimBackgroundColor: (r = pe(t[0])) != null ? r : void 0, backgroundColor: i.toBackgroundColor((n = t[0]) != null ? n : { string: "yellow" }) };
} });
x("fcolorbox", "{frame-color:value}{background-color:value}{content:text}", { applyMode: "text", createAtom: (e) => {
  var t, i;
  return new Qt(b(f({}, e), { body: D(e.args[2]), framecolor: (t = e.args[0]) != null ? t : { string: "blue" }, backgroundcolor: (i = e.args[1]) != null ? i : { string: "yellow" } }));
}, serialize: (e, t) => {
  var i, r;
  return t.skipStyles ? e.bodyToLatex(b(f({}, t), { defaultMode: "text" })) : Z(e.command, (i = pe(e.framecolor)) != null ? i : "", (r = pe(e.backgroundcolor)) != null ? r : "", e.bodyToLatex(b(f({}, t), { defaultMode: "text" })));
} });
x("bbox", "[:bbox]{body:auto}", { createAtom: (e) => {
  var t;
  let i = e.args[0], r = D(e.args[1]);
  return i ? new Qt(b(f({}, e), { body: r, padding: i.padding, border: i.border, backgroundcolor: (t = i.backgroundcolor) != null ? t : void 0 })) : new Qt(b(f({}, e), { body: r }));
}, serialize: (e, t) => {
  var i, r;
  if (t.skipStyles) return e.bodyToLatex(t);
  let n = e.command;
  if (Number.isFinite(e.padding) || e.border !== void 0 || e.backgroundcolor !== void 0) {
    let a = [];
    e.padding && a.push((i = pe(e.padding)) != null ? i : ""), e.border && a.push(`border: ${e.border}`), e.backgroundcolor && a.push((r = pe(e.backgroundcolor)) != null ? r : ""), n += `[${a.join(",")}]`;
  }
  return Z(n, e.bodyToLatex(t));
} });
x(["displaystyle", "textstyle", "scriptstyle", "scriptscriptstyle"], "{:rest}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[0]) })), render: (e, t) => {
  let i = new I({ parent: t, mathstyle: e.command.slice(1) }, e.style), r = v.createBox(i, e.body, { type: "lift" });
  return e.caret && (r.caret = e.caret), e.bind(t, r);
}, serialize: (e, t) => t.skipStyles ? e.bodyToLatex(t) : `{${R([e.command, e.bodyToLatex(t)])}}` });
x(["tiny", "scriptsize", "footnotesize", "small", "normalsize", "large", "Large", "LARGE", "huge", "Huge"], "", { applyStyle: (e) => ({ fontSize: { "\\tiny": 1, "\\scriptsize": 2, "\\footnotesize": 3, "\\small": 4, "\\normalsize": 5, "\\large": 6, "\\Large": 7, "\\LARGE": 8, "\\huge": 9, "\\Huge": 10 }[e] }) });
x("fontseries", "{:string}", { ifMode: "text", applyStyle: (e, t) => {
  var i;
  return { fontSeries: (i = t[0]) != null ? i : "auto" };
} });
x("fontshape", "{:string}", { ifMode: "text", applyStyle: (e, t) => {
  var i;
  return { fontShape: (i = t[0]) != null ? i : "auto" };
} });
x("fontfamily", "{:string}", { ifMode: "text", applyStyle: (e, t) => {
  var i;
  return { fontFamily: (i = t[0]) != null ? i : "roman" };
} });
x("selectfont", "", { ifMode: "text", applyStyle: () => ({}) });
x("bf", "{:rest*}", { applyStyle: () => ({ fontSeries: "b", fontShape: "n", fontFamily: "roman" }) });
x(["boldsymbol", "bm"], "{:math}", { applyMode: "math", createAtom: (e) => new v(b(f({}, e), { body: D(e.args[0]) })), serialize: (e, t) => `${e.command}{${e.bodyToLatex(t)}}`, render: (e, t) => e.createBox(t, { classes: "ML__boldsymbol" }) });
x("bold", "{:math*}", { applyMode: "math", applyStyle: () => ({ variantStyle: "bold" }) });
x("bfseries", "{:rest*}", { applyMode: "text", applyStyle: () => ({ fontSeries: "b" }) });
x("mdseries", "{:rest*}", { applyMode: "text", applyStyle: () => ({ fontSeries: "m" }) });
x("upshape", "{:rest*}", { applyMode: "text", applyStyle: () => ({ fontShape: "n" }) });
x("slshape", "{:rest*}", { applyMode: "text", applyStyle: () => ({ fontShape: "sl" }) });
x("scshape", "{:rest*}", { applyMode: "text", applyStyle: () => ({ fontShape: "sc" }) });
x("textbf", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontSeries: "b" }) });
x("textmd", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontSeries: "m" }) });
x("textup", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontShape: "n" }) });
x("textnormal", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontShape: "n", fontSeries: "m" }) });
x("textsl", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontShape: "sl" }) });
x("textit", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontShape: "it" }) });
x("textsc", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontShape: "sc" }) });
x("textrm", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontFamily: "roman" }) });
x("textsf", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontFamily: "sans-serif" }) });
x("texttt", "{:text*}", { applyMode: "text", applyStyle: () => ({ fontFamily: "monospace" }) });
x("mathbf", "{:math*}", { applyMode: "math", applyStyle: () => ({ variant: "normal", variantStyle: "bold" }) });
x("mathit", "{:math*}", { applyMode: "math", applyStyle: () => ({ variant: "main", variantStyle: "italic" }) });
x("mathnormal", "{:math*}", { applyMode: "math", applyStyle: () => ({ variant: "normal", variantStyle: "italic" }) });
x("mathbfit", "{:math*}", { applyMode: "math", applyStyle: () => ({ variant: "main", variantStyle: "bolditalic" }) });
x("mathrm", "{:math*}", { applyMode: "math", applyStyle: () => ({ variant: "normal", variantStyle: "up" }) });
x("mathsf", "{:math*}", { applyMode: "math", applyStyle: () => ({ variant: "sans-serif", variantStyle: "up" }) });
x("mathtt", "{:math*}", { applyMode: "math", applyStyle: () => ({ variant: "monospace", variantStyle: "up" }) });
x("it", "{:rest*}", { applyStyle: () => ({ fontSeries: "m", fontShape: "it", fontFamily: "roman", variantStyle: "italic" }) });
x("rmfamily", "{:rest*}", { applyStyle: () => ({ fontFamily: "roman" }) });
x("sffamily", "{:rest*}", { applyStyle: () => ({ fontFamily: "sans-serif" }) });
x("ttfamily", "{:rest*}", { applyStyle: () => ({ fontFamily: "monospace" }) });
x(["Bbb", "mathbb"], "{:math*}", { applyStyle: () => ({ variant: "double-struck", variantStyle: "up" }) });
x(["frak", "mathfrak"], "{:math*}", { applyStyle: () => ({ variant: "fraktur", variantStyle: "up" }) });
x("mathcal", "{:math*}", { applyStyle: () => ({ variant: "calligraphic", variantStyle: "up" }) });
x("mathscr", "{:math*}", { applyStyle: () => ({ variant: "script", variantStyle: "up" }) });
x("mbox", "{:text}", { ifMode: "math", createAtom: (e) => new v(b(f({}, e), { type: "mord", body: D(e.args[0]), mode: "math" })), serialize: (e, t) => Z("\\mbox", e.bodyToLatex(b(f({}, t), { defaultMode: "text" }))) });
x("text", "{:text}", { ifMode: "math", applyMode: "text" });
x(["class", "htmlClass"], "{name:string}{content:auto}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[1]) })), serialize: (e, t) => !e.args[0] || t.skipStyles ? e.bodyToLatex(t) : `${e.command}{${e.args[0]}}{${e.bodyToLatex(t)}}`, render: (e, t) => {
  var i;
  return e.createBox(t, { classes: (i = e.args[0]) != null ? i : "" });
} });
x(["cssId", "htmlId"], "{id:string}{content:auto}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[1]) })), serialize: (e, t) => {
  var i;
  return !((i = e.args) != null && i[0]) || t.skipStyles ? e.bodyToLatex(t) : `${e.command}{${e.args[0]}}{${e.bodyToLatex(t)}}`;
}, render: (e, t) => {
  var i;
  let r = e.createBox(t);
  return r.cssId = (i = e.args[0]) != null ? i : "", r;
} });
x("htmlData", "{data:string}{content:auto}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[1]) })), serialize: (e, t) => {
  var i;
  return !((i = e.args) != null && i[0]) || t.skipStyles ? e.bodyToLatex(t) : `\\htmlData{${e.args[0]}}{${e.bodyToLatex(t)}}`;
}, render: (e, t) => {
  var i;
  let r = e.createBox(t);
  return r.htmlData = (i = e.args[0]) != null ? i : "", r;
} });
x(["style", "htmlStyle"], "{data:string}{content:auto}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[1]) })), serialize: (e, t) => {
  var i;
  return !((i = e.args) != null && i[0]) || t.skipStyles ? e.bodyToLatex(t) : `${e.command}{${e.args[0]}}{${e.bodyToLatex(t)}}`;
}, render: (e, t) => {
  var i;
  let r = e.createBox(t);
  return r.htmlStyle = (i = e.args[0]) != null ? i : "", r;
} });
x("em", "{:rest}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[0]) })), serialize: (e, t) => t.skipStyles ? e.bodyToLatex(t) : `{\\em ${e.bodyToLatex(t)}}`, render: (e, t) => e.createBox(t, { classes: "ML__emph", boxType: "lift" }) });
x("emph", "{:auto}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[1]) })), serialize: (e, t) => t.skipStyles ? e.bodyToLatex(t) : `\\emph{${e.bodyToLatex(t)}}`, render: (e, t) => e.createBox(t, { classes: "ML__emph", boxType: "lift" }) });
var ih = { "\\bigl": { mclass: "mopen", size: 1 }, "\\Bigl": { mclass: "mopen", size: 2 }, "\\biggl": { mclass: "mopen", size: 3 }, "\\Biggl": { mclass: "mopen", size: 4 }, "\\bigr": { mclass: "mclose", size: 1 }, "\\Bigr": { mclass: "mclose", size: 2 }, "\\biggr": { mclass: "mclose", size: 3 }, "\\Biggr": { mclass: "mclose", size: 4 }, "\\bigm": { mclass: "mrel", size: 1 }, "\\Bigm": { mclass: "mrel", size: 2 }, "\\biggm": { mclass: "mrel", size: 3 }, "\\Biggm": { mclass: "mrel", size: 4 }, "\\big": { mclass: "mord", size: 1 }, "\\Big": { mclass: "mord", size: 2 }, "\\bigg": { mclass: "mord", size: 3 }, "\\Bigg": { mclass: "mord", size: 4 } };
x(["bigl", "Bigl", "biggl", "Biggl", "bigr", "Bigr", "biggr", "Biggr", "bigm", "Bigm", "biggm", "Biggm", "big", "Big", "bigg", "Bigg"], "{:delim}", { createAtom: (e) => {
  var t;
  return new am(b(f({}, e), { delim: (t = e.args[0]) != null ? t : ".", size: ih[e.command].size, delimType: ih[e.command].mclass }));
} });
x(["hspace", "hspace*"], "{width:value}", { createAtom: (e) => {
  var t;
  return new Dn(b(f({}, e), { width: (t = e.args[0]) != null ? t : { dimension: 0 } }));
} });
x(["mkern", "kern", "mskip", "hskip", "mspace"], "{width:value}", { createAtom: (e) => {
  var t;
  return new Dn(b(f({}, e), { width: (t = e.args[0]) != null ? t : { dimension: 0 } }));
} });
x("mathchoice", "{:math}{:math}{:math}{:math}", { createAtom: (e) => new v(e), render: (e, t) => {
  let i = 0, r = t.mathstyle.id;
  (r === Eo || r === xi) && (i = 1), (r === hr || r === Ae) && (i = 2), (r === Mi || r === be) && (i = 3);
  let n = D(e.args[i]);
  return v.createBox(t, n);
}, serialize: (e, t) => `\\mathchoice{${v.serialize(e.args[0], t)}}{${v.serialize(e.args[1], t)}}{${v.serialize(e.args[2], t)}}{${v.serialize(e.args[3], t)}}` });
x("mathop", "{:auto}", { createAtom: (e) => new v(b(f({}, e), { type: "mop", body: D(e.args[0]), limits: "over-under", isFunction: !0, captureSelection: !0 })), render: (e, t) => {
  var i;
  let r = v.createBox(t, e.body);
  if (e.superscript || e.subscript) {
    let n = (i = e.subsupPlacement) != null ? i : "auto";
    r = n === "over-under" || n === "auto" && t.isDisplayStyle ? e.attachLimits(t, { base: r }) : e.attachSupsub(t, { base: r });
  }
  return new S(e.bind(t, r), { type: "op", isSelected: e.isSelected, classes: "ML__op-group" });
}, serialize: (e, t) => {
  let i = [Z(e.command, e.bodyToLatex(t))];
  return e.explicitSubsupPlacement && (e.subsupPlacement === "over-under" && i.push("\\limits"), e.subsupPlacement === "adjacent" && i.push("\\nolimits"), e.subsupPlacement === "auto" && i.push("\\displaylimits")), i.push(e.supsubToLatex(t)), R(i);
} });
x(["mathbin", "mathrel", "mathopen", "mathclose", "mathpunct", "mathord", "mathinner"], "{:auto}", { createAtom: (e) => new v(b(f({}, e), { type: { "\\mathbin": "mbin", "\\mathrel": "mrel", "\\mathopen": "mopen", "\\mathclose": "mclose", "\\mathpunct": "mpunct", "\\mathord": "mord", "\\mathinner": "minner" }[e.command], body: D(e.args[0]) })) });
x(["operatorname", "operatorname*"], "{operator:math}", { createAtom: (e) => {
  let t = D(e.args[0]).map((i) => {
    var r;
    return i.type !== "first" && (i.type = "mord", i.value = (r = { "∗": "*", "−": "-" }[i.value]) != null ? r : i.value, i.isFunction = !1, !i.style.variant && !i.style.variantStyle && (i.style.variant = "main", i.style.variantStyle = "up")), i;
  });
  return new v(b(f({}, e), { type: "mop", body: t, isFunction: !0, limits: e.command === "\\operatorname" ? "adjacent" : "over-under" }));
}, render: (e, t) => {
  var i;
  let r = v.createBox(t, e.body);
  if (e.superscript || e.subscript) {
    let n = (i = e.subsupPlacement) != null ? i : "auto";
    r = n === "over-under" || n === "auto" && t.isDisplayStyle ? e.attachLimits(t, { base: r }) : e.attachSupsub(t, { base: r });
  }
  return e.caret && (r.caret = e.caret), new S(e.bind(t, r), { type: "op", isSelected: e.isSelected, classes: "ML__op-group" });
}, serialize: (e, t) => {
  let i = [Z(e.command, e.bodyToLatex(t))];
  return e.explicitSubsupPlacement && (e.subsupPlacement === "over-under" && i.push("\\limits"), e.subsupPlacement === "adjacent" && i.push("\\nolimits"), e.subsupPlacement === "auto" && i.push("\\displaylimits")), i.push(e.supsubToLatex(t)), R(i);
} });
x(["char", "unicode"], "{charcode:value}", { createAtom: (e) => new v(b(f({}, e), { type: e.mode === "text" ? "text" : "mord" })), serialize: (e) => {
  var t;
  return `${e.command}${pe((t = e.args[0]) != null ? t : { number: 10067, base: "hexadecimal" })}`;
}, render: (e, t) => {
  let i = t.evaluate(e.args[0]);
  return (!i || !("number" in i)) && (i = { number: 10067, base: "hexadecimal" }), e.value = String.fromCodePoint(i.number), e.createBox(t);
} });
x("rule", "[raise:value]{width:value}{thickness:value}", { createAtom: (e) => new v(e), render: (e, t) => {
  var i, r, n;
  let a = new I({ parent: t, mathstyle: "textstyle" }, e.style), o = a.toEm((i = e.args[0]) != null ? i : { dimension: 0 }), s = a.toEm((r = e.args[1]) != null ? r : { dimension: 10 }), l = a.toEm((n = e.args[2]) != null ? n : { dimension: 10 }), u = new S(null, { classes: "ML__rule", type: "ord" });
  return u.width = s, u.height = l + o, u.depth = -o, u.setStyle("border-right-width", s, "em"), u.setStyle("border-top-width", l, "em"), u.setStyle("border-color", e.style.color), u.setStyle("vertical-align", o, "em"), e.isSelected && u.setStyle("opacity", "50%"), e.bind(a, u), e.caret && (u.caret = e.caret), u.wrap(t);
}, serialize: (e) => `\\rule${e.args[0] ? `[${pe(e.args[0])}]` : ""}{${pe(e.args[1])}}{${pe(e.args[2])}}` });
x(["overline", "underline"], "{:auto}", { createAtom: (e) => new v(b(f({}, e), { body: D(e.args[0]) })), render: (e, t) => {
  let i = e.command.substring(1), r = new I({ parent: t, mathstyle: "cramp" }, e.style), n = v.createBox(r, e.body);
  if (!n) return null;
  let a = r.metrics.defaultRuleThickness / r.scalingFactor, o = new S(null, { classes: i + "-line" });
  o.height = a, o.maxFontSize = a * 1.125 * r.scalingFactor;
  let s;
  return i === "overline" ? s = new ae({ shift: 0, children: [{ box: n }, 3 * a, { box: o }, a] }) : s = new ae({ top: n.height, children: [a, { box: o }, 3 * a, { box: n }] }), e.caret && (s.caret = e.caret), new S(s, { classes: i, type: "ignore" });
} });
x("overset", "{:auto}{base:auto}", { createAtom: (e) => {
  let t = D(e.args[1]);
  return new qe(b(f({}, e), { above: D(e.args[0]), body: t, skipBoundary: !1, boxType: Cn(t) }));
}, serialize: (e, t) => Z(e.command, e.aboveToLatex(t), e.bodyToLatex(t)) });
x("underset", "{:auto}{base:auto}", { createAtom: (e) => {
  let t = D(e.args[1]);
  return new qe(b(f({}, e), { below: D(e.args[0]), body: t, skipBoundary: !1, boxType: Cn(t) }));
}, serialize: (e, t) => Z(e.command, e.belowToLatex(t), e.bodyToLatex(t)) });
x("overunderset", "{above:auto}{below:auto}{base:auto}", { createAtom: (e) => {
  let t = D(e.args[2]);
  return new qe(b(f({}, e), { above: D(e.args[0]), below: D(e.args[1]), body: t, skipBoundary: !1, boxType: Cn(t) }));
}, serialize: (e, t) => Z(e.command, e.belowToLatex(t), e.bodyToLatex(t)) });
x(["stackrel", "stackbin"], "[below:auto]{above:auto}{base:auto}", { createAtom: (e) => new qe(b(f({}, e), { body: D(e.args[2]), above: D(e.args[1]), below: D(e.args[0]), skipBoundary: !1, boxType: e.command === "\\stackrel" ? "rel" : "bin" })), serialize: (e, t) => Z(e.command, e.aboveToLatex(t), e.bodyToLatex(t)) });
x("smash", "[:string]{:auto}", { createAtom: (e) => {
  var t, i, r, n;
  return new En(b(f({}, e), { body: D(e.args[1]), smashHeight: (i = (t = e.args[0]) == null ? void 0 : t.includes("t")) != null ? i : !0, smashDepth: (n = (r = e.args[0]) == null ? void 0 : r.includes("b")) != null ? n : !0 }));
} });
x(["vphantom"], "{:auto}", { createAtom: (e) => new En(b(f({}, e), { body: D(e.args[0]), isInvisible: !0, smashWidth: !0 })) });
x(["hphantom"], "{:auto}", { createAtom: (e) => new En(b(f({}, e), { body: D(e.args[0]), isInvisible: !0, smashHeight: !0, smashDepth: !0 })) });
x(["phantom"], "{:auto}", { createAtom: (e) => new En(b(f({}, e), { body: D(e.args[0]), isInvisible: !0 })) });
x("not", "{:math}", { createAtom: (e) => {
  let t = D(e.args[0]);
  return t.length === 0 ? new v(b(f({}, e), { type: "mrel", value: "" })) : new v(b(f({}, e), { body: [new Pi(b(f({}, e), { body: "", align: "right" })), ...t], captureSelection: !0 }));
}, serialize: (e, t) => {
  let i = e.args[0], r = i && typeof i == "object" && "group" in i;
  return e.value !== "" ? r ? `\\not{${v.serialize(i.group, t)}}` : `\\not${v.serialize(i, t)}` : r ? "\\not{}" : "\\not";
}, render: (e, t) => {
  if (e.value) return e.createBox(t);
  let i = e.args[0] && typeof e.args[0] == "object" && "group" in e.args[0] ? "ord" : Cn(D(e.args[0])), r = v.createBox(t, e.body, { type: i });
  return e.caret && (r.caret = e.caret), e.bind(t, r);
} });
x(["ne", "neq"], "", { createAtom: (e) => new v(b(f({}, e), { type: "mrel", body: [new Pi(b(f({}, e), { body: "", align: "right", boxType: "rel" })), new v(b(f({}, e), { value: "=" }))], captureSelection: !0 })), serialize: (e) => e.command });
x("rlap", "{:auto}", { createAtom: (e) => new Pi(b(f({}, e), { body: D(e.args[0]), align: "right" })) });
x("llap", "{:auto}", { createAtom: (e) => new Pi(b(f({}, e), { body: D(e.args[0]), align: "left" })) });
x("mathrlap", "{:math}", { createAtom: (e) => new Pi(b(f({}, e), { body: D(e.args[0]), align: "left" })) });
x("mathllap", "{:math}", { createAtom: (e) => new Pi(b(f({}, e), { body: D(e.args[0]), align: "left" })) });
x("raisebox", "{:value}{:text}", { createAtom: (e) => {
  var t;
  return new Qt(b(f({}, e), { body: D(e.args[1]), padding: { dimension: 0 }, offset: (t = e.args[0]) != null ? t : { dimension: 0 } }));
}, serialize: (e, t) => {
  var i;
  return Z("\\raisebox", (i = pe(e.offset)) != null ? i : "0pt", e.bodyToLatex(t));
} });
x("raise", "{:value}{:auto}", { createAtom: (e) => {
  var t;
  return new Qt(b(f({}, e), { body: D(e.args[1]), padding: { dimension: 0 }, offset: (t = e.args[0]) != null ? t : { dimension: 0 } }));
}, serialize: (e, t) => {
  var i;
  return Z("\\raise", (i = pe(e.offset)) != null ? i : "0pt", e.bodyToLatex(t));
} });
x("lower", "{:value}{:auto}", { createAtom: (e) => {
  var t;
  return new Qt(b(f({}, e), { body: D(e.args[1]), padding: { dimension: 0 }, offset: (t = lt(e.args[0], -1)) != null ? t : { dimension: 0 } }));
}, serialize: (e, t) => {
  var i, r;
  return Z("\\lower", (r = pe(lt((i = e.offset) != null ? i : { dimension: 0 }, -1))) != null ? r : "0pt", e.bodyToLatex(t));
} });
de("0123456789/@.?!");
op(65, 90);
op(97, 122);
de([["\\forall", 8704], ["\\exists", 8707], ["\\nexists", 8708, "mord", "ams"], ["\\mid", 8739, "mrel"], ["\\top", 8868], ["\\bot", 8869]]);
de([["\\#", 35], ["\\&", 38], ["\\parallelogram", 9649], ["\\spadesuit", 9824], ["\\heartsuit", 9825], ["\\diamondsuit", 9826], ["\\clubsuit", 9827], ["\\flat", 9837], ["\\natural", 9838], ["\\sharp", 9839]]);
de([["\\backslash", 92], ["\\nabla", 8711], ["\\partial", 8706], ["\\ell", 8467], ["\\hbar", 8463], ["\\Q", 81, "mord", "double-struck"], ["\\C", 67, "mord", "double-struck"], ["\\P", 80, "mord", "double-struck"], ["\\pounds", 163], ["\\euro", 8364]]);
de([["\\rightarrow", 8594], ["\\to", 8594], ["\\leftarrow", 8592], ["\\gets", 8592], ["\\Rightarrow", 8658], ["\\Leftarrow", 8656], ["\\longrightarrow", 10230], ["\\longleftarrow", 10229], ["\\Longrightarrow", 10233], ["\\implies", 10233], ["\\Longleftarrow", 10232], ["\\impliedby", 10232], ["\\longleftrightarrow", 10231], ["\\biconditional", 10231], ["\\Longleftrightarrow", 10234], ["\\mapsto", 8614], ["\\longmapsto", 10236], ["\\uparrow", 8593], ["\\downarrow", 8595], ["\\Uparrow", 8657], ["\\Downarrow", 8659], ["\\updownarrow", 8597], ["\\Updownarrow", 8661], ["\\hookrightarrow", 8618], ["\\hookleftarrow", 8617], ["\\rightharpoonup", 8640], ["\\leftharpoonup", 8636], ["\\rightharpoondown", 8641], ["\\leftharpoondown", 8637], ["\\searrow", 8600], ["\\nearrow", 8599], ["\\swarrow", 8601], ["\\nwarrow", 8598], ["\\originalof", 8886], ["\\laplace", 8886], ["\\imageof", 8887], ["\\Laplace", 8887]], "mrel");
de([["\\mapsfrom", 8612, "mrel"], ["\\Mapsfrom", 10502, "mrel"], ["\\MapsTo", 10503, "mrel"], ["\\Yup", 8516, "mord"], ["\\lightning", 8623, "mrel"], ["\\leftarrowtriangle", 8701, "mrel"], ["\\rightarrowtriangle", 8702, "mrel"], ["\\leftrightarrowtriangle", 8703, "mrel"], ["\\boxdot", 8865, "mbin"], ["\\bigtriangleup", 9651, "mbin"], ["\\bigtriangledown", 9661, "mbin"], ["\\boxbar", 9707, "mbin"], ["\\Lbag", 10181, "mopen"], ["\\Rbag", 10182, "mclose"], ["\\llbracket", 10214, "mopen"], ["\\rrbracket", 10215, "mclose"], ["\\longmapsfrom", 10235, "mrel"], ["\\Longmapsfrom", 10237, "mrel"], ["\\Longmapsto", 10238, "mrel"], ["\\boxslash", 10692, "mbin"], ["\\boxbslash", 10693, "mbin"], ["\\boxast", 10694, "mbin"], ["\\boxcircle", 10695, "mbin"], ["\\boxbox", 10696, "mbin"], ["\\fatsemi", 10783, "mop"], ["\\leftslice", 10918, "mrel"], ["\\rightslice", 10919, "mrel"], ["\\interleave", 10996, "mbin"], ["\\biginterleave", 11004, "mop"], ["\\sslash", 11005, "mbin"], ["\\talloblong", 11006, "mbin"]]);
de([["\\lbrace", 123, "mopen"], ["\\rbrace", 125, "mclose"], ["\\lparen", 40, "mopen"], ["\\rparen", 41, "mclose"], ["\\langle", 10216, "mopen"], ["\\rangle", 10217, "mclose"], ["\\lfloor", 8970, "mopen"], ["\\rfloor", 8971, "mclose"], ["\\lceil", 8968, "mopen"], ["\\rceil", 8969, "mclose"], ["\\vert", 8739], ["\\lvert", 8739, "mopen"], ["\\rvert", 8739, "mclose"], ["\\|", 8741], ["\\Vert", 8741], ["\\mVert", 8741], ["\\lVert", 8741, "mopen"], ["\\rVert", 8741, "mclose"], ["\\lbrack", 91, "mopen"], ["\\rbrack", 93, "mclose"], ["\\{", 123, "mopen"], ["\\}", 125, "mclose"], ["(", 40, "mopen"], [")", 41, "mclose"], ["[", 91, "mopen"], ["]", 93, "mclose"], ["\\ulcorner", 9484, "mopen", "ams"], ["\\urcorner", 9488, "mclose", "ams"], ["\\llcorner", 9492, "mopen", "ams"], ["\\lrcorner", 9496, "mclose", "ams"], ["\\lgroup", 10222, "mopen"], ["\\rgroup", 10223, "mclose"], ["\\lmoustache", 9136, "mopen"], ["\\rmoustache", 9137, "mclose"]]);
de([["\\dashrightarrow", 8674], ["\\dashleftarrow", 8672], ["\\Rrightarrow", 8667], ["\\Lleftarrow", 8666], ["\\leftrightarrows", 8646], ["\\rightleftarrows", 8644], ["\\curvearrowright", 8631], ["\\curvearrowleft", 8630], ["\\rightrightarrows", 8649], ["\\leftleftarrows", 8647], ["\\upuparrows", 8648], ["\\downdownarrows", 8650], ["\\vartriangle", 9651], ["\\triangleq", 8796], ["\\vartriangleleft", 8882], ["\\trianglelefteq", 8884], ["\\ntriangleleft", 8938], ["\\ntrianglelefteq", 8940], ["\\vartriangleright", 8883], ["\\trianglerighteq", 8885], ["\\ntriangleright", 8939], ["\\ntrianglerighteq", 8941], ["\\blacktriangleleft", 9664], ["\\blacktriangleright", 9654], ["\\leftarrowtail", 8610], ["\\rightarrowtail", 8611], ["\\looparrowright", 8620], ["\\looparrowleft", 8619], ["\\twoheadleftarrow", 8606], ["\\twoheadrightarrow", 8608], ["\\twoheadrightarrowtail", 10518], ["\\rightleftharpoons", 8652], ["\\leftrightharpoons", 8651], ["\\Rsh", 8625], ["\\Lsh", 8624], ["\\circlearrowright", 8635], ["\\circlearrowleft", 8634], ["\\restriction", 8638], ["\\upharpoonright", 8638], ["\\upharpoonleft", 8639], ["\\downharpoonright", 8642], ["\\downharpoonleft", 8643], ["\\rightsquigarrow", 8669], ["\\leadsto", 8669], ["\\leftrightsquigarrow", 8621], ["\\multimap", 8888], ["\\nleftarrow", 8602], ["\\nrightarrow", 8603], ["\\nRightarrow", 8655], ["\\nLeftarrow", 8653], ["\\nleftrightarrow", 8622], ["\\nLeftrightarrow", 8654], ["\\nvrightarrow", 8696], ["\\nvtwoheadrightarrow", 10496], ["\\nvrightarrowtail", 10516], ["\\nvtwoheadrightarrowtail", 10519], ["\\shortparallel", 8741], ["\\nless", 8814], ["\\nleqslant", 57360], ["\\lneq", 10887], ["\\lneqq", 8808], ["\\nleqq", 57361], ["\\lvertneqq", 57356], ["\\lnsim", 8934], ["\\lnapprox", 10889], ["\\nprec", 8832], ["\\npreceq", 8928], ["\\precnsim", 8936], ["\\precnapprox", 10937], ["\\nsim", 8769], ["\\nshortmid", 57350], ["\\nmid", 8740], ["\\nvdash", 8876], ["\\nvDash", 8877], ["\\ngtr", 8815], ["\\ngeqslant", 57359], ["\\ngeqq", 57358], ["\\gneq", 10888], ["\\gneqq", 8809], ["\\gvertneqq", 57357], ["\\gnsim", 8935], ["\\gnapprox", 10890], ["\\nsucc", 8833], ["\\nsucceq", 8929], ["\\succnsim", 8937], ["\\succnapprox", 10938], ["\\ncong", 8774], ["\\nshortparallel", 57351], ["\\nparallel", 8742], ["\\nVDash", 8879], ["\\nsupseteqq", 57368], ["\\supsetneq", 8843], ["\\varsupsetneq", 57371], ["\\supsetneqq", 10956], ["\\varsupsetneqq", 57369], ["\\nVdash", 8878], ["\\precneqq", 10933], ["\\succneqq", 10934], ["\\nsubseteqq", 57366], ["\\leqslant", 10877], ["\\geqslant", 10878], ["\\gtrsim", 8819], ["\\approxeq", 8778], ["\\thickapprox", 8776], ["\\lessapprox", 10885], ["\\gtrapprox", 10886], ["\\precapprox", 10935], ["\\succapprox", 10936], ["\\thicksim", 8764], ["\\succsim", 8831], ["\\precsim", 8830], ["\\backsim", 8765], ["\\eqsim", 8770], ["\\backsimeq", 8909], ["\\lesssim", 8818], ["\\nleq", 8816], ["\\ngeq", 8817], ["\\smallsmile", 8995], ["\\smallfrown", 8994], ["\\leqq", 8806], ["\\eqslantless", 10901], ["\\lll", 8920], ["\\lessgtr", 8822], ["\\lesseqgtr", 8922], ["\\lesseqqgtr", 10891], ["\\risingdotseq", 8787], ["\\fallingdotseq", 8786], ["\\subseteqq", 10949], ["\\Subset", 8912], ["\\sqsubset", 8847], ["\\preccurlyeq", 8828], ["\\curlyeqprec", 8926], ["\\vDash", 8872], ["\\Vvdash", 8874], ["\\bumpeq", 8783], ["\\Bumpeq", 8782], ["\\geqq", 8807], ["\\eqslantgtr", 10902], ["\\ggg", 8921], ["\\gtrless", 8823], ["\\gtreqless", 8923], ["\\gtreqqless", 10892], ["\\supseteqq", 10950], ["\\Supset", 8913], ["\\sqsupset", 8848], ["\\succcurlyeq", 8829], ["\\curlyeqsucc", 8927], ["\\Vdash", 8873], ["\\shortmid", 8739], ["\\between", 8812], ["\\pitchfork", 8916], ["\\varpropto", 8733], ["\\backepsilon", 8717], ["\\llless", 8920], ["\\gggtr", 8921], ["\\doteqdot", 8785], ["\\Doteq", 8785], ["\\eqcirc", 8790], ["\\circeq", 8791], ["\\therefore", 8756], ["\\because", 8757]], "mrel", "ams");
de([["+", 43], ["-", 8722], ["−", 8722], ["\\pm", 177], ["\\mp", 8723], ["*", 8727], ["\\times", 215], ["\\div", 247], ["\\divides", 8739], ["\\cdot", 8901], ["\\cap", 8745], ["\\cup", 8746], ["\\setminus", 8726], ["\\land", 8743], ["\\wedge", 8743], ["\\lor", 8744], ["\\vee", 8744], ["\\circ", 8728], ["\\bigcirc", 9711], ["\\bullet", 8729], ["\\oplus", 8853], ["\\ominus", 8854], ["\\otimes", 8855], ["\\odot", 8857], ["\\oslash", 8856], ["\\bigtriangleup", 9651], ["\\bigtriangledown", 9661], ["\\triangleleft", 9667], ["\\triangleright", 9657], ["\\And", 38], ["\\dagger", 8224], ["\\dag", 8224], ["\\ddag", 8225], ["\\ddagger", 8225], ["\\ast", 8727], ["\\star", 8902], ["\\bigstar", 9733], ["\\diamond", 8900]], "mbin");
de([["\\lhd", 8882], ["\\rhd", 8883], ["\\lessdot", 8918], ["\\gtrdot", 8919], ["\\ltimes", 8905], ["\\rtimes", 8906], ["\\leftthreetimes", 8907], ["\\rightthreetimes", 8908], ["\\intercal", 8890], ["\\dotplus", 8724], ["\\doublebarwedge", 10846], ["\\divideontimes", 8903], ["\\centerdot", 8901], ["\\smallsetminus", 8726], ["\\barwedge", 8892], ["\\veebar", 8891], ["\\nor", 8891], ["\\curlywedge", 8911], ["\\curlyvee", 8910], ["\\boxminus", 8863], ["\\boxplus", 8862], ["\\boxtimes", 8864], ["\\boxdot", 8865], ["\\circleddash", 8861], ["\\circledast", 8859], ["\\circledcirc", 8858], ["\\unlhd", 8884], ["\\unrhd", 8885]], "mbin", "ams");
de([["\\surd", 8730], ["\\infty", 8734], ["\\prime", 8242], ["\\doubleprime", 8243], ["\\angle", 8736], ["`", 8216], ["\\$", 36], ["\\%", 37], ["\\_", 95], ["\\alpha", 945], ["\\beta", 946], ["\\gamma", 947], ["\\delta", 948], ["\\epsilon", 1013], ["\\varepsilon", 949], ["\\zeta", 950], ["\\eta", 951], ["\\theta", 952], ["\\vartheta", 977], ["\\iota", 953], ["\\kappa", 954], ["\\varkappa", 1008, "mord", "ams"], ["\\lambda", 955], ["\\mu", 956], ["\\nu", 957], ["\\xi", 958], ["\\omicron", 111], ["\\pi", 960], ["\\varpi", 982], ["\\rho", 961], ["\\varrho", 1009], ["\\sigma", 963], ["\\varsigma", 962], ["\\tau", 964], ["\\phi", 981], ["\\varphi", 966], ["\\upsilon", 965], ["\\chi", 967], ["\\psi", 968], ["\\omega", 969], ["\\Gamma", 915], ["\\Delta", 916], ["\\Theta", 920], ["\\Lambda", 923], ["\\Xi", 926], ["\\Pi", 928], ["\\Sigma", 931], ["\\Upsilon", 933], ["\\Phi", 934], ["\\Psi", 936], ["\\Omega", 937], ["\\digamma", 989, "mord", "ams"], ["\\emptyset", 8709]]);
de([["=", 61], ["<", 60], ["\\lt", 60], [">", 62], ["\\gt", 62], ["\\le", 8804], ["\\leq", 8804], ["\\ge", 8805], ["\\geq", 8805], ["\\ll", 8810], ["\\gg", 8811], ["\\coloneq", 8788], ["\\coloneqq", 8788], ["\\colonequals", 8788], ["\\measeq", 8797], ["\\eqdef", 8798], ["\\questeq", 8799], [":", 58], ["\\cong", 8773], ["\\equiv", 8801], ["\\prec", 8826], ["\\preceq", 10927], ["\\succ", 8827], ["\\succeq", 10928], ["\\perp", 8869], ["\\propto", 8733], ["\\Colon", 8759], ["\\smile", 8995], ["\\frown", 8994], ["\\sim", 8764], ["\\doteq", 8784], ["\\bowtie", 8904], ["\\Join", 8904], ["\\asymp", 8781], ["\\sqsubseteq", 8849], ["\\sqsupseteq", 8850], ["\\approx", 8776], ["\\~", 126], ["\\leftrightarrow", 8596], ["\\Leftrightarrow", 8660], ["\\models", 8872], ["\\vdash", 8866], ["\\dashv", 8867], ["\\roundimplies", 10608], ["\\in", 8712], ["\\notin", 8713], ["\\ni", 8715], ["\\owns", 8715], ["\\subset", 8834], ["\\supset", 8835], ["\\subseteq", 8838], ["\\supseteq", 8839], ["\\differencedelta", 8710], ["\\mvert", 8739], ["\\parallel", 8741], ["\\simeq", 8771]], "mrel");
de([["\\lnot", 172], ["\\neg", 172], ["\\triangle", 9651], ["\\subsetneq", 8842], ["\\varsubsetneq", 57370], ["\\subsetneqq", 10955], ["\\varsubsetneqq", 57367], ["\\nsubset", 8836], ["\\nsupset", 8837], ["\\nsubseteq", 8840], ["\\nsupseteq", 8841]], "mrel", "ams");
de([["\\wp", 8472], ["\\aleph", 8501]]);
de([["\\blacktriangle", 9650], ["\\hslash", 8463], ["\\Finv", 8498], ["\\Game", 8513], ["\\eth", 240], ["\\mho", 8487], ["\\Bbbk", 107], ["\\yen", 165], ["\\square", 9633], ["\\Box", 9633], ["\\blacksquare", 9632], ["\\circledS", 9416], ["\\circledR", 174], ["\\triangledown", 9661], ["\\blacktriangledown", 9660], ["\\checkmark", 10003], ["\\diagup", 9585], ["\\measuredangle", 8737], ["\\sphericalangle", 8738], ["\\backprime", 8245], ["\\backdoubleprime", 8246], ["\\Diamond", 9674], ["\\lozenge", 9674], ["\\blacklozenge", 10731], ["\\varnothing", 8709], ["\\complement", 8705], ["\\maltese", 10016], ["\\beth", 8502], ["\\daleth", 8504], ["\\gimel", 8503]], "mord", "ams");
de([["\\ ", 160], ["~", 160]], "space");
x(["!", ",", ":", ";", ">", "enskip", "enspace", "quad", "qquad"], "", { createAtom: (e) => new Dn(e) });
x("space", "", { createAtom: (e) => new Dn(e) });
de([["\\colon", 58], ["\\cdotp", 8901], ["\\vdots", 8942, "mord"], ["\\ldotp", 46], [",", 44], [";", 59]], "mpunct");
de([["\\cdots", 8943], ["\\ddots", 8945], ["\\ldots", 8230], ["\\mathellipsis", 8230]], "minner");
de([["\\/", 47], ["|", 8739, "mord"], ["\\imath", 305], ["\\jmath", 567], ["\\degree", 176], ["'", 8242], ['"', 8221]]);
var Qm = "<mo>&#x2061;</mo>", vo = "<mo>&#8290;</mo>";
function Xa(e) {
  return e.replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function W(e, t) {
  return !e || !t.generateID ? "" : ` extid="${e}"`;
}
function W2(e, t, i) {
  var r, n, a, o, s, l, u, c, d, h, p;
  let m = !1;
  t = t ?? e.atoms.length;
  let y = "", w = "", g = e.atoms[e.index], k = (n = (r = g.style) == null ? void 0 : r.variant) != null ? n : "", A = (o = (a = g.style) == null ? void 0 : a.variantStyle) != null ? o : "", _ = "";
  if (k || A) {
    let K = ap(g.value, (s = g.style) == null ? void 0 : s.variant, (l = g.style) == null ? void 0 : l.variantStyle);
    if (K !== g.value) return e.index += 1, y = `<mi${W(g.id, i)}>${K}</mi>`, ft(y, e, i) || (e.mathML += y, e.lastType = "mi"), !0;
    _ = (u = { upnormal: "normal", boldnormal: "bold", italicmain: "italic", bolditalicmain: "bold-italic", "updouble-struck": "double-struck", "double-struck": "double-struck", boldfraktur: "bold-fraktur", calligraphic: "script", upcalligraphic: "script", script: "script", boldscript: "bold-script", boldcalligraphic: "bold-script", fraktur: "fraktur", "upsans-serif": "sans-serif", "boldsans-serif": "bold-sans-serif", "italicsans-serif": "sans-serif-italic", "bolditalicsans-serif": "sans-serif-bold-italic", monospace: "monospace" }[A + k]) != null ? u : "", _ = ` mathvariant="${_}"`;
  }
  let T = { "\\exponentialE": "&#x02147;", "\\imaginaryI": "&#x2148;", "\\differentialD": "&#x2146;", "\\capitalDifferentialD": "&#x2145;", "\\alpha": "&#x03b1;", "\\pi": "&#x03c0;", "\\infty": "&#x221e;", "\\forall": "&#x2200;", "\\nexists": "&#x2204;", "\\exists": "&#x2203;", "\\hbar": "ℏ", "\\cdotp": "⋅", "\\ldots": "…", "\\cdots": "⋯", "\\ddots": "⋱", "\\vdots": "⋮", "\\ldotp": "." };
  if (g.command === "!") return e.index += 1, y = "<mo>!</mo>", ft(y, e, i) || (e.mathML += y, e.lastType = "mo"), !0;
  if (T[g.command]) {
    e.index += 1;
    let K = `<mi${W(g.id, i)}${_}>${T[g.command]}</mi>`;
    return (e.lastType === "mi" || e.lastType === "mn" || e.lastType === "mtext" || e.lastType === "fence") && (K = vo + K), ft(K, e, i) || (e.mathML += K, e.lastType = "mi"), !0;
  }
  if (g.command === "\\operatorname") w = fr(g.body), e.index += 1;
  else if (k || A) for (; e.index < t && (g.type === "mord" || g.type === "macro") && !g.isDigit() && k === ((d = (c = g.style) == null ? void 0 : c.variant) != null ? d : "") && A === ((p = (h = g.style) == null ? void 0 : h.variantStyle) != null ? p : ""); ) w += fr([g]), e.index += 1, g = e.atoms[e.index];
  else (g.type === "mord" || g.type === "macro") && !g.isDigit() && (w += fr([g]), e.index += 1);
  if (w.length > 0) {
    m = !0, y = `<mi${_}>${w}</mi>`;
    let K = e.lastType;
    y.endsWith(">f</mi>") || y.endsWith(">g</mi>") ? (y += Qm, e.lastType = "applyfunction") : e.lastType = /^<mo>(.*)<\/mo>$/.test(y) ? "mo" : "mi", ft(y, e, i) || ((K === "mi" || K === "mn" || K === "mtext" || K === "fence") && (y = vo + y), e.mathML += y);
  }
  return m;
}
function ef(e) {
  return e.index < e.atoms.length && e.atoms[e.index].superscript && e.atoms[e.index].type === "subsup";
}
function tf(e) {
  let t = -1, i = e.index, r = !1, n = !1;
  for (; i < e.atoms.length && !r && !n; ) {
    let a = e.atoms[i];
    r = !a.isDigit(), n = !r && a.superscript !== void 0, i++;
  }
  return n && (t = i - 1), t;
}
function ft(e, t, i) {
  var r;
  let n = t.atoms[t.index - 1];
  if (!n) return !1;
  if (!n.superscript && !n.subscript) if (((r = t.atoms[t.index]) == null ? void 0 : r.type) === "subsup") n = t.atoms[t.index], t.index += 1;
  else return !1;
  let a = t.lastType;
  t.lastType = "";
  let o = j(n.superscript, i);
  t.lastType = "";
  let s = j(n.subscript, i);
  if (t.lastType = a, !o && !s) return !1;
  let l = "";
  return o && s ? l = `<msubsup>${e}${s}${o}</msubsup>` : o ? l = `<msup>${e}${o}</msup>` : s && (l = `<msub>${e}${s}</msub>`), t.mathML += l, t.lastType = "", !0;
}
function U2(e, t, i) {
  t = t ?? e.atoms.length;
  let r = e.index, n = "", a = tf(e);
  for (a >= 0 && a < t && (t = a); e.index < t && e.atoms[e.index].mode === "text"; ) n += e.atoms[e.index].value ? e.atoms[e.index].value : " ", e.index += 1;
  return n.length > 0 ? (n = `<mtext ${W(e.atoms[r].id, i)}>${n}</mtext>`, a < 0 && ef(e) && (a = e.index, e.index += 1), ft(n, e, i) || (e.mathML += n, e.lastType = "mtext"), !0) : !1;
}
function J2(e, t, i) {
  t = t ?? e.atoms.length;
  let r = e.index, n = "", a = tf(e);
  for (a >= 0 && a < t && (t = a); e.index < t && e.atoms[e.index].isDigit(); ) n += e.atoms[e.index].asDigit(), e.index += 1;
  return n.length <= 0 ? !1 : (n = "<mn" + W(e.atoms[r].id, i) + ">" + n + "</mn>", a < 0 && ef(e) && (a = e.index, e.index += 1), ft(n, e, i) || (e.mathML += n, e.lastType = "mn"), !0);
}
function X2(e, t, i) {
  let r = !1;
  t = t ?? e.atoms.length;
  let n = "", a = "";
  if (e.index < t && e.atoms[e.index].type === "mopen") {
    let o = !1, s = 0, l = e.index, u = -1, c = l + 1;
    for (; c < t && !o; ) e.atoms[c].type === "mopen" ? s += 1 : e.atoms[c].type === "mclose" && (s -= 1), s === -1 && (o = !0, u = c), c += 1;
    o && (n = "<mrow>", n += Di(e.atoms[l], i), n += j(e.atoms, i, l + 1, u), n += Di(e.atoms[u], i), n += "</mrow>", e.index = u + 1, (e.lastType === "mi" || e.lastType === "mn" || e.lastType === "mfrac" || e.lastType === "fence") && (e.mathML += vo), ft(n, e, i) && (r = !0, e.lastType = "", n = ""), a = "fence");
  }
  return n.length > 0 && (r = !0, e.mathML += n, e.lastType = a), r;
}
function G2(e, t, i) {
  let r = !1;
  t = t ?? e.atoms.length;
  let n = "", a = "", o = e.atoms[e.index];
  if (!o) return !1;
  let s = { "\\ne": "&ne;", "\\neq": "&ne;", "\\pm": "&#177;", "\\times": "&#215;", "\\colon": ":", "\\vert": "|", "\\Vert": "∥", "\\mid": "∣", "\\{": "{", "\\}": "}", "\\lbrace": "{", "\\rbrace": "}", "\\lbrack": "[", "\\rbrack": "]", "\\lparen": "(", "\\rparen": ")", "\\langle": "⟨", "\\rangle": "⟩", "\\lfloor": "⌊", "\\rfloor": "⌋", "\\lceil": "⌈", "\\rceil": "⌉" };
  if (s[o.command]) {
    e.index += 1;
    let l = `<mo${W(o.id, i)}>${s[o.command]}</mo>`;
    return ft(l, e, i) || (e.mathML += l, e.lastType = "mo"), !0;
  }
  if (e.index < t && (o.type === "mbin" || o.type === "mrel")) n += kl(e.atoms[e.index], i), e.index += 1, a = "mo";
  else if (e.index < t && (o.type === "mop" || o.type === "operator" || o.type === "extensible-symbol")) {
    if (o.subsupPlacement === "over-under" && (o.superscript || o.subscript)) {
      let l = Di(o, i);
      return o.superscript && o.subscript ? (n += "<munderover>" + l, n += j(o.subscript, i), n += j(o.superscript, i), n += "</munderover>") : o.superscript ? (n += "<mover>" + l, n += j(o.superscript, i), n += "</mover>") : o.subscript && (n += "<munder>" + l, n += j(o.subscript, i), n += "</munder>"), e.mathML += n, e.lastType = "mo", e.index += 1, !0;
    }
    {
      let l = e.atoms[e.index], u = l.value === "\\operatorname", c = u ? '<mi class="MathML-Unit"' + W(l.id, i) + ">" + fr(l.value) + "</mi>" : Di(l, i);
      n += c, !u && !/^<mo>(.*)<\/mo>$/.test(c) ? (n += Qm, a = "applyfunction") : a = u ? "mi" : "mo";
    }
    (e.lastType === "mi" || e.lastType === "mn") && !/^<mo>(.*)<\/mo>$/.test(n) && (n = vo + n), e.index += 1;
  }
  return n.length > 0 && (r = !0, ft(n, e, i) || (e.mathML += n, e.lastType = a)), r;
}
function j(e, t, i, r) {
  t != null || (t = {});
  let n = { atoms: [], index: i ?? 0, mathML: "", lastType: "" };
  if (typeof e == "number" || typeof e == "boolean") n.mathML = e.toString();
  else if (typeof e == "string") n.mathML = e;
  else if (e instanceof v) n.mathML = kl(e, t);
  else if (Array.isArray(e)) {
    n.atoms = e;
    let a = 0;
    for (r = r || (e ? e.length : 0); n.index < r; ) if (U2(n, r, t) || J2(n, r, t) || W2(n, r, t) || G2(n, r, t) || X2(n, r, t)) a += 1;
    else if (n.index < r) {
      let o = kl(n.atoms[n.index], t);
      n.lastType === "mn" && o.length > 0 && n.atoms[n.index].type === "genfrac" && (o = "<mo>&#x2064;</mo>" + o), n.atoms[n.index].type === "genfrac" ? n.lastType = "mfrac" : n.lastType = "", n.index += 1, ft(o, n, t) ? a += 1 : o.length > 0 && (n.mathML += o, a += 1);
    }
    a > 1 && (n.mathML = "<mrow>" + n.mathML + "</mrow>");
  }
  return n.mathML;
}
function Di(e, t) {
  let i = "", r = fr(e.value);
  return r && (i = "<mo" + W(e.id, t) + ">" + r + "</mo>"), i;
}
function fr(e) {
  if (!e) return "";
  if (typeof e == "string") return Xa(e);
  if (!Array.isArray(e) && typeof e.body == "string") return Xa(e.body);
  let t = "";
  for (let i of e) typeof i.value == "string" && (t += i.value);
  return Xa(t);
}
function kl(e, t) {
  var i, r, n, a, o, s, l, u, c, d, h, p, m, y, w, g, k, A, _, T, K, z;
  if (e.mode === "text") return `<mi${W(e.id, t)}>${e.value}</mi>`;
  let O = { widehat: "^", widecheck: "ˇ", widetilde: "~", utilde: "~", overleftarrow: "←", underleftarrow: "←", xleftarrow: "←", longleftarrow: "←", overrightarrow: "→", underrightarrow: "→", xrightarrow: "→", longrightarrow: "→", underbrace: "⏟", overbrace: "⏞", overgroup: "⏠", undergroup: "⏡", overleftrightarrow: "↔", underleftrightarrow: "↔", xleftrightarrow: "↔", Overrightarrow: "⇒", xRightarrow: "⇒", overleftharpoon: "↼", xleftharpoonup: "↼", overrightharpoon: "⇀", xrightharpoonup: "⇀", xLeftarrow: "⇐", xLeftrightarrow: "⇔", xhookleftarrow: "↩", xhookrightarrow: "↪", xmapsto: "↦", xrightharpoondown: "⇁", xleftharpoondown: "↽", xrightleftharpoons: "⇌", longrightleftharpoons: "⇌", xleftrightharpoons: "⇋", xtwoheadleftarrow: "↞", xtwoheadrightarrow: "↠", xlongequal: "=", xtofrom: "⇄", xleftrightarrows: "⇄", xRightleftharpoons: "⇌", longRightleftharpoons: "⇌", xLeftrightharpoons: "⇋", longLeftrightharpoons: "⇋" }, ne = { "\\!": -3 / 18, "\\ ": 6 / 18, "\\,": 3 / 18, "\\:": 4 / 18, "\\>": 4 / 18, "\\;": 5 / 18, "\\enspace": 0.5, "\\quad": 1, "\\qquad": 2, "\\enskip": 0.5 }, C = "", bt = "", he, je, At, Le, xe, U, { command: te } = e;
  if (e.command === "\\error") return `<merror${W(e.id, t)}>${j(e.body, t)}</merror>`;
  let oe = { "\\vert": "|", "\\Vert": "∥", "\\mid": "∣", "\\lbrack": "[", "\\rbrack": "]", "\\{": "{", "\\}": "}", "\\lbrace": "{", "\\rbrace": "}", "\\lparen": "(", "\\rparen": ")", "\\langle": "⟨", "\\rangle": "⟩", "\\lfloor": "⌊", "\\rfloor": "⌋", "\\lceil": "⌈", "\\rceil": "⌉" }, Qe = { "\\vec": "&#x20d7;", "\\acute": "&#x00b4;", "\\grave": "&#x0060;", "\\dot": "&#x02d9;", "\\ddot": "&#x00a8;", "\\tilde": "&#x007e;", "\\bar": "&#x00af;", "\\breve": "&#x02d8;", "\\check": "&#x02c7;", "\\hat": "&#x005e;" };
  switch (e.type) {
    case "first":
      break;
    case "group":
    case "root":
      C = j(e.body, t);
      break;
    case "array":
      if ((e.leftDelim && e.leftDelim !== "." || e.rightDelim && e.rightDelim !== ".") && (C += "<mrow>", e.leftDelim && e.leftDelim !== "." && (C += "<mo>" + (oe[e.leftDelim] || e.leftDelim) + "</mo>")), C += "<mtable", e.colFormat) {
        for (C += ' columnalign="', At = 0; At < e.colFormat.length; At++) e.colFormat[At].align && (C += { l: "left", c: "center", r: "right" }[e.colFormat[At].align] + " ");
        C += '"';
      }
      for (C += ">", je = 0; je < e.array.length; je++) {
        for (C += "<mtr>", he = 0; he < e.array[je].length; he++) C += "<mtd>" + j(e.array[je][he], t) + "</mtd>";
        C += "</mtr>";
      }
      C += "</mtable>", (e.leftDelim && e.leftDelim !== "." || e.rightDelim && e.rightDelim !== ".") && (e.rightDelim && e.rightDelim !== "." && (C += "<mo>" + (oe[e.leftDelim] || e.rightDelim) + "</mo>"), C += "</mrow>");
      break;
    case "genfrac":
      (e.leftDelim || e.rightDelim) && (C += "<mrow>"), e.leftDelim && e.leftDelim !== "." && (C += "<mo" + W(e.id, t) + ">" + (oe[e.leftDelim] || e.leftDelim) + "</mo>"), e.hasBarLine ? (C += "<mfrac>", C += j(e.above, t) || "<mi>&nbsp;</mi>", C += j(e.below, t) || "<mi>&nbsp;</mi>", C += "</mfrac>") : (C += "<mtable" + W(e.id, t) + ">", C += "<mtr>" + j(e.above, t) + "</mtr>", C += "<mtr>" + j(e.below, t) + "</mtr>", C += "</mtable>"), e.rightDelim && e.rightDelim !== "." && (C += "<mo" + W(e.id, t) + ">" + (oe[e.rightDelim] || e.rightDelim) + "</mo>"), (e.leftDelim || e.rightDelim) && (C += "</mrow>");
      break;
    case "surd":
      e.hasEmptyBranch("above") ? (C += "<msqrt" + W(e.id, t) + ">", C += j(e.body, t), C += "</msqrt>") : (C += "<mroot" + W(e.id, t) + ">", C += j(e.body, t), C += j(e.above, t), C += "</mroot>");
      break;
    case "leftright":
      let et = e, tt = et.leftDelim;
      C = "<mrow>", tt && tt !== "." && (C += `<mo${W(e.id, t)}>${(i = oe[tt]) != null ? i : tt}</mo>`), e.body && (C += j(e.body, t));
      let it = et.matchingRightDelim();
      it && it !== "." && (C += `<mo${W(e.id, t)}>${(r = oe[it]) != null ? r : it}</mo>`), C += "</mrow>";
      break;
    case "sizeddelim":
    case "delim":
      C += `<mo${W(e.id, t)}>${oe[e.value] || e.value}</mo>`;
      break;
    case "accent":
      C += '<mover accent="true"' + W(e.id, t) + ">", C += j(e.body, t), C += "<mo>" + (Qe[te] || e.accent) + "</mo>", C += "</mover>";
      break;
    case "line":
    case "overlap":
      break;
    case "overunder":
      xe = e.above, Le = e.below, (e.svgAbove || xe) && (e.svgBelow || Le) ? U = e.body : xe && xe.length > 0 ? (U = e.body, (a = (n = e.body) == null ? void 0 : n[0]) != null && a.below ? (Le = e.body[0].below, U = e.body[0].body) : ((s = (o = e.body) == null ? void 0 : o[0]) == null ? void 0 : s.type) === "first" && (u = (l = e.body) == null ? void 0 : l[1]) != null && u.below && (Le = e.body[1].below, U = e.body[1].body)) : Le && Le.length > 0 && (U = e.body, (d = (c = e.body) == null ? void 0 : c[0]) != null && d.above ? (xe = e.body[0].above, U = e.body[0].body) : ((p = (h = e.body) == null ? void 0 : h[0]) == null ? void 0 : p.type) === "first" && (y = (m = e.body) == null ? void 0 : m[1]) != null && y.above && (xe = e.body[1].overscript, U = e.body[1].body)), (e.svgAbove || xe) && (e.svgBelow || Le) ? (C += `<munderover ${W(e.id, t)}>`, C += (w = O[e.svgBody]) != null ? w : j(U, t), C += (g = O[e.svgBelow]) != null ? g : j(Le, t), C += (k = O[e.svgAbove]) != null ? k : j(xe, t), C += "</munderover>") : e.svgAbove || xe ? (C += `<mover ${W(e.id, t)}>` + ((A = O[e.svgBody]) != null ? A : j(U, t)), C += (_ = O[e.svgAbove]) != null ? _ : j(xe, t), C += "</mover>") : (e.svgBelow || Le) && (C += `<munder ${W(e.id, t)}>` + ((T = O[e.svgBody]) != null ? T : j(U, t)), C += (K = O[e.svgBelow]) != null ? K : j(Le, t), C += "</munder>");
      break;
    case "placeholder":
      C += "?";
      break;
    case "mord": {
      C = typeof e.value == "string" ? e.value : te, te === "\\char" ? C = "&#x" + ("000000" + e.args[0].number.toString(16)).slice(-4) + ";" : C.length > 0 && C.startsWith("\\") && (typeof e.value == "string" && e.value.charCodeAt(0) > 255 ? C = "&#x" + ("000000" + e.value.charCodeAt(0).toString(16)).slice(-4) + ";" : typeof e.value == "string" ? C = e.value.charAt(0) : (console.error("Did not expect this"), C = ""));
      let Ve = /\d/.test(C) ? "mn" : "mi";
      C = `<${Ve}${W(e.id, t)}>${Xa(C)}</${Ve}>`;
      break;
    }
    case "mbin":
    case "mrel":
    case "minner":
      C = Di(e, t);
      break;
    case "mpunct":
      C = '<mo separator="true"' + W(e.id, t) + ">" + te + "</mo>";
      break;
    case "mop":
    case "operator":
    case "extensible-symbol":
      e.body !== "​" && (C = "<mo" + W(e.id, t) + ">", C += te === "\\operatorname" ? e.body : te || e.body, C += "</mo>");
      break;
    case "box":
      C = '<menclose notation="box"', e.backgroundcolor && (C += ' mathbackground="' + e.backgroundcolor + '"'), C += W(e.id, t) + ">" + j(e.body, t) + "</menclose>";
      break;
    case "spacing":
      C += '<mspace width="' + ((z = ne[te]) != null ? z : 0) + 'em"/>';
      break;
    case "enclose":
      C = '<menclose notation="';
      for (let Ve in e.notation) Object.prototype.hasOwnProperty.call(e.notation, Ve) && e.notation[Ve] && (C += bt + Ve, bt = " ");
      C += W(e.id, t) + '">' + j(e.body, t) + "</menclose>";
      break;
    case "prompt":
      C = '<menclose notation="roundexbox""">' + j(e.body, t) + "</menclose>";
      break;
    case "space":
      C += "&nbsp;";
      break;
    case "subsup":
      break;
    case "phantom":
      break;
    case "composition":
      break;
    case "rule":
      break;
    case "chem":
      break;
    case "mopen":
      C += Di(e, t);
      break;
    case "mclose":
      C += Di(e, t);
      break;
    case "macro":
      {
        let Ve = e.command + fr(e.macroArgs);
        Ve && (C += `<mo ${W(e.id, t)}>${Ve}</mo>`);
      }
      break;
    case "latexgroup":
      C += j(e.body, t);
      break;
    case "latex":
      C += "<mtext" + W(e.id, t) + ">" + e.value + "</mtext>";
      break;
    case "tooltip":
      C += j(e.body, t);
      break;
    case "text":
      C += `<mtext ${W(e.id, t)}x>${e.value}</mtext>`;
      break;
    default:
      if (e.command === "\\displaystyle") return `<mrow ${W(e.id, t)} displaystyle="true">${j(e.body, t)}</mrow>`;
      if (e.command === "\\textstyle") return `<mrow ${W(e.id, t)} displaystyle="false">${j(e.body, t)}</mrow>`;
      console.info("Unexpected element in conversion to MathML:", e);
  }
  return C;
}
var Yi = { "\\alpha": "alpha ", "\\mu": "mew ", "\\sigma": "sigma ", "\\pi": "pie ", "\\imaginaryI": "imaginary eye ", "\\imaginaryJ": "imaginary jay ", "\\sum": "Summation ", "\\prod": "Product ", "+": "plus ", "-": "minus ", ";": '<break time="150ms"/> semi-colon <break time="150ms"/>', ",": '<break time="150ms"/> comma  <break time="150ms"/>', "|": '<break time="150ms"/>Vertical bar<break time="150ms"/>', "(": '<break time="150ms"/>Open paren. <break time="150ms"/>', ")": '<break time="150ms"/> Close paren. <break time="150ms"/>', "=": "equals ", "<": "is less than ", "\\lt": "is less than ", "<=": "is less than or equal to ", "\\le": "is less than or equal to ", "\\gt": "is greater than ", ">": "is greater than ", "\\pm": "plus or minus", "\\mp": "minus or plus", "\\ge": "is greater than or equal to ", "\\geq": "is greater than or equal to ", "\\leq": "is less than or equal to ", "\\ne": "is not equal to ", "\\neq": "is not equal to ", "!": "factorial ", "\\sin": "sine ", "\\cos": "cosine ", "​": "", "−": "minus ", ":": '<break time="150ms"/> such that <break time="200ms"/> ', "\\colon": '<break time="150ms"/> such that <break time="200ms"/> ', "\\hbar": "etch bar ", "\\iff": '<break time="200ms"/>if, and only if, <break time="200ms"/>', "\\Longleftrightarrow": '<break time="200ms"/>if, and only if, <break time="200ms"/>', "\\land": "and ", "\\lor": "or ", "\\neg": "not ", "\\div": "divided by ", "\\forall": "for all ", "\\exists": "there exists ", "\\nexists": "there does not exists ", "\\in": "element of ", "\\N": 'the set <break time="150ms"/><say-as interpret-as="character">n</say-as>', "\\C": 'the set <break time="150ms"/><say-as interpret-as="character">c</say-as>', "\\Z": 'the set <break time="150ms"/><say-as interpret-as="character">z</say-as>', "\\Q": 'the set <break time="150ms"/><say-as interpret-as="character">q</say-as>', "\\infty": "infinity ", "\\nabla": "nabla ", "\\partial": "partial derivative of ", "\\cdot": "times ", "\\cdots": "dot dot dot ", "\\Rightarrow": "implies ", "\\lparen": '<break time="150ms"/>open paren<break time="150ms"/>', "\\rparen": '<break time="150ms"/>close paren<break time="150ms"/>', "\\lbrace": '<break time="150ms"/>open brace<break time="150ms"/>', "\\{": '<break time="150ms"/>open brace<break time="150ms"/>', "\\rbrace": '<break time="150ms"/>close brace<break time="150ms"/>', "\\}": '<break time="150ms"/>close brace<break time="150ms"/>', "\\langle": '<break time="150ms"/>left angle bracket<break time="150ms"/>', "\\rangle": '<break time="150ms"/>right angle bracket<break time="150ms"/>', "\\lfloor": '<break time="150ms"/>open floor<break time="150ms"/>', "\\rfloor": '<break time="150ms"/>close floor<break time="150ms"/>', "\\lceil": '<break time="150ms"/>open ceiling<break time="150ms"/>', "\\rceil": '<break time="150ms"/>close ceiling<break time="150ms"/>', "\\vert": '<break time="150ms"/>vertical bar<break time="150ms"/>', "\\mvert": '<break time="150ms"/>divides<break time="150ms"/>', "\\lvert": '<break time="150ms"/>left vertical bar<break time="150ms"/>', "\\rvert": '<break time="150ms"/>right vertical bar<break time="150ms"/>', "\\lbrack": '<break time="150ms"/> open square bracket <break time="150ms"/>', "\\rbrack": '<break time="150ms"/> close square bracket <break time="150ms"/>', mm: "millimeters", cm: "centimeters", km: "kilometers", kg: "kilograms" }, Ns = { array: "array", matrix: "matrix", pmatrix: "parenthesis matrix", bmatrix: "square brackets matrix", Bmatrix: "braces matrix", vmatrix: "bars matrix", Vmatrix: "double bars matrix", "matrix*": "matrix", smallmatrix: "small matrix" };
function Z2(e) {
  let t = "";
  return e.startsWith("\\") && (t = " " + e.replace("\\", "") + " "), t;
}
function Ur(e) {
  let t = 0;
  if (Me(e)) for (let i of e) i.type !== "first" && (t += 1);
  return t === 1;
}
function Y2(e) {
  if (Me(e)) {
    for (let t of e) if (t.type !== "first" && t.id) return t.id.toString();
  }
  return "";
}
function rh(e) {
  let t = "";
  if (Me(e)) for (let i of e) i.type !== "first" && typeof i.value == "string" && (t += i.value);
  return t;
}
function Q2(e) {
  return e ? e.map((t) => t.value).join("") : "";
}
function P(e, t) {
  var i, r, n, a, o;
  function s(c) {
    return globalThis.MathfieldElement.textToSpeechMarkup ? /[a-z]/.test(c) ? ` <say-as interpret-as="character">${c}</say-as>` : /[A-Z]/.test(c) ? `capital <say-as interpret-as="character">${c.toLowerCase()}</say-as>` : c : /[a-z]/.test(c) ? " '" + c.toUpperCase() + "'" : /[A-Z]/.test(c) ? " 'capital " + c.toUpperCase() + "'" : c;
  }
  function l(c) {
    return "<emphasis>" + c + "</emphasis>";
  }
  if (!t) return "";
  let u = "";
  if (Me(t)) {
    let c = !1, d = !1;
    for (let h = 0; h < t.length; h++) t[h].type !== "first" && (t[h].mode !== "text" && (d = !1), h < t.length - 2 && t[h].type === "mopen" && t[h + 2].type === "mclose" && t[h + 1].type === "mord" ? (u += " of ", u += l(P(e, t[h + 1])), h += 2) : t[h].mode === "text" ? d ? u += (i = t[h].value) != null ? i : " " : (d = !0, u += P("text", t[h])) : t[h].isDigit() ? c ? u += t[h].asDigit() : (c = !0, u += P(e, t[h])) : (c = !1, u += P(e, t[h])));
  } else if (t.mode === "text") t.id && e === "math" && (u += '<mark name="' + t.id.toString() + '"/>'), u += t.value;
  else {
    t.id && e === "math" && (u += '<mark name="' + t.id.toString() + '"/>');
    let c = "", d = "", h = "", p = !1, { command: m } = t;
    switch (m) {
      case "\\vec":
        return "vector " + P(e, t.body);
      case "\\acute":
        return P(e, t.body) + " acute";
      case "\\grave":
        return P(e, t.body) + " grave";
      case "\\dot":
        return "dot over" + P(e, t.body);
      case "\\ddot":
        return "double dot over" + P(e, t.body);
      case "\\mathring":
        return "ring over" + P(e, t.body);
      case "\\tilde":
      case "\\widetilde":
        return "tilde over" + P(e, t.body);
      case "\\bar":
        return P(e, t.body) + " bar";
      case "\\breve":
        return P(e, t.body) + " breve";
      case "\\check":
      case "\\widecheck":
        return "check over " + P(e, t.body);
      case "\\hat":
      case "\\widehat":
        return "hat over" + P(e, t.body);
      case "\\overarc":
      case "\\overparen":
      case "\\wideparen":
        return "arc over " + P(e, t.body);
      case "\\underarc":
      case "\\underparen":
        return "arc under " + P(e, t.body);
    }
    switch (t.type) {
      case "prompt":
        let y = t.body.length > 1 ? 'start input . <break time="500ms"/> ' + P(e, t.body) + '. <break time="500ms"/> end input' : "blank";
        u += ' <break time="300ms"/> ' + y + '. <break time="700ms"/>' + ((r = t.correctness) != null ? r : "") + ' . <break time="700ms"/> ';
        break;
      case "array":
        let w = t.array, g = t.environmentName;
        if (Object.keys(Ns).includes(g)) {
          u += ` begin ${Ns[g]} `;
          for (let _ = 0; _ < w.length; _++) {
            _ > 0 && (u += ","), u += ` row ${_ + 1} `;
            for (let T = 0; T < w[_].length; T++) T > 0 && (u += ","), u += ` column ${T + 1}: `, u += P("math", w[_][T]);
          }
          u += ` end ${Ns[g]} `;
        }
        break;
      case "group":
        m === "\\ne" ? u += " not equal " : (m === "\\not" && (u += " not "), u += P("math", t.body));
        break;
      case "root":
        u += P("math", t.body);
        break;
      case "genfrac":
        if (c = P("math", t.above), d = P("math", t.below), Ur(t.above) && Ur(t.below)) {
          let _ = { "1/2": " half ", "1/3": " one third ", "2/3": " two third", "1/4": " one quarter ", "3/4": " three quarter ", "1/5": " one fifth ", "2/5": " two fifths ", "3/5": " three fifths ", "4/5": " four fifths ", "1/6": " one sixth ", "5/6": " five sixths ", "1/8": " one eight ", "3/8": " three eights ", "5/8": " five eights ", "7/8": " seven eights ", "1/9": " one ninth ", "2/9": " two ninths ", "4/9": " four ninths ", "5/9": " five ninths ", "7/9": " seven ninths ", "8/9": " eight ninths " }[rh(t.above) + "/" + rh(t.below)];
          _ ? u = _ : u += c + " over " + d;
        } else u += ' the fraction <break time="150ms"/>' + c + ' over <break time="150ms"/>' + d + '.<break time="150ms"/> End fraction.<break time="150ms"/>';
        break;
      case "surd":
        if (h = P("math", t.body), t.hasEmptyBranch("above")) u += Ur(t.body) ? " the square root of " + h + " , " : ' the square root of <break time="200ms"/>' + h + '. <break time="200ms"/> End square root';
        else {
          let _ = P("math", t.above);
          _ = _.trim();
          let T = _.replace(/<mark([^/]*)\/>/g, "");
          T === "3" ? u += ' the cube root of <break time="200ms"/>' + h + '. <break time="200ms"/> End cube root' : T === "n" ? u += ' the nth root of <break time="200ms"/>' + h + '. <break time="200ms"/> End root' : u += ' the root with index: <break time="200ms"/>' + _ + ', of <break time="200ms"/>' + h + '. <break time="200ms"/> End root';
        }
        break;
      case "leftright":
        {
          let _ = t;
          u += (n = _.leftDelim ? Yi[_.leftDelim] : void 0) != null ? n : _.leftDelim, u += P("math", t.body), u += (a = _.rightDelim ? Yi[_.rightDelim] : void 0) != null ? a : _.rightDelim;
        }
        break;
      case "rule":
        break;
      case "overunder":
        break;
      case "overlap":
        break;
      case "macro":
        let k = m.replace(/^\\/g, ""), A = Gl()[k];
        A && (A != null && A.expand ? u += P("math", t.body) : u += `${k} `);
        break;
      case "placeholder":
        u += "placeholder ";
        break;
      case "delim":
      case "sizeddelim":
      case "mord":
      case "minner":
      case "mbin":
      case "mrel":
      case "mpunct":
      case "mopen":
      case "mclose": {
        if (m === "\\mathbin" || m === "\\mathrel" || m === "\\mathopen" || m === "\\mathclose" || m === "\\mathpunct" || m === "\\mathord" || m === "\\mathinner") {
          u = P(e, t.body);
          break;
        }
        let _ = t.isDigit() ? t.asDigit() : t.value, T = t.command;
        if ((t.type === "delim" || t.type === "sizeddelim") && (T = t.value, _ = T), e === "text") u += _;
        else {
          if (t.type === "mbin" && (u += '<break time="150ms"/>'), _) {
            let K = Yi[_] || (T ? Yi[T.trim()] : "");
            if (K) u += " " + K;
            else {
              let z = T ? Z2(T.trim()) : "";
              u += z || s(_);
            }
          } else u += P("math", t.body);
          t.type === "mbin" && (u += '<break time="150ms"/>');
        }
        break;
      }
      case "mop":
      case "operator":
      case "extensible-symbol":
        if (t.value !== "​") {
          let _ = t.command;
          if (_ === "\\sum") if (!t.hasEmptyBranch("superscript") && !t.hasEmptyBranch("subscript")) {
            let T = P("math", t.superscript);
            T = T.trim();
            let K = P("math", t.subscript);
            K = K.trim(), u += ' the summation from <break time="200ms"/>' + K + '<break time="200ms"/> to  <break time="200ms"/>' + T + '<break time="200ms"/> of <break time="150ms"/>', p = !0;
          } else if (t.hasEmptyBranch("subscript")) u += " the summation of";
          else {
            let T = P("math", t.subscript);
            T = T.trim(), u += ' the summation from <break time="200ms"/>' + T + '<break time="200ms"/> of <break time="150ms"/>', p = !0;
          }
          else if (_ === "\\prod") if (!t.hasEmptyBranch("superscript") && !t.hasEmptyBranch("subscript")) {
            let T = P("math", t.superscript);
            T = T.trim();
            let K = P("math", t.subscript);
            K = K.trim(), u += ' the product from <break time="200ms"/>' + K + '<break time="200ms"/> to <break time="200ms"/>' + T + '<break time="200ms"/> of <break time="150ms"/>', p = !0;
          } else if (t.hasEmptyBranch("subscript")) u += " the product  of ";
          else {
            let T = P("math", t.subscript);
            T = T.trim(), u += ' the product from <break time="200ms"/>' + T + '<break time="200ms"/> of <break time="150ms"/>', p = !0;
          }
          else if (_ === "\\int") if (!t.hasEmptyBranch("superscript") && !t.hasEmptyBranch("subscript")) {
            let T = P("math", t.superscript);
            T = T.trim();
            let K = P("math", t.subscript);
            K = K.trim(), u += ' the integral from <break time="200ms"/>' + l(K) + '<break time="200ms"/> to <break time="200ms"/>' + l(T) + ' <break time="200ms"/> of ', p = !0;
          } else u += ' the integral of <break time="200ms"/> ';
          else if (_ === "\\operatorname" || _ === "\\operatorname*") u += Q2(t.body) + " ";
          else if (typeof t.value == "string") {
            let T = (o = Yi[t.value]) != null ? o : t.command ? Yi[t.command] : void 0;
            u += T || " " + t.value;
          } else t.command && (t.command === "\\mathop" ? u += P("math", t.body) : u += t.command.startsWith("\\") ? " " + t.command.slice(1) : " " + t.command);
        }
        break;
      case "enclose":
        h = P("math", t.body), u += " crossed out " + h + ". End crossed out.";
        break;
    }
    if (!p && !t.hasEmptyBranch("superscript")) {
      let y = P(e, t.superscript);
      y = y.trim();
      let w = y.replace(/<[^>]*>/g, "");
      if (Ur(t.superscript)) {
        if (e === "math") {
          let g = Y2(t.superscript);
          g && (u += '<mark name="' + g + '"/>');
        }
        w === "′" ? u += " prime " : w === "2" ? u += " squared " : w === "3" ? u += " cubed " : Number.isNaN(Number.parseInt(w)) ? u += " to the " + y + "; " : u += ' to the <say-as interpret-as="ordinal">' + w + "</say-as> power; ";
      } else Number.isNaN(Number.parseInt(w)) ? u += " raised to the " + y + "; " : u += ' raised to the <say-as interpret-as="ordinal">' + w + "</say-as> power; ";
    }
    if (!p && !t.hasEmptyBranch("subscript")) {
      let y = P("math", t.subscript);
      y = y.trim(), u += Ur(t.subscript) ? " sub " + y : " subscript " + y + ". End subscript. ";
    }
  }
  return u;
}
function hn(e) {
  var t, i;
  let r = globalThis.MathfieldElement;
  if (r.textToSpeechRules === "sre" && ("sre" in window || "SRE" in window)) {
    let a = j(e);
    if (a) {
      r.textToSpeechMarkup && (r.textToSpeechRulesOptions = (t = r.textToSpeechRulesOptions) != null ? t : {}, r.textToSpeechRulesOptions = b(f({}, r.textToSpeechRulesOptions), { markup: r.textToSpeechMarkup }), r.textToSpeechRulesOptions.markup === "ssml" && (r.textToSpeechRulesOptions = b(f({}, r.textToSpeechRulesOptions), { markup: "ssml_step" })), r.textToSpeechRulesOptions = b(f({}, r.textToSpeechRulesOptions), { rate: r.speechEngineRate }));
      let o = (i = window.SRE) != null ? i : globalThis.sre.System.getInstance();
      r.textToSpeechRulesOptions && o.setupEngine(r.textToSpeechRulesOptions);
      let s = "";
      try {
        s = o.toSpeech(a);
      } catch (l) {
        console.error("MathLive 0.98.6: `SRE.toSpeech()` runtime error", l);
      }
      return s;
    }
    return "";
  }
  let n = P("math", e);
  if (r.textToSpeechMarkup === "ssml") {
    let a = "";
    r.speechEngineRate && (a = '<prosody rate="' + r.speechEngineRate + '">'), n = '<?xml version="1.0"?><speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US"><amazon:auto-breaths>' + a + "<p><s>" + n + "</s></p>" + (a ? "</prosody>" : "") + "</amazon:auto-breaths></speak>";
  } else r.textToSpeechMarkup === "mac" && Cr() === "macos" ? n = n.replace(/<mark([^/]*)\/>/g, "").replace(/<emphasis>/g, "[[emph+]]").replace(/<\/emphasis>/g, "").replace(/<break time="(\d*)ms"\/>/g, "[[slc $1]]").replace(/<say-as[^>]*>/g, "").replace(/<\/say-as>/g, "") : n = n.replace(/<[^>]*>/g, "").replace(/\s{2,}/g, " ");
  return n;
}
var Jr = { "\\ne": "≠", "\\neq": "≠", "−": "-", "-": "-", "\\alpha": "alpha", "\\beta": "beta", "\\gamma": "gamma", "\\delta": "delta", "\\epsilon": "epsilon", "\\varepsilon": "varepsilon", "\\zeta": "zeta", "\\eta": "eta", "\\theta": "theta", "\\vartheta": "vartheta", "\\iota": "iota", "\\kappa": "kappa", "\\lambda": "lambda", "\\mu": "mu", "\\nu": "nu", "\\xi": "xi", "\\pi": "pi", "\\rho": "rho", "\\sigma": "sigma", "\\tau": "tau", "\\upsilon": "upsilon", "\\phi": "phi", "\\varphi": "varphi", "\\chi": "chi", "\\psi": "psi", "\\omega": "omega", "\\Gamma": "Gamma", "\\Delta": "Delta", "\\Theta": "Theta", "\\Lambda": "Lambda", "\\Xi": "Xi", "\\Pi": "Pi", "\\Sigma": "Sigma", "\\Phi": "Phi", "\\Psi": "Psi", "\\Omega": "Omega", "\\exponentialE": "e", "\\imaginaryI": "i", "\\imaginaryJ": "j", "\\!": " ", "\\,": " ", "\\:": " ", "\\>": " ", "\\;": " ", "\\enskip": " ", "\\enspace": " ", "\\qquad": " ", "\\quad": " ", "\\infty": "oo", "\\R": "RR", "\\N": "NN", "\\Z": "ZZ", "\\Q": "QQ", "\\C": "CC", "\\emptyset": "O/", "\\varnothing": "O/", "\\varDelta": "Delta", "\\varTheta": "Theta", "\\varLambda": "Lambda", "\\varXi": "Xi", "\\varPi": "Pi", "\\varSigma": "Sigma", "\\varUpsilon": "Upsilon", "\\varPhi": "Phi", "\\varPsi": "Psi", "\\varOmega": "Omega" }, Xr = { "\\pm": "+-", "\\colon": ":", "\\vert": "|", "\\Vert": "||", "\\mid": "|", "\\lbrack": "[", "\\rbrack": "]", "\\lbrace": "{", "\\rbrace": "}", "\\lparen": "(", "\\rparen": ")", "\\langle": "(:", "\\rangle": ":)", "\\sum": " sum ", "\\prod": " prod ", "\\bigcap": " nnn ", "\\bigcup": " uuu ", "\\int": " int ", "\\oint": " oint ", "\\ge": ">=", "\\le": "<=", "\\ne": "!=", "\\neq": "!=", "\\lt": "<", "\\gt": ">", "\\gets": "<-", "\\to": "->", "\\land": " and ", "\\lor": " or ", "\\lnot": " not ", "\\forall": " AA ", "\\exists": " EE ", "\\in": " in ", "\\notin": " !in ", "\\mapsto": "|->", "\\implies": "=>", "\\iff": "<=>", "\\cdot": "*", "\\ast": "**", "\\star": "***", "\\times": "xx", "\\div": "-:", "\\ltimes": "|><", "\\rtimes": "><|", "\\bowtie": "|><|", "\\circ": "@" };
function ey(e) {
  let t = "";
  for (let i of e) {
    let r = t[t.length - 1];
    r !== void 0 && /\d/.test(r) && /^\d/.test(i) && (t += " "), t += i;
  }
  return t;
}
function ie(e) {
  var t, i, r, n, a, o, s, l, u, c, d, h, p;
  if (!e) return "";
  if (Me(e)) {
    if (e.length === 0) return "";
    if (e[0].mode === "latex") return e.map(ie).join("");
    if (e[0].mode === "text") {
      let A = 0, _ = "";
      for (; ((t = e[A]) == null ? void 0 : t.mode) === "text"; ) _ += e[A].body ? ie(e[A].body) : e[A].value, A++;
      return `"${_}" ${ie(e.slice(A))}`;
    }
    let g = 0, k = [];
    for (; e[g] && e[g].mode === "math"; ) {
      let A = "";
      for (; e[g] && e[g].type === "mord" && /\d/.test(e[g].value); ) A += e[g++].value;
      A ? k.push(A) : k.push(ie(e[g++]));
    }
    return k.push(ie(e.slice(g))), ey(k);
  }
  if (e.mode === "text") return `"${e.value}"`;
  let m = "", { command: y } = e, w;
  if (y === "\\placeholder") return `(${ie(e.body)})`;
  switch (e.type) {
    case "accent":
      let g = { "\\vec": "vec", "\\dot": "dot", "\\ddot": "ddot", "\\bar": "bar", "\\hat": "hat", "\\acute": "acute;", "\\grave": "grave", "\\tilde": "tilde", "\\breve": "breave", "\\check": "check" }[y];
      m = `${g ?? ""} ${ie(e.body)} `;
      break;
    case "first":
      return "";
    case "latexgroup":
      return e.body.map((z) => z.value).join("");
    case "group":
    case "root":
      m = (i = Jr[y]) != null ? i : ie(e.body);
      break;
    case "genfrac":
      {
        let z = e;
        (z.leftDelim || z.rightDelim) && (m = z.leftDelim === "." || !z.leftDelim ? "{:" : z.leftDelim), z.hasBarLine ? (m += "(", m += ie(z.above), m += ")/(", m += ie(z.below), m += ")") : (m += "(" + ie(z.above) + "),", m += "(" + ie(z.below) + ")"), (z.leftDelim || z.rightDelim) && (m += z.rightDelim === "." || !z.rightDelim ? "{:" : z.rightDelim);
      }
      break;
    case "surd":
      m += e.hasEmptyBranch("above") ? "sqrt(" + ie(e.body) + ")" : "root(" + ie(e.above) + ")(" + ie(e.body) + ")";
      break;
    case "latex":
      m = e.value;
      break;
    case "leftright":
      {
        let z = e, O = z.leftDelim;
        m += O === "." || !O ? "{:" : O, m += ie(z.body);
        let ne = z.matchingRightDelim();
        m += ne === "." || !ne ? ":}" : ne;
      }
      break;
    case "sizeddelim":
    case "delim":
      m = e.value;
      break;
    case "overlap":
      break;
    case "overunder":
      break;
    case "mord":
      m = (n = (r = Jr[y]) != null ? r : y) != null ? n : typeof e.value == "string" ? e.value : "", m.startsWith("\\") && (m += " "), w = y ? y.match(/{?\\char"([\dabcdefABCDEF]+)}?/) : null, w ? m = String.fromCodePoint(Number.parseInt("0x" + w[1])) : m.length > 0 && m.startsWith("\\") && (m = typeof e.value == "string" ? e.value.charAt(0) : e.command), m = ty(m, e.style);
      break;
    case "mbin":
    case "mrel":
    case "minner":
      m = (o = (a = Jr[y]) != null ? a : Xr[y]) != null ? o : e.value;
      break;
    case "mopen":
    case "mclose":
      m = e.value;
      break;
    case "mpunct":
      m = (s = Xr[y]) != null ? s : y;
      break;
    case "mop":
    case "operator":
    case "extensible-symbol":
      e.value !== "​" && (Xr[y] ? m = Xr[y] : m = y === "\\operatorname" ? ie(e.body) : (l = e.value) != null ? l : y, m += " ");
      break;
    case "array":
      let k = e.array, A = e.environmentName, _ = (u = { bmatrix: ["[", "]"], "bmatrix*": ["[", "]"] }[A]) != null ? u : ["(", ")"], T = [];
      for (let z of k) {
        let O = [];
        for (let ne of z) O.push(_[0] + ie(ne) + _[1]);
        T.push(O.join(","));
      }
      let K = (c = { bmatrix: ["[", "]"], "bmatrix*": ["[", "]"], cases: ["{", ":}"] }[A]) != null ? c : ["(", ")"];
      m = K[0] + T.join(",") + K[1];
      break;
    case "box":
      break;
    case "spacing":
      m = (d = Jr[y]) != null ? d : " ";
      break;
    case "enclose":
      m = "(" + ie(e.body) + ")";
      break;
    case "space":
      m = " ";
      break;
    case "subsup":
      m = "";
      break;
    case "macro":
      m = (p = (h = Jr[y]) != null ? h : Xr[y]) != null ? p : ie(e.body);
      break;
  }
  if (!e.hasEmptyBranch("subscript")) {
    m += "_";
    let g = ie(e.subscript);
    m += g.length !== 1 ? `(${g})` : g;
  }
  if (!e.hasEmptyBranch("superscript")) {
    m += "^";
    let g = ie(e.superscript);
    m += g.length !== 1 ? `(${g})` : g;
  }
  return m;
}
function ty(e, t) {
  if (!t) return e;
  let i = e;
  return t.variant === "double-struck" && (i = `bbb "${i}"`), t.variant === "script" && (i = `cc "${i}"`), t.variant === "fraktur" && (i = `fr "${i}"`), t.variant === "sans-serif" && (i = `sf "${i}"`), t.variant === "monospace" && (i = `tt "${i}"`), t.variantStyle === "bold" && (i = `bb "${i}"`), t.color ? `color({${t.color}})(${i})` : i;
}
function ue(e, t) {
  var i, r;
  t != null || (t = {}), t.mathstyle = (i = t.mathstyle) != null ? i : "displaystyle";
  let n = new I({ from: b(f({}, vp()), { renderPlaceholder: () => new S(160, { maxFontSize: 1 }), letterShapeStyle: (r = t == null ? void 0 : t.letterShapeStyle) != null ? r : "tex" }), mathstyle: t.mathstyle }), a = new v({ mode: "math", type: "root", body: Te(e, { context: n, parseMode: "math", mathstyle: t.mathstyle }) }).render(n);
  return a ? (Bo(Tn(a, n)), Ao(a, { classes: "ML__latex" }).toMarkup()) : "";
}
function _l(e) {
  if (typeof e == "string") {
    let t = iy(e);
    if (!t) throw new Error(`Invalid color: ${e}`);
    return t;
  }
  return "C" in e ? ny(e) : "a" in e ? rf(e) : e;
}
function gr(e) {
  return e < 0 ? 0 : e > 255 ? 255 : Math.round(e);
}
function iy(e) {
  if (!e || e[0] !== "#") return;
  e = e.slice(1);
  let t;
  return e.length <= 4 ? (t = { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16) }, e.length === 4 && (t.a = parseInt(e[3] + e[3], 16) / 255)) : (t = { r: parseInt(e[0] + e[1], 16), g: parseInt(e[2] + e[3], 16), b: parseInt(e[4] + e[5], 16) }, e.length === 8 && (t.a = parseInt(e[6] + e[7], 16) / 255)), t && typeof t.a > "u" && (t.a = 1), t;
}
function Ml(e) {
  let [t, i, r] = [e.L, e.C, e.H], n = r * Math.PI / 180, a = { L: t, a: i * Math.cos(n), b: i * Math.sin(n) };
  return e.alpha !== void 0 && (a.alpha = e.alpha), a;
}
function ry(e) {
  let [t, i, r] = [e.L, e.a, e.b], n = Math.sqrt(i * i + r * r), a = Math.atan2(r, i) * 180 / Math.PI, o = { L: t, C: n, H: a };
  return e.alpha !== void 0 && (o.alpha = e.alpha), o;
}
function Os(e) {
  let [t, i, r] = [e.L, e.a, e.b], n = Math.pow(0.9999999984505198 * t + 0.39633779217376786 * i + 0.2158037580607588 * r, 3), a = Math.pow(1.00000000888176 * t - 0.10556134232365635 * i - 0.0638541747717059 * r, 3), o = Math.pow(t * 1.000000054672411 - 0.0894841820949657 * i - 1.2914855378640917 * r, 3), s = 4.076741661347994 * n - 3.307711590408193 * a + 0.230969928729428 * o, l = -1.2684380040921763 * n + 2.6097574006633715 * a - 0.3413193963102197 * o, u = -0.004196086541837188 * n - 0.7034186144594493 * a + 1.7076147009309444 * o, c = (d) => {
    let h = Math.abs(d);
    return h <= 31308e-7 ? d * 12.92 : (Math.sign(d) || 1) * (1.055 * Math.pow(h, 1 / 2.4) - 0.055);
  };
  return [c(s), c(l), c(u)];
}
function Is(e) {
  let [t, i, r] = e;
  return t >= 0 && t <= 1 && i >= 0 && i <= 1 && r >= 0 && r <= 1;
}
function Rs(e, t) {
  let [i, r, n] = e;
  return i = gr(i * 255), r = gr(r * 255), n = gr(n * 255), t !== void 0 ? { r: i, g: r, b: n, alpha: t } : { r: i, g: r, b: n };
}
function rf(e) {
  let [t, i, r] = Os(e);
  if (Is([t, i, r])) return Rs([t, i, r], e.alpha);
  let n = ry(e);
  if (n.C = 0, [t, i, r] = Os(Ml(n)), !Is([t, i, r])) return Rs([t, i, r], e.alpha);
  let a = 0, o = e.L, s = (a + o) / 2;
  n.C = s;
  let l = 0.36 / Math.pow(2, 12);
  for (; o - a > l; ) s = (a + o) / 2, n.C = s, [t, i, r] = Os(Ml(n)), Is([t, i, r]) ? a = s : o = s;
  return Rs([t, i, r], e.alpha);
}
function ny(e) {
  return rf(Ml(e));
}
function nh(e, t) {
  let i = _l(e), r = _l(t), n = 0.56, a = 0.57, o = 0.62, s = 0.65, l = 0.022, u = 1.414, c = 0.1, d = 5e-4, h = 1.14, p = 0.027, m = 1.14, y = 0.027;
  function w(z) {
    return z >= l ? z : z + (l - z) ** u;
  }
  function g(z) {
    return (z < 0 ? -1 : 1) * Math.pow(Math.abs(z), 2.4);
  }
  let k = w(g(r.r / 255) * 0.2126729 + g(r.g / 255) * 0.7151522 + g(r.b / 255) * 0.072175), A = w(g(i.r / 255) * 0.2126729 + g(i.g / 255) * 0.7151522 + g(i.b / 255) * 0.072175), _, T, K;
  return Math.abs(A - k) < d ? T = 0 : A > k ? (_ = A ** n - k ** a, T = _ * h) : (_ = A ** s - k ** o, T = _ * m), Math.abs(T) < c ? K = 0 : T > 0 ? K = T - y : K = T + p, K * 100;
}
function nf(e, t, i) {
  i != null || (i = "#fff"), t != null || (t = "#000");
  let r = nh(e, i), n = nh(e, t);
  return Math.abs(r) > Math.abs(n) ? i : t;
}
function ay(e) {
  let t = _l(e), i = ((1 << 24) + (gr(t.r) << 16) + (gr(t.g) << 8) + gr(t.b)).toString(16).slice(1);
  return t.alpha !== void 0 && t.alpha < 1 && (i += ("00" + Math.round(t.alpha * 255).toString(16)).slice(-2)), i[0] === i[1] && i[2] === i[3] && i[4] === i[5] && i[6] === i[7] && (i = i[0] + i[2] + i[4] + (t.alpha !== void 0 && t.alpha < 1 ? i[6] : "")), "#" + i;
}
function X(e) {
  let t = af(e), i = "";
  for (let r of t) {
    if (typeof r.value != "string") return "";
    i += r.value;
  }
  return i;
}
function af(e) {
  let t = e.model.selection.ranges;
  return t.length !== 1 ? [] : e.model.getAtoms(t[0]);
}
function oy(e, t) {
  let i = af(e);
  if (i.length !== 1) return !1;
  let r = sl[t];
  return r ? !!r.test(i[0].value) : !1;
}
function sy(e, t) {
  return X(e).length > 0;
}
function ly(e) {
  return [qs(e, "double-struck", "mathbb", "tooltip.blackboard"), qs(e, "fraktur", "mathfrak", "tooltip.fraktur"), qs(e, "calligraphic", "mathcal", "tooltip.caligraphic"), js(e, "up", "mathrm", "tooltip.roman-upright"), js(e, "bold", "mathbf", "tooltip.bold"), js(e, "italic", "mathit", "tooltip.italic")];
}
function uy(e) {
  return [{ label: () => ue(`\\vec{${X(e)}}`), visible: () => X(e).length === 1, onMenuSelect: () => e.insert("\\vec{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\overrightarrow{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\overrightarrow{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\overleftarrow{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\overleftarrow{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\dot{${X(e)}}`), visible: () => X(e).length === 1, onMenuSelect: () => e.insert("\\dot{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\ddot{${X(e)}}`), visible: () => X(e).length === 1, onMenuSelect: () => e.insert("\\ddot{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\bar{${X(e)}}`), visible: () => X(e).length === 1, onMenuSelect: () => e.insert("\\bar{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\overline{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\overline{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\overgroup{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\overgroup{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\overbrace{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\overbrace{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\underline{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\underline{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\undergroup{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\undergroup{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\underbrace{${X(e)}}`), visible: () => X(e).length > 0, onMenuSelect: () => e.insert("\\underbrace{#@}", { selectionMode: "item" }) }];
}
function cy(e) {
  return [{ label: () => ue(`\\boxed{${e.getValue(e.model.selection)}}}`), onMenuSelect: () => e.insert("\\boxed{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\bbox[5px, border: 2px solid red]{${e.getValue(e.model.selection)}}`), onMenuSelect: () => e.insert("\\bbox[5px, border: 2px solid red]{#@}", { selectionMode: "item" }) }, { label: () => ue(`\\bbox[5px, border: 2px dashed black]{${e.getValue(e.model.selection)}}`), onMenuSelect: () => e.insert("\\bbox[5px, border: 2px dashed black]{#@}", { selectionMode: "item" }) }];
}
function dy(e) {
  let t = [];
  for (let i of Object.keys(Bi)) t.push({ class: (ay(nf(Bi[i])) === "#000" ? "dark-contrast" : "light-contrast") + " menu-swatch", label: `<span style="background:${Bi[i]} "></span>`, ariaLabel: () => {
    var r;
    return (r = $(i)) != null ? r : i;
  }, checked: () => {
    var r;
    return { some: "mixed", all: !0 }[(r = e.queryStyle({ backgroundColor: i })) != null ? r : !1];
  }, onMenuSelect: () => {
    e.applyStyle({ backgroundColor: i }, { operation: "toggle" }), e.adoptStyle = "none";
  } });
  return t;
}
function hy(e) {
  let t = [];
  for (let i of Object.keys(Ai)) t.push({ class: (nf(Ai[i]) === "#000" ? "dark-contrast" : "light-contrast") + " menu-swatch", label: `<span style="background:${Ai[i]} "></span>`, ariaLabel: () => {
    var r;
    return (r = $(i)) != null ? r : i;
  }, checked: () => {
    var r;
    return { some: "mixed", all: !0 }[(r = e.queryStyle({ color: i })) != null ? r : !1];
  }, onMenuSelect: () => {
    e.applyStyle({ color: i }, { operation: "toggle" }), e.adoptStyle = "none";
  } });
  return t;
}
var py = class extends Jm {
  constructor(e, t, i, r) {
    super(e, t), this.row = i, this.col = r;
  }
  set active(e) {
    let t = this.parentMenu.children;
    if (e) for (let i of t) i.element.classList.toggle("active", i.row <= this.row && i.col <= this.col);
    else for (let i of t) i.element.classList.remove("active");
  }
};
function my(e) {
  let t = [];
  for (let i = 1; i <= 5; i++) for (let r = 1; r <= 5; r++) t.push({ onCreate: (n, a) => new py(n, a, i, r), label: "☐", tooltip: () => $("tooltip.row-by-col", i, r), data: { row: i, col: r }, onMenuSelect: () => {
    e.insert(`\\begin{pmatrix}${Array(i).fill(Array(r).fill("#?").join(" & ")).join("\\\\")}\\end{pmatrix}`, { selectionMode: "item" });
  } });
  return t;
}
function fy(e) {
  return [{ label: () => $("menu.array.add row above"), id: "add-row-above", onMenuSelect: () => e.executeCommand("addRowBefore"), visible: () => fi(e) }, { label: () => $("menu.array.add row below"), id: "add-row-below", onMenuSelect: () => e.executeCommand("addRowAfter"), visible: () => fi(e) }, { label: () => $("menu.array.add column before"), id: "add-column-before", onMenuSelect: () => e.executeCommand("addColumnBefore"), visible: () => fi(e), enabled: () => {
    let t = e.model.parentEnvironment;
    if (!t) return !1;
    let [i, r] = yy(e);
    return i < t.maxColumns;
  } }, { label: () => $("menu.array.add column after"), id: "add-column-after", onMenuSelect: () => e.executeCommand("addColumnAfter"), visible: () => fi(e) }, { type: "divider" }, { label: () => $("menu.array.delete row"), id: "delete-row", onMenuSelect: () => e.executeCommand("removeRow"), visible: () => fi(e) }, { label: () => $("menu.array.delete column"), id: "delete-column", onMenuSelect: () => e.executeCommand("removeColumn"), visible: () => fi(e) }, { type: "divider" }, { label: () => $("menu.borders"), visible: () => (gy(e) || fi(e)) && e.isSelectionEditable, submenu: [{ label: " ⋱ ", id: "environment-no-border", onMenuSelect: () => Gr(e, "matrix") }, { label: "(⋱)", id: "environment-parentheses", onMenuSelect: () => Gr(e, "pmatrix") }, { label: "[⋱]", id: "environment-brackets", onMenuSelect: () => Gr(e, "bmatrix") }, { label: "|⋱|", id: "environment-bar", onMenuSelect: () => Gr(e, "vmatrix") }, { label: "{⋱}", id: "environment-braces", onMenuSelect: () => Gr(e, "Bmatrix") }], submenuClass: "border-submenu" }, { type: "divider" }, { label: () => $("menu.insert matrix"), id: "insert-matrix", visible: () => e.isSelectionEditable, submenu: my(e), submenuClass: "insert-matrix-submenu", columnCount: 5 }, { label: () => $("menu.mode"), id: "mode", visible: () => e.isSelectionEditable && e.model.selectionIsCollapsed, submenu: [{ label: () => $("menu.mode-math"), id: "mode-math", onMenuSelect: () => {
    xr(e, "accept-all"), e.executeCommand(["switchMode", "math"]);
  }, checked: () => e.model.mode === "math" }, { label: () => $("menu.mode-text"), id: "mode-text", onMenuSelect: () => {
    xr(e, "accept-all"), e.executeCommand(["switchMode", "text"]);
  }, checked: () => e.model.mode === "text" }, { label: () => $("menu.mode-latex"), id: "mode-latex", onMenuSelect: () => e.executeCommand(["switchMode", "latex"]), checked: () => e.model.mode === "latex" }] }, { type: "divider" }, { label: () => $("menu.font-style"), id: "variant", visible: () => e.isSelectionEditable, submenu: ly(e), submenuClass: "variant-submenu" }, { label: () => $("menu.color"), id: "color", visible: () => e.isSelectionEditable, submenu: hy(e), columnCount: 4, submenuClass: "swatches-submenu" }, { label: () => $("menu.background-color"), id: "background-color", visible: () => e.isSelectionEditable, submenu: dy(e), columnCount: 4, submenuClass: "swatches-submenu" }, { label: () => $("menu.accent"), id: "accent", visible: () => e.isSelectionEditable, submenu: uy(e), submenuClass: "variant-submenu" }, { label: () => $("menu.decoration"), id: "decoration", visible: () => e.isSelectionEditable && X(e).length > 0, submenu: cy(e), submenuClass: "variant-submenu" }, { type: "divider" }, { label: () => $("menu.evaluate"), id: "ce-evaluate", visible: () => e.isSelectionEditable && globalThis.MathfieldElement.computeEngine !== null, onMenuSelect: () => {
    let t = by(e);
    if (!t) {
      e.model.announce("plonk");
      return;
    }
    e.model.selectionIsCollapsed ? (e.model.position = e.model.lastOffset, e.insert(`=${t}`, { insertionMode: "insertAfter", selectionMode: "item" })) : e.insert(t, { insertionMode: "replaceSelection", selectionMode: "item" });
  } }, { label: () => $("menu.simplify"), id: "ce-simplify", visible: () => e.isSelectionEditable && globalThis.MathfieldElement.computeEngine !== null, onMenuSelect: () => {
    var t, i;
    if (e.model.selectionIsCollapsed) {
      let r = (t = e.expression) == null ? void 0 : t.simplify();
      if (e.model.position = e.model.lastOffset, !r) {
        e.model.announce("plonk");
        return;
      }
      e.insert(`=${r.latex}`, { insertionMode: "insertAfter", selectionMode: "item" });
    } else {
      let r = (i = globalThis.MathfieldElement.computeEngine) == null ? void 0 : i.parse(e.getValue(e.model.selection)).simplify();
      if (!r) {
        e.model.announce("plonk");
        return;
      }
      e.insert(r.latex, { insertionMode: "replaceSelection", selectionMode: "item" });
    }
  } }, { label: () => {
    var t;
    if (globalThis.MathfieldElement.computeEngine === null) return "";
    let i = (t = e.expression) == null ? void 0 : t.unknowns[0];
    return i ? $("menu.solve-for", ue(i)) : $("menu.solve");
  }, id: "ce-solve", visible: () => {
    var t;
    return e.isSelectionEditable && globalThis.MathfieldElement.computeEngine !== null && ((t = e.expression) == null ? void 0 : t.unknowns.length) === 1 && e.expression.unknowns[0] !== "Nothing";
  }, onMenuSelect: () => {
    var t;
    let i = e.expression, r = i == null ? void 0 : i.unknowns[0], n = (t = i.solve(r)) == null ? void 0 : t.map((a) => {
      var o;
      return (o = a.simplify().latex) != null ? o : "";
    });
    if (!n) {
      e.model.announce("plonk");
      return;
    }
    e.insert(`${r}=${n.length === 1 ? n[0] : "\\left\\lbrace" + (n == null ? void 0 : n.join(", ")) + "\\right\\rbrace"}`, { insertionMode: "replaceAll", selectionMode: "item" });
  } }, { type: "divider" }, { label: () => $("menu.cut"), onMenuSelect: () => e.executeCommand("cutToClipboard"), visible: () => !e.options.readOnly && e.isSelectionEditable, keyboardShortcut: "meta+X" }, { label: () => $("menu.copy"), id: "copy", submenu: [{ label: () => $("menu.copy-as-latex"), id: "copy-latex", onMenuSelect: () => G.copyToClipboard(e, "latex"), keyboardShortcut: "meta+C" }, { label: () => $("menu.copy-as-ascii-math"), id: "copy-ascii-math", onMenuSelect: () => G.copyToClipboard(e, "ascii-math") }, { label: () => $("menu.copy-as-mathml"), id: "copy-math-ml", onMenuSelect: () => G.copyToClipboard(e, "math-ml") }] }, { label: () => $("menu.paste"), id: "paste", onMenuSelect: () => e.executeCommand("pasteFromClipboard"), visible: () => e.hasEditableContent, keyboardShortcut: "meta+V" }, { label: () => $("menu.select-all"), id: "select-all", keyboardShortcut: "meta+A", onMenuSelect: () => e.executeCommand("selectAll") }];
}
function fi(e) {
  var t;
  return !!((t = e.model.parentEnvironment) != null && t.array);
}
function gy(e) {
  return e.model.at(e.model.position).type === "array";
}
function yy(e) {
  var t;
  let i = (t = e.model.parentEnvironment) == null ? void 0 : t.array;
  return i ? [i.length, i.reduce((r, n) => Math.max(r, n.length), 0)] : [0, 0];
}
function Gr(e, t) {
  $o(e), e.flushInlineShortcutBuffer(), Pm(e.model, t), ee(e);
}
function by(e) {
  var t, i;
  let r;
  if (e.model.selectionIsCollapsed ? r = (t = globalThis.MathfieldElement.computeEngine) == null ? void 0 : t.parse(e.getValue(), { canonical: !1 }) : r = (i = globalThis.MathfieldElement.computeEngine) == null ? void 0 : i.parse(e.getValue(e.model.selection), { canonical: !1 }), !r) return "";
  let n = r.evaluate();
  return n.isSame(r) && (n = r.N()), n.latex;
}
function qs(e, t, i, r) {
  return { label: () => ue(`\\${i}{${X(e)}}`), tooltip: () => {
    var n;
    return (n = $(r)) != null ? n : r;
  }, visible: () => oy(e, t), checked: () => {
    var n;
    return { some: "mixed", all: !0 }[(n = e.queryStyle({ variant: t })) != null ? n : !1];
  }, onMenuSelect: () => {
    e.applyStyle({ variant: t }, { operation: "toggle" }), e.adoptStyle = "none";
  } };
}
function js(e, t, i, r) {
  return { label: () => ue(`\\${i}{${X(e)}}`), tooltip: () => {
    var n;
    return (n = $(r)) != null ? n : r;
  }, visible: () => sy(e), checked: () => {
    var n;
    return { some: "mixed", all: !0 }[(n = e.queryStyle({ variantStyle: t })) != null ? n : !1];
  }, onMenuSelect: () => {
    e.applyStyle({ variantStyle: t }, { operation: "toggle" }), e.adoptStyle = "none";
  } };
}
function cr(e, t) {
  return e + hn(t);
}
Ce({ speak: (e, t, i) => vy(e, t, i) }, { target: "mathfield" });
function vy(e, t, i) {
  var r;
  i = i ?? { withHighlighting: !1 };
  let { model: n } = e;
  function a(c) {
    let d = null;
    switch (c) {
      case "all":
        d = n.root;
        break;
      case "selection":
        d = n.getAtoms(n.selection);
        break;
      case "left": {
        d = n.getAtoms(n.offsetOf(n.at(n.position).leftSibling), n.position);
        break;
      }
      case "right": {
        d = n.getAtoms(n.position, n.offsetOf(n.at(n.position).rightSibling));
        break;
      }
      case "group":
        d = n.getAtoms(n.getSiblingsRange(n.position));
        break;
      case "parent": {
        let { parent: h } = n.at(n.position);
        h != null && h.parent ? d = h : d = n.root;
        break;
      }
      default:
        d = n.root;
    }
    return d;
  }
  function o(c) {
    let d = "";
    switch (c) {
      case "all":
        break;
      case "selection":
        d = "no selection";
        break;
      case "left":
        d = "at start";
        break;
      case "right":
        d = "at end";
        break;
      case "group":
        break;
      case "parent":
        d = "no parent";
        break;
      default:
        "" + c;
        break;
    }
    return d;
  }
  let s = globalThis.MathfieldElement, l = a(t);
  if (l === null) return (r = s.speakHook) == null || r.call(s, o(t)), !1;
  (i.withHighlighting || s.speechEngine === "amazon") && (s.textToSpeechMarkup = globalThis.sre && s.textToSpeechRules === "sre" ? "ssml_step" : "ssml");
  let u = hn(l);
  return Re() && i.withHighlighting ? (jt().readAloudMathfield = e, Ei(e, { forHighlighting: !0 }), s.readAloudHook && s.readAloudHook(e.field, u)) : s.speakHook && s.speakHook(u), !1;
}
function xy(e) {
  var t, i;
  if (!Re()) return;
  let r = globalThis.MathfieldElement;
  if (!r.speechEngine || r.speechEngine === "local") {
    let n = new SpeechSynthesisUtterance(e);
    globalThis.speechSynthesis.speak(n);
  } else if (r.speechEngine === "amazon") if (!("AWS" in window)) console.error("MathLive 0.98.6: AWS SDK not loaded. See https://www.npmjs.com/package/aws-sdk");
  else {
    let n = new globalThis.AWS.Polly({ apiVersion: "2016-06-10" }), a = { OutputFormat: "mp3", VoiceId: (t = r.speechEngineVoice) != null ? t : "Joanna", Engine: ["Amy", "Emma", "Brian", "Ivy", "Joanna", "Kendra", "Kimberly", "Salli", "Joey", "Justin", "Matthew"].includes((i = r.speechEngineVoice) != null ? i : "Joanna") ? "neural" : "standard", Text: e, TextType: "ssml" };
    n.synthesizeSpeech(a, (o, s) => {
      if (o) console.trace(`MathLive 0.98.6: \`polly.synthesizeSpeech()\` error: ${o}`);
      else if (s != null && s.AudioStream) {
        let l = new Uint8Array(s.AudioStream), u = new Blob([l.buffer], { type: "audio/mpeg" }), c = URL.createObjectURL(u);
        new Audio(c).play().catch((d) => console.log(d));
      }
    });
  }
  else r.speechEngine === "google" && console.error("MathLive 0.98.6: The Google speech engine is not supported yet. Please come again.");
}
function of(e) {
  var t;
  let i;
  if (e.parent.type === "prompt") e.parentBranch === "body" && (i = "prompt");
  else if (e.parentBranch === "body") i = e.type && (t = { enclose: "cross out", leftright: "delimiter", surd: "square root", root: "math field", mop: "operator", first: "first" }[e.type]) != null ? t : "parent";
  else if (e.parent.type === "genfrac") {
    if (e.parentBranch === "above") return "numerator";
    if (e.parentBranch === "below") return "denominator";
  } else e.parent.type === "surd" ? e.parentBranch === "above" && (i = "index") : e.parentBranch === "superscript" ? i = "superscript" : e.parentBranch === "subscript" && (i = "subscript");
  return i ?? "parent";
}
function wy(e, t, i, r) {
  let n = "";
  if (t === "plonk") globalThis.MathfieldElement.playSound("plonk"), e.flushInlineShortcutBuffer();
  else if (t === "delete") n = cr("deleted: ", r);
  else if (t === "focus" || t.includes("move")) n = ky(e.model, i) + (e.model.selectionIsCollapsed ? "" : "selected: ") + _y(e.model);
  else if (t === "replacement") n = cr("", e.model.at(e.model.position));
  else if (t === "line") {
    let a = cr("", e.model.root);
    e.keyboardDelegate.setAriaLabel(a);
  } else n = r ? cr(t + " ", r) : t;
  if (n) {
    let a = e.ariaLiveText.textContent.includes(" ") ? "   " : "   ";
    e.ariaLiveText.textContent = n + a;
  }
}
function ky(e, t) {
  if (Number.isNaN(t)) return "";
  let i = e.at(t);
  if (!i || i.treeDepth <= e.at(e.position).treeDepth) return "";
  let r = "", n = i.parent, a = e.at(e.position).parent;
  for (; n !== e.root && n !== a; ) r += `out of ${of(n)};`, n = n.parent;
  return r;
}
function _y(e) {
  if (!e.selectionIsCollapsed) return cr("", e.getAtoms(e.selection));
  let t = "", i = e.at(e.position), r = of(i);
  return i.isFirstSibling && (t = (r ? "start of " + r : "unknown") + ": "), i.isLastSibling ? i.isFirstSibling || (t += r ? "end of " + r : "unknown") : t += cr("", i), t;
}
var My = class {
  constructor(e, t, i) {
    this.mathfield = e, this.mode = t, this.silenceNotifications = !1, this._selection = { ranges: [[0, 0]], direction: "none" }, this._anchor = 0, this._position = 0, this.root = i;
  }
  dispose() {
    this.mathfield = void 0;
  }
  getState() {
    let e = { ranges: [...this._selection.ranges] };
    return this.selection.direction && this.selection.direction !== "none" && (e.direction = this.selection.direction), { content: this.root.toJson(), selection: e, mode: this.mode };
  }
  setState(e, t) {
    var i;
    let r = this.silenceNotifications;
    this.silenceNotifications = (i = t == null ? void 0 : t.silenceNotifications) != null ? i : !0;
    let n = {};
    if ((t == null ? void 0 : t.type) === "undo" && (n = { inputType: "historyUndo" }), (t == null ? void 0 : t.type) === "redo" && (n = { inputType: "historyRedo" }), this.contentWillChange(n)) {
      let a = this.silenceNotifications;
      this.silenceNotifications = !0, this.mode = e.mode, this.root = Xt(e.content), this.selection = e.selection, this.silenceNotifications = a, this.contentDidChange(n);
    }
    this.silenceNotifications = r;
  }
  get atoms() {
    return this.root.children;
  }
  get selection() {
    return this._selection;
  }
  set selection(e) {
    this.setSelection(e);
  }
  setSelection(e, t) {
    return !this.mathfield.contentEditable && this.mathfield.userSelect === "none" ? !1 : this.deferNotifications({ selection: !0 }, () => {
      var i, r, n;
      let a = this.normalizeSelection(e, t);
      if (a === void 0) throw new TypeError("Invalid selection");
      if (a.ranges.length === 1 && a.ranges[0][0] === a.ranges[0][1]) {
        let c = a.ranges[0][0];
        if (!this.mathfield.dirty && !((i = this.at(c)) != null && i.parentPrompt) && this.mathfield.hasEditablePrompts) {
          if ((r = this.at(c - 1)) != null && r.parentPrompt) {
            this._anchor = this.normalizeOffset(c - 1), this._position = this._anchor, this._selection = this.normalizeSelection(this._anchor);
            return;
          }
          if ((n = this.at(c + 1)) != null && n.parentPrompt) {
            this._anchor = this.normalizeOffset(c + 1), this._position = this._anchor, this._selection = this.normalizeSelection(this._anchor);
            return;
          }
          this._anchor = 0, this._position = 0, this._selection = { ranges: [[0, 0]] };
          return;
        }
        this._anchor = c, this._position = c, this._selection = a;
        return;
      }
      let o = ge(a);
      a.direction === "backward" ? [this._position, this._anchor] = o : [this._anchor, this._position] = o;
      let s = this.at(o[0] + 1), l = this.at(o[1]), u = v.commonAncestor(s, l);
      (u == null ? void 0 : u.type) === "array" && s.parent === u && l.parent === u ? this._selection = { ranges: [o], direction: a.direction } : this._selection = { ranges: [o], direction: a.direction }, this._position >= 0 && this._position <= this.lastOffset;
    });
  }
  setPositionHandlingPlaceholder(e) {
    var t;
    let i = this.at(e);
    (i == null ? void 0 : i.type) === "placeholder" ? this.setSelection(e - 1, e) : ((t = i == null ? void 0 : i.rightSibling) == null ? void 0 : t.type) === "placeholder" ? this.setSelection(e, e + 1) : this.position = e, i instanceof ce && i.isSuggestion && (i.isSuggestion = !1), this.mathfield.stopCoalescingUndo();
  }
  get position() {
    return this._position;
  }
  set position(e) {
    this.setSelection(e, e);
  }
  get anchor() {
    return this._anchor;
  }
  get selectionIsCollapsed() {
    return this._anchor === this._position;
  }
  get selectionIsPlaceholder() {
    return Math.abs(this._anchor - this._position) === 1 ? this.at(Math.max(this._anchor, this._position)).type === "placeholder" : !1;
  }
  collapseSelection(e = "forward") {
    return this._anchor === this._position ? !1 : (e === "backward" ? this.position = Math.min(this._anchor, this._position) : this.position = Math.max(this._anchor, this._position), !0);
  }
  get lastOffset() {
    return this.atoms.length - 1;
  }
  at(e) {
    return this.atoms[e];
  }
  offsetOf(e) {
    return this.atoms.indexOf(e);
  }
  getSiblingsRange(e) {
    let t = this.at(e), { parent: i } = t;
    if (!i) return [0, this.lastOffset];
    let r = t.parent.branch(t.parentBranch);
    return [this.offsetOf(r[0]), this.offsetOf(r[r.length - 1])];
  }
  getBranchRange(e, t) {
    let i = this.at(e).branch(t);
    return [this.offsetOf(i[0]), this.offsetOf(i[i.length - 1])];
  }
  getAtoms(e, t, i) {
    let r = i ?? {};
    if (ja(e)) {
      if (r = t ?? {}, e.ranges.length > 1) return e.ranges.reduce((u, c) => [...u, ...this.getAtoms(c, r)], []);
      e = e.ranges[0];
    }
    let n, a;
    if (Vt(e)) {
      if (n = e, !Vt(t)) return [];
      a = t;
    } else [n, a] = e, r = t ?? {};
    if (!Number.isFinite(n)) return [];
    r.includeChildren === void 0 && (r.includeChildren = !1), n < 0 && (n = this.lastOffset - n + 1), a < 0 && (a = this.lastOffset + a + 1);
    let o = Math.min(n, a) + 1, s = Math.max(n, a);
    if (!r.includeChildren && o === 1 && s === this.lastOffset) return [this.root];
    let l = [];
    for (let u = o; u <= s; u++) {
      let c = this.atoms[u];
      ah(this, c, o, s) && l.push(c);
    }
    return r.includeChildren || (l = l.filter((u) => {
      let c = !1, { parent: d } = u;
      for (; d && !c; ) c = ah(this, d, o, s), d = d.parent;
      return !c;
    })), l;
  }
  getAllAtoms(e = 0) {
    let t = [], i = this.lastOffset;
    for (let r = e; r <= i; r++) t.push(this.atoms[r]);
    for (let r = 0; r < e; r++) t.push(this.atoms[r]);
    return t;
  }
  findAtom(e, t = 0, i = "forward") {
    let r, n = this.lastOffset;
    if (i === "forward") {
      for (let a = t; a <= n; a++) if (r = this.atoms[a], e(r)) return r;
      for (let a = 0; a < t; a++) if (r = this.atoms[a], e(r)) return r;
      return;
    }
    for (let a = t; a >= 0; a--) if (r = this.atoms[a], e(r)) return r;
    for (let a = n; a > t; a--) if (r = this.atoms[a], e(r)) return r;
  }
  extractAtoms(e) {
    let t = this.getAtoms(e);
    if (t.length === 1 && !t[0].parent) if (t[0].type === "root") t = [...t[0].body], t.shift();
    else return t = this.root.cells.flat(), this.root = new v({ type: "root", body: [] }), t;
    for (let i of t) i.parent.removeChild(i);
    return t;
  }
  deleteAtoms(e) {
    e != null || (e = [0, -1]), this.extractAtoms(e), this.position = e[0];
  }
  atomToString(e, t) {
    let i = t ?? "latex";
    if (i.startsWith("latex")) return v.serialize([e], { expandMacro: i === "latex-expanded", skipStyles: i === "latex-unstyled", skipPlaceholders: i === "latex-without-placeholders", defaultMode: this.mathfield.options.defaultMode });
    if (i === "math-ml") return j(e);
    if (i === "spoken") return hn(e);
    if (i === "spoken-text") {
      let r = globalThis.MathfieldElement.textToSpeechMarkup;
      globalThis.MathfieldElement.textToSpeechMarkup = "";
      let n = hn(e);
      return globalThis.MathfieldElement.textToSpeechMarkup = r, n;
    }
    if (i === "spoken-ssml" || i === "spoken-ssml-with-highlighting") {
      let r = globalThis.MathfieldElement.textToSpeechMarkup;
      globalThis.MathfieldElement.textToSpeechMarkup = "ssml";
      let n = hn(e);
      return globalThis.MathfieldElement.textToSpeechMarkup = r, n;
    }
    return i === "ascii-math" ? ie(e) : (console.error(`MathLive 0.98.6: Unexpected format "${i}`), "");
  }
  getValue(e, t, i) {
    if (e === void 0) return this.atomToString(this.root, "latex");
    if (typeof e == "string" && e !== "math-json") return this.atomToString(this.root, e);
    let r, n;
    if (Vt(e) && Vt(t) ? (r = [this.normalizeRange([e, t])], n = i) : ao(e) ? (r = [this.normalizeRange(e)], n = t) : ja(e) ? (r = e.ranges, n = t) : (r = [this.normalizeRange([0, -1])], n = e), n != null || (n = "latex"), n === "math-json") {
      if (!globalThis.MathfieldElement.computeEngine) return window[Symbol.for("io.cortexjs.compute-engine")] || console.error(`The CortexJS Compute Engine library is not available.
Load the library, for example with:
import "https://unpkg.com/@cortex-js/compute-engine?module"`), '["Error", "compute-engine-not-available"]';
      let a = this.getValue({ ranges: r }, "latex-unstyled");
      try {
        let o = globalThis.MathfieldElement.computeEngine.parse(a);
        return JSON.stringify(o.json);
      } catch (o) {
        return JSON.stringify(["Error", `'${o.toString()}'`]);
      }
    }
    if (n.startsWith("latex")) {
      let a = { expandMacro: n === "latex-expanded", skipStyles: n === "latex-unstyled", skipPlaceholders: n === "latex-without-placeholders", defaultMode: this.mathfield.options.defaultMode };
      return R(r.map((o) => v.serialize(this.getAtoms(o), a)));
    }
    return r.map((a) => this.getAtoms(a).map((o) => this.atomToString(o, n)).join("")).join("");
  }
  extendSelectionTo(e, t) {
    return !this.mathfield.contentEditable && this.mathfield.userSelect === "none" ? !1 : this.deferNotifications({ selection: !0 }, () => {
      let i = this.normalizeRange([e, t]), [r, n] = i, { parent: a } = this.at(n);
      if (a && (a.type === "genfrac" || a.type === "subsup")) for (; a !== this.root && Vs(this, a, [r, n]); ) n = this.offsetOf(a), a = a.parent;
      for (a = this.at(r).parent; a !== this.root && Vs(this, a, [r, n]); ) r = this.offsetOf(a.leftSibling), a = a.parent;
      if (a = this.at(n).parent, (a == null ? void 0 : a.type) === "genfrac") for (; a !== this.root && Vs(this, a, [r, n]); ) n = this.offsetOf(a), a = a.parent;
      this._position = this.normalizeOffset(t), this._selection = { ranges: [[r, n]], direction: "none" };
    });
  }
  announce(e, t, i = []) {
    var r, n;
    ((n = (r = this.mathfield.host) == null ? void 0 : r.dispatchEvent(new CustomEvent("announce", { detail: { command: e, previousPosition: t, atoms: i }, cancelable: !0, bubbles: !0, composed: !0 }))) == null || n) && wy(this.mathfield, e, t, i);
  }
  deferNotifications(e, t) {
    let i = this._selection, r = this._anchor, n = this._position, a = this.silenceNotifications;
    this.silenceNotifications = !0;
    let o = this.root.changeCounter;
    t();
    let s = this.root.changeCounter !== o, l = r !== this._anchor || n !== this._position || qg(this._selection, i) === "different";
    return this.silenceNotifications = a, e.content && s && this.contentDidChange({ inputType: e.type }), e.selection && l && this.selectionDidChange(), s || l;
  }
  normalizeOffset(e) {
    return e > 0 ? e = Math.min(e, this.lastOffset) : e < 0 && (e = this.lastOffset + e + 1), e;
  }
  normalizeRange(e) {
    let [t, i] = e;
    return t = this.normalizeOffset(t), i = this.normalizeOffset(i), t < i ? [t, i] : [i, t];
  }
  normalizeSelection(e, t) {
    var i;
    let r;
    if (Vt(e)) {
      let n = this.normalizeOffset(e);
      if (Vt(t)) {
        let a = this.normalizeOffset(t);
        r = n <= a ? { ranges: [[n, a]], direction: "none" } : { ranges: [[a, n]], direction: "backward" };
      } else r = { ranges: [[n, n]], direction: "none" };
    } else if (ao(e)) {
      let n = this.normalizeOffset(e[0]), a = this.normalizeOffset(e[1]);
      r = n <= a ? { ranges: [[n, a]], direction: "none" } : { ranges: [[a, n]], direction: "backward" };
    } else ja(e) && (r = { ranges: e.ranges.map((n) => this.normalizeRange(n)), direction: (i = e.direction) != null ? i : "none" });
    return r;
  }
  get parentEnvironment() {
    let e = this.at(this.position).parent;
    if (e) {
      for (; e.parent && e.type !== "array"; ) e = e.parent;
      if (e.type === "array") return e;
    }
  }
  get cell() {
    var e;
    let t = this.at(this.position);
    if (t) {
      for (; t && ((e = t.parent) == null ? void 0 : e.type) !== "array"; ) t = t.parent;
      if (!(!(t != null && t.parent) || t.parent.type !== "array")) return t.parentBranch;
    }
  }
  contentWillChange(e = {}) {
    if (this.silenceNotifications || !this.mathfield) return !0;
    let t = this.silenceNotifications;
    this.silenceNotifications = !0;
    let i = this.mathfield.onContentWillChange(e);
    return this.silenceNotifications = t, i;
  }
  contentDidChange(e) {
    var t;
    if (window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.update(ut(this.mathfield)), this.silenceNotifications || !this.mathfield.host || !this.mathfield) return;
    let i = this.silenceNotifications;
    this.silenceNotifications = !0, this.mathfield.host.dispatchEvent(new InputEvent("input", b(f({}, e), { data: e.data ? e.data : (t = e.inputType) != null ? t : "", bubbles: !0, composed: !0 }))), this.silenceNotifications = i;
  }
  selectionDidChange() {
    if (!this.mathfield || (window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.update(ut(this.mathfield)), this.silenceNotifications)) return;
    let e = this.silenceNotifications;
    this.silenceNotifications = !0, this.mathfield.onSelectionDidChange(), this.silenceNotifications = e;
  }
};
function ah(e, t, i, r) {
  let n = e.offsetOf(t);
  if (n < i || n > r) return !1;
  if (!t.hasChildren) return !0;
  let a = e.offsetOf(t.firstChild);
  if (a >= i && a <= r) {
    let o = e.offsetOf(t.lastChild);
    if (o >= i && o <= r) return !0;
  }
  return !1;
}
function Vs(e, t, i) {
  if (!(t != null && t.hasChildren)) return !1;
  let [r, n] = i, a = e.offsetOf(t.firstChild), o = e.offsetOf(t.lastChild);
  return a >= r && a <= n && o >= a && o <= n;
}
function pn(e, t, i, r) {
  var n, a, o, s, l, u;
  let c = i.parent;
  if (c && i instanceof Q) {
    let d = !r && t === "forward" || r === "body" && t === "backward", h = d ? e.offsetOf(i.firstChild) : e.offsetOf(i.lastChild);
    return d ? i.rightDelim !== "?" && i.rightDelim !== "." ? (i.leftDelim = ".", i.isDirty = !0) : (c.addChildrenAfter(i.removeBranch("body"), i), c.removeChild(i), h--) : i.leftDelim !== "?" && i.leftDelim !== "." ? (i.rightDelim = ".", i.isDirty = !0) : (c.addChildrenAfter(i.removeBranch("body"), i), c.removeChild(i), h--), e.position = h, !0;
  }
  if (c && i.type === "surd") {
    if (t === "forward" && !r || t === "backward" && r === "body") {
      let d = i.leftSibling;
      i.hasChildren && c.addChildrenAfter(i.removeBranch("body"), i), c.removeChild(i), e.position = e.offsetOf(d);
    } else t === "forward" && r === "body" ? e.position = e.offsetOf(i) : !r && t === "backward" ? i.hasChildren ? e.position = e.offsetOf(i.lastChild) : (e.position = Math.max(0, e.offsetOf(i) - 1), c.removeChild(i)) : r === "above" && (i.hasEmptyBranch("above") && i.removeBranch("above"), t === "backward" ? e.position = e.offsetOf(i.leftSibling) : e.position = e.offsetOf(i.body[0]));
    return !0;
  }
  if (c && (i.type === "box" || i.type === "enclose")) {
    let d = r && t === "backward" || !r && t === "forward" ? i.leftSibling : i.lastChild;
    return c.addChildrenAfter(i.removeBranch("body"), i), c.removeChild(i), e.position = e.offsetOf(d), !0;
  }
  if (i.type === "genfrac" || i.type === "overunder") {
    if (!r) return i.type === "overunder" && i.hasEmptyBranch("body") || i.type === "genfrac" && i.hasEmptyBranch("below") && i.hasEmptyBranch("above") ? !1 : (e.position = e.offsetOf(t === "forward" ? i.firstChild : i.lastChild), !0);
    let d = kr.fractionNavigationOrder === "numerator-denominator" ? "above" : "below", h = d === "above" ? "below" : "above";
    if (c && (t === "forward" && r === d || t === "backward" && r === h)) {
      let p = i.removeBranch(d), m = i.removeBranch(h);
      return c.addChildrenAfter([...p, ...m], i), c.removeChild(i), e.position = e.offsetOf(p.length > 0 ? p[p.length - 1] : m[0]), !0;
    }
    return t === "backward" ? e.position = e.offsetOf(i.leftSibling) : e.position = e.offsetOf(i), !0;
  }
  if (i.isExtensibleSymbol || i.type === "subsup") {
    if (!r && t === "forward") return !1;
    if (!r) {
      if (i.subscript || i.superscript) {
        let d = t === "forward" ? (o = (n = i.superscript) == null ? void 0 : n[0]) != null ? o : (a = i.subscript) == null ? void 0 : a[0] : (u = (s = i.subscript) == null ? void 0 : s[0].lastSibling) != null ? u : (l = i.superscript) == null ? void 0 : l[0].lastSibling;
        return d && (e.position = e.offsetOf(d)), !0;
      }
      return !1;
    }
    if (!i.hasChildren && i.type === "subsup") {
      let d = t === "forward" ? e.offsetOf(i) : Math.max(0, e.offsetOf(i) - 1);
      return i.parent.removeChild(i), e.position = d, !0;
    }
    if (r === "superscript") if (t === "backward") {
      let d = e.offsetOf(i.firstChild) - 1;
      e.position = d;
    } else i.subscript ? e.position = e.offsetOf(i.subscript[0]) : e.position = e.offsetOf(i);
    else r === "subscript" && (t === "backward" && i.superscript ? e.position = e.offsetOf(i.superscript[0].lastSibling) : t === "backward" ? e.position = e.offsetOf(i.firstChild) - 1 : e.position = e.offsetOf(i));
    if (r && i.hasEmptyBranch(r) && (i.removeBranch(r), i.type === "subsup" && !i.subscript && !i.superscript)) {
      let d = t === "forward" ? e.offsetOf(i) : Math.max(0, e.offsetOf(i) - 1);
      i.parent.removeChild(i), e.position = d;
    }
    return !0;
  }
  if ((c == null ? void 0 : c.type) === "genfrac" && !r && i.type !== "first") {
    let d = e.offsetOf(i.leftSibling);
    return c.removeChild(i), c.hasEmptyBranch("above") && c.hasEmptyBranch("below") ? (d = e.offsetOf(c.leftSibling), c.parent.removeChild(c), e.announce("delete", void 0, [c]), e.position = d, !0) : (e.announce("delete", void 0, [i]), e.position = d, !0);
  }
  if (t === "backward" && ((c == null ? void 0 : c.command) === "\\ln" || (c == null ? void 0 : c.command) === "\\log") && i.parentBranch !== "body") {
    let d = e.offsetOf(c.leftSibling);
    return c.parent.removeChild(c), e.announce("delete", void 0, [c]), e.position = d, !0;
  }
  return !1;
}
function Sy(e) {
  return !e.mathfield.isSelectionEditable || !e.contentWillChange({ inputType: "deleteContentBackward" }) ? !1 : e.selectionIsCollapsed ? e.deferNotifications({ content: !0, selection: !0, type: "deleteContentBackward" }, () => {
    let t = e.at(e.position);
    if (!(t && pn(e, "backward", t))) {
      if (t != null && t.isFirstSibling) {
        if (pn(e, "backward", t.parent, t.parentBranch)) return;
        t = null;
      }
      if (!t) {
        e.announce("plonk");
        return;
      }
      e.position = e.offsetOf(t.leftSibling), t.parent.removeChild(t), e.announce("delete", void 0, [t]);
    }
  }) : dt(e, ge(e.selection), "deleteContentBackward");
}
function Cy(e) {
  return !e.mathfield.isSelectionEditable || !e.contentWillChange({ inputType: "deleteContentForward" }) ? !1 : e.selectionIsCollapsed ? e.deferNotifications({ content: !0, selection: !0, type: "deleteContentForward" }, () => {
    var t, i;
    let r = e.at(e.position).rightSibling;
    if (r && pn(e, "forward", r)) return;
    if (r) {
      if (e.at(e.position).isLastSibling && pn(e, "forward", r.parent, r.parentBranch)) return;
    } else {
      if (r = e.at(e.position), r.isLastSibling && pn(e, "forward", r.parent, r.parentBranch)) return;
      r = void 0;
    }
    if (e.position === e.lastOffset || !r) {
      e.announce("plonk");
      return;
    }
    r.parent.removeChild(r);
    let n = (t = e.at(e.position)) == null ? void 0 : t.rightSibling;
    for (; (n == null ? void 0 : n.type) === "subsup"; ) n.parent.removeChild(n), n = (i = e.at(e.position)) == null ? void 0 : i.rightSibling;
    e.announce("delete", void 0, [r]);
  }) : dt(e, ge(e.selection), "deleteContentForward");
}
function dt(e, t, i) {
  let r = e.getAtoms(t);
  if (r.length > 0 && r[0].parent) {
    let n = r[0].parent.firstChild;
    n.type === "first" && (n = n.rightSibling);
    let a = r[r.length - 1].parent.lastChild, o = r[0];
    o.type === "first" && (o = o.rightSibling);
    let s = r[r.length - 1];
    if (o === n && s === a) {
      let l = r[0].parent;
      l.parent && l.type !== "prompt" && (t = [e.offsetOf(l.leftSibling), e.offsetOf(l)]);
    }
    if (r.length === 1 && r[0].type === "placeholder" && r[0].parent.type === "genfrac") {
      let l = r[0].parent, u = r[0].parentBranch === "below" ? "above" : "below", c = e.offsetOf(l.leftSibling);
      return e.deferNotifications({ content: !0, selection: !0, type: i }, () => {
        var d, h;
        let p = l.removeBranch(u);
        if (p.length === 1 && p[0].type === "placeholder") (h = l.parent) == null || h.removeChild(l), e.position = Math.max(0, c);
        else {
          let m = l.parent.addChildrenAfter(p, l);
          (d = l.parent) == null || d.removeChild(l), e.position = e.offsetOf(m);
        }
      });
    }
  }
  return e.deferNotifications({ content: !0, selection: !0, type: i }, () => e.deleteAtoms(t));
}
Ce({ deleteAll: (e) => e.contentWillChange({ inputType: "deleteContent" }) && dt(e, [0, -1], "deleteContent"), deleteForward: (e) => Cy(e), deleteBackward: (e) => Sy(e), deleteNextWord: (e) => e.contentWillChange({ inputType: "deleteWordForward" }) && dt(e, [e.anchor, pl(e, e.position, "forward")], "deleteWordForward"), deletePreviousWord: (e) => e.contentWillChange({ inputType: "deleteWordBackward" }) && dt(e, [e.anchor, pl(e, e.position, "backward")], "deleteWordBackward"), deleteToGroupStart: (e) => e.contentWillChange({ inputType: "deleteSoftLineBackward" }) && dt(e, [e.anchor, e.offsetOf(e.at(e.position).firstSibling)], "deleteSoftLineBackward"), deleteToGroupEnd: (e) => e.contentWillChange({ inputType: "deleteSoftLineForward" }) && dt(e, [e.anchor, e.offsetOf(e.at(e.position).lastSibling)], "deleteSoftLineForward"), deleteToMathFieldStart: (e) => e.contentWillChange({ inputType: "deleteHardLineBackward" }) && dt(e, [e.anchor, 0], "deleteHardLineBackward"), deleteToMathFieldEnd: (e) => e.contentWillChange({ inputType: "deleteHardLineForward" }) && dt(e, [e.anchor, -1], "deleteHardLineForward") }, { target: "model", audioFeedback: "delete", canUndo: !0, changeContent: !0, changeSelection: !0 });
var Ly = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 21px;"  viewBox="0 0 576 512" role="img" aria-label="${$("tooltip.toggle virtual keyboard")}"><path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16V112c0-8.823 7.177-16 16-16h480c8.823 0 16 7.177 16 16v288zM168 268v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-336 80v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm384 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zM120 188v-24c0-6.627-5.373-12-12-12H84c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm96 0v-24c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12zm-96 152v-8c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"/></svg>`, By = `<svg xmlns="http://www.w3.org/2000/svg" style="height: 18px;" viewBox="0 0 448 512" role="img" aria-label="${$("tooltip.menu")}"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`, Ay = class {
  constructor(e, t) {
    this.focusBlurInProgress = !1;
    var i, r, n;
    this.options = f(b(f({}, Ua()), { macros: Gl(), registers: bp() }), mo(t)), this.eventController = new AbortController();
    let a = this.eventController.signal;
    t.eventSink && (this.host = t.eventSink), this.element = e, e.mathfield = this, this.blurred = !0, this.keystrokeCaptionVisible = !1, this.suggestionIndex = 0, this.inlineShortcutBuffer = [], this.inlineShortcutBufferFlushTimer = 0, this.defaultStyle = {}, this.adoptStyle = "left", this.options.defaultMode === "inline-math" ? this.element.classList.add("ML__is-inline") : this.element.classList.remove("ML__is-inline"), this.dirty = !1;
    let o = (r = (i = t.value) != null ? i : this.element.textContent) != null ? r : "";
    o = o.trim();
    let s = Id(this.options), l = new v({ type: "root", mode: s, body: Te(o, { context: this.context }) });
    this.model = new My(this, s, l), this.undoManager = new a2(this.model);
    let u = [];
    if (u.push("<span contenteditable=true aria-multiline=false part=keyboard-sink class=ML__keyboard-sink autocapitalize=off autocomplete=off autocorrect=off spellcheck=false inputmode=none tabindex=0></span>"), u.push('<span part=container class=ML__container aria-hidden=true  style="visibility:hidden">'), u.push("<span part=content class=ML__content>"), u.push(Lm(this)), u.push("</span>"), window.mathVirtualKeyboard && (u.push(`<div part=virtual-keyboard-toggle class=ML__virtual-keyboard-toggle role=button ${this.hasEditableContent ? "" : 'style="display:none;"'} data-l10n-tooltip="tooltip.toggle virtual keyboard">`), u.push(Ly), u.push("</div>")), u.push('<div part=menu-toggle class=ML__menu-toggle role=button data-l10n-tooltip="tooltip.menu">'), u.push(By), u.push("</div>"), u.push("</span>"), u.push("<span class=ML__sr-only>"), u.push("<span role=status aria-live=assertive aria-atomic=true></span>"), u.push("</span>"), this.element.innerHTML = globalThis.MathfieldElement.createHTML(u.join("")), !this.element.children) {
      console.error("%cMathLive 0.98.6: Something went wrong and the mathfield could not be created.%c\nIf you are using Vue, this may be because you are using the runtime-only build of Vue. Make sure to include `runtimeCompiler: true` in your Vue configuration. There may a warning from Vue in the log above.", "color:red;font-family:system-ui;font-size:1.2rem;font-weight:bold", "color:inherit;font-family:system-ui;font-size:inherit;font-weight:inherit");
      return;
    }
    this._l10Subscription = N.subscribe(() => N.update(this.element)), N.update(this.element), this.field = this.element.querySelector("[part=content]"), this.field.addEventListener("click", (d) => d.stopImmediatePropagation(), { capture: !1, signal: a }), this.field.addEventListener("wheel", this, { passive: !1, signal: a }), "PointerEvent" in window ? this.field.addEventListener("pointerdown", this, { signal: a }) : this.field.addEventListener("mousedown", this, { signal: a }), (n = this.element.querySelector("[part=virtual-keyboard-toggle]")) == null || n.addEventListener("click", () => {
      window.mathVirtualKeyboard.visible ? window.mathVirtualKeyboard.hide() : (window.mathVirtualKeyboard.show({ animate: !0 }), window.mathVirtualKeyboard.update(ut(this)));
    }, { signal: a }), this._menu = new V2(fy(this), { host: this.host }), this.field.addEventListener("contextmenu", this, { signal: a });
    let c = this.element.querySelector("[part=menu-toggle]");
    c == null || c.addEventListener("pointerdown", (d) => {
      if (d.currentTarget !== c || this._menu.state !== "closed") return;
      this.element.classList.add("tracking");
      let h = c.getBoundingClientRect();
      this._menu.modifiers = Si(d), this._menu.show({ target: c, location: { x: h.left, y: h.bottom }, onDismiss: () => this.element.classList.remove("tracking") }), d.preventDefault(), d.stopPropagation();
    }, { signal: a }), (this.model.atoms.length <= 1 || this.disabled || this.readOnly && !this.hasEditableContent || this.userSelect === "none") && (c.style.display = "none"), this.ariaLiveText = this.element.querySelector("[role=status]"), this.keyboardDelegate = u3(this.element.querySelector(".ML__keyboard-sink"), this.element, this), window.addEventListener("resize", this, { signal: a }), document.addEventListener("scroll", this, { signal: a }), this.resizeObserver = new ResizeObserver(() => ee(this)), this.resizeObserver.observe(this.field), window.mathVirtualKeyboard.addEventListener("virtual-keyboard-toggle", this, { signal: a }), Ee !== "ready" && document.fonts.ready.then(() => ho(this)), e.querySelector("[part=container]").style.removeProperty("visibility"), this.undoManager.startRecording(), this.undoManager.snapshot("set-value");
  }
  get defaultStyle() {
    return this._defaultStyle;
  }
  set defaultStyle(e) {
    this._defaultStyle = e;
  }
  get effectiveStyle() {
    if (this.adoptStyle === "none") return this.defaultStyle;
    let e = this.model.at(this.model.position), t = this.adoptStyle === "right" ? e.rightSibling : e;
    if (!t) return this.defaultStyle;
    if (t.type === "group") {
      let i = t.branch("body");
      return !i || i.length < 2 ? {} : this.adoptStyle === "right" ? i[1].computedStyle : i[i.length - 1].computedStyle;
    }
    return t.computedStyle;
  }
  connectToVirtualKeyboard() {
    this.connectedToVirtualKeyboard || (this.connectedToVirtualKeyboard = !0, window.addEventListener("message", this, { signal: this.eventController.signal }), window.mathVirtualKeyboard.connect(), window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.update(ut(this)), Ka(this));
  }
  disconnectFromVirtualKeyboard() {
    this.connectedToVirtualKeyboard && (window.removeEventListener("message", this), window.mathVirtualKeyboard.disconnect(), this.connectedToVirtualKeyboard = !1, xl());
  }
  showMenu(e) {
    var t, i;
    let r = (i = (t = e == null ? void 0 : e.location) != null ? t : en(this.field)) != null ? i : void 0, n = e == null ? void 0 : e.modifiers, a = this.element.querySelector("[part=container]");
    return this._menu.show({ target: a, location: r, modifiers: n });
  }
  get colorMap() {
    return (e) => {
      var t, i, r;
      return (r = (i = (t = this.options).colorMap) == null ? void 0 : i.call(t, e)) != null ? r : Lo(e);
    };
  }
  get backgroundColorMap() {
    return (e) => {
      var t, i, r, n, a, o;
      return (o = (a = (i = (t = this.options).backgroundColorMap) == null ? void 0 : i.call(t, e)) != null ? a : (n = (r = this.options).colorMap) == null ? void 0 : n.call(r, e)) != null ? o : Jl(e);
    };
  }
  get smartFence() {
    var e;
    return (e = this.options.smartFence) != null ? e : !1;
  }
  get readOnly() {
    var e;
    return (e = this.options.readOnly) != null ? e : !1;
  }
  get disabled() {
    var e, t;
    return (t = (e = this.host) == null ? void 0 : e.disabled) != null ? t : !1;
  }
  get contentEditable() {
    return this.host ? this.host.getAttribute("contenteditable") !== "false" : !1;
  }
  get userSelect() {
    if (!this.host) return "";
    let e = getComputedStyle(this.host);
    return e.getPropertyValue("user-select") || e.getPropertyValue("-webkit-user-select");
  }
  get hasEditableContent() {
    return this.disabled || !this.contentEditable ? !1 : !this.readOnly || this.hasEditablePrompts;
  }
  get hasEditablePrompts() {
    return this.readOnly && !this.disabled && this.contentEditable && this.model.findAtom((e) => e.type === "prompt" && !e.locked) !== void 0;
  }
  get isSelectionEditable() {
    if (this.disabled || !this.contentEditable) return !1;
    if (!this.readOnly) return !0;
    let e = this.model.at(this.model.anchor), t = this.model.at(this.model.position), i = v.commonAncestor(e, t);
    return !!((i == null ? void 0 : i.type) === "prompt" || i != null && i.parentPrompt);
  }
  get letterShapeStyle() {
    var e;
    return (e = this.options.letterShapeStyle) != null ? e : "tex";
  }
  get minFontScale() {
    return this.options.minFontScale;
  }
  get selectionStyle() {
    if (this.model.selectionIsCollapsed) return this.effectiveStyle;
    let e = this.model.getAtoms(this.model.selection);
    if (e.length === 0) return {};
    let t = f({}, e[0].style);
    for (let i of e) for (let [r, n] of Object.entries(i.style)) t[r] !== n && delete t[r];
    return t;
  }
  queryStyle(e) {
    let t = yl(this, e);
    "verbatimColor" in t && delete t.verbatimColor, "verbatimBackgroundColor" in t && delete t.verbatimBackgroundColor;
    let i = Object.keys(t).length;
    if (i === 0) return "all";
    if (i > 1) {
      for (let l of Object.keys(t)) {
        let u = this.queryStyle({ [l]: t[l] });
        if (u === "none") return "none";
        if (u === "some") return "some";
      }
      return "all";
    }
    let r = Object.keys(t)[0], n = t[r];
    if (this.model.selectionIsCollapsed) return this.effectiveStyle[r] === n ? "all" : "none";
    let a = this.model.getAtoms(this.model.selection, { includeChildren: !0 }), o = a.length;
    if (o === 0) return "none";
    let s = 0;
    for (let l of a) {
      if (l.type === "first") {
        o -= 1;
        continue;
      }
      l.style[r] === n && (s += 1);
    }
    return s === 0 ? "none" : s === o ? "all" : "some";
  }
  get keybindings() {
    var e, t;
    if (this._keybindings) return this._keybindings;
    let [i, r] = m3(this.options.keybindings, (e = vn()) != null ? e : o3());
    return ((t = vn()) == null ? void 0 : t.score) > 0 && (this._keybindings = i, r.length > 0 && console.error("MathLive 0.98.6: Invalid keybindings for current keyboard layout", r)), i;
  }
  get menu() {
    return this._menu;
  }
  setOptions(e) {
    var t;
    this.options = f(f({}, this.options), mo(e)), this._keybindings = void 0, this.options.defaultMode === "inline-math" ? this.element.classList.add("ML__is-inline") : this.element.classList.remove("ML__is-inline");
    let i = this.options.defaultMode;
    i === "inline-math" && (i = "math"), ((t = this.model.root.firstChild) == null ? void 0 : t.mode) !== i && (this.model.root.firstChild.mode = i), this.options.readOnly && this.hasFocus() && window.mathVirtualKeyboard.visible && this.executeCommand("hideVirtualKeyboard");
    let r = v.serialize([this.model.root], { expandMacro: !1, defaultMode: this.options.defaultMode });
    ("macros" in e || this.model.getValue() !== r) && G.insert(this.model, r, { insertionMode: "replaceAll", selectionMode: "after", format: "latex", silenceNotifications: !0, mode: "math" }), ("value" in e || "macros" in e || "registers" in e || "colorMap" in e || "backgroundColorMap" in e || "letterShapeStyle" in e || "minFontScale" in e || "readOnly" in e || "placeholderSymbol" in e) && ee(this);
  }
  getOptions(e) {
    return _i(this.options, e);
  }
  getOption(e) {
    return _i(this.options, e);
  }
  async handleEvent(e) {
    var t;
    if (wi(this)) {
      if (uu(e)) {
        if (!tu(e.origin, (t = this.options.originValidator) != null ? t : "none")) throw new DOMException(`Message from unknown origin (${e.origin}) cannot be handled`, "SecurityError");
        let { action: i } = e.data;
        if (i === "execute-command") {
          let r = e.data.command;
          if (pr(r) === "virtual-keyboard") return;
          this.executeCommand(r);
        } else i === "update-state" || (i === "focus" ? this.focus({ preventScroll: !0 }) : i === "blur" && this.blur());
        return;
      }
      switch (e.type) {
        case "focus":
          this.onFocus();
          break;
        case "blur":
          this.onBlur();
          break;
        case "mousedown":
          this.userSelect !== "none" && Wd(this, e);
          break;
        case "pointerdown":
          this.userSelect !== "none" && (Wd(this, e), e.shiftKey === !1 && await Qd(e, this.element.querySelector("[part=container]"), this._menu) && go.stop());
          break;
        case "contextmenu":
          this.userSelect !== "none" && e.shiftKey === !1 && await Qd(e, this.element.querySelector("[part=container]"), this._menu) && go.stop();
          break;
        case "virtual-keyboard-toggle":
          this.hasFocus() && Ka(this);
          break;
        case "resize":
          this.geometryChangeTimer && cancelAnimationFrame(this.geometryChangeTimer), this.geometryChangeTimer = requestAnimationFrame(() => wi(this) && this.onGeometryChange());
          break;
        case "scroll":
          this.geometryChangeTimer && cancelAnimationFrame(this.geometryChangeTimer), this.geometryChangeTimer = requestAnimationFrame(() => wi(this) && this.onGeometryChange());
          break;
        case "wheel":
          this.onWheel(e);
          break;
        case "message":
          break;
        default:
          console.warn("Unexpected event type", e.type);
      }
    }
  }
  dispose() {
    if (!wi(this)) return;
    N.unsubscribe(this._l10Subscription), this.keyboardDelegate.dispose(), this.keyboardDelegate = void 0, this.eventController.abort(), this.eventController = void 0, this.resizeObserver.disconnect(), window.mathVirtualKeyboard.removeEventListener("virtual-keyboard-toggle", this), this.disconnectFromVirtualKeyboard(), this.model.dispose();
    let e = this.element;
    delete e.mathfield, this.element = void 0, this.host = void 0, this.field = void 0, this.ariaLiveText = void 0, g2(), x3(), P2();
  }
  flushInlineShortcutBuffer(e) {
    if (e != null || (e = { defer: !1 }), !e.defer) {
      this.inlineShortcutBuffer = [], clearTimeout(this.inlineShortcutBufferFlushTimer), this.inlineShortcutBufferFlushTimer = 0;
      return;
    }
    this.options.inlineShortcutTimeout > 0 && (clearTimeout(this.inlineShortcutBufferFlushTimer), this.inlineShortcutBufferFlushTimer = setTimeout(() => this.flushInlineShortcutBuffer(), this.options.inlineShortcutTimeout));
  }
  executeCommand(e) {
    return pr(e) === "virtual-keyboard" ? (this.focus({ preventScroll: !0 }), window.mathVirtualKeyboard.executeCommand(e), requestAnimationFrame(() => window.mathVirtualKeyboard.update(ut(this))), !1) : L3(this, e);
  }
  get errors() {
    return S4(this.model.getValue(), { context: this.context });
  }
  getValue(e, t, i) {
    return this.model.getValue(e, t, i);
  }
  setValue(e, t) {
    var i;
    t = t ?? { mode: "math" }, t.insertionMode === void 0 && (t.insertionMode = "replaceAll"), (t.format === void 0 || t.format === "auto") && (t.format = "latex"), (t.mode === void 0 || t.mode === "auto") && (t.mode = (i = Vg(this.model, this.model.position)) != null ? i : "math");
    let r = this.undoManager.canUndo();
    G.insert(this.model, e, t) && (ee(this), r || this.undoManager.reset(), this.undoManager.snapshot("set-value"));
  }
  get expression() {
    let e = globalThis.MathfieldElement.computeEngine;
    return e ? e.box(e.parse(this.model.getValue("latex-unstyled"))) : (console.error("MathLive 0.98.6:  no compute engine available. Make sure the Compute Engine library is loaded."), null);
  }
  scrollIntoView() {
    var e;
    if (!this.element) return;
    if (this.host) {
      if (this.options.onScrollIntoView) this.options.onScrollIntoView(this);
      else if (this.host.scrollIntoView({ block: "nearest", inline: "nearest" }), window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.container === window.document.body) {
        let r = window.mathVirtualKeyboard.boundingRect, n = this.host.getBoundingClientRect();
        n.bottom > r.top && ((e = window.document.scrollingElement) == null || e.scrollBy(0, n.bottom - r.top + 8));
      }
    }
    this.dirty && Ei(this, { interactive: !0 });
    let t = this.field.getBoundingClientRect(), i = null;
    if (this.model.selectionIsCollapsed) i = en(this.field);
    else {
      let r = Lp(this);
      if (r.length > 0) {
        let n = -1 / 0, a = -1 / 0;
        for (let o of r) o.right > n && (n = o.right), o.top < a && (a = o.top);
        i = { x: n + t.left - this.field.scrollLeft, y: a + t.top - this.field.scrollTop, height: 0 };
      }
    }
    if (this.host && i) {
      let r = this.host.getBoundingClientRect(), n = i.y, a = this.host.scrollTop;
      n < r.top ? a = n - r.top + this.host.scrollTop : n > r.bottom && (a = n - r.bottom + this.host.scrollTop + i.height), this.host.scroll({ top: a, left: 0 });
    }
    if (i) {
      let r = i.x - window.scrollX, n = this.field.scrollLeft;
      r < t.left ? n = r - t.left + this.field.scrollLeft - 20 : r > t.right && (n = r - t.right + this.field.scrollLeft + 20), this.field.scroll({ top: this.field.scrollTop, left: n });
    }
  }
  insert(e, t) {
    return typeof e != "string" || e.length === 0 && ((t == null ? void 0 : t.insertionMode) === "insertBefore" || (t == null ? void 0 : t.insertionMode) === "insertAfter") || e.length === 0 && this.model.selectionIsCollapsed ? !1 : (this.flushInlineShortcutBuffer(), t = t ?? { mode: "math" }, t.focus && this.focus(), t.feedback && (globalThis.MathfieldElement.keypressVibration && tp() && navigator.vibrate(Bm), globalThis.MathfieldElement.playSound("keypress")), e === "\\\\" ? Km(this.model) : e === "&" ? $m(this.model) : this.model.selectionIsCollapsed ? G.insert(this.model, e, f({ style: this.model.at(this.model.position).computedStyle }, t)) : G.insert(this.model, e, t), this.snapshot(`insert-${this.model.at(this.model.position).type}`), ee(this), t.scrollIntoView && this.scrollIntoView(), !0);
  }
  switchMode(e, t = "", i = "") {
    var r;
    if (this.model.mode === e || !this.hasEditableContent || !this.contentEditable || this.disabled) return;
    let n = this.model.mode;
    if (this.model.mode = e, !((r = this.host) != null && r.dispatchEvent(new Event("mode-change", { bubbles: !0, composed: !0, cancelable: !0 })))) {
      this.model.mode = n;
      return;
    }
    let a = this.model.mode, { model: o } = this;
    o.deferNotifications({ content: !!i || !!t, selection: !0, type: "insertText" }, () => {
      let s = !1;
      if (this.flushInlineShortcutBuffer(), this.stopCoalescingUndo(), t && e !== "latex") {
        let l = Te(t, { context: this.context, parseMode: e });
        o.collapseSelection("forward");
        let u = o.at(o.position);
        o.position = o.offsetOf(u.parent.addChildrenAfter(l, u)), s = !0;
      }
      if (this.model.mode = e, e === "latex") {
        let l = o.selectionIsCollapsed;
        xr(this, "accept");
        let u, c = o.at(o.position);
        if (l) u = "\\";
        else {
          let h = ge(o.selection);
          u = this.model.getValue(h, "latex");
          let p = this.model.extractAtoms(h);
          p.length === 1 && p[0].type === "placeholder" && (u = t, l = !0), c = o.at(h[0]);
        }
        let d = new an(u);
        c.parent.addChildAfter(d, c), l ? o.position = o.offsetOf(d.lastChild) : o.setSelection(o.offsetOf(d.firstChild), o.offsetOf(d.lastChild));
      } else xn(o).forEach((l) => {
        l.isError = !1;
      });
      if (i) {
        let l = Te(i, { context: this.context, parseMode: a });
        o.collapseSelection("forward");
        let u = o.at(o.position);
        o.position = o.offsetOf(u.parent.addChildrenAfter(l, u)), s = !0;
      }
      return ee(this), this.undoManager.snapshot(e === "latex" ? "insert-latex" : "insert"), s;
    }), this.model.mode = e, window.mathVirtualKeyboard.update(ut(this));
  }
  hasFocus() {
    return !this.blurred;
  }
  focus(e) {
    var t;
    this.hasFocus() || (this.keyboardDelegate.focus(), this.connectToVirtualKeyboard(), this.onFocus(), this.model.announce("line")), (t = e == null ? void 0 : e.preventScroll) != null && t || this.scrollIntoView();
  }
  blur() {
    this.disconnectFromVirtualKeyboard(), this.hasFocus() && this.keyboardDelegate.blur();
  }
  select() {
    this.model.selection = { ranges: [[0, this.model.lastOffset]] }, this.focus();
  }
  applyStyle(e, t = {}) {
    var i, r;
    let n = { operation: "set", silenceNotifications: !1 };
    ao(t) ? n.range = t : (t.operation === "toggle" && (n.operation = "toggle"), n.range = t.range, n.silenceNotifications = (i = t.silenceNotifications) != null ? i : !1);
    let a = yl(this, e), o = (r = n.operation) != null ? r : "set";
    if (n.range === void 0 && this.model.selectionIsCollapsed) {
      if (o === "set") {
        this.defaultStyle = f(f({}, this.defaultStyle), a);
        return;
      }
      let s = f({}, this.defaultStyle);
      for (let l of Object.keys(a)) s[l] === a[l] ? (l === "color" && delete s.verbatimColor, l === "backgroundColor" && delete s.verbatimBackgroundColor, delete s[l]) : s[l] = a[l];
      this.defaultStyle = s;
      return;
    }
    this.model.deferNotifications({ content: !n.silenceNotifications, type: "insertText" }, () => {
      if (n.range === void 0) for (let s of this.model.selection.ranges) hl(this.model, s, a, { operation: o });
      else hl(this.model, n.range, a, { operation: o });
    }), ee(this);
  }
  toggleContextMenu() {
    var e;
    return this._menu.visible ? this._menu.state === "open" ? (this._menu.hide(), !0) : (this._menu.show({ target: this.element.querySelector("[part=container]"), location: (e = this.getCaretPoint()) != null ? e : void 0, onDismiss: () => {
      var t;
      return (t = this.element) == null ? void 0 : t.focus();
    } }), !0) : !1;
  }
  getCaretPoint() {
    let e = en(this.field);
    return e ? { x: e.x, y: e.y } : null;
  }
  setCaretPoint(e, t) {
    let i = dn(this, e, t, { bias: 0 });
    if (i < 0) return !1;
    let r = this.model.position;
    return this.model.position = i, this.model.announce("move", r), ee(this), !0;
  }
  getPrompt(e) {
    return this.model.findAtom((i) => i.type === "prompt" && i.placeholderId === e);
  }
  getPromptValue(e, t) {
    let i = this.getPrompt(e);
    if (!i) return "";
    let r = this.model.offsetOf(i.firstChild), n = this.model.offsetOf(i.lastChild);
    return this.model.getValue(r, n, t);
  }
  getPrompts(e) {
    return this.model.getAllAtoms().filter((t) => t.type !== "prompt" ? !1 : e ? !(e.id && t.placeholderId !== e.id || e.locked && t.locked !== e.locked || e.correctness === "undefined" && t.correctness || e.correctness && t.correctness !== e.correctness) : !0).map((t) => t.placeholderId);
  }
  setPromptValue(e, t, i) {
    if (t !== void 0) {
      let r = this.getPrompt(e);
      if (!r) {
        console.error(`MathLive 0.98.6: unknown prompt ${e}`);
        return;
      }
      let n = this.model.getBranchRange(this.model.offsetOf(r), "body");
      this.model.setSelection(n), this.insert(t, b(f({}, i), { insertionMode: "replaceSelection" }));
    }
    i != null && i.silenceNotifications && (this.valueOnFocus = this.getValue()), ee(this);
  }
  setPromptState(e, t, i) {
    let r = this.getPrompt(e);
    if (!r) {
      console.error(`MathLive 0.98.6: unknown prompt ${e}`);
      return;
    }
    t === "undefined" ? r.correctness = void 0 : typeof t == "string" && (r.correctness = t), typeof i == "boolean" && (r.locked = i, r.captureSelection = i), ee(this);
  }
  getPromptState(e) {
    let t = this.getPrompt(e);
    return t ? [t.correctness, t.locked] : (console.error(`MathLive 0.98.6: unknown prompt ${e}`), [void 0, !0]);
  }
  getPromptRange(e) {
    let t = this.getPrompt(e);
    return t ? this.model.getBranchRange(this.model.offsetOf(t), "body") : (console.error(`MathLive 0.98.6: unknown prompt ${e}`), [0, 0]);
  }
  canUndo() {
    return this.undoManager.canUndo();
  }
  canRedo() {
    return this.undoManager.canRedo();
  }
  popUndoStack() {
    this.undoManager.pop();
  }
  snapshot(e) {
    var t;
    this.undoManager.snapshot(e) && (window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.update(ut(this)), (t = this.host) == null || t.dispatchEvent(new CustomEvent("undo-state-change", { bubbles: !0, composed: !0, detail: { type: "snapshot" } })));
  }
  stopCoalescingUndo() {
    this.undoManager.stopCoalescing(this.model.selection);
  }
  stopRecording() {
    this.undoManager.stopRecording();
  }
  startRecording() {
    this.undoManager.startRecording();
  }
  undo() {
    var e;
    this.undoManager.undo() && (window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.update(ut(this)), (e = this.host) == null || e.dispatchEvent(new CustomEvent("undo-state-change", { bubbles: !0, composed: !0, detail: { type: "undo" } })));
  }
  redo() {
    var e;
    this.undoManager.redo() && (window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.update(ut(this)), (e = this.host) == null || e.dispatchEvent(new CustomEvent("undo-state-change", { bubbles: !0, composed: !0, detail: { type: "undo" } })));
  }
  resetUndo() {
    var e;
    (e = this.undoManager) == null || e.reset();
  }
  onSelectionDidChange() {
    var e, t;
    let i = this.model;
    this.keyboardDelegate.setValue(i.getValue(this.model.selection, "latex-expanded"));
    {
      let r = i.at(i.position), n = (e = r.mode) != null ? e : Id(this.options);
      this.model.mode !== n && (this.model.mode === "latex" ? (xr(this, "accept", { mode: n }), i.position = i.offsetOf(r)) : this.switchMode(n));
    }
    (t = this.host) == null || t.dispatchEvent(new Event("selection-change", { bubbles: !0, composed: !0 })), window.mathVirtualKeyboard.visible && window.mathVirtualKeyboard.update(ut(this)), Ka(this);
  }
  onContentWillChange(e) {
    var t, i, r;
    return (r = (i = this.host) == null ? void 0 : i.dispatchEvent(new InputEvent("beforeinput", b(f({}, e), { data: e.data ? e.data : (t = e.inputType) != null ? t : "", cancelable: !0, bubbles: !0, composed: !0 })))) != null ? r : !0;
  }
  onFocus() {
    this.focusBlurInProgress || !this.blurred || (this.focusBlurInProgress = !0, this.blurred = !1, this.keyboardDelegate.focus(), this.stopCoalescingUndo(), Ei(this, { interactive: !0 }), this.valueOnFocus = this.model.getValue(), this.hasEditablePrompts && !this.model.at(this.model.anchor).parentPrompt && this.executeCommand("moveToNextPlaceholder"), this.focusBlurInProgress = !1);
  }
  onBlur() {
    var e, t, i;
    if (this.focusBlurInProgress || this.blurred) return;
    this.focusBlurInProgress = !0, this.stopCoalescingUndo(), this.blurred = !0, this.ariaLiveText.textContent = "", wr(this), this.model.getValue() !== this.valueOnFocus && ((e = this.host) == null || e.dispatchEvent(new Event("change", { bubbles: !0, composed: !0 }))), this.disconnectFromVirtualKeyboard(), (t = this.host) == null || t.dispatchEvent(new Event("blur", { bubbles: !1, composed: !0 })), (i = this.host) == null || i.dispatchEvent(new UIEvent("focusout", { bubbles: !0, composed: !0 })), ee(this), this.focusBlurInProgress = !1, xl();
    let r = new AbortController(), n = r.signal;
    document.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" && document.addEventListener("visibilitychange", () => {
        wi(this) && document.visibilityState === "visible" && this.focus({ preventScroll: !0 });
      }, { once: !0, signal: n });
    }, { once: !0, signal: n }), setTimeout(() => r.abort(), 100);
  }
  onInput(e) {
    fl(this, e);
  }
  onKeystroke(e) {
    return Vm(this, e);
  }
  onCompositionStart(e) {
    this.model.deleteAtoms(ge(this.model.selection));
    let t = en(this.field);
    t && requestAnimationFrame(() => {
      Ei(this), this.keyboardDelegate.moveTo(t.x, t.y - t.height);
    });
  }
  onCompositionUpdate(e) {
    G3(this.model, e), ee(this);
  }
  onCompositionEnd(e) {
    Z3(this.model), fl(this, e, { simulateKeystroke: !0 });
  }
  onCut(e) {
    if (!this.isSelectionEditable) {
      this.model.announce("plonk");
      return;
    }
    this.model.contentWillChange({ inputType: "deleteByCut" }) && (this.stopCoalescingUndo(), G.onCopy(this, e), dt(this.model, ge(this.model.selection), "deleteByCut"), this.snapshot("cut"), ee(this));
  }
  onCopy(e) {
    G.onCopy(this, e);
  }
  onPaste(e) {
    let t = this.isSelectionEditable;
    return t && (t = G.onPaste(this.model.at(this.model.position).mode, this, e.clipboardData)), t || this.model.announce("plonk"), e.preventDefault(), e.stopPropagation(), t;
  }
  onGeometryChange() {
    this._menu.hide(), No(this), Ka(this);
  }
  onWheel(e) {
    let t = 5 * e.deltaX;
    if (!Number.isFinite(t) || t === 0) return;
    let i = this.field;
    t < 0 && i.scrollLeft === 0 || t > 0 && i.offsetWidth + i.scrollLeft >= i.scrollWidth || (i.scrollBy({ top: 0, left: t }), e.preventDefault(), e.stopPropagation());
  }
  getHTMLElement(e) {
    let t = e;
    for (; !t.id && t.hasChildren; ) t = e.children[0];
    return this.field.querySelector(`[data-atom-id="${t.id}"]`);
  }
  get context() {
    var e, t;
    return { registers: (e = this.options.registers) != null ? e : {}, smartFence: this.smartFence, letterShapeStyle: this.letterShapeStyle, minFontScale: this.minFontScale, placeholderSymbol: (t = this.options.placeholderSymbol) != null ? t : "▢", colorMap: (i) => this.colorMap(i), backgroundColorMap: (i) => this.backgroundColorMap(i), getMacro: (i) => cp(i, this.options.macros), atomIdsSettings: { seed: "random", groupNumbers: !1 } };
  }
};
function sf(e) {
  if (e && (e.classList.remove("ML__highlight"), e.children)) for (let t of e.children) sf(t);
}
function Sl(e, t) {
  var i;
  e && (!t || ((i = e.dataset) == null ? void 0 : i.atomId) === t ? (e.classList.add("ML__highlight"), e.children && e.children.length > 0 && [...e.children].forEach((r) => {
    r instanceof HTMLElement && Sl(r);
  })) : (e.classList.remove("ML__highlight"), e.children && e.children.length > 0 && [...e.children].forEach((r) => {
    r instanceof HTMLElement && Sl(r, t);
  })));
}
function Ey(e, t) {
  var i;
  if (!Re()) return;
  if (globalThis.MathfieldElement.speechEngine !== "amazon") {
    console.error("MathLive 0.98.6: Use Amazon TTS Engine for synchronized highlighting"), typeof globalThis.MathfieldElement.speakHook == "function" && globalThis.MathfieldElement.speakHook(t);
    return;
  }
  if (!globalThis.AWS) {
    console.error("MathLive 0.98.6: AWS SDK not loaded. See https://www.npmjs.com/package/aws-sdk");
    return;
  }
  let r = new globalThis.AWS.Polly({ apiVersion: "2016-06-10" }), n = { OutputFormat: "json", VoiceId: (i = globalThis.MathfieldElement.speechEngineVoice) != null ? i : "Joanna", Engine: "standard", Text: t, TextType: "ssml", SpeechMarkTypes: ["ssml"] };
  jt().readAloudElement = e, r.synthesizeSpeech(n, (a, o) => {
    if (a) {
      console.trace(`MathLive 0.98.6: \`polly.synthesizeSpeech()\` error: ${a}`);
      return;
    }
    if (!(o != null && o.AudioStream)) return;
    let s = new TextDecoder("utf-8").decode(new Uint8Array(o.AudioStream));
    jt().readAloudMarks = s.split(`
`).map((l) => l ? JSON.parse(l) : {}), jt().readAloudTokens = [];
    for (let l of jt().readAloudMarks) l.value && jt().readAloudTokens.push(l.value);
    jt().readAloudCurrentMark = "", n.OutputFormat = "mp3", n.SpeechMarkTypes = [], r.synthesizeSpeech(n, (l, u) => {
      if (l) {
        console.trace(`MathLive 0.98.6: \`polly.synthesizeSpeech("${t}") error:${l}`);
        return;
      }
      if (!(u != null && u.AudioStream)) return;
      let c = new Uint8Array(u.AudioStream), d = new Blob([c.buffer], { type: "audio/mpeg" }), h = URL.createObjectURL(d), p = jt();
      p.readAloudAudio ? p.readAloudAudio.pause() : (p.readAloudAudio = new Audio(), p.readAloudAudio.addEventListener("ended", () => {
        let m = p.readAloudMathfield;
        p.readAloudStatus = "ended", document.body.dispatchEvent(new Event("read-aloud-status-change", { bubbles: !0, composed: !0 })), m ? (Ei(m), p.readAloudElement = null, p.readAloudMathfield = null, p.readAloudTokens = [], p.readAloudMarks = [], p.readAloudCurrentMark = "") : sf(p.readAloudElement);
      }), p.readAloudAudio.addEventListener("timeupdate", () => {
        let m = "", y = p.readAloudAudio.currentTime * 1e3 + 100;
        for (let w of p.readAloudMarks) w.time < y && (m = w.value);
        p.readAloudCurrentMark !== m && (p.readAloudCurrentToken = m, m && m === p.readAloudFinalToken ? p.readAloudAudio.pause() : (p.readAloudCurrentMark = m, Sl(p.readAloudElement, p.readAloudCurrentMark)));
      })), p.readAloudAudio.src = h, p.readAloudStatus = "playing", document.body.dispatchEvent(new Event("read-aloud-status-change", { bubbles: !0, composed: !0 })), p.readAloudAudio.play();
    });
  });
}
Re() || console.error('MathLive 0.98.6: this version of the MathLive library is for use in the browser. A subset of the API is available on the server side in the "mathlive-ssr" library. If using server side rendering (with React for example) you may want to do a dynamic import of the MathLive library inside a `useEffect()` call.');
var q = /* @__PURE__ */ new WeakMap(), Dy = 0.5, qt = { letterShapeStyle: "mf.letterShapeStyle = ...", horizontalSpacingScale: 'Removed. Use `"thinmuskip"`, `"medmuskip"`, and `"thickmuskip"` registers ', macros: "mf.macros = ...", registers: "mf.registers = ...", backgroundColorMap: "mf.backgroundColorMap = ...", colorMap: "mf.colorMap = ...", enablePopover: "mf.popoverPolicy = ...", mathModeSpace: "mf.mathModeSpace = ...", placeholderSymbol: "mf.placeholderSymbol = ...", readOnly: "mf.readOnly = ...", removeExtraneousParentheses: "mf.removeExtraneousParentheses = ...", scriptDepth: "mf.scriptDepth = ...", smartFence: "mf.smartFence = ...", smartMode: "mf.smartMode = ...", smartSuperscript: "mf.smartSuperscript = ...", inlineShortcutTimeout: "mf.inlineShortcutTimeout = ...", inlineShortcuts: "mf.inlineShortcuts = ...", keybindings: "mf.keybindings = ...", virtualKeyboardMode: "mf.mathVirtualKeyboardPolicy = ...", customVirtualKeyboardLayers: "mathVirtualKeyboard.layers = ...", customVirtualKeyboards: "mathVirtualKeyboard.layouts = ...", keypressSound: "mathVirtualKeyboard.keypressSound = ...", keypressVibration: "mathVirtualKeyboard.keypressVibration = ...", plonkSound: "mathVirtualKeyboard.plonkSound = ...", virtualKeyboardContainer: "mathVirtualKeyboard.container = ...", virtualKeyboardLayout: "mathVirtualKeyboard.alphabeticLayout = ...", virtualKeyboardTheme: "No longer supported", virtualKeyboardToggleGlyph: "No longer supported", virtualKeyboardToolbar: "mathVirtualKeyboard.editToolbar = ...", virtualKeyboards: "Use `mathVirtualKeyboard.layouts`", speechEngine: "`MathfieldElement.speechEngine`", speechEngineRate: "`MathfieldElement.speechEngineRate`", speechEngineVoice: "`MathfieldElement.speechEngineVoice`", textToSpeechMarkup: "`MathfieldElement.textToSpeechMarkup`", textToSpeechRules: "`MathfieldElement.textToSpeechRules`", textToSpeechRulesOptions: "`MathfieldElement.textToSpeechRulesOptions`", readAloudHook: "`MathfieldElement.readAloudHook`", speakHook: "`MathfieldElement.speakHook`", computeEngine: "`MathfieldElement.computeEngine`", fontsDirectory: "`MathfieldElement.fontsDirectory`", soundsDirectory: "`MathfieldElement.soundsDirectory`", createHTML: "`MathfieldElement.createHTML`", onExport: "`MathfieldElement.onExport`", onInlineShortcut: "`MathfieldElement.onInlineShortcut`", onScrollIntoView: "`MathfieldElement.onScrollIntoView`", locale: "MathfieldElement.locale = ...", strings: "MathfieldElement.strings = ...", decimalSeparator: "MathfieldElement.decimalSeparator = ...", fractionNavigationOrder: "MathfieldElement.fractionNavigationOrder = ..." }, le = class vi extends HTMLElement {
  constructor(t) {
    if (super(), this._observer = null, t) {
      let i = [];
      for (let r of Object.keys(t)) if (qt[r]) if (qt[r].startsWith("mf.")) if (qt[r].startsWith(`mf.${r}`)) i.push(`Option \`${r}\` cannot be used as a constructor option. Use ${qt[r]}`);
      else {
        let n = qt[r].match(/([a-zA-Z]+) =/);
        i.push(`Option \`${r}\` has been renamed \`${n[1]}\``);
      }
      else i.push(`Option \`${r}\` cannot be used as a constructor option. Use ${qt[r]}`);
      if (i.length > 0) {
        console.group("%cMathLive 0.98.6: %cInvalid Options", "color:#12b; font-size: 1.1rem", "color:#db1111; font-size: 1.1rem"), console.warn("Some of the options passed to `new MathfieldElement(...)` are invalid. \n          See https://cortexjs.io/mathlive/changelog/ for details.");
        for (let r of i) console.warn(r);
        console.groupEnd();
      }
    }
    if (Qi() && (this._internals = this.attachInternals(), this._internals.role = "math", this._internals.ariaLabel = "math input field", this._internals.ariaMultiLine = "false"), this.attachShadow({ mode: "open", delegatesFocus: !0 }), this.shadowRoot && "adoptedStyleSheets" in this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [er("core"), er("mathfield"), er("mathfield-element"), er("ui"), er("menu")], this.shadowRoot.appendChild(document.createElement("span"));
      let i = document.createElement("slot");
      i.style.display = "none", this.shadowRoot.appendChild(i);
    } else this.shadowRoot.innerHTML = "<style>" + ki("core") + ki("mathfield") + ki("mathfield-element") + ki("ui") + ki("menu") + '</style><span></span><slot style="display:none"></slot>';
    t && this._setOptions(t);
  }
  static get formAssociated() {
    return Qi();
  }
  static get optionsAttributes() {
    return { "default-mode": "string", "letter-shape-style": "string", "min-font-scale": "number", "popover-policy": "string", "math-mode-space": "string", "read-only": "boolean", "remove-extraneous-parentheses": "on/off", "smart-fence": "on/off", "smart-mode": "on/off", "smart-superscript": "on/off", "inline-shortcut-timeout": "string", "script-depth": "string", placeholder: "string", "virtual-keyboard-target-origin": "string", "math-virtual-keyboard-policy": "string" };
  }
  static get observedAttributes() {
    return [...Object.keys(this.optionsAttributes), "contenteditable", "disabled", "readonly", "read-only"];
  }
  static get fontsDirectory() {
    return this._fontsDirectory;
  }
  static set fontsDirectory(t) {
    t !== this._fontsDirectory && (this._fontsDirectory = t, _3());
  }
  get fontsDirectory() {
    throw new Error("Use MathfieldElement.fontsDirectory instead");
  }
  set fontsDirectory(t) {
    throw new Error("Use MathfieldElement.fontsDirectory instead");
  }
  static get soundsDirectory() {
    return this._soundsDirectory;
  }
  static set soundsDirectory(t) {
    this._soundsDirectory = t, this.audioBuffers = {};
  }
  get soundsDirectory() {
    throw new Error("Use MathfieldElement.soundsDirectory instead");
  }
  set soundsDirectory(t) {
    throw new Error("Use MathfieldElement.soundsDirectory instead");
  }
  static get keypressSound() {
    return this._keypressSound;
  }
  static set keypressSound(t) {
    var i, r, n;
    this.audioBuffers = {}, t === null ? this._keypressSound = { spacebar: null, return: null, delete: null, default: null } : typeof t == "string" ? this._keypressSound = { spacebar: t, return: t, delete: t, default: t } : typeof t == "object" && "default" in t && (this._keypressSound = { spacebar: (i = t.spacebar) != null ? i : t.default, return: (r = t.return) != null ? r : t.default, delete: (n = t.delete) != null ? n : t.default, default: t.default });
  }
  static get plonkSound() {
    return this._plonkSound;
  }
  static set plonkSound(t) {
    this.audioBuffers = {}, this._plonkSound = t;
  }
  static get audioContext() {
    return this._audioContext || (this._audioContext = new AudioContext()), this._audioContext;
  }
  static get speechEngine() {
    return this._speechEngine;
  }
  static set speechEngine(t) {
    this._speechEngine = t;
  }
  static get speechEngineRate() {
    return this._speechEngineRate;
  }
  static set speechEngineRate(t) {
    this._speechEngineRate = t;
  }
  static get speechEngineVoice() {
    return this._speechEngineVoice;
  }
  static set speechEngineVoice(t) {
    this._speechEngineVoice = t;
  }
  static get textToSpeechMarkup() {
    return this._textToSpeechMarkup;
  }
  static set textToSpeechMarkup(t) {
    this._textToSpeechMarkup = t;
  }
  static get textToSpeechRules() {
    return this._textToSpeechRules;
  }
  static set textToSpeechRules(t) {
    this._textToSpeechRules = t;
  }
  static get textToSpeechRulesOptions() {
    return this._textToSpeechRulesOptions;
  }
  static set textToSpeechRulesOptions(t) {
    this._textToSpeechRulesOptions = t;
  }
  static get locale() {
    return N.locale;
  }
  static set locale(t) {
    t === "auto" && (t = navigator.language.slice(0, 5)), N.locale = t;
  }
  get locale() {
    throw new Error("Use MathfieldElement.locale instead");
  }
  set locale(t) {
    throw new Error("Use MathfieldElement.locale instead");
  }
  static get strings() {
    return N.strings;
  }
  static set strings(t) {
    N.merge(t);
  }
  get strings() {
    throw new Error("Use MathfieldElement.strings instead");
  }
  set strings(t) {
    throw new Error("Use MathfieldElement.strings instead");
  }
  static get decimalSeparator() {
    return this._decimalSeparator;
  }
  static set decimalSeparator(t) {
    this._decimalSeparator = t, this._computeEngine && (this._computeEngine.latexOptions.decimalMarker = this.decimalSeparator === "," ? "{,}" : ".");
  }
  get decimalSeparator() {
    throw new Error("Use MathfieldElement.decimalSeparator instead");
  }
  set decimalSeparator(t) {
    throw new Error("Use MathfieldElement.decimalSeparator instead");
  }
  static get computeEngine() {
    var t, i;
    if (this._computeEngine === void 0) {
      let r = (t = window[Symbol.for("io.cortexjs.compute-engine")]) == null ? void 0 : t.ComputeEngine;
      if (!r) return null;
      this._computeEngine = new r(), this._computeEngine && this.decimalSeparator === "," && (this._computeEngine.latexOptions.decimalMarker = "{,}");
    }
    return (i = this._computeEngine) != null ? i : null;
  }
  static set computeEngine(t) {
    this._computeEngine = t;
  }
  get computeEngine() {
    throw new Error("Use MathfieldElement.computeEngine instead");
  }
  set computeEngine(t) {
    throw new Error("Use MathfieldElement.computeEngine instead");
  }
  static get isFunction() {
    return typeof this._isFunction != "function" ? () => !1 : this._isFunction;
  }
  static set isFunction(t) {
    this._isFunction = t;
  }
  static async loadSound(t) {
    delete this.audioBuffers[t];
    let i = "";
    switch (t) {
      case "keypress":
        i = this._keypressSound.default;
        break;
      case "return":
        i = this._keypressSound.return;
        break;
      case "spacebar":
        i = this._keypressSound.spacebar;
        break;
      case "delete":
        i = this._keypressSound.delete;
        break;
      case "plonk":
        i = this.plonkSound;
        break;
    }
    if (typeof i != "string") return;
    i = i.trim();
    let r = this.soundsDirectory;
    if (!(r == null || r === "null" || i === "none" || i === "null")) try {
      let n = await (await fetch(await Cm(`${r}/${i}`))).arrayBuffer(), a = await this.audioContext.decodeAudioData(n);
      this.audioBuffers[t] = a;
    } catch {
    }
  }
  static async playSound(t) {
    if ((this.audioContext.state === "suspended" || this.audioContext.state === "interrupted") && await this.audioContext.resume(), this.audioBuffers[t] || await this.loadSound(t), !this.audioBuffers[t]) return;
    let i = this.audioContext.createBufferSource();
    i.buffer = this.audioBuffers[t];
    let r = this.audioContext.createGain();
    r.gain.value = Dy, i.connect(r).connect(this.audioContext.destination), i.start();
  }
  showMenu(t) {
    var i, r;
    return (r = (i = this._mathfield) == null ? void 0 : i.showMenu(t)) != null ? r : !1;
  }
  get mathVirtualKeyboard() {
    throw new Error("The `mathVirtualKeyboard` property is not available on the MathfieldElement. Use `window.mathVirtualKeyboard` instead.");
  }
  onPointerDown() {
    window.addEventListener("pointerup", (t) => {
      var i;
      t.target === this && !((i = this._mathfield) != null && i.disabled) && this.dispatchEvent(new MouseEvent("click", { altKey: t.altKey, button: t.button, buttons: t.buttons, clientX: t.clientX, clientY: t.clientY, ctrlKey: t.ctrlKey, metaKey: t.metaKey, movementX: t.movementX, movementY: t.movementY, relatedTarget: t.relatedTarget, screenX: t.screenX, screenY: t.screenY, shiftKey: t.shiftKey }));
    }, { once: !0 });
  }
  getPromptValue(t, i) {
    var r, n;
    return (n = (r = this._mathfield) == null ? void 0 : r.getPromptValue(t, i)) != null ? n : "";
  }
  setPromptValue(t, i, r) {
    var n;
    (n = this._mathfield) == null || n.setPromptValue(t, i, r);
  }
  getPromptRange(t) {
    var i, r;
    return (r = (i = this._mathfield) == null ? void 0 : i.getPromptRange(t)) != null ? r : null;
  }
  getPrompts(t) {
    var i, r;
    return (r = (i = this._mathfield) == null ? void 0 : i.getPrompts(t)) != null ? r : [];
  }
  get form() {
    var t;
    return (t = this._internals) == null ? void 0 : t.form;
  }
  get name() {
    var t;
    return (t = this.getAttribute("name")) != null ? t : "";
  }
  get type() {
    return this.localName;
  }
  get mode() {
    var t, i;
    return (i = (t = this._mathfield) == null ? void 0 : t.model.mode) != null ? i : this.defaultMode === "text" ? "text" : "math";
  }
  set mode(t) {
    var i;
    (i = this._mathfield) == null || i.switchMode(t);
  }
  get expression() {
    if (this._mathfield) return window[Symbol.for("io.cortexjs.compute-engine")] ? this._mathfield.expression : (console.error(`MathLive 0.98.6: The CortexJS Compute Engine library is not available.
        
        Load the library, for example with:
        
        import "https://unpkg.com/@cortex-js/compute-engine?module"`), null);
  }
  set expression(t) {
    var i, r;
    if (!this._mathfield) return;
    let n = (r = (i = vi.computeEngine) == null ? void 0 : i.box(t).latex) != null ? r : null;
    n !== null && this._mathfield.setValue(n), window[Symbol.for("io.cortexjs.compute-engine")] || console.error(`MathLive 0.98.6: The CortexJS Compute Engine library is not available.
        
        Load the library, for example with:
        
        import "https://unpkg.com/@cortex-js/compute-engine?module"`);
  }
  get errors() {
    var t, i;
    return (i = (t = this._mathfield) == null ? void 0 : t.errors) != null ? i : [];
  }
  _getOptions(t) {
    return this._mathfield ? _i(this._mathfield.options, t) : q.has(this) ? f({}, _i(f(f({}, Ua()), mo(q.get(this).options)), t)) : null;
  }
  getOptions(t) {
    return console.warn("%cMathLive 0.98.6: %cDeprecated Usage%c\n      `mf.getOptions()` is deprecated. Read the property directly on the mathfield instead.\n      See https://cortexjs.io/mathlive/changelog/ for details.", "color:#12b; font-size: 1.1rem", "color:#db1111; font-size: 1.1rem", "color: inherit, font-size: 1rem"), this._mathfield ? _i(this._mathfield.options, t) : q.has(this) ? _i(f(f({}, Ua()), mo(q.get(this).options)), t) : null;
  }
  reflectAttributes() {
    let t = Ua(), i = this._getOptions();
    Object.keys(vi.optionsAttributes).forEach((r) => {
      let n = St(r);
      vi.optionsAttributes[r] === "on/off" ? t[n] !== i[n] ? this.setAttribute(r, i[n] ? "on" : "off") : this.removeAttribute(r) : t[n] !== i[n] && (vi.optionsAttributes[r] === "boolean" ? i[n] ? this.setAttribute(r, "") : this.removeAttribute(r) : (typeof i[n] == "string" || typeof i[n] == "number") && this.setAttribute(r, i[n].toString()));
    });
  }
  getOption(t) {
    return console.warn("%cMathLive 0.98.6: %cDeprecated Usage%c\n      `mf.getOption()` is deprecated. Read the property directly on the mathfield instead.\n      See https://cortexjs.io/mathlive/changelog/ for details.", "color:#12b; font-size: 1.1rem", "color:#db1111; font-size: 1.1rem", "color: inherit, font-size: 1rem"), this._getOptions([t])[t];
  }
  _getOption(t) {
    return this._getOptions([t])[t];
  }
  _setOptions(t) {
    if (this._mathfield) this._mathfield.setOptions(t);
    else if (q.has(this)) {
      let i = f(f({}, q.get(this).options), t);
      q.set(this, b(f({}, q.get(this)), { selection: { ranges: i.readOnly ? [[0, 0]] : [[0, -1]] }, options: i }));
    } else q.set(this, { value: void 0, selection: { ranges: [[0, 0]] }, options: t, menuItems: void 0 });
    this.reflectAttributes();
  }
  setOptions(t) {
    console.group("%cMathLive 0.98.6: %cDeprecated Usage", "color:#12b; font-size: 1.1rem", "color:#db1111; font-size: 1.1rem"), console.warn(" `mf.setOptions()` is deprecated. Set the property directly on the mathfield instead.\n      See https://cortexjs.io/mathlive/changelog/ for details.");
    for (let i of Object.keys(t)) qt[i] && console.warn(`\`mf.setOptions({${i}:...})\` -> ${qt[i]}`);
    console.groupEnd(), this._setOptions(t);
  }
  executeCommand(t) {
    var i, r;
    return (r = (i = this._mathfield) == null ? void 0 : i.executeCommand(t)) != null ? r : !1;
  }
  getValue(t, i, r) {
    var n, a;
    if (this._mathfield) return this._mathfield.model.getValue(t, i, r);
    if (q.has(this)) {
      let o, s, l;
      if (ja(t) ? ([o, s] = t.ranges[0], l = i) : ao(t) ? ([o, s] = t, l = i) : Vt(t) && Vt(i) ? (o = t, s = i, l = r) : (o = 0, s = -1, l = t), (l === void 0 || l === "latex") && o === 0 && s === -1) return (a = (n = q.get(this).value) != null ? n : this.textContent) != null ? a : "";
    }
    return "";
  }
  setValue(t, i) {
    if (this._mathfield && t !== void 0) {
      i != null || (i = { silenceNotifications: !0, mode: "math" }), this._mathfield.setValue(t, i);
      return;
    }
    if (q.has(this)) {
      let n = q.get(this).options;
      q.set(this, { value: t, selection: { ranges: [[-1, -1]], direction: "forward" }, options: n, menuItems: void 0 });
      return;
    }
    let r = Zr(this);
    q.set(this, { value: t, selection: { ranges: [[-1, -1]], direction: "forward" }, options: r, menuItems: void 0 });
  }
  hasFocus() {
    var t, i;
    return (i = (t = this._mathfield) == null ? void 0 : t.hasFocus()) != null ? i : !1;
  }
  focus() {
    var t;
    (t = this._mathfield) == null || t.focus();
  }
  blur() {
    var t;
    (t = this._mathfield) == null || t.blur();
  }
  select() {
    var t;
    (t = this._mathfield) == null || t.select();
  }
  insert(t, i) {
    var r, n;
    return (n = (r = this._mathfield) == null ? void 0 : r.insert(t, i)) != null ? n : !1;
  }
  applyStyle(t, i) {
    var r;
    return (r = this._mathfield) == null ? void 0 : r.applyStyle(t, i);
  }
  queryStyle(t) {
    var i, r;
    return (r = (i = this._mathfield) == null ? void 0 : i.queryStyle(t)) != null ? r : "none";
  }
  get caretPoint() {
    var t, i;
    return (i = (t = this._mathfield) == null ? void 0 : t.getCaretPoint()) != null ? i : null;
  }
  set caretPoint(t) {
    var i;
    t && ((i = this._mathfield) == null || i.setCaretPoint(t.x, t.y));
  }
  setCaretPoint(t, i) {
    var r, n;
    return (n = (r = this._mathfield) == null ? void 0 : r.setCaretPoint(t, i)) != null ? n : !1;
  }
  offsetFromPoint(t, i, r) {
    return this._mathfield ? dn(this._mathfield, t, i, r) : -1;
  }
  hitboxFromOffset(t) {
    if (!this._mathfield) return null;
    let i = this._mathfield.model.at(t);
    if (!i) return null;
    let r = Bn(this._mathfield, i);
    return r ? new DOMRect(r.left, r.top, r.right - r.left, r.bottom - r.top) : null;
  }
  resetUndo() {
    var t;
    (t = this._mathfield) == null || t.resetUndo();
  }
  canUndo() {
    return this._mathfield ? this._mathfield.canUndo() : !1;
  }
  canRedo() {
    return this._mathfield ? this._mathfield.canRedo() : !1;
  }
  handleEvent(t) {
    var i, r, n, a, o;
    Ge.state === "closed" && ((r = (i = this._mathfield) == null ? void 0 : i.menu) == null ? void 0 : r.state) === "closed" && (t.type === "pointerdown" && this.onPointerDown(), t.type === "focus" && ((n = this._mathfield) == null || n.focus()), t.type === "blur" && ((a = Ge.scrim) == null ? void 0 : a.state) === "closed" && ((o = this._mathfield) == null || o.blur()));
  }
  connectedCallback() {
    var t, i, r, n;
    let a = window.getComputedStyle(this), o = this.shadowRoot, s = o.host, l = a.userSelect !== "none";
    if (l) s.addEventListener("pointerdown", this, !0);
    else {
      let d = o.querySelector("span");
      d.style.pointerEvents = "none";
    }
    s.addEventListener("focus", this, !0), s.addEventListener("blur", this, !0), this._observer = new MutationObserver(() => {
      var d;
      this.value = (d = this.textContent) != null ? d : "";
    }), this._observer.observe(this, { childList: !0, characterData: !0, subtree: !0 }), Qi() || (this.hasAttribute("role") || this.setAttribute("role", "math"), this.hasAttribute("aria-label") || this.setAttribute("aria-label", "math input field"), this.setAttribute("aria-multiline", "false")), l && !this.hasAttribute("contenteditable") && this.setAttribute("contenteditable", "true"), this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0");
    let u = o.querySelector("slot:not([name])");
    if (u) try {
      this._style = u.assignedElements().filter((d) => d.tagName.toLowerCase() === "style").map((d) => d.textContent).join("");
    } catch (d) {
      console.error(d);
    }
    if (this._style) {
      let d = document.createElement("style");
      d.textContent = this._style, o.appendChild(d);
    }
    let c = "";
    if (this.hasAttribute("value") ? c = this.getAttribute("value") : c = (t = u == null ? void 0 : u.assignedNodes().map((d) => d.nodeType === 3 ? d.textContent : "").join("").trim()) != null ? t : "", this._mathfield = new Ay(o.querySelector(":host > span"), b(f({}, (r = (i = q.get(this)) == null ? void 0 : i.options) != null ? r : Zr(this)), { eventSink: this, value: c })), !q.has(this)) {
      this.upgradeProperty("disabled"), this.upgradeProperty("readonly");
      for (let d of Object.keys(vi.optionsAttributes)) this.upgradeProperty(St(d));
    }
    if (!((n = this._mathfield) != null && n.model)) {
      this._mathfield = null;
      return;
    }
    if (q.has(this)) {
      let d = this._mathfield, h = q.get(this), p = h.menuItems;
      d.model.deferNotifications({ content: !1, selection: !1 }, () => {
        let m = h.value;
        m !== void 0 && d.setValue(m), d.model.selection = h.selection, q.delete(this);
      }), p && (this.menuItems = p);
    }
    window.queueMicrotask(() => {
      this.isConnected && this.dispatchEvent(new Event("mount", { cancelable: !1, bubbles: !0, composed: !0 }));
    }), su();
  }
  disconnectedCallback() {
    var t, i, r;
    if (this.shadowRoot.host.removeEventListener("pointerdown", this, !0), !this._mathfield) return;
    (t = this._observer) == null || t.disconnect(), this._observer = null, window.queueMicrotask(() => this.dispatchEvent(new Event("unmount", { cancelable: !1, bubbles: !0, composed: !0 })));
    let n = _i(this._mathfield.options, Object.keys(vi.optionsAttributes).map((a) => St(a)));
    q.set(this, { value: this._mathfield.getValue(), selection: this._mathfield.model.selection, menuItems: (r = (i = this._mathfield.menu) == null ? void 0 : i.menuItems) != null ? r : void 0, options: n }), this._mathfield.dispose(), this._mathfield = null;
  }
  upgradeProperty(t) {
    if (this.hasOwnProperty(t)) {
      let i = this[t];
      delete this[t], (t === "readonly" || t === "read-only") && (t = "readOnly"), this[t] = i;
    }
  }
  attributeChangedCallback(t, i, r) {
    if (i === r) return;
    let n = r !== null;
    switch (t) {
      case "contenteditable":
        ee(this._mathfield);
        break;
      case "disabled":
        this.disabled = n;
        break;
      case "read-only":
      case "readonly":
        this.readOnly = n;
        break;
    }
  }
  get readonly() {
    return this.hasAttribute("readonly") || this.hasAttribute("read-only");
  }
  set readonly(t) {
    let i = !!t;
    i ? (this.setAttribute("readonly", ""), Qi() ? this._internals.ariaReadOnly = "true" : this.setAttribute("aria-readonly", "true"), this.setAttribute("aria-readonly", "true")) : (Qi() ? this._internals.ariaReadOnly = "false" : this.removeAttribute("aria-readonly"), this.removeAttribute("readonly"), this.removeAttribute("read-only")), this._setOptions({ readOnly: i });
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(t) {
    var i;
    let r = !!t;
    r ? this.setAttribute("disabled", "") : this.removeAttribute("disabled"), Qi() ? this._internals.ariaDisabled = r ? "true" : "false" : this.setAttribute("aria-disabled", r ? "true" : "false"), r && (i = this._mathfield) != null && i.hasFocus && window.mathVirtualKeyboard.visible && this._mathfield.executeCommand("hideVirtualKeyboard");
  }
  get value() {
    return this.getValue();
  }
  set value(t) {
    this.setValue(t);
  }
  get defaultMode() {
    return this._getOption("defaultMode");
  }
  set defaultMode(t) {
    this._setOptions({ defaultMode: t });
  }
  get macros() {
    return this._getOption("macros");
  }
  set macros(t) {
    this._setOptions({ macros: t });
  }
  get registers() {
    let t = this;
    return new Proxy({}, { get: (i, r) => {
      if (typeof r == "string") return t._getOption("registers")[r];
    }, set(i, r, n) {
      return typeof r != "string" ? !1 : (t._setOptions({ registers: b(f({}, t._getOption("registers")), { [r]: n }) }), !0);
    } });
  }
  set registers(t) {
    this._setOptions({ registers: t });
  }
  get colorMap() {
    return this._getOption("colorMap");
  }
  set colorMap(t) {
    this._setOptions({ colorMap: t });
  }
  get backgroundColorMap() {
    return this._getOption("backgroundColorMap");
  }
  set backgroundColorMap(t) {
    this._setOptions({ backgroundColorMap: t });
  }
  get letterShapeStyle() {
    return this._getOption("letterShapeStyle");
  }
  set letterShapeStyle(t) {
    this._setOptions({ letterShapeStyle: t });
  }
  get minFontScale() {
    return this._getOption("minFontScale");
  }
  set minFontScale(t) {
    this._setOptions({ minFontScale: t });
  }
  get smartMode() {
    return this._getOption("smartMode");
  }
  set smartMode(t) {
    this._setOptions({ smartMode: t });
  }
  get smartFence() {
    return this._getOption("smartFence");
  }
  set smartFence(t) {
    this._setOptions({ smartFence: t });
  }
  get smartSuperscript() {
    return this._getOption("smartSuperscript");
  }
  set smartSuperscript(t) {
    this._setOptions({ smartSuperscript: t });
  }
  get scriptDepth() {
    return this._getOption("scriptDepth");
  }
  set scriptDepth(t) {
    this._setOptions({ scriptDepth: t });
  }
  get removeExtraneousParentheses() {
    return this._getOption("removeExtraneousParentheses");
  }
  set removeExtraneousParentheses(t) {
    this._setOptions({ removeExtraneousParentheses: t });
  }
  get mathModeSpace() {
    return this._getOption("mathModeSpace");
  }
  set mathModeSpace(t) {
    this._setOptions({ mathModeSpace: t });
  }
  get placeholderSymbol() {
    return this._getOption("placeholderSymbol");
  }
  set placeholderSymbol(t) {
    this._setOptions({ placeholderSymbol: t });
  }
  get popoverPolicy() {
    return this._getOption("popoverPolicy");
  }
  set popoverPolicy(t) {
    this._setOptions({ popoverPolicy: t });
  }
  get environmentPopoverPolicy() {
    return this._getOption("environmentPopoverPolicy");
  }
  set environmentPopoverPolicy(t) {
    this._setOptions({ environmentPopoverPolicy: t });
  }
  get menuItems() {
    var t, i, r;
    return this._mathfield ? (t = this._mathfield.menu._menuItems.map((n) => n.menuItem)) != null ? t : [] : (r = (i = q.get(this)) == null ? void 0 : i.menuItems) != null ? r : [];
  }
  set menuItems(t) {
    var i;
    if (this._mathfield) {
      let r = (i = this._mathfield.element) == null ? void 0 : i.querySelector("[part=menu-toggle]");
      r && (r.style.display = t.length === 0 ? "none" : ""), this._mathfield.menu.menuItems = t;
    }
    q.has(this) ? q.set(this, b(f({}, q.get(this)), { menuItems: t })) : q.set(this, { value: void 0, selection: { ranges: [[0, 0]] }, options: Zr(this), menuItems: t });
  }
  get mathVirtualKeyboardPolicy() {
    return this._getOption("mathVirtualKeyboardPolicy");
  }
  set mathVirtualKeyboardPolicy(t) {
    this._setOptions({ mathVirtualKeyboardPolicy: t });
  }
  get inlineShortcuts() {
    return this._getOption("inlineShortcuts");
  }
  set inlineShortcuts(t) {
    this._setOptions({ inlineShortcuts: t });
  }
  get inlineShortcutTimeout() {
    return this._getOption("inlineShortcutTimeout");
  }
  set inlineShortcutTimeout(t) {
    this._setOptions({ inlineShortcutTimeout: t });
  }
  get keybindings() {
    return this._getOption("keybindings");
  }
  set keybindings(t) {
    this._setOptions({ keybindings: t });
  }
  get onInlineShortcut() {
    return this._getOption("onInlineShortcut");
  }
  set onInlineShortcut(t) {
    this._setOptions({ onInlineShortcut: t });
  }
  get onScrollIntoView() {
    return this._getOption("onScrollIntoView");
  }
  set onScrollIntoView(t) {
    this._setOptions({ onScrollIntoView: t });
  }
  get onExport() {
    return this._getOption("onExport");
  }
  set onExport(t) {
    this._setOptions({ onExport: t });
  }
  get readOnly() {
    return this._getOption("readOnly");
  }
  set readOnly(t) {
    this._setOptions({ readOnly: t });
  }
  get isSelectionEditable() {
    var t, i;
    return (i = (t = this._mathfield) == null ? void 0 : t.isSelectionEditable) != null ? i : !1;
  }
  setPromptState(t, i, r) {
    var n;
    (n = this._mathfield) == null || n.setPromptState(t, i, r);
  }
  getPromptState(t) {
    var i, r;
    return (r = (i = this._mathfield) == null ? void 0 : i.getPromptState(t)) != null ? r : [void 0, !0];
  }
  get virtualKeyboardTargetOrigin() {
    return this._getOption("virtualKeyboardTargetOrigin");
  }
  set virtualKeyboardTargetOrigin(t) {
    this._setOptions({ virtualKeyboardTargetOrigin: t });
  }
  get selection() {
    return this._mathfield ? this._mathfield.model.selection : q.has(this) ? q.get(this).selection : { ranges: [[0, 0]], direction: "forward" };
  }
  set selection(t) {
    if (typeof t == "number" && (t = { ranges: [[t, t]] }), this._mathfield) {
      this._mathfield.model.selection = t, ee(this._mathfield);
      return;
    }
    if (q.has(this)) {
      q.set(this, b(f({}, q.get(this)), { selection: t }));
      return;
    }
    q.set(this, { value: void 0, selection: t, options: Zr(this), menuItems: void 0 });
  }
  get selectionIsCollapsed() {
    let t = this.selection;
    return t.ranges.length === 1 && t.ranges[0][0] === t.ranges[0][1];
  }
  get position() {
    return this._mathfield ? this._mathfield.model.position : q.has(this) ? q.get(this).selection.ranges[0][0] : 0;
  }
  set position(t) {
    if (this._mathfield && (this._mathfield.model.position = t, ee(this._mathfield)), q.has(this)) {
      q.set(this, b(f({}, q.get(this)), { selection: { ranges: [[t, t]] } }));
      return;
    }
    q.set(this, { value: void 0, selection: { ranges: [[t, t]] }, options: Zr(this), menuItems: void 0 });
  }
  getOffsetDepth(t) {
    var i, r;
    return this._mathfield ? ((r = (i = this._mathfield.model.at(t)) == null ? void 0 : i.treeDepth) != null ? r : 2) - 2 : 0;
  }
  get lastOffset() {
    var t, i;
    return (i = (t = this._mathfield) == null ? void 0 : t.model.lastOffset) != null ? i : -1;
  }
};
le.version = "0.98.6", le._fontsDirectory = "./fonts", le._soundsDirectory = "./sounds", le.keypressVibration = !0, le._keypressSound = { spacebar: "keypress-spacebar.wav", return: "keypress-return.wav", delete: "keypress-delete.wav", default: "keypress-standard.wav" }, le._plonkSound = "plonk.wav", le.audioBuffers = {}, le.createHTML = (e) => e, le._speechEngineRate = "100%", le._speechEngineVoice = "Joanna", le._textToSpeechMarkup = "", le._textToSpeechRules = "mathlive", le._textToSpeechRulesOptions = {}, le.speakHook = xy, le.readAloudHook = Ey, le._decimalSeparator = ".", le.fractionNavigationOrder = "numerator-denominator", le._isFunction = (e) => {
  var t, i;
  let r = globalThis.MathfieldElement.computeEngine;
  return (i = (t = r == null ? void 0 : r.parse(e).domain) == null ? void 0 : t.isFunction) != null ? i : !1;
};
var kr = le;
function St(e) {
  return e.replace(/[^a-zA-Z\d]+(.)/g, (t, i) => i.toUpperCase());
}
function Zr(e) {
  let t = { readOnly: !1 }, i = kr.optionsAttributes;
  return Object.keys(i).forEach((r) => {
    if (e.hasAttribute(r)) {
      let n = e.getAttribute(r);
      r === "placeholder" ? t.contentPlaceholder = n ?? "" : i[r] === "boolean" ? t[St(r)] = !0 : i[r] === "on/off" ? n === "on" ? t[St(r)] = !0 : n === "off" ? t[St(r)] = !1 : t[St(r)] = void 0 : i[r] === "number" ? t[St(r)] = Number.parseFloat(n ?? "0") : t[St(r)] = n;
    }
  }), t;
}
function Qi() {
  return !(!("ElementInternals" in window) || !HTMLElement.prototype.attachInternals || !("role" in window.ElementInternals.prototype));
}
var lf = kr, oh, sh, lh;
if (Re() && !((oh = window.customElements) != null && oh.get("math-field"))) {
  window[sh = Symbol.for("io.cortexjs.mathlive")] != null || (window[sh] = {});
  let e = window[Symbol.for("io.cortexjs.mathlive")];
  e.version = "0.98.6", globalThis.MathfieldElement = kr, (lh = window.customElements) == null || lh.define("math-field", kr);
}
function Ty(e, t) {
  let i = ti.singleton;
  return i ? (i.show(), ln(), i.currentLayer = t, i.render(), i.focus(), !0) : !1;
}
function Fy() {
  let e = window.mathVirtualKeyboard;
  return e.visible ? e.hide({ animate: !0 }) : e.show({ animate: !0 }), !1;
}
Ce({ switchKeyboardLayer: Ty, toggleVirtualKeyboard: Fy, hideVirtualKeyboard: () => (window.mathVirtualKeyboard.hide({ animate: !0 }), !1), showVirtualKeyboard: () => (window.mathVirtualKeyboard.show({ animate: !0 }), !1) }, { target: "virtual-keyboard" });
function jt() {
  var e;
  return globalThis[e = Symbol.for("io.cortexjs.mathlive")] != null || (globalThis[e] = {}), globalThis[Symbol.for("io.cortexjs.mathlive")];
}
function zi(e, t, i = "end", r) {
  if (t < 0)
    return { index: -1, offset: -1 };
  const n = e.findIndex((o, s) => {
    const l = o.value.length;
    if (t < l)
      return !0;
    if (l === t) {
      if (e.length - 1 === s)
        return !0;
      const u = e[s + 1];
      if (!$y(u) && i === "end")
        return !0;
    }
    t -= l;
  }), a = { offset: t, index: n };
  if (n !== -1) {
    const o = e[n];
    if (r && uf(o))
      a.offset = i === "end" ? o.value.length : 0;
    else if (o.emoji) {
      const { emoji: s } = o;
      for (let l = 0; l < s.length && s[l].from < a.offset; l++)
        if (s[l].to > a.offset) {
          a.offset = i === "start" ? s[l].from : s[l].to;
          break;
        }
    }
  }
  return a;
}
function Ro(e, t, i, r = !1) {
  const n = zi(e, t, "start", r), a = zi(e, i, "end", r);
  return a.index < n.index && t === i ? [a, a] : a.index < n.index && t === i ? [a, a] : [n, a];
}
function Wt(e, t) {
  if (t = hu(t, 0, e.value.length), t === 0)
    return [Ll(""), e];
  if (t === e.value.length)
    return [e, Ll("")];
  let i = Cl(e, t);
  return !Lr(i) && t > 0 && (i = qo(i)), [
    Cl(e, 0, t),
    i
  ];
}
function Cl(e, t, i = e.value.length) {
  const { value: r, emoji: n } = e, a = Fe(e, {
    value: r.slice(t, i),
    emoji: zy(n, t, i)
  });
  return a.type === E.Link && (a.auto = !1), a;
}
function zy(e, t, i) {
  if (!e)
    return;
  const r = [];
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    if (a.from >= i)
      break;
    a.from >= t && a.to <= i && r.push(a);
  }
  return r.length ? Ky(r, -t) : void 0;
}
function uf(e) {
  return e.type === E.Command || e.type === E.HashTag || e.type === E.UserSticker || e.type === E.Mention || e.type === E.Link && !Lr(e);
}
function Lr(e) {
  return e.type === E.Link && !e.auto;
}
function cf(e) {
  return e.type === E.Link && e.auto;
}
function Ky(e, t) {
  return e.map((i) => Fe(i, {
    from: i.from + t,
    to: i.to + t
  }));
}
function hu(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
function qo(e, t) {
  return t === void 0 && (t = "sticky" in e ? e.sticky : !1), {
    type: E.Text,
    format: e.format,
    value: e.value,
    emoji: e.emoji,
    sticky: t
  };
}
function df(e, t, i) {
  return i === void 0 && (i = "sticky" in e ? e.sticky : !1), {
    type: E.Link,
    format: e.format,
    value: e.value,
    emoji: e.emoji,
    link: t,
    auto: !1,
    sticky: i
  };
}
function Ll(e, t = 0, i = !1, r) {
  return { type: E.Text, format: t, value: e, emoji: r, sticky: i };
}
function $y(e) {
  return "sticky" in e && e.sticky;
}
function Bl(e, t = 0, i) {
  return e.slice().sort((n, a) => n.from - a.from).map((n) => {
    const a = t + n.from, o = n.emojiData || null, s = i && i.slice(n.from, n.to);
    return { pos: a, data: o, hint: s };
  });
}
const Py = [
  [L.Bold, "bold"],
  [L.Italic, "italic"],
  [L.Monospace, "monospace"],
  [L.Strike, "strike"],
  [L.Underline, "underline"],
  [L.Heading, "heading"],
  [L.Marked, "marked"],
  [L.Highlight, "highlight"],
  [L.Link, "md-link"],
  [L.LinkLabel, "md-link-label"]
], $a = {
  [E.Command]: "command",
  [E.HashTag]: "hashtag",
  [E.Link]: "link",
  [E.Markdown]: "md",
  [E.Mention]: "mention",
  [E.Text]: "",
  [E.UserSticker]: "user-sticker",
  [E.Newline]: "newline",
  [E.Formula]: ""
}, uh = {
  fixTrailingLine: !1,
  replaceTextEmoji: !1,
  link: Hy
};
function Ny(e, t, i) {
  const r = i ? Fe(uh, i) : uh;
  if (r.inline) {
    Oy(e, t, r);
    return;
  }
  const n = new El(e, r), a = () => n.elem("div"), o = new El(a(), r), s = () => {
    o.pos === 0 && o.elem("br"), o.trim();
  };
  o.container.removeAttribute("data-raw");
  for (let l = 0; l < t.length; l++) {
    const u = t[l];
    u.type === E.Newline ? (s(), o.prepare(a()), o.container.setAttribute("data-raw", u.value)) : l = hf(t, l, o);
  }
  s(), n.trim();
}
function Oy(e, t, i) {
  const r = new El(e, i);
  r.enter(r.elem("span"));
  for (let n = 0; n < t.length; n++)
    n = hf(t, n, r);
  r.exit(), r.trim();
}
function hf(e, t, i) {
  const r = e[t];
  if (!r.value)
    return t;
  const n = mf(e, t);
  if (n !== t) {
    const a = r.format;
    for (i.enter(dh(r, i)); t <= n; ) {
      const o = e[t];
      if (o.format === a)
        Al(o, i);
      else {
        const s = i.elem("span");
        s.className = pf(o.format), ch(s, o, i);
      }
      t++;
    }
    return i.exit(), n;
  }
  if (r.type === E.Newline)
    i.text(r.value);
  else if (ff(r))
    Al(r, i);
  else {
    const a = dh(r, i);
    r.type !== E.UserSticker && !gf(r) && ch(a, r, i);
  }
  return t;
}
function ch(e, t, i) {
  i.enter(e), Al(t, i), i.exit();
}
function Al(e, t) {
  let { emoji: i } = e, { value: r } = e;
  const { options: n } = t;
  if (n.nowrap && (r = r.replace(/\r\n?/g, `
`).replace(/[\s\n]/g, " ")), i && n.emoji) {
    let a = 0;
    (!n.replaceTextEmoji || e.format & L.Monospace) && (i = i.filter(qy)), i.forEach((s) => {
      const l = r.slice(a, s.from), u = r.slice(s.from, s.to), c = s.emoji || u;
      l && t.text(l), t.emoji(c, u, s.emojiData), a = s.to;
    });
    const o = r.slice(a);
    o && t.text(o);
  } else
    t.text(r);
}
function pf(e) {
  let t = "", i = "";
  return Py.forEach(([r, n]) => {
    e & r && (t += i + n, i = " ");
  }), t;
}
function Iy(e) {
  let t = "", i = "";
  return e.forEach((r) => {
    r && (t += i + r, i = " ");
  }), t;
}
function Pa(e, t, i) {
  const r = e.childNodes[i];
  return r ? e.insertBefore(t, r) : e.appendChild(t), t;
}
function Hs(e, t) {
  t && Dl(e) && Vy(e, t), e.remove();
}
class El {
  constructor(t, i) {
    this.container = t, this.options = i, this.pos = 0, this.stack = [];
  }
  /**
   * Ожидает текстовый узел в позиции `pos`. Если его нет, то автоматически создаст
   * со значением `value`, а если есть, то обновит значение на `value`
   */
  text(t) {
    let i = this.container.childNodes[this.pos];
    return (i == null ? void 0 : i.nodeType) === 3 ? i.nodeValue !== t && (i.nodeValue = t) : (i = document.createTextNode(t), Pa(this.container, i, this.pos)), this.pos++, i;
  }
  /**
   * Ожидает элемент с указанным эмоджи, при необходимости создаёт или обновляет его
   */
  emoji(t, i, r) {
    const { emoji: n } = this.options, a = this.container.childNodes[this.pos], o = a ? xo(a) : !1, s = n(
      t,
      o ? a : null,
      i,
      r
    );
    if (s)
      return a !== s && (Pa(this.container, s, this.pos), o && Hs(a, n)), jy(s), s.setAttribute("data-raw", i), this.pos++, s;
    o && Hs(a, n);
  }
  /**
   * Ожидает элемент с именем `name` в текущей позиции. Если его нет, то создаст
   * такой
   */
  elem(t) {
    let i = this.container.childNodes[this.pos];
    return (!Dl(i) || i.localName !== t) && (i = document.createElement(t), Pa(this.container, i, this.pos)), this.pos++, i;
  }
  mathfield(t) {
    var r;
    let i = this.container.childNodes[this.pos];
    if (console.log("RENDER", t), !Dl(i) || ((r = i == null ? void 0 : i.dataset) == null ? void 0 : r.type) !== "formula-container" || t.value !== i.dataset.raw || // token.id !== node.dataset.id ||
    t.event !== i.dataset.event) {
      i = document.createElement("button"), i.contentEditable = "false", i.style.userSelect = "all", i.style.display = "inline", i.style.width = "fit-content", i.style.padding = "0", i.style.border = "none", i.setAttribute("data-type", "formula-container"), i.setAttribute("data-raw", t.value), i.setAttribute("data-event", t.event);
      let n = new kr();
      n.style.margin = "0", n.style.padding = "0", n.setAttribute("data-type", "formula"), n.value = t.value, i.append(n), t.event === Ti.Create && setTimeout(() => {
        this.container.blur(), n.focus(), t.command && n.executeCommand(t.command);
      }, 0), Pa(this.container, i, this.pos);
    }
    return i.setAttribute("data-id", t.id), this.pos++, i;
  }
  save() {
    this.stack.push([this.container, this.pos]);
  }
  enter(t) {
    this.save(), this.prepare(t);
  }
  exit() {
    this.trim(), this.restore();
  }
  restore() {
    const t = this.stack.pop();
    t && (this.container = t[0], this.pos = t[1]);
  }
  /**
   * Удаляет все дочерние элементы контейнера, которые находятся правее точки `pos`
   */
  trim() {
    const { emoji: t } = this.options;
    for (; this.pos < this.container.childNodes.length; )
      Hs(this.container.childNodes[this.pos], t);
  }
  prepare(t) {
    this.container = t, this.pos = 0;
  }
}
function Dl(e) {
  return (e == null ? void 0 : e.nodeType) === 1;
}
function mf(e, t) {
  const i = e[t];
  for (; t < e.length - 1 && Ry(i, e[t + 1]); )
    t++;
  return t;
}
function Ry(e, t) {
  return e === t ? !0 : e.type === t.type ? e.type === E.Link && e.link === t.link || e.type === E.Mention && e.mention === t.mention || e.type === E.HashTag && e.hashtag === t.hashtag : !1;
}
function dh(e, t) {
  let i;
  return pu(e) ? (i = t.elem("a"), i.setAttribute("href", t.options.link(e)), i.setAttribute("target", "_blank"), i.addEventListener("mouseenter", Jy), i.addEventListener("mouseleave", Xy)) : e.type === E.UserSticker && t.options.emoji ? i = t.emoji(e.value, e.value) : gf(e) ? i = t.mathfield(e) : i = t.elem("span"), i.className = Iy([
    Wy(e),
    pf(e.format)
  ]), i;
}
function qy(e) {
  return e.emoji === void 0;
}
function xo(e) {
  return e.nodeType === 1 ? e.hasAttribute("data-emoji") : !1;
}
function jy(e) {
  e.setAttribute("data-emoji", "");
}
function Vy(e, t) {
  const i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
  let r;
  for (; r = i.nextNode(); )
    xo(r) && t(null, r);
  xo(e) && t(null, e);
}
function Hy(e) {
  return e.type === E.HashTag ? e.value : e.type === E.Link ? e.link : "";
}
function Wy(e) {
  if (cf(e) && e.format & L.Monospace || Uy(e) && e.value.length === 1)
    return "";
  if (pu(e)) {
    let { type: t } = e;
    return Lr(e) && e.link[0] === "@" && (t = E.Mention), t !== E.Link ? `${$a.link} ${$a[t]}` : $a[t];
  }
  return $a[e.type];
}
function pu(e) {
  return e.format & L.Monospace ? e.type === E.Link && (!e.auto || /^[a-z+]+:\/\//i.test(e.value)) : e.type === E.Mention ? e.value.length > 1 : e.type === E.Link;
}
function Uy(e) {
  return e.type === E.Mention || e.type === E.Command || e.type === E.HashTag;
}
function ff(e) {
  return e.type === E.Text && e.format === L.None;
}
function gf(e) {
  return e.type === E.Formula;
}
function Jy(e) {
  mu(e.target, "linkenter");
}
function Xy(e) {
  mu(e.target, "linkleave");
}
function mu(e, t, i) {
  e.dispatchEvent(
    new CustomEvent(t, {
      bubbles: !0,
      cancelable: !0,
      detail: i
    })
  );
}
const Gy = {
  compactActions: [],
  compactTimeout: 600,
  maxEntries: 100
};
class Zy {
  constructor(t) {
    this._stack = [], this._ptr = -1, this.options = Fe(Gy, t);
  }
  /**
   * Добавляет запись в стэк истории
   */
  push(t, i, r, n = Date.now()) {
    const { canRedo: a } = this;
    this._stack.length > this._ptr + 1 && (this._stack = this._stack.slice(0, this._ptr + 1));
    const o = this._stack[this._ptr], s = { state: t, time: n, action: i, range: r };
    if (o && i && !a && o.action === i && this.options.compactActions.includes(i) && n - o.time < this.options.compactTimeout)
      Yy(o, s);
    else
      for (this._stack.push(s), this._ptr++; this._stack.length > this.options.maxEntries; )
        this._stack.shift(), this._ptr--;
  }
  /**
   * Можно ли отменить последнее действие
   */
  get canUndo() {
    return this._ptr > 0;
  }
  /**
   * Можно ли повторить ранее отменённое действие
   */
  get canRedo() {
    return this._ptr < this._stack.length - 1;
  }
  /**
   * Текущая запись в истории
   */
  get current() {
    return this._stack[this._ptr];
  }
  /**
   * Откатывается к предыдущему состоянию, если это возможно, и возвращает его
   * значение
   */
  undo() {
    if (this.canUndo)
      return this._stack[--this._ptr];
  }
  /**
   * Откатывается к следующему состоянию, ели это возможно, и возвращает его
   * значение
   */
  redo() {
    if (this.canRedo)
      return this._stack[++this._ptr];
  }
  /**
   * Возвращает список всех значений в истории
   */
  entries() {
    return this._stack.map((t) => t.state);
  }
  /**
   * Сохраняет указанный диапазон в текущей записи истории в качестве последнего
   * известного выделения
   */
  saveCaret(t) {
    const { current: i } = this;
    i && (i.caret = t);
  }
  /**
   * Очищает всю историю
   */
  clear() {
    this._stack = [], this._ptr = -1;
  }
}
function Yy(e, t) {
  return e.time = t.time, e.state = t.state, e.range && t.range && (e.range = [
    Math.min(e.range[0], t.range[0]),
    Math.max(e.range[1], t.range[1])
  ]), e;
}
function fu(e) {
  return e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
}
function jo(e) {
  return e.nodeType === Node.TEXT_NODE;
}
function Br(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function wn(e) {
  return jo(e) ? e.nodeValue : Br(e) ? e.nodeName === "BR" && (e.previousSibling || e.nextSibling) ? `
` : e.getAttribute("data-raw") || "" : "";
}
function yf(e) {
  let t = "", i;
  for (let r = 0; r < e.childNodes.length; r++) {
    const n = e.childNodes[r];
    r > 0 && (t += wn(n) || `
`);
    const a = fu(n);
    for (; i = a.nextNode(); )
      t += wn(i);
  }
  return t;
}
const yr = String.prototype.startsWith ? (e, t) => e.startsWith(t) : (e, t) => e.slice(0, t.length) === t;
function Tl(e) {
  return e[0] === e[1];
}
function Qy(e) {
  const t = window.getSelection(), i = t.rangeCount && t.getRangeAt(0);
  if (i && tb(i, e))
    return i;
}
function Yr(e, t, i) {
  const r = eb(e, t, i);
  if (r)
    return rn(r);
}
function rn(e) {
  const t = window.getSelection();
  try {
    if (t.rangeCount) {
      const i = t.getRangeAt(0), r = i.compareBoundaryPoints(Range.START_TO_START, e), n = i.compareBoundaryPoints(Range.END_TO_END, e);
      if (r === 0 && n === 0)
        return;
    }
  } catch {
  }
  return t.removeAllRanges(), t.addRange(e), e;
}
function Je(e) {
  const t = Qy(e);
  if (t)
    return bf(e, t);
}
function bf(e, t) {
  const { collapsed: i } = t, r = hh(e, t.startContainer, t.startOffset), n = i ? r : hh(e, t.endContainer, t.endOffset);
  return [r, n];
}
function eb(e, t, i) {
  const r = mh(e, t), n = i == null || i === t ? r : mh(e, i);
  if (r && n) {
    const a = document.createRange();
    return a.setStart(r.container, r.offset), a.setEnd(n.container, n.offset), a;
  }
}
function hh(e, t, i) {
  let r = 0;
  if (e === t) {
    i = hu(i, 0, e.childNodes.length);
    for (let n = 0; n < i; n++)
      r += fh(e.childNodes[n]);
  } else if (ib(e))
    for (let n = 0; n < e.childNodes.length; n++) {
      const a = e.childNodes[n];
      if (a.contains(t)) {
        r += yu(a), r += a === t ? gu(a, i) : ph(a, t, i);
        break;
      }
      r += fh(a);
    }
  else
    i > 0 && Br(t) && (r += wn(t).length), r += ph(e, t, i);
  return r;
}
function ph(e, t, i) {
  let r = 0;
  const n = fu(e);
  let a;
  for (; (a = n.nextNode()) && a !== t; )
    r += Vo(a, !1);
  return r += jo(t) ? i : gu(t, i), r;
}
function mh(e, t) {
  for (let i = 0; i < e.childNodes.length; i++) {
    const r = e.childNodes[i];
    if (t -= yu(r), t <= 0)
      return {
        container: r,
        offset: 0
      };
    const n = fu(r);
    let a, o;
    for (; o = n.nextNode(); )
      if (a = Vo(o, !1), a !== 0) {
        if (t <= a) {
          if (jo(o))
            return { container: o, offset: t };
          if (t === 0)
            return { container: o, offset: 0 };
          let s = t === 0 ? 0 : 1, l = o;
          for (; l = l.previousSibling; )
            s++;
          return { container: o.parentNode, offset: s };
        }
        t -= a;
      }
  }
  return {
    container: e,
    offset: e.childNodes.length
  };
}
function gu(e, t) {
  let i = 0;
  t = hu(t, 0, e.childNodes.length);
  for (let r = 0; r < t; r++)
    i += Vo(e.childNodes[r], !0);
  return i;
}
function fh(e) {
  return yu(e) + gu(e, e.childNodes.length);
}
function Vo(e, t = !1) {
  if (jo(e))
    return e.nodeValue.length;
  let i = 0;
  if (Br(e) && (i = wn(e).length, t))
    for (let r = 0; r < e.childNodes.length; r++)
      i += Vo(e.childNodes[r], !0);
  return i;
}
function yu(e) {
  return e.previousSibling ? wn(e).length || 1 : 0;
}
function tb(e, t) {
  return t.contains(e.commonAncestorContainer);
}
function ib(e) {
  const t = e.firstChild;
  return t && Br(t) ? t.nodeName === "DIV" || t.nodeName === "P" : !1;
}
const Na = Array.from(Sn.values()), Fl = /* @__PURE__ */ new Map();
Sn.forEach((e, t) => Fl.set(e, String.fromCharCode(t)));
function zl(e, t) {
  const i = { offset: 0, range: t }, r = [];
  let n = L.None;
  for (let a = 0, o, s; a < e.length; a++)
    if (o = e[a], s = o.value.length, o.type === E.Markdown)
      if (o.format & L.LinkLabel) {
        const l = sb(e, a);
        ob(e.slice(a, l), r, i), a = l - 1;
      } else {
        if (n & Sn.get(o.value.charCodeAt(0))) {
          const l = r[r.length - 1];
          (!l || !(l.format & o.format)) && ((l.type === E.Text || l.type === E.Link) && l.sticky ? l.format |= o.format : r.push({
            type: E.Text,
            format: n,
            value: "",
            sticky: !0
          })), n &= ~o.format;
        } else
          n |= o.format;
        Pl(i, o);
      }
    else
      i.offset += s, r.push(o);
  return r;
}
function Kl(e, t) {
  const i = {
    format: 0,
    stack: [],
    range: t,
    link: "",
    output: ""
  };
  return e.forEach((r) => rb(r, i)), i.format && nn(i, $l(i.format, i, !0), !1), i.output;
}
function rb(e, t) {
  let i = "", { format: r } = e, n = L.None, a = 0, o = 0, s = !1, l;
  Lr(e) && (r |= L.Link, i = e.link, t.link && e.link !== t.link && (n = L.Link));
  const u = t.format ^ r, c = t.format & u | n, d = r & u | n;
  c && (a = c & L.Link, o = a ? t.output.length : nb(t.output), s = o !== t.output.length, l = t.output.slice(o), t.output = t.output.slice(0, o), nn(t, $l(c, t, !0), !1), t.output += l, !d && !a && !s && !Hl(e.value.charCodeAt(0)) && nn(t, " ", !1)), d ? (a = d & L.Link, a ? (o = 0, t.link = i) : o = ab(e.value), o === 0 && e.value && !a && !Vl(t.output.charCodeAt(t.output.length - 1)) && nn(t, " ", !0), t.output += e.value.slice(0, o), nn(t, $l(d, t, !1), !0), t.output += e.value.slice(o)) : t.output += e.value, t.format = r;
}
function nb(e) {
  let t = e.length, i;
  for (; t > 0 && (i = e.charCodeAt(t - 1), !(!Hl(i) || Sn.has(i))); )
    t--;
  return t;
}
function ab(e) {
  let t = 0;
  for (; t < e.length && Vl(e.charCodeAt(t)); )
    t++;
  return t;
}
function $l(e, t, i) {
  let r = "";
  const { stack: n } = t;
  if (i) {
    for (let a = n.length - 1; a >= 0; a--)
      e & n[a] && (r += Fl.get(n[a]), n.splice(a, 1));
    e & L.Link && t.link && (r += `](${t.link})`, t.link = "");
  } else {
    e & L.Link && (r += "[");
    for (let a = 0; a < Na.length; a++)
      e & Na[a] && (n.push(Na[a]), r += Fl.get(Na[a]));
  }
  return r;
}
function ob(e, t, i) {
  if (e.length) {
    const n = e[e.length - 2].value;
    e.slice(0, -4).forEach((a) => {
      a.type === E.Markdown ? Pl(i, a) : (t.push({
        type: E.Link,
        format: a.format & ~L.LinkLabel,
        value: a.value,
        auto: !1,
        emoji: a.emoji,
        link: n,
        sticky: !1
      }), i.offset += a.value.length);
    }), i.range && e.slice(-4).forEach((a) => Pl(i, a));
  }
}
function sb(e, t) {
  let i = !1, r;
  for (; t < e.length; )
    if (r = e[t++], r.type === E.Markdown && r.format & L.Link) {
      if (i)
        return t;
      i = !0;
    }
}
function Pl(e, t) {
  const { range: i, offset: r } = e;
  if (i) {
    if (r < i[0])
      i[0] -= t.value.length;
    else if (r < i[0] + i[1]) {
      const n = r - i[0];
      e.range[1] = n + Math.max(0, i[1] - n - t.value.length);
    }
  }
}
function nn(e, t, i) {
  const { range: r } = e;
  if (r) {
    const n = e.output.length;
    n < r[0] || n === r[0] && i ? r[0] += t.length : n < r[0] + r[1] && (r[1] += t.length);
  }
  e.output += t;
}
function lb(e, t, i, r) {
  return bu(e, i, t, t, r);
}
function ub(e, t, i, r, n) {
  return bu(e, r, t, t + i, n);
}
function vf(e, t, i, r) {
  return bu(e, "", t, t + i, r);
}
function cb(e, t, i, r) {
  return {
    cut: Lt(Gt(e, t, i)),
    tokens: vf(e, t, i - t, r)
  };
}
function db(e, t) {
  const { index: i } = zi(e, t);
  return i !== -1 ? e[i].format : 0;
}
function _r(e, t, i, r = 0, n) {
  if (!e.length)
    return [Ll("", Nl(0, t), !0)];
  const [a, o] = Ro(e, i, i + r, !n);
  if (a.index === -1 || o.index === -1 || o.index < a.index)
    return e;
  const s = e[a.index];
  if (o.index === a.index)
    o.offset === a.offset ? e = Oa(e, a.index, t, a.offset, 0) : e = Oa(e, a.index, t, a.offset, o.offset - a.offset);
  else {
    e = e.slice();
    for (let l = a.index + 1, u; l < o.index; l++)
      u = Nl(e[l].format, t), e[l].format !== u && (e[l] = Fe(e[l], {
        format: u
      }));
    o.offset !== 0 && (e = Oa(e, o.index, t, 0, o.offset)), a.offset < s.value.length && (e = Oa(e, a.index, t, a.offset, s.value.length - a.offset));
  }
  return Lt(e);
}
function Gt(e, t, i) {
  if (!e.length)
    return [];
  const r = Li(e);
  if (i == null ? i = r : i < 0 && (i += r), t < 0 && (t += r), t < 0 || t > r || i < 0 || i > r || i < t)
    return console.warn(`Invalid range: ${t}:${i}. Max length: ${r}`), [];
  if (t === i)
    return [];
  const [n, a] = Ro(e, t, i);
  if (n.index === a.index) {
    const l = e[n.index];
    return n.offset === 0 && a.offset === l.value.length ? [l] : [
      Ws(Cl(e[n.index], n.offset, a.offset))
    ];
  }
  const [, o] = Wt(e[n.index], n.offset), [s] = Wt(e[a.index], a.offset);
  return Lt([
    Ws(o),
    ...e.slice(n.index + 1, a.index),
    Ws(s)
  ]);
}
function Mr(e, t, i, r = 0, n) {
  const [a, o] = Ro(e, i, i + r);
  if (a.index === -1 || o.index === -1)
    return console.warn("Invalid range:", { pos: i, len: r }), e;
  let s;
  const l = e.slice();
  for (let u = a.index + 1; u < o.index; u++)
    l[u] = Ia(l[u], t, n);
  if (a.index === o.index) {
    s = l[a.index];
    const [u, c] = Wt(s, a.offset), [d, h] = Wt(c, o.offset - a.offset), p = Ia(d, t, n);
    l.splice(a.index, 1, u, p, h);
  } else {
    let u, c;
    s = l[o.index], [u, c] = Wt(s, o.offset), l.splice(o.index, 1, Ia(u, t, n), c), s = l[a.index], [u, c] = Wt(s, a.offset), l.splice(a.index, 1, u, Ia(c, t, n));
  }
  return Lt(l);
}
function hb(e, t, i, r) {
  return vu(e, i, t, t, r);
}
function pb(e, t, i, r, n) {
  return vu(e, r, t, t + i, n);
}
function xf(e, t, i, r) {
  return vu(e, "", t, t + i, r);
}
function mb(e, t, i, r) {
  return {
    cut: gt(_o(e).slice(t, i), r),
    tokens: xf(e, t, i - t, r)
  };
}
function wf(e, t) {
  const i = e.slice();
  return t = t.sort((r, n) => r.pos - n.pos), t.forEach((r) => {
    var s;
    const n = zi(i, r.pos, "start");
    if (n.index === -1 || n.offset === -1)
      return;
    const a = i[n.index], o = (s = a.emoji) == null ? void 0 : s.find((l) => l.from === n.offset);
    if (o) {
      if (r.hint) {
        const l = a.value.slice(o.from, o.to);
        if (r.hint !== l)
          return;
      }
      r.data ? o.emojiData = r.data : o.emojiData && delete o.emojiData;
    }
  }), i;
}
function fb(e, t, i, r, n, a, o = 0) {
  var m, y;
  const s = [];
  for (let w = 0; w < ((m = t.emoji) == null ? void 0 : m.length); w++) {
    const g = t.emoji[w];
    if (g.from < i)
      s.push(g);
    else
      break;
  }
  const l = Bl(s, o, t.value), u = [];
  for (let w = (((y = r.emoji) == null ? void 0 : y.length) || 0) - 1; w >= 0; w--) {
    const g = r.emoji[w];
    if (g.from >= n)
      u.push(g);
    else
      break;
  }
  const c = zi(e, a, "start"), h = _o(e.slice(0, c.index)).length + c.offset - n, p = Bl(u, h, r.value);
  return wf(e, [...l, ...p]);
}
function bu(e, t, i, r, n) {
  if (!e.length)
    return gt(t, n);
  const [a, o] = Ro(e, i, r);
  if (a.index === -1 || o.index === -1)
    return console.warn("Invalid location:", { from: i, to: r, start: a, end: o }), e;
  const s = e.slice(0, a.index), l = e.slice(o.index + 1), u = e[o.index];
  let c = e[a.index], d = a.offset + t.length, h = c.value.slice(0, a.offset) + t + u.value.slice(o.offset);
  const p = { ...a }, m = c;
  let y = 0;
  c.type === E.Text && a.index > 0 && cf(e[a.index - 1]) && (c = s.pop(), h = c.value + h, d += c.value.length, a.index--, a.offset = 0, y = c.value.length);
  let w = gt(h, n);
  if (w.length) {
    if (w.forEach((k) => k.format = c.format), w = fb(w, m, p.offset, u, o.offset, d, y), c.format !== u.format) {
      const k = zi(w, d);
      k.index !== -1 && d !== h.length && w.slice(k.index).every((A) => A.type === E.Text) && (w = _r(w, u.format, d, h.length - d));
    }
    const g = a.offset === 0 && r - i > c.value.length;
    if (Lr(c) && !g) {
      const { link: k } = c;
      let A;
      if (a.offset === c.value.length) {
        let _ = a.offset;
        const T = e[a.index + 1];
        if ((T == null ? void 0 : T.type) === E.Link && T.link === c.link)
          _ += t.length;
        else if (c.sticky) {
          const K = t.match(/[\s.,!?:;]/);
          K ? (_ += K.index || 0, A = !1) : (_ += t.length, A = !0);
        }
        w = Mr(w, k, 0, _, A);
      } else a.offset === 0 && i === r ? w = Mr(w, k, t.length, c.value.length) : (n != null && n.stickyLink && r - i >= c.value.length && (A = !0), w = w.map((_) => df(_, k, A)));
    }
  }
  return Lt([...s, ...w, ...l]);
}
function vu(e, t, i, r, n) {
  const a = _o(e), o = a.slice(0, i) + t + a.slice(r);
  return gt(o, n);
}
function Oa(e, t, i, r, n) {
  const a = e[t], o = Nl(a.format, i);
  if (a.format === o)
    return e;
  let s;
  if (r === 0 && n === a.value.length)
    s = [Fe(a, { format: o })];
  else {
    const [l, u] = Wt(a, r), [c, d] = Wt(u, n);
    c.format = o, s = [l, c, d], uf(a) && (s = s.map((h) => qo(h))), s[1].sticky = n === 0;
  }
  return Lt([
    ...e.slice(0, t),
    ...s,
    ...e.slice(t + 1)
  ]);
}
function Nl(e, t) {
  return typeof t == "number" ? t : (t.add && (e |= t.add), t.remove && (e &= ~t.remove), e);
}
function Ia(e, t, i) {
  return t ? df(e, t, i) : qo(e);
}
function Ws(e) {
  if (e.type === E.Link) {
    if (!e.auto)
      return e;
    const t = gt(e.value, { link: !0 })[0];
    return t.format = e.format, t;
  }
  return qo(e);
}
const gb = /* @__PURE__ */ new Set([
  "insertOrderedList",
  "insertUnorderedList",
  "deleteOrderedList",
  "deleteUnorderedList"
]);
function yb(e, t, i, r) {
  const n = zn(r);
  let a = n ? hb(e, t, i, r.parse) : lb(e, t, i, r.parse);
  return r.resetFormatOnNewline && !n && /^[\n\r]+$/.test(i) && (a = _r(a, L.None, t, i.length)), a;
}
function xu(e, t, i, r) {
  return zn(r) ? xf(e, t, i - t, r.parse) : vf(e, t, i - t, r.parse);
}
function wu(e, t, i, r, n) {
  const a = typeof t == "string" ? t : Ga(t);
  return e = zn(n) ? pb(e, i, r - i, a, n.parse) : ub(e, i, r - i, a, n.parse), Array.isArray(t) && (e = vb(e, t, i, n)), e;
}
function bb(e, t, i, r) {
  return zn(r) ? mb(e, t, i, r.parse) : cb(e, t, i, r.parse);
}
function kn(e, t, i, r, n) {
  const a = r - i;
  if (zn(n)) {
    const o = zl(e, [i, a]), s = _r(o, t, i, a);
    return gt(Kl(s, [i, a]), n.parse);
  }
  return _r(e, t, i, a);
}
function kf(e, t, i, r, n) {
  let a;
  if (i !== r)
    a = Gt(e, i, r)[0];
  else {
    const o = zi(e, i, "start");
    o.index !== -1 && (a = e[o.index]);
  }
  if (a) {
    const o = a.format & t ? { remove: t } : { add: t };
    return kn(e, o, i, r, n);
  }
  return !e.length && t ? kn(e, { add: t }, 0, 0, n) : e;
}
function vb(e, t, i = 0, r) {
  return t.forEach((n) => {
    var o;
    const a = n.value.length;
    if ("sticky" in n && n.sticky ? e = kn(
      e,
      n.format,
      i,
      i + a,
      r
    ) : n.format && (e = kn(
      e,
      { add: n.format },
      i,
      i + a,
      r
    )), Lr(n) && (e = Mr(e, n.link, i, a)), (o = n.emoji) != null && o.length) {
      const s = Bl(
        n.emoji,
        i,
        n.value
      );
      e = wf(e, s);
    }
    i += a;
  }), e;
}
const gh = {
  formatBold: L.Bold,
  formatItalic: L.Italic,
  formatUnderline: L.Underline,
  formatStrikeThrough: L.Strike
};
function _f(e, t) {
  if (gb.has(e.inputType))
    return e.preventDefault(), t;
}
function Mf(e, t, i, r) {
  const { inputType: n } = e;
  if (n && yr(n, "format")) {
    const [a, o] = i;
    if (n === "formatFontColor") {
      const s = /^rgb\(0,\s*0,\s*0\)/.test(e.data) || e.data === "transparent" ? { remove: L.Marked } : { add: L.Marked };
      return _r(t, s, a, o - a);
    }
    return n === "formatRemove" ? _r(t, L.None, a, o - a) : n in gh ? kf(
      t,
      gh[n],
      a,
      o,
      r
    ) : t;
  }
}
function Sf(e, t, i, r) {
  const { inputType: n } = e;
  if (n && yr(n, "insert")) {
    const a = _b(e);
    return wu(t, a, i[0], i[1], r);
  }
}
function xb(e, t, i, r, n) {
  let [a, o] = r, s = "";
  if (Tl(r)) {
    const l = Li(t);
    l > e.length ? (a = Math.min(a, i[0]), o = Math.max(o, i[1]), a === o && (o += l - e.length)) : s = e.slice(a, Math.max(i[0], i[1]));
  } else
    s = e.slice(Math.min(a, i[0]), i[1]);
  return wu(t, s, a, o, n);
}
function wb(e, t, i, r, n) {
  const a = _f(e, t) || Mf(e, t, i, n) || Sf(e, t, r, n);
  if (a)
    return a;
  const { inputType: o } = e;
  if (o && yr(o, "delete")) {
    const [s, l] = i, [u, c] = r, d = Math.min(s, u);
    let h = Math.max(l, c);
    if (d === h && e.inputType.includes("Forward")) {
      const p = yf(e.currentTarget).length, m = Li(t);
      m > p && (h += m - p);
    }
    return xu(t, d, h, n);
  }
  return t;
}
function kb(e, t, i, r) {
  const n = _f(e, t) || Mf(e, t, i, r) || Sf(e, t, i, r);
  if (n)
    return n;
  const { inputType: a } = e;
  return a && a.startsWith("delete") ? xu(t, i[0], i[1], r) : t;
}
function Ga(e) {
  return e.map((t) => t.value).join("");
}
function zn(e) {
  var t;
  return !!((t = e.parse) != null && t.markdown);
}
function _b(e) {
  return e.inputType === "insertParagraph" || e.inputType === "insertLineBreak" ? `
` : e.data != null ? e.data : e.dataTransfer ? e.dataTransfer.getData("text/plain") : "";
}
const Ci = {
  ctrl: 1,
  alt: 2,
  shift: 4,
  meta: 8,
  any: 256
};
class Mb {
  constructor(t) {
    this.ctx = t, this.shortcuts = {};
  }
  /**
   * Регистрирует обработчик на указанный шорткат
   */
  register(t, i) {
    return Array.isArray(t) || (t = [t]), t.forEach((r) => this.shortcuts[yh(r)] = i), this;
  }
  /**
   * Регистрирует все обработчики шортактов из указанной мапы
   */
  registerAll(t) {
    Object.keys(t).forEach((i) => {
      this.register(i, t[i]);
    });
  }
  /**
   * Удаляет зарегистрированный шорткат
   * @param handler Если не указано, удалит любой шорткат, зарегистрированный
   * по этому сочетанию, иначе удалит только если зарегистрированный обработчик
   * совпадает с указанным
   */
  unregister(t, i) {
    return Array.isArray(t) || (t = [t]), t.forEach((r) => {
      const n = yh(r);
      this.shortcuts[n] && (!i || this.shortcuts[n] === i) && delete this.shortcuts[n];
    }), this;
  }
  /**
   * Удаляет все зарегистрированные шорткаты
   */
  unregisterAll() {
    return this.shortcuts = {}, this;
  }
  /**
   * Выполняет зарегистрированный обработчик для указанного события
   * @returns Вернёт `true` если был найден и выполнен обработчик для указанного события
   */
  handle(t) {
    const i = Cb(t.keyCode ? Lb(t.keyCode) : t.key), r = Sb(t);
    let n = `${r}:${i}`;
    !this.shortcuts[n] && r && (n = `${Ci.any}:${i}`);
    const a = this.shortcuts[n];
    return a && a(this.ctx, t) !== !1 ? (t.preventDefault(), !0) : !1;
  }
}
function Sb(e) {
  let t = 0;
  return e.altKey && (t |= Ci.alt), e.shiftKey && (t |= Ci.shift), e.ctrlKey && (t |= Ci.ctrl), e.metaKey && (t |= Ci.meta), t;
}
function Cb(e) {
  return e.replace(/^(Key|Digit|Numpad)/, "").toLowerCase();
}
function yh(e) {
  let t = 0, i = "";
  return e.toLowerCase().split(/[+-]/g).forEach((r) => {
    r === "cmd" && (r = navigator.platform === "MacIntel" ? "meta" : "ctrl"), r in Ci ? t |= Ci[r] : i = r;
  }), `${t}:${i}`;
}
function Lb(e) {
  return e === 27 ? "Escape" : e === 13 ? "Enter" : String.fromCharCode(e);
}
function Xb(e, t) {
  e = e.filter((l) => l.value.length > 0);
  const i = [], { text: r, tokens: n } = Cf(e);
  let a = 0, o = 0, s = 0;
  for (; a < r.length; ) {
    if (o = a + t, o >= r.length)
      i.push(Gt(n, a));
    else {
      for (; o > a && !Ut(r.charCodeAt(o)); )
        o--;
      if (a !== o) {
        for (s = o; s > a && Ut(r.charCodeAt(s - 1)); )
          s--;
        a !== s && i.push(Gt(n, a, s));
      } else
        o = a + t, i.push(Gt(n, a, o));
    }
    for (a = o; a < r.length && Ut(r.charCodeAt(a)); )
      a++;
  }
  return i;
}
function Cf(e) {
  let t = _o(e);
  const i = t.match(/^\s+/);
  i && (t = t.slice(i[0].length), e = Gt(e, i[0].length));
  const r = t.match(/\s+$/);
  return r && (t = t.slice(0, -r[0].length), e = Gt(e, 0, -r[0].length)), { text: t, tokens: e };
}
const bh = /* @__PURE__ */ new Set(["p", "div", "h1", "h2", "h3", "h4", "blockquote", "section", "br", "hr"]), Bb = /* @__PURE__ */ new Set(["base", "head", "link", "meta", "style", "script", "title", "area", "audio", "map", "track", "video", "embed", "iframe", "object", "param", "picture", "portal", "source", "svg", "math", "noscript", "datalist", "select", "template"]), Us = /* @__PURE__ */ new Set(["normal", "unset", "initial", "revert", "none"]), Ab = ["jetbrains mono", "fira code", "pt mono", "menlo", "courier", "monospace"], Js = {
  b: L.Bold,
  strong: L.Bold,
  i: L.Italic,
  em: L.Italic,
  code: L.Monospace,
  pre: L.Monospace,
  var: L.Monospace,
  s: L.Strike,
  u: L.Underline
};
function Eb(e, t) {
  const r = new DOMParser().parseFromString(e, "text/html"), n = new Fb(t);
  Lf(r.body || r.documentElement, n);
  const a = Lt(n.tokens);
  return Cf(a).tokens;
}
function Lf(e, t) {
  for (e = e.firstChild; e; ) {
    if (Tb(e))
      t.pushText(e.nodeValue);
    else if (Db(e)) {
      const i = wh(e);
      if (!Bb.has(i)) {
        const { format: r, link: n } = t;
        if (t.format = zb(e, t.format), i === "tr" ? t.pushNewline(1) : i === "td" ? t.pushText(" ") : (bh.has(i) || e.previousSibling && bh.has(wh(e.previousSibling))) && t.pushNewline(), i === "input") {
          const a = e.getAttribute("value"), o = (e.getAttribute("type") || "").toLowerCase();
          a && o !== "radio" && o !== "checkbox" && t.tokens.push(wo(a, t.format));
        } else if (i === "img") {
          const a = e.getAttribute("alt");
          a && t.tokens.push(wo(a, t.format));
        } else {
          if (i === "a" && t.options.links) {
            const a = e.getAttribute("href");
            $b(a) && (t.link = a);
          }
          Lf(e, t);
        }
        t.format = r, t.link = n;
      }
    }
    e = e.nextSibling;
  }
}
function Db(e) {
  return e.nodeType === 1;
}
function Tb(e) {
  return e.nodeType === 3;
}
class Fb {
  constructor(t) {
    this.format = L.None, this.tokens = [], this.link = null, this.options = Fe({
      links: !1
    }, t);
  }
  pushText(t) {
    let i = Af(t) ? this.handleWhitespace(t) : this.handleText(t);
    i && (this.link && (i = Mr(Lt(i), this.link, 0, Li(i))), this.tokens = this.tokens.concat(i));
  }
  pushNewline(t) {
    vh(this.tokens, t) && this.tokens.push(Bf());
  }
  handleWhitespace(t) {
    var r;
    let i = "";
    return this.format & L.Monospace ? ((r = Oe(this.tokens)) == null ? void 0 : r.type) === E.Newline ? i = t : Ol(this.tokens) && (i = " ") : Ol(this.tokens) && vh(this.tokens, 1) && (i = " "), i ? [wo(i, this.format)] : void 0;
  }
  handleText(t) {
    this.format & L.Monospace || (t = t.replace(/[\s\r\n]+/g, " "));
    const i = new Dh(t, Fe(Ch, {
      useFormat: !0
    }));
    if (i.format = this.format, this.link)
      for (; i.hasNext(); )
        xh(i) || Xs(i) || Gs(i) || i.consumeText();
    else
      for (; i.hasNext(); )
        xh(i) || Xs(i) || Gs(i) || Kh(i) || $h(i) || Ph(i) || Nh(i) || Rh(i) || i.consumeText();
    return i.flushText(), i.tokens;
  }
}
function vh(e, t = 2) {
  for (let i = e.length - 1; i >= 0; i--) {
    const r = e[i];
    if (r.type === E.Newline) {
      if (t--, t <= 0)
        return !1;
    } else if (!Af(r.value))
      return !0;
  }
  return !0;
}
function Ol(e) {
  const t = Oe(e);
  if (t) {
    const { value: i } = t;
    return !Ut(i.charCodeAt(i.length - 1));
  }
  return !0;
}
function zb(e, t = L.None) {
  const i = e.nodeName.toLowerCase(), r = e.getAttribute("style");
  let n = t;
  if (i in Js && (n |= Js[i]), r) {
    const a = Kb(r), o = a["font-style"], s = a["font-weight"], l = (a["font-family"] || "").toLowerCase(), u = a["text-decoration-line"] || a["text-decoration"] || "";
    o === "italic" ? n |= L.Italic : Us.has(o) && (n &= ~L.Italic), s === "bold" || s === "bolder" ? n |= L.Bold : Us.has(s) ? n &= ~L.Bold : /^\d+$/.test(s) && (parseInt(s, 10) > 400 ? n |= L.Bold : n &= ~L.Bold), u.includes("underline") && (n |= L.Underline), u.includes("line-through") && (n |= L.Strike), Us.has(u) && (n &= ~(L.Underline | L.Strike)), Pb(a.color) && (n |= L.Marked), l && (Ab.some((c) => l.includes(c)) ? n |= L.Monospace : Js[i] !== L.Monospace && (n &= ~L.Monospace));
  }
  return n;
}
function Kb(e) {
  const t = {};
  return e.replace(/\/\*.?\*\//g, "").split(";").forEach((i) => {
    const [r, n] = i.split(":", 2);
    n && (t[r.trim().toLowerCase()] = n.trim().toLowerCase());
  }), t;
}
function $b(e) {
  return e ? /^mailto:/i.test(e) || /^https?:/i.test(e) : !1;
}
function xh(e) {
  return Zh(e) ? (e.format & L.Monospace ? e.push(Bf(e.format)) : Ol(e.tokens) && e.push(wo(" ", e.format)), !0) : !1;
}
function wo(e, t) {
  return {
    type: E.Text,
    value: e,
    format: t,
    sticky: !1
  };
}
function Bf(e = L.None) {
  return {
    type: E.Newline,
    format: e,
    value: `
`
  };
}
function Af(e) {
  return /^[\s\r\n]+$/.test(e);
}
function wh(e) {
  return e.nodeName.toLowerCase();
}
function Pb(e) {
  return e ? /#f00|#ff0000|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)/.test(e) : !1;
}
const Nb = [
  [L.Bold, "font-weight:bold"],
  [L.Italic, "font-style:italic"],
  [L.Monospace, "font-family:monospace"],
  [L.Strike, "text-decoration:line-through"],
  [L.Underline, "text-decoration:underline"],
  [L.Heading, "font-size:2em"],
  [L.Marked, "color:#FB372B"]
];
function Ob(e) {
  const t = [];
  for (let i = 0; i < e.length; i++)
    i = Ib(e, i, t);
  return t.join("");
}
function Ib(e, t, i) {
  const r = e[t];
  if (!r.value)
    return t;
  const n = mf(e, t);
  if (n !== t) {
    const a = r.format, o = Rb(r, i);
    for (; t <= n; ) {
      const s = e[t];
      s.format === a ? i.push(r.value) : kh(s, i), t++;
    }
    return i.push(`</${o}>`), n;
  }
  return r.type === E.Newline || ff(r) ? i.push(r.value) : kh(r, i), t;
}
function Rb(e, t) {
  let i = Ef(e), r = "span";
  return pu(e) && (r = "a", i += ` href="${e.link}"`), t.push(`<${r}${i}>`), r;
}
function kh(e, t) {
  e.type !== E.UserSticker && t.push(`<span${Ef(e)}>${e.value}</span>`);
}
function Ef(e) {
  const t = qb(e.format);
  return t ? ` style="${t}"` : "";
}
function qb(e) {
  const t = [];
  return Nb.forEach(([i, r]) => {
    e & i && t.push(r);
  }), t.join(";");
}
const Df = "tamtam/fragment", jb = {
  url: (e) => prompt("Введите ссылку", e)
};
class Gb {
  /**
   * @param element Контейнер, в котором будет происходить редактирование
   */
  constructor(t, i = {}) {
    this.element = t, this.options = i, this.compositionStartRange = null, this.compositionRange = null, this.pendingModel = null, this._inited = !1, this.dirty = 0, this.caret = [0, 0], this.focused = !1, this.rafId = 0, this.onMathChange = (n) => {
      var l, u;
      const a = n.target;
      let o = a.closest("button");
      if (((l = o == null ? void 0 : o.dataset) == null ? void 0 : l.type) !== "formula-container" || ((u = a == null ? void 0 : a.dataset) == null ? void 0 : u.type) !== "formula") return;
      const s = document.createRange();
      console.log("change", a == null ? void 0 : a.blur, s), s.setStartAfter(o), s.setEndAfter(o), rn(s), a.blur(), this.element.focus();
    }, this.onMathBlur = (n) => {
      var d, h, p;
      let o = n.target.closest("button");
      if (((d = o == null ? void 0 : o.dataset) == null ? void 0 : d.type) !== "formula-container") return;
      const s = o.firstChild;
      if (((h = s == null ? void 0 : s.dataset) == null ? void 0 : h.type) !== "formula") return;
      const l = (p = o.dataset) == null ? void 0 : p.id;
      let u = this.model;
      u = this.model.map((m) => m.type !== E.Formula ? m : (m == null ? void 0 : m.id) === l ? {
        ...m,
        value: `${(s == null ? void 0 : s.value.at(0)) === "$" ? "" : "$"}${String(s == null ? void 0 : s.value).trim()}${(s == null ? void 0 : s.value.at(-1)) === "$" ? "" : "$"}`,
        event: Ti.Update
      } : m);
      const c = Je(this.element);
      console.log("Mathfield", this.model, u, s == null ? void 0 : s.value), this.updateModel(u, !1, c), this.syncUI();
    }, this.onMathFocus = (n) => {
      var c, d, h;
      let o = n.target.closest("button");
      if (((c = o == null ? void 0 : o.dataset) == null ? void 0 : c.type) !== "formula-container") return;
      const s = o.firstChild;
      if (((d = s == null ? void 0 : s.dataset) == null ? void 0 : d.type) !== "formula") return;
      const l = (h = o.dataset) == null ? void 0 : h.id;
      let u = this.model;
      u = this.model.map((p) => p.type !== E.Formula ? p : (p == null ? void 0 : p.id) === l ? {
        ...p,
        event: Ti.Create
      } : p), this.updateModel(u, !1, [0, 0]);
    }, this.onMathKeyDown = (n) => {
      var c;
      const a = n.target;
      let o = a.closest("button");
      if (((c = o == null ? void 0 : o.dataset) == null ? void 0 : c.type) !== "formula-container") return;
      window.getSelection();
      const s = o.firstChild;
      if (a === s) {
        console.log("formula key press"), n.stopImmediatePropagation();
        return;
      }
      n.key === "Enter" && setTimeout(() => {
        console.log("Enter", s), s.focus();
      }, 0);
      const l = document.createRange(), u = Je(this.element);
      console.log("range2", u), n.key === "ArrowLeft" ? (console.log("ArrowLeft", a, o, l), l.setStartBefore(o), l.setEndAfter(o), console.log("Arrow2", a, o, l), rn(l)) : n.key === "ArrowRight" && (console.log("ArrowRight", a, o, l), l.setStartBefore(o), l.setEndAfter(o), console.log("Arrow2", a, o, l), rn(l));
    }, this.onMathBeforeInput = (n) => {
      var s;
      let o = n.target.closest("button");
      ((s = o == null ? void 0 : o.dataset) == null ? void 0 : s.type) === "formula-container" && n.stopImmediatePropagation();
    }, this.onMathInput = (n) => {
      var s;
      let o = n.target.closest("button");
      ((s = o == null ? void 0 : o.dataset) == null ? void 0 : s.type) === "formula-container" && n.stopImmediatePropagation();
    }, this.onKeyDown = (n) => {
      var u;
      const a = Je(this.element);
      if (((u = n.target.dataset) == null ? void 0 : u.type) === "formula-container") return;
      const s = (c) => {
        var h;
        if (!c || c.type !== E.Formula || !c.id) return;
        const d = document.querySelector(
          `[data-id="${c.id}"]`
        );
        !d || ((h = d == null ? void 0 : d.dataset) == null ? void 0 : h.type) !== "formula-container" || this.element === document.activeElement && (this.element.blur(), d.focus());
      };
      let l;
      n.key === "ArrowLeft" ? (l = this.tokenForPos(Math.max(a[0], 0), !0), s(l)) : n.key === "ArrowRight" && (l = this.tokenForPos(Math.max(a[0], 0)), s(l)), n.defaultPrevented || this.shortcuts.handle(n), this.handleEnter(n);
    }, this.onCompositionStart = () => {
      this.compositionStartRange = Je(this.element), this.compositionRange = null;
    }, this.onCompositionUpdate = () => {
      this.compositionRange = this.getCompositionRange();
    }, this.onCompositionEnd = () => {
      this.compositionStartRange = null;
    }, this.onBeforeInput = (n) => {
      var s, l;
      const a = n.target;
      if (((s = a.dataset) == null ? void 0 : s.type) === "formula") {
        console.log("beforeinput", (l = a.dataset) == null ? void 0 : l.type), n.stopPropagation();
        return;
      }
      if (n.inputType === "historyUndo") {
        this.undo(), n.preventDefault();
        return;
      }
      if (n.inputType === "historyRedo") {
        this.redo(), n.preventDefault();
        return;
      }
      let o;
      if (n.getTargetRanges) {
        const u = n.getTargetRanges();
        u.length && (o = bf(this.element, u[0]));
      }
      o || (o = Je(this.element)), this.pendingModel = kb(
        n,
        this.model,
        o,
        this.options
      );
    }, this.onInput = (n) => {
      let a;
      const o = Je(this.element);
      if (n.target, this.pendingModel)
        a = this.pendingModel, this.compositionStartRange || (this.pendingModel = null);
      else {
        const s = this.compositionRange || this.caret;
        a = n.inputType ? wb(
          n,
          this.model,
          o,
          s,
          this.options
        ) : xb(
          this.getInputText(),
          this.model,
          o,
          s,
          this.options
        ), this.compositionRange = null;
      }
      a && this.updateModel(a, Wb(n), o);
    }, this.onSelectionChange = () => {
      if (this.dirty !== 0)
        return;
      const n = Je(this.element);
      n && this.saveSelection(n);
    }, this.onCopy = (n) => {
      this.copyFragment(n.clipboardData) && n.preventDefault();
    }, this.onCut = (n) => {
      this.copyFragment(n.clipboardData, !0) && n.preventDefault();
    }, this.onPaste = (n) => {
      var l;
      if (n.preventDefault(), Ub(n.clipboardData))
        return;
      const a = Je(this.element), s = Hb(n.clipboardData, this.options) || mn(n.clipboardData.getData("text/plain") || "");
      if (s && a) {
        let u = 0;
        typeof s == "string" ? u = s.length : (u = Li(s), (l = Oe(s)) != null && l.format && s.push({
          type: E.Text,
          value: "",
          format: db(this.model, a[0]),
          sticky: !0
        })), this.paste(s, a[0], a[1]), this.setSelection(a[0] + u), requestAnimationFrame(
          () => Mh(this.getScroller())
        );
      }
    }, this.onClick = (n) => {
      if (xo(n.target)) {
        const a = n.target, o = a.getBoundingClientRect(), s = o.left + o.width * 0.6, l = document.createRange();
        n.clientX < s ? (l.setStartBefore(a), l.setEndBefore(a)) : (l.setStartAfter(a), l.setEndAfter(a)), rn(l);
      }
    }, this.onFocus = () => {
      this.focused = !0, document.addEventListener("selectionchange", this.onSelectionChange);
    }, this.onBlur = () => {
      this.focused = !1, document.removeEventListener("selectionchange", this.onSelectionChange);
    };
    const r = i.value || "";
    this.model = gt(this.sanitizeText(r), i.parse), this.history = new Zy({
      compactActions: [
        "insert",
        "remove"
        /* Remove */
      ]
    }), this.shortcuts = new Mb(this), this.setup(), this.history.push(this.model, "init", this.caret), this._inited = !0, this.activeFormulaValue = "";
  }
  get model() {
    return this._model;
  }
  set model(t) {
    this._model !== t && (this._model = t, this.dirty === 0 && (this.dirty = 1), this.scheduleSyncUI());
  }
  /**
   * Вернёт `true` если редактор работает в режиме Markdown
   */
  get isMarkdown() {
    var t;
    return !!((t = this.options.parse) != null && t.markdown);
  }
  /**
   * Настраивает редактор для работы. Вынесено в отдельный метод для удобного
   * переопределения
   */
  setup() {
    const { element: t } = this;
    t.contentEditable = "true", t.translate = !1, t.addEventListener("change", this.onMathChange), t.addEventListener("blur", this.onMathBlur, !0), t.addEventListener("keydown", this.onMathKeyDown), t.addEventListener("beforeinput", this.onMathBeforeInput), t.addEventListener("input", this.onMathInput), t.addEventListener("keydown", this.onKeyDown), t.addEventListener("compositionstart", this.onCompositionStart), t.addEventListener("compositionupdate", this.onCompositionUpdate), t.addEventListener("compositionend", this.onCompositionEnd), t.addEventListener("beforeinput", this.onBeforeInput), t.addEventListener("input", this.onInput), t.addEventListener("cut", this.onCut), t.addEventListener("copy", this.onCopy), t.addEventListener("paste", this.onPaste), t.addEventListener("click", this.onClick), t.addEventListener("focus", this.onFocus), t.addEventListener("blur", this.onBlur);
    const { shortcuts: i } = this.options;
    i && this.shortcuts.registerAll(i);
  }
  /**
   * Вызывается для того, чтобы удалить все связи редактора с DOM.
   */
  dispose() {
    const { element: t } = this;
    t.removeEventListener("focus", this.onMathFocus, !0), t.removeEventListener("blur", this.onMathBlur, !0), t.removeEventListener("keydown", this.onMathKeyDown), t.removeEventListener("beforeinput", this.onMathBeforeInput), t.removeEventListener("input", this.onMathInput), t.removeEventListener("keydown", this.onKeyDown), t.removeEventListener(
      "compositionstart",
      this.onCompositionStart
    ), t.removeEventListener(
      "compositionupdate",
      this.onCompositionUpdate
    ), t.removeEventListener("compositionend", this.onCompositionEnd), t.removeEventListener("beforeinput", this.onBeforeInput), t.removeEventListener("input", this.onInput), t.removeEventListener("cut", this.onCut), t.removeEventListener("copy", this.onCopy), t.removeEventListener("paste", this.onPaste), t.removeEventListener("click", this.onClick), t.removeEventListener("focus", this.onFocus), t.removeEventListener("blur", this.onBlur), document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  /////////// Публичные методы для работы с текстом ///////////
  /**
   * Вставляет текст в указанную позицию
   */
  insertText(t, i) {
    return i = this.sanitizeText(i), this.updateModel(
      yb(this.model, t, i, this.options),
      "insert",
      [t, t + i.length]
    );
  }
  /**
   * Удаляет указанный диапазон текста
   */
  removeText(t, i) {
    return this.updateModel(
      xu(this.model, t, i, this.options),
      "remove",
      [t, i]
    );
  }
  /**
   * Заменяет текст в указанном диапазоне `from:to` на новый текст или токены
   */
  replaceText(t, i, r) {
    return this.paste(r, t, i);
  }
  /**
   * Вырезает фрагмент по указанному диапазону из модели и возвращает его
   * @returns Вырезанный фрагмент модели
   */
  cut(t, i) {
    const r = bb(this.model, t, i, this.options);
    return this.updateModel(r.tokens, "cut", [t, i]), r.cut;
  }
  /**
   * Вставка текста в указанную позицию
   */
  paste(t, i, r) {
    t = this.sanitizeText(t);
    const n = wu(this.model, t, i, r, this.options), a = typeof t == "string" ? t.length : Li(t), o = i + a;
    return this.updateModel(n, "paste", [o, o]);
  }
  /**
   * Ставит фокус в редактор
   */
  focus() {
    const [t, i] = this.caret;
    this.element.focus(), Yr(this.element, t, i);
  }
  /**
   * Обновляет форматирование у указанного диапазона
   */
  updateFormat(t, i, r = i) {
    const n = this.updateModel(
      kn(this.model, t, i, r, this.options),
      "format",
      [i, r]
    );
    return Yr(this.element, i, r), this.emit("editor-formatchange"), n;
  }
  /**
   * Переключает указанный формат у заданного диапазона текста
   */
  toggleFormat(t, i, r) {
    if (i == null) {
      const o = this.getSelection();
      i = o[0], r = o[1];
    } else r == null && (r = i);
    const n = kf(this.model, t, i, r, this.options), a = this.updateModel(n, "format", [i, r]);
    return Yr(this.element, i, r), this.emit("editor-formatchange"), a;
  }
  /**
   * Выбрать ссылку для указанного диапазона
   * @param callback Функция, которая на вход примет текущую ссылку в указанном
   * диапазоне (если она есть), и должна вернуть новую ссылку. Если надо убрать
   * ссылку, функция должна вернуть пустую строку
   */
  pickLink(t = jb) {
    const [i, r] = t.range || this.getSelection();
    let n = this.tokenForPos(i), a = "";
    if (n) {
      if (n.format & L.LinkLabel) {
        let s = this.model.indexOf(n) + 1;
        for (; s < this.model.length && (n = this.model[s++], n.type !== E.Link); )
          ;
      }
      n.type === E.Link && (a = n.link);
    }
    const o = t.url(a);
    o && typeof o == "object" && o.then ? o.then((s) => {
      s !== a && this.setLink(s, i, r);
    }) : o !== a && this.setLink(o, i, r);
  }
  /**
   * Ставит ссылку на `url` на указанный диапазон.
   * @param url Ссылка. Если `url` пустой или равен `null`, удаляет ссылку с указанного диапазона.
   * @param from Начало диапазона.
   * @param to Конец диапазона.
   */
  setLink(t, i, r = i) {
    t && (t = t.trim());
    let n;
    const a = [i, r - i];
    if (this.isMarkdown) {
      const o = zl(this.model, a), s = Mr(o, t, a[0], a[1]);
      n = gt(Kl(s, a), this.options.parse);
    } else
      n = Mr(this.model, t, a[0], a[1]);
    return this.updateModel(n, "link");
  }
  /**
   * Отменить последнее действие
   */
  undo() {
    if (this.history.canUndo) {
      const t = this.history.undo();
      this.updateModel(t.state, !1);
      const { current: i } = this.history;
      if (i) {
        const r = i.caret || i.range;
        r && this.setSelection(r[0], r[1]);
      }
      return t;
    }
  }
  /**
   * Повторить последнее отменённое действие
   */
  redo() {
    if (this.history.canRedo) {
      const t = this.history.redo();
      this.updateModel(t.state, !1);
      const i = t.caret || t.range;
      return i && this.setSelection(i[0], i[1]), t;
    }
  }
  /**
   * Возвращает фрагмент модели для указанного диапазона
   */
  slice(t, i) {
    return Gt(this.model, t, i);
  }
  /**
   * Возвращает токен для указанной позиции
   * @param tail В случае, если позиция `pos` указывает на границу токенов,
   * при `tail: true` вернётся токен слева от границы, иначе справа
   */
  tokenForPos(t, i) {
    let r = 0, n = 0;
    const { model: a } = this;
    for (let o = 0, s; o < a.length; o++) {
      if (s = a[o], n = r + s.value.length, t >= r && (i ? t <= n : t < n))
        return s;
      r += s.value.length;
    }
    if (r === t)
      return a[a.length - 1];
  }
  /**
   * Возвращает текущее выделение в виде текстового диапазона
   */
  getSelection() {
    return this.caret;
  }
  /**
   * Указывает текущее выделение текста или позицию каретки
   * @param noFocus Не ставить фокус в поле ввода (полезно для мобилок)
   */
  setSelection(t, i = t) {
    [t, i] = this.normalizeRange([t, i]), this.saveSelection([t, i]), this.dirty || Yr(this.element, t, i);
  }
  /**
   * Заменяет текущее значение редактора на указанное. При этом полностью
   * очищается история изменений редактора
   */
  setValue(t, i) {
    if (typeof t == "string" && (t = gt(this.sanitizeText(t), this.options.parse)), !i) {
      const r = Ga(t).length;
      i = [r, r];
    }
    this.saveSelection(i), this.model = t, this.history.clear(), this.history.push(this.model, "init", this.caret);
  }
  /**
   * То же самое, что `setValue`, но без отправки событий об изменении контента
   */
  replaceValue(t, i) {
    this._inited = !1, this.setValue(t, i), this._inited = !0;
  }
  /**
   * Возвращает текущее текстовое значение модели редактора
   */
  getText(t = this.model) {
    return Ga(t);
  }
  /**
   * Обновляет опции редактора
   */
  setOptions(t) {
    var r, n;
    let i = !1;
    if (t.shortcuts && (this.shortcuts.unregisterAll(), this.shortcuts.registerAll(t.shortcuts)), t.parse) {
      const a = !!((r = this.options.parse) != null && r.markdown);
      i = t.parse.markdown !== a;
    }
    if (this.options = Fe(this.options, t), i) {
      const a = this.getSelection(), o = [a[0], a[1] - a[0]], s = (n = this.options.parse) != null && n.markdown ? Kl(this.model, o) : zl(this.model, o);
      this.setValue(s, [o[0], o[0] + o[1]]);
    } else
      this.render();
  }
  /**
   * Возвращает строковое содержимое поля ввода
   */
  getInputText() {
    return yf(this.element);
  }
  /**
   * Подписываемся на указанное событие
   */
  on(t, i, r) {
    return this.element.addEventListener(t, i, r), this;
  }
  /**
   * Отписываемся от указанного события
   */
  off(t, i, r) {
    return this.element.removeEventListener(t, i, r), this;
  }
  /**
   * Сохраняет указанный диапазон в текущей записи истории в качестве последнего
   * известного выделения
   */
  saveSelection(t) {
    const { caret: i } = this;
    this.caret = t, this.history.saveCaret(t), (i[0] !== t[0] || i[1] !== t[1]) && this.emit("editor-selectionchange");
  }
  /**
   * Обновляет значение модели редактора с добавлением записи в историю изменений
   * @param value Новое значение модели
   * @param action Название действия, которое привело к изменению истории, или
   * `false`, если не надо добавлять действие в историю
   * @param range Диапазон выделения, который нужно сохранить в качестве текущего
   * в записи в истории
   */
  updateModel(t, i, r) {
    return t !== this.model && (typeof i == "string" && this.history.push(t, i, r), this.model = t), r && this.saveSelection(r), this.model;
  }
  /**
   * Правильно помещает фрагмент текста в буффер. Вместе с обычным текстом
   * туда помещается сериализованный фрагмент модели, чтобы сохранить форматирование
   */
  copyFragment(t, i) {
    const r = Je(this.element);
    if (r && !Tl(r)) {
      const n = i ? this.cut(r[0], r[1]) : this.slice(r[0], r[1]);
      return t.setData("text/plain", Ga(n)), t.setData("text/html", Ob(n)), this.isMarkdown || t.setData(Df, JSON.stringify(n)), i && this.setSelection(r[0]), !0;
    }
    return !1;
  }
  /**
   * Синхронизация модели данных редактора с UI.
   * Метод нужно вызывать только в том случае, если есть какие-то изменения
   */
  syncUI() {
    if (this.render(), this.focused) {
      const [t, i] = this.caret;
      Yr(this.element, t, i);
    }
    this.dirty === 2 && Mh(this.getScroller()), this.dirty = 0, this.emit("editor-update");
  }
  scheduleSyncUI() {
    this.rafId || (this.rafId = requestAnimationFrame(() => {
      this.rafId = 0, this.dirty !== 0 && this.syncUI();
    }));
  }
  render() {
    var t;
    Ny(this.element, this.model, {
      fixTrailingLine: !0,
      replaceTextEmoji: !!((t = this.options.parse) != null && t.textEmoji),
      emoji: this.options.emoji,
      nowrap: this.options.nowrap
    });
  }
  emit(t) {
    this._inited && mu(this.element, t, {
      editor: this
    });
  }
  normalizeRange([t, i]) {
    const r = Li(this.model);
    return [_h(t, 0, r), _h(i, 0, r)];
  }
  handleEnter(t) {
    if (!t.defaultPrevented && t.key === "Enter" && Jb(t)) {
      t.preventDefault();
      const i = Je(this.element), r = `
`;
      Tl(i) ? this.insertText(i[0], r) : this.replaceText(i[0], i[1], r), this.setSelection(i[0] + r.length), this.dirty = 2;
    }
  }
  /**
   * При необходимости удаляет из текста ненужные данные, исходя из текущих настроек
   */
  sanitizeText(t) {
    const { nowrap: i } = this.options;
    return typeof t == "string" ? mn(t, i) : t.map(
      (r) => Fe(r, { value: mn(r.value, i) })
    );
  }
  getCompositionRange() {
    const t = Je(this.element);
    return this.compositionStartRange && (t[0] = Math.min(this.compositionStartRange[0], t[0])), t;
  }
  getScroller() {
    return this.options.scroller || this.element;
  }
}
function _h(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
function Mh(e) {
  const i = window.getSelection().getRangeAt(0);
  if (!(i != null && i.collapsed))
    return;
  let r = i.getClientRects().item(0);
  if ((!r || !r.height) && Br(i.startContainer)) {
    const n = Vb(i);
    n && (r = n.getBoundingClientRect());
  }
  if (r && r.height > 0) {
    const n = e.getBoundingClientRect();
    (r.top < n.top || r.bottom > n.bottom) && (e.scrollTop += r.top - (n.top + n.height / 2));
  }
}
function Vb(e) {
  const t = e.startContainer.childNodes[e.startOffset];
  return t && Br(t) ? t : e.startContainer;
}
function Hb(e, t) {
  const i = e.getData(Df);
  if (i)
    return typeof i == "string" ? JSON.parse(i) : i;
  if (t.html) {
    const r = gt(
      mn(e.getData("text/plain") || ""),
      t.parse
    );
    if (r.length === 1 && r[0].type === E.Link)
      return r;
    const n = e.getData("text/html");
    if (n)
      return Eb(mn(n), { links: t.htmlLinks });
  }
}
function Wb(e) {
  const { inputType: t } = e;
  if (t) {
    if (yr(t, "insert"))
      return "insert";
    if (yr(t, "delete"))
      return "remove";
    if (yr(t, "format"))
      return "format";
  }
  return "update";
}
function mn(e, t) {
  return e = e.replace(/\x00/g, " "), t ? e.replace(/(\r\n?|\n)/g, " ") : e.replace(/\r\n?/g, `
`);
}
function Ub(e) {
  if (e.types.includes("Files")) {
    let t = 0, i = 0;
    for (let r = 0; r < e.items.length; r++) {
      const n = e.items[r];
      n.kind === "string" ? i++ : n.kind === "file" && t++;
    }
    return t >= i;
  }
  return !1;
}
function Jb(e) {
  return e.altKey || e.ctrlKey || e.shiftKey || e.metaKey;
}
export {
  Gb as Editor,
  L as TokenFormat,
  E as TokenType,
  If as codePointAt,
  Bl as createEmojiUpdatePayload,
  ql as createTree,
  Li as getLength,
  _o as getText,
  eb as locationToRange,
  zl as mdToText,
  gt as parse,
  bf as rangeToLocation,
  Ny as render,
  _r as setFormat,
  Mr as setLink,
  Gt as slice,
  Xb as split,
  Kl as textToMd,
  zi as tokenForPos,
  wf as updateEmojiData
};
