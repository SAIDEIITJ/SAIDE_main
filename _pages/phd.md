---
layout: education
title: PhD
link: HOME / ACADEMICS
des: School of Artificial Intelligence and Data Science (AIDE) offers Ph.D. program in a wide range of emerging and challenging research areas of Foundational AI & DS, and AI & DS Applications through highly qualified faculty from diverse disciplines with shared interests in fundamental challenges in AI and DS.
permalink: /phd/
---

<style>
.background-about{
background-image:url("{{ site.baseurl }}/images/PhD.png");
}
</style>

<div id="parent-box">
<div class="general-section">
<h1> Why PhD @ School of AIDE, IIT Jodhpur?</h1>
<div class="row">
<div class="col-md-8">
<p style="text-align: justify;">PhD students at the AIDE School are trained in theoretical as well as applied research that will be visible through publications in the top-ranking international journals and conferences, or state-of-the-art tangible end-products. The students can choose to work with the faculty in the Centers of Excellence, or choose a transdisciplinary project with the affiliated faculty. Students have round-the-clock access to high-end research and computational facilities. Our graduating doctoral students will be trained in critical thinking, independent research, development, operations and management of emerging technological challenges, and will be prepared to fulfil the needs of both industry and academia, or to venture out on their own.</p>
</div>
<div class="col-md-4 implinkBox">
<div class="side-content">
<div class="share">
<p class="sign-up" style="text-align: center;"><i class="fa-regular fa-hand-point-right"></i> Important Links</p>

{% assign links_data = site.data.links %}
<ul class="side-news">
  {% for mem in links_data %}
    {% if mem.page == 'phd' %}
      <li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
<br>
<p style="text-align: left; color: #23674ce6; font-size:0.9em ;"><b>PhD Coordinator -</b> Dr. Ranju Mohan</p>
</div>
</div>
</div>
</div>
</div>

<div style="padding: 20px;">
<h2 id="subheading">Broad Research Areas in SAIDE</h2>
<ul>
<a href="" style="border: 0;text-decoration: none;color: rgb(52, 40, 40);"><li>Foundational AI & DS</li></a>
<a href="" style="border: 0;text-decoration: none;color: rgb(52, 40, 40);"></a><li>AI & DS Applications</li>
<a href="" style="border: 0;text-decoration: none;color: rgb(52, 40, 40);"></a><li>Brain Science and Applications</li>
<a href="" style="border: 0;text-decoration: none;color: rgb(52, 40, 40);"></a><li>Mathematical and Computational Economics</li>
</ul>

<h2 id="subheading">The program at present is designed to offer degrees in the following areas:</h2>
<div class="msgrid-container">
{% assign programs_data = site.data.programs  %}
{% for member in programs_data %}
{% if member.level == 'PhD' %}
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{member.background}}'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 20px;">
<h2 id="subheading" style="margin: 0;">
{% if member.document != '' %}
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


<h2 id="subheading">Curriculum</h2>
<p style="text-align: justify;">The PhD program at SAIDE is meticulous and demanding. It currently provides an opportunity for focused research in all areas of specialization that the School offers. The program emphasizes research training through completion of course work and pursuing research work that connects with the real world applications , with any of the national or global programs that speak to the contemporary issues in our society.</p>
<br>
<h2 id="subheading">Fellowships</h2>
<div class="msgrid-container">
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/institute.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 20px;">
<h2 id="subheading" style="margin: 0;">
<a href="#" target="_blank" style="border: 0;text-decoration: none;">MoE (Institute Fellowship)</a></h2>
</div>
</div>

<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/pmrf.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 20px;">
<h2 id="subheading" style="margin: 0;">
<a href="#" target="_blank" style="border: 0;text-decoration: none;">PMRF (Prime Minsiter Research Fellowship)</a></h2>
</div>
</div>


<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/Visvesvaraya.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 20px;">
<h2 id="subheading" style="margin: 0;"><a href="https://aide.iitj.ac.in/images/pdf/MSR_CII.pdf" target="_blank" style="border: 0;text-decoration: none;">Visvesvaraya PhD Scheme</a></h2>

</div>
</div>

<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/project.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 20px;">
<h2 id="subheading" style="margin: 0;"><a href="https://aide.iitj.ac.in/images/pdf/MSR_CAIPH.pdf" target="_blank" style="border: 0;text-decoration: none;">Project Fellowships</a></h2>
</div>
</div>
</div>
<br>

<h2 id="subheading">Supervisor Selection</h2>
<p style="text-align: justify;">The students can choose to work with any core or affiliated faculty from the School of AIDE</p>
</div>
</div>
