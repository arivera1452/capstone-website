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
  //   steps   — array of { label, detail, image, images, imagesWidth } objects
  //             image (optional)  — { src, caption, ratio, position, width },
  //             a single image rendered inside that step, after its detail text
  //             images (optional) — array of the same, rendered side by side
  //             (use image OR images, not both; imagesWidth caps the row's width)
  //   images  — { cols: 1|2|3|4, width, matchHeight, bare, items: [{ src, caption, link, ratio, position }] }
  //             link (optional) — makes the caption a clickable link (e.g. source credit)
  //             width — e.g. "75%", caps the image grid width (left-aligned)
  //             matchHeight — true: images share one row height, widths
  //             follow each photo's natural aspect ratio (no cropping,
  //             ignores per-item ratio). Good for photos of different shapes.
  //             bare — true: no card background behind the image
  //             (captions still show if an item has one)
  //   imagesPosition — "afterIntro" to place images between intro and body
  //                    (default places them after callout/steps)
  //   videos  — array of { src, caption }
  //             src: YouTube URL, local file path, or "" for placeholder
  //   links   — array of { label, href, desc }
  //
  // IMAGE ratio options: "wide" (16/9) | "tall" (3/4) | "square" (1/1)
  //   | "original" (no cropping — uses the image's own native ratio)
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
        items: [
          { src: "images/LincolnSquarePotteryStudioLearningCenter_GlazeTileWall_glazeWall_PotteryStudio+Organization-chicago-pottery-studio-access-clay-glazes-wheels-PotteryWheel-Handbuilding-Lincolnsquarepotterystudiolearningcenter.webp", caption: "Source: LSPS-LC's Glaze Test Tile Wall", link: "https://www.comeplaywithclay.com/featured-artists/lsps-lcs-glaze-test-tile-wall" },
        ]
      },

      steps: [],
    },

    // ── 02 — Research ──────────────────────────────────────────
    {
      id:    "research",
      label: "02 — Research",
      title: "Relevant Research, Data Collection & User Testing",

      intro: "Research for Tiles combined firsthand ceramics experience, a look at existing tools like Pottery Notes and Glazy.org, and direct feedback from real studio users rather than formal academic study. Two rounds of testing at Squeaky Wheel Pottery, one on an early build and one after adding the community board, shaped the app's direction and confirmed what mattered most to the people who would actually use it.",

      imagesPosition: "afterIntro",
      images: {
        cols: 1,
        items: [
          { src: "images/Screenshot 2026-07-19 at 3.43.52 PM.png", caption: "Squeaky Wheel Pottery Teaching Studio" },
        ]
      },

      body: [
        "Research for Tiles combined domain expertise, review of adjacent tools, and direct in-studio feedback rather than formal academic study. Desk research drew on two existing apps as inspiration, alongside almost a decade of personal experience in clay studios and teaching. The most valuable research came from watching real potters use the prototype directly. Two rounds of testing were conducted at Squeaky Wheel Pottery: the first with the studio owner, a member, and an instructor on an early build, and the second with ceramics professional Molly Rivera after the community board was added. Round 1 shaped the app's direction, surfacing the need for the community board and ideas around education and materials tracking; round 2 tested and refined that more complete version.",
      ],

      steps: [
        { label: "Desk research",       detail: "Desk research began with two existing tools as a jumping-off point: Pottery Notes, an app for personal glaze and piece tracking, and Glazy.org, a widely used online glaze recipe database. Both offered useful reference points, from Pottery Notes' approach to logging individual pieces to Glazy's searchable, shared recipe model. This was paired with almost a decade of personal experience in clay studios and teaching ceramics, grounding the project in firsthand familiarity with how a studio documents and shares glaze knowledge.",
          images: [
            { src: "images/pottery_notes.webp", caption: "Pottery Notes — reference point for personal glaze and piece tracking", ratio: "tall" },
            { src: "images/Screenshot 2026-07-19 at 3.27.53 PM.png", caption: "Glazy.org — reference point for a searchable, shared recipe model", ratio:"tall" },
          ] },
        { label: "Data collection",     detail: "Feedback was gathered informally, through in-person conversation and observation at Squeaky Wheel Pottery, rather than surveys or structured interviews. A small group of two to five people, including the studio owner, a member, an instructor, and later a ceramics professional reviewer, interacted with the prototype across two rounds. This traded breadth for depth: fewer participants, but feedback rooted in real studio use." },
        { label: "User testing — round 1", detail: "The first round was conducted with the studio owner, a studio member, and an instructor at Squeaky Wheel Pottery, using an earlier build without real glaze images or the community board. Participants worked through the existing archive and piece tracker as they would in a normal session. The clearest takeaway was the need for a shared, social layer, leading directly to the community board. Participants also raised an educational component and a way to track materials and costs on the admin side.",
          image: { src: "images/IMG_9066.JPG", caption: "Lexie (Studio Member), Brian (Instructor), and Babett (Squeaky Wheel Pottery Owner)." } },
        { label: "User testing — round 2", detail: "The second round was conducted with Molly Rivera, a ceramics professional and studio operations manager at Red Wing Arts, after the community board was built and added. This tested how a more complete version of Tiles, now including glaze imagery and the social layer, held up under review from someone with ceramics and studio operations expertise. Feedback was organized into themed clusters and implemented directly into the app.",
          image: { src: "images/DSC08145.jpg", caption: "Molly Rivera (Subject Matter Expert)", ratio: "tall" } },
        { label: "Synthesis",           detail: "Feedback was synthesized by identifying recurring themes across both rounds: what people struggled with, what they responded to immediately, and what they asked for unprompted. The core tools were understood quickly, while the social and administrative layers needed more definition. This informal, thematic approach fit the scale of the research: a small, trusted group of real studio users and one outside reviewer, observed and interviewed directly." },
      ],

    },

    // ── 03 — Questions & Thoughts ──────────────────────────────
    {
      id:    "questions",
      label: "03 — Questions & Thoughts",
      title: "Questions, Thoughts Toward a Solution",

      intro: "The core question behind Tiles was how to make glazing, often the most rushed and confusing part of a ceramics education, easier to understand and reference. That question, rooted in years of watching students struggle with the tile wall and glaze documentation, shaped both the initial concept and its later addition of a shared community space.",

      imagesPosition: "afterIntro",
      images: {
        cols: 1,
        items: [
          { src: "images/CSoM Teaching.png", caption: "Andrew Rivera demonstrating how to glaze at The Clay Studio of Missoula.", ratio:"square" },
        ]
      },

      body: [
        "The central question driving this project was simple to state and hard to solve: how could the process of glazing, and understanding glaze, be made easier and more intuitive for the people actually doing it?",

        "This question came directly out of teaching. Glazing is almost always the last thing covered in a ceramics class, which means a huge amount of information gets crammed into a single session right when students are the most overwhelmed. Paying close attention to where students got stuck, and where I found myself getting caught up too, made two patterns clear. First, the test tile wall itself was a consistent point of confusion. Students didn't know how to read it or use it as a reference. Second, there was a general lack of documentation around glazes and combinations, so even a well-labeled wall only went so far.",

        "Alongside this, I've always told students to keep notes on their pieces, since it can be weeks or longer between applying a glaze and seeing the final result come out of the kiln. That gap between action and outcome is a recurring sticking point in ceramics, and it applies to every glaze session, not just a student's first one.",

        "These observations shaped the early hypothesis behind Tiles: if students and studio members had a convenient, approachable way to reference glazes and combinations, while also tracking their individual pieces from application to finished result, the confusion around glazing could be significantly reduced. User research during the design process reinforced and extended this thinking, and led directly to the addition of the community board, giving students, studio members, and admins a shared space to stay connected and stay current on what's happening in their individual studios.",
      ],

      callout: "\"A question that shaped everything, or an early hypothesis that turned out to be right (or wrong) in an interesting way.\"",

      steps: [],
    },

    // ── 04 — Process + Tools ───────────────────────────────────
    {
      id:    "process",
      label: "04 — Process + Tools",
      title: "Process & Tools",

      intro: "Tiles moved through four phases, from an early single-file prototype to a fully documented, tested application. The clearest turning point came in Phase 2, when user feedback overturned an initial decision to avoid social features, leading to the community board that now anchors the app's shared studio experience.",

      body: [
        "Building and researching Tiles drew on a range of tools across design, development, and research: Figma and Adobe Illustrator for interface design and visual identity, Photoshop for image editing and photo preparation, VS Code and Claude Code for building and iterating on the prototype, and photography to document real test tiles, glaze combinations, and the studio environment itself. On the research side, observational study and interviewing formed the backbone of user feedback throughout. These tools carried the project through four phases, from an early single-file prototype to a fully tested and documented application.",
      ],

      steps: [
        { label: "Prototype",   detail: "The project began with a single-file HTML, CSS, and JavaScript prototype, chosen deliberately to allow fast iteration without the overhead of a full development environment or backend infrastructure. This phase focused on building the core of Tiles: a test tile archive and an early piece tracker. Figma and Adobe Illustrator were used to establish the visual identity and interface direction, Claude Code supported development throughout, and GitHub was used for version control and progress tracking." },
        { label: "Feedback & Divergence",   detail: "The first round of user testing at Squeaky Wheel Pottery surfaced a clear gap in the prototype: the need for a shared, social space. This was where the process diverged most from the original plan. Social features had deliberately been left out early on, out of concern that Tiles would turn into social media for pottery, something noisy and disconnected from the actual work. After hearing directly from multiple users, it became clear that a small, controlled social environment, limited strictly to the studio someone belongs to, was actually important, not a distraction. That shift led to building the community board, tying posts to individual studios and giving members, instructors, and admins a shared space to stay connected." },
        { label: "Refinement",   detail: "With the community board added, the second round of testing brought in ceramics professional Molly Rivera to review the more complete prototype, now including real glaze imagery alongside the new social layer. Feedback from this round was organized into themed clusters and implemented directly into the app, refining both the existing tools and the newly added community features." },
        { label: "Delivery",   detail: "The final phase focused on polish, documentation, and the deliverables themselves: refining the prototype based on all rounds of feedback, building the companion case study website using a config-driven structure hosted on GitHub Pages, and preparing final presentation materials. WordPress was used throughout to document progress in a running blog, and the case study site now serves as the portfolio-facing record of the entire process." },
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

      intro: "Tiles addresses the original problem through four interconnected parts, each solving a distinct piece of daily studio life. Together they move the project from a single fix for the test tile wall into a tool built for how a studio actually runs.",

      imagesPosition: "afterIntro",
      images: {
        matchHeight: true,
        bare: true,
        cols: 4,
        items: [
          { src: "images/glazemixer_feedback_updates.png", caption: "Glaze Mixer & Test Tile Archive" },
          { src: "images/piecetracker_savebutton.png", caption: "Piece Tracker" },
          { src: "images/communityboard_search_icons.png", caption: "Community Board" },
          { src: "images/studio-management.png", caption: "Studio Management Backend" },

        ]
      },

      body: [
        "Tiles is made up of four interconnected parts, each built to address a specific piece of the original problem while working together as one cohesive tool. The glaze mixer and test tile archive takes the physical wall itself and puts it in members' hands, searchable and accessible from anywhere. The piece tracker closes the gap between applying a glaze and seeing the finished result, giving members a place to document their work as it moves through each stage. The community board extends that same accessibility to the studio's people, not just its information, creating a shared space for members, instructors, and admins to stay connected. And the studio management backend ties it all together, giving whoever runs the studio a way to keep that studio's information accurate and its membership current. Together, these four parts turn Tiles from a single fix into a tool a studio can rely on day to day.",
      ],

      steps: [
        { label: "Glaze Mixer & Test Tile Archive", detail: "This is the digital version of the studio's test tile wall, put directly in members' hands. Users can browse the full range of glaze options available to their studio, look through individual glazes, and see how different combinations actually turn out when layered together. Instead of scanning a physical wall for a specific combination, members can search and reference the same information from anywhere, on their own device." },
        { label: "Piece Tracker", detail: "The piece tracker documents an individual piece from start to finish, following the four main stages of ceramics: greenware, bisque, glaze, and fired. At each stage, users can archive photographs and notes, building a running record of a piece as it moves through the process. A progress bar gives an at-a-glance view of where a piece currently stands, closing the gap between applying a glaze and seeing the final result weeks later." },
        { label: "Community Board", detail: "The community board gives studio members, instructors, and admins a shared space to stay connected, tied specifically to the studio they belong to. Members can post directly, including text, images, and links to specific pieces from the piece tracker, keeping conversation grounded in real, in-progress work rather than existing as a separate, disconnected feed." },
        { label: "Studio Management Backend", detail: "This is the administrative layer, available to whoever sets up and runs a studio within the app. Studio owners and admins can add information about their studio, generate and share a join code that lets members access that specific studio, and update the glazes that appear in the glaze mixer for their members to browse. This keeps each studio's information self-contained and accurate, managed directly by the people running it." },
      ],

      videos: [
        { src: "", caption: "Optional: final demo, walkthrough, or presentation recording" },
      ],
    },

    // ── 06 — Summary ───────────────────────────────────────────
    {
      id:    "summary",
      label: "06 — Summary",
      title: "Summary",

      intro: "What emerged went further than expected, revealing along the way how much design and ceramics actually have in common, and how much a quieter corner of the arts community wanted a shared space of its own.",

      body: [
        "Tiles set out to solve a specific, practice-based problem: the physical test tile wall found in most pottery studios, valuable but overwhelming, accessible only in person, and permanently lost if a tile breaks. What actually got made was a working prototype that goes beyond that original problem: a digital glaze archive, a piece tracker, a community board, and a studio management backend, all built and refined through direct feedback from real studio users at Squeaky Wheel Pottery.",

        "The biggest surprise throughout the process was how much people wanted a social aspect added to the project. Having worked in community studios and alongside plenty of artists, the assumption going in was that most people in the arts like to share and talk. But there's also a quieter, more introverted side to that community, one this project's designer knows firsthand. The community board ended up answering a need that wasn't part of the original plan: an easier way to open a conversation before, or instead of, talking in person.",

        "Looking back, the clearest thing to do differently would be more user research. More interviews, more observation, more time spent watching people actually use the tool. The condensed timeline of a summer semester made it difficult to fit in as much of that as this kind of project deserves, and a longer runway would have surfaced even more of what shaped the community board and piece tracker.",

        "More than anything, this project revealed how much crossover actually exists between design and ceramics, and how easy it is to overlook what's right in front of you. This wasn't a hypothetical problem; it was one personally lived with for years before it became a project. That experience reinforced a belief that the best design comes from genuinely understanding a problem at its root, not just observing it from the outside. And even where the problem was personal, working with other people throughout this process was a reminder that asking good questions and understanding someone else's point of view matters just as much as understanding your own.",
      ],

      callout: "\"A closing thought — something you want a reader to leave with after seeing this work.\"",

      images: {
        cols: 1,
        items: [
          { src: "", caption: "Final project image, presentation photo, or closing visual", ratio: "wide" },
        ]
      },

      links: [
        { label: "Progress Platform",         href: "https://tiles.blog", desc: "Documentation of ongoing work throughout the semester" },
        { label: "Works Cited / Bibliography", href: "https://docs.google.com/document/d/1vlw7-nrYTQnguVd-KrGNKYAbY60mJiw-CPaZL67O1aw/edit?usp=sharing", desc: "All research sources and references" },
        { label: "Capstone Project",           href: "https://arivera1452.github.io/glaze-mixer/", desc: "The final project — prototype, app, or deliverable" },
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
    const gridClass = (imgData.matchHeight ? 'match-height' : `cols-${cols}`) + (imgData.bare ? ' bare' : '');
    let html = `<div class="image-grid ${gridClass}"${widthStyle}>`;
    for (const img of imgData.items) {
      const ratio = imgData.matchHeight ? '' : (img.ratio || '');
      html += `<div class="image-card ${ratio}">`;
      if (img.src) {
        const posStyle = img.position ? ` style="object-position: ${img.position}"` : '';
        html += `<img src="${img.src}" alt="${img.caption || ''}"${posStyle}>`;
      } else {
        html += imagePlaceholder(ratio);
      }
      if (img.caption) {
        const captionInner = img.link
          ? `<a href="${img.link}" target="_blank" rel="noopener">${img.caption}</a>`
          : img.caption;
        html += `<p class="image-caption">${captionInner}</p>`;
      }
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
            ${s.image ? renderImages({ cols: 1, width: s.image.width, items: [s.image] }) : ''}
            ${s.images ? renderImages({ cols: s.images.length, width: s.imagesWidth, items: s.images }) : ''}
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
  // Inlined (not <img src>) so the individual tiles are real DOM nodes
  // that CSS can animate apart on hover — see .nav-brand:hover in styles.css.
  // 6-tile logomark — nav-tile-1 is leftmost at rest.
  navBrand.innerHTML = `
    <svg class="nav-logo" viewBox="0 0 729.65 413.63" role="img" aria-label="${SITE.hero.title}">
      <defs>
        <style>
          .nav-tile-1 { fill: #5C2912; }
          .nav-tile-1, .nav-tile-2, .nav-tile-3, .nav-tile-4, .nav-tile-5, .nav-tile-6 { opacity: .9; }
          .nav-tile-2 { fill: #9E4E28; }
          .nav-tile-3 { fill: #C4673A; }
          .nav-tile-4 { fill: #D67F52; }
          .nav-tile-5 { fill: #E3A277; }
          .nav-tile-6 { fill: #F2CBA8; }
        </style>
      </defs>
      <g transform="translate(0,413.63) rotate(-90)">
        <g transform="translate(430.27 6.89) rotate(45)"><rect class="nav-tile-6" x="50.31" y="366.34" width="313.01" height="313.01" rx="35.04" ry="35.04"/></g>
        <g transform="translate(385.58 -11.62) rotate(45)"><rect class="nav-tile-5" x="50.31" y="303.13" width="313.01" height="313.01" rx="35.04" ry="35.04"/></g>
        <g transform="translate(340.89 -30.13) rotate(45)"><rect class="nav-tile-4" x="50.31" y="239.92" width="313.01" height="313.01" rx="35.04" ry="35.04"/></g>
        <g transform="translate(296.2 -48.64) rotate(45)"><rect class="nav-tile-3" x="50.31" y="176.72" width="313.01" height="313.01" rx="35.04" ry="35.04"/></g>
        <g transform="translate(251.51 -67.15) rotate(45)"><rect class="nav-tile-2" x="50.31" y="113.51" width="313.01" height="313.01" rx="35.04" ry="35.04"/></g>
        <g transform="translate(206.82 -85.67) rotate(45)"><rect class="nav-tile-1" x="50.31" y="50.31" width="313.01" height="313.01" rx="35.04" ry="35.04"/></g>
      </g>
    </svg>`;

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
