---
layout: default
title: Articles
description: Articles list
categories: 
---

<ul>
  {% for post in site.posts %}
    <li class="post_list_item">
      <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
      <h4>{{ post.date | date: '%B %d, %Y' }}</h4>
      <i>{{ post.excerpt }}</i>
    </li>
  {% endfor %}
</ul>

