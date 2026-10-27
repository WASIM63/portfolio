"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { projects } from "@/contents/projects";

export default function Projects({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const sourceProjects = featuredOnly ? projects.filter((project) => project.featured) : projects;
  const domains = ["All", ...new Set(sourceProjects.map((project) => project.category))];
  const visibleProjects = selectedDomain === "All" ? sourceProjects : sourceProjects.filter((project) => project.category === selectedDomain);

  return (
    <section className="page-shell section-shell" id="projects">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">Projects that solve problems.</h2>
          <p className="max-w-xl text-[var(--muted)]">Three backend and application projects demonstrating APIs, data workflows, automation, real-time communication, and integrations.</p>
        </div>
        <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">View all projects <FaArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {domains.map((domain) => (
          <button key={domain} type="button" onClick={() => setSelectedDomain(domain)} className={`rounded-full border px-4 py-2 text-sm font-medium ${selectedDomain === domain ? "border-primary bg-primary text-white" : "border-[var(--border)] text-[var(--muted)] hover:border-primary hover:text-primary"}`}>
            {domain}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.slice(0, featuredOnly ? 3 : undefined).map((project) => (
          <motion.article layout key={project.title} className="surface-card group overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5">
            {project.image ? (
              <div className="aspect-[16/10] overflow-hidden bg-[var(--surface-muted)]">
                <Image src={project.image} alt={`${project.title} preview`} width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            ) : <div className="flex aspect-[16/10] items-end bg-[radial-gradient(circle_at_top_right,color-mix(in_srgb,var(--primary)_30%,transparent),transparent_60%),var(--surface-muted)] p-6"><span className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1 text-xs font-medium text-[var(--muted)]">Project image coming soon</span></div>}
            <div className="flex min-h-[245px] flex-col p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{project.category}</span>
              </div>
              <p className="text-sm leading-6 text-[var(--muted)]">{project.description}</p>
              <ul className="mt-4 space-y-1 text-xs leading-5 text-[var(--muted)]">
                {project.features.slice(0, 2).map((feature) => <li key={feature}>• {feature}</li>)}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((technology) => <span key={technology} className="rounded-md bg-[var(--surface-muted)] px-2.5 py-1 text-xs text-[var(--muted)]">{technology}</span>)}
              </div>
              <div className="mt-auto flex gap-5 pt-6 text-sm font-semibold">
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-primary"><FaGithub /> Code</a>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-primary"><FaExternalLinkAlt /> Live demo</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
      {visibleProjects.length === 0 && <p className="py-16 text-center text-[var(--muted)]">No projects found in this category.</p>}
    </section>
  );
}
