// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTATwo} from "@/types/components/index";
import {initial, stagger} from "../animations/animations";

// Components
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const CTATwo: FC<ICTATwo> = ({
	title,
	buttonLink,
	highlightText,
	backgroundColor,
	highlightTextColor,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="flex flex-col lg:flex-row justify-around py-6 px-4 items-center"
				style={{
					backgroundColor: `${backgroundColor}`,
				}}
			>
				<div className="max-w-2xl text-left">
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="text-center font-bold leading-[2.35rem] lg:text-left text-xl p-4 pl-0 text-white"
					>
						{title}
						<span
							className="p-2 ml-3 text-white rounded-lg"
							style={{
								backgroundColor: `${highlightTextColor}`,
							}}
						>
							{highlightText}
						</span>
					</motion.h2>
				</div>
				<div className="text-box-two">
					<Link
						href={`${buttonLink?.url}`}
						target={buttonLink?.target}
						className={buttonLink?.url ? "block" : "hidden"}
					>
						<ButtonBorderSliced
							fullWidth={false}
							title={buttonLink?.title}
							tailwindColor="white"
						/>
					</Link>
				</div>
			</motion.div>
		</>
	);
};

export default CTATwo;
