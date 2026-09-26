import { CLIENTS, EXPERTISE, PORTRAIT, PROJECTS } from "../data";
import { ProjectGrid } from "../components/ProjectCard";
import { Arrow, DarkCTA, Wordmarks } from "../components/Shell";

const ICONS = [
  // cursor / product thinking
  <path
    key="a"
    d="M4 3l7 16 2.2-6.8L20 10 4 3z"
    strokeLinejoin="round"
    strokeLinecap="round"
  />,
  // layers / interaction
  <g key="b" strokeLinejoin="round" strokeLinecap="round">
    <rect x="3" y="3" width="11" height="11" rx="1.5" />
    <path d="M8 17h9a2 2 0 0 0 2-2V8" />
  </g>,
  // target / visual
  <g key="c" strokeLinecap="round">
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22" />
  </g>,
  // ai-assisted
  <g key="d" strokeLinejoin="round" strokeLinecap="round">
    <path d="M4 4h5M4 4v5M20 4h-5M20 4v5M4 20h5M4 20v-5M20 20h-5M20 20v-5" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
  </g>,
];

export function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="wrap pt-8 md:pt-12">
        <p className="text-[15px] font-extrabold tracking-[-0.01em]">
          Hi there!
        </p>

        <div className="mt-4 flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
          <img
            src={PORTRAIT}
            alt="Gargee Moni Jose, product designer, photographed against a crimson studio backdrop."
            width={440}
            height={440}
            className="h-[220px] w-[220px] rounded-[12px] object-cover object-top md:h-[248px] md:w-[248px]"
          />
          <p className="max-w-[380px] text-[15px] leading-[1.6] text-[var(--color-secondary)] sm:text-right">
            I design digital products that make complex problems feel simple -
            combining UX research, interaction design, visual systems, and
            AI-assisted product workflows.
          </p>
        </div>

        <h1 className="display mt-8 md:mt-10">
          <span className="strong">Product Designer</span> crafting thoughtful
          digital experiences
        </h1>

        <div className="mt-14 md:mt-20">
          <Wordmarks items={CLIENTS} />
        </div>
      </section>

      {/* ---------- SELECTED PROJECTS ---------- */}
      <section className="section wrap" id="work">
        <div className="center-copy text-center" data-reveal>
          <h2 className="h2">Selected Projects</h2>
          <p className="mt-5 text-[14.5px] leading-[1.65] text-[var(--color-secondary)]">
            Every project starts with a question — what&apos;s the real problem
            here? Dive into the case studies to see how I navigate complexity,
            collaborate across teams, and ship solutions that create real
            impact.
          </p>
        </div>

        <div className="mt-14 md:mt-16">
          <ProjectGrid projects={PROJECTS} />
        </div>

        <div className="mt-14 flex justify-center" data-reveal>
          <a href="#/projects" className="btn btn-ghost">
            View all projects <Arrow />
          </a>
        </div>
      </section>

      {/* ---------- EXPERTISE ---------- */}
      <section className="section wrap border-t border-[var(--color-border)]">
        <div className="text-center" data-reveal>
          <h2 className="h2">Expertise</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISE.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--color-border)] bg-[#fafafa]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  {ICONS[i]}
                </svg>
              </div>
              <h3 className="mt-6 text-[19px] font-bold leading-tight tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-[var(--color-secondary)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <DarkCTA />
    </>
  );
}
