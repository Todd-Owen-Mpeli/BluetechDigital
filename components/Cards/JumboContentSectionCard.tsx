// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "../../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IJumboContentSectionCard} from "@/types/components/index";

// Styling
import styles from "../../styles/components/JumboContentSection.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const JumboContentSectionCard: FC<IJumboContentSectionCard> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	imageLocation,
	backgroundDisplay,
}) => {
	let titleColor;
	let subtitleColor;
	let buttonColor;
	let paragraphColor;
	let backgroundColor;
	let backgroundImage;

	switch (backgroundDisplay) {
		case "White":
			titleColor = "text-black";
			subtitleColor = "text-yellow-Two";
			buttonColor = "blue-default";
			backgroundColor = "bg-white";
			paragraphColor = "text-black";
			backgroundImage = `none`;
			break;
		case "lightGrey":
			titleColor = "text-black";
			subtitleColor = "text-blue-Two";
			buttonColor = "lightGrey";
			backgroundColor = "bg-lightGreyTwo";
			paragraphColor = "text-black";
			backgroundImage = `none`;
			break;
		case "blue":
			titleColor = "text-white";
			subtitleColor = "text-yellow-Two";
			buttonColor = "white";
			paragraphColor = "text-white";
			backgroundColor = "bg-blue-darkerTwo";
			backgroundImage = `/svg/background/blob-scene-haikei-blue-darkblue-two.svg`;
			break;
		case "GoldYellow":
			titleColor = "text-white";
			subtitleColor = "text-white";
			buttonColor = "white";
			paragraphColor = "text-white";
			backgroundColor = "bg-yellow-darker";
			backgroundImage = `/svg/background/background-left-triangle.svg`;
			break;
	}

	return (
		<>
			<div
				className={
					styles.jumboContentSectionCard +
					` relative pb-20 pt-10 sm:py-10 overflow-hidden bg-center bg-no-repeat bg-cover ${backgroundColor}`
				}
				style={{
					backgroundImage: `url("${backgroundImage}")`,
					clipPath: `${
						backgroundDisplay === "GoldYellow" ||
						backgroundDisplay === "lightGrey"
							? "polygon(0 0, 68% 0, 100% 0, 100% 99%, 25% 95%, 0 100%)"
							: "none"
					}`,
				}}
			>
				<div className="container relative px-0 mx-auto lg:px-4">
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
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[350px] sm:h-[400px]`
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
									className={`mb-1 uppercase text-center lg:text-center text-lg tracking-[0.15rem] ${subtitleColor}`}
								>
									{subtitle}
								</motion.h3>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={`mt-2 text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl ${titleColor} lg:pr-8`}
								>
									{title}
								</motion.h2>
								<Paragraph
									content={paragraph}
									tailwindStyling={`w-full lg:max-w-2xl mx-auto py-6 ${paragraphColor} text-center lg:text-left text-base sm:text-paragraph`}
								/>
								<div className={buttonLink?.url ? "mx-auto lg:mx-0" : "hidden"}>
									<Link href={`${buttonLink?.url}`} target={buttonLink?.target}>
										<ButtonBorderSliced
											fullWidth={false}
											title={buttonLink?.title}
											tailwindColor={`${buttonColor}`}
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
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className={
									image?.sourceUrl
										? `block object-cover object-center w-full h-[350px] sm:h-[400px]`
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

export default JumboContentSectionCard;
