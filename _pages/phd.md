---
layout: education
title: PhD
link: HOME / ACADEMICS
des: School of Artificial Intelligence and Data Science (AIDE) offers Ph.D. program in a wide range of emerging and challenging research areas of Foundational AI & DS, and AI & DS Applications through highly qualified faculty from diverse disciplines with shared interests in fundamental challenges in AI and DS.
permalink: /phd/
---

{% capture content-col %}

# Why PhD @ School of AIDE, IIT Jodhpur?

PhD students at the AIDE School are trained in theoretical as well as applied research that will be visible through publications in the top-ranking international journals and conferences, or state-of-the-art tangible end-products. The students can choose to work with the faculty in the Centers of Excellence, or choose a transdisciplinary project with the affiliated faculty. Students have round-the-clock access to high-end research and computational facilities. Our graduating doctoral students will be trained in critical thinking, independent research, development, operations and management of emerging technological challenges, and will be prepared to fulfil the needs of both industry and academia, or to venture out on their own.  

## Broad Research Areas in SAIDE

- Foundational AI & DS
- AI & DS Applications
- Brain Science and Applications
- Mathematical and Computational Economics

{% endcapture %}

{% capture content-links %}

{% assign links_data = site.data.links %}
<ul class="side-news">
{% for mem in links_data %}
  {% if mem.page == 'phd' %}
    <li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% endcapture %}

{% capture content-bottom %}

## The program at present is designed to offer degrees in the following areas:

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
<p><strong>Convenor:</strong> {{member.coordinator}}</p>
</div>
</div>
{% endif %}
{% endfor %}
</div>

## Curriculum

The PhD program at SAIDE is meticulous and demanding. It currently provides an opportunity for focused research in all areas of specialization that the School offers. The program emphasizes research training through completion of course work and pursuing research work that connects with the real world applications , with any of the national or global programs that speak to the contemporary issues in our society.  

## Fellowships

- MoE (Institute Fellowship)
- [PMRF (Prime Minsiter Research Fellowship)](https://www.pmrf.in/)
- [Visvesvaraya PhD Scheme](https://phd.dic.gov.in/)
- Project Fellowships

## Supervisor Selection
The students can choose to work with any core faculty or affiliated faculty (as a co-supervisor) from the School of AIDE.

{% endcapture %}

<style>
.background-about{
background-image:url("{{ site.baseurl }}/images/PhD.png");
}
</style>

{% include education2.html %}
