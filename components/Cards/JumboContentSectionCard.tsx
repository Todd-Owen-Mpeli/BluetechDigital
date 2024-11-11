"use client";

// Imports
import {
	initial,
	fadeInUp,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, useEffect, useState} from "react";
import {IJumboContentSection} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ButtonBorderSliced from "@/components/Elements/ButtonBorderSliced";

const JumboContentSectionCard: FC<IJumboContentSection.ICard> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	smallImage,
	imageLocation,
	backgroundDisplay,
}) => {
	let titleColor;
	let subtitleColor;
	let buttonColor;
	let paragraphColor;
	let backgroundColor;
	let backgroundImage;
	let borderImageColor;

	switch (backgroundDisplay) {
		case "White":
			titleColor = "text-black";
			subtitleColor = "text-yellow-two";
			buttonColor = "blue-default";
			backgroundColor = "bg-white";
			paragraphColor = "text-black";
			backgroundImage = `none`;
			borderImageColor = "border-white";
			break;
		case "lightGrey":
			titleColor = "text-black";
			subtitleColor = "text-blue-two";
			buttonColor = "lightGrey";
			backgroundColor = "bg-lightGreyTwo";
			paragraphColor = "text-black";
			backgroundImage = `none`;
			borderImageColor = "border-lightGreyTwo";
			break;
		case "Blue":
			titleColor = "text-white";
			subtitleColor = "text-yellow-two";
			buttonColor = "white";
			paragraphColor = "text-white";
			backgroundColor = "bg-blue-darkerTwo";
			backgroundImage = `/svg/background/stacked-waves-haikei-blue-darkblue.svg`;
			borderImageColor = "border-blue-darkerTwo";
			break;
		case "GoldYellow":
			titleColor = "text-white";
			subtitleColor = "text-white";
			buttonColor = "white";
			paragraphColor = "text-white";
			backgroundColor = "bg-yellow-darker";
			backgroundImage = `/svg/background/background-left-triangle.svg`;
			borderImageColor = "border-yellow-darker";
			break;
	}

	// Returns True if current window width is less than 640px
	const [isWindowBelow640, setIsWindowBelow640] = useState(
		typeof window !== "undefined" && window.innerWidth < 640
	);

	const updateWindowWidth = () => {
		setIsWindowBelow640(
			typeof window !== "undefined" && window.innerWidth < 640
		);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", updateWindowWidth);

			return () => {
				window.removeEventListener("resize", updateWindowWidth);
			};
		}
	}, []);

	return (
		<>
			<div
				className={` relative pt-10 pb-28 ${
					smallImage ? "lg:pb-28" : "lg:pb-10"
				} lg:py-10 overflow-hidden bg-center bg-no-repeat bg-cover ${backgroundColor}`}
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
				<div className="lg:max-w-[1700px] relative px-0 mx-auto lg:px-4">
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
										? `block object-cover object-center w-full h-[275px] sm:h-[400px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
								}}
							/>
							<Image
								alt={smallImage?.altText}
								src={smallImage?.sourceUrl}
								width={
									smallImage?.mediaDetails?.width
										? smallImage?.mediaDetails?.width
										: 1000
								}
								height={
									smallImage?.mediaDetails?.height
										? smallImage?.mediaDetails?.height
										: 1000
								}
								className={
									smallImage?.sourceUrl
										? `block sm:absolute top-[225px] lg:top-[275px] xl:top-[250px] left-[0px] mt-6 lg:ml-0 lg:left-[-50px] object-cover object-center h-[275px] sm:h-full w-full sm:w-[300px] lg:w-[375px] lg:h-[225px] border-none sm:border-solid border-[0.5rem] ${borderImageColor}`
										: `hidden`
								}
								style={{
									clipPath: `${
										isWindowBelow640
											? "polygon(0 0, 100% 0%, 100% 98%, 7% 95%)"
											: "none"
									}`,
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
								<motion.h4
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={`mb-3 text-center lg:text-left text-base ${subtitleColor}`}
								>
									{subtitle}
								</motion.h4>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={`mb-3 text-center font-semibold leading-tight lg:text-left text-xl lg:text-3xl ${titleColor} lg:pr-8`}
								>
									{title}
								</motion.h2>
								<Paragraph
									content={paragraph}
									className={`w-full lg:max-w-2xl mx-auto py-2 ${paragraphColor} text-center lg:text-left text-paragraph`}
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
										? `block object-cover object-center w-full h-[275px] sm:h-[400px]`
										: `hidden`
								}
								style={{
									clipPath: `polygon(0 0, 100% 0%, 100% 98%, 7% 95%)`,
								}}
							/>
							<Image
								alt={smallImage?.altText}
								src={smallImage?.sourceUrl}
								width={
									smallImage?.mediaDetails?.width
										? smallImage?.mediaDetails?.width
										: 1000
								}
								height={
									smallImage?.mediaDetails?.height
										? smallImage?.mediaDetails?.height
										: 1000
								}
								className={
									smallImage?.sourceUrl
										? `block sm:absolute top-[225px] lg:top-[275px] xl:top-[250px] right-[0px] mt-6 lg:ml-0 lg:right-[-50px] object-cover object-center h-[275px] sm:h-full w-full sm:w-[300px] lg:h-[175px] lg:w-[375px] border-none sm:border-solid border-[0.5rem] ${borderImageColor}`
										: `hidden`
								}
								style={{
									clipPath: `${
										isWindowBelow640
											? "polygon(0 0, 100% 0%, 95% 95%, 0 100%)"
											: "none"
									}`,
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
