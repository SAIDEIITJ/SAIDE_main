---
layout: abt
title: FAQs
link: HOME / ABOUT
des: Interdum adipiscing gra ante nunc ac adipiscing gravida odio porttitor sem non mi .
permalink: /faq/
---

<div class="contactbox">
<div class="faq-container">
<div class="category">
<ul>
{% assign categories = site.data.faqs | map: 'category' | uniq %}
{% for category in categories %}
<li><a href="#{{ category | slugify }}">{{ category }} FAQs</a></li>
{% endfor %}
</ul>
</div>
<div class="faqs">
{% for category in categories %}
<section id="{{ category | slugify }}-faqs">
<h2 id="faqtitle">{{ category }} FAQs</h2>
{% assign faqs = site.data.faqs | where: 'category', category %}
{% for faq in faqs %}
{% if faq.visible=='Yes' %}
<div class="faq-item">
<h3>{{ faq.question }}<span class="downicon">▼</span></h3>
<div class="answer" style="display:none;">
<p>{{ faq.answer }}</p>
</div>
</div>
{% endif %}
{% endfor %}
</section>
{% endfor %}
</div>
</div>
<br>
<br>
</div>



<style>
    /* page-banner image */
  .background-about {
    background-image: url("{{ site.baseurl }}/images/FAQs.png");
  }
</style>

<script  src="{{ site.baseurl }}/js/pages/faqs.js">
</script>
