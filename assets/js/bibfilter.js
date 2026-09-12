// Faceted tag filter for the Publications page (Area / Line of work / Venue), combined with the text search.
// bibsearch.js hides entries that don't match the search box with the "unloaded" class; this script hides
// entries that don't match the dropdowns with "tag-hidden". Dropdown counts are faceted: each option shows how
// many publications would match if it were chosen, given the other active dropdowns and the current search.
document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("pub-filter");
  const list = document.getElementById("pub-list");
  if (!bar || !list) return;

  const sel = {
    area: document.getElementById("pf-area"),
    sub: document.getElementById("pf-sub"),
    venue: document.getElementById("pf-venue"),
  };
  const chips = document.getElementById("pf-chips");
  const count = document.getElementById("pf-count");
  const reset = document.getElementById("pf-reset");
  const names = window.ARXIV_NAMES || {};
  const state = { area: "", sub: "", venue: "" };

  // Move the text search box into the panel.
  const search = document.getElementById("bibsearch");
  if (search) {
    bar.querySelector(".pf-search").appendChild(search);
    search.placeholder = "Search titles, authors, venues…";
    search.setAttribute("aria-label", "Search publications");
  } else {
    bar.querySelector(".pf-search").remove();
  }

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

  const tally = (arr, key) => {
    const m = new Map();
    arr.forEach((it) => [].concat(it[key]).forEach((v) => v && m.set(v, (m.get(v) || 0) + 1)));
    return m;
  };
  // Option order is fixed (most common first) so the lists don't jump around as counts change.
  const order = (key) =>
    Array.from(tally(items, key).entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map((e) => e[0]);
  const areaOrder = order("areas");
  const subOrder = order("subs");
  const typeOrder = order("vtype");
  const venueOrder = order("venue");

  const matchVenue = (it, v) => (v.startsWith("type:") ? it.vtype === v.slice(5) : it.venue === v.slice(6));
  const matches = (it, skip) =>
    (skip === "area" || !state.area || it.areas.includes(state.area)) &&
    (skip === "sub" || !state.sub || it.subs.includes(state.sub)) &&
    (skip === "venue" || !state.venue || matchVenue(it, state.venue));
  const searched = (it) => !it.li.classList.contains("unloaded");
  const pool = (skip) => items.filter((it) => searched(it) && matches(it, skip));

  const option = (value, label, disabled) => {
    const o = document.createElement("option");
    o.value = value;
    o.textContent = label;
    o.disabled = !!disabled;
    return o;
  };

  const build = (s, total, groups, value) => {
    s.innerHTML = "";
    s.appendChild(option("", "All (" + total + ")"));
    groups.forEach(([label, opts]) => {
      const parent = label ? document.createElement("optgroup") : s;
      if (label) parent.label = label;
      opts.forEach(([v, text, n]) => parent.appendChild(option(v, text + " (" + n + ")", n === 0 && v !== value)));
      if (label) s.appendChild(parent);
    });
    s.value = value;
    s.closest(".pf-field").classList.toggle("is-active", !!value);
  };

  const renderOptions = () => {
    let p = pool("area");
    let c = tally(p, "areas");
    build(sel.area, p.length, [["", areaOrder.map((v) => [v, names[v] ? v + " — " + names[v] : v, c.get(v) || 0])]], state.area);
    p = pool("sub");
    c = tally(p, "subs");
    build(sel.sub, p.length, [["", subOrder.map((v) => [v, v, c.get(v) || 0])]], state.sub);
    p = pool("venue");
    const ct = tally(p, "vtype");
    const cv = tally(p, "venue");
    build(
      sel.venue,
      p.length,
      [
        ["Type", typeOrder.map((v) => ["type:" + v, v, ct.get(v) || 0])],
        ["Venue", venueOrder.map((v) => ["venue:" + v, v, cv.get(v) || 0])],
      ],
      state.venue,
    );
  };

  const labels = { area: "Area", sub: "Line of work", venue: "Venue" };
  const renderChips = () => {
    chips.innerHTML = "";
    Object.keys(state).forEach((k) => {
      if (!state[k]) return;
      const v = k === "venue" ? state[k].replace(/^(type|venue):/, "") : state[k];
      const b = document.createElement("button");
      b.type = "button";
      b.className = "pf-chip";
      b.dataset.key = k;
      b.title = "Remove this filter";
      b.innerHTML = "<span>" + labels[k] + ": <b></b></span><span class='pf-x' aria-hidden='true'>×</span>";
      b.querySelector("b").textContent = v;
      b.setAttribute("aria-label", "Remove filter " + labels[k] + ": " + v);
      chips.appendChild(b);
    });
    reset.disabled = !Object.values(state).some(Boolean) && !(search && search.value);
  };

  // Hide a year heading and its list when none of its entries are visible; update the count.
  const hidden = (el) => el.classList.contains("tag-hidden") || el.classList.contains("unloaded");
  const updateGroups = () => {
    list.querySelectorAll("ol.bibliography").forEach((ol) => {
      const lis = Array.from(ol.querySelectorAll(":scope > li"));
      const none = lis.length > 0 && lis.every(hidden);
      ol.classList.toggle("tag-hidden", none);
      const head = ol.previousElementSibling;
      if (head && /^H[1-6]$/.test(head.tagName)) head.classList.toggle("tag-hidden", none);
    });
    const shown = items.filter((it) => !hidden(it.li)).length;
    count.innerHTML =
      shown === items.length ? "<b>" + items.length + "</b> publications" : "<b>" + shown + "</b> of " + items.length + " publications";
  };

  const refresh = () => {
    updateGroups();
    renderOptions();
    renderChips();
  };

  const apply = () => {
    items.forEach((it) => it.li.classList.toggle("tag-hidden", !matches(it)));
    refresh();
  };

  Object.keys(sel).forEach((k) =>
    sel[k].addEventListener("change", () => {
      state[k] = sel[k].value;
      apply();
    }),
  );

  chips.addEventListener("click", (e) => {
    const chip = e.target.closest(".pf-chip");
    if (!chip) return;
    state[chip.dataset.key] = "";
    apply();
  });

  reset.addEventListener("click", () => {
    state.area = state.sub = state.venue = "";
    if (search && search.value) {
      search.value = "";
      search.dispatchEvent(new Event("input", { bubbles: true }));
      if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    apply();
  });

  // Clicking a tag under a publication selects it in the matching dropdown.
  list.addEventListener("click", (e) => {
    const tag = e.target.closest(".pub-tag");
    if (!tag) return;
    const val = (tag.dataset.value || "").trim();
    if (tag.dataset.kind === "area") state.area = val;
    else if (tag.dataset.kind === "subarea") state.sub = val;
    else if (tag.dataset.kind === "venue") state.venue = "venue:" + val;
    apply();
    bar.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Recount whenever the text search changes (bibsearch.js runs its own input handler first or in the same tick).
  if (search) search.addEventListener("input", () => setTimeout(refresh, 0));
  window.addEventListener("hashchange", () => setTimeout(refresh, 0));

  apply();
});
