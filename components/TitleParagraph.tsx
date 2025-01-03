// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components";
import {fadeInUp, initial} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TitleParagraph: FC<ITitleParagraph> = ({
	title,
	paragraph,
	displayParagraph,
}) => {
	return (
		<div className="bg-white lg:max-w-[1700px] p-0 mx-auto flex flex-col px-4">
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="py-10 px-4"
			>
				<motion.h2
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={
						title
							? "mb-10 text-center font-semibold leading-tight text-lg lg:text-3xl text-black"
							: "hidden"
					}
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					className={
						paragraph
							? `lg:max-w-6xl mx-auto mb-10 text-black leading-[1.75rem] text-paragraph text-center ${
									displayParagraph ? "lg:text-center" : "lg:text-left"
							  }`
							: "hidden"
					}
				/>
			</motion.div>
		</div>
	);
};

export default TitleParagraph;
