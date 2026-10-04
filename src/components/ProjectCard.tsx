import { useEffect, useRef } from "react";
import type { Project } from "../data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className="project-card group block"
      href={`#/project/${project.slug}`}
      aria-label={`${project.title} — view case study`}
    >
      <div className={`card-media${project.thumbnail ? " card-media-thumbnail" : ""}`}>
        <img src={project.thumbnail ?? project.img} alt={project.thumbnailAlt ?? project.alt} loading="lazy" />
      </div>
      <div className="mt-5">
        <h3 className="card-title text-[17px] font-medium leading-snug tracking-[-0.015em] md:text-[18px]">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
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

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLDivElement>(null);

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
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2" ref={ref}>
      {projects.map((p, i) => (
        <div data-reveal key={p.slug} style={{ transitionDelay: `${i * 60}ms` }}>
          <ProjectCard project={p} />
        </div>
      ))}
    </div>
  );
}
