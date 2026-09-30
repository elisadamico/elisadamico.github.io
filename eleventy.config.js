import fs from "node:fs";
import path from "node:path";
import markdownIt from "markdown-it";

const md = markdownIt({ html: true });

const CV_SOURCE = "src/assets/files/DAmico_CV.pdf";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  // The CV lives at a short, stable address (/DAmico_CV.pdf).
  eleventyConfig.addPassthroughCopy({ [CV_SOURCE]: "DAmico_CV.pdf" });

  // The old HubSpot address is kept alive so links already out in the world
  // (other sites, old emails, search results) still reach the current CV.
  eleventyConfig.on("eleventy.after", ({ dir }) => {
    const legacy = path.join(dir.output, "hubfs", "DAmico_CV-1.pdf");
    fs.mkdirSync(path.dirname(legacy), { recursive: true });
    fs.copyFileSync(CV_SOURCE, legacy);
  });

  eleventyConfig.addFilter("containsUrl", (items, url) => items.some((item) => item.url === url));
  // {% yearlist %} turns lines written as "2026 | text" into a tidy list with
  // the year in a left-hand column. A line with no "|" gets no year.
  eleventyConfig.addPairedShortcode("yearlist", (content) => {
    const rows = content
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const bar = line.indexOf("|");
        return bar === -1
          ? { label: "", text: line }
          : { label: line.slice(0, bar).trim(), text: line.slice(bar + 1).trim() };
      });
    const plain = rows.every((row) => !row.label);
    const items = rows.map(
      (row) => `<li><span class="yl-label">${row.label}</span><span class="yl-text">${md.renderInline(row.text)}</span></li>`
    );
    return `<ul class="yearlist${plain ? " no-label" : ""}">${items.join("")}</ul>`;
  });

  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
