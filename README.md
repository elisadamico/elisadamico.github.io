# elisadamico.net

Source for my personal website. Pages are written in Markdown, built with
[Eleventy](https://www.11ty.dev/), and published by GitHub Pages.

## Editing

| To change | Edit |
| --- | --- |
| Menu, footer links, email, site description | `src/_data/site.json` |
| Header and footer layout (shared by every page) | `src/_includes/header.njk`, `src/_includes/footer.njk` |
| Colors, fonts, spacing | `src/assets/css/style.css` (variables at the top) |
| Home, About, Research, Teaching, Data Science | `src/index.md`, `src/aboutme.md`, `src/research.md`, `src/teaching.md`, `src/datascience.md` |
| Blog post list | the `posts` list at the top of `src/blog.njk` |
| WICIP and CADRE pages | `src/wicip.md`, `src/cadre.md` |
| Images, syllabi | `src/assets/img/`, `src/assets/files/` |

To add a page, create `src/newpage.md` with the same three-line header as the
other pages, then add it to the `nav` list in `src/_data/site.json`. An entry
with `children` becomes a dropdown.

## Preview locally

```
npm install     # first time only
npm start       # then open http://localhost:8080
```

## Publishing

Every push to `main` rebuilds and publishes the site (see
`.github/workflows/deploy.yml`).

## CV

The CV is served at `/DAmico_CV.pdf`. Once a day the workflow checks the CV
source on Overleaf. If `CV.tex` has changed, it recompiles the PDF, saves it to
`src/assets/files/DAmico_CV.pdf`, and republishes the site. To update
immediately, run the workflow by hand from the Actions tab.

This needs two repository secrets, `OVERLEAF_PROJECT_ID` and `OVERLEAF_TOKEN`
(an Overleaf Git authentication token). Without them the site keeps the PDF
already in the repository. The Overleaf source itself is never committed here.
