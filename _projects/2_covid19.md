---
layout: page
title: COVID-19 projects from CSA
description: Lockdown policy modelling, CovidWATCH, and COVID-SWIFT.
importance: 2
related_publications: false
---

### Lockdown and other policies for containing COVID-19 in small worlds

**Authors:** V. Vinay (Ati Motors) and C. Bhattacharyya (CSA, IISc) — vinay@atimotors.com, chiru@iisc.ac.in

Our aim in this project is to understand what policies can be implemented post lockdown. Small-world models are useful tools in network epidemiology. A city consists of many wards; we model such cities as a Multi-Lattice Small World (MLSW) network where each ward is modelled as a 2D lattice and nearby wards are connected together. We simulate several interventions on MLSW and study their effectiveness in suppressing COVID-19 on such networks. Our study highlights three findings:

1. Usual contact tracing involves tracing the immediate contacts. If that can be enhanced to Tracing the Contacts and their Contacts followed by Sealing (TC2S), it would have a huge impact.
2. A restricted work week, such as a 2-day work week, followed by a lockdown can be as effective as a lockdown.
3. A policy such as ward-wise sealing and opening depending on the infection levels in the ward not only has the lowest attack rate (the percentage of total population infected), but also requires the shortest time for the epidemic to end.

A preliminary draft is available [here](https://drive.google.com/file/d/14UltuxOJE_CvM9qCvGXW_oj6puY6ame5/view).
Press coverage: [Hindustan Times](https://www.hindustantimes.com/mumbai-news/sealing-areas-with-higher-covid-19-cases-or-2-day-work-week-with-lockdown-can-contain-virus-shorten-epidemic-duration-analysis/story-4XQBmv4KaJ4yBoZmgEI51I.html).

### CovidWATCH — a rapid COVID-19 monitoring tool for regions with low smartphone penetration

**Lead developers:** Niharika Venkatesh (AIfoundry) and Nabanita Paul (IISc). **Advised by:** Arvind Saraf (AIfoundry) and Chiranjib Bhattacharyya (IISc). A collaboration between IISc and AI Foundry, Bengaluru.

CovidWATCH offers a basic screening test based on the ICMR strategy and a symptom tracker to record daily symptoms, via a multi-language WhatsApp chatbot. Built for people with little to no technological acumen, it also allows a single volunteer to take the test on behalf of multiple nearby people. The data is shared with the authorities as a dashboard, filterable by location, symptoms, age, etc. for follow-ups. The tool was deployed in a ward under Pune Municipality and helped authorities survey close to 3000 people in about 2 weeks. A slide deck is available [here](https://drive.google.com/open?id=1G6fbV0fzH9Xo9_y2zdZqnmEQRgpoJ8bc).

### COVID-SWIFT (now XraySetu)

See the [COVID-SWIFT project page]({{ '/projects/1_covid-swift/' | relative_url }}).
