---
layout: base.njk
title: Data Science
heading: Data Work and Experience
# Cards at the bottom of the page. Leave url out for a card with no link.
projects:
  - name: Drivers of Fishery-Related Militarized Disputes
    kind: Shiny app
    about: A dynamic global annual map of temperature anomalies, fish stock, and fishery-related MID dyads.
    url: https://elisadamico.shinyapps.io/FishyMIDsApp/
    link_label: Open the app
  - name: BreakFinder
    kind: R package
    about: Change point analysis that iterates through all variables in a dataset to reveal abrupt transitions in aggregate.
  - name: Climate Data Central
    kind: Data resource
    about: A repository to centralize and preserve climate data resources.
    url: https://github.com/elisadamico/climate-data-central
    link_label: View on GitHub
  - name: Nighttime Lights to Country-Year Data
    kind: QGIS and Python guide
    about: Extracting nighttime lights raster files, pulling statistics by country borders in QGIS, and exporting country-level data to CSV.
    url: https://github.com/elisadamico/Nighttime-Lights-Raster-Data-to-Country-Year-CSV---QGIS-Python
    link_label: View on GitHub
  - name: Updated GDELT Data Extraction
    kind: SQL guide
    about: A working sample of the query format the updated GDELT SQL interface requires, replacing older help files that no longer run.
    url: https://github.com/elisadamico/Updated-GDELT-Data-Extraction
    link_label: View on GitHub
  - name: Country Name Standardization
    kind: Stata and Excel tools
    about: Tools for merging data on country names across differences in spelling, abbreviations, country codes, and languages.
    url: https://github.com/elisadamico/Country-Name-Standardization-Stata-and-Excel
    link_label: View on GitHub
---

<div class="section"><div class="container split wide-left">
<div class="prose"><div class="plain-heads">

### Experience

- **2023–2024**: *Data & Modeling Research Consultant* — University of Denver and World Wildlife Fund<br>**Responsibilities**: Forecasting future fisheries conflict; Leveraging big data and running prediction models.
- **2023**: *Data Scientist* — Chicago Public Schools, School Counseling and Postsecondary Advising<br>**Responsibilities**: Data science, empirical modeling, Google AppScript, SQL, SAS, etc.
- **2023**: *Automation Research Consultant* — University of St Andrews, *School of International Relations*<br>**Responsibilities**: Global Fragmentation and Peacemaking PeaceRep Consultancy and Database Building.
- **2017**: *Special Interest Groups Data Analyst* — Project VoteSmart<br>**Responsibilities**: Web-scraping and cleaning of special interest groups data in R.

<h4><em>Ad Hoc Projects</em></h4>

- Created Stata templates for causation and quasi-experimental graduate-level projects.
- Used Python console to import, polygonize, spatially merge, and export data in QGIS.
- Used R to scrape, code, and semi-automate text analysis from peace agreement documents.
- Used R and APIs to query Chicago crime and census data and geospatially merge.
- Used SQL BigQuery on a number of conflict-related projects to extract data.
- Developed an interactive infographic mapping climate disasters and migration patterns over time.
- Created quizzes in Qualtrics for complex grading schemes.
- Used Excel VBA and Stata to merge large climate law and litigation data.

---

### Certifications

- **2023**: DataCamp Data Scientist Professional, R; SQL, Python
- **2023**: Qualtrics XM Professional Certification
- **2022**: Empirical Implications of Theoretical Models (EITM) Certification

</div></div>
<div class="prose"><div class="plain-heads">

<a class="profile-card" href="https://github.com/elisadamico"><img src="/assets/img/github-profile.png" alt="GitHub profile of Elisa D’Amico" width="538" height="822" loading="lazy"><span class="btn btn-outline">View my GitHub</span></a>

---

### Computer and Technical Skills

- **Data Skills**: Querying (e.g., SQL/Python/Google BigQuery); Excel VBA; Geospatial Data (e.g., QGIS/R); Data mining and scraping; Machine Learning (e.g., RF, K-Means); Text Analysis
- **Software Proficiency**: R, QGIS, SQL, STATA, JMP, Python, Google App Script, SAS, SPSS, Excel VBA, LaTeX
- **Statistical Methods**: Difference-in-Differences; Survey Experiments; Granger Causality; OLS; Multilevel Models; Logistic Regression; Survival Analysis (Weibull, Cox-PH); Random Forest; Generalized Additive Models; Change Point Analysis; Principal Component Analysis, etc.
- **Created Dynamic Visualizations**: [Drivers of Fishery-Related Militarized Disputes ShinyApp](https://elisadamico.shinyapps.io/FishyMIDsApp/) — Shows dynamic global annual map of temperature anomalies, fish stock, and fishery-related MID dyads.

</div></div>
</div></div>

<div class="page-title"><h2>Selected Projects and Tools</h2></div>

<div class="section"><div class="container">
<div class="link-cards">
{% for project in projects %}{% if project.url %}<a class="link-card" href="{{ project.url }}">{% else %}<div class="link-card">{% endif %}<p class="post-tag">{{ project.kind }}</p><h3>{{ project.name }}</h3><p>{{ project.about }}</p>{% if project.url %}<span class="more">{{ project.link_label }}</span></a>{% else %}</div>{% endif %}
{% endfor %}</div>
</div></div>
