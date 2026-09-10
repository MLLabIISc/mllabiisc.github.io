---
layout: page
permalink: /people/
title: people
description: members and alumni of the Machine Learning Lab
nav: true
nav_order: 3
---

<!-- Member data lives in _data/people.yml -->

<style>
  .people-card img { aspect-ratio: 1 / 1; object-fit: cover; width: 100%; }
  .people-card figure { margin-bottom: 0.5rem; }
</style>

<div class="people">
  <p>
    Jump to:
    <a href="#phd">PhD Students</a>, <a href="#mtech_research">M.Tech (Research) Students</a>, <a href="#mtech">M.Tech Students</a>,
    <a href="#project_associates">Project Associates</a>, <a href="#alumni">Alumni</a>.
  </p>

{% assign groups = "faculty:Faculty|phd:PhD Students|mtech_research:M.Tech (Research) Students|mtech:M.Tech Students|project_associates:Project Associates|alumni_phd:Alumni (PhD)" | split: "|" %}
{% for group in groups %}
{% assign g = group | split: ":" %}
{% assign key = g[0] %}
{% assign members = site.data.people[key] %}
{% if g[0] == "alumni_phd" %}<a id="alumni"></a>{% endif %}

  <h2 id="{{ g[0] }}" class="mt-4">{{ g[1] }}</h2>
  <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4">
    {% for p in members %}
      <div class="col mb-4 people-card">
        {% if p.photo %}
          {% assign photo = p.photo | prepend: "assets/img/people/" %}
        {% else %}
          {% assign photo = "assets/img/people/bio-photo.jpg" %}
        {% endif %}
        {% include figure.liquid loading="lazy" path=photo class="img-fluid rounded z-depth-1" sizes="200px" alt=p.name %}
        <h6 class="mb-1">
          {% if p.url %}<a href="{{ p.url }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}
          {% if p.linkedin %}<a href="{{ p.linkedin }}" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>{% endif %}
        </h6>
        <p class="small mb-1">{{ p.role }}</p>
        {% if p.email %}<p class="small mb-1"><a href="mailto:{{ p.email }}">{{ p.email }}</a></p>{% endif %}
        {% for d in p.details %}<p class="small text-muted mb-0">{{ d }}</p>{% endfor %}
      </div>
    {% endfor %}
  </div>
{% endfor %}

{% assign lists = "alumni_masters_research:Alumni (Masters by Research)|alumni_masters:Alumni (Masters)|alumni_project_associates:Alumni (Project Associates)" | split: "|" %}
{% for list in lists %}
{% assign l = list | split: ":" %}

  <h2 id="{{ l[0] }}" class="mt-4">{{ l[1] }}</h2>
  <p class="small text-muted">Year mentioned is the joining year.</p>
  <ul class="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3">
    {% assign key = l[0] %}
    {% for a in site.data.people[key] %}
      <li class="col">{% if a.url %}<a href="{{ a.url }}">{{ a.name }}</a>{% else %}{{ a.name }}{% endif %}, {{ a.year }}</li>
    {% endfor %}
  </ul>
{% endfor %}
</div>
