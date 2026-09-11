# Review notes: porting content from mllab.csa.iisc.ac.in

This file lists every judgement call made while moving content from the old site (https://mllab.csa.iisc.ac.in) into this al-folio site. It is excluded from the Jekyll build (`exclude:` in `_config.yml`), so it is never published. Tick items off or delete this file when you're done.

Sources: the live old site, scraped on 2026-09-10 (treated as the source of truth), plus the 2020 repo `MLLabIISc/old-webpage` as a cross-check.

---

## Config / structure
- [ ] `projects.output` flipped back to `true` (you had set it to `false`), as you asked.
- [ ] `REVIEW.md` added to `exclude:`. None of your other `_config.yml` edits were touched.
- [x] Menu and page titles are in Title Case (About, People, Research ▾, More ▾, Publications, Projects, News, Awards & Press, Gallery, Opportunities).
- [x] News items: grammar pass ("The paper \"…\" by … was published in …", ICSR award sentence rewritten with a subject, workshop and XraySetu sentences fixed). No facts changed.
- [x] Menu (your request): About · People · Research ▾ (Publications, Projects) · More ▾ (News, Awards & Press, Gallery, ─, Opportunities). The dropdowns are `_pages/research.md` and `_pages/more.md` (al-folio's `dropdown: true` + `children:`); the pages inside them have `nav: false`.
- [x] Blog ("Recent Work") deleted: `_pages/blog.md` removed, plus the blog-only config keys (`blog_name`, `blog_description`, demo `display_tags`/`display_categories`, `posts_in_search`). It had no posts. `related_blog_posts` stays because the news items use al-folio's post layout, which reads it.
- [x] Site search (the "ctrl k" button) turned off: `search_enabled: false`. The search box on the publications page is separate (`bib_search`) and stays.
- [ ] Removed the al-folio demo news (`_news/announcement_*.md`) and `_pages/about_einstein.md`.
- [ ] Not ported: the old footer line "Funding: Ministry of Human Resource Development, Government of India". Add it to `footer_text` if you want it.
- [x] You removed the unused al-folio demo images (`assets/img/1.jpg`–`12.jpg`, `prof_pic.jpg`, `prof_pic_color.png`, `rhino.png`, `template_error.png`, the book cover and the two publication-preview gifs); they went out in commit `a918bc4`. No page, layout or bib entry referenced them.
- [ ] Still in the repo from the template: `assets/html/relativity.html`, `assets/pdf/example_pdf.pdf`. Nothing links to them; delete if you like.
- [ ] Not ported: `aboutwebsite.html` (template credits), the standalone `covid-swift/` microsite (its content is on the COVID-SWIFT project page), and `mini_lecture_series` (only in the 2020 repo).

## Home (`_pages/about.md`)
- [x] Home-page image removed (your request). The address (Room No. 251, CSA, IISc, Bengaluru, plus a Maps link) moved to the contact line under the social icons (`contact_note` in `_config.yml`), after your existing email sentence.
- [x] "Bangalore" → "Bengaluru" (your request, 2026-09-11) in the contact line, home subtitle and intro, Prof. Bhattacharyya's role, and Sourangshu's Yahoo! Labs line. Kept on purpose: "Computer Society of India Bangalore Medal" (the award's official name; your call) and the `bangalore` in The Hindu article link (changing it would break the link).
- [x] Grammar fixes in the intro ("set up", "real-world", "AI-enabled", "areas of", "Silicon Valley", "cutting-edge", serial commas).
- [ ] Added the old site's mentorship-request disclaimer and a link to /opportunities/.
- [x] Collaborators strip: HP AI Research and AMD only, as you asked. Microsoft Research, LinkedIn, Microsoft, Tata Motors and Ati Motors were removed along with their logo files. The HP logo is the official HP SVG from Wikimedia Commons (`assets/img/logos/hp.svg`); there is no separate "HP AI Research" logo, so the lab name appears only as the alt text and tooltip. The AMD logo is also from Wikimedia Commons (`assets/img/logos/amd.svg`).

## News (`_news/`, 32 items)
- [ ] **Items from HTML comments.** The 2021–2022 items were commented out on the old homepage, so they weren't visible there: NeurIPS'22, ICSR'21 award, ICML'21, XraySetu launch, ICRA'21, AIES'21, AAAI'21 (DSLR). I included them. Delete any you had hidden on purpose.
- [ ] **Skipped:** "3 November 2019 (Cancelled!) — Prof. Michael I. Jordan talk".
- [ ] **Approximate dates.** The old site gave only a year or month for these, so I picked a plausible day (usually the decision date):
  - 2026-05-01 ICML'26 NCDF (site: "2026")
  - 2025-09-18 NeurIPS'25 steering and ModHiFi (site: "2025")
  - 2025-02-26 CVPR'25 CheXwhatsApp (site: "2025")
  - 2024-09-25 NeurIPS'24 DisCEdit and ground-state (site: "2024")
  - 2024-09-10 Data & Policy (site: "2024")
  - 2024-04-15 ICALP'24; 2024-01-19 AISTATS'24 (site: "2024")
  - 2023-10-01 Sci. Reports; 2023-01-21 ICLR'23 TVSPrune and DFPC (site: "2023")
  - 2022-09-15 NeurIPS'22 (site: "2022")
  - Nov/Jul/Jun/May/Feb 2021 → the 1st of the month (ICRA'21 set to May 2 so it sorts next to AIES)
  - July 2020 IJCAI and ICML → Jul 2 / Jul 1
  - SODA'20 → 2020-01-08. The site said 9 Jan 2020; I moved it one day so it sorts separately from the FATE item.
- [ ] **Text fixes:** "mohit sharma" → "Mohit Sharma"; "Bhattacharrya" → "Bhattacharyya"; "IIsc" → "IISc"; "NSLIU" → "NLSIU"; "Computer Science of India Society" → "Computer Society of India" (also on the awards page).
- [ ] The Data & Policy news links to the DOI. The 2018 "ICML 2018 RBMs" item is dated January 2018 as on the old site, even though ICML acceptances come later. Confirm the date.

## People (`_data/people.yml`, `_pages/profiles.md`)
- [ ] **Removed a duplicate:** Korlepara Sai Phanindra was listed twice under M.Tech students.
- [ ] **"Priya Sarkaer" → "Priya Sarkar".** Her email `priyasarkar@` supports this.
- [ ] **Khushi's email:** the old page showed `khushimehta@iisc.ac.in` but its mailto pointed to `khushimetha@`. I used `khushimehta@` to match the surname Mehta. Please verify.
- [ ] **"Sahoo Mayajeet Satyaranjan Ranjan"** looks like a doubled "Ranjan". I left it unchanged.
- [x] **Your changes (2026-09-11):** Ravi Raja moved to Alumni (Masters by Research, 2019). Aadirupa Saha added to Alumni (PhD) as "Assistant Professor, Department of Computer Science, University of Illinois Chicago (since Fall 2025)", with PhD advisors Aditya Gopalan and Chiranjib Bhattacharyya. You wrote "Professor at UIC"; her homepage (aadirupa.github.io) says Asst. Professor, so I used that. M.Tech students are now a text list (name, program note, email), with no photos.
- [x] **Your changes:** Chaitanya Murti moved to Alumni (PhD) as "Research Scientist at HP AI Research" (no photo, placeholder shown). Dhruva Kashyap is listed in both Alumni (Masters, 2022) and Alumni (Project Associates, 2025), with the years you gave. Tanay Narshana is in Alumni (Masters, 2020); the lists show the joining year only, so his 2020–2022 range shows as 2020. Pranav K Nayak moved from Project Associate to current M.Tech student. With no current project associates, that section and its "Jump to" link are hidden until someone is added again.
- [x] Awards: added Best M.Tech Student (CSI Bangalore Medal) for Dhruva Kashyap (2024) and Tanay Narshana (2022), both advised by Prof. Chiranjib Bhattacharyya. I left the medal year out of the sentence, because the existing entries are inconsistent about it (e.g. a 2017 medal listed under 2018).
- [ ] **Possibly graduated:** check the M.Tech, M.Tech (Research) and project associate lists against who is still in the lab. Also check the PhD list (e.g. Nabanita, started 2018; Mariamma, started 2019). I did not move anyone to alumni.
- [ ] **Photos:** Achintya Kundu's photo couldn't be downloaded from the old site, so he shows the placeholder. So do everyone the old site gave the generic `bio-photo.jpg`.
- [ ] Minor normalisation: "Bhubaneshwar" → "Bhubaneswar"; "Linkedin" → "LinkedIn"; LinkedIn URLs stripped of `?originalSubdomain=in`; "Anjali Jain Masters, 2014" → "Anjali Jain, 2014"; Shikhar's role no longer links to Carolyn Rose.
- [x] Sayantan Pramanik's photo was replaced by you (2026-09-11); kept as is.
- [ ] Deleted 10 photos from the old site that no current page uses (older members such as akshaj_verma, dhiraj, kavita, pooja, prashant, prateek, rishabh, saby, sweta, vini).

## Publications (`_bibliography/papers.bib`: 139 → 131 entries)
- [ ] **Added**, with sources:
  - `Aithala_2024`: Data & Policy 2024, from Crossref (DOI 10.1017/dap.2024.24)
  - `Antony_2023`: Sci. Reports 2023, from Crossref (DOI 10.1038/s41598-023-44653-y), plus a `code` link to the WACXR dataset repo
  - `Chaudhary2026NCDF`: ICML 2026, from the BibTeX on the NCDF project page. I appended ", {ICML} 2026" to the booktitle and added a `website` link.
  - `Shastry2022ShotFrugal`: arXiv 2210.06971, from the arXiv API. **The old site said 2023, but arXiv v1 is from Oct 2022**, so I used 2022.
  - ⚠️ `Sharma2025Steering` and `Kashyap2025ModHiFi`: **hand-built** from the old site's title and author list, because DBLP was behind a bot-check and OpenReview returned 403. Check the author spellings (e.g. "Pranav K. Nayak") and the booktitle. ModHiFi shows a Spotlight award badge (`award_name`/`award`).
- [ ] **Removed 14 arXiv (CoRR) copies of papers that are also in the bib as published versions:** LevAttention, Random Separating Hyperplane, Predicting Ground State, Rawlsian Fair Adaptation, Learning a Latent Simplex, How Many Pairwise Preferences, RESIDE, Lean 2-layer RBMs, Mining Block I/O Traces, Provable SVD topics, Dynamic Multi-Relational CRP, Mean Field Methods (arXiv 2011 copy of the 2001 JAIR paper), DSLR, and Finding a latent k-simplex (SODA). Standalone preprints were kept.
- [ ] **Fixed** the garbled DBLP title in `DBLP:conf/nips/JethavaMBD12` ("The Lovász ϑ function, SVMs and finding large dense subgraphs").
- [x] **Titles with raw LaTeX fixed (2026-09-11):** the three Lovász papers had `{\textvartheta}`, which the site showed literally; they now use the character ϑ. Two more titles had the same problem and are fixed the same way: SODA 2020 now reads "Finding a latent k-simplex in O*(k·nnz(data)) time via Subset Smoothing" (was `\emph{k}`/`\emph{O}`/`\(\cdot\)`), and AISTATS 2017 reads "…Smoothed Ordered Weighted L₁-norms" (was `L\({}_{\mbox{1}}\)`). Italics on k and O are lost, since plain characters are more reliable than LaTeX here.
- [ ] **Fixed** 15 URLs that contained DBLP's `\_` escapes. They would have produced broken links.
- [x] **DOIs (2026-09-11):** added 14 verified DOIs, so **95 of 131** papers now have one (this counts the two Crossref entries, whose `DOI=` field I renamed to lowercase `doi=` so al-folio shows the DOI button). 7 came from Crossref: exact title and year match for the NeurIPS 2022–2025 proceedings (`10.52202/…`) and the 2001 NIPS MIT Press chapter. The other 7 are arXiv DOIs (`10.48550/arXiv.<id>`). Every DOI was checked against doi.org before being added. The remaining **36** papers come from venues without Crossref DOIs (ICML/PMLR, ICLR/OpenReview, JMLR, AISTATS, pre-2017 IJCAI, older NeurIPS, UAI, USENIX FAST/HotStorage, ICPR 2012). A second, looser Crossref search (≥95% title similarity) found no candidates for any of them. None was invented. They keep their URL links.
- [x] **Tags (reworked 2026-09-11, your request):**
  - **Areas are arXiv categories**: 1 primary plus up to 2 cross-lists per paper, 23 categories in total. Their full names live in `_data/arxiv.yml` and show in the filter and when hovering over a tag. Most common primaries: cs.LG 51, cs.CV 11, cs.IR 11, cs.CL 8, stat.ML 7.
  - **Sub-areas are the lab's lines of work** (24): Latent Polytopes & Topic Models, Efficient Deep Learning, Robust & Chance-Constrained Learning, Kernel & Multiple Kernel Learning, SVM Algorithms, Lovász ϑ & Graph Learning, Clustering Theory, Bayesian Nonparametrics, Probabilistic Inference, Structured Sparsity & Feature Selection, Ranking & Preference Learning, Sequential Decision Making, Kernel Regime & Knowledge Distillation, Fairness in ML, Quantum Machine Learning, Text & Comment Mining, Multilingual & Embedding NLP, Video & Visual Understanding, Autonomous Navigation & Control, Social Robotics, Chest X-ray AI / XraySetu, Computational Biology, Storage & Systems Analytics, AI for Law & Policy.
  - Each paper also has `venue_type` (Conference 93 / Journal 26 / Preprint 11 / Book Chapter 1).
  - I assigned the tags from titles and venues, not from the full text. Please spot-check.
  - ⚠️ **No line of work** for 3 one-off papers, which have only their arXiv categories: BNSynth (cs.LO), Regulating Drones in Restricted Spaces (cs.CR, cs.RO), and the hypersonic vehicle trajectory paper (math.OC, eess.SY). Tell me if you want lines added for them.
  - Other judgement calls: business-process mining, the IaaS SLA paper, thread contention and intrusion detection are under "Storage & Systems Analytics"; Vine copulas is under "Probabilistic Inference"; Lean 2-layer RBMs is under "Efficient Deep Learning"; Subtle Topic Models (software concerns) is under "Text & Comment Mining".
- [x] **Filter:** the Publications page has "Area (arXiv)" / "Line of work" / "Venue" dropdowns (Venue also filters by type), a Reset button and a result count. Matching is exact, it works together with the existing text search, and clicking a tag under a paper selects that filter. Tags appear only on the Publications page, not on the home page's selected papers (a site-wide rule in `_sass/_base.scss` hides them elsewhere). Files: `_includes/bib_filter.liquid`, `assets/js/bibfilter.js`, a tag row in `_layouts/bib.liquid`, and the tag fields hidden from displayed BibTeX in `_config.yml`.
- [x] **Venue badges added to the 23 papers that had none** (e.g. CIKM, JCIM, HotMobile, TPAMI, TALLIP, CICLing, FAST, NAR, ICDAR, TNN, and ICML for two 2007 papers). The 2004 Tamil handwriting paper was wrongly badged "NeurIPS" and is now ICONIP. The Lovász ϑ NeurIPS 2012 title, which an earlier fix of mine had garbled with a tab character, is corrected.
- [ ] **Venue badges:** all 131 papers have one. 104 were set by simple pattern rules (NeurIPS, ICML, ICLR, AAAI, …; arXiv for CoRR; JMLR, MLJ, …), and 23 by hand (see the item above). Spot-check the publications page for wrong badges; one rule error (ICONIP labelled NeurIPS) was already fixed. Old NIPS papers are labelled "NeurIPS".
- [ ] **Links from the old site** added as `pdf`/`supp`/`code`/`website`/`video`: ICML'21 Finding k (pdf and supp), NeurIPS'22 When to Intervene (pdf and supp), AIES'21 Rawlsian (pdf), ICML'20 Near-optimal (supp), AAAI'21 DSLR (code and website), ICRA'21 social robots (website and video). The PDFs were copied into `assets/pdf/`, and the old `supp.pdf` was renamed to `final_icml21_lkp_supp.pdf`.
- [ ] **Selected (homepage):** exactly the 5 most recent peer-reviewed papers: NCDF (ICML'26), Steering (NeurIPS'25), ModHiFi (NeurIPS'25), CheXwhatsApp (CVPR'25), LevAttention (ICLR'25). Two 2025 arXiv preprints (DO-EM; "When Routers, Switches and Interconnects Compute") are newer by date but were left out because they're preprints. Swap them in if you prefer.
- [ ] **Papers not in DBLP:** every paper on the old site's publication list is now in the bib. The old list was the only non-DBLP source available. Google Scholar (`SbYoEmQAAAAJ`) can't be scraped, so older non-DBLP work (e.g. book chapters, bio/medical journals) may still be missing. Compare against Chiranjib's Scholar/CV if you need full coverage.
- [ ] Your `max_author_limit` change (show all authors) is kept.
- [x] Chiranjib Bhattacharyya's name is no longer underlined in publications (removed the `border-bottom` on `.author > em` in `_sass/_base.scss`). The name is still matched by `scholar.last_name`, but it now looks the same as the other authors.
- [x] ModHiFi now shows a **Spotlight** award badge (al-folio `award_name`/`award` fields). Clicking it shows "Published as a Spotlight in NeurIPS 2025." The badge also appears in the homepage's selected papers.

## Projects (`_projects/`, 8 pages; collection re-enabled)
- [x] **Grammar pass (your request, 2026-09-11):** the project pages started as word-for-word copies of the old site; you then asked for grammar, punctuation and capitalization to be fixed everywhere, including projects. So they are **no longer verbatim**. The content, claims, names and links are unchanged; only wording errors were fixed. Examples: "impairement" → "impairment", "Alzheimers" → "Alzheimer's", "Center" → "Centre", "Ati motors"/"ATI Motors" → "Ati Motors", "Whatsapp" → "WhatsApp", "Xray-Setu"/"Xraysetu" → "XraySetu", "can be effective as Lockdown" → "can be as effective as a lockdown", and the sentence the old site split across two paragraphs ("…effectiveness in / Suppressing…") is rejoined. Titles are in Title Case. "DST" in the DSLR text is still unexpanded, as on the old site. "We will soon be sharing our paper" (COVID-SWIFT) is kept, although the paper has since appeared in Sci. Reports 2023; tell me if you want that updated.
- [ ] The COVID-SWIFT links still point to `https://mllab.csa.iisc.ac.in/covid-swift/`, the old microsite. That page will disappear when this site replaces the old one.
- [ ] Order (`importance`): COVID-SWIFT, COVID-19 projects, social robotics, DSLR, LiDAR SLAM, cognitive impairment, community detection, program synthesis.
- [ ] No card image for COVID-SWIFT, COVID-19 and DSLR, because the old site had none.

## Awards & Press (`_pages/awards.md`)
- [ ] 11 awards and 3 press items: the old site's 8 awards, plus the ModHiFi NeurIPS 2025 Spotlight and Best M.Tech Student for Dhruva Kashyap (2024) and Tanay Narshana (2022), which you added. "Karthik Kumara" is kept as on the old site; it may be "Karthik Kumar", as listed in alumni.

## Opportunities (`_pages/opportunities.md`)
- [x] All old postings were removed. The page shows "No positions are open currently." and the mentorship-request note, both in bold (your request); "Opportunities" is capitalised in the menu and title.

## Gallery (`_pages/gallery.md`)
- [x] Your request: "Informals" section removed and its photo moved to "Events & the Lab"; IISc main building photo removed (file deleted). Captions now carry years, sorted newest first.
- [ ] ⚠️ **Placeholder years, please confirm:** The ML Lab (`labpic.jpg`) **2018**, The ML Lab (`lab1.jpg`) **2019**, Lab celebration (`chiruhbd.jpg`) **2020**. FATE ML workshop 2020 and Deep Tech Entrepreneurship 2019 come from the news items.
- [ ] 2 YouTube talks (Amazon AI Conclave 2018, NASSCOM 2016) and 6 photos under "Events & the Lab" (the old homepage's carousel photos, minus the IISc main building, plus the former informal photo).
- [ ] **I guessed the captions from filenames:** labpic/lab1 → "The ML Lab"; deeptech/deeptechvol → "Deep Tech Entrepreneurship (volunteers)"; fateworkshop → "FATE ML workshop"; chiruhbd → "Lab celebration". Please correct them.

## Deployment
- [x] Dependabot: `nbconvert` in `requirements.txt` pinned to `>=7.17.1`, which fixes all known nbconvert advisories (1 high, 3 moderate). This was the only candidate for the last remaining moderate alert; the local audit found npm and all 97 locked gems clean. Check the Security → Dependabot page after the push to confirm it clears.
- [ ] The site goes to mllab.csa.iisc.ac.in, not GitHub Pages. The deliverable is `_site/` from `JEKYLL_ENV=production bundle exec jekyll build`. `.github/workflows/deploy.yml`, which pushes to `gh-pages`, still runs on every push to `main`; it is kept enabled, as you asked.
- [ ] Old URLs such as `/members`, `/allnews`, `/publications` and `/covid-swift/` change or disappear (the new ones are `/people/`, `/news/`, `/publications/`, `/projects/…`). Consider redirects on the server.
