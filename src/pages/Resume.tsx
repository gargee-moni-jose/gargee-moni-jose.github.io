import type { ReactNode } from "react";
import { LINKS } from "../data";
import { DarkCTA } from "../components/Shell";

function Block({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="grid grid-cols-1 gap-6 border-t border-[var(--color-border)] py-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <h2 className="eyebrow sticky top-24">{label}</h2>
      </div>
      <div className="md:col-span-8 md:col-start-5">{children}</div>
    </section>
  );
}

const EXPERIENCE = [
  {
    role: "UI/UX Designer",
    company: "Cliniqon RCM Pvt. Ltd. · Product Company",
    period: "Aug 2025 – Present",
    details: [
      "Lead product design across healthcare enterprise products including CRM, Medical Coding, Clinical Auditing, RCM, HR, and internal workflow platforms.",
      "Led 0-to-1 design of the Clinical Auditing workflow, reducing average task completion time by an estimated 25% by converting a manual audit process into a guided digital workflow.",
      "Run stakeholder and usability research and translate findings into user flows, information architecture, wireframes, prototypes, high-fidelity UI, and interaction states.",
      "Standardized reusable design patterns across 6 enterprise products through a shared component library, reducing design-to-development handoff time by an estimated 20%.",
      "Design complex healthcare workflows with edge cases, validation, empty states, errors, alternate paths, and other failure modes to support accurate task completion.",
      "Partner directly with product, engineering, and operations from requirements through implementation, resolving technical constraints and performing design QA.",
      "Apply responsive and accessible design principles across web applications while balancing user needs, business requirements, and engineering feasibility.",
    ],
  },
  {
    role: "Creative Designer",
    company: "Freelance",
    period: "Mar 2025 – Aug 2025",
    details: [
      "Built an independent design practice delivering UI/UX, branding, and 0-to-1 digital product design across 4+ industries.",
      "Owned projects end-to-end from discovery and research through information architecture, interaction design, visual design, prototyping, handoff, and final delivery.",
      "Worked directly with clients and stakeholders to clarify goals, structure ambiguous requirements, present design rationale, and iterate toward practical solutions.",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    company: "Lifology Pvt. Ltd. · Product Company",
    period: "May 2024 – Mar 2025",
    details: [
      "Led 0-to-1 design and launch of an AI-powered SaaS coaching platform within 6 months, owning research, information architecture, interaction design, visual design, prototyping, and developer handoff.",
      "Built reusable Figma components and interaction patterns to support consistency as the product expanded with new workflows and features.",
      "Worked closely with product and engineering to evaluate user flows, edge cases, technical constraints, feasibility, and trade-offs before and during implementation.",
      "Used usability testing and A/B testing on key flows to validate design decisions and turn findings into UX improvements.",
      "Mentored two junior designers on design methodology, critique, component reuse, and execution standards.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Vonnue Innovations Pvt. Ltd. · Service Company",
    period: "Jan 2022 – Jan 2024",
    details: [
      "Served as PIC and PoC across 10+ client accounts, owning UX research, information architecture, interaction design, UI design, prototyping, motion design, and content strategy.",
      "Designed SaaS products, responsive web applications, and business websites from research and wireframes through high-fidelity UI, prototypes, specifications, and developer handoff.",
      "Built scalable design systems and reusable component libraries adopted across 8+ client projects, reducing design production time for new features by an estimated 15–20%.",
      "Created interactive prototypes and micro-interactions and used usability feedback to refine workflows and interaction patterns.",
      "Worked directly with clients, developers, and internal teams across multiple industries in a fast-paced product/service environment.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Sacred Heart College, Thevara",
    period: "Apr 2021 – Oct 2021",
    details: [
      "Managed the college website and blog while maintaining consistent visual and brand standards.",
      "Developed a campus signage system and produced digital and print assets with college management and staff.",
    ],
  },
];

const SKILL_GROUPS = [
  {
    label: "Product Design",
    items: "0-to-1 Product Design, SaaS, Healthcare Product Design, UX/UI, User Research, Information Architecture, Interaction Design, Visual Design, User Flows, Wireframing, Prototyping, Usability Testing, Responsive Design, Accessibility, Design QA",
  },
  {
    label: "Design Systems",
    items: "Design Systems, Component Libraries, Components & Variants, Auto Layout, Reusable Patterns, Interaction States, Design Tokens, Edge Cases, Error/Empty/Loading States, Developer Handoff",
  },
  {
    label: "Collaboration",
    items: "Product & Engineering Partnership, Stakeholder Management, Client Collaboration, Design Critique, Mentorship, Requirements Analysis, Agile/Scrum, Written Design Rationale",
  },
  {
    label: "Tools",
    items: "Figma, Adobe Photoshop, Illustrator, XD, Acrobat, InDesign, Premiere Pro, After Effects, Wix, Editor X, Claude, Cursor",
  },
];

export function Resume() {
  return (
    <>
      <section className="wrap pt-14 md:pt-20">
        <p className="eyebrow">Resume</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h1 className="h1">
              Gargee Moni Jose
              <span className="mt-2 block text-[clamp(20px,2.2vw,28px)] font-[300] tracking-[-0.02em] text-[var(--color-secondary)]">
              Product Designer
              </span>
            </h1>
            <p className="mt-5 max-w-[65ch] text-[15px] leading-[1.7] text-[var(--color-secondary)]">
              Product Designer with 5 years of experience designing and shipping 0-to-1 SaaS products and complex enterprise workflows. Experienced across user research, information architecture, interaction design, visual design, prototyping, design systems, usability testing, and developer handoff. Strong Figma practice with reusable components and interaction patterns, and experienced partnering closely with product and engineering teams to turn ambiguous requirements into simple, scalable product experiences. Healthcare product experience includes CRM, medical coding, clinical auditing, and revenue-cycle workflows.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-[1.7] text-[var(--color-secondary)]">
              Download the resume or get in touch.
            </p>
            <a href={LINKS.cv} download="gargee_moni_jose_CV.pdf" className="btn btn-dark mt-6">
              Download
            </a>
            <ul className="mt-7 space-y-2 text-[14px] text-[var(--color-secondary)]">
              <li><a className="arrow-link" href={`mailto:${LINKS.email}`}>{LINKS.email}</a></li>
              <li><a className="arrow-link" href={`tel:${LINKS.phone}`}>{LINKS.phone}</a></li>
              <li><a className="arrow-link" href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="wrap mt-16 md:mt-20">
        <Block label="Professional experience">
          {EXPERIENCE.map((job) => (
            <article key={`${job.company}-${job.role}`} className="border-b border-[var(--color-border)] py-7 first:pt-0 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h3 className="text-[19px] font-extrabold tracking-[-0.03em]">{job.role}</h3>
                <span className="eyebrow">{job.period}</span>
              </div>
              <p className="mt-1 text-[14.5px] font-medium text-[var(--color-secondary)]">{job.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.65] text-[var(--color-secondary)]">
                {job.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </Block>

        <Block label="Education">
          <ul className="space-y-6 text-[15.5px] leading-[1.7]">
            <li>
              <p className="font-semibold">MA, Graphic Design</p>
              <p className="text-[var(--color-secondary)]">Sacred Heart School of Communication, Thevara</p>
              <p className="text-[var(--color-muted)]">Jul 2019 – Mar 2021</p>
            </li>
            <li>
              <p className="font-semibold">BA, Animation and Graphic Design</p>
              <p className="text-[var(--color-secondary)]">Sacred Heart School of Communication, Thevara</p>
              <p className="text-[var(--color-muted)]">Aug 2016 – Mar 2019</p>
            </li>
          </ul>
        </Block>

        <Block label="Skills">
          <div className="space-y-6">
            {SKILL_GROUPS.map((group) => (
              <p key={group.label} className="text-[15px] leading-[1.7] text-[var(--color-secondary)]">
                <strong className="font-semibold text-[var(--color-ink)]">{group.label}: </strong>{group.items}
              </p>
            ))}
          </div>
        </Block>

        <Block label="AI-assisted design">
          <p className="max-w-[70ch] text-[15.5px] leading-[1.7] text-[var(--color-secondary)]">
            AI-assisted design workflow: Claude for requirements, scenarios, UX copy, edge cases, synthesis, and design exploration; Cursor for implementation-oriented exploration and understanding frontend behavior. Use AI to accelerate exploration and repetitive work while keeping UX decisions, interaction logic, accessibility, and visual quality under direct design ownership.
          </p>
        </Block>
      </div>

      <DarkCTA />
    </>
  );
}
