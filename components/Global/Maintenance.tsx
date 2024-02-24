// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IMaintenance} from "@/types/components/index";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const Maintenance: FC<IMaintenance> = ({title, paragraph, backgroundImage}) => {
	return (
		<>
			<div
				className="relative flex flex-col h-full min-h-screen bg-center bg-no-repeat bg-cover"
				style={{backgroundImage: `url("${backgroundImage}")`}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden"
				>
					{/* Image */}
					<Image
						priority={true}
						alt={backgroundImage?.altText}
						src={backgroundImage?.sourceUrl}
						width={backgroundImage?.mediaDetails?.width}
						height={backgroundImage?.mediaDetails?.height}
						className="object-cover object-center w-full h-full"
					/>
					<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-blue-dark from-5% via-blue-dark via-10% to-blue-dark to-100%" />
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="container relative flex flex-col items-baseline justify-center px-4 m-auto text-center sm:text-left"
				>
					<div className="max-w-3xl mx-auto">
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="flex flex-col sm:block text-center mb-3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[2rem] sm:leading-[3rem] lg:leading-[4rem]"
						>
							{title}
						</motion.h1>
					</div>
					<div className="max-w-xl mx-auto">
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] text-base sm:text-medium text-center sm:text-left"
						/>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Maintenance;
