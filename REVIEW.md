# Review notes: porting content from mllab.csa.iisc.ac.in

This file lists every judgement call made while moving content from the old site (https://mllab.csa.iisc.ac.in) into this al-folio site. It is excluded from the Jekyll build (`exclude:` in `_config.yml`), so it is never published. Tick items off or delete this file when you're done.

Sources: the live old site, scraped on 2026-09-10 (treated as the source of truth), plus the 2020 repo `MLLabIISc/old-webpage` as a cross-check.

---

## Config / structure
- [ ] `projects.output` flipped back to `true` (you had set it to `false`), as you asked.
- [ ] `REVIEW.md` added to `exclude:`. None of your other `_config.yml` edits were touched.
- [ ] Nav order: blog "Recent Work" (1, yours), publications (2), people (3), projects (4), news (5), awards & press (6), opportunities (7), gallery (8).
- [ ] Removed the al-folio demo news (`_news/announcement_*.md`) and `_pages/about_einstein.md`.
- [ ] Not ported: the old footer line "Funding: Ministry of Human Resource Development, Government of India". Add it to `footer_text` if you want it.
- [ ] Leftover al-folio demo asset `assets/html/relativity.html` (mentions Einstein) is still in the repo and gets published. Nothing links to it, but you may want to delete it along with the unused demo images `assets/img/1.jpg`–`12.jpg`, `prof_pic*.jpg`, and `assets/pdf/example_pdf.pdf`. I didn't delete these because they're template files.
- [ ] Not ported: `aboutwebsite.html` (template credits), the standalone `covid-swift/` microsite (its content is on the COVID-SWIFT project page), and `mini_lecture_series` (only in the 2020 repo).

## Home (`_pages/about.md`)
- [ ] Profile image is the old carousel's lab photo (`assets/img/gallery/labpic.jpg`). Check it works as the main image.
- [ ] Address block is Room 251, CSA, IISc, plus a Maps link, from the old footer.
- [ ] Added the old site's mentorship-request disclaimer and a link to /opportunities/.
- [x] Collaborators strip: Microsoft Research and AMD only, as you asked. LinkedIn, Microsoft, Tata Motors and Ati Motors were removed along with their logo files. The AMD logo is the official SVG from Wikimedia Commons (`assets/img/logos/amd.svg`).

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
- [x] **Your changes:** Chaitanya Murti moved to Alumni (PhD) as "Research Scientist at HP AI Research" (no photo, placeholder shown). Dhruva Kashyap moved to Alumni (Project Associates). ⚠️ I don't know Dhruva's joining year, so it's left blank; the list now omits ", year" when none is given. Tell me the year to add it.
- [ ] **Possibly graduated:** check the M.Tech, M.Tech (Research) and project associate lists against who is still in the lab. Also check the PhD list (e.g. Nabanita, started 2018; Mariamma, started 2019). I did not move anyone to alumni.
- [ ] **Photos:** Achintya Kundu's photo couldn't be downloaded from the old site, so he shows the placeholder. So do everyone the old site gave the generic `bio-photo.jpg`.
- [ ] Minor normalisation: "Bhubaneshwar" → "Bhubaneswar"; "Linkedin" → "LinkedIn"; LinkedIn URLs stripped of `?originalSubdomain=in`; "Anjali Jain Masters, 2014" → "Anjali Jain, 2014"; Shikhar's role no longer links to Carolyn Rose.
- [ ] Deleted 10 photos from the old site that no current page uses (older members such as akshaj_verma, dhiraj, kavita, pooja, prashant, prateek, rishabh, saby, sweta, vini).

## Publications (`_bibliography/papers.bib`: 139 → 131 entries)
- [ ] **Added**, with sources:
  - `Aithala_2024`: Data & Policy 2024, from Crossref (DOI 10.1017/dap.2024.24)
  - `Antony_2023`: Sci. Reports 2023, from Crossref (DOI 10.1038/s41598-023-44653-y), plus a `code` link to the WACXR dataset repo
  - `Chaudhary2026NCDF`: ICML 2026, from the BibTeX on the NCDF project page. I appended ", {ICML} 2026" to the booktitle and added a `website` link.
  - `Shastry2022ShotFrugal`: arXiv 2210.06971, from the arXiv API. **The old site said 2023, but arXiv v1 is from Oct 2022**, so I used 2022.
  - ⚠️ `Sharma2025Steering` and `Kashyap2025ModHiFi`: **hand-built** from the old site's title and author list, because DBLP was behind a bot-check and OpenReview returned 403. Check the author spellings (e.g. "Pranav K. Nayak") and the booktitle. ModHiFi has `note = {Spotlight}`.
- [ ] **Removed 14 arXiv (CoRR) copies of papers that are also in the bib as published versions:** LevAttention, Random Separating Hyperplane, Predicting Ground State, Rawlsian Fair Adaptation, Learning a Latent Simplex, How Many Pairwise Preferences, RESIDE, Lean 2-layer RBMs, Mining Block I/O Traces, Provable SVD topics, Dynamic Multi-Relational CRP, Mean Field Methods (arXiv 2011 copy of the 2001 JAIR paper), DSLR, and Finding a latent k-simplex (SODA). Standalone preprints were kept.
- [ ] **Fixed** the garbled DBLP title in `DBLP:conf/nips/JethavaMBD12` ("The Lovász ϑ function, SVMs and finding large dense subgraphs").
- [ ] **Fixed** 15 URLs that contained DBLP's `\_` escapes. They would have produced broken links.
- [ ] **Venue badges:** `abbr` was added to 104 entries using simple pattern rules (NeurIPS, ICML, ICLR, AAAI, …; arXiv for CoRR; JMLR, MLJ, …). Entries without a match, mostly journals and small venues, have no badge. Spot-check the publications page for wrong badges. Old NIPS papers are labelled "NeurIPS".
- [ ] **Links from the old site** added as `pdf`/`supp`/`code`/`website`/`video`: ICML'21 Finding k (pdf and supp), NeurIPS'22 When to Intervene (pdf and supp), AIES'21 Rawlsian (pdf), ICML'20 Near-optimal (supp), AAAI'21 DSLR (code and website), ICRA'21 social robots (website and video). The PDFs were copied into `assets/pdf/`, and the old `supp.pdf` was renamed to `final_icml21_lkp_supp.pdf`.
- [ ] **Selected (homepage):** exactly the 5 most recent peer-reviewed papers: NCDF (ICML'26), Steering (NeurIPS'25), ModHiFi (NeurIPS'25), CheXwhatsApp (CVPR'25), LevAttention (ICLR'25). Two 2025 arXiv preprints (DO-EM; "When Routers, Switches and Interconnects Compute") are newer by date but were left out because they're preprints. Swap them in if you prefer.
- [ ] **Papers not in DBLP:** every paper on the old site's publication list is now in the bib. The old list was the only non-DBLP source available. Google Scholar (`SbYoEmQAAAAJ`) can't be scraped, so older non-DBLP work (e.g. book chapters, bio/medical journals) may still be missing. Compare against Chiranjib's Scholar/CV if you need full coverage.
- [ ] Your `max_author_limit` change (show all authors) is kept.
- [x] Chiranjib Bhattacharyya's name is no longer underlined in publications (removed the `border-bottom` on `.author > em` in `_sass/_base.scss`). The name is still matched by `scholar.last_name`, but it now looks the same as the other authors.
- [x] ModHiFi now shows a **Spotlight** award badge (al-folio `award_name`/`award` fields). Clicking it shows "Published as a Spotlight in NeurIPS 2025." The badge also appears in the homepage's selected papers.

## Projects (`_projects/`, 8 pages; collection re-enabled)
- [x] **The text is now word for word from the old site** (you asked for this). The 7 projects are copied from mllab.csa.iisc.ac.in/projects and the COVID-19 page from /csacovid19. The original paragraphs, author lines (e.g. "-Mariamma") and "Read more…" links are copied as is, and commented-out markup is dropped. I added no text and no card descriptions. Inline colours and styles on the COVID-19 page were removed; the words are unchanged. An automated check confirmed every sentence on the new pages appears verbatim on the old pages.
- [ ] Because the text is verbatim, the old site's typos are kept, e.g. "impairement", "Alzheimers", "Center for Brain Research", "Has the concept the Autonomous vehicles…", "Ati motors", "Xraysetu", and the unfinished sentence "…study their effectiveness in / Suppressing COVID19…". Tell me if you want any of them fixed.
- [ ] The COVID-SWIFT links still point to `https://mllab.csa.iisc.ac.in/covid-swift/`, the old microsite. That page will disappear when this site replaces the old one.
- [ ] Order (`importance`): COVID-SWIFT, COVID-19 projects, social robotics, DSLR, LiDAR SLAM, cognitive impairment, community detection, program synthesis.
- [ ] No card image for COVID-SWIFT, COVID-19 and DSLR, because the old site had none.

## Awards & Press (`_pages/awards.md`)
- [ ] Copied the 8 awards and 3 press items. "Karthik Kumara" is kept as on the old site; it may be "Karthik Kumar", as listed in alumni.

## Opportunities (`_pages/opportunities.md`)
- [x] All old postings were removed, as you asked. The page now shows only the old site's own wording: "No positions open currently." plus the mentorship-request note from the old homepage.

## Gallery (`_pages/gallery.md`)
- [ ] 2 YouTube talks (Amazon AI Conclave 2018, NASSCOM 2016) plus the old homepage's carousel photos and the one informal photo.
- [ ] **I guessed the captions from filenames:** labpic/lab1 → "The ML Lab"; deeptech/deeptechvol → "Deep Tech Entrepreneurship (volunteers)"; fateworkshop → "FATE ML workshop"; main-building → "IISc main building"; chiruhbd → "Lab celebration". Please correct them.

## Deployment
- [ ] The site goes to mllab.csa.iisc.ac.in, not GitHub Pages. The deliverable is `_site/` from `JEKYLL_ENV=production bundle exec jekyll build`. `.github/workflows/deploy.yml`, which pushes to `gh-pages`, is irrelevant and still runs on every push to `main`; disable it if you don't want that.
- [ ] Old URLs such as `/members`, `/allnews`, `/publications` and `/covid-swift/` change or disappear (the new ones are `/people/`, `/news/`, `/publications/`, `/projects/…`). Consider redirects on the server.
