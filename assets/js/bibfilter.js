// Exact-match tag filter for the Publications page (Area / Sub-area / Venue).
// Works alongside bibsearch.js: that script hides entries with the "unloaded" class,
// this one uses "tag-hidden", and year headings are hidden when every entry under them is hidden by either.
document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("pub-filter");
  const list = document.getElementById("pub-list");
  if (!bar || !list) return;

  const selArea = document.getElementById("pf-area");
  const selSub = document.getElementById("pf-sub");
  const selVenue = document.getElementById("pf-venue");
  const count = document.getElementById("pf-count");

  const split = (s) =>
    (s || "")
      .split(";")
      .map((x) => x.trim())
      .filter(Boolean);

  const items = Array.from(list.querySelectorAll(".bibliography > li")).map((li) => {
    const t = li.querySelector(".pub-tags");
    const d = t ? t.dataset : {};
    return { li: li, areas: split(d.areas), subs: split(d.subareas), venue: (d.venue || "").trim(), vtype: (d.vtype || "").trim() };
  });

  const tally = (list, key) => {
    const m = new Map();
    list.forEach((it) => [].concat(it[key]).forEach((v) => v && m.set(v, (m.get(v) || 0) + 1)));
    return m;
  };

  const option = (value, label) => {
    const o = document.createElement("option");
    o.value = value;
    o.textContent = label;
    return o;
  };

  const names = window.ARXIV_NAMES || {};
  const fill = (sel, map, byCount, named) => {
    const keep = sel.value;
    sel.innerHTML = "";
    sel.appendChild(option("", "All"));
    const entries = Array.from(map.entries()).sort((a, b) => (byCount ? b[1] - a[1] : 0) || a[0].localeCompare(b[0]));
    entries.forEach(([v, n]) => sel.appendChild(option(v, (named && names[v] ? v + " — " + names[v] : v) + " (" + n + ")")));
    sel.value = map.has(keep) ? keep : "";
  };

  // Area and venue options are fixed; sub-area options follow the selected area.
  fill(selArea, tally(items, "areas"), true, true);
  (function fillVenue() {
    selVenue.appendChild(option("", "All"));
    const types = document.createElement("optgroup");
    types.label = "Type";
    Array.from(tally(items, "vtype").entries())
      .sort((a, b) => b[1] - a[1])
      .forEach(([v, n]) => types.appendChild(option("type:" + v, v + " (" + n + ")")));
    const venues = document.createElement("optgroup");
    venues.label = "Venue";
    Array.from(tally(items, "venue").entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(([v, n]) => venues.appendChild(option("venue:" + v, v + " (" + n + ")")));
    selVenue.appendChild(types);
    selVenue.appendChild(venues);
  })();
  const fillSub = () => fill(selSub, tally(selArea.value ? items.filter((it) => it.areas.includes(selArea.value)) : items, "subs"), false);
  fillSub();

  const hidden = (el) => el.classList.contains("tag-hidden") || el.classList.contains("unloaded");

  // Hide a year heading and its list when none of its entries are visible.
  const updateGroups = () => {
    list.querySelectorAll("ol.bibliography").forEach((ol) => {
      const lis = Array.from(ol.querySelectorAll(":scope > li"));
      const none = lis.length > 0 && lis.every(hidden);
      ol.classList.toggle("tag-hidden", none);
      const head = ol.previousElementSibling;
      if (head && /^H[1-6]$/.test(head.tagName)) head.classList.toggle("tag-hidden", none);
    });
    const shown = items.filter((it) => !hidden(it.li)).length;
    count.textContent = shown === items.length ? items.length + " publications" : shown + " of " + items.length + " publications";
  };

  const apply = () => {
    const a = selArea.value;
    const s = selSub.value;
    const v = selVenue.value;
    items.forEach((it) => {
      const ok =
        (!a || it.areas.includes(a)) &&
        (!s || it.subs.includes(s)) &&
        (!v || (v.startsWith("type:") ? it.vtype === v.slice(5) : it.venue === v.slice(6)));
      it.li.classList.toggle("tag-hidden", !ok);
    });
    updateGroups();
  };

  selArea.addEventListener("change", () => {
    fillSub();
    apply();
  });
  selSub.addEventListener("change", apply);
  selVenue.addEventListener("change", apply);
  document.getElementById("pf-reset").addEventListener("click", () => {
    selArea.value = "";
    fillSub();
    selSub.value = "";
    selVenue.value = "";
    apply();
  });

  // Clicking a tag under a publication selects it in the matching dropdown.
  list.addEventListener("click", (e) => {
    const tag = e.target.closest(".pub-tag");
    if (!tag) return;
    const val = tag.dataset.value;
    if (tag.dataset.kind === "area") {
      selArea.value = val;
      fillSub();
    } else if (tag.dataset.kind === "subarea") {
      if (selArea.value && !items.some((it) => it.areas.includes(selArea.value) && it.subs.includes(val))) {
        selArea.value = "";
      }
      fillSub();
      selSub.value = val;
    } else if (tag.dataset.kind === "venue") {
      selVenue.value = "venue:" + val;
    }
    apply();
    bar.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Keep year headings and the count in sync with the text search box.
  const search = document.getElementById("bibsearch");
  if (search) search.addEventListener("input", () => setTimeout(updateGroups, 50));
  window.addEventListener("hashchange", () => setTimeout(updateGroups, 50));

  apply();
});
