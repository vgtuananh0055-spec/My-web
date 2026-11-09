/* ===== SỬA NỘI DUNG Ở ĐÂY ===== */


/* ============ TIỆN ÍCH ============ */
const $ = id => document.getElementById(id);
const el = (t, c, txt) => { const n = document.createElement(t); if (c) n.className = c; if (txt !== undefined) n.textContent = txt; return n; };
const fold = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
const ls = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
const isVid = u => !!u && u.split("?")[0].toLowerCase().endsWith(".mp4");
const anim = (n, kf, o) => { if (!reduce && n && n.animate) return n.animate(kf, o); };
const SPRING = "cubic-bezier(.3,1.6,.5,1)";

/* ============ ÁP DỤNG GIAO DIỆN TỪ CONFIG ============ */
(function applyUI() {
  const root = document.documentElement.style, u = CONFIG.ui || {};
  const num = (k, v, unit) => { if (u[v] != null && u[v] !== "") root.setProperty(k, u[v] + unit); };
  num("--glass-blur", "glassBlur", "px"); num("--blur", "glassBlur", "px");
  num("--dock-w", "dockWidth", "px"); num("--dock-p", "dockPadding", "px"); num("--radius", "borderRadius", "px");
  if (u.primaryColor) {
    root.setProperty("--pri", u.primaryColor);
    const m = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(u.primaryColor);
    let L = .8;
    if (m) { const c = [1, 2, 3].map(i => { const v = parseInt(m[i], 16) / 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); L = .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; }
    root.setProperty("--on-pri", L > .35 ? "#14102a" : "#ffffff");
  }
  if (u.titleGrad1) root.setProperty("--text-g1", u.titleGrad1);
  if (u.titleGrad2) root.setProperty("--text-g2", u.titleGrad2);
  const fam = u.fontFamily || "Lexend";
  root.setProperty("--font-family", "'" + fam + "', system-ui, sans-serif");
  const q = fam.replace(/ /g, "+");
  if (![...document.querySelectorAll("link[rel=stylesheet]")].some(l => l.href.includes("family=" + q))) {
    const l = document.createElement("link"); l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=" + q + ":wght@400;500;700&display=swap"; document.head.append(l);
  }
  if (CONFIG.globalBg) document.body.style.background = 'url("' + CONFIG.globalBg + '") center/cover fixed';
  else document.body.style.background = '';
  document.title = CONFIG.name || "Trang cá nhân";
})();

/* ============ THEME SÁNG / TỐI ============ */
function setTheme(t) {
  document.documentElement.dataset.theme = t; ls.set("kt_theme", t);
  $("meta-theme").content = t === "light" ? "#f3f0fa" : "#08070d";
  document.querySelectorAll(".js-theme").forEach(b => { b.innerHTML = svg(t === "light" ? "moon" : "sun", 20); b.setAttribute("aria-label", t === "light" ? "Chuyển sang tối" : "Chuyển sang sáng"); });
}
const toggleTheme = () => setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");

/* ============ ICON ============ */
const ICON = {
  java: '<path d="M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3v2M12 3v2"/>',
  bedrock: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>',
  phone: '<path d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2"/>',
  puzzle: '<path d="M10 4a2 2 0 1 1 4 0v1h4v4h1a2 2 0 1 1 0 4h-1v5h-5v-1a2 2 0 1 0-4 0v1H4v-5h1a2 2 0 1 0 0-4H4V5h6V4z"/>',
  sliders: '<path d="M4 6h8M16 6h4M4 12h3M11 12h9M4 18h11M19 18h1M12 4v4M7 10v4M15 16v4"/>',
  map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
  grid: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  dl: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  out: '<path d="M7 17L17 7M8 7h9v9"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  left: '<path d="M15 18l-6-6 6-6"/>',
  right: '<path d="M9 18l6-6-6-6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  cmd: '<path d="M9 9V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V9z"/>'
};
const FICON = { launcher: "phone", plugin: "puzzle", config: "sliders", map: "map", model: "bedrock", addon: "puzzle", texture: "grid", mashups: "layers", skin: "user" };
const svg = (n, s = 20, fill) => '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="' + (fill ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[n] || ICON.link) + "</svg>";

const APP = {
  facebook: { bg: "linear-gradient(160deg,#3b8cff,#0b57e0)", svg: '<path fill="#fff" d="M13.4 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.6V4.3C16.3 4.2 15.4 4 14.3 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.8v3h2.6V21z"/>' },
  tiktok: { bg: "linear-gradient(160deg,#25252d,#070709)", svg: '<g fill="none" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path transform="translate(-.7 -.7)" stroke="#25f4ee" d="M14 4v10.4a3.4 3.4 0 1 1-3.4-3.4M14 4c.4 2.5 2 4 4.6 4.3"/><path transform="translate(.7 .7)" stroke="#fe2c55" d="M14 4v10.4a3.4 3.4 0 1 1-3.4-3.4M14 4c.4 2.5 2 4 4.6 4.3"/><path stroke="#fff" d="M14 4v10.4a3.4 3.4 0 1 1-3.4-3.4M14 4c.4 2.5 2 4 4.6 4.3"/></g>' },
  telegram: { bg: "linear-gradient(160deg,#37b6f5,#1d8fd0)", svg: '<path fill="#fff" d="M3 11.2 20.5 4.2c.8-.3 1.5.2 1.3 1.2l-3 14c-.2 1-.8 1.2-1.6.7l-4.6-3.4-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L7.3 13.5 2.8 12.1c-1-.3-1-1 .2-1.5z"/>' },
  youtube: { bg: "linear-gradient(160deg,#ff3b4f,#d9001e)", svg: '<path fill="#fff" fill-rule="evenodd" d="M7 5h10a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5zM10 8.8v6.4l5.4-3.2z"/>' },
  spotify: { bg: "linear-gradient(160deg,#1db954,#127a35)", svg: '<path fill="#fff" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.6 14.4c-.2.3-.5.4-.8.2-2.1-1.3-4.8-1.6-7.9-.9-.4.1-.7-.2-.8-.6-.1-.4.2-.7.6-.8 3.5-.7 6.5-.4 8.8 1 .3.2.4.6.1 1.1zm1.1-2.4c-.2.4-.7.5-1 .3-2.5-1.5-6.3-2-8.5-1.1-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 2.6-1.1 6.9-.5 9.8 1.3.4.2.6.8.3 1.3zm.1-2.5c-3-1.8-7.9-2-10.8-1.1-.6.2-1.2-.1-1.4-.7-.2-.6.1-1.2.7-1.4 3.4-1 8.8-.7 12.3 1.4.5.3.7 1 .4 1.5-.3.6-.9.8-1.4.5z"/>' }
};
function appTile(k, cls) {
  const a = APP[k], t = el("span", cls || "ico");
  t.style.background = a ? a.bg : "linear-gradient(135deg,var(--pri),#ff5d8f)";
  t.style.color = "#fff";
  t.innerHTML = a ? '<svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">' + a.svg + "</svg>" : svg(k === "youtubemusic" ? "music" : "link", 26);
  return t;
}

/* ============ ẢNH / MÀU ============ */
const PAL = [["#7c5cff", "#26136b"], ["#ff5d8f", "#5e1033"], ["#22d3c5", "#0a4450"], ["#f59e0b", "#5e3406"], ["#4f8cff", "#122766"], ["#a3e635", "#2a420a"]];
const hname = n => [...String(n || "")].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 997, 7);
function tint(n, name) { const p = PAL[hname(name) % PAL.length]; n.style.setProperty("--c1", p[0]); n.style.setProperty("--c2", p[1]); }
function fb(name, person) {
  if (CONFIG.fallbackImage && !person) return CONFIG.fallbackImage;
  const p = PAL[hname(name) % PAL.length];
  const g = "<linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='" + p[0] + "'/><stop offset='1' stop-color='" + p[1] + "'/></linearGradient>";
  const body = person ? "<circle cx='100' cy='78' r='34' fill='#fff' fill-opacity='.9'/><path d='M34 190c4-42 32-62 66-62s62 20 66 62z' fill='#fff' fill-opacity='.9'/>" : "<g fill='none' stroke='#fff' stroke-opacity='.88' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'><rect x='116' y='56' width='88' height='68' rx='12'/><path d='M122 114l24-24 18 16 14-12 26 20'/></g><circle cx='144' cy='78' r='7' fill='#fff' fill-opacity='.88'/>";
  const x = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='" + (person ? "0 0 200 200" : "0 0 320 180") + "'><defs>" + g + "</defs><rect width='100%' height='100%' fill='url(#g)'/>" + body + "</svg>";
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(x);
}
function pic(src, name, person) {
  if (isVid(src)) {
    const v = document.createElement("video");
    v.autoplay = true; v.loop = true; v.muted = true; v.playsInline = true; v.src = src; return v;
  }
  const img = new Image(); img.alt = ""; img.decoding = "async"; img.draggable = false; img.referrerPolicy = "no-referrer";
  if (!person) img.loading = "lazy";
  img.onload = () => img.classList.add("ok");
  img.onerror = () => { img.onerror = null; img.src = fb(name, person); };
  img.src = src || fb(name, person); return img;
}
function avatarEl(cls) {
  const a = el("span", "avatar " + (cls || "")); a.tabIndex = 0; a.setAttribute("role", "button"); a.setAttribute("aria-label", "Xem ảnh đại diện");
  const im = pic(CONFIG.avatar, CONFIG.name, true); a.append(im);
  const open = () => openLB([im.currentSrc || im.src], 0, CONFIG.name);
  a.onclick = open; a.onkeydown = e => { if (e.key === "Enter") open(); };
  return a;
}
function ext(a, url) { a.href = url || "#"; if (url && url !== "#") { a.target = "_blank"; a.rel = "noopener"; } }

/* ============ DỮ LIỆU & CHUẨN HOÁ PREVIEW ============ */
const TABS = Object.keys(CONFIG.tabs);
const hasFolders = k => !!(CONFIG.tabs[k] && CONFIG.tabs[k].folders);
const favs = new Set(ls.get("kt_favs", []));
const saveFavs = () => ls.set("kt_favs", [...favs]);

function norm(raw) {
  let i = raw || {};
  if (Array.isArray(i)) i = { name: i[0], desc: i[1], url: i[2], image: i[3], source: i[4] };
  const title = (i.title || i.name || "Không tên").trim();
  const by = i.by || CONFIG.name;
  let actions = Array.isArray(i.actions) ? i.actions.filter(a => a && a.url && a.url !== "#").map(a => ({ label: a.label || "Tải xuống", url: a.url, primary: !!a.primary })) : [];
  let website = i.source || i.marketplaceUrl || "";
  if (i.zalith) {
    const a0 = actions[0], a1 = actions[1];
    const dl = i.source || i.url || (a0 && a0.url);
    const gh = i.github || (a1 && a1.url);
    actions = [];
    if (dl) actions.push({ label: "Tải bản mới nhất", url: dl, primary: true });
    if (gh) actions.push({ label: "GitHub", url: gh, kind: "out" });
    website = "";
  } else if (!i.title && i.url && !actions.length) {
    actions = [{ label: "Tải xuống", url: i.url, primary: true }];
  }

  // Gom ảnh Thumbnail + Banner + danh sách PreviewImages (loại trùng lặp)
  const rawPreviews = Array.isArray(i.previewImages)
    ? i.previewImages
    : (typeof i.previewImages === "string" ? i.previewImages.split(/\r?\n/) : []);
  const gallery = [];
  const pushImg = u => {
    const s = String(u || "").trim();
    if (s && !gallery.includes(s)) gallery.push(s);
  };
  pushImg(i.banner);
  pushImg(i.image);
  rawPreviews.forEach(pushImg);

  const image = i.image || gallery[0] || "";
  const metaExtra = i.metaExtra || [i.publisher, i.price].filter(Boolean).join(" · ") || "";

  return {
    title,
    subtitle: i.subtitle || "by " + by,
    description: i.description || i.desc || "",
    image,
    banner: i.banner || "",
    gallery: gallery.length ? gallery : (image ? [image] : []),
    metaExtra,
    actions,
    website
  };
}
function entriesOf(tabKey, onlyFolder) {
  const tab = CONFIG.tabs[tabKey]; const out = [];
  (tab.folders || []).forEach((f, fi) => {
    if (onlyFolder && f.id !== onlyFolder) return;
    (f.items || []).forEach(it => {
      const e = norm(it); e.tab = tabKey; e.folderId = f.id; e.folder = f.name; e.fi = fi; e.id = tabKey + "/" + f.id + "/" + e.title;
      out.push(e);
    });
  });
  return out;
}
const countOf = k => { const t = CONFIG.tabs[k]; return t.links ? t.links.length : (t.folders || []).reduce((s, f) => s + (f.items || []).length, 0); };

/* ============ TOAST ============ */
let tt;
function toast(msg, ico) {
  const t = $("toast"); t.innerHTML = ico ? svg(ico, 18) : ""; t.append(document.createTextNode(msg));
  t.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 2400);
}

/* ============ OVERLAY & LIGHTBOX GALLERY ============ */
const syncLock = () => document.documentElement.classList.toggle("lock", !!document.querySelector(".dlg.on,.pal.on,.lb.on"));
const openOv = n => { n.classList.add("on"); syncLock(); };
const closeOv = n => { n.classList.remove("on"); syncLock(); };

let lbList = [], lbIdx = 0, lbCap = "";
$("lb-x").innerHTML = svg("x", 22);
$("lb-prev").innerHTML = svg("left", 22);
$("lb-next").innerHTML = svg("right", 22);

function renderLBSlide() {
  const c = $("lb-c"); c.innerHTML = "";
  const src = lbList[lbIdx] || "";
  let m;
  if (isVid(src)) { m = document.createElement("video"); m.autoplay = true; m.loop = true; m.controls = true; m.playsInline = true; m.src = src; }
  else { m = new Image(); m.alt = ""; m.onerror = () => { m.onerror = null; m.src = fb(lbCap); }; m.src = src; }
  c.append(m);
  const label = lbList.length > 1 ? `${lbCap ? lbCap + " · " : ""}${lbIdx + 1} / ${lbList.length}` : lbCap;
  $("lb-cap").textContent = label || "";
  $("lb-cap").hidden = !label;
  $("lb-prev").hidden = lbList.length < 2;
  $("lb-next").hidden = lbList.length < 2;
}
function openLB(srcOrArr, idx = 0, name = "") {
  lbList = Array.isArray(srcOrArr) ? srcOrArr.filter(Boolean) : [srcOrArr].filter(Boolean);
  if (!lbList.length) lbList = [fb(name)];
  lbIdx = Math.max(0, Math.min(idx, lbList.length - 1));
  lbCap = name || "";
  renderLBSlide();
  openOv($("lb"));
}
function stepLB(d) {
  if (lbList.length < 2) return;
  lbIdx = (lbIdx + d + lbList.length) % lbList.length;
  renderLBSlide();
}
const closeLB = () => { closeOv($("lb")); $("lb-c").innerHTML = ""; };
$("lb").addEventListener("click", e => {
  if (e.target.closest(".lb-nav")) return;
  closeLB();
});
$("lb-prev").onclick = e => { e.stopPropagation(); stepLB(-1); };
$("lb-next").onclick = e => { e.stopPropagation(); stepLB(1); };

/* ============ CHI TIẾT SẢN PHẨM & GALLERY PREVIEW ============ */
let shown = [], dIdx = -1, gIdx = 0, needRefresh = false;
const sheet = $("sheet");
function openDetail(i) { if (!shown[i]) return; dIdx = i; gIdx = 0; fillDetail(); openOv($("dlg")); sheet.scrollTop = 0; }
function closeDetail() {
  if (!$("dlg").classList.contains("on")) return;
  closeOv($("dlg")); dIdx = -1;
  if (needRefresh) { needRefresh = false; refreshList(); }
}
function stepDetail(d) {
  if (shown.length < 2) return;
  dIdx = (dIdx + d + shown.length) % shown.length;
  gIdx = 0;
  fillDetail();
  sheet.scrollTop = 0;
}
function fillDetail() {
  const e = shown[dIdx]; sheet.replaceChildren();
  const gal = e.gallery && e.gallery.length ? e.gallery : [e.image];
  gIdx = Math.max(0, Math.min(gIdx, gal.length - 1));

  const grab = el("span", "grab");
  const x = el("button", "ib sx"); x.type = "button"; x.innerHTML = svg("x", 20); x.setAttribute("aria-label", "Đóng"); x.onclick = closeDetail;

  const m = el("div", "smedia"); m.id = "smedia"; tint(m, e.title);
  const pos = el("span", "pos");
  let curMediaEl = null;

  const setMainMedia = idx => {
    gIdx = (idx + gal.length) % gal.length;
    if (curMediaEl) curMediaEl.remove();
    curMediaEl = pic(gal[gIdx], e.title);
    m.prepend(curMediaEl);
    if (gal.length > 1) {
      pos.textContent = "Ảnh " + (gIdx + 1) + " / " + gal.length;
      pos.hidden = false;
    } else if (shown.length > 1) {
      pos.textContent = (dIdx + 1) + " / " + shown.length;
      pos.hidden = false;
    } else {
      pos.hidden = true;
    }
    sheet.querySelectorAll(".sgal-it").forEach((th, k) => {
      const active = k === gIdx;
      th.classList.toggle("on", active);
      if (active && th.scrollIntoView) th.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    });
  };

  m.append(pos);
  m.onclick = ev => {
    if (ev.target.closest(".nav")) return;
    openLB(gal, gIdx, e.title);
  };

  if (gal.length > 1) {
    const l = el("button", "nav l"), r = el("button", "nav r"); l.type = r.type = "button";
    l.innerHTML = svg("left", 20); r.innerHTML = svg("right", 20);
    l.setAttribute("aria-label", "Ảnh trước"); r.setAttribute("aria-label", "Ảnh sau");
    l.onclick = ev => { ev.stopPropagation(); setMainMedia(gIdx - 1); };
    r.onclick = ev => { ev.stopPropagation(); setMainMedia(gIdx + 1); };
    m.append(l, r);
  } else if (shown.length > 1) {
    const l = el("button", "nav l"), r = el("button", "nav r"); l.type = r.type = "button";
    l.innerHTML = svg("left", 20); r.innerHTML = svg("right", 20);
    l.setAttribute("aria-label", "Mục trước"); r.setAttribute("aria-label", "Mục sau");
    l.onclick = ev => { ev.stopPropagation(); stepDetail(-1); };
    r.onclick = ev => { ev.stopPropagation(); stepDetail(1); };
    m.append(l, r);
  }

  let galStrip = null;
  if (gal.length > 1) {
    galStrip = el("div", "sgal");
    gal.forEach((u, k) => {
      const item = el("button", "sgal-it" + (k === gIdx ? " on" : ""));
      item.type = "button";
      item.setAttribute("aria-label", "Xem ảnh preview " + (k + 1));
      item.append(pic(u, e.title));
      item.onclick = () => setMainMedia(k);
      galStrip.append(item);
    });
  }

  setMainMedia(gIdx);

  const b = el("div", "sbody");
  const tags = el("div", "tags");
  tags.append(el("span", "tg g", e.folder), el("span", "tg", CONFIG.tabs[e.tab].label));
  if (e.metaExtra) tags.append(el("span", "tg ok", e.metaExtra));
  if (gal.length > 1) tags.append(el("span", "tg", gal.length + " ảnh preview"));

  b.append(tags, el("h2", "", e.title), el("p", "sub", e.subtitle));
  b.append(el("div", "lab", "Mô tả chi tiết"), el("p", "desc", e.description || "Không có mô tả."));

  const acts = el("div", "sacts");
  e.actions.forEach((a, k) => {
    const n = el("a", "btn " + (a.primary || (k === 0 && a.kind !== "out") ? "pri" : "")); ext(n, a.url);
    n.innerHTML = svg(a.kind === "out" ? "out" : "dl", 19); n.append(el("span", "t", a.label));
    n.onclick = () => toast("Đang mở: " + e.title, "dl"); acts.append(n);
  });
  if (e.website) { const n = el("a", "btn"); ext(n, e.website); n.innerHTML = svg("out", 19); n.append(el("span", "t", "Xem trên Website gốc")); acts.append(n); }
  const row = el("div", "srow");
  const fav = el("button", "btn favb2" + (favs.has(e.id) ? " on" : "")); fav.type = "button"; fav.dataset.fav = e.id; fav.dataset.s = 18; fav.dataset.txt = "1";
  const setFav = () => { const on = favs.has(e.id); fav.classList.toggle("on", on); fav.innerHTML = svg("star", 18, on) + "<span>" + (on ? "Đã lưu" : "Lưu") + "</span>"; };
  setFav(); fav.onclick = () => toggleFav(e.id);
  row.append(fav);
  const main = e.actions[0];
  if (main) { const cp = el("button", "btn"); cp.type = "button"; cp.innerHTML = svg("copy", 18) + "<span>Chép link</span>"; cp.onclick = () => copyText(main.url, "Đã chép link tải"); row.append(cp); }
  const sh = el("button", "btn"); sh.type = "button"; sh.innerHTML = svg("share", 18) + "<span>Chia sẻ</span>";
  sh.onclick = () => {
    const url = location.href.split("#")[0] + "#" + e.tab + "/" + e.folderId;
    if (navigator.share) navigator.share({ title: e.title, text: e.title + " — " + CONFIG.name, url }).catch(() => {}); else copyText(url, "Đã chép link trang");
  };
  row.append(sh);
  b.append(acts, row);

  sheet.append(grab, x, m);
  if (galStrip) sheet.append(galStrip);
  sheet.append(b);
}
function copyText(t, msg) {
  const done = () => toast(msg || "Đã chép", "copy");
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, () => fallbackCopy(t, done)); else fallbackCopy(t, done);
}
function fallbackCopy(t, done) { const a = document.createElement("textarea"); a.value = t; a.style.cssText = "position:fixed;opacity:0"; document.body.append(a); a.select(); try { document.execCommand("copy"); } catch (e) {} a.remove(); done(); }
$("dlg").addEventListener("click", e => { if (e.target === $("dlg")) closeDetail(); });
(function swipe() {
  let y0 = null, dy = 0;
  sheet.addEventListener("touchstart", e => { if (innerWidth < 700 && sheet.scrollTop <= 0 && !e.target.closest(".nav,.sgal")) { y0 = e.touches[0].clientY; dy = 0; } }, { passive: true });
  sheet.addEventListener("touchmove", e => { if (y0 == null) return; dy = e.touches[0].clientY - y0; if (dy > 0) { sheet.style.transition = "none"; sheet.style.transform = "translateY(" + dy + "px)"; } else dy = 0; }, { passive: true });
  sheet.addEventListener("touchend", () => { if (y0 == null) return; sheet.style.transition = "transform .25s"; sheet.style.transform = ""; const close = dy > 110; y0 = null; dy = 0; setTimeout(() => { sheet.style.transition = ""; }, 260); if (close) closeDetail(); });
})();

/* ============ YÊU THÍCH ============ */
function toggleFav(id) {
  if (favs.has(id)) { favs.delete(id); toast("Đã bỏ lưu"); } else { favs.add(id); toast("Đã lưu vào danh sách", "star"); }
  saveFavs();
  const on = favs.has(id);
  document.querySelectorAll("[data-fav]").forEach(b => {
    if (b.dataset.fav !== id) return;
    b.classList.toggle("on", on);
    b.innerHTML = svg("star", +b.dataset.s || 18, on) + (b.dataset.txt ? "<span>" + (on ? "Đã lưu" : "Lưu") + "</span>" : "");
  });
  updateSavedChip();
  if (S.folder === "saved" && !S.q) { if ($("dlg").classList.contains("on")) needRefresh = true; else refreshList(); }
}
function updateSavedChip() {
  const c = document.querySelector(".fchip.sv .n"); if (!c || !hasFolders(S.tab)) return;
  c.textContent = entriesOf(S.tab).filter(e => favs.has(e.id)).length;
}

/* ============ TRẠNG THÁI & ROUTE (CHỐNG NHÁY) ============ */
const S = { tab: TABS[0], folder: null, q: "", sort: ls.get("kt_sort", "def"), layout: ls.get("kt_layout", "grid") };
let lastKey = null, first = true;

function route() {
  const p = location.hash.slice(1).split("/");
  const nt = TABS.includes(p[0]) ? p[0] : TABS[0]; const tab = CONFIG.tabs[nt];
  let nf = null;
  if (tab.folders && tab.folders.length) nf = p[1] === "saved" ? "saved" : (tab.folders.some(f => f.id === p[1]) ? p[1] : tab.folders[0].id);
  const key = nt + "/" + nf; if (key === lastKey) return; lastKey = key;

  const old = S.tab, isFirst = first, tabChanged = nt !== old || isFirst;
  closeDetail();

  if (!tabChanged) {
    S.folder = nf; S.q = "";
    syncFolders();
    const i = document.querySelector(".sbox input");
    if (i) { i.value = ""; const c = document.querySelector(".sbox .clr"); if (c) c.hidden = true; }
    refreshList();
    first = false;
    return;
  }

  S.tab = nt; S.folder = nf; S.q = "";
  
  const viewEl = $("view");
  if (!isFirst) {
    viewEl.classList.add("fade-out"); // Bắt đầu hiệu ứng mờ đi
    setTimeout(() => {
      view(); // Đổi nội dung HTML
      window.scrollTo({ top: 0, behavior: "smooth" });
      requestAnimationFrame(() => viewEl.classList.remove("fade-out")); // Hiện mượt lên lại
    }, 200); // Đợi 200ms cho mờ hẳn rồi mới đổi
  } else {
    view();
  }
  first = false;
}
function goto(t, f) {
  const tab = CONFIG.tabs[t];
  location.hash = "#" + t + (tab.folders && f ? "/" + f : "");
}

/* ============ KHUNG ĐIỀU HƯỚNG ============ */
function brandEl() {
  const b = el("div", "brand"); b.append(avatarEl());
  const t = el("div"); const n = el("b", "", CONFIG.name || ""); const s = el("small", "", "Minecraft hub"); t.append(n, s); b.append(t); return b;
}
function buildNav() {
  const side = $("side"), panel = el("div", "panel glass");
  panel.append(brandEl(), el("div", "lab", "Danh mục"));
  TABS.forEach(k => {
    const a = el("a", "nv"); a.href = "#" + k; a.dataset.k = k; a.innerHTML = svg(k, 20);
    a.append(el("span", "", CONFIG.tabs[k].label), el("span", "n", String(countOf(k)))); panel.append(a);
  });
  panel.append(el("div", "sp"));
  const sb = el("button", "sbtn"); sb.type = "button"; sb.innerHTML = svg("search", 18) + "<span>Tìm kiếm nhanh</span><kbd>Ctrl K</kbd>"; sb.onclick = openPal;
  const row = el("div", "row2"); const th = el("button", "sbtn js-theme"); th.type = "button"; th.onclick = toggleTheme;
  row.append(th); panel.append(sb, row); side.append(panel);
  th.style.justifyContent = "center";
  const top = $("mtop"); top.append(brandEl());
  const tools = el("div", "tools-top");
  const s2 = el("button", "ib"); s2.type = "button"; s2.innerHTML = svg("search", 20); s2.setAttribute("aria-label", "Tìm kiếm"); s2.onclick = openPal;
  const t2 = el("button", "ib js-theme"); t2.type = "button"; t2.onclick = toggleTheme;
  tools.append(s2, t2); top.append(tools);
  const seg = $("seg"); const g = el("span", "glider"); g.id = "glider"; seg.append(g);
  TABS.forEach(k => { const a = el("a"); a.href = "#" + k; a.dataset.k = k; a.innerHTML = svg(k, 18); a.append(el("span", "", CONFIG.tabs[k].label)); seg.append(a); });
}
function syncNav() {
  document.querySelectorAll("[data-k]").forEach(a => { if (a.dataset.k === S.tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  glide();
}
function glide(first_) {
  const a = document.querySelector('#seg a[aria-current="page"]'), g = $("glider"); if (!a || !g || !a.offsetWidth) return;
  if (first_) g.style.transition = "none";
  g.style.width = a.offsetWidth + "px"; g.style.height = a.offsetHeight + "px"; g.style.top = a.offsetTop + "px"; g.style.transform = "translateX(" + a.offsetLeft + "px)";
  if (first_) { void g.offsetWidth; g.style.transition = ""; }
}

/* ============ VIEW ============ */
function heroEl(tab) {
  const h = el("section", "hero"); const bg = el("div", "hbg"); const bi = el("i");
  const g = tab.grad || ["#7c5cff", "#1b1050"];
  bg.style.background = "linear-gradient(135deg," + g[0] + "," + g[1] + ")";
  if (tab.bannerImg) bi.style.backgroundImage = 'url("' + String(tab.bannerImg).replace(/"/g, "%22") + '")';
  bg.append(bi);

  const k = el("span", "kick"); k.innerHTML = svg(S.tab, 14); k.append(document.createTextNode(tab.label));

  const row = el("div", "hrow"); let lead;
  if (tab.iconImg) { lead = el("span", "htile"); const im = el("img"); im.alt = ""; im.referrerPolicy = "no-referrer"; im.src = tab.iconImg; im.onerror = () => { im.remove(); lead.innerHTML = svg(S.tab, 34); }; lead.append(im); }
  else if (tab.links) lead = avatarEl("lg");
  else { lead = el("span", "htile"); lead.innerHTML = svg(S.tab, 38); }

  const m = el("div", "htxt");
  m.append(el("h1", "", tab.title), el("p", "", tab.sub));

  row.append(lead, m); 
  h.append(bg, el("span", "orb"), k, row);
  return h;
}
function toolsEl() {
  const w = el("div", "tools");
  const sb = el("label", "sbox glass"); sb.style.borderRadius = "999px"; sb.innerHTML = svg("search", 20);
  const inp = el("input"); inp.type = "search"; inp.placeholder = "Tìm trong " + CONFIG.tabs[S.tab].label + "…"; inp.value = S.q; inp.setAttribute("aria-label", "Tìm kiếm");
  const clr = el("button", "clr"); clr.type = "button"; clr.hidden = !S.q; clr.innerHTML = svg("x", 18); clr.setAttribute("aria-label", "Xoá");
  sb.append(inp, clr);
  inp.oninput = () => { S.q = inp.value; clr.hidden = !S.q; document.querySelector(".fol") && document.querySelector(".fol").classList.toggle("dim", !!S.q.trim()); refreshList(); };
  clr.onclick = e => { e.preventDefault(); inp.value = ""; inp.oninput(); inp.focus(); };
  const ctl = el("div", "ctl");
  const sw = el("div", "sortw glass"); sw.style.borderRadius = "999px";
  const sel = el("select"); sel.setAttribute("aria-label", "Sắp xếp");
  [["def", "Mặc định"], ["az", "A → Z"], ["za", "Z → A"]].forEach(o => sel.add(new Option(o[1], o[0])));
  sel.value = S.sort; sel.onchange = () => { S.sort = sel.value; ls.set("kt_sort", S.sort); refreshList(); }; sw.append(sel);
  const lay = el("div", "lay glass"); lay.style.borderRadius = "999px";
  [["grid", "gridv"], ["list", "list"]].forEach(([k, ic]) => {
    const b = el("button", S.layout === k ? "on" : ""); b.type = "button"; b.innerHTML = svg(ic === "gridv" ? "grid" : ic, 18); b.setAttribute("aria-label", k === "grid" ? "Dạng lưới" : "Dạng danh sách");
    b.onclick = () => { S.layout = k; ls.set("kt_layout", k); lay.querySelectorAll("button").forEach(x => x.classList.remove("on")); b.classList.add("on"); refreshList(); }; lay.append(b);
  });
  ctl.append(sw, lay); w.append(sb, ctl); return w;
}
function foldersEl(tab) {
  const w = el("nav", "fol"); w.setAttribute("aria-label", "Danh mục");
  tab.folders.forEach(f => {
    const b = el("button", "fchip"); b.type = "button"; b.dataset.f = f.id; b.innerHTML = svg(FICON[f.id] || "folder", 18);
    b.append(el("span", "", f.name), el("span", "n", String((f.items || []).length)));
    b.onclick = () => { location.hash = "#" + S.tab + "/" + f.id; }; w.append(b);
  });
  const sv = el("button", "fchip sv"); sv.type = "button"; sv.dataset.f = "saved"; sv.innerHTML = svg("star", 18, true);
  sv.append(el("span", "", "Đã lưu"), el("span", "n", String(entriesOf(S.tab).filter(e => favs.has(e.id)).length)));
  sv.onclick = () => { location.hash = "#" + S.tab + "/saved"; }; w.append(sv);
  return w;
}
function syncFolders() {
  document.querySelectorAll(".fchip").forEach(c => c.classList.toggle("on", c.dataset.f === S.folder));
  const on = document.querySelector(".fchip.on"); if (on) { const w = on.parentNode; w.scrollTo ? w.scrollTo({ left: on.offsetLeft - (w.clientWidth - on.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" }) : (w.scrollLeft = on.offsetLeft - (w.clientWidth - on.offsetWidth) / 2); }
  const f = document.querySelector(".fol"); if (f) f.classList.toggle("dim", !!S.q.trim());
}
function view() {
  const tab = CONFIG.tabs[S.tab], root = $("view"); root.replaceChildren();
  root.append(heroEl(tab));
  if (!tab.links) { root.append(toolsEl(), foldersEl(tab)); }
  const list = el("div"); list.id = "list"; root.append(list);
  const ft = el("p", "foot", "© " + new Date().getFullYear() + " " + CONFIG.name + " · Web V2"); root.append(ft);
  syncNav(); syncFolders(); refreshList();
}

function secEl(no, title, cnt) {
  const s = el("div", "sec"); s.append(el("span", "no", no), el("h2", "", title), el("span", "ln"));
  if (cnt != null) s.append(el("span", "cnt", cnt + " mục")); return s;
}
function emptyEl(msg, ico) { const d = el("div", "empty"); d.innerHTML = svg(ico || "folder", 44); d.append(el("p", "", msg)); return d; }

function refreshList() {
  const L = $("list"); if (!L) return; L.replaceChildren();
  const tab = CONFIG.tabs[S.tab];
  if (tab.links) { shown = []; renderInfo(L, tab); return; }
  const q = fold(S.q.trim()); let pool, no, title;
  if (q) { pool = entriesOf(S.tab).filter(e => fold(e.title + " " + e.subtitle + " " + e.description + " " + e.folder).includes(q)); no = "⌕"; title = "Kết quả"; }
  else if (S.folder === "saved") { pool = entriesOf(S.tab).filter(e => favs.has(e.id)); no = "★"; title = "Đã lưu"; }
  else { const fi = tab.folders.findIndex(f => f.id === S.folder); pool = entriesOf(S.tab, S.folder); no = String(fi + 1).padStart(2, "0"); title = fi >= 0 ? tab.folders[fi].name : ""; }
  if (S.sort === "az") pool.sort((a, b) => a.title.localeCompare(b.title, "vi")); else if (S.sort === "za") pool.sort((a, b) => b.title.localeCompare(a.title, "vi"));
  shown = pool;
  L.append(secEl(no, title, pool.length));
  if (!pool.length) {
    L.append(emptyEl(q ? "Không tìm thấy kết quả cho “" + S.q.trim() + "”." : S.folder === "saved" ? "Bạn chưa lưu mục nào. Bấm ★ trên thẻ để lưu lại." : "Thư mục này chưa có mục nào.", q ? "search" : S.folder === "saved" ? "star" : "folder"));
    return;
  }
  const g = el("div", "items" + (S.layout === "list" ? " list" : ""));
  pool.forEach((e, i) => g.append(cardEl(e, i))); L.append(g);
}

function cardEl(e, idx) {
  const c = el("article", "card rv");
  const m = el("div", "media"); tint(m, e.title);
  m.append(el("span", "init", (e.title || "?").charAt(0).toUpperCase()), pic(e.image, e.title), el("span", "tag", e.folder));
  if (e.gallery && e.gallery.length > 1) {
    const pc = el("span", "pcount");
    pc.innerHTML = svg("eye", 12) + "<span>" + e.gallery.length + "</span>";
    m.append(pc);
  }
  m.onclick = () => openDetail(idx);
  const fav = el("button", "favb" + (favs.has(e.id) ? " on" : "")); fav.type = "button"; fav.dataset.fav = e.id; fav.dataset.s = 18; fav.innerHTML = svg("star", 18, favs.has(e.id)); fav.setAttribute("aria-label", "Lưu");
  fav.onclick = ev => { ev.stopPropagation(); toggleFav(e.id); }; m.append(fav);
  const b = el("div", "cbody"); b.append(el("h3", "", e.title), el("small", "", e.subtitle)); if (e.description) b.append(el("p", "", e.description)); b.onclick = () => openDetail(idx);
  const f = el("div", "cfoot"); const main = e.actions[0];
  if (main) { const a = el("a", "btn pri grow"); ext(a, main.url); a.innerHTML = svg("dl", 17); a.append(el("span", "t", main.label)); a.title = main.label; a.setAttribute("aria-label", main.label + " " + e.title); a.onclick = () => toast("Đang mở: " + e.title, "dl"); f.append(a); }
  const d = el("button", "btn" + (main ? " icon" : " grow")); d.type = "button"; d.innerHTML = svg(main ? "info" : "layers", 18); d.setAttribute("aria-label", "Chi tiết " + e.title); d.title = "Chi tiết";
  if (!main) d.append(el("span", "t", "Xem chi tiết")); d.onclick = () => openDetail(idx); f.append(d);
  c.append(m, b, f); 
  c.style.animationDelay = (idx * 0.05) + "s";
  return c;
}

const isMedia = l => l.app === "spotify" || l.app === "youtubemusic";
function ytEmbed(u) {
  try { const x = new URL(u); let id = x.searchParams.get("v"); const list = x.searchParams.get("list");
    if (!id && x.hostname.includes("youtu.be")) id = x.pathname.slice(1);
    if (id) return "https://www.youtube.com/embed/" + encodeURIComponent(id) + (list ? "?list=" + encodeURIComponent(list) : "");
    if (list) return "https://www.youtube.com/embed/videoseries?list=" + encodeURIComponent(list); } catch (e) {} return "";
}
function spEmbed(u) { try { const x = new URL(u); return "https://open.spotify.com/embed" + x.pathname.replace(/^\/intl-[a-z-]+/i, "").replace(/^\/embed/, ""); } catch (e) { return ""; } }
function embedEl(l) {
  const w = el("div", "embed glass"); const h = el("div", "eh"); h.innerHTML = svg("music", 18); h.append(el("span", "", l.name || "Phát nhạc"));
  if (l.desc) h.append(el("small", "", l.desc)); w.append(h);
  const fr = document.createElement("iframe"); fr.loading = "lazy"; fr.setAttribute("allowfullscreen", "");
  if (l.app === "spotify") { fr.src = spEmbed(l.url); fr.height = /\/(playlist|album|show)\//.test(l.url) ? 352 : 152; fr.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"; fr.title = "Spotify"; }
  else { fr.src = ytEmbed(l.url); fr.className = "yt"; fr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"; fr.title = "YouTube"; }
  if (!fr.src) return linkTile(l);
  w.append(fr); return w;
}
function linkTile(l) {
  const t = el("article", "tile rv"); t.append(appTile(l.app));
  const tx = el("div", "tx"); tx.append(el("b", "", l.name), el("small", "", l.desc || "")); t.append(tx);
  const a = el("a", "stretch"); ext(a, l.url); a.setAttribute("aria-label", l.name); t.append(a);
  const cp = el("button", "go"); cp.type = "button"; cp.innerHTML = svg("copy", 17); cp.setAttribute("aria-label", "Chép link " + l.name); cp.title = "Chép link";
  cp.onclick = e => { e.stopPropagation(); copyText(l.url, "Đã chép link " + l.name); }; t.append(cp);
  t.style.animationDelay = (Math.random() * 0.15) + "s";
  return t;
}
function renderInfo(L, tab) {
  const links = tab.links || [], normal = links.filter(l => !isMedia(l)), media = links.filter(isMedia);
  L.append(secEl("01", "Liên hệ", normal.length));
  const g = el("div", "bento");
  if (!normal.length) g.append(emptyEl("Chưa có liên kết nào.", "link"));
  normal.forEach(l => g.append(linkTile(l)));
  L.append(g);
  if (media.length) { L.append(secEl("02", "Âm nhạc & Video", media.length)); const g2 = el("div", "bento"); media.forEach(m => g2.append(embedEl(m))); L.append(g2); }
}

/* ============ HIỆU ỨNG ============ */
document.addEventListener("pointerdown", e => {
  if (reduce) return; const t = e.target.closest(".btn,.fchip,.seg a"); if (!t) return;
  const r = t.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2.2, s = el("span", "ripple");
  s.style.cssText = "width:" + d + "px;height:" + d + "px;left:" + (e.clientX - r.left - d / 2) + "px;top:" + (e.clientY - r.top - d / 2) + "px";
  if (getComputedStyle(t).position === "static") t.style.position = "relative"; t.style.overflow = "hidden"; t.append(s);
  const a = anim(s, [{ transform: "scale(0)", opacity: .9 }, { transform: "scale(1)", opacity: 0 }], { duration: 600, easing: "ease-out" });
  if (a) a.onfinish = () => s.remove(); else s.remove();
});

addEventListener("scroll", () => { const h = document.documentElement, m = h.scrollHeight - h.clientHeight; $("prog").style.transform = "scaleX(" + (m > 0 ? h.scrollTop / m : 0) + ")"; }, { passive: true });

/* ============ COMMAND PALETTE ============ */
let prow = [], psel = 0;
$("pal-ic").innerHTML = svg("search", 20);
function openPal() { $("pin").value = ""; palRender(); openOv($("pal")); setTimeout(() => $("pin").focus(), 30); }
function closePal() { closeOv($("pal")); }
function palRender() {
  const q = fold($("pin").value.trim()); prow = [];
  if (!q) {
    TABS.forEach(t => prow.push({ ico: t, title: "Đi tới " + CONFIG.tabs[t].label, sub: CONFIG.tabs[t].title, run: () => goto(t) }));
    const st = hasFolders(S.tab) ? S.tab : TABS.find(hasFolders);
    if (st) prow.push({ ico: "star", title: "Mục đã lưu", sub: "Trong " + CONFIG.tabs[st].label, run: () => goto(st, "saved") });
    prow.push({ ico: document.documentElement.dataset.theme === "light" ? "moon" : "sun", title: "Đổi giao diện sáng / tối", sub: "", run: toggleTheme });
  } else {
    TABS.forEach(t => {
      const tab = CONFIG.tabs[t];
      if (tab.links) tab.links.forEach(l => { if (fold(l.name + " " + (l.desc || "")).includes(q)) prow.push({ ico: "link", app: l.app, title: l.name, sub: (l.desc || "") + " · " + tab.label, run: () => window.open(l.url, "_blank", "noopener") }); });
      else entriesOf(t).forEach(e => { if (fold(e.title + " " + e.subtitle + " " + e.description + " " + e.folder).includes(q)) prow.push({ img: e.image, title: e.title, sub: e.folder + " · " + tab.label, run: () => { goto(e.tab, e.folderId); const i = shown.findIndex(x => x.id === e.id); if (i >= 0) openDetail(i); } }); });
    });
    prow = prow.slice(0, 40);
  }
  psel = 0; palDraw();
}
function palDraw() {
  const L = $("plist"); L.replaceChildren();
  if (!prow.length) { L.append(emptyEl("Không có kết quả.", "search")); return; }
  prow.forEach((r, i) => {
    const d = el("div", "prow" + (i === psel ? " sel" : "")); let th;
    if (r.app) th = appTile(r.app, "pth"); else { th = el("span", "pth"); tint(th, r.title); if (r.img) th.append(pic(r.img, r.title)); else th.innerHTML = svg(r.ico || "link", 20); }
    const tx = el("div", "tx"); tx.append(el("b", "", r.title)); if (r.sub) tx.append(el("small", "", r.sub));
    d.append(th, tx); d.onmousemove = () => { if (psel !== i) { psel = i; L.querySelectorAll(".prow").forEach((n, k) => n.classList.toggle("sel", k === i)); } };
    d.onclick = () => { closePal(); r.run(); }; L.append(d);
  });
  const s = L.querySelector(".sel"); if (s && s.scrollIntoView) s.scrollIntoView({ block: "nearest" });
}
$("pin").addEventListener("input", palRender);
$("pin").addEventListener("keydown", e => {
  if (e.key === "ArrowDown") { e.preventDefault(); psel = Math.min(prow.length - 1, psel + 1); palDraw(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); psel = Math.max(0, psel - 1); palDraw(); }
  else if (e.key === "Enter") { e.preventDefault(); const r = prow[psel]; if (r) { closePal(); r.run(); } }
});
$("pal").addEventListener("mousedown", e => { if (e.target === $("pal")) closePal(); });

/* ============ PHÍM TẮT ============ */
document.addEventListener("keydown", e => {
  const typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "");
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("pal").classList.contains("on") ? closePal() : openPal(); return; }
  if (e.key === "/" && !typing && !$("pal").classList.contains("on")) { e.preventDefault(); openPal(); return; }
  if (e.key === "Escape") {
    if ($("lb").classList.contains("on")) closeLB(); else if ($("pal").classList.contains("on")) closePal();
    else if ($("dlg").classList.contains("on")) closeDetail(); else if ($("welcome").classList.contains("on")) closeWelcome();
  }
  if ($("lb").classList.contains("on") && !typing) {
    if (e.key === "ArrowLeft") stepLB(-1); else if (e.key === "ArrowRight") stepLB(1);
    return;
  }
  if ($("dlg").classList.contains("on") && !typing) { if (e.key === "ArrowLeft") stepDetail(-1); else if (e.key === "ArrowRight") stepDetail(1); }
});

/* ============ POPUP CHÀO MỪNG ============ */
function closeWelcome() { closeOv($("welcome")); }
$("w-btn").onclick = closeWelcome;
$("welcome").addEventListener("click", e => { if (e.target === $("welcome")) closeWelcome(); });
setTimeout(() => {
  const w = CONFIG.welcome || {}; if (w.active === false) return;
  $("w-title").textContent = w.title || "Thông báo"; $("w-desc").textContent = w.desc || "";
  $("w-btn").textContent = w.btn || "Tiếp tục"; openOv($("welcome"));
}, 400);

/* ============ KHỞI ĐỘNG ============ */
buildNav();
setTheme(ls.get("kt_theme", "dark") === "light" ? "light" : "dark");
addEventListener("hashchange", route);
addEventListener("resize", () => glide(true));
route();
requestAnimationFrame(() => glide(true));
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => glide(true));