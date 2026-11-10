/* KAI FX (bản nhẹ): chuyển tab theo hướng, vuốt đổi tab, đèn pin chuột, haptic */
(() => {
  const view = document.getElementById("view"), keys = Object.keys(CONFIG.tabs);
  const root = document.documentElement, rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const buzz = ms => navigator.vibrate && navigator.vibrate(ms);
  const idx = () => Math.max(0, keys.indexOf(location.hash.slice(1).split("/")[0]));

  // Nạp sẵn font (kể cả glyph tiếng Việt) ngay khi mở trang -> chuyển tab không bị khựng chờ font
  if (document.fonts && document.fonts.load) {
    const vi = "Thông tin Liên hệ ắằẳẵặấầẩẫậếềểễệốồổỗộớờởỡợứừửữự ABC abc 123";
    ["500 16px 'Bricolage Grotesque'", "800 16px 'Bricolage Grotesque'", "400 11px Silkscreen", "700 11px Silkscreen"]
      .forEach(x => document.fonts.load(x, vi).catch(() => {}));
  }

  // ===== Lượt truy cập: chấm xanh + số (Abacus, có CORS + JSONP dự phòng; đếm 1 lần / phiên) =====
  const VNS = CONFIG.visitNs || "tunkaitouu.site", VKEY = CONFIG.visitKey || "visits";
  const VBASE = "https://abacus.jasoncameron.dev/%OP%/" + encodeURIComponent(VNS) + "/" + encodeURIComponent(VKEY);
  const ls_ = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  let visits = +ls_.get("kt_visits") || 0, animated = false, failed = false;
  const fmt = n => n.toLocaleString("vi-VN");
  const jsonp = url => new Promise((ok, no) => {
    const cb = "__kv" + Date.now(), s = document.createElement("script");
    const done = () => { delete window[cb]; s.remove(); };
    window[cb] = r => { done(); ok(r); };
    s.onerror = () => { done(); no(new Error("jsonp")); };
    s.src = url + "?callback=" + cb; document.head.append(s);
    setTimeout(() => { if (window[cb]) { done(); no(new Error("timeout")); } }, 8000);
  });
  const call = op => { const u = VBASE.replace("%OP%", op);
    return fetch(u, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); }).catch(() => jsonp(u)); };
  const showVisits = el => {
    const num = el.querySelector("b"); if (!num) return;
    if (!visits) { num.textContent = failed ? "—" : "…"; return; }
    if (animated || rm) { num.textContent = fmt(visits); return; }
    animated = true; const t0 = performance.now(), to = visits;
    const step = t => { const p = Math.min((t - t0) / 800, 1); num.textContent = fmt(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const addVisit = () => {
    const ctl = view.querySelector(".ctl"); if (!ctl || ctl.querySelector(".visit")) return;
    const v = document.createElement("div"); v.className = "visit"; v.title = "Lượt truy cập"; v.setAttribute("aria-label", "Lượt truy cập");
    v.innerHTML = "<i></i><b>…</b>"; ctl.append(v); showVisits(v);
  };
  let counted = false; try { counted = !!sessionStorage.getItem("kt_counted"); } catch (e) {}
  const apply = j => { const n = +(j && j.value); if (!n) throw new Error("bad"); visits = n; ls_.set("kt_visits", n);
    try { sessionStorage.setItem("kt_counted", "1"); } catch (e) {} animated = false; view.querySelectorAll(".visit").forEach(showVisits); };
  (counted ? call("get").catch(() => call("hit")) : call("hit")).then(apply)
    .catch(() => { failed = true; view.querySelectorAll(".visit").forEach(showVisits); });

  let cur = idx();

  addEventListener("hashchange", () => {
    const n = idx(); if (n !== cur) { root.style.setProperty("--dir", n > cur ? 1 : -1); buzz(8); cur = n; }
    scrollTo({top:0,behavior:"instant"}); // cuộn lên đầu ngay, tránh cuộn mượt trong lúc chuyển
  });

  new MutationObserver(() => {
    if (!view.firstChild) return;
    addVisit();
    view.querySelectorAll("img").forEach(im => { im.decoding = "async"; });
    if (rm) return;
    const d = +root.style.getPropertyValue("--dir") || 1;
    view.animate([{opacity:.2,transform:`translateX(${d*40}px)`},{opacity:1,transform:"none"}], {duration:300,easing:"cubic-bezier(.22,1,.36,1)"});
  }).observe(view, {childList:true});
  addVisit();

  // Vuốt trái/phải đổi tab (không dùng khi đang cuộn dọc / trong khung cuộn ngang)
  let x0 = null, y0, lock = null, dx = 0, raf = 0;
  const blocked = t => t.closest(".fol,.sgal,.dlg,.pal,.lb,input,select,iframe,.embed");
  addEventListener("touchstart", e => { if (blocked(e.target)) { x0 = null; return; } x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; lock = null; dx = 0; }, {passive:true});
  addEventListener("touchmove", e => {
    if (x0 == null) return;
    const mx = e.touches[0].clientX - x0, my = e.touches[0].clientY - y0;
    if (lock == null && Math.hypot(mx, my) > 10) lock = Math.abs(mx) > Math.abs(my) * 1.4 ? "x" : "y";
    if (lock !== "x") return;
    dx = mx; if (raf) return;
    raf = requestAnimationFrame(() => { raf = 0;
      const edge = (dx > 0 && cur === 0) || (dx < 0 && cur === keys.length - 1);
      view.style.transition = "none"; view.style.transform = `translateX(${dx * (edge ? .15 : .35)}px)`; });
  }, {passive:true});
  addEventListener("touchend", () => {
    if (x0 == null) return; x0 = null;
    view.style.transition = ""; view.style.transform = "";
    if (lock === "x" && Math.abs(dx) > 70) {
      const n = cur + (dx < 0 ? 1 : -1);
      if (n >= 0 && n < keys.length) location.hash = "#" + keys[n]; else buzz(15);
    }
  });

  // Đèn pin theo chuột (chỉ máy có chuột; gộp bằng rAF)
  if (fine && !rm) {
    let c = null, mx = 0, my = 0, t = 0;
    view.addEventListener("pointermove", e => {
      c = e.target.closest(".card"); if (!c) return; mx = e.clientX; my = e.clientY;
      if (t) return; t = requestAnimationFrame(() => { t = 0; if (!c) return; const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", (mx - r.left) / r.width * 100 + "%"); c.style.setProperty("--my", (my - r.top) / r.height * 100 + "%"); });
    }, {passive:true});
  }

  // Parallax banner khi cuộn (nhẹ: gộp theo khung hình, dừng khi banner đã ra khỏi màn hình)
  if (!rm) {
    let tk = false, last = -1;
    addEventListener("scroll", () => {
      if (tk) return; tk = true;
      requestAnimationFrame(() => { tk = false;
        const y = Math.min(scrollY, 500); if (y === last) return; last = y;
        const i = document.querySelector(".hbg i"); if (i) i.style.transform = `translate3d(0,${y * .25}px,0) scale(1.15)`;
      });
    }, {passive:true});
  }
  view.addEventListener("click", e => { if (e.target.closest(".btn,.favb,.fchip")) buzz(10); });
})();
