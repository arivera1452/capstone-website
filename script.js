// ═══════════════════════════════════════════════════════════════
// SITE DATA  —  Edit everything here to update the page.
// You never need to touch index.html or styles.css.
// ═══════════════════════════════════════════════════════════════

const SITE = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:  "MCAD Capstone 2026",
    title:    "Tiles",
    hook:     "A short, punchy hook — one sentence that grabs attention and earns the next read.",
    desc:     "Brief description of the project: what it is, who it's for, and why it matters. Two to three sentences max.",
    author:   "Andrew Rivera",
    program:  "User Experience Design",
    year:     "2026",
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
  //   images  — { cols: 1|2|3, items: [{ src, caption, ratio }] }
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

      intro: "One or two sentences framing the core problem — who is affected, what they struggle with, and why existing solutions fall short.",

      body: [
        "Expand on the problem here. Describe the domain, the users, and the specific friction or gap you identified. What makes this worth solving? What happens when it goes unsolved?",
        "You can add as many paragraphs as you need — each string in this array becomes a paragraph.",
      ],

      callout: "\"A pull quote that captures the heart of the problem — could be something a user said, a striking statistic, or your own framing.\"",

      images: {
        cols: 2,
        items: [
          { src: "", caption: "Image supporting the problem — photo, diagram, or context" },
          { src: "", caption: "Second supporting image" },
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

  function renderImages(imgData) {
    if (!imgData || !imgData.items || imgData.items.length === 0) return '';
    const cols = imgData.cols || 2;
    let html = `<div class="image-grid cols-${cols}">`;
    for (const img of imgData.items) {
      const ratio = img.ratio || '';
      html += `<div class="image-card ${ratio}">`;
      if (img.src) {
        html += `<img src="${img.src}" alt="${img.caption || ''}">`;
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

  // ── Nav ───────────────────────────────────────────────────────
  const navBrand = document.querySelector('.nav-brand');
  navBrand.textContent = SITE.hero.title;

  const navLinks = document.querySelector('.nav-links');
  for (const link of SITE.nav) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.href}">${link.label}</a>`;
    navLinks.appendChild(li);
  }

  // ── Hero ──────────────────────────────────────────────────────
  const main = document.getElementById('site-main');

  const hero = el('section', 'hero');
  hero.innerHTML = `
    <p class="hero-eyebrow">${SITE.hero.eyebrow}</p>
    <h1>${SITE.hero.title}</h1>
    ${SITE.hero.hook ? `<p class="hero-hook">${SITE.hero.hook}</p>` : ''}
    <div class="hero-divider"></div>
    <p class="hero-desc">${SITE.hero.desc}</p>
    <div class="hero-meta">
      <span><strong>${SITE.hero.author}</strong></span>
      <span>${SITE.hero.program}</span>
      <span>${SITE.hero.year}</span>
    </div>`;
  main.appendChild(hero);

  // ── Sections ──────────────────────────────────────────────────
  for (const sec of SITE.sections) {
    const section = el('section', 'section');
    section.id = sec.id;

    let html = '';
    if (sec.label)   html += `<p class="section-label">${sec.label}</p>`;
    if (sec.title)   html += `<h2>${sec.title}</h2>`;
    if (sec.intro)   html += `<p class="section-intro">${sec.intro}</p>`;
    if (sec.body)    html += renderBody(sec.body);
    if (sec.callout) html += `<blockquote class="callout">${sec.callout}</blockquote>`;
    if (sec.steps)   html += renderSteps(sec.steps);
    if (sec.images)  html += renderImages(sec.images);
    if (sec.videos)  html += renderVideos(sec.videos);
    if (sec.links)   html += renderLinks(sec.links);

    section.innerHTML = html;
    main.appendChild(section);
  }

  // ── Footer ────────────────────────────────────────────────────
  document.getElementById('site-footer').textContent = SITE.footer;

})();
