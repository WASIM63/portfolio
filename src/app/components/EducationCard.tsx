
import { motion } from "framer-motion";
import {
	fadeInUp,
	cardHoverSmall,
} from "@/utils/animations";
import { Education } from "@/types";

const EducationCard = ({education}:{education:Education}) => {
  return (
		<motion.div
			className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
			variants={fadeInUp}
			{...cardHoverSmall}
		>
			<h3 className="text-xl font-semibold mb-2">
				{education.degree}
			</h3>
			<p className="text-primary mb-2">{education.institution} • {education.start} - {education.end}</p>
			<p className="text-secondary">
				{education.description}
			</p>
		</motion.div>
  );
}

export default EducationCard