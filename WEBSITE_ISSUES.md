# What's wrong with the website

This is a candid list of the site's weaknesses as of 2026-09-11, ranked by how much each one hurts a visitor. It is excluded from the build (`exclude:` in `_config.yml`), so it is never published. `REVIEW.md` covers the individual judgement calls; this file covers the bigger picture.

---

## 1. It looks out of date

- **Projects stop around 2021.** All 8 project pages are from 2019–2021 (COVID-SWIFT, LiDAR SLAM, social robotics, …). The lab's current lines of work, which dominate the recent publications, have no project page at all: efficient deep learning (TVSPrune, DFPC, DisCEdit, ModHiFi), latent polytopes with Kannan, quantum ML, and fairness.
- **Project text is stale.** COVID-SWIFT still says "We will soon be sharing our paper", although it appeared in Sci. Reports in 2023. "We ran a small-scale pilot for the last 10 months" has no date. The LiDAR SLAM text says "Currently, our team…".
- **News is thin and patchy.** There are 32 items, but about 14 of them had only a year or month on the old site, so their dates are approximate. There are only a few items per year after 2021. A news feed that goes quiet reads as a lab that went quiet.
- **Gallery.** There are 6 photos and 2 talks, all from 2016–2020. Three photos have placeholder years and captions I guessed from filenames.
- **Awards.** Apart from the three you added, the newest award is from 2021.

## 2. People page

- **The roster is probably wrong.** The M.Tech list comes from the old site and likely includes students who have graduated. The PhD list includes students who started in 2018–2019. Nobody has confirmed who is still in the lab.
- **7 people show a grey placeholder photo:** Adit Vishnu, Sunny Manchanda, Rajiv Porana, Viren Luke Radhakrishnan, Chaitanya Murti, Aadirupa Saha, Achintya Kundu.
- **Detail is uneven.** Some members have a bio, links and a LinkedIn profile; most have only a name and email. There are no research interests per person, and no link from a person to their papers.
- **Emails are shown in plain text,** both as mailto links and as visible text. Spam bots will harvest them.
- **Unverified details:** Khushi's email (khushimehta@ vs khushimetha@) and "Sahoo Mayajeet Satyaranjan **Ranjan**".
- **Alumni lists show only the joining year,** e.g. Tanay's 2020–2022 appears as "2020". There are no current positions for the masters alumni.

## 3. Home page

- **The intro is generic and dated.** Its list of application areas ("detection of rare topics in text documents, statistical modeling of computer systems…") reflects the lab of around 2015, not today's work. "The Silicon Valley of India" is a cliché.
- **Nothing visual is left above the fold.** The lab photo was removed and nothing replaced it, so the page opens as a wall of text.
- **The collaborators strip looks sparse** with only 2 logos.
- **The AMD logo will vanish in dark mode.** Its SVG has no fill colour set, so it renders black, and al-folio's dark theme has a dark background. The HP logo is a generic HP mark, not "HP AI Research".
- **The site title is "Machine Learning Lab"**, so browser tabs, bookmarks and search results don't say IISc. Open Graph and schema.org metadata are both off (`serve_og_meta: false`, `serve_schema_org: false`), so links shared on Slack, X or LinkedIn get no preview card.

## 4. Publications

- **Tags are inferred from titles, not verified by the authors.** 3 papers have no line of work.
- **36 of 131 papers have no DOI.** Their venues don't issue one; that's correct, but it means those papers link out inconsistently.
- **Formatting is inconsistent.** DBLP's raw booktitles are long ("Proceedings of the 31st ACM International Conference on…"), and title case varies ("Vine copulas for mixed data : multi-view…", with a space before the colon).
- **Almost no papers have abstracts, PDFs or preview images,** so the page is a dense list of titles.
- **Coverage is DBLP plus the old site only.** Non-DBLP work from Chiranjib's Google Scholar or CV (book chapters, some journals) may be missing.
- **Two NeurIPS 2025 entries were hand-built** because DBLP and OpenReview were unreachable.
- **Only Chiranjib is recognised as an author.** Student names aren't linked or highlighted (`_data/coauthors.yml` is unused), so a visitor can't tell which authors are lab members.
- **The tag filter has only been checked in the built HTML,** not by clicking through it in a real browser.

## 5. Navigation and structure

- **"More ▾" is a vague label** for News, Awards & Press, Gallery and Opportunities.
- **Opportunities is a dead end.** It says "No positions are open currently." with no pointer to how IISc PhD, M.Tech (Research) or M.Tech admissions work, which is what most visitors want.
- **There's no blog or updates channel** now that the blog is gone, and no place for longer write-ups (talks, releases, datasets).
- **Old URLs break.** `/members`, `/allnews`, `/pictures`, `/covid-swift/` and the old `/downloads/*.pdf` links (cited in papers and emails) will 404 once this site replaces the old one. There are no redirects.
- **The COVID-SWIFT project links to its own old microsite,** `mllab.csa.iisc.ac.in/covid-swift/`, which will disappear in the same switch.

## 6. Performance

- **Oversized source images:** `people/mrinal.jpg` 1.3 MB, `projects/Pub_BCl.png` 1.0 MB, and gallery photos of 0.4–0.6 MB each. al-folio generates WebP copies, but the originals are still served as the fallback.
- **Builds take about 10 minutes,** mostly ImageMagick regenerating those images every time. That makes every small text edit slow to verify.

## 7. Repo and deployment hygiene

- **There's no deployment pipeline for the real host.** The site is meant for mllab.csa.iisc.ac.in, but nothing builds and uploads to it. Meanwhile `deploy.yml` builds and pushes a copy to `gh-pages` on every push, and GitHub Pages returns "Site not found". Two half-deployments and zero real ones.
- **Template leftovers:**
  - `README.md` is still al-folio's README.
  - 13 of the 14 files in `.github/workflows` are al-folio's own CI (lighthouse badger, docker image builds, axe, broken-link checks, prettier comments…). They will run, fail or spam on this repo.
  - `_pages/dropdown.md` (an excluded example), `assets/html/relativity.html` and `assets/pdf/example_pdf.pdf` are still here.
- **The footer credits "al-folio theme"** but has no lab or funding information. The old footer had the address and the MHRD funding line.
- **Dependabot showed 1 moderate alert** at the last push. It's unconfirmed whether the `nbconvert` pin cleared it.
- **The project is locked to al-folio v0.14.6** and its container image. Upstream theme updates will be painful to merge, given how many theme files have been edited (`bib.liquid`, `_base.scss`, `profiles.md`).

## 8. Content quality and consistency

- **Tone is inconsistent.** Project pages mix first-person copy from the old site ("Ever struggled with writing code?") with formal descriptions, and credit lines like "— Mariamma" use first names only.
- **Spelling of names and places varies** across news, awards and publications, e.g. "Karthik Kumara" vs "Karthik Kumar", and "Ati Motors" was spelled three ways on the old site.
- **"Computer Society of India Bangalore Medal"** keeps "Bangalore" because it's the official award name, but it stands out now that the rest of the site says Bengaluru.
- **Several news items are unverified.** For example, the "ICML 2018 RBMs" item is dated January 2018, before ICML decisions.

---

### If you fix only five things

1. Add project pages for the current lines of work (efficient DL, latent polytopes, quantum ML, fairness).
2. Confirm the roster and add the missing photos.
3. Rewrite the home intro around today's research, and put one visual back.
4. Set up redirects from the old URLs, plus a real deploy to mllab.csa.iisc.ac.in.
5. Fix the AMD logo for dark mode and turn on Open Graph metadata.
