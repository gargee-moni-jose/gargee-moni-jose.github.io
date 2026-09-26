import { useRef, useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { PROJECTS, type Project } from "../data";
import { Arrow, DarkCTA } from "../components/Shell";

/* ---------- small building blocks ---------- */

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionLabel({
  n,
  title,
}: {
  n: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="eyebrow">{n}</span>
      <h2 className="h2 text-[clamp(28px,3.6vw,46px)]">{title}</h2>
    </div>
  );
}

function Wire({ variant }: { variant: number }) {
  const layouts = [
    ["head", "hero", "row3"],
    ["head", "row2", "row3"],
    ["head", "split", "list"],
    ["head", "row3", "row3"],
    ["head", "form", "cta"],
  ];
  const parts = layouts[variant % layouts.length];
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-[#f6f6f6] p-5">
      {parts.map((p, i) => (
        <div key={i} className="space-y-2">
          {p === "head" && (
            <div className="flex items-center justify-between">
              <div className="h-2.5 w-16 rounded-sm bg-[#dcdcdc]" />
              <div className="flex gap-2">
                <div className="h-2 w-8 rounded-sm bg-[#e4e4e4]" />
                <div className="h-2 w-8 rounded-sm bg-[#e4e4e4]" />
              </div>
            </div>
          )}
          {p === "hero" && (
            <div className="flex gap-3">
              <div className="h-20 flex-1 rounded-sm bg-[#e2e2e2]" />
              <div className="h-20 w-1/3 rounded-sm bg-[#e9e9e9]" />
            </div>
          )}
          {p === "row3" && (
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 rounded-sm bg-[#e4e4e4]" />
              <div className="h-12 rounded-sm bg-[#e4e4e4]" />
              <div className="h-12 rounded-sm bg-[#e4e4e4]" />
            </div>
          )}
          {p === "row2" && (
            <div className="grid grid-cols-2 gap-2">
              <div className="h-14 rounded-sm bg-[#e4e4e4]" />
              <div className="h-14 rounded-sm bg-[#ececec]" />
            </div>
          )}
          {p === "split" && (
            <div className="flex gap-2">
              <div className="h-16 w-1/4 rounded-sm bg-[#e0e0e0]" />
              <div className="h-16 flex-1 rounded-sm bg-[#ebebeb]" />
            </div>
          )}
          {p === "list" && (
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded-sm bg-[#e4e4e4]" />
              <div className="h-2 w-5/6 rounded-sm bg-[#e8e8e8]" />
              <div className="h-2 w-2/3 rounded-sm bg-[#ececec]" />
            </div>
          )}
          {p === "form" && (
            <div className="space-y-2">
              <div className="h-7 rounded-sm border border-[#e0e0e0] bg-white" />
              <div className="h-7 rounded-sm border border-[#e0e0e0] bg-white" />
            </div>
          )}
          {p === "cta" && (
            <div className="flex justify-end">
              <div className="h-7 w-24 rounded-md bg-[#d8d8d8]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ScreenMock({
  label,
  i,
  image,
}: {
  label: string;
  i: number;
  image?: { src: string; alt: string };
}) {
  return (
    <figure className="min-w-[260px] flex-1">
      <div className="overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-white">
        <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] bg-[#fafafa] px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-[#e0e0e0]" />
          <span className="h-2 w-2 rounded-full bg-[#e6e6e6]" />
          <span className="h-2 w-2 rounded-full bg-[#ececec]" />
          <span className="ml-3 h-2 w-24 rounded-sm bg-[#ececec]" />
        </div>
        {image ? (
          <div className="h-[280px] overflow-hidden bg-[#f6f6f6]">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="space-y-3 p-5">
            <div
              className={`rounded-[6px] ${
                i % 2 === 0 ? "bg-[#1B54FF]" : "bg-[#111]"
              } ${i === 0 ? "h-24" : "h-16"}`}
            />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-14 rounded-[6px] bg-[#f1f1f1]" />
              <div className="h-14 rounded-[6px] bg-[#f4f4f4]" />
              <div className="h-14 rounded-[6px] bg-[#f1f1f1]" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded-sm bg-[#ededed]" />
              <div className="h-2 w-4/5 rounded-sm bg-[#f1f1f1]" />
            </div>
            <div className="flex justify-between pt-1">
              <div className="h-6 w-20 rounded-full border border-[var(--color-border)]" />
              <div className="h-6 w-24 rounded-md bg-[#111]" />
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-[12.5px] text-[var(--color-muted)]">
        {label}
      </figcaption>
    </figure>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [dragging, setDragging] = useState(false);
  const images = [
    { src: project.img, alt: project.alt, label: "Home page" },
    ...(project.uiImages ?? [])
      .filter((image) => image.src !== project.img)
      .slice(0, 4)
      .map((image) => ({
        ...image,
        label: image.alt
          .replace(/^(?:HUBBO POS|Most Valuable Promotions) /, "")
          .replace(/ design$/, ""),
      })),
  ];

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: gallery.scrollLeft,
    };
    setDragging(true);
    gallery.setPointerCapture(event.pointerId);
  };

  const drag = (event: PointerEvent<HTMLDivElement>) => {
    const gallery = galleryRef.current;
    if (!gallery || !dragRef.current.active) return;
    event.preventDefault();
    gallery.scrollLeft =
      dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setDragging(false);
    const gallery = galleryRef.current;
    if (gallery?.hasPointerCapture(event.pointerId)) {
      gallery.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="mt-14 md:mt-20">
      <div className="flex items-center justify-between gap-4">
        <Eyebrow>Selected screens</Eyebrow>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
          Scroll / drag
        </span>
      </div>
      <div
        ref={galleryRef}
        className={`project-gallery ${dragging ? "is-dragging" : ""}`}
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={(event) => {
          if (dragRef.current.active) endDrag(event);
        }}
        tabIndex={0}
        aria-label={`${project.title} project screens`}
      >
        <div className="project-gallery-track">
          {images.map((image) => (
            <figure className="project-gallery-card" key={image.src}>
              <img src={image.src} alt={image.alt} draggable={false} />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageLedHero({
  project,
  projectType,
  industryLabel,
}: {
  project: Project;
  projectType: string;
  industryLabel: string;
}) {
  return (
    <header className="image-led-hero wrap pt-8 md:pt-12">
      <a
        href="#/projects"
        className="arrow-link text-[13.5px] text-[var(--color-muted)]"
      >
        <span className="arw rotate-180">
          <Arrow />
        </span>
        All projects
      </a>

      <div className="mt-16 text-center md:mt-24">
        <Eyebrow>{project.tags.join(" · ")}</Eyebrow>
        <h1 className="display mt-5">{project.title}</h1>
        <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-[1.7] text-[var(--color-secondary)]">
          {project.summary}
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-[var(--color-border)] py-7 sm:grid-cols-4">
        {[ 
          ["Project type", projectType],
          ["Industry", industryLabel],
          ["Role", project.role],
          ["Timeline", project.timeline],
        ].map(([key, value]) => (
          <div key={key}>
            <Eyebrow>{key}</Eyebrow>
            <p className="mt-3 text-[14.5px] leading-[1.55]">{value}</p>
          </div>
        ))}
      </div>

      <ProjectGallery project={project} />
    </header>
  );
}

function HubboImage({
  project,
  name,
  className = "",
  alt,
}: {
  project: Project;
  name: string;
  className?: string;
  alt?: string;
}) {
  const image = project.uiImages?.find((item) => item.src.includes(name));
  return (
    <img
      src={image?.src ?? project.img}
      alt={alt ?? image?.alt ?? project.alt}
      className={className}
      loading="lazy"
    />
  );
}

function HubboReferenceImage({
  name,
  alt,
  className = "",
}: {
  name: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/hubbo/case-study/${name}.jpg`}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}

function HubboCaseStudy({ project, next }: { project: Project; next: Project }) {
  return (
    <article className="hubbo-case-study">
      <section className="hubbo-panel hubbo-panel-dark hubbo-hero-panel">
        <div className="hubbo-wrap">
          <a href="#/projects" className="hubbo-back-link">
            <span className="arw rotate-180"><Arrow /></span>
            All projects
          </a>
          <div className="hubbo-hero-grid">
            <div>
              <Eyebrow>01 / Website redesign</Eyebrow>
              <h1>Making a complex POS product easier to understand — and act on.</h1>
              <p>
                HUBBO POS is an all-in-one point-of-sale platform for F&amp;B businesses
                across Southeast Asia. I led the redesign of its marketing website to
                make the product clearer, easier to explore and more conversion-focused.
              </p>
              <div className="hubbo-meta">
                <div><Eyebrow>Role</Eyebrow><strong>{project.role}</strong></div>
                <div><Eyebrow>Timeline</Eyebrow><strong>{project.timeline}</strong></div>
                <div className="hubbo-meta-wide"><Eyebrow>Scope</Eyebrow><strong>Website · B2B SaaS · F&amp;B technology</strong></div>
              </div>
            </div>
            <div className="hubbo-hero-shot">
              <HubboImage project={project} name="home.jpg" alt="HUBBO POS website homepage" />
            </div>
          </div>
          <p className="hubbo-caption">The visual language carries the live product: deep espresso, energetic amber, clear white space and practical interface proof.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark">
        <div className="hubbo-wrap hubbo-two-column">
          <div>
            <Eyebrow>02 / The conversion problem</Eyebrow>
            <h2>The website needed to explain a broad product without making restaurant operators work for the answer.</h2>
            <p className="hubbo-muted">The old experience was visually busy, its value proposition was easy to miss, and its paths to a demo were not doing enough work. The redesign turned the website into a product story with a clear next step.</p>
            <div className="hubbo-card-grid">
              {[
                ["Clarify the offer", "Make the all-in-one proposition immediately understandable."],
                ["Structure the journey", "Organise features by operator needs, not internal product categories."],
                ["Support the decision", "Bring proof, use cases and lead capture closer to intent."],
              ].map(([title, body], i) => (
                <div className="hubbo-light-card" key={title}>
                  <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hubbo-phone-shot">
            <HubboImage project={project} name="request-demo.jpg" alt="HUBBO POS responsive request demo page" />
          </div>
        </div>
        <p className="hubbo-panel-note">Designed as one journey across desktop, tablet and mobile — not a desktop page shrunk down.</p>
      </section>

      <section className="hubbo-panel hubbo-panel-light">
        <div className="hubbo-wrap">
          <Eyebrow>03 / Understanding the experience</Eyebrow>
          <h2>A product story that moves from recognition to action.</h2>
          <p className="hubbo-intro">Instead of listing every feature at once, the new information architecture leads with the customer&apos;s business problem, then reveals the relevant tools, proof and conversion path.</p>
          <div className="hubbo-step-grid">
            {[
              ["Understand", "What HUBBO POS is and who it helps"],
              ["Explore", "Solutions mapped to restaurant operations"],
              ["Validate", "Features, proof and business type"],
              ["Convert", "Demo and lead-generation paths"],
            ].map(([title, body], i) => (
              <div className="hubbo-step" key={title}>
                <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <p className="hubbo-result">The result: a simpler narrative for first-time visitors and clearer routes for high-intent users.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark">
        <div className="hubbo-wrap hubbo-two-column hubbo-direction">
          <div>
            <Eyebrow>04 / Design direction</Eyebrow>
            <h2>Warm, operational and confidently simple.</h2>
            <p className="hubbo-muted">The website balances restaurant energy with the clarity of business software. A deep espresso foundation makes the amber product moments feel purposeful — not decorative.</p>
            <ul className="hubbo-bullets">
              <li><strong>Amber as a signal</strong><span>Used for action, attention and brand recall.</span></li>
              <li><strong>Product proof early</strong><span>Real interfaces make a broad product feel tangible.</span></li>
              <li><strong>Editorial rhythm</strong><span>Generous space makes complex information easier to scan.</span></li>
            </ul>
          </div>
          <div className="hubbo-collage">
            <HubboImage project={project} name="solutions.jpg" alt="HUBBO POS solutions interface" />
            <HubboImage project={project} name="pricing.jpg" alt="HUBBO POS pricing interface" />
          </div>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark hubbo-responsive-panel">
        <div className="hubbo-wrap">
          <Eyebrow>05 / Responsive experience</Eyebrow>
          <h2>One clear product story, adapted to every decision context.</h2>
          <p className="hubbo-muted hubbo-responsive-copy">The system was designed across desktop, tablet and mobile from the start. Content order, hierarchy and the lead path stay coherent as the space changes.</p>
          <div className="hubbo-responsive-grid">
            <HubboImage project={project} name="home.jpg" alt="HUBBO POS desktop experience" />
            <HubboImage project={project} name="solutions.jpg" alt="HUBBO POS tablet experience" />
            <HubboImage project={project} name="request-demo.jpg" alt="HUBBO POS mobile experience" />
          </div>
          <p className="hubbo-panel-note">Desktop: product proof and comparison · Tablet: stacked narrative · Mobile: essential message and a focused CTA.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-light">
        <div className="hubbo-wrap hubbo-two-column hubbo-delivery">
          <div>
            <Eyebrow>06 / Lead generation &amp; delivery</Eyebrow>
            <h2>Designed to carry intent all the way to a conversation.</h2>
            <p className="hubbo-intro">The final experience combined an accessible product narrative with focused lead-generation moments, then moved through structured hand-off and design QA for implementation.</p>
            <div className="hubbo-delivery-shot">
              <HubboImage project={project} name="contact.jpg" alt="HUBBO POS contact and lead-generation page" />
            </div>
          </div>
          <div className="hubbo-delivery-list">
            {[
              ["Research & strategy", "Product and competitor analysis, IA and a conversion-led content plan."],
              ["Design & prototype", "High-fidelity responsive UI, detailed interaction states and developer-ready specifications."],
              ["Implementation support", "Structured hand-off, deployment review and Design Quality Assurance documentation."],
            ].map(([title, body], i) => (
              <div className="hubbo-delivery-item" key={title}>
                <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
            <p className="hubbo-scope">Scope: website redesign · responsive UI · content hierarchy · lead flow · hand-off · QA</p>
          </div>
        </div>
      </section>

      <section className="hubbo-next-section">
        <div className="hubbo-wrap">
          <a href={`#/project/${next.slug}`} className="hubbo-next-link">
            <Eyebrow>Next project</Eyebrow>
            <span>{next.title}<Arrow /></span>
          </a>
        </div>
      </section>
      <DarkCTA />
    </article>
  );
}

function HubboReferenceCaseStudy({ next }: { project: Project; next: Project }) {
  const challenges = [
    ["The product wasn’t immediately clear", "Visitors struggled to understand what HUBBO POS does, who it is designed for, which problems it solves and why it is different from other POS platforms."],
    ["The conversion path wasn’t clear", "The website had calls to action, but they were not always connected to a clear journey. Visitors could consume information without an obvious next step."],
    ["The website needed to support lead generation", "The redesign needed to connect product understanding, relevant proof and clear lead-generation moments throughout the experience."],
  ];

  return (
    <article className="hubbo-reference-case-study">
      <header className="hubbo-ref-hero">
        <div className="hubbo-ref-shell">
          <a href="#/projects" className="hubbo-ref-back"><span className="arw rotate-180"><Arrow /></span>All projects</a>
          <div className="hubbo-ref-kicker"><Eyebrow>F&amp;B</Eyebrow><span>Website redesign</span></div>
          <div className="hubbo-ref-hero-grid">
            <div>
              <h1>Making a complex POS product easier to understand and act on for lead generation.</h1>
              <p>HUBBO POS is an all-in-one point-of-sale platform for F&amp;B businesses across Southeast Asia. I led the redesign of its marketing website to make the product clearer, easier to explore and more conversion-focused.</p>
              <dl className="hubbo-ref-meta">
                <div><dt>Role</dt><dd>Design Lead &amp; PoC</dd></div>
                <div><dt>Client</dt><dd>HUBBO POS, South-East Asia</dd></div>
                <div><dt>Year</dt><dd>2024</dd></div>
              </dl>
            </div>
            <div className="hubbo-ref-overview-image"><HubboReferenceImage name="overview" alt="HUBBO POS overview screen showing the restaurant POS website redesign" /></div>
          </div>
        </div>
      </header>

      <section className="hubbo-ref-section hubbo-ref-light">
        <div className="hubbo-ref-shell">
          <Eyebrow>The Challenge</Eyebrow>
          <h2>The existing website had three major problems.</h2>
          <div className="hubbo-ref-challenges">
            {challenges.map(([title, body], i) => (
              <article key={title}>
                <span className="hubbo-ref-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-dark">
        <div className="hubbo-ref-shell">
          <Eyebrow>The Goal</Eyebrow>
          <h2>Rather than treating the redesign as a visual refresh, I defined the objective around three questions.</h2>
          <div className="hubbo-ref-goal-cards">
            <div><strong>Can a restaurant owner understand the product quickly?</strong></div>
            <div><strong>Can they find the information relevant to their business?</strong></div>
            <div><strong>Can they easily take the next step?</strong></div>
          </div>
          <HubboReferenceImage name="the-goal" alt="HUBBO POS goal section and product screens" className="hubbo-ref-wide-image" />
        </div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-split hubbo-ref-light">
        <div className="hubbo-ref-shell">
          <div className="hubbo-ref-copy"><Eyebrow>Research &amp; Market Analysis</Eyebrow><h2>Understanding the product before shaping the story.</h2><p>Before designing the interface, I focused on understanding HUBBO POS from both a product and market perspective. I mapped its core capabilities, key features, user needs, value propositions, existing content, navigation and conversion points.</p><p>I then studied Southeast Asian POS products, global restaurant-management platforms, SaaS websites, B2B lead-generation patterns, CTA strategies, pricing structures and product storytelling to understand how similar products communicate value clearly and drive action.</p></div>
          <HubboReferenceImage name="research-market-analysis" alt="HUBBO POS research and market analysis visual" />
        </div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-media hubbo-ref-light">
        <div className="hubbo-ref-shell"><Eyebrow>User Persona</Eyebrow><h2>Designing for the people running the restaurant.</h2><HubboReferenceImage name="user-persona" alt="HUBBO POS user persona research cards" className="hubbo-ref-wide-image" /></div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-media hubbo-ref-light">
        <div className="hubbo-ref-shell"><Eyebrow>Information Architecture</Eyebrow><h2>Turning a broad product into a navigable story.</h2><HubboReferenceImage name="information-architecture" alt="HUBBO POS information architecture map" className="hubbo-ref-wide-image" /></div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-split hubbo-ref-light hubbo-ref-campaign">
        <div className="hubbo-ref-shell"><div className="hubbo-ref-copy"><Eyebrow>Campaign Page as a Strategic MVP</Eyebrow><h2>Launching the first conversion touchpoint before the full redesign.</h2><p>The complete website redesign required more time, but the business needed a stronger digital presence immediately. Instead of waiting for the entire website to be completed, we proposed creating a campaign page that could function as an initial lead-generation touchpoint.</p></div><HubboReferenceImage name="campaign-page-as-a-strategic-mvp" alt="HUBBO POS campaign page strategic MVP visual" /></div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-media hubbo-ref-light">
        <div className="hubbo-ref-shell"><Eyebrow>Wireframe</Eyebrow><h2>Testing the structure before adding the surface.</h2><HubboReferenceImage name="wireframe" alt="HUBBO POS responsive wireframes" className="hubbo-ref-wide-image" /></div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-dark hubbo-ref-media">
        <div className="hubbo-ref-shell"><Eyebrow>Visual Design</Eyebrow><h2>Warm product moments with a clear conversion rhythm.</h2><HubboReferenceImage name="visual-design" alt="HUBBO POS visual design explorations" className="hubbo-ref-wide-image" /></div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-media hubbo-ref-light">
        <div className="hubbo-ref-shell"><Eyebrow>Responsive Experience</Eyebrow><h2>One clear product story, adapted to every decision context.</h2><p className="hubbo-ref-lede">The system was designed across desktop, tablet and mobile from the start. Content order, hierarchy and the lead path stay coherent as the space changes.</p><HubboReferenceImage name="one-clear-product-story-adapted-to-every-decision-context" alt="HUBBO POS desktop tablet and mobile responsive layouts" className="hubbo-ref-wide-image" /></div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-media hubbo-ref-light">
        <div className="hubbo-ref-shell"><Eyebrow>Design System &amp; Reusable Components</Eyebrow><h2>Making the approved direction easier to build consistently.</h2><HubboReferenceImage name="design-system-reusable-components" alt="HUBBO POS design system and reusable components" className="hubbo-ref-wide-image" /><div className="hubbo-ref-delivery-grid"><p>From design to implementation we prepared responsive specifications, spacing and layout guidance, component states, asset specifications, interaction behaviour and page-level documentation.</p><p>The goal was to reduce ambiguity during implementation and maintain consistency between the approved designs and the final website.</p></div></div>
      </section>

      <section className="hubbo-ref-section hubbo-ref-light hubbo-ref-qa">
        <div className="hubbo-ref-shell"><Eyebrow>Quality doesn’t stop at handoff</Eyebrow><h2>Reviewing the implementation against the approved designs.</h2><p className="hubbo-ref-lede">During deployment, I created a Design Quality Assurance document and reviewed the implementation against the approved designs.</p><HubboReferenceImage name="quality-doesnt-stop-at-handoff" alt="HUBBO POS quality assurance review screens" className="hubbo-ref-wide-image" /></div>
      </section>

      <section className="hubbo-ref-closing"><div className="hubbo-ref-shell"><p>The redesign shifted HUBBO POS from a feature-heavy website toward a clearer product story, helping visitors understand the platform, evaluate its relevance and take the next step with less friction.</p><a href={`#/project/${next.slug}`} className="hubbo-ref-next"><Eyebrow>Next project</Eyebrow><span>{next.title}<Arrow /></span></a></div></section>
      <DarkCTA />
    </article>
  );
}

function MvpCaseStudy({ project, next }: { project: Project; next: Project }) {
  return (
    <article className="hubbo-case-study mvp-case-study">
      <section className="hubbo-panel hubbo-panel-dark hubbo-hero-panel">
        <div className="hubbo-wrap">
          <a href="#/projects" className="hubbo-back-link"><span className="arw rotate-180"><Arrow /></span>All projects</a>
          <div className="hubbo-hero-grid">
            <div>
              <Eyebrow>01 / Website design</Eyebrow>
              <h1>Giving fighters a platform built for the moment.</h1>
              <p>
                Most Valuable Promotions brings together the world&apos;s greatest boxers
                with a fighter-first mentality. I designed a digital home for its
                athletes, events, media and ticket journeys.
              </p>
              <div className="hubbo-meta">
                <div><Eyebrow>Role</Eyebrow><strong>{project.role}</strong></div>
                <div><Eyebrow>Timeline</Eyebrow><strong>{project.timeline}</strong></div>
                <div className="hubbo-meta-wide"><Eyebrow>Scope</Eyebrow><strong>Website · Sports · Boxing</strong></div>
              </div>
            </div>
            <div className="hubbo-hero-shot"><HubboImage project={project} name="home.jpg" alt="Most Valuable Promotions homepage" /></div>
          </div>
          <p className="hubbo-caption">A high-contrast visual system gives the athletes the focus, while event detail and motion keep the experience moving.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark">
        <div className="hubbo-wrap hubbo-two-column">
          <div>
            <Eyebrow>02 / The promotion problem</Eyebrow>
            <h2>The website needed to make athletes, events and tickets feel like one story.</h2>
            <p className="hubbo-muted">MVP needed a compelling platform that could introduce its athletes, build anticipation for upcoming events, preserve the archive and make ticket discovery feel immediate.</p>
            <div className="hubbo-card-grid">
              {[
                ["Put athletes first", "Make fighters the primary story and give every profile room to build connection."],
                ["Make events actionable", "Move fans from anticipation to event detail and tickets without losing momentum."],
                ["Build the archive", "Use past events, press and media to give the promotion a living history."],
              ].map(([title, body], i) => (
                <div className="hubbo-light-card" key={title}>
                  <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow><h3>{title}</h3><p>{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hubbo-phone-shot"><HubboImage project={project} name="fighter-profile.jpg" alt="MVP fighter profile page" /></div>
        </div>
        <p className="hubbo-panel-note">Designed as one connected journey across desktop, tablet and mobile, with motion adding energy at key moments.</p>
      </section>

      <section className="hubbo-panel hubbo-panel-light">
        <div className="hubbo-wrap">
          <Eyebrow>03 / Understanding the experience</Eyebrow>
          <h2>A fighter-first story that moves from recognition to action.</h2>
          <p className="hubbo-intro">The information architecture connects the people, events and media that make MVP meaningful, then makes the next action obvious for fans who are ready to follow or book.</p>
          <div className="hubbo-step-grid">
            {[
              ["Meet", "Discover MVP and the athletes shaping its story"],
              ["Follow", "Explore profiles, records, media and highlights"],
              ["Experience", "Understand the matchup and event details"],
              ["Book", "Move into tickets and fight-pass paths"],
            ].map(([title, body], i) => (
              <div className="hubbo-step" key={title}><Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow><h3>{title}</h3><p>{body}</p></div>
            ))}
          </div>
          <p className="hubbo-result">The result: a clearer path from discovering a fighter to showing up for the fight.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark">
        <div className="hubbo-wrap hubbo-two-column hubbo-direction">
          <div>
            <Eyebrow>04 / Design direction</Eyebrow>
            <h2>A fight-first visual system with room for motion.</h2>
            <p className="hubbo-muted">Dark surfaces, expressive type and editorial image crops create the atmosphere of fight night while keeping athlete information and event actions easy to scan.</p>
            <ul className="hubbo-bullets">
              <li><strong>Athlete-led storytelling</strong><span>Profiles and portraits carry the emotional centre of the promotion.</span></li>
              <li><strong>Event energy</strong><span>Matchups, dates and ticket actions are treated as moments of anticipation.</span></li>
              <li><strong>Motion with purpose</strong><span>An opening animation and restrained transitions make arrival feel memorable.</span></li>
            </ul>
          </div>
          <div className="hubbo-collage"><HubboImage project={project} name="upcoming-event.jpg" alt="MVP upcoming event page" /><HubboImage project={project} name="fighter-profile.jpg" alt="MVP fighter profile visual" /></div>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark hubbo-responsive-panel">
        <div className="hubbo-wrap">
          <Eyebrow>05 / Responsive experience</Eyebrow>
          <h2>One fighter-first experience across every screen.</h2>
          <p className="hubbo-muted hubbo-responsive-copy">The hierarchy stays focused as the layout changes: the athlete or event leads, supporting proof follows, and the path to tickets remains easy to find.</p>
          <div className="hubbo-responsive-grid">
            <HubboImage project={project} name="home.jpg" alt="MVP desktop homepage experience" />
            <HubboImage project={project} name="upcoming-event.jpg" alt="MVP tablet event experience" />
            <HubboImage project={project} name="fight-pass.jpg" alt="MVP mobile fight pass experience" />
          </div>
          <p className="hubbo-panel-note">Desktop: athlete and event impact · Tablet: structured discovery · Mobile: essential story and a clear action.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-light">
        <div className="hubbo-wrap hubbo-two-column hubbo-delivery">
          <div>
            <Eyebrow>06 / Motion &amp; delivery</Eyebrow>
            <h2>Designed to build anticipation and move fans to tickets.</h2>
            <p className="hubbo-intro">The final experience combined a strong athlete and event narrative with an opening animation, page transitions and a structured responsive hand-off.</p>
            <div className="hubbo-delivery-shot"><HubboImage project={project} name="contact.jpg" alt="MVP contact page design" /></div>
          </div>
          <div className="hubbo-delivery-list">
            {[
              ["Content architecture", "Athletes, events, media, press and ticketing organised around how fans explore the promotion."],
              ["Design & prototype", "High-fidelity responsive UI for the homepage, profiles, event detail and content archive."],
              ["Motion direction", "Opening animation and repeatable transition concepts created with Lottie Files."],
            ].map(([title, body], i) => (
              <div className="hubbo-delivery-item" key={title}><Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow><div><h3>{title}</h3><p>{body}</p></div></div>
            ))}
            <p className="hubbo-scope">Scope: website design · responsive UI · athlete profiles · event journeys · motion direction</p>
          </div>
        </div>
      </section>

      <section className="hubbo-next-section"><div className="hubbo-wrap"><a href={`#/project/${next.slug}`} className="hubbo-next-link"><Eyebrow>Next project</Eyebrow><span>{next.title}<Arrow /></span></a></div></section>
      <DarkCTA />
    </article>
  );
}

function KutuBookuCaseStudy({ project, next }: { project: Project; next: Project }) {
  return (
    <article className="hubbo-case-study kutubuku-case-study">
      <section className="hubbo-panel hubbo-panel-dark hubbo-hero-panel">
        <div className="hubbo-wrap">
          <a href="#/projects" className="hubbo-back-link"><span className="arw rotate-180"><Arrow /></span>All projects</a>
          <div className="hubbo-hero-grid">
            <div>
              <Eyebrow>01 / Website design</Eyebrow>
              <h1>Making personalised reading feel easy to choose.</h1>
              <p>
                KutuBooku is a children&apos;s book subscription service that curates
                personalised boxes for children aged 0–8. I designed a warm digital
                experience that helps parents understand the service and choose a plan.
              </p>
              <div className="hubbo-meta">
                <div><Eyebrow>Role</Eyebrow><strong>{project.role}</strong></div>
                <div><Eyebrow>Timeline</Eyebrow><strong>{project.timeline}</strong></div>
                <div className="hubbo-meta-wide"><Eyebrow>Scope</Eyebrow><strong>Website · Education · Book subscription</strong></div>
              </div>
            </div>
            <div className="hubbo-hero-shot"><HubboImage project={project} name="home-page.jpg" alt="KutuBooku homepage" /></div>
          </div>
          <p className="hubbo-caption">A playful visual language introduces the service, while clear plans and account paths make the subscription practical for parents.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark">
        <div className="hubbo-wrap hubbo-two-column">
          <div>
            <Eyebrow>02 / The choice problem</Eyebrow>
            <h2>The website needed to turn a thoughtful service into a confident family decision.</h2>
            <p className="hubbo-muted">KutuBooku had a strong promise, but parents needed to understand how the boxes worked, what they received and which plan suited them before they could commit.</p>
            <div className="hubbo-card-grid">
              {[
                ["Explain the value", "Show how curated books support a child’s pace, interests and reading habits."],
                ["Make plans clear", "Present pricing, benefits and differences together so parents can choose quickly."],
                ["Support continuity", "Carry the relationship into checkout, login and order management."],
              ].map(([title, body], i) => (
                <div className="hubbo-light-card" key={title}><Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow><h3>{title}</h3><p>{body}</p></div>
              ))}
            </div>
          </div>
          <div className="hubbo-phone-shot"><HubboImage project={project} name="complete-purchase.jpg" alt="KutuBooku complete purchase screen" /></div>
        </div>
        <p className="hubbo-panel-note">Designed as one connected journey from discovering the service to choosing a box and returning to manage orders.</p>
      </section>

      <section className="hubbo-panel hubbo-panel-light">
        <div className="hubbo-wrap">
          <Eyebrow>03 / Understanding the experience</Eyebrow>
          <h2>A reading journey that moves from curiosity to a subscription.</h2>
          <p className="hubbo-intro">The content structure answers the questions parents have in order: what KutuBooku is, how it works, which plan fits and what happens after purchase.</p>
          <div className="hubbo-step-grid">
            {[
              ["Discover", "See the service, its purpose and the child it is designed to support"],
              ["Understand", "Follow the three-step box journey from curation to delivery"],
              ["Choose", "Compare plans, pricing and benefits with confidence"],
              ["Continue", "Complete the purchase and manage future orders"],
            ].map(([title, body], i) => (
              <div className="hubbo-step" key={title}><Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow><h3>{title}</h3><p>{body}</p></div>
            ))}
          </div>
          <p className="hubbo-result">The result: a clearer story for first-time parents and a more useful service after the first box.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark">
        <div className="hubbo-wrap hubbo-two-column hubbo-direction">
          <div>
            <Eyebrow>04 / Design direction</Eyebrow>
            <h2>Playful, reassuring and easy to scan.</h2>
            <p className="hubbo-muted">Soft colour, friendly illustration and generous spacing make the service feel welcoming, while consistent patterns keep practical decisions simple.</p>
            <ul className="hubbo-bullets">
              <li><strong>Warmth first</strong><span>Colour and illustration make the idea of a monthly book box feel personal.</span></li>
              <li><strong>Proof through detail</strong><span>Real boxes, books and family moments show what the subscription delivers.</span></li>
              <li><strong>Clarity at choice</strong><span>Plan comparison and calls to action stay direct even inside a playful system.</span></li>
            </ul>
          </div>
          <div className="hubbo-collage"><HubboImage project={project} name="step-1.jpg" alt="KutuBooku how it works design" /><HubboImage project={project} name="step-2.jpg" alt="KutuBooku plan selection design" /></div>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-dark hubbo-responsive-panel">
        <div className="hubbo-wrap">
          <Eyebrow>05 / Responsive experience</Eyebrow>
          <h2>One friendly service across every parent touchpoint.</h2>
          <p className="hubbo-muted hubbo-responsive-copy">The hierarchy stays clear as the layout changes: the promise leads, the steps explain, and the plan or account action remains close at hand.</p>
          <div className="hubbo-responsive-grid">
            <HubboImage project={project} name="home-page.jpg" alt="KutuBooku desktop homepage" />
            <HubboImage project={project} name="step-3.jpg" alt="KutuBooku tablet plan experience" />
            <HubboImage project={project} name="my-orders.jpg" alt="KutuBooku mobile orders experience" />
          </div>
          <p className="hubbo-panel-note">Desktop: service story and proof · Tablet: structured plan choice · Mobile: essential message and account action.</p>
        </div>
      </section>

      <section className="hubbo-panel hubbo-panel-light">
        <div className="hubbo-wrap hubbo-two-column hubbo-delivery">
          <div>
            <Eyebrow>06 / Subscription &amp; delivery</Eyebrow>
            <h2>Designed to turn a first visit into an ongoing reading habit.</h2>
            <p className="hubbo-intro">The final experience combined a clear subscription story with plan selection, purchase, account access and order management.</p>
            <div className="hubbo-delivery-shot"><HubboImage project={project} name="contact-page.jpg" alt="KutuBooku contact page design" /></div>
          </div>
          <div className="hubbo-delivery-list">
            {[
              ["Service story", "A parent-friendly explanation of personalised boxes, reading benefits and the KutuBooku promise."],
              ["Plans & purchase", "Clear pricing, plan benefits and a direct purchase journey for choosing the right box."],
              ["Ongoing relationship", "Login, order management and contact paths that support families after their first subscription."],
            ].map(([title, body], i) => (
              <div className="hubbo-delivery-item" key={title}><Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow><div><h3>{title}</h3><p>{body}</p></div></div>
            ))}
            <p className="hubbo-scope">Scope: website design · subscription flow · responsive UI · plan comparison · account screens</p>
          </div>
        </div>
      </section>

      <section className="hubbo-next-section"><div className="hubbo-wrap"><a href={`#/project/${next.slug}`} className="hubbo-next-link"><Eyebrow>Next project</Eyebrow><span>{next.title}<Arrow /></span></a></div></section>
      <DarkCTA />
    </article>
  );
}

/* ---------- page ---------- */

export function ProjectDetail({ slug }: { slug: string }) {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return (
      <section className="wrap section text-center">
        <h1 className="h1">Project not found</h1>
        <p className="lede mt-4">
          That case study doesn&apos;t exist — the full selection is on the
          projects page.
        </p>
        <a href="#/projects" className="btn btn-dark mt-8">
          Back to projects <Arrow />
        </a>
      </section>
    );
  }

  const idx = PROJECTS.indexOf(project as Project);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  if (project.slug === "hubbo-pos") {
    return <HubboReferenceCaseStudy project={project} next={next} />;
  }
  if (project.slug === "most-valuable-promotions") {
    return <MvpCaseStudy project={project} next={next} />;
  }
  if (project.slug === "kutubuku") {
    return <KutuBookuCaseStudy project={project} next={next} />;
  }

  return (
    <article>
      {/* ---------- HERO ---------- */}
      {project.slug === "hubbo-pos" ? (
        <ImageLedHero
          project={project}
          projectType="Website"
          industryLabel="F&B · POS software"
        />
      ) : project.slug === "most-valuable-promotions" ? (
        <ImageLedHero
          project={project}
          projectType="Website"
          industryLabel="Sports · Boxing"
        />
      ) : (
        <header className="wrap pt-8 md:pt-12">
          <a
            href="#/projects"
            className="arrow-link text-[13.5px] text-[var(--color-muted)]"
          >
            <span className="arw rotate-180">
              <Arrow />
            </span>
            All projects
          </a>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>
                {project.tags.join(" · ")} · {project.year}
              </Eyebrow>
              <h1 className="h1 mt-5 text-[clamp(36px,5.4vw,68px)]">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 lg:pt-10">
              <p className="text-[16px] leading-[1.65] text-[var(--color-secondary)]">
                {project.summary}
              </p>
            </div>
          </div>

          <figure className="mt-12 md:mt-16" data-reveal>
            <div className="overflow-hidden rounded-[12px] bg-[#f3f3f3]">
              <img
                src={project.img}
                alt={project.alt}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[12.5px] text-[var(--color-muted)]">
              {project.title} — final visual direction.
            </figcaption>
          </figure>
        </header>
      )}

      {/* ---------- OVERVIEW ---------- */}
      {!['hubbo-pos', 'most-valuable-promotions'].includes(project.slug) && (
        <section className="wrap mt-20 md:mt-28">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[var(--color-border)] pt-8 sm:grid-cols-3 lg:grid-cols-6">
            {[
              ["Role", project.role],
              ["Timeline", project.timeline],
              ["Team", project.team],
              ["Platform", project.platform],
              ["Industry", project.industry],
              ["Year", project.year],
            ].map(([k, v]) => (
              <div key={k}>
                <Eyebrow>{k}</Eyebrow>
                <p className="mt-3 text-[14.5px] leading-[1.55] text-[var(--color-ink)]">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------- PROBLEM ---------- */}
      <section className="wrap section">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <SectionLabel n="01" title="The Problem" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6" data-reveal>
            <p className="text-[clamp(19px,2vw,24px)] leading-[1.5] tracking-[-0.015em] text-[var(--color-ink)]">
              {project.problem}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CONTEXT ---------- */}
      <section className="wrap pb-8">
        <div className="grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <SectionLabel n="02" title="The Context" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul>
              {project.context.map((c) => (
                <li
                  key={c}
                  className="flex gap-5 border-b border-[var(--color-border)] py-5 first:pt-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[11px] h-px w-5 shrink-0 bg-[var(--color-ghost)]"
                  />
                  <span className="text-[15.5px] leading-[1.65] text-[var(--color-secondary)]">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- RESEARCH ---------- */}
      <section className="wrap section">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <SectionLabel n="03" title="Research" />
            <p className="mt-5 max-w-[34ch] text-[14.5px] leading-[1.6] text-[var(--color-muted)]">
              Activities run for this project. Findings are recorded in the
              project file — nothing here is inferred after the fact.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {project.research.map((r, i) => (
                <div
                  key={r.title}
                  className="border-t border-[var(--color-border)] py-6"
                  data-reveal
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <Eyebrow>{String(i + 1).padStart(2, "0")}</Eyebrow>
                  <h3 className="mt-3 text-[17px] font-bold tracking-[-0.02em]">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[var(--color-secondary)]">
                    {r.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INSIGHTS ---------- */}
      <section className="wrap pb-4">
        <div className="border-t border-[var(--color-border)] pt-12">
          <SectionLabel n="04" title="Key Insights" />
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {project.insights.map((ins, i) => (
              <div
                key={ins.title}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="block font-mono text-[13px] font-medium tracking-[0.1em] text-[var(--color-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[22px] font-bold leading-tight tracking-[-0.025em]">
                  {ins.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.65] text-[var(--color-secondary)]">
                  {ins.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- USER FLOW ---------- */}
      <section className="wrap section">
        <div className="border-t border-[var(--color-border)] pt-12">
          <SectionLabel n="05" title="User Flow" />
          <div className="mt-10 overflow-x-auto pb-4">
            <ol className="flex min-w-max items-center gap-3">
              {project.flow.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <div className="rounded-[8px] border border-[var(--color-border)] px-5 py-4">
                    <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 whitespace-nowrap text-[14.5px] font-medium">
                      {step}
                    </p>
                  </div>
                  {i < project.flow.length - 1 && (
                    <svg
                      width="34"
                      height="8"
                      viewBox="0 0 34 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0 4h30M27 1l4 3-4 3"
                        stroke="#c7c7c7"
                        strokeWidth="1"
                      />
                    </svg>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <p className="text-[12.5px] text-[var(--color-muted)]">
            Primary path, discovery to completion. Exceptions and error branches
            documented separately.
          </p>
        </div>
      </section>

      {/* ---------- IA ---------- */}
      <section className="wrap pb-4">
        <div className="grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <SectionLabel n="06" title="Information Architecture" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {project.ia.map((branch) => (
              <div
                key={branch.level}
                className="border-t border-[var(--color-border)] py-6 first:border-t-0 first:pt-0"
              >
                <p className="text-[16px] font-bold tracking-[-0.02em]">
                  {branch.level}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {branch.items.map((it) => (
                    <li key={it} className="pill">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WIREFRAMES ---------- */}
      <section className="wrap section">
        <div className="border-t border-[var(--color-border)] pt-12">
          <SectionLabel n="07" title="Wireframes" />
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex min-w-max gap-6">
              {project.wireframes.map((w, i) => (
                <figure key={w} className="w-[300px] shrink-0">
                  <div className="h-[220px] overflow-hidden rounded-[12px] border border-[var(--color-border)]">
                    <Wire variant={i} />
                  </div>
                  <figcaption className="mt-3 text-[12.5px] text-[var(--color-muted)]">
                    {w}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DESIGN EXPLORATION ---------- */}
      <section className="wrap pb-4">
        <div className="border-t border-[var(--color-border)] pt-12">
          <SectionLabel n="08" title="Design Exploration" />
          <div className="mt-10">
            {project.directions.map((d, i) => (
              <div
                key={d.name}
                className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-[var(--color-border)] py-7 md:grid-cols-12"
                data-reveal
              >
                <div className="md:col-span-4">
                  <p
                    className={`text-[18px] font-bold tracking-[-0.025em] ${
                      i === project.directions.length - 1 ? "" : "text-[var(--color-muted)]"
                    }`}
                  >
                    {d.name}
                  </p>
                </div>
                <p className="text-[15.5px] leading-[1.65] text-[var(--color-secondary)] md:col-span-7 md:col-start-6">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DESIGN SYSTEM ---------- */}
      <section className="wrap section">
        <div className="grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <SectionLabel n="09" title="Design System" />
            <div className="mt-7 flex flex-wrap gap-2">
              {["#0F0F0F", "#FFFFFF", "#1B54FF", "#8A8A8A", "#EAEAEA"].map(
                (c) => (
                  <span
                    key={c}
                    className="h-9 w-9 rounded-[6px] border border-[var(--color-border)]"
                    style={{ background: c }}
                    title={c}
                  />
                )
              )}
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <dl>
              {project.system.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-1 gap-1 border-t border-[var(--color-border)] py-5 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <dt className="eyebrow pt-1">{s.label}</dt>
                  <dd className="text-[15px] leading-[1.6] text-[var(--color-secondary)]">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- FINAL UI ---------- */}
      <section className="wrap pb-4">
        <div className="border-t border-[var(--color-border)] pt-12">
          <SectionLabel n="10" title="Final UI" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.uiScreens.map((s, i) => (
              <div key={s} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                <ScreenMock label={s} i={i} image={project.uiImages?.[i]} />
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Interaction</Eyebrow>
            </div>
            <p className="text-[15.5px] leading-[1.7] text-[var(--color-secondary)] lg:col-span-7 lg:col-start-6">
              {project.interaction}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- OUTCOME ---------- */}
      <section className="wrap section">
        <div className="grid grid-cols-1 gap-8 border-t border-[var(--color-border)] pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <SectionLabel n="11" title="Outcome" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6" data-reveal>
            <p className="text-[clamp(18px,1.8vw,22px)] leading-[1.55] tracking-[-0.015em]">
              {project.outcome}
            </p>
            <p className="mt-6 border-l border-[var(--color-ghost)] pl-5 font-mono text-[12.5px] leading-[1.7] text-[var(--color-muted)]">
              Measured results are intentionally left as placeholders. Numbers
              are only published once they come from the project record.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- REFLECTION ---------- */}
      <section className="wrap pb-4">
        <div className="border-t border-[var(--color-border)] pt-12">
          <SectionLabel n="12" title="Reflection" />
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              ["What I learned", project.reflection.learned],
              ["What I would improve", project.reflection.improve],
              ["What I'd explore next", project.reflection.next],
            ].map(([k, v], i) => (
              <div
                key={k}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <Eyebrow>{k}</Eyebrow>
                <p className="mt-3 text-[15px] leading-[1.65] text-[var(--color-secondary)]">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- NEXT PROJECT ---------- */}
      <section className="wrap section">
        <a
          href={`#/project/${next.slug}`}
          className="group block border-t border-[var(--color-border)] pt-12"
        >
          <div className="flex items-baseline justify-between gap-6">
            <Eyebrow>Next project</Eyebrow>
            <span className="arrow-link text-[13.5px] text-[var(--color-muted)]">
              View <Arrow />
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="overflow-hidden rounded-[12px] lg:col-span-7">
              <img
                src={next.img}
                alt={next.alt}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.03]"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h2 className="h2 text-[clamp(28px,3.4vw,44px)]">
                {next.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--color-secondary)]">
                {next.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {next.tags.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </section>

      <DarkCTA />
    </article>
  );
}
