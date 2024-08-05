---
layout: joinUs
title: Postdoc Positions
link: HOME / JOIN US
des: Join SAIDE for a transformative learning experience in complex systems science.
permalink: /postdocPositions/
---
<style>
  .background-about {
    background-image: url("{{ site.baseurl }}/images/postdoc.png");
  }

</style>

<div id="parent-box">
<div class="general-section">
<h1 style="text-transform: none;">Postdoc positions at School of Artificial Intelligence & Data Science
</h1>
<div class="row">
<div class="col-md-9">
<p>IIT Jodhpur invites applications for postdoc positions in specific disciplines and interdisciplinary areas.</p>
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
<div class="custom-dropdown selected" id="selected-type" data-value="Post Doc">
  Post Doc
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

  {% assign unique_backgrounds_list = "" %}
  {% assign backgrounds_set = "" %}

  {% for position in site.data.positions %}
    {% assign backgrounds = position.background | split: ',' %}
    {% for background in backgrounds %}
      {% assign background = background | strip %}
      {% unless backgrounds_set contains background %}
        {% assign backgrounds_set = backgrounds_set | append: background | append: ',' %}
        {% assign unique_backgrounds_list = unique_backgrounds_list | append: background | append: ',' %}
      {% else %}
      {% endunless %}
    {% endfor %}
  {% endfor %}
  {% assign unique_backgrounds_array = unique_backgrounds_list | split: ',' | uniq | sort %}
  {% for background in unique_backgrounds_array %}
    {% if background != "" %}
      <li data-value="{{ background }}">{{ background }}</li>
    {% endif %}
  {% endfor %}
</ul>
</div>
<div id="positions-container">
{% assign positions = site.data.positions | sort: 'startDate' | reverse %}
{% for pos in positions %}
{% assign project = site.data.projects | where: "identifier", pos.identifier | first %}
<div class="project-item" data-index="{{ forloop.index }}" data-type="{{ pos.type }}" data-background="{{ pos.background }}" style="margin-bottom: 15px;">
<div class="row">
<div class="col-md-6">
<h3 id="accordionTitle">{{ project.title }}
</h3>
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
<p><strong>Link:</strong> <a href="{{ pos.link }}" target="_blank" id= "titleh2" style="border: 0;">{{ pos.link }}</a></p>
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
