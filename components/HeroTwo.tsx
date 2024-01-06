// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div className={styles.hero}>
				<div
					className="relative z-50 flex flex-col h-[45vh] lg:h-[60vh] bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.45),
							rgba(0, 0, 0, 0.55),
							rgba(0, 0, 0, 0.65)
						),url("${backgroundImage}")`,
						clipPath: `polygon(0 0, 100% 0, 100% 91%, 64% 98%, 0 94%)`,
					}}
				>
					<div className="container relative flex flex-col items-center sm:items-baseline justify-center py-20 px-4 m-auto text-center sm:text-left">
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="max-w-3xl flex flex-col sm:block mb-3 text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[3rem] lg:leading-[4rem]"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl mb-6 py-6 text-white leading-[1.75rem] text-base sm:text-lg text-center sm:text-left"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
