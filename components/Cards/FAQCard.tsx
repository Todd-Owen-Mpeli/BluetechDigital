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
				className="flex flex-col w-full border-solid border-2 border-blue-darker"
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
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="w-[90%] text-left text-base uppercase text-black font-extrabold"
							>
								{title}
							</motion.h2>
							<Image
								width={500}
								height={500}
								alt="Black Arrow Icon"
								src="/svg/navigation-menu-dropdown-arrow-black.svg"
								className={`transition-opacity duration-200 ease-in-out w-[10%] h-[30px] hover:opacity-70 ${
									accordionOpen ? "rotate-[180deg]" : "rotate-0"
								}`}
							/>
						</button>
						{accordionOpen ? (
							<Paragraph
								content={paragraph}
								tailwindStyling="mt-4 max-w-xl text-black leading-[1.75rem] text-base text-left"
							/>
						) : null}
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQCard;
