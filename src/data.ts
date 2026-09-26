// Images are kept in `public/images`, so build their URLs from Vite's base
// path. This works both locally and when the app is served from a GitHub
// Pages repository subpath.
const imageUrl = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const portraitImg = imageUrl("portrait.jpg");
const mentorImg = imageUrl("proj-mentor.jpg");
const rcmImg = imageUrl("proj-rcm.jpg");
const careerImg = imageUrl("proj-career.jpg");
  const systemImg = imageUrl("proj-system.jpg");
const logoUrl = (name: string) => `${import.meta.env.BASE_URL}logos/${name}`;

export const PORTRAIT = portraitImg;

export const LINKS = {
  email: "hello@gargeemonijose.com",
  linkedin: "https://www.linkedin.com/in/gargee-moni-jose",
  behance: "https://www.behance.net/gargeemonijose",
  cv: "#/resume",
};

export const CLIENTS = [
  { name: "Cliniqon", src: logoUrl("cliniqon.svg") },
  { name: "Lifology", src: logoUrl("lifology.svg") },
  { name: "Vonnue", src: logoUrl("vonnue.svg") },
  { name: "The Village", src: logoUrl("the-village.svg") },
  { name: "Kutubuku", src: logoUrl("kutubuku.svg") },
  { name: "Grab", src: logoUrl("grab.svg") },
  { name: "Elektrobit", src: logoUrl("elektrobit.svg") },
  { name: "Certfyme", src: logoUrl("certfyme.svg") },
  { name: "HillBlooms", src: logoUrl("hillblooms.svg") },
  { name: "MVP", src: logoUrl("mvp.svg") },
  { name: "Pilar", src: logoUrl("pilar.svg") },
  { name: "Hubbo POS", src: logoUrl("hubbo-pos.svg") },
];

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  industry: string;
  year: string;
  img: string;
  alt: string;
  summary: string;
  role: string;
  timeline: string;
  team: string;
  platform: string;
  problem: string;
  context: string[];
  research: { title: string; body: string }[];
  insights: { title: string; body: string }[];
  flow: string[];
  ia: { level: string; items: string[] }[];
  wireframes: string[];
  directions: { name: string; body: string }[];
  system: { label: string; value: string }[];
  uiScreens: string[];
  uiImages?: { src: string; alt: string }[];
  interaction: string;
  outcome: string;
  reflection: { learned: string; improve: string; next: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "mentor-discovery-platform",
    title: "Mentor Discovery Platform",
    tags: ["EdTech", "B2C", "WebApp"],
    industry: "EdTech",
    year: "2025",
    img: mentorImg,
    alt: "Silver laptop resting above a dark rock against a cobalt blue studio backdrop, project artwork for the Mentor Discovery Platform.",
    summary:
      "A discovery experience that helps learners find the right mentor — structured around fit, availability and proof rather than an endless directory of profiles.",
    role: "Product Designer — research, IA, interaction, visual design, handoff",
    timeline: "[start] – [end], [duration]",
    team: "1 product designer, 2 engineers, 1 product manager",
    platform: "Responsive web application",
    problem:
      "Learners arrive with a vague goal and a limited budget, then face a wall of near-identical mentor profiles. Without a way to compare fit, people either over-message mentors who cannot help them or abandon the search entirely. The business feels this as failed first sessions: the mismatch is created at discovery, long before the session happens.",
    context: [
      "The product already had a working mentor directory, so the brief was not to launch something new but to restructure an existing, lightly used surface.",
      "Mentors supply their own profiles, which means the design has to produce clarity out of inconsistent, self-reported input.",
      "Discovery happens on phones far more often than on desktop, so the primary layout had to survive a narrow measure before it earned a wide one.",
      "Engineering capacity was limited to one quarter, which pushed the work towards restructuring existing components rather than a full rebuild.",
    ],
    research: [
      {
        title: "Stakeholder conversations",
        body: "Worked sessions with product and support to map where enquiries stalled and what the team already believed was failing. [Findings to be added from the project record.]",
      },
      {
        title: "Existing product audit",
        body: "A screen-by-screen pass over the current directory, noting duplicated fields, dead-ends, and the points where a learner had to hold information in their head.",
      },
      {
        title: "User interviews",
        body: "[n] semi-structured interviews with learners who had searched for a mentor in the previous three months. [Synthesised findings to be added.]",
      },
      {
        title: "Competitive analysis",
        body: "Compared how six marketplaces — coaching, tutoring and career — sequence filters, profiles and booking, and where each one loses the user.",
      },
    ],
    insights: [
      {
        title: "Fit is judged before expertise",
        body: "Learners shortlist on whether someone understands their situation, then check credentials. The interface led with credentials.",
      },
      {
        title: "Comparison needs a common frame",
        body: "Profiles that each emphasise different things cannot be compared. A shared structure matters more than a complete one.",
      },
      {
        title: "Vague goals need a way in",
        body: "Most people could not state a goal precisely on arrival, so the first interaction had to help form the question rather than demand an answer.",
      },
      {
        title: "Availability is part of the decision",
        body: "Time zones and response windows were checked late, after emotional investment, and frequently broke the match.",
      },
    ],
    flow: [
      "Land on discovery",
      "State an intent",
      "Review shortlist",
      "Compare three mentors",
      "Open profile",
      "Check availability",
      "Request a session",
    ],
    ia: [
      {
        level: "Discovery",
        items: ["Intent entry", "Filtered results", "Shortlist"],
      },
      { level: "Mentor profile", items: ["Fit summary", "Evidence", "Availability"] },
      { level: "Booking", items: ["Session request", "Confirmation", "Follow-up"] },
    ],
    wireframes: [
      "Intent entry — first-run",
      "Results with shared comparison frame",
      "Profile: fit first, credentials second",
      "Comparison view, three columns",
      "Availability and request",
    ],
    directions: [
      {
        name: "Direction 01 — Directory",
        body: "Kept the existing card grid and added filters. Cheap to ship, but it preserved the comparison problem rather than solving it.",
      },
      {
        name: "Direction 02 — Guided intake",
        body: "A short stated-intent step before results. Made the first screen slower but gave every downstream view a shared frame to compare against.",
      },
      {
        name: "Final direction — Shortlist of three",
        body: "Intent entry feeding a deliberately small, comparable shortlist, with availability visible before the profile is opened.",
      },
    ],
    system: [
      { label: "Colour", value: "Ink #0F0F0F · Paper #FFFFFF · Cobalt #1B54FF · Border #EAEAEA" },
      { label: "Type", value: "Plus Jakarta Sans, 200–800 · IBM Plex Mono for metadata" },
      { label: "Spacing", value: "4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96" },
      { label: "Radius", value: "6 / 8 / 12 — media 12, controls 8, tags pill" },
      { label: "Controls", value: "Buttons 44h, inputs 48h, tags 26h" },
      { label: "States", value: "Default · hover · focus-visible · disabled · loading · empty" },
    ],
    uiScreens: ["Discovery home", "Intent entry", "Shortlist", "Mentor profile"],
    interaction:
      "Motion is limited to state confirmation: a 220ms ease-out on card hover, an underline wipe on text links, and a short rise when a shortlist item is added. Nothing animates while a learner is reading or comparing.",
    outcome:
      "Shipped a restructured discovery flow across the responsive web app: intent entry, a shared comparison frame, and availability surfaced before the profile. [Business impact metric to be added — no measured result is claimed here.]",
    reflection: {
      learned:
        "The strongest lever was structural, not visual. Adding a shared frame to the profile cards did more for comparison than any amount of styling inside them.",
      improve:
        "I would run the intent entry as a live A/B test rather than a usability session — the trade-off between a slower first screen and better downstream matches only shows up at volume.",
      next:
        "Explore how mentor-side inputs could be structured at write time, so discovery clarity comes from better data rather than more filtering.",
    },
  },
  {
    slug: "rcm-claims-workflow-console",
    title: "RCM Claims Workflow Console",
    tags: ["HealthTech", "B2B", "WebApp"],
    industry: "HealthTech",
    year: "2025",
    img: rcmImg,
    alt: "White tablet on a pale grey desk showing a softly out-of-focus blue interface, project artwork for the RCM claims console.",
    summary:
      "An internal console for revenue-cycle teams working claims through denial, review and resubmission — designed around queue priority rather than raw record lists.",
    role: "UI/UX Designer — workflow mapping, interface design, design system contribution",
    timeline: "[start] – [end], [duration]",
    team: "Designers, billing subject-matter experts, engineering",
    platform: "Desktop web application",
    problem:
      "Agents worked from flat lists of claims with no shared sense of what was urgent. Priority lived in individual heads and spreadsheets, so handovers and absences slowed the whole queue. [Quantified impact to be added.]",
    context: [
      "The console is used all day by specialist agents, so every interaction cost is multiplied across hundreds of records.",
      "Domain experts hold the real rules; the designer's job was to surface those rules in the interface rather than invent new ones.",
      "Compliance constraints rule out several patterns common in consumer dashboards, including irreversible bulk actions.",
      "The existing interface had grown screen by screen, leaving four different table treatments in the same product.",
    ],
    research: [
      {
        title: "Contextual observation",
        body: "Watched agents work a live queue and noted where they left the tool to check something elsewhere. [Observation log to be added.]",
      },
      {
        title: "Workflow mapping",
        body: "Mapped the claim lifecycle end to end with billing experts, then marked which steps the interface currently hides.",
      },
      {
        title: "Support and ticket review",
        body: "Grouped internal support requests by surface to find recurring friction. [Summary to be added.]",
      },
      {
        title: "Heuristic evaluation",
        body: "Reviewed the current console against Nielsen's heuristics, focused on error prevention and consistency of table behaviour.",
      },
    ],
    insights: [
      {
        title: "Priority is invisible in the data",
        body: "Sorting by date produced a queue that looked organised and behaved randomly. Sequence and urgency were being treated as the same thing.",
      },
      {
        title: "Context switching costs more than clicks",
        body: "Agents left the record to check a status elsewhere. Bringing that state inline removed a step that no one had thought to count.",
      },
      {
        title: "Four tables, four behaviours",
        body: "Inconsistent table interactions meant agents carried a mental model per screen. One shared table component removed that load.",
      },
    ],
    flow: [
      "Open queue",
      "Select claim",
      "Read denial reason",
      "Gather documents",
      "Apply correction",
      "Second review",
      "Resubmit",
    ],
    ia: [
      { level: "Queue", items: ["Priority lanes", "Saved views", "Bulk review"] },
      { level: "Claim record", items: ["Summary", "Timeline", "Documents"] },
      { level: "Action", items: ["Correction", "Review", "Resubmission"] },
    ],
    wireframes: [
      "Priority lanes",
      "Unified claim table",
      "Record with inline status",
      "Correction panel",
      "Review and resubmit",
    ],
    directions: [
      {
        name: "Direction 01 — Filters",
        body: "Added filters to the existing list. Fast, but it kept the burden of sequencing on the agent.",
      },
      {
        name: "Direction 02 — Kanban lanes",
        body: "Full board with drag and drop. Clear, but too heavy for a queue that changes hundreds of times a day.",
      },
      {
        name: "Final direction — Lanes plus unified table",
        body: "Lightweight priority lanes above one shared table component, with record context opened inline rather than on a new page.",
      },
    ],
    system: [
      { label: "Colour", value: "Ink #0F0F0F · Paper #FFFFFF · Status neutrals · Border #EAEAEA" },
      { label: "Type", value: "Plus Jakarta Sans 400–700 · tabular figures for amounts" },
      { label: "Spacing", value: "4 · 8 · 12 · 16 · 24 · 32 · 48" },
      { label: "Radius", value: "6 controls · 8 cards · pill tags" },
      { label: "Components", value: "Table, lane, status tag, drawer, toast, empty state" },
      { label: "States", value: "Default · hover · focus · selected · disabled · error" },
    ],
    uiScreens: ["Queue", "Claim record", "Correction panel", "Review"],
    interaction:
      "Row selection opens a drawer without losing queue position; status changes confirm inline with a toast. Keyboard-first navigation is supported because agents work at speed.",
    outcome:
      "Delivered a unified table component, priority lanes, and inline record context across the console. [Efficiency metric to be added — none is claimed here.]",
    reflection: {
      learned:
        "In internal tools, consistency is a feature. Collapsing four table patterns into one removed more daily friction than any single new screen.",
      improve:
        "I would validate the lane thresholds with real queue volumes before locking the design — the cut-offs were my assumption, not a measured rule.",
      next:
        "Prototype keyboard-only paths end to end and test them with agents who use the console full time.",
    },
  },
  {
    slug: "career-pathway-explorer",
    title: "Career Pathway Explorer",
    tags: ["EdTech", "B2C", "Mobile"],
    industry: "EdTech",
    year: "2024",
    img: careerImg,
    alt: "Two smartphones standing on a warm beige paper surface with softly out-of-focus screens, project artwork for the Career Pathway Explorer.",
    summary:
      "A mobile exploration tool that turns an overwhelming list of career options into a small, comparable set of next steps a student can actually take.",
    role: "Senior UI/UX Designer — research synthesis, flows, visual design",
    timeline: "[start] – [end], [duration]",
    team: "Design, content, engineering",
    platform: "Mobile web and responsive",
    problem:
      "Students were given long catalogues of roles and courses with no way to narrow by their own constraints, so exploration ended in paralysis rather than a decision. [Outcome data to be added.]",
    context: [
      "The audience is young, mobile-first and impatient with long forms.",
      "Content depth varies sharply between career paths, so the layout must look intentional with three lines or thirty.",
      "The tool sits inside a wider platform, so it inherits existing navigation and account states.",
      "Guidance counsellors review student output, which adds a second, print-friendly reading mode.",
    ],
    research: [
      {
        title: "Student interviews",
        body: "[n] interviews exploring how students currently narrow options and what they use as evidence of fit. [Findings to be added.]",
      },
      {
        title: "Counsellor conversations",
        body: "Established what a useful output looks like for the person reviewing it, which reframed the final screen.",
      },
      {
        title: "Content inventory",
        body: "Catalogued available path data and its inconsistencies before designing around it.",
      },
    ],
    insights: [
      {
        title: "Choice needs a boundary",
        body: "Open-ended exploration produced anxiety. A deliberately small set of options produced comparison, which is the actual work.",
      },
      {
        title: "Constraints are the real filter",
        body: "Students filtered by time, cost and access long before interest, but the product asked about interest first.",
      },
      {
        title: "The output has an audience",
        body: "Discovering that counsellors review the result changed the final screen from a share sheet to a printable summary.",
      },
    ],
    flow: [
      "Start with constraints",
      "Set interests",
      "Review paths",
      "Compare three",
      "Save a path",
      "Share summary",
    ],
    ia: [
      { level: "Onboarding", items: ["Constraints", "Interests"] },
      { level: "Explorer", items: ["Path list", "Path detail", "Comparison"] },
      { level: "Output", items: ["Saved paths", "Counsellor summary"] },
    ],
    wireframes: [
      "Constraint entry",
      "Path list",
      "Path detail, short form",
      "Compare three",
      "Printable summary",
    ],
    directions: [
      {
        name: "Direction 01 — Filterable catalogue",
        body: "A full list with facet filters. Familiar, but it reproduced the overwhelm the project set out to reduce.",
      },
      {
        name: "Direction 02 — Quiz",
        body: "A long guided assessment. High completion in testing, but it delayed the first useful screen.",
      },
      {
        name: "Final direction — Constraints first, three paths",
        body: "Two short steps produce a bounded set of three comparable paths, with a printable summary as the terminal screen.",
      },
    ],
    system: [
      { label: "Colour", value: "Ink #0F0F0F · Paper #FFFFFF · Warm neutral surface" },
      { label: "Type", value: "Plus Jakarta Sans 300–700, mobile-first scale" },
      { label: "Spacing", value: "4 · 8 · 12 · 16 · 24 · 32 · 48" },
      { label: "Radius", value: "8 controls · 12 media · pill tags" },
      { label: "Components", value: "Stepper, path card, comparison table, summary sheet" },
      { label: "States", value: "Default · hover · focus · saved · empty · loading" },
    ],
    uiScreens: ["Constraint entry", "Path list", "Comparison", "Summary"],
    interaction:
      "Transitions are limited to step changes and save confirmation; the comparison view holds its scroll position so students can move between paths without losing their place.",
    outcome:
      "Shipped a bounded exploration flow with a counsellor-facing summary. [Completion metric to be added.]",
    reflection: {
      learned:
        "Reducing options was the design decision. Everything after that was craft in service of making three choices legible.",
      improve:
        "I would test the printable summary earlier — it was discovered late and forced a rework of the final step.",
      next:
        "Look at whether saved paths should persist across sessions as a lightweight portfolio rather than a one-off result.",
    },
  },
  {
    slug: "cross-product-design-system",
    title: "Cross-Product Design System",
    tags: ["Design Systems", "B2B", "WebApp"],
    industry: "SaaS",
    year: "2024",
    img: systemImg,
    alt: "Top-down flat lay of printed grid and component specimen sheets on a light grey table, project artwork for the design system.",
    summary:
      "A modest, practical system: one table component, one spacing scale and one set of states, documented well enough that engineers stopped rebuilding them.",
    role: "Product Designer — audit, token definition, component specs, documentation",
    timeline: "[start] – [end], [duration]",
    team: "Design and front-end engineering",
    platform: "Web",
    problem:
      "Three product surfaces had drifted into three visual languages. Every screen was rebuilt rather than reused, and review time went to consistency arguments instead of the work itself.",
    context: [
      "The system had to be adopted voluntarily — there was no mandate, so documentation quality was the adoption strategy.",
      "Existing screens could not all be rebuilt, so components needed graceful fallbacks for un-migrated pages.",
      "Small team: the system had to be maintainable by one designer and one engineer.",
    ],
    research: [
      {
        title: "Interface inventory",
        body: "Captured every screen across surfaces and grouped them by pattern, producing the count that made the case internally.",
      },
      {
        title: "Component deduplication",
        body: "Compared supposedly identical components side by side to list their real differences before merging them.",
      },
      {
        title: "Engineering interviews",
        body: "Established which components were actually reused and which existed only in documentation.",
      },
    ],
    insights: [
      {
        title: "Drift starts at the seams",
        body: "Differences concentrated where screens met — tables, empty states and errors — rather than in primary content.",
      },
      {
        title: "Documentation is the product",
        body: "Components with a usage note and a state list were adopted; components with only a visual spec were not.",
      },
      {
        title: "Fewer, deeper",
        body: "One table with real states replaced three shallow variants and removed a recurring review conversation.",
      },
    ],
    flow: ["Inventory", "Deduplicate", "Tokenise", "Specify states", "Document", "Migrate"],
    ia: [
      { level: "Foundations", items: ["Colour", "Type", "Spacing", "Radius"] },
      { level: "Components", items: ["Table", "Button", "Input", "Tag", "Navigation"] },
      { level: "Patterns", items: ["Empty", "Error", "Loading", "Confirmation"] },
    ],
    wireframes: [
      "Token sheet",
      "Table anatomy",
      "Input states",
      "Tag and filter set",
      "Navigation spec",
    ],
    directions: [
      {
        name: "Direction 01 — Full library",
        body: "An ambitious, complete library. Realistic only with a team we did not have.",
      },
      {
        name: "Direction 02 — Themed tokens only",
        body: "Colour and type tokens with no components. Cheap, but it left implementation decisions untouched.",
      },
      {
        name: "Final direction — Foundations plus five components",
        body: "Tokens, five deeply specified components, and written usage notes for each — maintained by two people.",
      },
    ],
    system: [
      { label: "Colour", value: "Ink #0F0F0F · Paper #FFFFFF · Muted #8A8A8A · Border #EAEAEA" },
      { label: "Type", value: "Plus Jakarta Sans 200–800, 1.25 scale" },
      { label: "Spacing", value: "4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96" },
      { label: "Radius", value: "6 / 8 / 12" },
      { label: "Components", value: "Table, button, input, tag, navigation" },
      { label: "States", value: "Default · hover · focus · active · disabled · error · empty" },
    ],
    uiScreens: ["Token sheet", "Table", "Form controls", "Navigation"],
    interaction:
      "Component behaviour is documented rather than performed: focus order, keyboard access and state transitions are specified alongside the visual spec.",
    outcome:
      "Five components and a token set adopted across three surfaces. [Adoption figure to be added.]",
    reflection: {
      learned:
        "Adoption is a documentation problem. The system improved most when I wrote when not to use a component, not when to use it.",
      improve:
        "I would set a deprecation path for legacy screens from day one instead of letting them coexist indefinitely.",
      next:
        "Pair the visual tokens with a matching content-style guide, since tone drifted as fast as spacing did.",
    },
  },
  {
    slug: "hubbo-pos",
    title: "HUBBO POS",
    tags: ["F&B", "POS Software", "Website"],
    industry: "F&B",
    year: "2024",
    img: imageUrl("hubbo/home.jpg"),
    alt: "HUBBO POS home page showing a warm yellow restaurant point-of-sale website with a product dashboard and restaurant operations story.",
    summary:
      "A conversion-focused website for HUBBO POS, a Southeast Asian point-of-sale platform helping restaurant operators manage their business from one place.",
    role: "Design Lead & PoC",
    timeline: "Aug 2023 – Jan 2024",
    team: "Client, design and implementation stakeholders",
    platform: "Responsive marketing website",
    problem:
      "The previous website had high bounce rates, low conversion rates, and difficulty conveying the product clearly, which reduced lead generation.",
    context: [
      "HUBBO POS needed to explain a broad restaurant operations product to small and medium-sized business owners across Southeast Asia.",
      "The website had to turn product complexity into clear reasons to request a demo, while making the main conversion actions easy to find.",
      "Time constraints made a campaign page that mirrored the homepage a practical first step while the wider sales-driven website was being redesigned.",
      "The responsive system covered Web 1440, Web 1024, Tablet 768 and Mobile 375, with mobile receiving particular attention because of the audience behaviour.",
    ],
    research: [
      {
        title: "Product and audience analysis",
        body: "Analysed the product goals, features and target audience to understand what restaurant operators needed to know before taking the next step.",
      },
      {
        title: "Lead-generation research",
        body: "Studied effective lead-generation patterns and reviewed how strong B2B product websites use content, proof and calls to action to move visitors forward.",
      },
      {
        title: "Southeast Asian market analysis",
        body: "Compared regional trends with leading global players to identify familiar patterns and opportunities for HUBBO POS to communicate its value more clearly.",
      },
      {
        title: "Content and information architecture",
        body: "Structured the site around the questions a restaurant operator needs answered: what the product does, where it helps, what it integrates with and how to request a demo.",
      },
    ],
    insights: [
      {
        title: "The CTA needed context",
        body: "A button alone could not carry the conversion. Clear supporting copy and simple product visuals helped merchants understand what would happen after they clicked.",
      },
      {
        title: "The product needed to be seen in use",
        body: "Showing the POS interface alongside operational outcomes made the value easier to understand than a feature list on its own.",
      },
      {
        title: "A campaign page could move first",
        body: "A focused campaign page created an immediate lead-generation surface while the complete sales-driven website continued through design and implementation.",
      },
      {
        title: "Mobile was the primary constraint",
        body: "Designing down to 375px early kept the message, form and conversion path usable across the full range of devices.",
      },
    ],
    flow: [
      "Understand the product",
      "Map audience questions",
      "Structure the information architecture",
      "Test the conversion path",
      "Build the campaign page",
      "Extend to the full website",
      "Hand off and QA",
    ],
    ia: [
      {
        level: "Primary navigation",
        items: ["Home", "Solutions", "Pricing", "About", "Contact"],
      },
      {
        level: "Conversion path",
        items: ["Product value", "Features", "Proof", "Request demo"],
      },
      {
        level: "Responsive delivery",
        items: ["1440", "1024", "768", "375"],
      },
    ],
    wireframes: [
      "Homepage content and CTA structure",
      "Campaign page as the first release",
      "Solutions and feature hierarchy",
      "Pricing and request-demo flow",
      "Responsive layouts across four breakpoints",
    ],
    directions: [
      {
        name: "Direction 01 — Feature catalogue",
        body: "A product-first page that listed capabilities in detail. It explained the software, but left the visitor to connect features to their own restaurant operation.",
      },
      {
        name: "Direction 02 — Campaign-first launch",
        body: "A focused campaign page with the core value proposition, proof, features and request-demo form. It could go live quickly and begin supporting lead generation.",
      },
      {
        name: "Final direction — Sales-driven website",
        body: "The campaign structure became the foundation for a wider website, with clearer navigation, contextual CTAs and responsive page designs for the full product story.",
      },
    ],
    system: [
      { label: "Colour", value: "HUBBO POS yellow · Espresso brown · Warm cream · White" },
      { label: "Type", value: "Clear, high-contrast marketing hierarchy for fast scanning" },
      { label: "Layout", value: "Responsive compositions for 1440 · 1024 · 768 · 375" },
      { label: "Content", value: "Value proposition · features · integrations · testimonials · partners" },
      { label: "Tools", value: "Figma · Photoshop · Excel" },
      { label: "Delivery", value: "High-fidelity design · developer handoff · deployment QA" },
    ],
    uiScreens: [
      "Home page",
      "Solutions page",
      "About page",
      "Pricing page",
      "Request demo page",
      "Contact page",
    ],
    uiImages: [
      {
        src: imageUrl("hubbo/home.jpg"),
        alt: "HUBBO POS home page design",
      },
      {
        src: imageUrl("hubbo/solutions.jpg"),
        alt: "HUBBO POS solutions page design",
      },
      {
        src: imageUrl("hubbo/about.jpg"),
        alt: "HUBBO POS about page design",
      },
      {
        src: imageUrl("hubbo/pricing.jpg"),
        alt: "HUBBO POS pricing page design",
      },
      {
        src: imageUrl("hubbo/request-demo.jpg"),
        alt: "HUBBO POS request demo page design",
      },
      {
        src: imageUrl("hubbo/contact.jpg"),
        alt: "HUBBO POS contact page design",
      },
    ],
    interaction:
      "The interface uses repeated, contextual calls to action, clear content grouping and responsive form layouts to help a restaurant operator move from understanding the product to requesting a demo without losing their place.",
    outcome:
      "Designed a clearer, sales-driven HUBBO POS website and a campaign-page launch path, connecting product explanation, proof and demo conversion across responsive breakpoints.",
    reflection: {
      learned:
        "Conversion improves when the page answers the visitor's next question before asking them to act. The CTA became stronger once the surrounding content made the product understandable.",
      improve:
        "I would validate the campaign page with live lead-generation data earlier, using the first release to tune the message before extending the full site.",
      next:
        "Continue refining the content system around restaurant roles, operational moments and integration needs so each audience can find a relevant path quickly.",
    },
  },
  {
    slug: "most-valuable-promotions",
    title: "Most Valuable Promotions",
    tags: ["Sports", "Boxing", "Website"],
    industry: "Sports",
    year: "2023",
    img: imageUrl("mvp/home.jpg"),
    alt: "Most Valuable Promotions website homepage featuring boxing athletes and upcoming events.",
    summary:
      "A fighter-first digital home for Most Valuable Promotions, bringing athletes, events, media and ticket booking into one compelling website experience.",
    role: "Designer",
    timeline: "Jun 2022 – Jan 2023",
    team: "MVP stakeholders and implementation team",
    platform: "Responsive sports and events website",
    problem:
      "MVP needed a compelling website to feature its athletes, highlight upcoming and past events, and make ticket booking convenient directly through the platform.",
    context: [
      "Most Valuable Promotions builds careers and events around a fighter-first mentality, giving athletes more creative control over how they are presented.",
      "The website needed to balance athlete profiles, live event promotion, past-event history and media content without making the experience feel like a static archive.",
      "Upcoming events needed a clear path from discovery to event detail and ticket booking, while past events and galleries continued to build the MVP story.",
      "Motion was part of the experience: an opening animation welcomed visitors and smaller transitions carried energy through the rest of the site.",
    ],
    research: [
      {
        title: "Content and athlete inventory",
        body: "Mapped the content types needed to represent MVP: athletes, fighter profiles, events, press, galleries, videos and ticketing paths.",
      },
      {
        title: "Event journey analysis",
        body: "Structured the journey from discovering an upcoming event to understanding the matchup, exploring the detail page and moving to tickets.",
      },
      {
        title: "Media and archive review",
        body: "Grouped photos, videos, press and past events into a browsable content system that could support both current promotion and long-term discovery.",
      },
      {
        title: "Motion exploration",
        body: "Explored an opening animation and repeatable page transitions that could create a sense of arrival without slowing down content-heavy pages.",
      },
    ],
    insights: [
      {
        title: "Athletes are the brand",
        body: "The experience needed to make fighters feel like the primary story, with events and media supporting their careers rather than competing with them.",
      },
      {
        title: "Events need a clear next step",
        body: "An event page is most useful when it moves from anticipation to action: understand the matchup, see the details and book without searching for the next link.",
      },
      {
        title: "The archive builds credibility",
        body: "Past events, press and galleries give new visitors context while giving returning fans more ways to stay connected between fights.",
      },
      {
        title: "Motion sets the tone",
        body: "A strong opening moment and restrained in-page motion added energy to the site while keeping the content readable and the navigation clear.",
      },
    ],
    flow: [
      "Enter MVP",
      "Meet the athletes",
      "Explore upcoming events",
      "Open event detail",
      "Review matchup and details",
      "Book tickets",
    ],
    ia: [
      {
        level: "Primary navigation",
        items: ["Home", "Athletes", "Events", "Media", "About", "Contact"],
      },
      {
        level: "Events",
        items: ["Upcoming events", "Past events", "Event detail", "Tickets"],
      },
      {
        level: "Content",
        items: ["Fighter profile", "Press", "Photos", "Videos", "Gallery"],
      },
    ],
    wireframes: [
      "Homepage with athlete and event priorities",
      "Athlete list and fighter profile",
      "Upcoming event list and detail",
      "Past event archive",
      "Media, gallery and video viewer",
    ],
    directions: [
      {
        name: "Direction 01 — Event calendar",
        body: "An event-first structure that made upcoming fights easy to find, but pushed the athletes and the wider MVP story into supporting roles.",
      },
      {
        name: "Direction 02 — Athlete roster",
        body: "A profile-led approach that put fighters at the centre, but needed stronger event promotion and a clearer route to tickets.",
      },
      {
        name: "Final direction — Fighter-first promotion",
        body: "A connected system where the homepage introduces athletes and events together, then lets visitors move naturally into profiles, media, event details and tickets.",
      },
    ],
    system: [
      { label: "Colour", value: "High-contrast sports palette with dark surfaces and event-led accents" },
      { label: "Type", value: "Expressive display hierarchy paired with clear utility text" },
      { label: "Motion", value: "Opening animation · page transitions · Lottie Files explorations" },
      { label: "Content", value: "Athletes · events · tickets · press · photos · videos" },
      { label: "Tools", value: "Figma · Photoshop · Excel · Lottie Files" },
      { label: "Delivery", value: "Responsive website design · interaction direction · animation concepts" },
    ],
    uiScreens: [
      "Home page",
      "Athletes page",
      "Upcoming events",
      "Event detail",
      "Fighter profile",
      "Fight pass",
      "Gallery",
      "Contact page",
    ],
    uiImages: [
      {
        src: imageUrl("mvp/home.jpg"),
        alt: "Most Valuable Promotions home page design",
      },
      {
        src: imageUrl("mvp/athletes.jpg"),
        alt: "Most Valuable Promotions athletes page design",
      },
      {
        src: imageUrl("mvp/upcoming-events.jpg"),
        alt: "Most Valuable Promotions upcoming events page design",
      },
      {
        src: imageUrl("mvp/upcoming-event.jpg"),
        alt: "Most Valuable Promotions event detail page design",
      },
      {
        src: imageUrl("mvp/fighter-profile.jpg"),
        alt: "Most Valuable Promotions fighter profile page design",
      },
      {
        src: imageUrl("mvp/fight-pass.jpg"),
        alt: "Most Valuable Promotions fight pass page design",
      },
      {
        src: imageUrl("mvp/gallery.jpg"),
        alt: "Most Valuable Promotions gallery page design",
      },
      {
        src: imageUrl("mvp/contact.jpg"),
        alt: "Most Valuable Promotions contact page design",
      },
    ],
    interaction:
      "An opening animation creates a warm arrival, while page-level transitions and motion studies bring energy to athlete, event and media browsing without interrupting the route to ticket booking.",
    outcome:
      "Designed a visually engaging MVP website that brings athletes, events, media and ticket discovery into one fighter-first experience, supported by an opening animation and a broader motion direction.",
    reflection: {
      learned:
        "A sports brand becomes more compelling when the experience gives its people a clear role in the story. The athlete profile and event systems needed to reinforce each other from the start.",
      improve:
        "I would validate the ticket path with fans earlier, especially around the handoff from event detail to booking, to remove any remaining hesitation at the highest-intent moment.",
      next:
        "Extend the motion system into reusable patterns for event launches, fighter announcements and media moments so the website can evolve with every promotion.",
    },
  },
];

export const EXPERIENCE = [
  {
    period: "2025 — Present",
    company: "Cliniqon RCM",
    role: "UI/UX Designer",
    description:
      "Designing internal revenue-cycle tooling: workflow structure, interface design and component consistency for specialist, high-frequency users.",
    contributions: [
      "Workflow mapping with billing subject-matter experts",
      "Unified table and record patterns across the console",
      "Interface design for denial, review and resubmission flows",
    ],
  },
  {
    period: "2024 — 2025",
    company: "Lifology",
    role: "Senior UI/UX Designer",
    description:
      "Led design on student-facing exploration products, from research synthesis through interaction design, visual design and delivery.",
    contributions: [
      "Constraint-first exploration flows for mobile",
      "Comparison and summary patterns for counsellor review",
      "Contribution to shared components and content structure",
    ],
  },
  {
    period: "2022 — 2024",
    company: "Vonnue Innovations",
    role: "UI/UX Designer",
    description:
      "Worked across client products on discovery, information architecture, interface design and design-system foundations.",
    contributions: [
      "Interface inventory and component deduplication",
      "Responsive web design and prototype-led validation",
      "Design specification and engineering handoff",
    ],
  },
];

export const EXPERTISE = [
  {
    title: "Product Thinking",
    body: "I look beyond individual screens to understand the problem, user needs, business goals, and overall product experience.",
  },
  {
    title: "UX & Interaction Design",
    body: "I turn complex requirements into clear user flows, intuitive interactions, and purposeful experiences.",
  },
  {
    title: "Visual Design",
    body: "With a foundation in graphic design, I bring strong attention to visual hierarchy, typography, composition, and brand expression.",
  },
  {
    title: "AI-Assisted Design",
    body: "I use AI throughout the design workflow to explore ideas faster, prototype concepts, analyze information, and accelerate repetitive work—while keeping human judgment at the center.",
  },
];

export const CAPABILITIES = [
  "Discovery & stakeholder alignment",
  "UX research & synthesis",
  "Information architecture",
  "Interaction & flow design",
  "Visual design & typography",
  "Design systems & tokens",
  "Prototyping & usability testing",
  "Engineering handoff & QA review",
];

export const TOOLS = [
  "Figma",
  "FigJam",
  "Notion",
  "Maze",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "ChatGPT / Claude",
  "Middle / Zeplin",
];
