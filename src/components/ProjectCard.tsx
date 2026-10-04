import { useEffect, useRef } from "react";
import type { Project } from "../data";

const HOME_PROJECT_ORDER = ["hubbo-pos", "ai-ux-design-workflow", "saar"];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className="project-card group block showcase-project-card h-full"
      href={`#/project/${project.slug}`}
      aria-label={`${project.title} — view case study`}
    >
      <div className={`card-media${project.thumbnail ? " card-media-thumbnail" : ""}`}>
        <img src={project.thumbnail ?? project.img} alt={project.thumbnailAlt ?? project.alt} loading="lazy" />
      </div>
      <div className="project-card-copy">
        <div className="project-card-heading flex items-center justify-between gap-4">
          <h3 className="card-title text-[17px] font-medium leading-snug tracking-[-0.015em] md:text-[18px]">
            {project.title}
          </h3>
          <span className="project-card-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.25 8h9.5m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <p className="project-card-summary mt-2 text-[13px] leading-[1.6] text-[var(--color-secondary)]">
          {project.summary}
        </p>
        <div className="project-card-tags flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span className="pill" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function ProjectGrid({
  projects,
  variant = "default",
}: {
  projects: Project[];
  variant?: "default" | "home";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const orderedProjects = variant === "home"
    ? [...projects].sort((a, b) => {
        const aOrder = HOME_PROJECT_ORDER.indexOf(a.slug);
        const bOrder = HOME_PROJECT_ORDER.indexOf(b.slug);
        return (aOrder === -1 ? Infinity : aOrder) - (bOrder === -1 ? Infinity : bOrder);
      })
    : projects;

  // Grids re-mount when filtered or sorted, so they observe their own nodes.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
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
    nodes.forEach((n) => {
      if (!n.classList.contains("is-visible")) io.observe(n);
    });
    return () => io.disconnect();
  }, [projects]);

  return (
    <div
      className="project-grid project-card-grid grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
      ref={ref}
    >
      {orderedProjects.map((p, i) => (
        <div
          data-reveal
          key={p.slug}
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <ProjectCard project={p} />
        </div>
      ))}
    </div>
  );
}
