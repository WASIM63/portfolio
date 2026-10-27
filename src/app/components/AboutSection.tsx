"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/contents/skills";
import { experiences } from "@/contents/experience";
import { educations } from "@/contents/education";
import { exploringGroups } from "@/contents/exploring";
import SkillIcon from "./SkillIcon";

export default function AboutSection() {
  return (
    <section className="page-shell section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">About me</p>
          <h1 className="section-title text-4xl sm:text-5xl">Backend-focused. Curious about what&apos;s next.</h1>
          <Image src="/profilePic.jpg" alt="Wasim Akram Mallick" width={500} height={560} className="mt-8 aspect-[4/5] max-w-sm rounded-[1.5rem] object-cover" />
        </div>
        <div>
          <p className="text-lg leading-8 text-[var(--muted)]">I am a backend-focused software engineer with hands-on experience building REST APIs, database-driven applications, authentication systems, background jobs, real-time communication features, and third-party integrations.</p>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">I work primarily with NestJS, Node.js, TypeScript, relational and NoSQL databases, Redis, and deployment tools. I also have frontend and mobile development experience, which helps me understand complete application workflows.</p>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">I am currently exploring microservices architecture and the tools used to build, communicate between, deploy, and monitor distributed backend systems.</p>
        </div>
      </div>

      <div className="mt-24">
        <p className="eyebrow">Technical skills</p>
        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.category} className="surface-card p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{skill.category}</h2>
              <div className="flex flex-wrap gap-2">{skill.topics.map((topic) => <span key={topic.name} className="inline-flex items-center gap-2 rounded-md bg-[var(--surface-muted)] px-2.5 py-1.5 text-sm text-[var(--muted)]"><SkillIcon name={topic.name} />{topic.name}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <div className="mb-8 flex items-end justify-between gap-4"><div><p className="eyebrow">Professional experience</p><h2 className="section-title">Where I&apos;ve been building.</h2></div></div>
        <div className="relative space-y-6 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-px before:bg-[var(--border)]">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="relative pl-8">
              <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-primary" />
              <div className="surface-card p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="text-xl font-semibold">{experience.role}</h3><p className="mt-1 text-primary">{experience.company}</p></div><p className="text-sm text-[var(--muted)]">{experience.start} — {experience.end}</p></div>
                {experience.location && <p className="mt-3 text-sm text-[var(--muted)]">{experience.location}</p>}
                <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{experience.overview}</p>
                {experience.description.length > 0 && <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--muted)] sm:grid-cols-2">{experience.description.map((item) => <li key={item}>• {item}</li>)}</ul>}
                {experience.technologies && <div className="mt-5 flex flex-wrap gap-2">{experience.technologies.map((technology) => <span key={technology} className="rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary">{technology}</span>)}</div>}
              </div>
            </article>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-24">
        <div className="mb-8"><p className="eyebrow">Currently exploring · Learning</p><h2 className="section-title">Exploring Microservices &amp; Distributed Systems</h2><p className="max-w-2xl text-[var(--muted)]">Expanding my backend engineering knowledge by learning how to design, communicate between, deploy, and observe independently deployable services.</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{exploringGroups.map((group) => <div key={group.title} className="surface-card p-6"><h3 className="font-semibold">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.topics.map((topic) => <span key={topic} className="rounded-md border border-dashed border-[var(--border)] px-2.5 py-1.5 text-sm text-[var(--muted)]">{topic}</span>)}</div></div>)}</div>
      </motion.div>

      <div className="mt-24 grid gap-6 md:grid-cols-2">
        <div><p className="eyebrow">Education</p><div className="space-y-4">{educations.map((education, index) => <div key={`${education.institution}-${education.degree}-${index}`} className="surface-card p-6"><p className="text-sm text-[var(--muted)]">{education.start} — {education.end}</p><h2 className="mt-2 text-xl font-semibold">{education.degree}</h2><p className="mt-1 text-primary">{education.institution}</p><p className="mt-4 text-sm text-[var(--muted)]">{education.description}{education.marks ? ` · ${education.marks}` : ""}</p></div>)}</div></div>
        <div><p className="eyebrow">Achievements</p><div className="surface-card p-6 text-sm leading-7 text-[var(--muted)]"><p>Third place in Byte Blitz 2.0, Seacom Engineering College, 2024.</p><p className="mt-3">Solved 430+ LeetCode problems.</p></div></div>
      </div>
    </section>
  );
}
