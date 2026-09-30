---
layout: base.njk
title: CADRE
heading: Climate And Displacement Research Ensemble
description: CADRE is an interdisciplinary working group at University College Dublin developing a research agenda on the measurement of climate displacement.
interest_form: https://docs.google.com/forms/d/e/1FAIpQLScf14t9tVKI3dm04Q_Eutkou36jZDLPw8N3_lpDtUOhiY7PxQ/viewform
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

<img class="banner" src="/assets/img/cadre-logo.png" alt="CADRE, Climate And Displacement Research Ensemble" width="1560" height="480">

<p class="lede">The Climate And Displacement Research Ensemble (CADRE) is an interdisciplinary working group at University College Dublin. Estimates of climate displacement vary a lot, because there is not much validation. CADRE works the other way round and validates first, in EU countries where the data exists.</p>

CADRE is a UCD Earth Institute Strategic Priority for 2026–27. Ten researchers across five UCD Schools bring together political science and computational social science, computer science, statistics, public health, and humanitarian action, with faculty, fellows, and postgraduate students at MSc and PhD level. I lead the group, which is scoping a research agenda on the measurement of climate displacement and laying the groundwork for a larger externally funded program.

<p><a class="btn" href="{{ interest_form }}">Register your interest</a></p>

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

---

## Get Involved

The group wants to grow, and anyone curious is welcome, whatever their field. Meetings are on the second Monday of each month at 11:30, with lunch, in Room E4.46, Science East, UCD Belfield.

<p class="btn-row"><a class="btn" href="{{ interest_form }}">Register your interest</a> <a class="btn btn-outline" href="mailto:{{ site.email }}?subject=CADRE">Email me about CADRE</a></p>

</div></div>
