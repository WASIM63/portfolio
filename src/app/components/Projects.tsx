"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";
import { useState } from "react";

export default function Projects() {
	const [selectedDomain, setSelectedDomain] = useState<string>("All");

	// Get unique domains from projects
	const uniqueDomains = [
		"All",
		...new Set(projects.map((project) => project.domain)),
	];

	// Filter projects based on selected category
	const filteredProjects =
		selectedDomain === "All"
			? projects
			: projects.filter((project) => project.domain === selectedDomain);

	return (
		<div className="container max-w-7xl mx-auto py-12">
			<motion.h1
				className="text-4xl font-bold mb-4 text-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				My Projects
			</motion.h1>
			<motion.p
				className="text-lg text-secondary text-center mb-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				Here are some of my recent projects. Click on the links to view
				the code or live demo.
			</motion.p>

			{/* Category Filter Bar */}
			<motion.div
				className="flex justify-center mb-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<div className="flex flex-wrap gap-2 p-2 bg-white dark:bg-dark/50 rounded-2xl border-2 border-gray-200 dark:border-gray-700">
					{uniqueDomains.map((domain) => (
						<motion.button
							key={domain}
							onClick={() => setSelectedDomain(domain || "All")}
							className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
								selectedDomain === domain
									? "bg-primary text-white shadow-md"
									: "bg-transparent text-secondary hover:bg-primary/10 hover:text-primary"
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.1 }}
						>
							{domain}
							{
								<span className="ml-1 text-xs opacity-70">
									(
									{domain !== "All"
										? projects.filter(
												(p) => p.domain === domain
										  ).length
										: projects.length}
									)
								</span>
							}
						</motion.button>
					))}
				</div>
			</motion.div>

			{/* Projects Grid */}
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
				variants={staggerContainer}
				initial="initial"
				animate="animate"
				key={selectedDomain} // This will re-trigger animation when category changes
			>
				{filteredProjects.map((project, index) => (
					<motion.div
						key={`${selectedDomain}-${index}`} // Unique key for re-animation
						className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
						variants={fadeInUp}
						{...cardHoverSmall}
						layout // Smooth layout animations
					>
						<motion.div
							className="aspect-video bg-gray-200 dark:bg-gray-800"
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Image
								src={project.image}
								alt={project.title}
								className="object-cover w-full h-full"
								width={500}
								height={500}
							/>
						</motion.div>

						<div className="p-6">
							<motion.div className="flex justify-between items-start mb-2">
								<motion.h3
									className="text-xl font-semibold"
									whileHover={{ x: 5 }}
									transition={{
										type: "spring",
										stiffness: 300,
									}}
								>
									{project.title}
								</motion.h3>
								<span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
									{project.domain}
								</span>
							</motion.div>

							<motion.p
								className="text-secondary mb-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								{project.description}
							</motion.p>

							<motion.div
								className="flex flex-wrap gap-2 mb-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								{project.technologies.map((tech, techIndex) => (
									<motion.span
										key={techIndex}
										className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
									>
										{tech}
									</motion.span>
								))}
							</motion.div>

							<motion.div
								className="flex gap-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.4 }}
							>
								<motion.a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
									whileHover={{ x: 5 }}
									whileTap={{ scale: 0.95 }}
								>
									<FaGithub className="h-5 w-5" />
									<span>Code</span>
								</motion.a>
								<motion.a
									href={project.demoLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
									whileHover={{ x: 5 }}
									whileTap={{ scale: 0.95 }}
								>
									<FaExternalLinkAlt className="h-5 w-5" />
									<span>Live Demo</span>
								</motion.a>
							</motion.div>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* No projects found message */}
			{filteredProjects.length === 0 && (
				<motion.div
					className="text-center py-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					<p className="text-secondary text-lg">
						{`No projects found for ${selectedDomain} category.`}
					</p>
				</motion.div>
			)}
		</div>
	);
}
