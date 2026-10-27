"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB, icon: FaGithub },
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKED_IN, icon: FaLinkedin },
  { label: "LeetCode", href: process.env.NEXT_PUBLIC_LEETCODE, icon: SiLeetcode },
];

export default function Hero() {
  return (
		<section className="relative overflow-hidden border-b border-[var(--border)]">
			<div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
			<div className="page-shell relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55 }}
				>
					<p className="eyebrow">
						<span className="h-2 w-2 rounded-full bg-cyan-500" />{" "}
						Backend Software Engineer
					</p>
					<h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
						Building Reliable,{" "}
						<span className="text-primary">
							Scalable Backend Systems.
						</span>
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
						I build backend APIs, database-driven applications,
						asynchronous workflows, and third-party integrations
						using NestJS, Node.js, TypeScript, and modern backend
						technologies.
					</p>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<Link href="/projects" className="btn btn-primary">
							Explore my work <span aria-hidden="true">↗</span>
						</Link>
						<a
							href={process.env.NEXT_PUBLIC_RESUME_URL}
							target="_blank"
							rel="noreferrer"
							className="btn btn-secondary"
						>
							<FaFilePdf /> Download resume
						</a>
					</div>
					<div className="mt-9 flex items-center gap-5">
						<span className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
							Find me on
						</span>
						{socials.map(({ label, href, icon: Icon }) =>
							href ? (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="text-xl text-[var(--muted)] hover:-translate-y-0.5 hover:text-primary"
								>
									<Icon />
								</a>
							) : null,
						)}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.65, delay: 0.1 }}
					className="relative mx-auto w-full max-w-sm"
				>
					<div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-cyan-400/20 blur-2xl" />
					<div className="surface-card relative overflow-hidden p-3 shadow-2xl shadow-slate-950/10">
						<Image
							src="/profilePic.jpg"
							alt="Wasim Akram Mallick"
							width={560}
							height={680}
							priority
							className="aspect-[4/5] w-full rounded-[1rem] object-cover"
						/>
						<div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/20 bg-slate-950/70 p-4 text-white backdrop-blur-md">
							<p className="text-sm font-semibold">
								Wasim Akram Mallick
							</p>
							<p className="mt-1 text-xs text-slate-300">
								NestJS · Node.js · TypeScript
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
  );
}
