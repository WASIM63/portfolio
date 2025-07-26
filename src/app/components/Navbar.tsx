'use client'
import Link from 'next/link'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ColorPicker from 'react-pick-color'

export default function Navbar() {
  const [color, setColor] = useState("#ea1e1e");
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
		document.documentElement.style.setProperty("--color-primary", color);
  }, [color]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 const handleMouseEnter = () => {
		console.log("hovered");
		setShowColorPicker(true);
 };

//  const handleMouseLeave = () => {
// 		setShowColorPicker(false);
//  };

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
		<nav className="fixed w-full bg-white/80 dark:bg-black/80  backdrop-blur-3xl z-50">
			<div className="container max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="text-2xl font-bold text-primary">
						PORTFOLIO
					</Link>

					<div className="hidden md:flex items-center space-x-8">
						{menuItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="hover:text-primary transition-colors"
							>
								{item.label}
							</Link>
						))}
						<motion.button
							onClick={toggleTheme}
							onMouseEnter={handleMouseEnter}
							// onMouseLeave={handleMouseLeave}
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							{theme === "dark" ? (
								<SunIcon className="h-5 w-5" />
							) : (
								<MoonIcon className="h-5 w-5" />
							)}
						</motion.button>
						<motion.div>
							{showColorPicker && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									transition={{ duration: 0.2 }}
									className="absolute top-full mt-2 right-0 z-50"
									onMouseEnter={() =>
										setShowColorPicker(true)
									}
									onMouseLeave={() =>
										setShowColorPicker(false)
									}
								>
									<ColorPicker
										color={color}
										onChange={(color) =>
											setColor(color.hex)
										}
									/>
								</motion.div>
							)}
						</motion.div>
					</div>

					{/* Mobile Menu Button */}
					<motion.button
						className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						onClick={() => {
							toggleMobileMenu();
							setShowColorPicker(true);
						}}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						{isMobileMenuOpen ? (
							<>
								<XMarkIcon className="h-6 w-6" />
								<motion.div>
									{showColorPicker && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -10 }}
											transition={{ duration: 0.2 }}
											className="absolute top-full mt-2 right-0 z-50"
											onMouseEnter={() =>
												setShowColorPicker(true)
											}
											onMouseLeave={() =>
												setShowColorPicker(false)
											}
										>
											<ColorPicker
												color={color}
												onChange={(color) =>
													setColor(color.hex)
												}
											/>
										</motion.div>
									)}
								</motion.div>
							</>
						) : (
							//
							<Bars3Icon className="h-6 w-6" />
						)}
					</motion.button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden"
						>
							<div className="py-4 space-y-4">
								{menuItems.map((item, index) => (
									<motion.div
										key={item.href}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Link
											href={item.href}
											className="block py-2 hover:text-primary transition-colors"
											onClick={() =>
												setIsMobileMenuOpen(false)
											}
										>
											{item.label}
										</Link>
									</motion.div>
								))}
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: menuItems.length * 0.1,
									}}
								>
									<button
										onClick={() => {
											toggleTheme();
											setIsMobileMenuOpen(false);
										}}
										// onMouseLeave={handleMouseLeave}
										className="flex items-center py-2 hover:text-primary transition-colors"
									>
										{theme === "dark" ? (
											<>
												<SunIcon className="h-5 w-5 mr-2" />
												Light Mode
											</>
										) : (
											<>
												<MoonIcon className="h-5 w-5 mr-2" />
												Dark Mode
											</>
										)}
									</button>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
  );
} 