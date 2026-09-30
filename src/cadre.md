---
layout: base.njk
title: CADRE
heading: Climate And Displacement Research Ensemble
description: CADRE is an interdisciplinary working group at University College Dublin developing a research agenda on the measurement of climate displacement.
strands:
  - title: Computational social science and political science
    detail: Scoping how climate displacement is currently measured, mapping existing approaches, definitions, and gaps.
  - title: Data and measurement feasibility
    detail: Assessing the data ecosystem (availability, quality, access, and interoperability of candidate data sources) that any future measurement agenda would require.
  - title: Statistical methodology and measurement modeling
    detail: Scoping approaches to estimation, uncertainty quantification, and model-based and spatial methods for displacement measurement.
  - title: Public health
    detail: Scoping the health dimensions of climate displacement and how measurement frameworks can capture health outcomes and population vulnerabilities.
  - title: Humanitarian action and climate migration
    detail: Scoping the humanitarian and policy applications of displacement measurement and identifying its end users in agencies, NGOs, and government.
---

<div class="section"><div class="container prose">

<p class="lede">The Climate And Displacement Research Ensemble (CADRE) is an interdisciplinary working group at University College Dublin. The group is scoping and developing a research agenda on the measurement of climate displacement, laying the groundwork for a larger externally funded program.</p>

The team spans five UCD Schools and brings together political science and computational social science, computer science, statistics, public health, and humanitarian action. It combines faculty, fellows, and postgraduate students at MSc and PhD level. I lead the group, which is supported by the UCD Earth Institute.

---

## Working Group Strands

<ol class="strands">
{% for strand in strands %}<li><strong>{{ strand.title }}</strong><br>{{ strand.detail }}</li>
{% endfor %}</ol>

---

## Planned Outputs

The working group meets monthly from October 2026 to September 2027. Over that period the group plans to produce the following.

- A technical scoping report on data availability and measurement feasibility
- A position paper synthesizing the five strands
- A student outreach event
- A final stakeholder workshop

<p><a class="btn" href="mailto:{{ site.email }}?subject=CADRE">Get in touch about CADRE</a></p>

</div></div>
