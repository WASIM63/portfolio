import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Link from "next/link";
import { skills } from "@/contents/skills";


export default function Home() {
  return (
		<main>
			<Hero />
			<section className="page-shell section-shell">
				<div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
					<div>
						<p className="eyebrow">Technical expertise</p>
						<h2 className="section-title">Tools for thoughtful products.</h2>
					</div>
					<Link href="/about" className="text-sm font-semibold text-primary">More about me <span aria-hidden="true">↗</span></Link>
				</div>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{skills.slice(0, 6).map((skill) => (
						<div key={skill.category} className="surface-card p-5">
							<h3 className="font-semibold">{skill.category}</h3>
							<p className="mt-2 text-sm leading-6 text-[var(--muted)]">{skill.topics.map((topic) => topic.name).join(" · ")}</p>
						</div>
					))}
				</div>
			</section>
			<Projects featuredOnly />
			<section className="page-shell pb-24">
				<div className="relative overflow-hidden rounded-[1.5rem] bg-slate-950 px-6 py-12 text-white sm:px-12">
					<div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
					<div className="relative max-w-2xl">
						<p className="eyebrow text-cyan-300">Have a project in mind?</p>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s connect.</h2>
						<p className="mt-4 leading-7 text-slate-300">Explore my work, exchange ideas about backend engineering, or get in touch about technical collaboration.</p>
						<div className="mt-7 flex flex-wrap items-center gap-5">
							<Link href="/contact" className="btn bg-white text-slate-950 hover:bg-slate-100">Get in touch <span aria-hidden="true">↗</span></Link>
							{process.env.NEXT_PUBLIC_EMAIL_ID && <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`} className="text-sm font-medium text-slate-300 hover:text-white">{process.env.NEXT_PUBLIC_EMAIL_ID}</a>}
						</div>
					</div>
				</div>
			</section>
		</main>
  );
}