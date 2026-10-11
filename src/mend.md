---
layout: base.njk
title: MEND
heading: Mediation Event and Negotiators Database
description: The Mediation Event and Negotiators Database (MEND) tracks mediation and mediation-related events involving third parties in major armed conflicts.
explore: https://peacehub.st-andrews.ac.uk/
dataverse: https://doi.org/10.7910/DVN/PYRHS6
team:
  - name: Mateja Peter
    role: Research Lead
  - name: Sanja Badanjak
    role: Research Co-Lead
  - name: Elisa D’Amico
    role: Data Manager
  - name: Kasia Houghton
    role: Postdoc Researcher
  - name: Niamh Henry
    role: Research Fellow
  - name: Tomas Vancisin
    role: Research Associate, Web and Visualization Development
---

<div class="section"><div class="container prose">

<img class="logo-mark on-light" src="/assets/img/mend-logo-2026.png" alt="MEND, Mediation Event and Negotiators Database" width="1223" height="949">

<p class="lede">The Mediation Event and Negotiators Database (MEND) tracks mediation and mediation-related events involving external third parties in major armed conflicts, whether or not those events end in a formal peace agreement.</p>

Each record is a single event, with details on where it took place and which third parties, local actors, and individuals were involved. The data covers mediation within formal peace initiatives as well as efforts running in support of them or in parallel. This makes it possible to see where, when, and how actors engage in mediation, to map the networks between international and local actors, and to study efforts that failed or spoiled a process but still shaped how a conflict was managed.

I am the Data Manager for MEND. I run the semi-automated pipeline that detects candidate mediation events in news sources and prepares them for coding, and I maintain the database behind it.

<p class="btn-row"><a class="btn" href="{{ explore }}">Explore the data</a> <a class="btn btn-outline" href="{{ dataverse }}">Download from Harvard Dataverse</a></p>

---

## Data and Outputs

- Peter, M., Badanjak, S., **D’Amico, E.**, & Houghton, K. (2025). [Mediation Event and Negotiators Database (MEND)]({{ dataverse }}). Harvard Dataverse.
- Peter, M., **D’Amico, E.**, Houghton, K., & Badanjak, S. (2026). [Mediation in 2025: Navigating overlapping conflict systems](https://peacerep.org/publication/mediation-in-2025-navigating-overlapping-conflict-systems/). *MEND Data Series*, PeaceRep.
- Peter, M., **D’Amico, E.**, Houghton, K., & Badanjak, S. (2026). [Current Trends in Mediation: MEND Key Findings](https://doi.org/10.7488/era/7212). *Policy Brief*, PeaceRep.
- Peter, M. (2025). [Mediation in 2024: First Insights from the MEND Database](https://doi.org/10.7488/era/6194). *MEND Data Series*, PeaceRep. First MEND release report, prepared with the MEND core research team.
- **D’Amico, E.** (2025). [Conflict in a Warming World: How Climate Shocks Impact Rebel Demands and Peace Agreement Outcomes](https://doi.org/10.7488/era/peacerep-2025-001). *PeaceRep Report: Climate & Natural Resources*, PeaceRep.
- **D’Amico, E.** (2024). [Semi-automated coding for conflict mediation research: Database development](https://peacerep.org/publication/semi-automated-coding-for-conflict-mediation-research-database-development/). *Peace Analytics Series*, PeaceRep.

### Related Research on Mediation

- Houghton, K., & **D’Amico, E.** (2026). [Financial Dependencies and Conflict Resolution: The Role of Militarized Mediators in Modern Insurgencies](https://doi.org/10.1080/13698249.2026.2718659). *Civil Wars*.
- **D’Amico, E.**, Sosa, S., & Melin, M. (2025). [Private Goods for Peace: Economic Provisions of Peace Agreements and the Durability of Peace](https://doi.org/10.1177/00223433251345382). *Journal of Peace Research*, 62(6), 2001–2019.
- **D’Amico, E.** (2025). [Bridging the Distance: New Insights on Geography in Conflict Mediation](https://tvancisin.github.io/elisa_damico/). Interactive data story based on *The Geography of Conflict Mediation*. Web and visualizations by Tomas Vancisin.

<p>I presented the poster for <em>The Geography of Conflict Mediation</em> at PolMeth Europe 2025. LSE Methodology recorded the walkthrough below.</p>

<div class="embed-post">
<blockquote class="twitter-tweet" data-dnt="true" data-media-max-width="560"><p lang="en" dir="ltr">What do you know about the geography of conflict mediation? <a href="https://x.com/ElisaADAmico">@ElisaADAmico</a> from University of St Andrews shares her research poster from PolMeth Europe 2025 <a href="https://t.co/RwSFBkXe2W">pic.twitter.com/RwSFBkXe2W</a></p>&mdash; LSE Methodology (@LSEMethodology) <a href="https://x.com/LSEMethodology/status/1914643173000753332">April 22, 2025</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

---

## Core Team

<ul class="team">
{% for person in team %}<li><strong>{{ person.name }}</strong><br>{{ person.role }}</li>
{% endfor %}</ul>

---

MEND is supported by the Peace and Conflict Resolution Evidence Platform (PeaceRep), funded by UK International Development from the UK government. The views expressed are those of the authors and do not necessarily reflect the UK government’s official policies.

</div></div>
