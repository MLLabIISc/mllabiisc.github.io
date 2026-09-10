---
layout: page
title: DSLR
description: Dynamic to Static LiDAR Scan Reconstruction using an adversarially trained autoencoder (AAAI 2021).
importance: 4
github: https://github.com/dslrproject/dslr
related_publications: false
---

We develop DSLR, a deep generative model which learns a mapping between a dynamic scan and its static counterpart through an adversarially trained autoencoder. Our model yields the first solution for dynamic-to-static translation (DST) on LiDAR that generates static scans without using explicit segmentation labels. DSLR cannot always be applied to real-world data due to the lack of paired dynamic-static scans. Using unsupervised domain adaptation, we propose DSLR-UDA for transfer to real-world data and experimentally show that it performs well in real-world settings. Additionally, if segmentation information is available, we extend DSLR to DSLR-Seg to further improve the reconstruction quality.

DSLR gives state-of-the-art performance on simulated and real-world datasets and also shows at least a 4× improvement. We show that DSLR, unlike the existing baselines, is a practically viable model with reconstruction quality within the tolerable limits for tasks pertaining to autonomous navigation, like SLAM in dynamic environments.

**Team:** Prashant Kumar, Sabyasachi Sahoo, and others.

[Code and dataset](https://github.com/dslrproject/dslr) · [Project page](https://dslrproject.github.io/dslr/)
