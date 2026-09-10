---
layout: page
title: COVID-SWIFT / XraySetu
description: WhatsApp-based AI diagnosis of COVID-19 and 14 other lung abnormalities from chest X-rays.
importance: 1
related_publications: false
---

COVID-SWIFT is a free WhatsApp-based service to provide a swift diagnosis of potential COVID-19 patients by analyzing chest X-ray images. Our state-of-the-art deep learning model generates a report containing predictions for COVID-19 and 14 other lung abnormalities with interpretable semantic markings on the chest X-ray. This can help doctors understand the severity of illness of their patients. We ran a small-scale pilot for 10 months, where interested doctors could, within minutes, receive a machine-generated X-ray report on sending us chest X-rays of suspicious patients. Our model is trained using multi-task learning on multiple chest X-ray datasets by NIH, RSNA, etc.

COVID-SWIFT has now been launched as **XraySetu** in collaboration between IISc, Niramai, and ARTPARK. XraySetu is quick and simple for busy doctors to use: doctors in rural areas can plan early intervention for their patients by simply taking a picture of their X-ray and sending it over WhatsApp. We believe that this could be the model for the future of Indian healthcare, accessible to everyone wherever one might be.

The technical challenges of diagnosing chest X-rays transmitted through smartphones are discussed in our [Scientific Reports paper](https://doi.org/10.1038/s41598-023-44653-y) ([data](https://github.com/mariamma/WACXRDataset)) and the [CheXwhatsApp dataset (CVPR 2025)](https://openaccess.thecvf.com/content/CVPR2025/html/Antony_CheXwhatsApp_A_Dataset_for_Exploring_Challenges_in_the_Diagnosis_of_CVPR_2025_paper.html).

**Team:** Sabyasachi Sahoo (IISc), Rachit Shah (IISc), Siva Teja Kakileti (Niramai), Prateek Katte (Niramai).
**Advised by:** Chiranjib Bhattacharyya (IISc), Geetha Manjunath (Niramai), and Dr. Padmanabha Kamath (KMC).

[Visit XraySetu →](https://www.xraysetu.com/)
