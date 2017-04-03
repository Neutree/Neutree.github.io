---
layout: default
title: Projects
description: Projects list
categories: 
---

<ul>
  {% for post in site.posts %}
    {% if post.categories == 'projects' %}
	    <li class="post_list_item">
	      <a href="{{ post.url }}">{{ post.title }}</a>
	      {{ post.excerpt }}
	    </li>
	{% else %}
		<p>--{{post.categories}}--</p>
	{% endif %}
  {% endfor %}
</ul>