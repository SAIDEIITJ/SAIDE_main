---
layout: joinUs
title: Faculty
link: HOME / JOIN US
des: Join SAIDE for a transformative learning experience in complex systems science.
permalink: /faculty_joinUS/
---



<div id="parent-box">
<div class="general-section">
<h1>Rolling Advertisement for Faculty Recruitment</h1>
<div class="row">
<div class="col-md-8">
<p style="text-align: justify;">IIT Jodhpur invites online applications from persons with exceptional academic record and/or valuable
research and industrial experience at the levels of Professor, Associate Professor, Assistant Professor,
Professor of Practice and Young Faculty Associates working in all areas of AI and AI applications who can
contribute towards achieving goals of the school. </p>
   
</div>
<div class="col-md-4">
<div class="side-content">
<div class="share">
<p class="sign-up" style="text-align: center;"><i class="fa-regular fa-hand-point-right"></i> Important Links</p>
{% assign links_data = site.data.links %}
<ul class="side-news">
  {% for mem in links_data %}
    {% if mem.page == 'faculty_position' %}
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
<h2 id="subheading" style="color: #6e0d10;">Eligibility requirements</h2>

   
   
<h4>(a) Assistant Professor Grade II</h4>
<ol>
<li style="text-align: justify;">Ph.D. with first division in the preceding degree or equivalent in the appropriate discipline, with good
academic record throughout.</li>
<li style="text-align: justify;">Applicants having no or less than 3 years Post-Ph.D. experience will be considered for a contractual
appointment of duration less than or equal to 3 years which can be converted into regular position
upon review of performance during or after contract period.</li>
</ol>
<h4>(b) Assistant Professor Grade I</h4>
<ol>
<li style="text-align: justify;">Ph.D. with first division in the preceding degree or equivalent in the appropriate discipline, with good
academic record throughout.</li>
<li style="text-align: justify;">At least a minimum of 3 years teaching, research and/or industrial experience, from the date of
defending the Ph.D. Thesis (experience while pursuing Ph.D. Program is not be included).</li>
</ol>
   
<h4>(c) Associate Professor</h4>
<ol>
<li style="text-align: justify;">Ph.D. with first division in the preceding degree or equivalent in the appropriate discipline, with good
academic record throughout.</li>
<li style="text-align: justify;">At least a minimum of 6 years teaching, research and/or industrial experience, of which at least 3
years should be at the level of Assistant Professor in a reputed Institute or University or equivalent.
</li>
</ol>
<h4>(d) Professor</h4>
<ol>
<li style="text-align: justify;">Ph.D. with first division in the preceding degree or equivalent in the appropriate discipline, with good
academic record throughout.</li>
<li style="text-align: justify;">At least a minimum of 10 years teaching, research and/or industrial experience, of which at least 4
years should be at the level of Associate Professor in IITs, IISc, IIMs, NITIE Mumbai and IISERs or at
an
equivalent level.</li>
</ol>
   
</div>
</div>

<style>
  /* page-banner image */
.background-about{
  background-image: url("{{ site.baseurl }}/images/FacultyPositions.png");
}
</style>
