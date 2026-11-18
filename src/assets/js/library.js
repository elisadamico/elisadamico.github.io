// WICIP library: search box and topic filter for session cards and the advice index.
document.addEventListener("DOMContentLoaded", function () {
  // Inline search over WICIP takeaways (WICIP and resources pages): show up to 8 matches.
  document.querySelectorAll(".wicip-search").forEach(function (box) {
    var input = box.querySelector(".wicip-q"), none = box.querySelector(".wicip-none");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase(), n = 0;
      box.querySelectorAll(".wicip-results li").forEach(function (li) {
        var ok = q.length > 1 && n < 8 && li.dataset.text.toLowerCase().indexOf(q) > -1;
        li.hidden = !ok; if (ok) n++;
      });
      none.hidden = !(q.length > 1 && n === 0);
    });
  });
  if (!document.querySelector(".lib-tools")) return;
  var search = document.querySelector(".lib-search");
  var empty = document.querySelector(".lib-empty");
  var buttons = document.querySelectorAll(".lib-tools .news-filter");
  var tag = "all";
  function apply() {
    var q = (search ? search.value : "").trim().toLowerCase();
    var shown = 0;
    document.querySelectorAll(".lib-card").forEach(function (c) {
      var ok = (tag === "all" || c.dataset.tags.split("|").indexOf(tag) > -1) &&
        (!q || c.dataset.text.toLowerCase().indexOf(q) > -1);
      c.hidden = !ok; if (ok) shown++;
    });
    document.querySelectorAll(".advice-group").forEach(function (g) {
      var any = 0;
      g.querySelectorAll("li").forEach(function (li) {
        var ok = !q || li.dataset.text.toLowerCase().indexOf(q) > -1;
        li.hidden = !ok; if (ok) any++;
      });
      g.hidden = !any; shown += any;
    });
    if (empty) empty.hidden = shown > 0;
  }
  if (search) search.addEventListener("input", apply);
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      tag = b.dataset.tag;
      buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      apply();
    });
  });
});
