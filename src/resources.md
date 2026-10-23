---
layout: base.njk
title: Student Resources
heading: Student Resources
description: Code templates, data guides, and tools for students working with quantitative and spatial data.
templates:
  - name: Three-Variable Chart Builder
    kind: Interactive tool
    about: Explore disasters, food prices, and conflict from my research. Map up to three variables to a bar, line, or scatter chart, or to a world map, and switch between the descriptive data and the papers’ estimated results with 95% intervals.
    url: https://www.elisadamico.net/graphs-three-variables/
    link_label: Open the chart builder
    image: /assets/img/chart-builder.jpg
    extra_links:
      - label: Slides
        url: https://www.elisadamico.net/graphs-three-variables/lecture_slides.pdf
      - label: GitHub
        url: https://github.com/elisadamico/graphs-three-variables
  - name: Difference-in-Differences Project Template
    kind: R template
    about: Sample code and data from my master’s course at the University of Basel, where students built difference-in-differences analyses around their own research questions. A good starting point for a first DID project.
    url: https://github.com/elisadamico/MA-Student-DID-Project-Sample
    link_label: View on GitHub
  - name: OLS Regression with Geographic Data
    kind: Jupyter notebook
    about: A step-by-step OLS template in Python using World Bank agricultural land data and EM-DAT disaster data, with an exported PDF report to follow along.
    url: https://github.com/elisadamico/Geography_OLS_Regression
    link_label: View on GitHub
guides:
  - name: Climate Data Central
    kind: Data resource
    about: A repository to centralize and preserve climate data resources.
    url: https://github.com/elisadamico/climate-data-central
  - name: Nighttime Lights to Country-Year Data
    kind: QGIS and Python guide
    about: Extracting nighttime lights rasters, pulling statistics by country border in QGIS, and exporting country-level data.
    url: https://github.com/elisadamico/Nighttime-Lights-Raster-Data-to-Country-Year-CSV---QGIS-Python
  - name: Shapefile and CSV Merging
    kind: QGIS, Python, and Stata guide
    about: Joining a shapefile to an attribute table by state and county, then cleaning the merged data in Stata.
    url: https://github.com/elisadamico/Location-Data-Merging-Shapefile-and-CSV-Joining-QGIS-Stata-Python---RAINE-and-NRI-Database
  - name: Country Name Standardization
    kind: Stata and Excel tools
    about: Merging datasets on country names despite differences in spelling, abbreviations, codes, and languages.
    url: https://github.com/elisadamico/Country-Name-Standardization-Stata-and-Excel
  - name: Updated GDELT Data Extraction
    kind: SQL guide
    about: A working sample of the query format the current GDELT SQL interface requires.
    url: https://github.com/elisadamico/Updated-GDELT-Data-Extraction
---

<div class="section"><div class="container narrow prose">

These are materials I have put together for my own students and research assistants. Feel free to use and adapt them. If you use one in a course, I’d be glad to hear about it.

</div></div>

<div class="page-title"><h2>Code Templates</h2></div>

<div class="section"><div class="container">
<div class="link-cards">
{% for t in templates %}{% if t.extra_links %}<div class="link-card"><p class="post-tag">{{ t.kind }}</p><h3><a href="{{ t.url }}">{{ t.name }}</a></h3>{% if t.image %}<a href="{{ t.url }}" tabindex="-1" aria-hidden="true"><img class="card-shot" src="{{ t.image }}" alt="" loading="lazy"></a>{% endif %}<p>{{ t.about }}</p><p class="more"><a href="{{ t.url }}">{{ t.link_label }}</a>{% for x in t.extra_links %} · <a href="{{ x.url }}">{{ x.label }}</a>{% endfor %}</p></div>{% else %}<a class="link-card" href="{{ t.url }}"><p class="post-tag">{{ t.kind }}</p><h3>{{ t.name }}</h3><p>{{ t.about }}</p><span class="more">{{ t.link_label }}</span></a>{% endif %}
{% endfor %}</div>
</div></div>

<div class="page-title"><h2>Data Guides</h2></div>

<div class="section"><div class="container">
<div class="link-cards">
{% for t in guides %}<a class="link-card" href="{{ t.url }}"><p class="post-tag">{{ t.kind }}</p><h3>{{ t.name }}</h3><p>{{ t.about }}</p><span class="more">View on GitHub</span></a>
{% endfor %}</div>
</div></div>

<div class="section"><div class="container narrow prose center">

Getting ready for the academic job market? See my [Job Market Resources](/jobmarket/) for Notion templates to track applications and manage a research pipeline.

</div></div>
