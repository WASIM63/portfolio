import { motion } from "framer-motion";
import { fadeInUp, cardHoverSmall } from "@/utils/animations";
import { Experience } from "@/types";

const ExperienceCard = ({
	experience
}: {
	experience: Experience;
}) => {
	return (
		<div className="flex flex-row gap-6">
			{/* Timeline */}
			<div className="flex flex-col items-center pt-2">
				{/* Timeline dot */}
				<motion.div
					className="w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-dark shadow-lg z-10"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.2, duration: 0.3 }}
				/>
				{/* Timeline line */}
				<motion.div
					className="w-0.5 bg-gray-300 dark:bg-gray-600 mt-2 flex-1 min-h-24"
					initial={{ height: 0 }}
					animate={{ height: "100%" }}
					transition={{ delay: 0.4, duration: 0.6 }}
				/>
			</div>

			<motion.div
				className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md "
				variants={fadeInUp}
				{...cardHoverSmall}
			>
				<p className="text-2xl text-primary mb-2">
					{experience.company} • {experience.start} - {experience.end}
				</p>

				<h3 className="font-semibold mb-2">
					{experience.role}
				</h3>
				<ul className="text-secondary list-disc list-inside space-y-2">
					{experience.description.map((des,index)=>(
                        <li key={index}>{des}</li>
                    ))}
				</ul>
			</motion.div>
		</div>
	);
};

export default ExperienceCard;
