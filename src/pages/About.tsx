import { Arrow, DarkCTA } from "../components/Shell";

export function About() {
  return (
    <>
      <section className="wrap pt-14 md:pt-20">
        <p className="eyebrow">About</p>
        <h1 className="display about-display mt-6">
          <span className="strong">Product designer</span> focused on making
          complex products easier to understand, use, and scale.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5" data-reveal>
            <img
              src={`${import.meta.env.BASE_URL}images/Gargee-Profile.png`}
              alt="Portrait of Gargee Moni Jose against a crimson studio backdrop."
              width={1666}
              height={1699}
              className="w-full rounded-[12px] object-cover object-top"
            />
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
                Read resume
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

      <DarkCTA />
    </>
  );
}
