// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ITitleContentImage} from "@/types/components";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ButtonBorderSliced from "@/components/Elements/ButtonBorderSliced";

const TitleContentImage: FC<ITitleContentImage> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	imageLocation,
}) => {
	return (
		<>
			<div className="py-10 bg-white overflow-hidden">
				<div className="lg:container relative px-0 mx-auto lg:px-4">
					<div
						className={
							imageLocation === "Left"
								? `flex flex-col-reverse items-center gap-6 lg:flex-row`
								: `flex flex-col items-center gap-6 lg:flex-row`
						}
					>
						<motion.div
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className={
								imageLocation === "Left"
									? `block relative w-full px-4 lg:w-1/2`
									: `hidden`
							}
						>
							<Image
								alt={`${image?.altText}`}
								src={image?.sourceUrl}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 1000
								}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[350px] sm:h-[500px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
								}}
							/>
						</motion.div>
						<motion.div
							initial={
								imageLocation === "Left"
									? slideInRightInitial
									: slideInLeftInitial
							}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0"
						>
							<div className="flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 items-center lg:items-baseline">
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-1 uppercase text-center lg:text-center text-lg tracking-[0.15rem] text-yellow-two"
								>
									{subtitle}
								</motion.h3>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mt-2 text-center font-semibold leading-tight lg:text-left text-lg lg:text-3xl text-black lg:pr-8"
								>
									{title}
								</motion.h2>
								<Paragraph
									content={paragraph}
									className={`w-full lg:max-w-2xl mx-auto py-2 text-black text-center lg:text-left text-paragraph`}
								/>
								<div className={buttonLink?.url ? "mx-auto lg:mx-0" : "hidden"}>
									<Link
										href={`${buttonLink?.url}`}
										target={`${
											buttonLink?.target ? buttonLink?.target : "_self"
										}`}
										aria-label={`${buttonLink?.title}`}
									>
										<ButtonBorderSliced
											fullWidth={false}
											title={buttonLink?.title}
											tailwindColor={`blue-default`}
										/>
									</Link>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							viewport={{once: true}}
							className={
								imageLocation === "Right"
									? `block relative w-full px-4 lg:w-1/2`
									: `hidden`
							}
						>
							<Image
								alt={`${image?.altText}`}
								src={image?.sourceUrl}
								width={
									image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
								}
								height={
									image?.mediaDetails?.height
										? image?.mediaDetails?.height
										: 1000
								}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[350px] sm:h-[500px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 100% 98%, 7% 95%)`,
								}}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TitleContentImage;
