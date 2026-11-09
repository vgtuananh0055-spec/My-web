/* KAI FX: chuyển tab theo hướng, vuốt đổi tab, nghiêng 3D, parallax, haptic */
(() => {
  const view = document.getElementById("view"), keys = Object.keys(CONFIG.tabs);
  const root = document.documentElement, rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const buzz = ms => navigator.vibrate && navigator.vibrate(ms);
  const idx = () => Math.max(0, keys.indexOf(location.hash.slice(1).split("/")[0]));
  let cur = idx();

  // 1) Hướng chuyển tab
  addEventListener("hashchange", () => {
    const n = idx(); if (n !== cur) { root.style.setProperty("--dir", n > cur ? 1 : -1); buzz(8); cur = n; }
  });
  // vào trang mới: nội dung bay vào từ phía ngược lại
  new MutationObserver(() => {
    if (rm || !view.firstChild) return;
    const d = +getComputedStyle(root).getPropertyValue("--dir") || 1;
    view.animate([{opacity:0,transform:`translateX(${d*64}px) scale(.97)`,filter:"blur(10px)"},{opacity:1,transform:"none",filter:"blur(0)"}],
      {duration:520,easing:"cubic-bezier(.22,1,.36,1)"});
  }).observe(view, {childList:true});

  // 2) Vuốt trái/phải để đổi tab (có kéo theo ngón tay)
  let x0, y0, lock = null, dx = 0;
  const blocked = t => t.closest(".fol,.sgal,.dlg,.pal,.lb,input,select,iframe,.embed");
  addEventListener("touchstart", e => { if (blocked(e.target)) { x0 = null; return; } x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; lock = null; dx = 0; }, {passive:true});
  addEventListener("touchmove", e => {
    if (x0 == null) return;
    const mx = e.touches[0].clientX - x0, my = e.touches[0].clientY - y0;
    if (lock == null && Math.hypot(mx, my) > 10) lock = Math.abs(mx) > Math.abs(my) * 1.4 ? "x" : "y";
    if (lock !== "x") return;
    dx = mx; const edge = (dx > 0 && cur === 0) || (dx < 0 && cur === keys.length - 1);
    view.classList.add("drag"); view.style.transform = `translateX(${dx * (edge ? .15 : .4)}px)`; view.style.opacity = 1 - Math.min(Math.abs(dx) / 500, .35);
  }, {passive:true});
  addEventListener("touchend", () => {
    if (x0 == null) return; x0 = null;
    view.classList.remove("drag"); view.style.transform = ""; view.style.opacity = "";
    if (lock === "x" && Math.abs(dx) > 70) {
      const n = cur + (dx < 0 ? 1 : -1);
      if (n >= 0 && n < keys.length) location.hash = "#" + keys[n]; else buzz(15);
    }
  });

  // 3) Nghiêng 3D + đèn pin theo con trỏ / ngón tay
  const move = e => {
    const c = e.target.closest && e.target.closest(".card"); if (!c) return;
    const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
    if (!rm) { c.style.setProperty("--ry", (x - .5) * 12 + "deg"); c.style.setProperty("--rx", (.5 - y) * 12 + "deg"); }
    c.classList.add("tilt");
  };
  const rest = e => { const c = e.target.closest && e.target.closest(".card"); if (c) { c.classList.remove("tilt"); c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); } };
  view.addEventListener("pointermove", move); view.addEventListener("pointerdown", move);
  view.addEventListener("pointerup", rest); view.addEventListener("pointerleave", rest, true); view.addEventListener("pointercancel", rest);
  view.addEventListener("click", e => { if (e.target.closest(".btn,.favb,.fchip")) buzz(10); });

  // 4) Parallax banner khi cuộn
  let tk = false;
  addEventListener("scroll", () => { if (tk || rm) return; tk = true; requestAnimationFrame(() => {
    const i = document.querySelector(".hbg i"); if (i) i.style.transform = `translateY(${Math.min(scrollY, 400) * .25}px) scale(1.15)`; tk = false; }); }, {passive:true});
})();
