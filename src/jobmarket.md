---
layout: base.njk
title: Job Market Resources
heading: Job Market Resources
description: Notion templates for managing academic job applications and a research pipeline.
# Fill in url and image for each template. A card with no url shows "Link coming soon".
templates:
  - name: Job Applications Tracker
    about: A Notion template for tracking academic job applications.
    url:
    image:
  - name: Project and Paper Management
    about: A Notion template for managing research projects and papers.
    url:
    image:
---

<div class="section"><div class="container">
<div class="prose" style="margin-bottom:2rem">
<p class="lede">Notion templates I built to manage my own job search and research pipeline.</p>
</div>
<div class="post-grid">
{% for template in templates %}<article class="post-card">
{% if template.image %}<a class="post-thumb" href="{{ template.url }}" tabindex="-1" aria-hidden="true"><img src="{{ template.image }}" alt="Screenshot of the {{ template.name }} template in Notion" loading="lazy"></a>{% endif %}
<div class="post-body"><p class="post-tag">Notion template</p><h2>{% if template.url %}<a href="{{ template.url }}">{{ template.name }}</a>{% else %}{{ template.name }}{% endif %}</h2><p class="source">{{ template.about }}</p><p class="source">{% if template.url %}<a href="{{ template.url }}">Open the template</a>{% else %}Link coming soon{% endif %}</p></div>
</article>
{% endfor %}</div>
</div></div>
