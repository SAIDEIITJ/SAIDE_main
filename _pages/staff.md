---
layout: people
title: Staff
link: HOME / PEOPLE
des: la ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit ulla ipsum, et pharetra libero rh.
permalink: /staff/
---
	
<style>
    .background-about{
      background-image: url("{{ site.baseurl }}/images/Staff.png");
    }
</style>

<div class="filter-indicators" style="margin-left: 15%;">
<div class="filter-indicator"  data-filter="Scientific Staff">
<div class="checkbox"></div>
<span>Scientific</span>
</div>
<div class="filter-indicator"  data-filter="Technical Staff">
<div class="checkbox"></div>
<span>Technical</span>
</div>
<div class="filter-indicator"  data-filter="Administrative Staff">
<div class="checkbox"></div>
<span>Administrative</span>
</div>
</div>
<br>
<br>
<div class="row" id="teamMembers">

{% assign sorted_members = site.data.team | sort: "year" %}
{% for member in sorted_members %}
{% if member.display == 1 and member.staff == 1 %}

<div class="col-lg-6 col-md-6 col-sm-12 member-card studentCard" data-position="{{ member.subfaculty }}" data-name="{{ member.name }}">
<div class="member-info">
<div class="row" style="display: flex; flex-direction: row;">
<div class="col-nd-1">
<img src="{{ member.image }}" class="member-img std" alt="{{ member.name }}" />
</div>
<div class="col-md-11">
<div class="member-details studentdetails">
<h4 id="fac-title">{{ member.name }}</h4>
<p class="member-position">{{ member.position }}</p>
<p><strong>Department:</strong> {{ member.affiliation }}</p>
        
<p><strong>Email:</strong> {{ member.email }}</p>
<p><strong>Phone:</strong> {{ member.phone }}</p>

{% if member.bio1 != "" %}
<p class="member-bio"><strong>Research Area:</strong> {{ member.bio1 }}</p>
{% endif %}
</div>
</div>
</div>     
</div>
</div>
{% endif %}
{% endfor %}
</div>

<script src="{{ site.baseurl }}/js/pages/staff.js">
</script>