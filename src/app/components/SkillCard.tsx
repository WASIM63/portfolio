import {motion} from "framer-motion"
import {
	fadeInUp,
	cardHover,
} from "@/utils/animations";
import { Skill } from "@/types";

const SkillCard = ({skill}:{skill:Skill}) => {
  return (
		<motion.div
			className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mb-8"
			variants={fadeInUp}
			{...cardHover}
		>
			<h3 className="text-xl font-semibold mb-4 text-center text-primary">
				{skill.category}
			</h3>

			<ul className="text-secondary flex flex-wrap justify-center gap-6 md:gap-8">
				{skill.topics.map((topic, index) => (
					<li
						key={index}
						className="flex flex-col items-center mb-6 min-w-[80px] max-w-[120px]"
					>
						<img
							src={topic.image}
							alt="image"
							className="h-15 w-auto mb-2"
						/>
						<h4 className="text-center text-sm">{topic.name}</h4>
					</li>
				))}
			</ul>
		</motion.div>
  );
}

export default SkillCard
