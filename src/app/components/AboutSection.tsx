"use client";

import Image from "next/image";
// import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from "framer-motion";
import {
	fadeInUp,
	fadeInDown,
	fadeIn,
	staggerContainer,
	cardHoverSmall,
	scaleIn,
} from "@/utils/animations";

import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "@/contents/experience";
import { skills } from "@/contents/skills";
import SkillCard from "../components/SkillCard";
import EducationCard from "../components/EducationCard";
import { educations } from "@/contents/education";

export default function AboutSection() {
	const hasExperience:boolean=experiences.length>0
	return (
		<div className="container max-w-7xl mx-auto py-12">
			<div className="flex md:flex-row flex-col justify-around">
				{/* profile image section */}
				<motion.div
					className="flex justify-center items-center mb-4"
					{...scaleIn}
					transition={{ delay: 0.2 }}
				>
					<Image
						src="/profilePic.jpg"
						alt="Profile"
						width={100}
						height={100}
						className="rounded-full mb-4 w-50 h-50 object-cover ring-2 ring-primary"
					/>
				</motion.div>

				{/* about section */}
				<div>
					<motion.h1
						className="text-4xl font-bold mb-8 text-center"
						{...fadeInDown}
					>
						About Me
					</motion.h1>

					{/* Bio Section */}
					<motion.section className="mb-16" {...fadeInUp}>
						<p className="text-lg text-secondary max-w-3xl mx-auto text-center">
							I am a Full Stack Web Developer skilled in building
							scalable, responsive, and user-friendly applications
							using the MERN stack technologies. I am a techie
							guy, love to experiment, build and manage technical
							softwere projects. I belong from those boy who grew
							up with opening, breaking electronic devices to see
							what is inside it and how it works. I belong from
							those boy who grew up with watching sci-fi hollywood
							movies and get inspiretions. I love science, always
							try to find logics behind anything and love to
							explain to others. Love to draw, travel.
						</p>
					</motion.section>
				</div>
			</div>

			<div className="flex md:flex-row flex-col justify-between">
				{/* Experience Section */}
				{hasExperience && (
					<motion.section
						className=" md:min-h-200 mb-16 md:min-w-[30%]"
						{...fadeIn}
						transition={{ delay: 0.4 }}
					>
						<motion.h2 className="section-title" {...fadeInUp}>
							Experience
						</motion.h2>
						<motion.div
							className={`h-screen max-w-3xl mx-auto space-y-8 overflow-y-scroll overflow-x-hidden no-scrollbar`}
							variants={staggerContainer}
							initial="initial"
							animate="animate"
						>
							{experiences.map((experience, index) => (
								<ExperienceCard
									experience={experience}
									key={index}
								/>
							))}
						</motion.div>
					</motion.section>
				)}

				{/* Divider⭐ */}
				{hasExperience && (
					<div
						className={`md:h-screen relative top-[60] pb-0 md:w-0.5 h-0 w-0 bg-gray-300 m-10 mt-0`}
					></div>
				)}

				{/* Skills Section */}
				<motion.section
					className={`mb-16 md:min-h-200 ${
						hasExperience ? "md:w-[50%]" : "md:w-full"
					}`}
					{...fadeIn}
					transition={{ delay: 0.2 }}
				>
					<motion.h2 className="section-title" {...fadeInUp}>
						Skills
					</motion.h2>
					<motion.div
						className="h-screen overflow-y-auto overflow-hidden no-scrollbar"
						variants={staggerContainer}
						initial="initial"
						animate="animate"
					>
						{skills.map((skill, index) => (
							<SkillCard key={index} skill={skill} />
						))}
					</motion.div>
				</motion.section>
			</div>

			{/* Education Section */}
			<motion.section {...fadeIn} transition={{ delay: 0.6 }}>
				<motion.h2 className="section-title" {...fadeInUp}>
					Education
				</motion.h2>
				<motion.div
					className="max-w-3xl mx-auto"
					variants={staggerContainer}
					initial="initial"
					animate="animate"
				>
					<motion.div
						className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md space-y-8 h-[300px] overflow-auto no-scrollbar"
						variants={fadeInUp}
						{...cardHoverSmall}
					>
						{educations.map((education, index) => (
							<EducationCard key={index} education={education} />
						))}
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
}
