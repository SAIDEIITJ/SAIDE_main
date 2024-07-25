---
layout: education
title: MTech Programs
link: HOME / ACADEMICS
permalink: /mtech/
des: The Master of Technology (M.Tech) program in Artificial Intelligence and Data Science at the School of Artificial Intelligence and Data Science (AIDE) offers an advanced curriculum designed to prepare students for leadership roles in the rapidly evolving fields of artificial intelligence (AI) and data science (DS).
---

<style>
.background-about {
background-image: url("{{ site.baseurl }}/images/MTech.png");
}
</style>

<div id="parent-box">
<div class="general-section">
<h1>{{page.title}}</h1>
<div class="row">
<div class="col-md-8">
<p style="text-align: justify;">The Master of Technology (M.Tech) program in Artificial Intelligence and Data Science at the School of Artificial Intelligence and Data Science (AIDE) offers an advanced curriculum designed to prepare students for leadership roles in the rapidly evolving fields of artificial intelligence (AI) and data science (DS).</p>
</div>
<div class="col-md-4 implinkBox">
<div class="side-content">
<div class="share">
<p class="sign-up" style="text-align: center;"><i class="fa-regular fa-hand-point-right"></i> Important Links</p>
{% assign links_data = site.data.links %}
<ul class="side-news">
  {% for mem in links_data %}
    {% if mem.page == 'mtech' %}
      <li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
    {% endif %}
  {% endfor %}
</ul> 
</div>
</div>
</div>
</div>
</div>
<div style="padding: 20px;">
<h2 id="subheading">The program at present is designed to offer degrees in the following areas:</h2>
<div class="msgrid-container">
{% assign programs_data = site.data.programs  %}
{% for member in programs_data %}
{% if member.level == 'MTech' %}
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{member.background}}'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 20px;">
<h2 id="subheading" style="margin: 0;">
{% if member.document != ''%}
<a href="{{ member.document }}" target="_blank" style="border: 0; text-decoration: none;">{{ member.name }}
</a>
{% else %}
<a href="{{ member.url }}" target="_blank" style="border: 0; text-decoration: none;">{{ member.name }}
</a>
{% endif %}
</h2>
<p><strong>Offered by:</strong> {{member.offered}}</p>
<p><strong>Coordinator:</strong> {{member.coordinator}}</p>
</div>
</div>
{% endif %}
{% endfor %}
</div>
</div>
</div>
