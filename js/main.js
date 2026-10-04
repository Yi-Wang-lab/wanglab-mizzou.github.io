/* Wang Lab website script: mobile menu, home-page slideshow, footer year.
   一般不需要改这个文件。轮播图自动切换间隔在下面 DELAY（毫秒）。 */
(function () {
  "use strict";

  /* ---- mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---- footer year ---- */
  var years = document.querySelectorAll("[data-year]");
  for (var y = 0; y < years.length; y++) years[y].textContent = new Date().getFullYear();

  /* ---- slideshow ---- */
  var root = document.querySelector("[data-carousel]");
  if (!root) return;

  var DELAY = 7000;
  var slides = Array.prototype.slice.call(root.querySelectorAll(".slide"));
  var dotsWrap = root.querySelector(".carousel-dots");
  var prevBtn = root.querySelector("[data-prev]");
  var nextBtn = root.querySelector("[data-next]");
  var playBtn = root.querySelector("[data-toggle]");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var index = 0;
  var timer = null;
  var paused = reduce;

  if (slides.length < 2) {
    var controls = root.querySelector(".carousel-controls");
    if (controls) controls.hidden = true;
    return;
  }

  var dots = slides.map(function (slide, n) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "carousel-dot";
    b.setAttribute("aria-label", "Show slide " + (n + 1) + " of " + slides.length);
    b.addEventListener("click", function () { show(n); restart(); });
    dotsWrap.appendChild(b);
    return b;
  });

  function show(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach(function (slide, k) {
      var on = k === index;
      slide.classList.toggle("is-active", on);
      slide.setAttribute("aria-hidden", on ? "false" : "true");
      var focusables = slide.querySelectorAll("a, button");
      for (var f = 0; f < focusables.length; f++) focusables[f].tabIndex = on ? 0 : -1;
    });
    dots.forEach(function (d, k) { d.setAttribute("aria-current", k === index ? "true" : "false"); });
  }

  function start() {
    if (paused || timer) return;
    timer = window.setInterval(function () { show(index + 1); }, DELAY);
  }
  function stop() {
    if (timer) { window.clearInterval(timer); timer = null; }
  }
  function restart() { stop(); start(); }

  function setPaused(p) {
    paused = p;
    playBtn.classList.toggle("is-paused", p);
    playBtn.setAttribute("aria-label", p ? "Play slideshow" : "Pause slideshow");
    if (p) stop(); else start();
  }

  prevBtn.addEventListener("click", function () { show(index - 1); restart(); });
  nextBtn.addEventListener("click", function () { show(index + 1); restart(); });
  playBtn.addEventListener("click", function () { setPaused(!paused); });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);
  root.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { show(index - 1); restart(); }
    if (e.key === "ArrowRight") { show(index + 1); restart(); }
  });

  var x0 = null;
  root.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { show(index + (dx < 0 ? 1 : -1)); restart(); }
    x0 = null;
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop(); else start();
  });

  show(0);
  setPaused(paused);
})();
