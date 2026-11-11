// WICIP library: search box and topic filter for session cards and the advice index.
document.addEventListener("DOMContentLoaded", function () {
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
