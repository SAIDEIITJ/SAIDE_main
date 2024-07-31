---
layout: people
title: Students
link: HOME / PEOPLE
des: la ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit ulla ipsum, et pharetra libero rh.
permalink: /students/
---
	
<style>
    .background-about{
      background-image: url("{{ site.baseurl }}/images/Students.png");
    }
</style>

<div class="search-container student-section">
<input type="text" id="search-bar" placeholder="Search by Research Area ...">
</div>
<div class="filter-indicators" style="margin-left: 15%;">
<div class="filter-indicator"  data-filter="Ph.D.">
<div class="checkbox"></div>
<span>Ph.D</span>
</div>
<div class="filter-indicator" data-filter="MS(R)">
<div class="checkbox"></div>
<span>MS (by Research)</span>
</div>
<div class="filter-indicator" data-filter="M.Tech.">
<div class="checkbox"></div>
<span>M.Tech.</span>
</div>
</div>
<br><br>

<div class="row" id="teamMembers" class = "student-div">
{% assign sorted_members = site.data.students | sort: 'name' %}
{% for member in sorted_members %}
{% if member.hidden == 0  and member.alumnus == 0 %}
<div class="col-lg-6 col-md-6 col-sm-12 member-card studentCard" data-position="{{ member.program }}" data-name="{{ member.name }}" data-research-area="{{member.researchArea}}">
<div class="member-info">
<div class="row student-row">
<div class="col-nd-1">
<img src="{{ member.profilePhoto }}" class="member-img std" alt="{{ member.name }}" />
</div>
<div class="col-md-11">
<div class="member-details studentdetails">
<h4 id="fac-title">{{ member.name }}</h4>
<p class="member-position">Program: {{ member.program }}</p>
<p><strong>Email:</strong> {{ member.email }}</p>
<!-- <p><strong>Phone:</strong> {{ member.phone }}</p> -->
<p><strong>Supervisor(s):</strong> {{member.supervisor}}</p>
<p class="member-bio"><strong>Research Area:</strong> {{ member.researchArea }}</p>
</div>
</div>
</div>
  
</div>
</div>
{% endif %}
{% endfor %}
</div>

<script src="{{ site.baseurl }}/js/pages/student.js">
</script>

