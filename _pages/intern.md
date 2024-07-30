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
<br>
<section class="res-section">
<div class="theme-container">
<div class="search-bar">
<input type="text" id="search-keywords" placeholder="Search by background...">
</div>
<div class="custom-dropdown-wrapper">
<div class="custom-dropdown selected" id="selected-type" data-value="Internships">
  Internships
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





