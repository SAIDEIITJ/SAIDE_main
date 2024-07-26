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
<div class="application-section">

<table id="admissionTable">
<thead>

<tr>
<th style="text-align:left">Project Title</th>
<th>Advertisement</th>
<th>Application Deadline</th>
<th>Application Link</th>
</tr>
</thead>
<tbody id = "admissions-table">
{% assign programs_data = site.data.programs  %}
{% for member in programs_data %}
<tr>
<td style="text-align:left">{{member.name}}</td>
<td><a href="{{ member.document }}" target="_blank" class="view-more" style="border:0;">View More</a></td>
<td>{{member.deadline}}</td>

<td><a href="{{ member.application }}" target="_blank" class="apply-now" style="border:0;text-decoration:none;"><i class="fa-regular fa-hand-point-right"></i> Apply Now</a></td>
</tr>
{% endfor %}
</tbody>
</table>
</div>
</div>