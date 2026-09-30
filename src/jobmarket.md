---
layout: base.njk
title: Job Market Resources
heading: Job Market Resources
description: Notion templates for managing academic job applications and a research pipeline.
# Fill in url and image for each template. A card with no url shows "Link coming soon".
wicip_notion: "https://robust-force-efe.notion.site/Women-in-Comparative-International-Politics-30a4de742e9e8015ae15f6d7b0725ad3?pvs=74"
materials_overleaf: "https://www.overleaf.com/read/cddqtqcrhmfh#26832e"
templates:
  - name: Job Applications
    about: A Notion database for tracking every application in one place, with position type, field, deadline, location, posting link, and notes, plus whether you interviewed and the outcome. Separate views show academic jobs, non-academic jobs, and interviews.
    url: "https://robust-force-efe.notion.site/30a4de742e9e8165bf1cce0a0d05e5c7?v=30a4de742e9e8182923c000cfc2e963a&pvs=74"
    image: /assets/img/jobmarket-applications.jpg
  - name: Project & Paper Management
    about: A Notion page for keeping a research pipeline in view, with a project and paper status board, project categories, and upcoming presentations.
    url: "https://robust-force-efe.notion.site/Project-Paper-Management-Template-1814de742e9e8085b47dda48e87bb003?pvs=74"
    image: /assets/img/jobmarket-projects.jpg
---

<div class="section"><div class="container">
<div class="prose" style="margin-bottom:2rem">
<p class="lede">Notion templates I built to manage my own job search and research pipeline.</p>
<p>Open a template and use the Duplicate button in the top-right corner to copy it into your own Notion workspace.</p>
</div>
<div class="template-list">
{% for template in templates %}<article class="template-card">
{% if template.image %}<a class="template-shot" href="{{ template.image }}"><img src="{{ template.image }}" alt="Screenshot of my {{ template.name }} setup in Notion, with some details blurred" loading="lazy"></a>{% endif %}
<div class="post-body"><p class="post-tag">Notion template</p><h2>{% if template.url %}<a href="{{ template.url }}">{{ template.name }}</a>{% else %}{{ template.name }}{% endif %}</h2><p>{{ template.about }}</p>{% if template.url %}<p><a class="btn" href="{{ template.url }}">Open the template</a></p>{% else %}<p class="source">Link coming soon</p>{% endif %}</div>
</article>
{% endfor %}</div>

<div class="prose" style="margin-top:2.5rem">
<h2 class="no-caps">My Application Materials</h2>
<p>The documents I used on the academic job market, in LaTeX on Overleaf: my CV, a general cover letter, teaching portfolio (with service and diversity statements and syllabi), research statement, a research proposal, book prospectus, and the case I made for a salary adjustment, with the figures removed. Open the project to read them, or use Menu, then Copy Project, to adapt them for your own applications.</p>
<p><a class="btn" href="{{ materials_overleaf }}">Open the materials on Overleaf</a></p>
</div>

<div class="prose" style="margin-top:2.5rem">
<h2 class="no-caps">Session Recordings and Slides</h2>
<p>The <a href="/wicip/">WICIP Network</a> holds monthly sessions on professional development, including navigating the job market, publishing strategy, turning a dissertation into articles, co-authoring, international academic life, and building a research agenda. Recordings and slides from past sessions are collected on the WICIP Notion page.</p>
<p><a class="btn" href="{{ wicip_notion }}">Open the WICIP Notion page</a></p>
</div>
</div></div>
