"use client";

// Imports
import Image from "next/image";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import {IFAQCard} from "@/types/components/index";
import {fadeIn, initialTwo} from "../../animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const FAQCard: FC<IFAQCard> = ({title, paragraph}) => {
	// Displays Accordion Content
	const [iconOpen, setIconOpen]: any = useState(true);
	const [accordionOpen, setAccordionOpen]: any = useState(false);

	function displayAccordionContent() {
		setIconOpen(!iconOpen);
		setAccordionOpen(!accordionOpen);
	}

	return (
		<>
			<div
				className="flex flex-col w-full border-solid border-[5px] border-lightGrey"
				style={{
					boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
				}}
			>
				<div className="w-full p-6 border-solid transition-all duration-200 ease-in-out flex flex-wrap">
					<div className="flex-1">
						<button
							className="w-full flex items-center justify-between"
							onClick={displayAccordionContent}
						>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="flex font-bold max-w-sm sm:max-w-xl w-5/6 sm:w-full gap-6 sm:gap-4 items-center text-left leading-tight text-medium text-black"
							>
								<span className="hidden xl:block">
									<svg
										width="15"
										height="15"
										fill="none"
										viewBox="0 0 15 15"
										xmlns="http://www.w3.org/2000/svg"
										className="object-contain object-center w-full h-[25px]"
									>
										<path
											d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
											stroke="#00ab00"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</span>
								<span>{title}</span>
							</motion.h4>
							<div>
								<Image
									width={500}
									height={500}
									src="/svg/circle-arrow-right.svg"
									alt="White arrow in a black circle"
									className={`transition-opacity duration-200 ease-in-out w-full h-[30px] hover:opacity-70 ${
										accordionOpen ? "rotate-[270deg]" : "rotate-90"
									}`}
								/>
							</div>
						</button>
						{accordionOpen ? (
							<Paragraph
								content={paragraph}
								tailwindStyling="mt-4 text-black leading-[1.75rem] text-base text-left"
							/>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQCard;
