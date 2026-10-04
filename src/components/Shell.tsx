import { useEffect, useState } from "react";
import { GMAIL_COMPOSE_URL, LINKS } from "../data";

/* ---------------- routing helpers ---------------- */

export function useHashRoute() {
  const read = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => {
      setRoute(read());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export function go(path: string) {
  window.location.hash = path;
}

/* ---------------- reveal on scroll ---------------- */

export function useReveal(route: string) {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [route]);
}

/* ---------------- icons ---------------- */

export function Arrow({ className = "arw" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- navigation ---------------- */

const NAV = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export function Nav({ route }: { route: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  const isActive = (href: string) => route.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-[6px]">
      <div className="wrap">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <a
            href="#/"
            className="text-[19px] font-extrabold tracking-[-0.045em] leading-none sm:text-[22px]"
            aria-label="Gargee Moni Jose — home"
          >
            gargee moni jose
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="nav-link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#/contact"
              className="btn btn-dark hidden h-[42px] min-h-0 px-[18px] text-[13.5px] md:inline-flex"
            >
              Connect
              <span aria-hidden="true">▸</span>
            </a>
            <button
              type="button"
              className="btn btn-ghost h-[42px] min-h-0 px-4 text-[13.5px] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mobile-panel md:hidden" id="mobile-menu">
          <nav className="wrap flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                className="border-b border-[var(--color-border)] py-3 text-[17px] font-medium last:border-0"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#/contact"
              className="btn btn-dark mt-4 w-full"
            >
              Connect <span aria-hidden="true">▸</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- client wordmark strip ---------------- */

export function Wordmarks({
  items,
}: {
  items: { name: string; src: string }[];
}) {
  return (
    <div className="wordmarks">
      <div className="wordmarks-track">
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? "duplicate" : "original"}
            className="wordmarks-set"
            aria-hidden={isDuplicate}
          >
            {items.map(({ name, src }) => (
              <span
                key={name}
                className="wordmark-item select-none"
                data-logo={name}
              >
                <img
                  src={src}
                  alt={isDuplicate ? "" : `${name} logo`}
                  className="wordmark-image"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- dark CTA + footer ---------------- */

export function DarkCTA() {
  return (
    <section className="on-dark bg-[var(--color-dark)] text-white" id="contact">
      <div className="wrap">
        <div className="pb-10 pt-16 text-center md:pb-12 md:pt-20">
          <h2 className="h2 font-extrabold">Let&apos;s Talk</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-[1.7] text-white/70">
            I&apos;m open to new opportunities — full-time roles, freelance
            projects, and collaborations.
            <br className="hidden sm:block" /> If you&apos;re working on
            something interesting, I&apos;d love to hear about it.
          </p>
          <div className="mt-6 flex justify-center">
            <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer noopener" className="btn btn-light">
              Send a Message
              <Arrow />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/12 py-5 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-5" aria-label="Footer">
            <a className="text-[13.5px] text-white/80 hover:text-white" href="#/">
              Home
            </a>
            <a
              className="text-[13.5px] text-white/80 hover:text-white"
              href="#/about"
            >
              About me
            </a>
            <a
              className="text-[13.5px] text-white/80 hover:text-white"
              href="#/projects"
            >
              Projects
            </a>
          </nav>
          <nav className="flex flex-wrap gap-5" aria-label="Social">
            <a
              className="text-[13.5px] text-white/80 hover:text-white"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <a
              className="text-[13.5px] text-white/80 hover:text-white"
              href={LINKS.behance}
              target="_blank"
              rel="noreferrer noopener"
            >
              Behance
            </a>
            <a
              className="text-[13.5px] text-white/80 hover:text-white"
              href={LINKS.cv}
              download="gargee_moni_jose_CV.pdf"
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}

export function BottomBar() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="wrap">
        <div className="flex flex-col items-center gap-1 py-3 text-[12px] text-[var(--color-secondary)] sm:flex-row sm:justify-between">
          <span className="font-semibold text-[var(--color-ink)]">
            Gargee Moni Jose
          </span>
          <span className="text-[var(--color-muted)]">
            © gargeemonijose. All Rights Reserved
          </span>
          <span className="text-[var(--color-ink)]">With patience</span>
        </div>
      </div>
    </footer>
  );
}
