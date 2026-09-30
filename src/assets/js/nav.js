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
