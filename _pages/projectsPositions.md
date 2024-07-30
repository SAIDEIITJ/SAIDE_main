---
layout: joinUs
title: Project Positions
link: HOME / JOIN US
des: Join SAIDE for a transformative learning experience in complex systems science.
permalink: /projectsPositions/
---
<style>
  .background-about{
    background-image: url("{{ site.baseurl }}/images/ProjectPositions.png");
  }

</style>

<div id="parent-box">

<div class="general-section">

<h1 style="text-transform: none;">Project positions at School of Artificial Intelligence & Data Science</h1>
<div class="row">
<div class="col-md-9">
<p>IIT Jodhpur invites applications for project-linked research to various funded projects in specific disciplines and interdisciplinary areas. </p>
</div>
</div>
</div>
<br>
<section class="res-section">
<div class="theme-container">
<div class="search-bar">
<input type="text" id="search-keywords" placeholder="Search by background...">
</div>
<div class="custom-dropdown-wrapper">
<div class="custom-dropdown selected" id="selected-type" data-value="Project Staff">
Project Staff
</div>
<ul class="custom-dropdown-list" id="type-list">
<li data-value="">All Positions</li>
<li data-value="Project Staff">Project Staff</li>
<li data-value="Post Doc">Post Doc</li>
<li data-value="Internships">Internships</li>
<li data-value="Design Credits">Design Credits</li>
</ul>
</div>
<div class="custom-dropdown-wrapper">
<div class="custom-dropdown selected" id="selected-background" data-value="">
All Backgrounds
</div>
<ul class="custom-dropdown-list" id="background-list">
<li data-value="">All Backgrounds</li>
<li data-value="Computational">Computational</li>
<li data-value="Physics">Physics</li>
<li data-value="Biology">Biology</li>
<li data-value="Maths">Maths</li>
<li data-value="Electronics">Electronics</li>
</ul>
</div>
<div id="positions-container">
{% assign positions = site.data.positions | sort: 'startDate' | reverse %}
{% for pos in positions %}
{% assign project = site.data.projects | where: "identifier", pos.identifier | first %}
<div class="project-item" data-index="{{ forloop.index }}" data-type="{{ pos.type }}" data-background="{{ pos.background }}" style="margin-bottom: 15px;">
<div class="row">
<div class="col-md-6">
<h3 id="accordionTitle">{{ project.title }}</h3>
</div>
<div class="col-md-3">
<p><strong>Start Date:</strong> {{ pos.startDate | date: '%d-%m-%Y' }}</p>
<p><strong>End Date:</strong> {{ pos.enddate | date: '%d-%m-%Y' }}</p>
</div>
<div class="col-md-3">
<p><strong>Position Type:</strong> {{ pos.type }}</p>
</div>
</div>
<div class="project-details" id="project-details-{{ forloop.index }}">
<div class="row">
<div class="col-md-6">
<p>{{ pos.description }}</p>
</div>
<div class="col-md-6"></div>
<p><strong>Background:</strong> {{ pos.background }}</p>
<p><strong>Link:</strong> <a href="{{ pos.link }}" target="_blank">{{ pos.link }}</a></p>
</div>
</div>
</div>
{% endfor %}
</div>
</div>
</section>
<br>
</div>
<script src="{{ site.baseurl }}/js/pages/positions.js"></script>