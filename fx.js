/* KAI FX (bản nhẹ): chuyển tab theo hướng, vuốt đổi tab, đèn pin chuột, haptic */
(() => {
  const view = document.getElementById("view"), keys = Object.keys(CONFIG.tabs);
  const root = document.documentElement, rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const buzz = ms => navigator.vibrate && navigator.vibrate(ms);
  const idx = () => Math.max(0, keys.indexOf(location.hash.slice(1).split("/")[0]));
  let cur = idx();

  addEventListener("hashchange", () => {
    const n = idx(); if (n !== cur) { root.style.setProperty("--dir", n > cur ? 1 : -1); buzz(8); cur = n; }
  });
  new MutationObserver(() => {
    if (rm || !view.firstChild) return;
    const d = +getComputedStyle(root).getPropertyValue("--dir") || 1;
    view.animate([{opacity:0,transform:`translateX(${d*48}px)`},{opacity:1,transform:"none"}], {duration:380,easing:"cubic-bezier(.22,1,.36,1)"});
  }).observe(view, {childList:true});

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
  view.addEventListener("click", e => { if (e.target.closest(".btn,.favb,.fchip")) buzz(10); });
})();
