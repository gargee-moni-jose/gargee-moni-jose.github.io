import { GMAIL_COMPOSE_URL, LINKS } from "../data";
import { Arrow } from "../components/Shell";

const ROWS = [
  { label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
  { label: "LinkedIn", value: "gargee-moni-jose", href: LINKS.linkedin },
  { label: "Behance", value: "gargeemonijose014", href: LINKS.behance },
];

export function Contact() {
  return (
    <div className="on-dark flex-1 bg-[var(--color-dark)] text-white">
      <section className="wrap pb-24 pt-16 md:pb-32 md:pt-24">
        <p className="eyebrow text-white/50">Contact</p>

        <h1 className="display mt-6">
          <span className="strong">Let&apos;s Talk</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <p className="text-[17px] leading-[1.7] text-white/70 lg:col-span-5">
            I&apos;m open to new opportunities — full-time roles, freelance
            projects, and collaborations. If you&apos;re working on something
            interesting, I&apos;d love to hear about it.
          </p>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul>
              {ROWS.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="group flex items-baseline justify-between gap-6 border-t border-white/12 py-6 transition-colors duration-200 last:border-b hover:text-white/70"
                  >
                    <span className="eyebrow text-white/45">{row.label}</span>
                    <span className="flex items-center gap-3 text-right text-[16px] text-white sm:text-[18px]">
                      {row.value}
                      <Arrow className="arw opacity-60" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer noopener" className="btn btn-light">
                Send a Message <Arrow />
              </a>
              <a href={LINKS.cv} download="gargee_moni_jose_CV.pdf" className="btn btn-ghost border-white/25 bg-transparent text-white hover:border-white">
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
