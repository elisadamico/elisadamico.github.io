---
layout: base.njk
title: Job Market Resources
heading: Job Market Resources
description: Notion templates for managing academic job applications and a research pipeline.
# Fill in url and image for each template. A card with no url shows "Link coming soon".
templates:
  - name: Job Applications
    about: A Notion database for tracking every application in one place, with position type, field, deadline, location, posting link, and notes, plus whether you interviewed and the outcome. Separate views show academic jobs, non-academic jobs, and interviews.
    url: "https://robust-force-efe.notion.site/30a4de742e9e8165bf1cce0a0d05e5c7?v=30a4de742e9e8182923c000cfc2e963a&pvs=74"
    image:
  - name: Project & Paper Management
    about: A Notion page for keeping a research pipeline in view, with a project and paper status board, project categories, and upcoming presentations.
    url: "https://robust-force-efe.notion.site/Project-Paper-Management-Template-1814de742e9e8085b47dda48e87bb003?pvs=74"
    image:
---

<div class="section"><div class="container">
<div class="prose" style="margin-bottom:2rem">
<p class="lede">Notion templates I built to manage my own job search and research pipeline.</p>
<p>Open a template and use the Duplicate button in the top-right corner to copy it into your own Notion workspace.</p>
</div>
<div class="post-grid">
{% for template in templates %}<article class="post-card">
{% if template.image %}<a class="post-thumb" href="{{ template.url }}" tabindex="-1" aria-hidden="true"><img src="{{ template.image }}" alt="Screenshot of the {{ template.name }} template in Notion" loading="lazy"></a>{% endif %}
<div class="post-body"><p class="post-tag">Notion template</p><h2>{% if template.url %}<a href="{{ template.url }}">{{ template.name }}</a>{% else %}{{ template.name }}{% endif %}</h2><p class="source">{{ template.about }}</p><p class="source">{% if template.url %}<a href="{{ template.url }}">Open the template</a>{% else %}Link coming soon{% endif %}</p></div>
</article>
{% endfor %}</div>
</div></div>
