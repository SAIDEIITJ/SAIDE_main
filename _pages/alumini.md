---
layout: people
title: Alumini
link: HOME / PEOPLE
des: la ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit ulla ipsum, et pharetra libero rh.
permalink: /alumini/
---

<style>
    .background-about{
      background-image: url("{{ site.baseurl }}/images/Alumini.png");
    }
</style>	

<div class="search-container">
<input type="text" id="search-bar" placeholder="Search by Research Area ...">
<div class="dropdown2">
<button class="dropbtn">Search
</button>
</div>
</div>
<div class="filter-indicators" style="margin-left: 15%;">
<div class="filter-indicator"  data-filter="Ph.D">
<div class="checkbox"></div>
<span>Ph.D</span>
</div>
<div class="filter-indicator" data-filter="MS (by Research)">
<div class="checkbox"></div>
<span>MS (by Research)</span>
</div>
<div class="filter-indicator" data-filter="M.Tech.">
<div class="checkbox"></div>
<span>M.Tech.</span>
</div>
</div>
<br><br>
<div class="row" id="teamMembers">
{% assign sorted_members = site.data.team | sort: "year" %}
{% for member in sorted_members %}
{% if member.display == 1 and member.alumni == 1 %}
<div class="col-lg-6 col-md-6 col-sm-12 member-card studentCard" data-position="{{ member.enrolled }}" data-name="{{ member.name }}" data-research-area="{{member.researchArea}}">
<div class="member-info">
<div class="row" style="display: flex; flex-direction: row;">
<div class="col-nd-1">
<img src="{{ member.image }}" class="member-img std" alt="{{ member.name }}" />
</div>
            
<div class="col-md-11">
<div class="member-details studentdetails">
<h4 id="fac-title">{{ member.name }}</h4>
    
<p class="member-position">Program: {{ member.enrolled }}</p>
<p><strong>Email:</strong> {{ member.email }}</p>
<p><strong>Phone:</strong> {{ member.phone }}</p>
<p><strong>Supervisor(s):</strong> {{member.faculties}}</p>
<p class="member-bio"><strong>Research Area:</strong> {{ member.researchArea }}</p>
</div>
</div>
</div>     
</div>
</div>
{% endif %}
{% endfor %}
</div>

<script src="{{ site.baseurl }}/js/student.js">
</script>



