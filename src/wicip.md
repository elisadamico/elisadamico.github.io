---
layout: base.njk
title: WICIP Network
heading: Women in Comparative & International Politics
description: The Women in Comparative & International Politics (WICIP) Network is a community for mentorship and collaboration among women working on comparative and international politics.
google_group: https://groups.google.com/g/wicip
notion: "https://robust-force-efe.notion.site/Women-in-Comparative-International-Politics-30a4de742e9e8015ae15f6d7b0725ad3?pvs=74"
# Meeting list. Set done to true once a session has taken place.
meetings:
  - date: February 18, 2026
    theme: Building Your Online Academic Presence
    done: true
  - date: April 15, 2026
    theme: Publishing Strategy
    detail: Top-tier and field-specific journals, and publishing across traditions
    done: true
  - date: May 20, 2026
    theme: Navigating the Job Market
    detail: Academic and non-academic career paths
    done: true
  - date: June 17, 2026
    theme: From Dissertation to Publication
    detail: How to turn your dissertation into journal articles
    done: true
  - date: July 22, 2026
    theme: Co-authoring & Collaboration
    detail: Building interdisciplinary collaborations and co-authoring strategies
    done: true
  - date: August 19, 2026
    theme: International Academic Life
    detail: Cultural differences, visas, and immigration for international academics
    done: true
  - date: September 23, 2026
    theme: Creating a Research Agenda
    detail: Building and maintaining a coherent research program
    done: true
  - date: October 21, 2026
    theme: Finding & Working with Mentors
    detail: Navigating mentorship at different career stages
  - date: November 18, 2026
    theme: Revise & Resubmit
    detail: Strategies for handling R&Rs effectively
  - date: December 16, 2026
    theme: Finding International Funding
    detail: Grants and funding opportunities across countries
---

<div class="section"><div class="container prose">

<img class="banner" src="/assets/img/wicip-logo.png" alt="WICIP Network, Women in Comparative & International Politics" width="1600" height="400">

<p class="lede">The Women in Comparative & International Politics (WICIP) Network is a community of women working on comparative and international politics, at every career stage and in both academic and non-academic roles.</p>

I started the network to give members a shared place to find mentorship and collaborators, since those opportunities are spread unevenly across institutions. We meet online once a month. Each session opens with a short talk or panel on a professional development theme, followed by Q&A and breakout rooms where members introduce their work and look for people to work with.

Members also share an international job and funding board and a co-authorship sheet, where they can register interest in co-authorships, research assistantships, and grant collaboration. Recordings and slides from past sessions are on the [WICIP Notion page]({{ notion }}).

To join, sign up through the WICIP Google Group, which adds you to the network's mailing list.

<p class="btn-row"><a class="btn" href="{{ google_group }}">Join the WICIP Google Group</a> <a class="btn btn-outline" href="{{ notion }}">Session recordings and slides</a> <a class="btn btn-outline" href="mailto:{{ site.email }}?subject=WICIP%20Network">Email me with questions</a></p>

---

## 2026 Meetings

All meetings are held on Zoom at 3:00 PM UTC.

<ul class="schedule">
{% for meeting in meetings %}<li{% if meeting.done %} class="done"{% endif %}><span class="when">{{ meeting.date }}</span><span><strong>{{ meeting.theme }}</strong>{% if meeting.detail %}<br>{{ meeting.detail }}{% endif %}</span></li>
{% endfor %}</ul>

</div></div>
