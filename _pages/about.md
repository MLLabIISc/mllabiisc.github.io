---
layout: about
title: about
permalink: /
subtitle: <a href='https://www.csa.iisc.ac.in/'>Department of Computer Science and Automation,</a> <a href='https://www.iisc.ac.in/'>Indian Institute of Science,</a> <a href='https://en.wikipedia.org/wiki/Bengaluru'>Bangalore.</a>

profile:
  align: right
  image: gallery/labpic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Room No. 251</p>
    <p>Dept. of Computer Science and Automation</p>
    <p>Indian Institute of Science</p>
    <p>Bangalore, India (<a href="https://goo.gl/maps/9nz5pNfZmJu7NSbF7">Maps</a>)</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

The Machine Learning Lab of the Department of Computer Science and Automation at the Indian Institute of Science was setup to study theoretical and applied aspects of machine learning in various domains. Our aim is to explore and understand artificial intelligence, including machine learning, deep learning, numerical optimization, and natural language processing and to perform research on their applicability in various domains.

To this end, we develop numerous machine learning algorithms and tools for complex real world applications. We want to be able to build AI enabled systems that solve problems for social good. We are actively pursuing applications in the area of computational biology, object detection in images, video segmentation and summarization, detection of rare topics in text documents, statistical modeling of computer systems.

We are located in Bangalore which is the silicon valley of India. We are also collaborating with industries as well as other universities for cutting edge research.

We are unable to respond to part-time, short-term (less than one year) and/or remote student mentorship requests. For open positions, see the [opportunities]({{ '/opportunities/' | relative_url }}) page.

#### Our collaborators

<div class="row align-items-center justify-content-center text-center mt-3 mb-3">
  {% assign collaborators = "msrlogo.gif:Microsoft Research,linkedin.png:LinkedIn,microsoft.png:Microsoft,tatamotors.png:Tata Motors,atimotors.png:Ati Motors" | split: "," %}
  {% for c in collaborators %}
    {% assign parts = c | split: ":" %}
    <div class="col-4 col-md mb-3">
      <img src="{{ parts[0] | prepend: '/assets/img/logos/' | relative_url }}" alt="{{ parts[1] }}" title="{{ parts[1] }}" class="img-fluid" style="max-height: 60px">
    </div>
  {% endfor %}
</div>
