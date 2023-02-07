---
title: Categories
permalink: /categories/
---

<ul>
  {% for category in site.categories %}
    <li>
      <h2><a href="{{ category.url}}">{{ category.category }}</a></h2>
      <p>{{ category.content | markdownify }}</p>
    </li>
  {% endfor %}
<ul>
