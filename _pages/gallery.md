---
layout: page
permalink: /gallery/
title: Gallery
description: Talks, events, and moments from the lab.
nav: false
nav_order: 8
---

## Talks

**Amazon AI Conclave 2018** — Academia view on AI by Prof. Chiranjib Bhattacharyya

<div class="row mt-3 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="https://www.youtube.com/embed/8D7hXDVmzKU" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

**NASSCOM Product Conclave 2016** — Speaking at the DeepTech Summit, Prof. Chiranjib Bhattacharyya

<div class="row mt-3 mb-4">
  <div class="col-sm mt-3 mt-md-0">
    {% include video.liquid path="https://www.youtube.com/embed/gLtfhBa-Vo4" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Events & the Lab

<!-- Years marked (placeholder) are not confirmed yet. -->
<div class="row">
  {% assign photos = "fateworkshop.jpg:FATE ML workshop, 2020|chiruhbd.jpg:Lab celebration, 2020 (placeholder)|deeptech.jpg:Deep Tech Entrepreneurship, 2019|deeptechvol.jpg:Deep Tech Entrepreneurship volunteers, 2019|lab1.jpg:The ML Lab, 2019 (placeholder)|labpic.jpg:The ML Lab, 2018 (placeholder)" | split: "|" %}
  {% for photo in photos %}
    {% assign parts = photo | split: ":" %}
    {% assign path = parts[0] | prepend: "assets/img/gallery/" %}
    {% assign caption = parts[1] | remove: " (placeholder)" %}
    <div class="col-sm-6 mt-3">
      {% include figure.liquid loading="lazy" path=path class="img-fluid rounded z-depth-1" alt=caption %}
      <div class="caption">{{ caption }}</div>
    </div>
  {% endfor %}
</div>
