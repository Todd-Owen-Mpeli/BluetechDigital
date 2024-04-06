"use client";

// Imports
import Link from "next/link";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {ITwoColumnButtonContent} from "@/types/components/index";
import {fadeIn, stagger, initialTwo} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const TwoColumnButtonContent: FC<ITwoColumnButtonContent> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	backgroundColor,
	columnTwoContent,
}) => {
	const columnTwoContentTailwindStyling =
		"text-darkGrey leading-[1.75rem] text-paragraph text-center lg:text-left";
	const [contentOneOpen, setContentOneOpen]: any = useState(true);
	const [contentTwoOpen, setContentTwoOpen]: any = useState(false);
	const [contentThreeOpen, setContentThreeOpen]: any = useState(false);

	// Hides or Display about us sublinks
	const displayContentOne = () => {
		setContentOneOpen(!contentOneOpen);
		setContentTwoOpen(false);
		setContentThreeOpen(false);
	};
	// Hides or Display about us sublinks
	const displayContentTwo = () => {
		setContentOneOpen(false);
		setContentTwoOpen(!contentTwoOpen);
		setContentThreeOpen(false);
	};
	// Hides or Display about us sublinks
	const displayContentThree = () => {
		setContentOneOpen(false);
		setContentTwoOpen(false);
		setContentThreeOpen(!contentThreeOpen);
	};

	switch (backgroundColor) {
		case "White":
			backgroundColor = "bg-white";
			break;
		case "Grey":
			backgroundColor = "bg-lightGrey";
			break;
	}

	return (
		<>
			<div className={` py-10 px-4 ${backgroundColor}`}>
				<div className="lg:container m-auto xl:px-16 flex flex-col lg:flex-row gap-6 lg:gap-16">
					<motion.div
						initial={initialTwo}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={`${
							columnTwoContent?.buttonText ? "lg:w-[55%]" : "lg:w-full mx-auto"
						} w-full flex flex-col items-center lg:items-baseline justify-center`}
					>
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-2 text-center lg:text-center text-base text-yellow-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-3 text-center font-semibold leading-tight lg:text-left text-xl lg:text-3xl text-black"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-xl text-black leading-[1.75rem] text-paragraph text-center lg:text-left"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={`${buttonLink?.target ? buttonLink?.target : "_self"}`}
							aria-label={`${buttonLink?.title}`}
						>
							<ButtonBorderSliced
								fullWidth={false}
								title={buttonLink?.title}
								tailwindColor={
									backgroundColor === "White" ? "white" : "purple-default"
								}
							/>
						</Link>
					</motion.div>
					<motion.div
						initial={initialTwo}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 lg:gap-0 pt-0 lg:pt-10"
					>
						<div className="w-full lg:w-[65%] flex flex-col">
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentOne}
								className={`${
									columnTwoContent?.buttonText ? "block" : "hidden"
								} py-3 lg:py-4 px-6 flex flex-row gap-4 text-left text-medium lg:text-lg font-extrabold border-l-[4px] border-solid ${
									contentOneOpen ? "border-yellow-default" : "border-black"
								}`}
							>
								<span
									className={
										contentOneOpen ? "text-yellow-default" : "text-black"
									}
								>
									{columnTwoContent?.buttonText}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentTwo}
								className={`${
									columnTwoContent?.buttonText ? "block" : "hidden"
								} py-3 lg:py-4 px-6 flex flex-row gap-4 text-left text-medium lg:text-lg font-extrabold border-l-[4px] border-solid ${
									contentTwoOpen ? "border-yellow-default" : "border-black"
								}`}
							>
								<span
									className={
										contentTwoOpen ? "text-yellow-default" : "text-black"
									}
								>
									{columnTwoContent?.buttonTextTwo}
								</span>
							</motion.button>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={displayContentThree}
								className={`${
									columnTwoContent?.buttonText ? "block" : "hidden"
								} py-3 lg:py-4 px-6 flex flex-row gap-4 text-left text-medium lg:text-lg font-extrabold border-l-[4px] border-solid ${
									contentThreeOpen ? "border-yellow-default" : "border-black"
								}`}
							>
								<span
									className={
										contentThreeOpen ? "text-yellow-default" : "text-black"
									}
								>
									{columnTwoContent?.buttonTextThree}
								</span>
							</motion.button>
						</div>
						<div className="w-full">
							{contentOneOpen ? (
								<Paragraph
									content={columnTwoContent?.paragraph}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							) : contentTwoOpen ? (
								<Paragraph
									content={columnTwoContent?.paragraphTwo}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							) : contentThreeOpen ? (
								<Paragraph
									content={columnTwoContent?.paragraphThree}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							) : (
								<Paragraph
									content={columnTwoContent?.paragraph}
									tailwindStyling={columnTwoContentTailwindStyling}
								/>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TwoColumnButtonContent;
