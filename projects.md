---
layout: default
title: Projects
description: Projects list
categories:
---

<ul class="post_list">
  {% for post in site.posts %}
  	{% for category in post.categories %}
		{% if category == 'projects' %}
			<a href="{{ post.url }}">
			    <li class=" waves post_list_item">
			      <h1>{{ post.title }}</h1>
			      <h4>{{ post.date | date: '%Y-%m-%d' }}</h4>
            <h4>{{post.description}}</h4>
			      <!-- <p><i>{{ post.excerpt }}</i></p> -->
			    </li>
			</a>
		{% endif %}
	{% endfor %}
  {% endfor %}
</ul>
