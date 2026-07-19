// ═══════════════════════════════════════════════════════════════
// SITE DATA  —  Edit everything here to update the page.
// You never need to touch index.html or styles.css.
// ═══════════════════════════════════════════════════════════════

const SITE = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:  "MCAD Capstone 2026",
    title:    "Tiles",
    hook:     "The entire studio in your pocket.",
    desc:     "A studio management app that replaces the physical glaze test tile wall with a searchable, shared digital archive. Combining a glaze mixer, piece tracker, and community board in one tool. It's built for ceramics studios and their members, from new students to longtime potters, who rely on collective glaze knowledge that's usually scattered across shelves, physical tiles, and notebooks. Tiles makes that portable, permanent, and accessible to everyone in the studio, not just the people who've been there long enough to know where to look.",
    author:   "Andrew Rivera",
    program:  "User Experience Design",
    year:     "2026",

    // Real glaze test tile photos, tiled at 50% opacity as a fixed
    // backdrop behind the entire site (visible in the gaps around the
    // hero and section cards). Placement is shuffled on each load.
    // Add as many as you like — they cycle to fill the space.
    tiles: [
      { src: "images/white.jpg", caption: "" },
      { src: "images/walnut.jpg", caption: "" },
      { src: "images/straw.jpg", caption: "" },
      { src: "images/rust.jpg", caption: "" },
      { src: "images/mystery.jpg", caption: "" },
      { src: "images/green.jpg", caption: "" },
      { src: "images/floating-blue.jpg", caption: "" },
      { src: "images/blue.jpg", caption: "" },
    ],
  },

  // ── Nav labels (must match section ids below) ─────────────────
  nav: [
    { label: "Problem",      href: "#problem"      },
    { label: "Research",     href: "#research"     },
    { label: "Questions",    href: "#questions"    },
    { label: "Process",      href: "#process"      },
    { label: "Deliverables", href: "#deliverables" },
    { label: "Summary",      href: "#summary"      },
  ],

  // ── Sections ──────────────────────────────────────────────────
  // Each section can have:
  //   id, label, title, intro, callout,
  //   body    — array of paragraph strings
  //   steps   — array of { label, detail } objects
  //   images  — { cols: 1|2|3, width, items: [{ src, caption, ratio, position }] }
  //             width — e.g. "75%", caps the image grid width (left-aligned)
  //   imagesPosition — "afterIntro" to place images between intro and body
  //                    (default places them after callout/steps)
  //   videos  — array of { src, caption }
  //             src: YouTube URL, local file path, or "" for placeholder
  //   links   — array of { label, href, desc }
  //
  // IMAGE ratio options: "wide" (16/9) | "tall" (3/4) | "square" (1/1)
  // Leave src: "" to show a placeholder box.

  sections: [

    // ── 01 — Problem Statement ─────────────────────────────────
    {
      id:    "problem",
      label: "01 — Problem Statement",
      title: "What problem are we solving?",

      intro: "Pottery studios document their glazes on a physical test tile wall, hundreds of one of a kind tiles that can overwhelm new students and challenge even experienced members trying to locate one specific combination. That knowledge exists in a single physical location, inaccessible outside the studio.",

      body: [
        "Each tile represents a fired test of a glaze or glaze combination, and over years a studio's wall can grow to hold hundreds of these records, each with its own color, texture, and firing notes. For a new student, that volume presents no clear entry point. There is no way to know what is being looked at or where to start. Experienced members face a related but different problem. With hundreds of tiles to search through, locating a specific combination, or determining whether it has already been tried, becomes its own task, even when the documentation itself is thorough and well kept.",

        "That knowledge also exists in only one place. The wall can only be consulted while physically present in the studio, with no way to reference it from home. This limits when and how members can plan their work, and it leaves the studio's collective knowledge inaccessible the moment someone steps outside its walls. The physical format introduces a second limitation as well. Because each tile is a singular, unrepeatable object, damage is permanent. If a tile is dropped or broken and there is no digital record to fall back on. The glaze must be remixed, a new tile must be fired, and the studio must wait for the kiln before that information exists again. A photographic archive would eliminate this risk entirely.",
      ],

      callout: "\"A pull quote that captures the heart of the problem — could be something a user said, a striking statistic, or your own framing.\"",

      imagesPosition: "afterIntro",
      images: {
        cols: 1,
        width: "75%",
        items: [
          { src: "images/CSoM Teaching.jpeg", caption: "Andrew Rivera demonstrating how to glaze at The Clay Studio of Missoula.", ratio:"tall"},
        ]
      },

      steps: [],
    },

    // ── 02 — Research ──────────────────────────────────────────
    {
      id:    "research",
      label: "02 — Research",
      title: "Relevant Research, Data Collection & User Testing",

      intro: "Overview of the research approach — what methods were used, what data was collected, and what user testing revealed.",

      body: [
        "Describe your research here. What existing literature, precedents, or domain knowledge informed the project? What primary research did you conduct?",
        "Summarize user testing results — what participants did, what they struggled with, and what surprised you.",
      ],

      steps: [
        { label: "Desk research",       detail: "Review of relevant literature, existing tools, and domain expertise that framed the project." },
        { label: "Data collection",     detail: "Describe what data you gathered, how many participants, and the methods used (surveys, interviews, observation, etc.)." },
        { label: "User testing — round 1", detail: "First round of testing: what you tested, with whom, and the key findings." },
        { label: "User testing — round 2", detail: "Second round: what changed based on findings, and what new insights emerged." },
        { label: "Synthesis",           detail: "How you made sense of everything — affinity mapping, thematic analysis, or another method." },
      ],

      images: {
        cols: 3,
        items: [
          { src: "", caption: "Research session or setup" },
          { src: "", caption: "Data or notes artifact" },
          { src: "", caption: "Synthesis document — affinity map, themes, etc." },
        ]
      },

      videos: [
        { src: "", caption: "Optional: user testing session clip or research documentation" },
      ],
    },

    // ── 03 — Questions & Thoughts ──────────────────────────────
    {
      id:    "questions",
      label: "03 — Questions & Thoughts",
      title: "Questions, Thoughts Toward a Solution",

      intro: "The questions that guided the design — and the early thinking that pointed toward an answer.",

      body: [
        "What were the key questions you were holding as you moved from research into design? What hypotheses did you form? What early directions did you explore and why?",
        "This is a good place to show your thinking — not just what you decided, but what you were weighing and why certain directions felt promising.",
      ],

      callout: "\"A question that shaped everything, or an early hypothesis that turned out to be right (or wrong) in an interesting way.\"",

      images: {
        cols: 2,
        items: [
          { src: "", caption: "Early sketches or concept explorations" },
          { src: "", caption: "Notes, diagrams, or thinking artifacts" },
          { src: "", caption: "Comparative analysis or precedent study" },
          { src: "", caption: "Early direction or concept" },
        ]
      },

      steps: [],
    },

    // ── 04 — Process + Tools ───────────────────────────────────
    {
      id:    "process",
      label: "04 — Process + Tools",
      title: "Process & Tools",

      intro: "How the work was done — the phases, methods, and tools that shaped the project from concept to completion.",

      body: [
        "Walk through your process here. What did each phase involve? What tools did you use and why? Where did the process diverge from what you expected?",
      ],

      steps: [
        { label: "Phase 1 — [Name]",   detail: "Describe what happened in this phase and the tools or methods used. Example: Figma, paper sketches, Miro, etc." },
        { label: "Phase 2 — [Name]",   detail: "Describe this phase. What changed from the previous phase? What decisions were made?" },
        { label: "Phase 3 — [Name]",   detail: "Continue tracing the process. Include pivots, dead ends, or unexpected discoveries." },
        { label: "Phase 4 — [Name]",   detail: "Final phase leading to deliverables. What tools brought it to completion?" },
      ],

      images: {
        cols: 3,
        items: [
          { src: "", caption: "Early process artifact" },
          { src: "", caption: "Mid-process — iteration or testing" },
          { src: "", caption: "Tool screenshot or working file" },
          { src: "", caption: "In-progress work" },
          { src: "", caption: "Version comparison or iteration" },
          { src: "", caption: "Process documentation" },
        ]
      },

      videos: [
        { src: "", caption: "Optional: process walkthrough or prototype demo" },
      ],
    },

    // ── 05 — Deliverables ──────────────────────────────────────
    {
      id:    "deliverables",
      label: "05 — Deliverables",
      title: "Deliverables",

      intro: "The final outputs of the project — what was made, what it demonstrates, and how it connects to the original problem.",

      body: [
        "Describe each deliverable here. What is it? Who is it for? How does it solve the problem identified at the start?",
        "Be specific about what exists — a prototype, a system, a physical object, a report, a set of guidelines, or something else entirely.",
      ],

      steps: [
        { label: "Deliverable 1 — [Name]", detail: "Describe this deliverable, what it is, and why it matters to the project." },
        { label: "Deliverable 2 — [Name]", detail: "Describe this deliverable." },
        { label: "Deliverable 3 — [Name]", detail: "Describe this deliverable." },
      ],

      images: {
        cols: 2,
        items: [
          { src: "", caption: "Deliverable — final state", ratio: "wide" },
          { src: "", caption: "Deliverable detail or feature", ratio: "wide" },
          { src: "", caption: "Second deliverable or alternate view" },
          { src: "", caption: "Context of use or final presentation" },
        ]
      },

      videos: [
        { src: "", caption: "Optional: final demo, walkthrough, or presentation recording" },
      ],
    },

    // ── 06 — Summary ───────────────────────────────────────────
    {
      id:    "summary",
      label: "06 — Summary",
      title: "Summary",

      intro: "What was made, what was learned, and what this project represents.",

      body: [
        "Summarize the project — the problem, the process, and the outcome. What did you set out to do, and what did you actually make?",
        "Reflect on what surprised you, what you'd do differently, and what this experience revealed about your practice as a designer.",
      ],

      callout: "\"A closing thought — something you want a reader to leave with after seeing this work.\"",

      images: {
        cols: 1,
        items: [
          { src: "", caption: "Final project image, presentation photo, or closing visual", ratio: "wide" },
        ]
      },

      links: [
        { label: "Progress Platform",         href: "#", desc: "Documentation of ongoing work throughout the semester" },
        { label: "Works Cited / Bibliography", href: "#", desc: "All research sources and references" },
        { label: "Capstone Project",           href: "#", desc: "The final project — prototype, app, or deliverable" },
        { label: "Additional Link",            href: "#", desc: "Anything else that needs to be connected" },
      ],
    },

  ], // ← end sections

  footer: "Andrew Rivera · MCAD Capstone · 2026",

}; // ← end SITE


// ═══════════════════════════════════════════════════════════════
// RENDERER  —  No need to edit below this line.
// ═══════════════════════════════════════════════════════════════

(function () {

  // ── Helpers ──────────────────────────────────────────────────
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls)  e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }

  function imagePlaceholder(ratio) {
    const ratioClass = ratio || '';
    return `<div class="image-placeholder ${ratioClass}">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span>Add image path in script.js</span>
    </div>`;
  }

  // Must match .site-backdrop's grid-auto-rows / gap / padding in styles.css
  const BACKDROP_TILE = 130;
  const BACKDROP_GAP = 17.6;

  function pickBackdropTile(pool, left, top) {
    const choices = pool.filter(t => t !== left && t !== top);
    const from = choices.length ? choices : pool;
    return from[Math.floor(Math.random() * from.length)];
  }

  function renderSiteBackdrop(tiles) {
    const backdrop = document.getElementById('site-backdrop');
    const withSrc = (tiles || []).filter(t => t.src);
    if (!backdrop || withSrc.length === 0) return;

    const contentWidth  = window.innerWidth  - 2 * BACKDROP_GAP;
    const contentHeight = window.innerHeight - 2 * BACKDROP_GAP;
    const cols = Math.max(1, Math.floor((contentWidth  + BACKDROP_GAP) / (BACKDROP_TILE + BACKDROP_GAP)));
    const rows = Math.max(1, Math.ceil((contentHeight + BACKDROP_GAP) / (BACKDROP_TILE + BACKDROP_GAP))) + 1; // +1 row buffer

    const grid = [];
    for (let i = 0; i < cols * rows; i++) {
      const left = (i % cols) > 0 ? grid[i - 1] : null;
      const top  = i >= cols ? grid[i - cols] : null;
      grid.push(pickBackdropTile(withSrc, left, top));
    }

    backdrop.innerHTML = grid
      .map(t => `<div class="site-backdrop-tile"><img src="${t.src}" alt="" aria-hidden="true"></div>`)
      .join('');
  }

  function renderImages(imgData) {
    if (!imgData || !imgData.items || imgData.items.length === 0) return '';
    const cols = imgData.cols || 2;
    const widthStyle = imgData.width ? ` style="max-width: ${imgData.width};"` : '';
    let html = `<div class="image-grid cols-${cols}"${widthStyle}>`;
    for (const img of imgData.items) {
      const ratio = img.ratio || '';
      html += `<div class="image-card ${ratio}">`;
      if (img.src) {
        const posStyle = img.position ? ` style="object-position: ${img.position}"` : '';
        html += `<img src="${img.src}" alt="${img.caption || ''}"${posStyle}>`;
      } else {
        html += imagePlaceholder(ratio);
      }
      if (img.caption) html += `<p class="image-caption">${img.caption}</p>`;
      html += `</div>`;
    }
    html += `</div>`;
    return html;
  }

  function youtubeEmbedSrc(url) {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
    return null;
  }

  function renderVideos(videos) {
    if (!videos || videos.length === 0) return '';
    let html = `<div class="video-list">`;
    for (const v of videos) {
      html += `<div class="video-card">`;
      if (!v.src) {
        html += `<div class="video-placeholder">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8"/>
          </svg>
          <span>Add video URL or file path in script.js</span>
        </div>`;
      } else {
        const embedSrc = youtubeEmbedSrc(v.src);
        if (embedSrc) {
          html += `<div class="video-embed-wrap">
            <iframe src="${embedSrc}" title="${v.caption || 'Video'}" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>`;
        } else {
          html += `<video controls class="video-native" src="${v.src}"></video>`;
        }
      }
      if (v.caption) html += `<p class="image-caption">${v.caption}</p>`;
      html += `</div>`;
    }
    html += `</div>`;
    return html;
  }

  function renderLinks(links) {
    if (!links || links.length === 0) return '';
    let html = `<div class="links-section"><h3 class="links-heading">Links</h3><ul class="links-list">`;
    for (const link of links) {
      html += `<li class="link-item">
        <a href="${link.href}" class="link-label" target="_blank" rel="noopener">${link.label} →</a>
        ${link.desc ? `<span class="link-desc">${link.desc}</span>` : ''}
      </li>`;
    }
    html += `</ul></div>`;
    return html;
  }

  function renderSteps(steps) {
    if (!steps || steps.length === 0) return '';
    let html = `<div class="steps">`;
    steps.forEach((s, i) => {
      const num = String(i + 1).padStart(2, '0');
      html += `
        <div class="step">
          <div class="step-number-wrap">
            <div class="step-number">${num}</div>
            <div class="step-line"></div>
          </div>
          <div class="step-body">
            <div class="step-label">${s.label}</div>
            <div class="step-detail">${s.detail}</div>
          </div>
        </div>`;
    });
    html += `</div>`;
    return html;
  }

  function renderBody(paragraphs) {
    if (!paragraphs || paragraphs.length === 0) return '';
    const inner = paragraphs.map(p => `<p>${p}</p>`).join('');
    return `<div class="body-text">${inner}</div>`;
  }

  // ── Site backdrop ────────────────────────────────────────────
  renderSiteBackdrop(SITE.hero.tiles);
  let backdropResizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(backdropResizeTimer);
    backdropResizeTimer = setTimeout(() => renderSiteBackdrop(SITE.hero.tiles), 200);
  });

  // ── Nav ───────────────────────────────────────────────────────
  const navBrand = document.querySelector('.nav-brand');
  navBrand.textContent = SITE.hero.title;

  const navLinks = document.querySelector('.nav-links');
  for (const link of SITE.nav) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.href}">${link.label}</a>`;
    navLinks.appendChild(li);
  }

  // Clicking a nav link should always land at the TOP of that section,
  // not wherever it was last scrolled to internally (each slide keeps
  // its own vertical scroll position since it can scroll independently).
  navLinks.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollTop = 0;
    target.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  });

  // ── Hero ──────────────────────────────────────────────────────
  const main = document.getElementById('site-main');

  const hero = el('section', 'hero slide');
  hero.innerHTML = `
    <div class="hero-card">
      <p class="hero-eyebrow">${SITE.hero.eyebrow}</p>
      <h1>${SITE.hero.title}</h1>
      ${SITE.hero.hook ? `<p class="hero-hook">${SITE.hero.hook}</p>` : ''}
      <div class="hero-divider"></div>
      <p class="hero-desc">${SITE.hero.desc}</p>
      <div class="hero-meta">
        <span><strong>${SITE.hero.author}</strong></span>
        <span>${SITE.hero.program}</span>
        <span>${SITE.hero.year}</span>
      </div>
    </div>`;
  main.appendChild(hero);

  // ── Sections ──────────────────────────────────────────────────
  for (const sec of SITE.sections) {
    const slide = el('div', 'slide');
    slide.id = sec.id;
    const section = el('section', 'section');

    let html = '';
    if (sec.label)   html += `<p class="section-label">${sec.label}</p>`;
    if (sec.title)   html += `<h2>${sec.title}</h2>`;
    if (sec.intro)   html += `<p class="section-intro">${sec.intro}</p>`;
    if (sec.images && sec.imagesPosition === 'afterIntro') html += renderImages(sec.images);
    if (sec.body)    html += renderBody(sec.body);
    if (sec.callout) html += `<blockquote class="callout">${sec.callout}</blockquote>`;
    if (sec.steps)   html += renderSteps(sec.steps);
    if (sec.images && sec.imagesPosition !== 'afterIntro') html += renderImages(sec.images);
    if (sec.videos)  html += renderVideos(sec.videos);
    if (sec.links)   html += renderLinks(sec.links);

    section.innerHTML = html;
    slide.appendChild(section);
    main.appendChild(slide);
  }

  // ── Footer ────────────────────────────────────────────────────
  // A bar spanning the whole site (like the nav), not part of the
  // horizontal slide sequence — only revealed once the current slide
  // is scrolled to its bottom.
  const footerEl = document.getElementById('site-footer');
  footerEl.textContent = SITE.footer;

  function getActiveSlide() {
    const mainRect = main.getBoundingClientRect();
    let active = null;
    let bestOverlap = -Infinity;
    document.querySelectorAll('.slide').forEach((slide) => {
      const r = slide.getBoundingClientRect();
      const overlap = Math.min(r.right, mainRect.right) - Math.max(r.left, mainRect.left);
      if (overlap > bestOverlap) { bestOverlap = overlap; active = slide; }
    });
    return active;
  }

  // Keeps the footer's reveal state and the nav's "current section"
  // indicator both in sync with whichever slide is actually in view.
  function updateActiveSection() {
    const active = getActiveSlide();
    const isHero = !active || active.classList.contains('hero');

    if (isHero) {
      footerEl.classList.remove('footer-visible');
    } else {
      const atBottom = active.scrollTop + active.clientHeight >= active.scrollHeight - 4;
      footerEl.classList.toggle('footer-visible', atBottom);
    }

    const activeHref = isHero ? null : `#${active.id}`;
    navLinks.querySelectorAll('a').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === activeHref);
    });
  }
  // Capture phase: catches vertical scroll within any .slide as well as
  // #site-main's own horizontal scroll (scroll events don't bubble).
  main.addEventListener('scroll', updateActiveSection, true);
  window.addEventListener('resize', updateActiveSection);
  updateActiveSection();

  // Once horizontal scrolling has fully settled, reset every slide
  // EXCEPT the active one back to its top — not done live, so a
  // slide's content doesn't visibly jump to top while it's still
  // partway through sliding out of view.
  function resetInactiveSlides() {
    const active = getActiveSlide();
    document.querySelectorAll('.slide').forEach((slide) => {
      if (slide !== active) slide.scrollTop = 0;
    });
  }
  if ('onscrollend' in window) {
    // Fires exactly once a scroll (from any input — wheel, trackpad,
    // scrollbar, keyboard) has fully come to rest, including snapping.
    main.addEventListener('scrollend', resetInactiveSlides, true);
  } else {
    // Fallback for browsers without scrollend: a plain mouse wheel can
    // send events in spaced-out bursts, so debounce on a pause instead.
    let settleTimer;
    main.addEventListener('scroll', () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(resetInactiveSlides, 150);
    }, true);
  }

  // ── Horizontal navigation ────────────────────────────────────
  // Logo click resets to the first slide (native "#" anchor behavior
  // only affects document scrollTop, not #site-main's scrollLeft).
  navBrand.addEventListener('click', (e) => {
    e.preventDefault();
    main.scrollTo({ left: 0, behavior: 'smooth' });
  });

  // Left/right arrow keys jump one full slide at a time. Vertical
  // mouse-wheel motion is intentionally left alone — it only scrolls
  // within a slide (for tall content) and never advances slides.
  // Moving between slides requires an actual horizontal gesture
  // (trackpad swipe, shift+wheel, scrollbar), a nav link, or these
  // arrow keys.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') main.scrollBy({ left: main.clientWidth, behavior: 'smooth' });
    if (e.key === 'ArrowLeft')  main.scrollBy({ left: -main.clientWidth, behavior: 'smooth' });
  });

})();
