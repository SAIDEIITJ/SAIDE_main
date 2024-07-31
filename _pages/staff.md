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
<div class="filter-indicator staffFilter"  data-filter="Scientific Staff">
<div class="checkbox"></div>
<span>Scientific</span>
</div>
<div class="filter-indicator staffFilter"  data-filter="Technical Staff">
<div class="checkbox"></div>
<span>Technical</span>
</div>
<div class="filter-indicator staffFilter"  data-filter="Administrative Staff">
<div class="checkbox"></div>
<span>Administrative</span>
</div>
</div>
<br>
<br>
<div class="row" id="teamMembers" class = "student-div">
{% assign faculty_members = site.data.faculty_profiles %}
{% for member in faculty_members %}
{% assign show_member = false %}
{% if member.hidden != 1 %}
{% if member.type == 'Administrative Staff' or member.type == 'Scientific Staff' or member.type == 'Technical Staff' %}
{% assign show_member = true %}
{% endif %}
{% endif %}
{% if show_member %}
<div class="col-lg-6 col-md-6 col-sm-12 member-card studentCard" data-position="{{ member.type }}" data-name="{{ member.name }}">
<div class="member-info">
<div class="row student-row">
<div class="col-nd-1">
<img src="{{ member.profilePic }}" class="member-img std" alt="{{ member.name }}" />
</div>
<div class="col-md-11">
<div class="member-details studentdetails">
<h4 id="fac-title">{{ member.name }}</h4>
<p class="member-position">{{ member.position }}</p>
<p><strong>Department:</strong> {{ member.department }}</p>
<p><strong>Email:</strong> {{ member.emailAddress }}</p>
<p><strong>Phone:</strong> {{ member.office }}</p>
{% assign researchArea1 = member.researchArea1 %}
{% assign researchArea2 = member.researchArea2 %}
{% assign researchArea3 = member.researchArea3 %}
{% assign researchArea4 = member.researchArea4 %}
{% assign research_areas = '' %}
{% if researchArea1 %}
{% assign research_areas = research_areas | append: researchArea1 %}
{% endif %}
{% if researchArea2 %}
{% if research_areas != '' %}
{% assign research_areas = research_areas | append: ', ' %}
{% endif %}
{% assign research_areas = research_areas | append: researchArea2 %}
{% endif %}
{% if researchArea3 %}
{% if research_areas != '' %}
{% assign research_areas = research_areas | append: ', ' %}
{% endif %}
{% assign research_areas = research_areas | append: researchArea3 %}
{% endif %}
{% if researchArea4 %}
{% if research_areas != '' %}
{% assign research_areas = research_areas | append: ', ' %}
{% endif %}
{% assign research_areas = research_areas | append: researchArea4 %}
{% endif %}
{% if research_areas != '' %}
<p class="member-bio"><strong>Research Area:</strong> {{ research_areas }}</p>
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
