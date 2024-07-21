---
layout: page
title: Papers
des: At IITJ Aide School, our faculty and researchers are dedicated to advancing knowledge and contributing to the academic community through high-quality publications. Here are some selected publications highlighting our research contributions.
link: HOME / RESEARCH
permalink: /publications/
---

<div class="search-box">
<input type="text" id="searchBar" placeholder="Search for an article...">
</div>

<section class="paper-section papers-grid" id="papersSection">
{% assign sorted_papers = site.data.publications | sort: 'date' | reverse %}
{% for paper in sorted_papers %}
<div class="paper-item" data-title="{{ paper.title }}">
<div class="paper-content">
<p style="text-align: right;"><i>{{ paper.journal }}</i></p>
<br>
<h2 id="titleh2"><a href="{{ paper.link }}" target="_blank" style="border: 0;">{{ paper.title }}</a></h2>
<p><strong>Authors:</strong> {{ paper.author }}</p>
<br>
<p class="date"><strong>Date:</strong> {{ paper.date | date: '%d-%m-%Y' }}</p>
</div>
</div>
{% endfor %}
</section>
<div class="pagination" id="pagination">
</div>

<style>
    .background-about {
        background-image: url("{{ site.baseurl }}/images/Publications.png");
    }
</style>

<script src="{{ site.baseurl }}/js/pages/papers.js"></script>