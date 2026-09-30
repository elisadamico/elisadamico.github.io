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

<img class="logo-mark" src="/assets/img/mend-logo.png" alt="MEND, Mediation Event and Negotiators Database" width="1223" height="949">

<p class="lede">The Mediation Event and Negotiators Database (MEND) tracks mediation and mediation-related events involving external third parties in major armed conflicts, whether or not those events end in a formal peace agreement.</p>

Each record is a single event, with details on where it took place and which third parties, local actors, and individuals were involved. The data covers mediation within formal peace initiatives as well as efforts running in support of them or in parallel. This makes it possible to see where, when, and how actors engage in mediation, to map the networks between international and local actors, and to study efforts that failed or spoiled a process but still shaped how a conflict was managed.

I am the Data Manager for MEND. I run the semi-automated pipeline that detects candidate mediation events in news sources and prepares them for coding, and I maintain the database behind it.

<p class="btn-row"><a class="btn" href="{{ explore }}">Explore the data</a> <a class="btn btn-outline" href="{{ dataverse }}">Download from Harvard Dataverse</a></p>

---

## Data and Outputs

- Peter, M., Badanjak, S., **D’Amico, E.**, & Houghton, K. (2025). [Mediation Event and Negotiators Database (MEND)]({{ dataverse }}). Harvard Dataverse.
- Peter, M., **D’Amico, E.**, Houghton, K., & Badanjak, S. (2026). [Mediation in 2025: Navigating overlapping conflict systems](https://peacerep.org/publication/mediation-in-2025-navigating-overlapping-conflict-systems/). *MEND Data Series*, PeaceRep.
- **D’Amico, E.** (2024). [Semi-automated coding for conflict mediation research: Database development](https://peacerep.org/publication/semi-automated-coding-for-conflict-mediation-research-database-development/). *Peace Analytics Series*, PeaceRep.

---

## Core Team

<ul class="team">
{% for person in team %}<li><strong>{{ person.name }}</strong><br>{{ person.role }}</li>
{% endfor %}</ul>

---

MEND is supported by the Peace and Conflict Resolution Evidence Platform (PeaceRep), funded by UK International Development from the UK government. The views expressed are those of the authors and do not necessarily reflect the UK government’s official policies.

</div></div>
