---
layout: page
title: "DSLR: Dynamic to Static LiDAR Scan Reconstruction Using Adversarially Trained Autoencoder"
importance: 4
related_publications: false
---
<p>We develop DSLR, a deep generative model that learns a mapping from a dynamic scan to its static counterpart through an adversarially trained autoencoder. Our model yields the first solution for DST on LiDAR that generates static scans without using explicit segmentation labels. DSLR cannot always be applied to real-world data due to the lack of paired dynamic–static scans. Using unsupervised domain adaptation, we propose DSLR-UDA for transfer to real-world data and experimentally show that it performs well in real-world settings. Additionally, if segmentation information is available, we extend DSLR to DSLR-Seg to further improve the reconstruction quality. DSLR gives state-of-the-art performance on simulated and real-world datasets and also shows at least a 4× improvement. We show that DSLR, unlike the existing baselines, is a practically viable model, with reconstruction quality within the tolerable limits for tasks pertaining to autonomous navigation, such as SLAM in dynamic environments.</p>

<p><em>— Prashant Kumar, S. Sahoo, and others</em></p>

<p><strong><a href="https://github.com/dslrproject/dslr">Code and Dataset</a></strong></p>

<p><strong><a href="https://dslrproject.github.io/dslr/">Read more…</a></strong></p>
