---
layout: default
title: Home
---

# Hello World!

Welcome to NSIE Team's official website.

## Version
0.0.2

## Updates
- Redesigned with Jekyll for better maintainability
- Added blog system
- Added tools section
- Improved responsive design

## Recent Posts
{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## Features
- **Blog**: Share thoughts and technical articles
- **Tools**: Useful online tools for daily work
- **About**: Learn about NSIE Team
- **Contact**: Get in touch with us

---

*Do One Thing And Do It Well*