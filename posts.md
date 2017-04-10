---
layout: default
title: Posts
description: Posts list
categories:
---

<ul>
  <div  class="post_list">
    {% for post in site.posts %}
      <a href="{{ post.url }}">
        <li class="waves post_list_item">
          <h1>{{forloop.index}}. {{ post.title }}</h1>
          <h4>{{ post.date | date: '%Y-%m-%d' }}</h4>
          <h4>{{post.description}}</h4>
          <!-- <p><i>{{ post.excerpt }}</i></p> -->
        </li>
      </a>
    {% endfor %}
  </div>
  <a href="http://www.jianshu.com/u/cfb41c60f60c" target="_blank">
  	<li class="waves post_list_item">
  		<img style ="box-shadow: 0 0 0 0" src="http://cdn-qn0.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png">
      <h1>More On JianShu</h1>
  	</li>
  </a>
</ul>
