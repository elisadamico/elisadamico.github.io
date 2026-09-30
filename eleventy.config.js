import fs from "node:fs";
import path from "node:path";

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
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
