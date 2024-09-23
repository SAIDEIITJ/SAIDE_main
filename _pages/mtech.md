---
layout: education
title: MTech Programs
link: HOME / ACADEMICS
permalink: /mtech/
des: The Master of Technology (M.Tech) program in Artificial Intelligence and Data Science at the School of Artificial Intelligence and Data Science (AIDE) offers an advanced curriculum designed to prepare students for leadership roles in the rapidly evolving fields of artificial intelligence (AI) and data science (DS).
---

{% capture content-col %}

# MTech Programs

The Master of Technology (MTech) program in Artificial Intelligence and Data Science at the School of Artificial Intelligence and Data Science (AIDE) offers an advanced curriculum designed to prepare students for leadership roles in the rapidly evolving fields of artificial intelligence (AI) and data science (DS).

{% endcapture %}

{% capture content-links %}

{% assign links_data = site.data.links %}
<ul class="side-news">
{% for mem in links_data %}
  {% if mem.page == 'mtech' %}
    <li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% endcapture %}

{% capture content-bottom %}

## The MTech program at present is designed to offer degrees in the following areas:

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
<p><strong>Convenor:</strong> {{member.coordinator}}</p>
</div>
</div>
{% endif %}
{% endfor %}
</div>

{% endcapture %}

<style>
.background-about {
background-image: url("{{ site.baseurl }}/images/MTech.png");
}
</style>

{% include education2.html %}
