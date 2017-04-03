---
layout: default
title: Projects
description: Projects list
category: 
---

<ul>
  {% for post in site.posts %}
    {% if post.category == 'projects' %}
	    <li class="post_list_item">
	      <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
	      <h4>{{ post.date | date: '%B %d, %Y' }}</h4>
	      <i>{{ post.excerpt }}</i>
	    </li>
	{% endif %}
  {% endfor %}
</ul>
