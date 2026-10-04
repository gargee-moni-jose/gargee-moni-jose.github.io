import type { ReactNode } from "react";
import { CAPABILITIES, EXPERIENCE, LINKS, TOOLS } from "../data";
import { Arrow, DarkCTA } from "../components/Shell";

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

export function Resume() {
  return (
    <>
      <section className="wrap pt-14 md:pt-20">
        <p className="eyebrow">Résumé</p>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <h1 className="h1 lg:col-span-7">
            Gargee Moni Jose
            <span className="mt-2 block text-[clamp(20px,2.2vw,28px)] font-[300] tracking-[-0.02em] text-[var(--color-secondary)]">
              Product Designer / UI UX Designer
            </span>
          </h1>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-[1.7] text-[var(--color-secondary)]">
              Explore my experience and skills, or download my résumé as a PDF.
            </p>
            <a href={LINKS.cv} download className="btn btn-dark mt-6">
              Download CV <Arrow />
            </a>
          </div>
        </div>
      </section>

      <div className="wrap mt-16 md:mt-20">
        <Block label="Experience">
          {EXPERIENCE.map((job) => (
            <article
              key={job.company}
              className="border-b border-[var(--color-border)] py-7 first:pt-0 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h3 className="text-[21px] font-extrabold tracking-[-0.03em]">
                  {job.company}
                </h3>
                <span className="eyebrow">{job.period}</span>
              </div>
              <p className="mt-1 text-[14.5px] font-medium text-[var(--color-ink)]">
                {job.role}
              </p>
              <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.65] text-[var(--color-secondary)]">
                {job.description}
              </p>
            </article>
          ))}
        </Block>

        <Block label="Education">
          <div className="text-[15.5px] leading-[1.7]">
            <p className="font-semibold">[Degree] — [Institution]</p>
            <p className="mt-1 text-[var(--color-secondary)]">[Year] · [City]</p>
            <p className="mt-4 max-w-[62ch] text-[var(--color-muted)]">
              Education details to be added from the CV on file.
            </p>
          </div>
        </Block>

        <Block label="Capabilities">
          <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {CAPABILITIES.map((c) => (
              <li
                key={c}
                className="border-b border-[var(--color-border)] py-3 text-[15.5px] last:border-b-0"
              >
                {c}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Tools">
          <ul className="flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <li key={t} className="pill h-[30px] px-4 text-[13px]">
                {t}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Skills">
          <p className="max-w-[62ch] text-[15.5px] leading-[1.7] text-[var(--color-secondary)]">
            UX research and synthesis · information architecture · interaction
            design · design systems · prototyping · usability testing ·
            typography and layout · design-to-engineering handoff · workshop
            facilitation.
          </p>
        </Block>

        <Block label="Selected achievements">
          <ul className="space-y-4 text-[15.5px] leading-[1.65] text-[var(--color-secondary)]">
            <li className="flex gap-4">
              <span className="eyebrow w-16 shrink-0">[Year]</span>
              <span>[Achievement, award or talk to be added from the CV.]</span>
            </li>
            <li className="flex gap-4">
              <span className="eyebrow w-16 shrink-0">[Year]</span>
              <span>[Achievement to be added.]</span>
            </li>
          </ul>
        </Block>

        <Block label="Contact">
          <ul className="text-[15.5px]">
            {[
              { l: "Email", v: LINKS.email, h: `mailto:${LINKS.email}` },
              { l: "LinkedIn", v: "linkedin.com/in/gargee-moni-jose", h: LINKS.linkedin },
              { l: "Behance", v: "behance.net/gargeemonijose", h: LINKS.behance },
            ].map((row) => (
              <li
                key={row.l}
                className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-[var(--color-border)] py-3"
              >
                <span className="eyebrow">{row.l}</span>
                <a
                  className="arrow-link text-[var(--color-ink)]"
                  href={row.h}
                  target={row.h.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                >
                  {row.v}
                </a>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <DarkCTA />
    </>
  );
}
