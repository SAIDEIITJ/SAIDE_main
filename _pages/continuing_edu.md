---
layout: education
title: Professional Programs
link: HOME / ACADEMICS
des: Welcome to the School of Artificial Intelligence and Data Science (SAIDE), where transformative learning meets cutting-edge research in complex systems science. At SAIDE, we are committed to nurturing the next generation of innovators, thinkers, and problem solvers in the dynamic fields of artificial intelligence (AI) and data science (DS).
permalink: /continuing_edu/
---



<div id="parent-box">
<div class="general-section">
<h1>Professional Programs</h1>
<div class="row">
<div class="col-md-8">
<p style="text-align: justify;">The School runs degree, diploma and certificate programmes in online and/or part-time mode for interested learners, having different career paths and different levels of preparation. This will include specialised programmmes meeting need of working professionals in the field of AI&DS, awareness programmes for senior executives, cross-disciplinary programmes for in depth training of professionals from other disciplines, programmes for add-on diploma/certificates for students pursuing academic programmes in other disciplines. In other words, the School will play a key role in extending the reach of the AI and DS knowledge in the country.</p>
</div>
<div class="col-md-4">
<div class="side-content">
<div class="share">
<p class="sign-up" style="text-align: center;"><i class="fa-regular fa-hand-point-right"></i> Important Links</p>
{% assign links_data = site.data.links %}
<ul class="side-news">
  {% for mem in links_data %}
    {% if mem.page == 'professional_education' %}
      <li><a href="{{ mem.url }}" target="_blank" id="links">{{ mem.name }}</a></li>
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
<h2 id="subheading">More Information about the program:</h2>
<div class="msgrid-container">
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/compEco.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 15px;">
<h2 id="subheading" style="margin: 0;"><a href="https://aide.iitj.ac.in/images/pdf/MSR_CMCE.pdf" target="_blank" style="border: 0;text-decoration: none;">Program 1</a></h2>
<p><strong></strong> </p>
<p><strong></strong> </p>
</div>
</div>
<div class="ms-card ms-grid" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; max-width: 400px; margin-bottom: 20px;">
<div class="ms-card-image" style="background-image: url('{{ site.baseurl }}/images/compEco.png'); background-size: cover; background-position: center; height: 200px;"></div>
<div class="ms-card-content" style="padding: 15px;">
<h2 id="subheading" style="margin: 0;"><a href="https://aide.iitj.ac.in/images/pdf/MSR_CMCE.pdf" target="_blank" style="border: 0;text-decoration: none;">Program 2</a></h2>
<p><strong></strong> </p>
<p><strong></strong> </p>
</div>
</div>
</div>
</div>
</div>

<style>
   /* page-banner image */
.background-about{
background-image: url("{{ site.baseurl }}/images/Continuing.png");
}
</style>