---
layout: default
title: Articles
description: Articles list
categories: 
---

<ul>
  {% for post in site.posts %}
    <li class="post_list_item">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <h4>{{ post.date | date: '%B %d, %Y' }}</h4>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>

