---
layout: abt
title: Administration
link: HOME / ABOUT
des: la ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit ulla ipsum, et pharetra libero rh.
permalink: /governance/
---
   

<div class="administration-section">
<h1 id="getintouch">Administration</h1>
<br>
<div class="administration">
<div class="administration-category">
{% assign categories = site.data.administration | group_by: 'position' %}
<div class="row categories">
{% for category in categories %}
<div class="col-sm-12 col-md-6 categoriesCol">
<h2 id="categoryName">{{ category.name }}</h2>
<ul>
{% for item in category.items %}
<li><a href="{{ item.link }}" target="_blank" id="links">{{ item.entry }}</a></li>
{% endfor %}
</ul>
</div>
{% endfor %}
</div>
</div>
</div>
</div>
<br>

<style>
      /* page-banner image */
  .background-about{
    background-image: url("{{ site.baseurl }}/images/Governance.png");
  }
  
  </style>
  

