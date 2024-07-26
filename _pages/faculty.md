---
layout: people
title: Faculty
link: HOME / PEOPLE
des: la ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit ulla ipsum, et pharetra libero rh.
permalink: /faculty/
---

<h3 id ="peopleh3"> <i class="fa-solid fa-magnifying-glass fa-xl" style="color: #ffffff;"></i> Filter By</h3>
<div id="filter-bg">
<br>

<div class="search-container">
<div class="row">
<div class="col-md-12 bar-box">
<input type="text" id="search-bar" placeholder="Search by Research Area ...">
<div class="">
<button class="research-btn">Search by Research Area</button>
</div>
</div>
<div class="col-md-12" style="display: flex;justify-content: center;">
<div class="dropdown2">
<button class="dropbtn">Centers <i class="fa-solid fa-caret-down"></i></button>
<div class="dropdown-content2 centers" data-category="coe">
<div class="coe-checkbox">
<input type="checkbox" id="Centre for Mathematical and Computational Economics" value="Center for Mathematical and Computational Economics">
<label for="Centre for Mathematical and Computational Economics">Center for Mathematical and Computational Economics</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Center for Brain Science and Applications" value="Center for Brain Science and Applications">
<label for="Center for Brain Science and Applications">Center for Brain Science and Applications</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Centre for Excellence in Intelligent Infrastructure" value="Centre of Excellence in Intelligent Infrastructure">
<label for="Centre for Excellence in Intelligent Infrastructure">Center for Excellence in Intelligent Infrastructure</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Centre for Excellence in AI-based Precision Healthcare" value="Centre of Excellence in AI based Precision Healthcare">
<label for="Centre for Excellence in AI-based Precision Healthcare">Center for Excellence in AI-based Precision Healthcare</label>
</div>
</div>
</div>
<div class="dropdown2">
<button class="dropbtn">Themes <i class="fa-solid fa-caret-down"></i></button>
<div class="dropdown-content2 labs">
<div class="coe-checkbox">
  <input type="checkbox" id="aIandEconomics" value="aIandEconomics">
  <label for="aIandEconomics">AI and Economics</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="aIandEthics" value="aIandEthics">
  <label for="aIandEthics">AI and Ethics</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="aIdrivenHealth" value="aIdrivenHealth">
  <label for="aIdrivenHealth">AI-driven Health</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="aIforTechnology" value="aIforTechnology">
  <label for="aIforTechnology">AI for Technology</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="behaviorCognitionBrain" value="behaviorCognitionBrain">
  <label for="behaviorCognitionBrain">Behavior, Cognition, Brain</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="roboticsandIntelligentMachines" value="roboticsandIntelligentMachines">
  <label for="roboticsandIntelligentMachines">Robotics and Intelligent Machines</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="smartCitiesInfraEnvironment" value="smartCitiesInfraEnvironment">
  <label for="smartCitiesInfraEnvironment">Smart Cities, Infrastructure, Environment</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="socialEngineering" value="socialEngineering">
  <label for="socialEngineering">Social Engineering</label>
</div>
<div class="coe-checkbox">
  <input type="checkbox" id="theoreticalAIML" value="theoreticalAIML">
  <label for="theoreticalAIML">Theoretical AI/ML</label>
</div>
<!-- Add checkboxes for Labs and Themes -->
</div>
</div>
<div class="dropdown2">
<button class="dropbtn">Title <i class="fa-solid fa-caret-down"></i></button>
<div class="dropdown-content2 Title" data-category="title">
<div class="coe-checkbox">
<input type="checkbox" id="Assistant Professor" value="Assistant Professor">
<label for="Assistant Professor">Assistant Professor</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Associate Professor" value="Associate Professor">
<label for="Associate Professor">Associate Professor</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Visiting Professor" value="Visiting Professor">
<label for="Visiting Professor">Visiting Professor</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Professor" value="Professor">
<label for="Professor">Professor</label>
</div>
<!-- Add checkboxes for Title -->
</div>
</div>
<div class="dropdown2">
<button class="dropbtn">Type <i class="fa-solid fa-caret-down"></i></button>
<div class="dropdown-content2 Type" data-category="position">
<div class="coe-checkbox">
<input type="checkbox" id="Core Faculty" value="Core">
<label for="Core Faculty">Core Faculty</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Affiliated Faculty" value="Affiliated">
<label for="Affiliated Faculty">Affiliated Faculty</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Adjunct Faculty" value="Adjunct">
<label for="Adjunct Faculty">Adjunct Faculty</label>
</div>
<div class="coe-checkbox">
<input type="checkbox" id="Professor of Practice" value="Professor of Practice">
<label for="Professor of Practice">Professor of Practice</label>
</div>
<!-- Add checkboxes for Labs and Themes -->
</div>
</div>
</div>
</div>
</div>


</div>
<div class="selected-filters">
<div id="selected-filters-container"></div>
</div>

<div class="HOD-details">
{% assign faculty_members = site.data.faculty_profiles %}
{% for member in faculty_members %}
{% if member.hidden != 1  and member.position == 'Head of School' %}
{% assign researchArea1 = member.researchArea1 %}
{% assign researchArea2 = member.researchArea2 %}
{% assign researchArea3 = member.researchArea3 %}
{% assign researchArea4 = member.researchArea4 %}

{% assign research_areas = '' %}

{% if researchArea1 != '' %}
  {% assign research_areas = research_areas | append: researchArea1 %}
{% endif %}
{% if researchArea2 != '' %}
  {% if research_areas != '' %}
    {% assign research_areas = research_areas | append: ', ' %}
  {% endif %}
  {% assign research_areas = research_areas | append: researchArea2 %}
{% endif %}
{% if researchArea3 != '' %}
  {% if research_areas != '' %}
    {% assign research_areas = research_areas | append: ', ' %}
  {% endif %}
  {% assign research_areas = research_areas | append: researchArea3 %}
{% endif %}
{% if researchArea4 != '' %}
  {% if research_areas != '' %}
    {% assign research_areas = research_areas | append: ', ' %}
  {% endif %}
  {% assign research_areas = research_areas | append: researchArea4 %}
{% endif %}
<div class="col-lg-6 col-md-6 col-sm-12 member-cards" data-position="{{ member.type }}" data-name="{{ member.name }}" data-research-area="{{ research_areas }}" data-coe="{{ member.centerIDRP }}" data-title = "{{member.position}}" data-themes='{"aIandEconomics":"{{member.aIandEconomics}}","aIandEthics":"{{member.aIandEthics}}","aIdrivenHealth":"{{member.aIdrivenHealth}}","aIforTechnology":"{{member.aIforTechnology}}","behaviorCognitionBrain":"{{member.behaviorCognitionBrain}}","roboticsandIntelligentMachines":"{{member.roboticsandIntelligentMachines}}","smartCitiesInfraEnvironment":"{{member.smartCitiesInfraEnvironment}}","socialEngineering":"{{member.socialEngineering}}","theoreticalAIML":"{{member.theoreticalAIML}}"}'>
<!-- Member Details -->
<div class="member-info">
<div class="row HOD_row">
<div class="col-md-2 HOD_pic">
<img src="{{ member.profilePic }}" class="member-img HOD" alt="{{ member.name }}" />
</div>
<div class="col-md-10" style="padding-left: 10px;">
<div class="member-details">
<h4 id="fac-title">{{ member.name }}</h4>
<p class="member-position">{{ member.position }}</p>
<p class="member-position">{% if member.centerIDRP  and member.type == 'Core Faculty'%}
<strong>Center:</strong> {{ member.centerIDRP }}
{% else %}
<strong>Department:</strong> {{ member.department }}
{% endif %}
</p>
</div>
<div class="website">
<a href="{{ member.Wwbsite }}" target="_blank" style="border: 0;color:#003049;font-size: 0.9em;">
<i class="fa-regular fa-hand-point-right"></i> Personal Website
</a>
</div>
</div>
</div>
<div class="additional-info">
<p><strong><i class="fa-solid fa-envelope" style="color: rgb(76, 13, 13);"></i> </strong> {{ member.emailAddress }}</p>
<p><strong><i class="fa-solid fa-phone" style="color: rgb(76, 13, 13);"></i></strong>  {{ member.office }}</p>

{% if research_areas != "" %}
<p class="member-bio"><strong>Research Area:</strong> {{ research_areas }}</p>
{% endif %}

</div>
</div>
</div>
{% endif %}
{% endfor %}
</div>

<br>
<div class="row" id="teamMembers">
{% assign faculty_members = site.data.faculty_profiles | where: "hidden", "!= 1" %}
{% assign core_members = site.data.faculty_profiles | where: "type", "Core" %}
{% assign non_core_members = site.data.faculty_profiles | where_exp: "item", "item.type != 'Core'" %}
{% assign core_members_sorted = core_members | sort: "name" %}
{% assign non_core_members_sorted = non_core_members | sort: "name" %}

{% assign all_members_sorted = core_members_sorted | concat: non_core_members_sorted %}

{% for member in all_members_sorted %}
  {% assign researchArea1 = member.researchArea1 %}
  {% assign researchArea2 = member.researchArea2 %}
  {% assign researchArea3 = member.researchArea3 %}
  {% assign researchArea4 = member.researchArea4 %}

  {% assign research_areas = '' %}

  {% if researchArea1 != '' %}
    {% assign research_areas = research_areas | append: researchArea1 %}
  {% endif %}
  {% if researchArea2 != '' %}
    {% if research_areas != '' %}
      {% assign research_areas = research_areas | append: ', ' %}
    {% endif %}
    {% assign research_areas = research_areas | append: researchArea2 %}
  {% endif %}
  {% if researchArea3 != '' %}
    {% if research_areas != '' %}
      {% assign research_areas = research_areas | append: ', ' %}
    {% endif %}
    {% assign research_areas = research_areas | append: researchArea3 %}
  {% endif %}
  {% if researchArea4 != '' %}
    {% if research_areas != '' %}
      {% assign research_areas = research_areas | append: ', ' %}
    {% endif %}
    {% assign research_areas = research_areas | append: researchArea4 %}
  {% endif %}
  
<div class="col-lg-6 col-md-6 col-sm-12 member-card" 
     data-position="{{ member.type }}" 
     data-name="{{ member.name }}" 
     data-research-area="{{ research_areas }}" 
     data-coe="{{ member.centerIDRP }}" 
     data-title="{{ member.position }}" 
     data-themes='{"aIandEconomics":"{{member.aIandEconomics}}","aIandEthics":"{{member.aIandEthics}}","aIdrivenHealth":"{{member.aIdrivenHealth}}","aIforTechnology":"{{member.aIforTechnology}}","behaviorCognitionBrain":"{{member.behaviorCognitionBrain}}","roboticsandIntelligentMachines":"{{member.roboticsandIntelligentMachines}}","smartCitiesInfraEnvironment":"{{member.smartCitiesInfraEnvironment}}","socialEngineering":"{{member.socialEngineering}}","theoreticalAIML":"{{member.theoreticalAIML}}"}'>
<!-- Member Details -->
<div class="member-info">
<div class="row fac_row">
<div class="col-md-2 fac_img">
<img src="{{ member.profilePic }}" class="member-img" id="profile_pic" alt="{{ member.name }}" />
</div>
<div class="col-md-10" style="padding-left: 10px;">
<div class="member-details">
<h4 id="fac-title">{{ member.name }}</h4>
<p class="member-position">{{ member.position }}</p>
<p class="member-position">
{% if member.centerIDRP and member.type == 'Core Faculty' %}
<strong>Center:</strong> {{ member.centerIDRP }}
{% else %}
<strong>Department:</strong> {{ member.department }}
{% endif %}
</p>
</div>
<div class="website">
<a href="{{ member.Wwbsite }}" target="_blank" style="border: 0;color:#003049;font-size: 0.9em;">
<i class="fa-regular fa-hand-point-right"></i> Personal Website
</a>
</div>
</div>
</div>
<div class="additional-info">
<p><strong><i class="fa-solid fa-envelope" style="color: rgb(76, 13, 13);"></i> </strong> {{ member.emailAddress }}</p>
<p><strong><i class="fa-solid fa-phone" style="color: rgb(76, 13, 13);"></i></strong> {{ member.office }}</p>
{% if research_areas != "" %}
<p class="member-bio"><strong>Research Area:</strong> {{ research_areas }}</p>
{% endif %}
</div>
</div>
</div>
{% endfor %}
</div>
<style>
  /* page-banner image */
    .background-about{
      background-image: url("{{ site.baseurl }}/images/Faculty.png");
    }
</style>


<script src="{{ site.baseurl }}/js/pages/faculty.js">
</script>


