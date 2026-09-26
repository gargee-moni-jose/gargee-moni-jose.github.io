// Images are kept in `public/images`, so build their URLs from Vite's base
// path. This works both locally and when the app is served from a GitHub
// Pages repository subpath.
const imageUrl = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

const portraitImg = imageUrl("portrait.jpg");
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
