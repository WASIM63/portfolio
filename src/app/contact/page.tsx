'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations'
import IMAGE from "next/image"

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
		<div className="container max-w-7xl mx-auto py-12 relative">
			<motion.h1
				className="text-4xl font-bold mb-8 text-center"
				{...fadeInUp}
			>
				Contact Me
			</motion.h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Contact Information */}
				<motion.div className="space-y-8" {...slideInLeft}>
					<motion.div {...fadeInUp}>
						<h2 className="text-2xl font-semibold mb-4">
							Get in Touch
						</h2>
						<p className="text-secondary">
							Feel free to reach out if you have a new project,
							creative idea, or opportunity you would like to
							discuss—I am always open to being part of your
							vision.
						</p>
					</motion.div>

					<motion.div
						className="space-y-4"
						variants={fadeIn}
						initial="initial"
						animate="animate"
					>
						<motion.div
							className="flex items-center gap-4"
							variants={fadeInUp}
							whileHover={{ x: 10 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<FaEnvelope className="h-6 w-6 text-primary" />
							<div>
								<h3 className="font-semibold">Email</h3>
								<a
									href="mailto:your.email@example.com"
									className="text-secondary hover:text-primary"
								>
									{process.env.NEXT_PUBLIC_EMAIL_ID}
								</a>
							</div>
						</motion.div>

						<motion.div
							className="flex items-center gap-4"
							variants={fadeInUp}
							whileHover={{ x: 10 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<FaPhone className="h-6 w-6 text-primary" />
							<div>
								<h3 className="font-semibold">Phone</h3>
								<a
									href="tel:+1234567890"
									className="text-secondary hover:text-primary"
								>
									{process.env.NEXT_PUBLIC_MOBILE_NO}
								</a>
							</div>
						</motion.div>

						<motion.div
							className="flex items-center gap-4"
							variants={fadeInUp}
							whileHover={{ x: 10 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<FaMapMarkerAlt className="h-6 w-6 text-primary" />
							<div>
								<h3 className="font-semibold">Location</h3>
								<p className="text-secondary">India</p>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
					{...slideInRight}
				>
					<motion.form
						onSubmit={handleSubmit}
						className="space-y-6"
						variants={fadeIn}
						initial="initial"
						animate="animate"
					>
						<motion.div variants={fadeInUp}>
							<label
								htmlFor="name"
								className="block text-sm font-medium mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
							/>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<label
								htmlFor="email"
								className="block text-sm font-medium mb-2"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
							/>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<label
								htmlFor="message"
								className="block text-sm font-medium mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={4}
								className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent"
							/>
						</motion.div>

						<motion.button
							type="submit"
							disabled={status === "loading"}
							className="w-full btn btn-primary"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							{status === "loading"
								? "Sending..."
								: "Send Message"}
						</motion.button>

						{status === "success" && (
							<>
								<motion.p
									className="text-green-500 text-center"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
								>
									Message sent successfully!
								</motion.p>
								<motion.div
									className="absolute top-10"
									initial={{ opacity: 0, x: 0 }}
									animate={{ opacity: 1, x: 200 }}
								>
									<div className="flex flex-row gap-2">
										<p className="border-2 h-fit p-2 border-primary bg-secondary/50">
											I will reach you soon
										</p>
										<IMAGE
											src="/profilePic.jpg"
											height={100}
											width={100}
											alt="profile"
											className="border-2 rounded-full border-primary"
										/>
									</div>
								</motion.div>
							</>
						)}

						{status === "error" && (
							<motion.p
								className="text-red-500 text-center"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
							>
								Failed to send message. Please try again.
							</motion.p>
						)}
					</motion.form>
				</motion.div>
			</div>
		</div>
  );
} 