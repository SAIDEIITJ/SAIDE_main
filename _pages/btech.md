---
layout: education
title: Btech Minor Programs
link: HOME / ACADEMICS
des: The Minor Programs in Artificial Intelligence (AI) and Data Science (DS) at the School of Artificial Intelligence and Data Science (AIDE) offer undergraduate students pursuing Bachelor of Technology (B.Tech) degrees the opportunity to gain specialized knowledge and skills in these rapidly growing fields. These minor programs complement students' primary areas of study and prepare them for diverse career opportunities in AI and DS.
permalink: /btech/
---

<style>
.background-about{
background-image: url("{{ site.baseurl }}/images/BTech.png");
}
</style>

<div id="parent-box">
<div class="general-section">
<h1>Minor Programs for B.Tech</h1>
<div class="row">
<div class="col-md-8">
<p style="text-align: justify;">The Minor Programs in AI and DS at AIDE are designed to provide B.Tech students with a foundational understanding of key concepts, techniques, and applications in AI and DS. These programs offer a blend of theoretical knowledge, practical skills, and hands-on experience through a combination of coursework, projects, and experiential learning opportunities.</p>
</div>
<div class="col-md-4">
<div class="side-content">
<div class="share">
<p class="sign-up" style="text-align: center;"><i class="fa-regular fa-hand-point-right"></i> Important Links</p>
<ul class="side-news">

{% assign news_event_data = site.data.news_events %}
{% for mem in news_event_data %}
{% if mem.btech == 1 and mem.visibility == 1 %}
<a href="{{mem.link}}" target="_blank" id="links"><li>{{ mem.title }}</li></a>
{% endif %}
{% endfor %}
</ul> 
<br>
</div>
</div>
</div>
</div>
</div>
<div style="padding: 20px;">
<h2 id="subheading">The program at present is designed to offer degrees in the following areas:</h2>
<div class="msgrid-container">
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/btech1.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 15px;">
<h2 id="subheading" style="margin: 0;"><a href="https://aide.iitj.ac.in/images/pdf/MSR_CMCE.pdf" target="_blank" style="border: 0;text-decoration: none;">Minor Program in Science of Intelligence</a></h2>
<p><strong>Offered by:</strong> CBSA</p>
<p><strong>Coordinator:</strong> Dr. Suman Dhaka</p>
</div>
</div>
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/btech2.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 15px;">
<h2 id="subheading" style="margin: 0;"><a href="https://aide.iitj.ac.in/images/pdf/MSR_CMCE.pdf" target="_blank" style="border: 0;text-decoration: none;">Minor Program in Mathematical & Computational Economics</a></h2>
<p><strong>Offered by:</strong> CMCE</p>
<p><strong>Coordinator:</strong> Dr. Srivatsa Srinivas S</p>
</div>
</div>
</div>
</div>
</div>
