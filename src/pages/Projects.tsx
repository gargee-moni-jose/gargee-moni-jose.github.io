import { useEffect, useMemo, useRef, useState } from "react";
import { CLIENTS, PROJECTS } from "../data";
import { ProjectGrid } from "../components/ProjectCard";
import { DarkCTA, Wordmarks } from "../components/Shell";

type DropdownOption = { value: string; label: string };

function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-2" ref={rootRef}>
      <span className="eyebrow">{label}</span>
      <div className="relative">
        <button
          type="button"
          className="inline-flex h-10 min-w-[132px] items-center justify-between gap-4 rounded-[6px] border border-[var(--color-border)] bg-white px-3 text-left text-[14px] font-semibold tracking-[-0.01em] transition-colors hover:border-[var(--color-ink)]"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <span>{selected.label}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path
              d="m2.25 4.5 3.75 3.75L9.75 4.5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div
            role="listbox"
            aria-label={label}
            className="absolute right-0 z-30 mt-2 min-w-full overflow-hidden rounded-[6px] border border-[var(--color-ink)] bg-white p-1 shadow-[0_10px_25px_rgba(15,15,15,0.1)]"
          >
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`flex w-full items-center justify-between gap-5 rounded-[3px] px-2.5 py-2 text-left text-[13.5px] transition-colors ${
                    isSelected
                      ? "bg-[var(--color-ink)] text-white"
                      : "text-[var(--color-ink)] hover:bg-[#f3f3f3]"
                  }`}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected && <span aria-hidden="true">✓</span>}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [sort, setSort] = useState("recent");
  const [industry, setIndustry] = useState("all");

  const industries = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.industry))),
    []
  );

  const list = useMemo(() => {
    let out = PROJECTS.filter(
      (p) => industry === "all" || p.industry === industry
    );
    out = [...out].sort((a, b) =>
      sort === "title"
        ? a.title.localeCompare(b.title)
        : Number(b.year) - Number(a.year)
    );
    return out;
  }, [sort, industry]);

  return (
    <>
      <section className="wrap pt-14 text-center md:pt-20">
        <h1 className="h1">Projects</h1>
        <p className="center-copy mt-5 text-[14.5px] leading-[1.65] text-[var(--color-secondary)]">
          Every project starts with a question — what&apos;s the real problem
          here? Dive into the case studies to see how I navigate complexity,
          collaborate across teams, and ship solutions that create real impact.
        </p>

        <div className="mt-12 md:mt-16">
          <Wordmarks items={CLIENTS} />
        </div>
      </section>

      <section className="section wrap" id="work">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h2" data-reveal>
            All Projects
          </h2>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pb-2">
            <FilterDropdown
              label="Sort"
              value={sort}
              onChange={setSort}
              options={[
                { value: "recent", label: "Most recent" },
                { value: "title", label: "Title A–Z" },
              ]}
            />

            <FilterDropdown
              label="Industry"
              value={industry}
              onChange={setIndustry}
              options={[
                { value: "all", label: "All" },
                ...industries.map((item) => ({ value: item, label: item })),
              ]}
            />
          </div>
        </div>

        <hr className="rule mt-6 mb-12" />

        {list.length > 0 ? (
          <ProjectGrid projects={list} />
        ) : (
          <div className="border border-dashed border-[var(--color-border)] px-8 py-20 text-center">
            <p className="text-[15px] font-semibold">No projects in this industry</p>
            <p className="mt-2 text-[14px] text-[var(--color-muted)]">
              Reset the filter to see the full selection.
            </p>
            <button
              type="button"
              className="btn btn-ghost mt-6"
              onClick={() => setIndustry("all")}
            >
              Show all projects
            </button>
          </div>
        )}
      </section>

      <DarkCTA />
    </>
  );
}
