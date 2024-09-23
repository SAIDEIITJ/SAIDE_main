---
layout: education
title: Executive Programs
link: HOME / ACADEMICS
des: Welcome to the School of Artificial Intelligence and Data Science (SAIDE), where transformative learning meets cutting-edge research in complex systems science. At SAIDE, we are committed to nurturing the next generation of innovators, thinkers, and problem solvers in the dynamic fields of artificial intelligence (AI) and data science (DS).
permalink: /continuing_edu/
---
{% capture content-col %}

# Executive Programs

The School runs degree, diploma and certificate programmes in online and/or part-time mode for interested learners, having different career paths and different levels of preparation. This will include specialised programmmes meeting need of working professionals in the field of AI&DS, awareness programmes for senior executives, cross-disciplinary programmes for in depth training of professionals from other disciplines, programmes for add-on diploma/certificates for students pursuing academic programmes in other disciplines. In other words, the School will play a key role in extending the reach of the AI and DS knowledge in the country.
{% endcapture %}

{% capture content-links %}

{% assign links_data = site.data.links %}
<ul class="side-news">
{% for mem in links_data %}
  {% if mem.page == 'continuing_edu' %}
    <li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% endcapture %}

{% capture content-bottom %}

## The following executive programs are currently offered by the school:
<div class="msgrid-container">
{% assign programs_data = site.data.programs  %}
{% for member in programs_data %}
{% if member.level == 'Executive' %}
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

{% endcapture %}

<style>
   /* page-banner image */
.background-about{
background-image: url("{{ site.baseurl }}/images/Continuing.png");
}
</style>

{% include education2.html %}
