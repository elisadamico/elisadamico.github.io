---
layout: base.njk
title: Data Science
heading: Data Work and Experience
# Cards at the bottom of the page. Leave url out for a card with no link.
projects:
  - name: Three-Variable Chart Builder
    kind: Interactive web tool
    about: Charts and maps of disasters, food prices, and conflict from my research, with descriptive and results views. Built for teaching data visualization.
    url: https://www.elisadamico.net/graphs-three-variables/
    link_label: Open the chart builder
    image: /assets/img/chart-builder.jpg
  - name: Drivers of Fishery-Related Militarized Disputes
    kind: Shiny app
    about: A dynamic global annual map of temperature anomalies, fish stock, and fishery-related MID dyads.
    url: https://elisadamico.shinyapps.io/FishyMIDsApp/
    link_label: Open the app
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
  - name: Peace Agreement Scrape and Filter
    kind: R and BigQuery
    about: Scripts for processing and filtering peace agreement data scraped through Google BigQuery, built for PeaceRep.
    url: https://github.com/elisadamico/Peace-Agreement-Scrape-and-Filter
    link_label: View on GitHub
  - name: PDF Download and Keyword Search
    kind: R text search
    about: Downloads documents from a list of URLs and pulls every passage that mentions chosen keywords into a spreadsheet for manual coding. I used it to search the UCDP peace agreement texts.
    url: https://github.com/elisadamico/TEXT-SEARCH-PROJECT-Download-PDFs-Search-them
    link_label: View on GitHub
  - name: Shapefile and CSV Merging
    kind: QGIS, Python, and Stata guide
    about: Joining a shapefile to an attribute table by state and county in QGIS with Python, then cleaning the merged data in Stata, using the RAINE and NRI databases.
    url: https://github.com/elisadamico/Location-Data-Merging-Shapefile-and-CSV-Joining-QGIS-Stata-Python---RAINE-and-NRI-Database
    link_label: View on GitHub
  - name: Panel Dataset Macros
    kind: Excel VBA
    about: Macros that build the unit-by-date shell for large panel datasets, useful for spatial data with thousands of units.
    url: https://github.com/elisadamico/Useful-Macros-for-creating-large-unit-date-Panel-datasets
    link_label: View on GitHub
  - name: CherryBlossom
    kind: RStudio theme
    about: A dark RStudio theme inspired by cherry blossoms, with soft pink and green syntax highlighting and styled panes.
    url: https://github.com/elisadamico/CherryBlossom-rstheme
    link_label: View on GitHub
  - name: Holiday Cheer
    kind: RStudio theme
    about: A festive dark RStudio theme in holiday reds, greens, and gold.
    url: https://github.com/elisadamico/holiday-cheer-rstudio-theme
    link_label: View on GitHub
---

<div class="section"><div class="container split wide-left">
<div class="prose"><div class="plain-heads">

<h3>Research and Data Experience</h3>

{% yearlist %}
2026– | ESOC Lead, [eEarth](https://eearth.io/), Empirical Studies of Conflict (ESOC) and International Crisis Group collaboration<br>*Liaising between Crisis Group’s eEarth team and ESOC researchers on resource-related conflict early warning*
2025– | Data Manager, Global PeaceHub: Mediation and Negotiators Database (MEND)
2023–2024 | Data & Modeling Research Consultant, University of Denver and World Wildlife Fund<br>*Forecasting future fisheries conflict; leveraging big data and running prediction models*
2023 | Automation Research Consultant, University of St Andrews, School of International Relations<br>*Global Fragmentation and Peacemaking PeaceRep Consultancy and Database Building*
2023 | Data Scientist, Chicago Public Schools, School Counseling and Postsecondary Advising<br>*Data science, empirical modeling, Google AppScript, SQL, SAS, etc.*
2023 | Quantitative Research Associate, Institute for Racial Justice<br>*Transcribed and coded focus group recordings, synthesizing data on equity in gifted programming*
2018–2023 | Research Assistant, Loyola University Chicago, Department of Political Science<br>*Worked with E. Hansen, K. Camarena, P. Boyle, S. Maxey, T. Maboudi, M. Melin, S. Kang, and J. Kao*
2017 | Special Interest Groups Data Analyst, Project VoteSmart<br>*Web-scraping and cleaning of special interest groups data in R*
2016 | Research Analyst, The Scottish Parliament, Edinburgh<br>*Served under Alex Rowley, Member of the Scottish Parliament. Devolution of powers, taxation, and public well-being*
{% endyearlist %}

<h3>Ad Hoc Projects</h3>

{% yearlist %}
Created Stata templates for causation and quasi-experimental graduate-level projects.
Used Python console to import, polygonize, spatially merge, and export data in QGIS.
Used R to scrape, code, and semi-automate text analysis from peace agreement documents.
Used R and APIs to query Chicago crime and census data and geospatially merge.
Used SQL BigQuery on a number of conflict-related projects to extract data.
Developed an interactive infographic mapping climate disasters and migration patterns over time.
Created quizzes in Qualtrics for complex grading schemes.
Used Excel VBA and Stata to merge large climate law and litigation data.
{% endyearlist %}

</div></div>
<div class="prose"><div class="plain-heads">

<a class="profile-card" href="https://github.com/elisadamico"><img src="/assets/img/github-profile.png" alt="GitHub profile of Elisa D’Amico" width="538" height="822" loading="lazy"><span class="btn btn-outline">View my GitHub</span></a>

<h3>Computer and Technical Skills</h3>

{% yearlist %}
**Data Skills**: Querying (e.g., SQL/Python/Google BigQuery); Excel VBA; Geospatial Data (e.g., QGIS/R); Data mining and scraping; Machine Learning (e.g., RF, K-Means); Text Analysis
**Software Proficiency**: R, QGIS, SQL, STATA, JMP, Python, Google App Script, SAS, SPSS, Excel VBA, LaTeX
**Statistical Methods**: Difference-in-Differences; Survey Experiments; Granger Causality; OLS; Multilevel Models; Logistic Regression; Survival Analysis (Weibull, Cox-PH); Random Forest; Generalized Additive Models; Change Point Analysis; Principal Component Analysis, etc.
{% endyearlist %}

<h3>Certifications</h3>

{% yearlist %}
2023 | DataCamp Data Scientist Professional, R; SQL, Python
2023 | Qualtrics XM Professional Certification
2022 | Empirical Implications of Theoretical Models (EITM) Certification
{% endyearlist %}

</div></div>
</div></div>

<div class="page-title"><h2>Replication Data</h2></div>

<div class="section"><div class="container narrow prose">

Data and code for my published articles are on Harvard Dataverse.

{% yearlist %}
2026 | [Regional El Niño Patterns Shape Wheat-Flour Price Responses to Climate Disasters](https://doi.org/10.7910/DVN/4QHFA1). Replication data for my article in *Environmental Research Letters*.
2026 | [The Price of Instability: Hydrological Disasters, Food Prices, and Violent Conflict](https://doi.org/10.7910/DVN/917DMH). Replication data for my article in *Humanities and Social Sciences Communications*.
2026 | [Difference-in-Differences Estimation: A Quasi-Experimental Approach to Sustainable Development Interventions](https://doi.org/10.7910/DVN/FGCPNU). Replication data for my forthcoming article in *Global Environmental Politics*.
2025 | [Timing Matters: Analyzing Climate Policies and Adaptive Resilience](https://doi.org/10.7910/DVN/JYHGTF). Replication data for my article with T. Maboudi in *Climate Policy*.
2025 | [Resilient by Design: Isolating Impactful Climate Adaptation Measures in New England](https://doi.org/10.7910/DVN/GBWZEC). Replication data for my article in *npj Climate Action*.
2025 | [From Garments to Grievances: The Dynamics of Urban Growth and Economic Shocks in Rapidly Industrializing Economies](https://doi.org/10.7910/DVN/XE1MQE). Replication data for my article in the *Review of International Political Economy*.
{% endyearlist %}

</div></div>

<div class="page-title"><h2>Selected Projects and Tools</h2></div>

<div class="section"><div class="container">
<div class="link-cards">
{% for project in projects %}{% if project.url %}<a class="link-card" href="{{ project.url }}">{% else %}<div class="link-card">{% endif %}<p class="post-tag">{{ project.kind }}</p><h3>{{ project.name }}</h3>{% if project.image %}<img class="card-shot" src="{{ project.image }}" alt="" loading="lazy">{% endif %}<p>{{ project.about }}</p>{% if project.url %}<span class="more">{{ project.link_label }}</span></a>{% else %}</div>{% endif %}
{% endfor %}</div>
</div></div>
