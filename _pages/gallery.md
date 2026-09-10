---
layout: page
permalink: /gallery/
title: gallery
description: Talks, events, and moments from the lab.
nav: true
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

## Events & the lab

<div class="row">
  {% assign photos = "labpic.jpg:The ML Lab,lab1.jpg:The ML Lab,main-building.jpg:IISc main building,fateworkshop.jpg:FATE ML workshop,deeptech.jpg:Deep Tech Entrepreneurship,deeptechvol.jpg:Deep Tech Entrepreneurship volunteers" | split: "," %}
  {% for photo in photos %}
    {% assign parts = photo | split: ":" %}
    {% assign path = parts[0] | prepend: "assets/img/gallery/" %}
    {% assign caption = parts[1] %}
    <div class="col-sm-6 mt-3">
      {% include figure.liquid loading="lazy" path=path class="img-fluid rounded z-depth-1" alt=caption %}
      <div class="caption">{{ caption }}</div>
    </div>
  {% endfor %}
</div>

## Informals

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3">
    {% include figure.liquid loading="lazy" path="assets/img/gallery/chiruhbd.jpg" class="img-fluid rounded z-depth-1" alt="Lab celebration" %}
  </div>
</div>
