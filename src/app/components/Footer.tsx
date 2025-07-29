import Link from 'next/link'
import {
	FaGithub,
	// FaTwitter,
	FaLinkedin,
	FaInstagramSquare,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
		<footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
			<div className="container max-w-7xl mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<Link
							href="/"
							className="text-2xl font-bold text-primary"
						>
							PORTFOLIO
						</Link>
						<p className="text-sm text-secondary mt-2">
							© {new Date().getFullYear()} Portfolio. All rights
							reserved.
						</p>
					</div>

					<div className="flex space-x-6">
						<a
							href={process.env.NEXT_PUBLIC_GITHUB}
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary hover:text-primary transition-colors"
						>
							<FaGithub className="h-6 w-6" />
						</a>
						<a
							href={process.env.NEXT_PUBLIC_LINKED_IN}
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary hover:text-primary transition-colors"
						>
							<FaLinkedin className="h-6 w-6" />
						</a>
						<a
							href={process.env.NEXT_PUBLIC_LEETCODE}
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary hover:text-primary transition-colors"
						>
							<SiLeetcode className="h-6 w-6" />
						</a>
						<a
							href={process.env.NEXT_PUBLIC_INSTAGRAM}
							target="_blank"
							rel="noopener noreferrer"
							className="text-secondary hover:text-primary transition-colors"
						>
							<FaInstagramSquare className="h-6 w-6" />
						</a>
					</div>
				</div>
			</div>
		</footer>
  );
} 