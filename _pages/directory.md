---
layout: people
title: Directory
link: HOME / PEOPLE
des: la ipsum, et pharetra libero rhoncus ut. Phasellus rutrum cursus velit ulla ipsum, et pharetra libero rh.
permalink: /directory/
---

<div class="search-container direct student-section">
<input type="text" id="search-bar" placeholder="Search by name ..." oninput="searchEntries()">
</div>

<br>
<div class="alphabet-links">
<a href="#" class="alphabet-link">A</a>
<a href="#" class="alphabet-link">B</a>
<a href="#" class="alphabet-link">C</a>
<a href="#" class="alphabet-link">D</a>
<a href="#" class="alphabet-link">E</a>
<a href="#" class="alphabet-link">F</a>
<a href="#" class="alphabet-link">G</a>
<a href="#" class="alphabet-link">H</a>
<a href="#" class="alphabet-link">I</a>
<a href="#" class="alphabet-link">J</a>
<a href="#" class="alphabet-link">K</a>
<a href="#" class="alphabet-link">L</a>
<a href="#" class="alphabet-link">M</a>
<a href="#" class="alphabet-link">N</a>
<a href="#" class="alphabet-link">O</a>
<a href="#" class="alphabet-link">P</a>
<a href="#" class="alphabet-link">Q</a>
<a href="#" class="alphabet-link">R</a>
<a href="#" class="alphabet-link">S</a>
<a href="#" class="alphabet-link">T</a>
<a href="#" class="alphabet-link">U</a>
<a href="#" class="alphabet-link">V</a>
<a href="#" class="alphabet-link">W</a>
<a href="#" class="alphabet-link">X</a>
<a href="#" class="alphabet-link">Y</a>
<a href="#" class="alphabet-link">Z</a>
</div>
<br><br><br>

<table id="entry-table" style="background-color: #cae9ff22;">
<thead>
<tr style="background-color: rgb(114, 30, 30);">
<th style="color: rgb(255, 255, 255);">Name</th>
<!-- <th style="color: rgb(255, 255, 255);">Phone</th> -->
<th style="color: rgb(255, 255, 255);">Email</th>
<th style="color: rgb(255, 255, 255);">Office Number</th>
</tr>
</thead>
<tbody id="entries">
{% assign faculty_data = site.data.faculty_profiles | sort: 'name'%}
{% for member in faculty_data %}
{% if member.hidden != 1 %}
<tr class="member-row">
<td class="name">{{ member.name }}</td>
<!-- <td class="ph">{{ member.phone }}</td> -->
<td class="em">{{ member.emailAddress }}</td>
<td class="office">{{ member.office }}</td>
</tr>
{% endif %}
{% endfor %}
</tbody>
</table>

<div class="pagination-container">
<ul id="pagination" class="pagination"></ul>
</div>

<style>
    /* page-banner image */
    .background-about {
        background-image: url("{{ site.baseurl }}/images/Directory.png");
    }
</style>


<script src="{{ site.baseurl }}/js/pages/directory.js">
</script>

