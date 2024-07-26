---
layout: joinUs
title: Internships
link: HOME / JOIN US
des: The Internship Program in Artificial Intelligence (AI) and Data Science (DS) at the School of Artificial Intelligence and Data Science (AIDE) offers undergraduate and graduate students the opportunity to gain hands-on experience, practical skills, and industry exposure in the dynamic fields of AI and DS. 
permalink: /intern/
---

<style>
  .background-about{
    background-image: url("{{ site.baseurl }}/images/SIP.png");
  }
</style>

<div class="general-section">
<h1>Internship Programs</h1>
<div class="row">
<div class="col-md-8">
<p style="text-align: justify;">The Internship Program in AI and DS at AIDE is designed to bridge the gap between academic learning and industry requirements by providing students with practical experience in applying AI and DS concepts to real-world problems. Interns have the opportunity to work on industry-sponsored projects, research initiatives, and collaborations with faculty members and industry partners.
</p>
</div>
<div class="col-md-4 implinkBox">
<div class="side-content">
<div class="share">
<p class="sign-up" style="text-align: center;"><i class="fa-regular fa-hand-point-right"></i> Important Links</p>
{% assign links_data = site.data.links %}
<ul class="side-news">
{% for mem in links_data %}
{% if mem.page == 'intern' %}
<li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
{% endif %}
{% endfor %}
</ul>
</div>
</div>
</div>
</div>
<div style="padding: 20px;">
<h2 id="subheading">Key Features</h2>
<ul>
<li style="text-align: justify;"><b>Industry Projects:</b> Interns work on industry-sponsored projects under the guidance of experienced mentors and industry professionals. These projects cover a wide range of AI and DS applications, including machine learning, deep learning, natural language processing, computer vision, big data analytics, and more.</li><br>
<li style="text-align: justify;"><b>Hands-on Experience: </b>The program emphasizes hands-on learning, allowing interns to apply theoretical concepts and methodologies to practical projects. Interns gain experience working with datasets, building models, developing algorithms, and implementing AI and DS solutions.</li><br>
<li style="text-align: justify;"><b>Certificate of Completion:</b> Upon successful completion of the internship program, interns receive a certificate of completion from AIDE, recognizing their contributions, achievements, and skills acquired during the internship.</li>
</ul>
</div>
<div style="padding: 20px;">
<h2 id="subheading">More Information about the program:</h2>

<div id="parent-box">

<div class="general-section">

<div class="row">
<div class="col-md-9">
</div>
</div>
</div>
<div class="application-section">

<table id="admissionTable">
<thead>

<tr>
<th style="text-align:left">Programs</th>
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
</div>
</div>



