import { CAPABILITIES, EXPERIENCE, PORTRAIT, TOOLS } from "../data";
import { Arrow, DarkCTA } from "../components/Shell";

export function About() {
  return (
    <>
      <section className="wrap pt-14 md:pt-20">
        <p className="eyebrow">About</p>
        <h1 className="display mt-6">
          <span className="strong">Product designer</span> focused on making
          complex products easier to understand, use, and scale.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5" data-reveal>
            <img
              src={PORTRAIT}
              alt="Portrait of Gargee Moni Jose against a crimson studio backdrop."
              width={720}
              height={900}
              className="w-full rounded-[12px] object-cover object-top"
            />
            <p className="eyebrow mt-4">Gargee Moni Jose — Product Designer</p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <p className="text-[18px] leading-[1.6] text-[var(--color-ink)]">
              I work across discovery, interaction design and visual systems —
              usually on products where the underlying problem is messier than
              the screen suggests.
            </p>
            <div className="mt-6 space-y-5 text-[15.5px] leading-[1.7] text-[var(--color-secondary)]">
              <p>
                Most of my work starts in the unglamorous part of the process:
                mapping a workflow with the people who run it, auditing what the
                product already does, and finding the point where users are
                forced to hold information the interface should be holding for
                them.
              </p>
              <p>
                I came to product design from graphic design, so typography,
                hierarchy and composition are how I think before I open a
                component library. I care about systems — one table pattern
                documented well is worth more than four bespoke screens.
              </p>
              <p>
                I use AI across the workflow: generating variants, pressure-
                testing flows, summarising research notes and clearing
                repetitive work. Judgment stays with me — the tool accelerates
                the passes I would otherwise do slowly.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#/projects" className="btn btn-dark">
                View projects <Arrow />
              </a>
              <a href="#/resume" className="btn btn-ghost">
                Read résumé
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- APPROACH ---------- */}
      <section className="section wrap border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="h2 text-[clamp(30px,3.4vw,44px)]">
              How I <span className="thin">work</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {[
              {
                n: "01",
                t: "Understand the system",
                b: "Stakeholder conversations, an honest audit of the current product, and the constraints that will decide what actually ships.",
              },
              {
                n: "02",
                t: "Find the structure",
                b: "Information architecture and flows first. If the structure is wrong, visual polish is decoration.",
              },
              {
                n: "03",
                t: "Design the states",
                b: "Empty, loading, error, permission, keyboard. The state list is where a design is actually proven.",
              },
              {
                n: "04",
                t: "Specify and hand over",
                b: "Tokens, spacing, behaviour and rationale written down so engineering is never guessing and review is never subjective.",
              },
            ].map((row) => (
              <div
                key={row.n}
                className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-[var(--color-border)] py-7 first:border-t-0 first:pt-0"
                data-reveal
              >
                <span className="eyebrow pt-1">{row.n}</span>
                <div>
                  <h3 className="text-[19px] font-bold tracking-[-0.02em]">
                    {row.t}
                  </h3>
                  <p className="mt-2 max-w-[54ch] text-[15px] leading-[1.65] text-[var(--color-secondary)]">
                    {row.b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section className="section wrap border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="h2 text-[clamp(30px,3.4vw,44px)]">Experience</h2>
            <p className="mt-4 max-w-[34ch] text-[14.5px] leading-[1.6] text-[var(--color-secondary)]">
              Roles held, in sequence. Full detail lives on the résumé page.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {EXPERIENCE.map((job) => (
              <article
                key={job.company}
                className="border-t border-[var(--color-border)] py-8 first:border-t-0 first:pt-0"
                data-reveal
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="eyebrow">{job.period}</span>
                  <span className="text-[13px] text-[var(--color-muted)]">
                    {job.role}
                  </span>
                </div>
                <h3 className="mt-3 text-[24px] font-extrabold tracking-[-0.03em]">
                  {job.company}
                </h3>
                <p className="mt-2 max-w-[58ch] text-[15px] leading-[1.65] text-[var(--color-secondary)]">
                  {job.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.contributions.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-[14.5px] text-[var(--color-secondary)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-px w-4 shrink-0 bg-[var(--color-ghost)]"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CAPABILITIES / TOOLS ---------- */}
      <section className="section wrap border-t border-[var(--color-border)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div data-reveal>
            <p className="eyebrow">Capabilities</p>
            <ul className="mt-6">
              {CAPABILITIES.map((c) => (
                <li
                  key={c}
                  className="border-t border-[var(--color-border)] py-3 text-[16px] last:border-b"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <p className="eyebrow">Tools</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <li key={t} className="pill h-[30px] px-4 text-[13px]">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-[46ch] text-[15px] leading-[1.7] text-[var(--color-secondary)]">
              Outside of client work I read editorial design closely — catalogue
              typography is where most of my layout instincts come from.
            </p>
          </div>
        </div>
      </section>

      <DarkCTA />
    </>
  );
}
