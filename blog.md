---
layout: default
title: Blog
---

# Blog Posts

Share thoughts, technical articles, and updates.

<div class="blog-search">
    <input type="text" id="blog-search" placeholder="Search posts...">
</div>

<ul class="blog-list">
{% for post in site.posts %}
    <li class="blog-item">
        <h2 class="blog-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <div class="blog-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%B %d, %Y" }}
            </time>
            {% if post.categories.size > 0 %}
                • Categories: {{ post.categories | join: ', ' }}
            {% endif %}
        </div>
        <div class="blog-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 50 }}
        </div>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </li>
{% endfor %}
</ul>

## Categories
{% assign categories = site.posts | map: 'categories' | uniq %}
<ul>
{% for category in categories %}
    <li><a href="/blog/category/{{ category | slugify }}">{{ category }}</a></li>
{% endfor %}
</ul>