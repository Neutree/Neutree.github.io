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
	      <a href="{{ post.url }}">{{ post.title }}</a>
	      {{ post.excerpt }}
	    </li>
	{% else %}
		<p>--{{post.categories}}--</p>
	{% endif %}
  {% endfor %}
</ul>