---
layout: base.njk
title: Teaching
heading: Teaching Experience
syllabi:
  - level: Graduate
    courses:
      - title: "POL40950: Introduction to Statistics"
        where: University College Dublin, 2026
        file: /assets/files/syllabus-pol40950.pdf
      - title: "From Structural Violence to ‘Resource Wars’: The Climate Change, Conflict, and Displacement Nexus"
        where: SOAS University of London, International Summer Course on (Im)mobilities, 2025
        file: /assets/files/syllabus-soas-iscm.pdf
      - title: "Climate Change, Conflict, and Economic Adaptation: Perspectives on Migration and Sustainable Development"
        where: Universität Basel, 2024
        file: /assets/files/syllabus-basel-climate-conflict.pdf
  - level: Undergraduate
    courses:
      - title: "Political Science 102: International Relations in an Age of Globalization"
        where: Loyola University Chicago, 2021
        file: /assets/files/syllabus-plsc-102.pdf
      - title: "Climate Change and Human Migration: Impacts, Challenges, and Opportunities"
        where: Sample syllabus, upper-level course
        file: /assets/files/syllabus-climate-migration.pdf
      - title: "Computational Social Science: Exploring Big Data Insights and Applications"
        where: Sample syllabus, upper-level course
        file: /assets/files/syllabus-computational-social-science.pdf
---

<div class="section"><div class="container split wide-left">
<div>

<div class="entry">

### 2025–2027 – University College Dublin, School of Politics and International Relations

**Lecturer (Instructor of Record)** (2026)<br>
*POL40950: Introduction to Statistics* (graduate level)

**Project Supervisor**, Connected_Politics, MSc Politics and Data Science<br>
2026–2027: *“Who Gets to Leave? Displacement after the Valencia Floods”*<br>
2025–2026: *“Climate Law Framing and Legislative Success in Ireland”*

**Module Supervisor** (2027)<br>
*Politics of Climate Change: Political Theory, Political Ecology, and Praxis* (Ciaran O’Brien)

</div>
<div class="entry">

### 2025–2026 – University of St Andrews, School of International Relations

**Computational Team Coordinator**<br>
*[Vertically Integrated Project (VIP) Module](https://www.st-andrews.ac.uk/education/vip/projects/peacehub/): Global Fragmentation and Conflict Management*<br>
Responsible for leading student teams on computational analysis tasks and guiding data-driven research on fragmentation and mediation in conflict zones.

</div>
<div class="entry">

### 2025 – SOAS University of London, International Summer Course on (Im)mobilities (ISCM)

**Seminar Convenor**<br>
*Graduate Seminar: From Structural Violence to ‘Resource Wars’ – The Climate Change, Conflict, and Displacement Nexus*<br>
Designed and led an interdisciplinary seminar exploring how climate change influences contemporary resource conflicts and mobility patterns.

</div>
<div class="entry">

### 2024–2025 – Universität Basel, Institute for European Global Studies

**Lecturer (Independent Study with Nives Häfliger)** (2025)<br>
*Climate Change and Conflict in the DRC*

**Lecturer (Instructor of Record)** (2024)<br>
*Graduate Block Seminar: Climate Change, Conflict, and Economic Adaptation – Perspectives on Migration and Sustainable Development*<br>
Delivered an intensive, interdisciplinary course that bridged climate science, political economy, and international development, including applied policy analysis and case studies.

**Lecturer (Independent Study with Melanie Dippel)** (2024)<br>
*Conflict Mediation & Negotiation: Data Training*

</div>
<div class="entry">

### 2018–2023 – Loyola University Chicago, Department of Political Science

**Lecturer (Instructor of Record)**<br>
*Political Science 102: International Relations in an Age of Globalization* (40 students)<br>
Delivered lectures, created syllabi and assessments, and facilitated critical discussions on global institutions and diplomacy.

**Guest Lecturer**<br>
Courses included: *Democracy and Refugee Rights*, *Foreign Policy*, and *IR Theory in Asia*.

**Teaching Assistant** (2022)<br>
*[Political Science 300D: Faculty-Led Program in Colombia](https://abroad.luc.edu/index.cfm?FuseAction=Programs.ViewProgramAngular&id=11695)*<br>
Supported curriculum delivery and student learning in a short-term study abroad course focused on post-conflict peacebuilding and transitional justice.

</div>
<div class="entry">

### 2017–2018 – Iowa State University, Department of Political Science

**Teaching Assistant**<br>
Courses: *Ethics and Politics*, *Comparative Government*, *Empirical Political Science Research*, *Political Behavior*, and *American Institutions: Congress*<br>
Responsibilities included leading lab sections, assisting with R/statistics assignments, grading, proctoring, and delivering guest lectures.

</div>

</div>
<div class="prose">

<img class="bw" src="/assets/img/teaching.jpeg" alt="Elisa D’Amico teaching in a seminar room" width="750" height="871">

<h2 class="side-heading">Course Syllabi</h2>
<p class="side-note">Full syllabi for courses I have taught or designed, as PDF downloads.</p>
{% for group in syllabi %}<h3 class="syllabus-level">{{ group.level }}</h3>
<ul class="syllabus-list">
{% for course in group.courses %}<li><a href="{{ course.file }}"><span class="syllabus-title">{{ course.title }}</span><span class="syllabus-meta">{{ course.where }}</span></a></li>
{% endfor %}</ul>
{% endfor %}

---

<p><a class="btn btn-outline" href="/mentoring/">Mentoring & Supervision</a></p>

</div>
</div></div>
