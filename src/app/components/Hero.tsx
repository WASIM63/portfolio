'use client'

import Link from 'next/link';
import Image from 'next/image';
import {
	FaGithub,
	FaLinkedin,
	// FaTwitter,
	FaInstagramSquare,
	FaFilePdf,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn, scaleIn } from '@/utils/animations';

export default function Hero() {
  return (
		<section className="py-28">
			{/* py-28*/}
			<div className=" max-w-7xl mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
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
					<motion.h1
						className="text-4xl md:text-6xl font-bold mb-6"
						{...fadeInUp}
						transition={{ delay: 0.3 }}
					>
						Hi, I am{" "}
						<motion.span
							className="text-primary "
							{...fadeIn}
							transition={{ delay: 0.8 }}
						>
							Wasim Akram Mallick
						</motion.span>
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
						{...fadeInUp}
						transition={{ delay: 0.4 }}
					>
						Full Stack Developer
					</motion.p>
					<motion.div
						className="flex justify-center space-x-4 mb-8"
						{...fadeInUp}
						transition={{ delay: 0.5 }}
					>
						<motion.a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							<FaGithub />
						</motion.a>
						<motion.a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							<FaLinkedin />
						</motion.a>
						<motion.a
							href="https://leetcode.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							<SiLeetcode />
						</motion.a>
						<motion.a
							href="https://www.instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							<FaInstagramSquare />
						</motion.a>
					</motion.div>
					<motion.div
						className="flex flex-col md:flex-row justify-center gap-4"
						{...fadeInUp}
						transition={{ delay: 0.6 }}
					>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								href="/projects"
								className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
							>
								View Projects
							</Link>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<a
								href={"/My Resume.pdf"}
								target="_blank"
								rel="noreferrer"
								className="flex flex-row justify-center items-center gap-2 w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
							>
								<FaFilePdf />
								Resume
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
  );
} 