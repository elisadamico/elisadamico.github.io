// Header menu: the mobile "Menu" button and the Groups dropdown.
(function () {
  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  var menuToggle = nav.querySelector(".nav-toggle");
  var subToggles = nav.querySelectorAll(".sub-toggle");

  function closeSubs(except) {
    subToggles.forEach(function (btn) {
      if (btn !== except) btn.setAttribute("aria-expanded", "false");
    });
  }

  menuToggle.addEventListener("click", function () {
    var open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  subToggles.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      closeSubs(btn);
      btn.setAttribute("aria-expanded", String(!open));
    });
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) closeSubs(null);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeSubs(null);
  });
})();

// Recent news row on the home page: arrow buttons, and a fade on whichever side has more to see.
document.querySelectorAll("[data-news]").forEach(function (wrap) {
  var strip = wrap.querySelector(".news-strip");
  var buttons = wrap.querySelectorAll(".news-btn");
  var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function step() {
    var card = strip.querySelector(".news-card:not([hidden])");
    return card ? card.getBoundingClientRect().width + 16 : strip.clientWidth;
  }
  function update() {
    var left = strip.scrollLeft > 4;
    var right = strip.scrollLeft + strip.clientWidth < strip.scrollWidth - 4;
    wrap.classList.toggle("more-left", left);
    wrap.classList.toggle("more-right", right);
    wrap.classList.toggle("fits", !left && !right);
    buttons[0].disabled = !left;
    buttons[1].disabled = !right;
  }
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      strip.scrollBy({ left: Number(b.dataset.dir) * step(), behavior: smooth ? "smooth" : "auto" });
    });
  });
  // Type filter: show only one kind of news, or all of it.
  var filters = wrap.querySelectorAll(".news-filter");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      filters.forEach(function (x) { x.setAttribute("aria-pressed", x === f ? "true" : "false"); });
      var group = f.dataset.group;
      strip.querySelectorAll(".news-card").forEach(function (card) {
        card.hidden = group !== "all" && card.dataset.group !== group;
      });
      strip.scrollLeft = 0;
      update();
    });
  });
  strip.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
});
