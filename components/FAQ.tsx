// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {IFAQ} from "@/types/components/index";

// Components
import FAQCard from "./Cards/FAQCard";
import Paragraph from "./Elements/Paragraph";

const FAQ: FC<IFAQ> = ({title, subtitle, paragraph, faqGrid}) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0);

	const handleButtonClick = (index: any) => {
		setSelectedItemIndex(index);
	};

	return (
		<>
			<div
				className="relative py-12 sm:py-16 px-4 bg-white bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url("/svg/background/polygon-scatter-haikei-lightgrey.svg")`,
				}}
			>
				<div className="container relative m-auto flex flex-col items-center gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center"
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center text-base text-yellow-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-xl mx-auto xl:mx-0 uppercase text-black text-center font-extrabold text-lg md:text-xl"
						>
							{title}
						</motion.h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black text-base text-center"
						/>
					</motion.div>
					<div className="w-full relative py-0 lg:py-20 lg:py-24 overflow-hidden">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="max-w-7xl mx-auto flex flex-wrap -mx-4 -mb-8"
						>
							<div className="w-full lg:w-1/3 py-8 px-4 mb-15 lg:mb-0">
								<div className="max-w-xl mx-auto lg:mx-0 lg:max-w-full flex flex-wrap -mx-2 lg:flex-col lg:max-w-sm border-b lg:border-b-0 lg:border-r-2 border-blue-default">
									<div className="w-full lg:w-full px-2 mb-15">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="uppercase text-black text-center sm:text-left font-extrabold text-lg mb-9"
										>
											Getting Started
										</motion.h3>
										<motion.ul
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: true}}
											className="flex flex-col sm:items-baseline items-center justify-center"
										>
											{faqGrid?.length > 0 ? (
												faqGrid?.map((item: any, keys: number) => (
													<Fragment key={keys}>
														<motion.li
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
															className="mb-6 lg:pr-6"
														>
															<button
																onClick={() => handleButtonClick(keys)}
																className={`flex items-center justify-center text-tiny font-semibold hover:text-orange-default ${
																	selectedItemIndex === keys
																		? "text-yellow-default"
																		: "text-black"
																}`}
															>
																<svg
																	width="12"
																	height="12"
																	viewBox="0 0 12 12"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<circle
																		cx="6"
																		cy="6"
																		r="5"
																		stroke="#C3C6CE"
																		strokeWidth="2"
																	></circle>
																</svg>
																<span className="ml-3 text-center sm:text-left">
																	{item?.card?.title}
																</span>
															</button>
														</motion.li>
													</Fragment>
												))
											) : (
												<></>
											)}
										</motion.ul>
									</div>
								</div>
							</div>
							<div className="w-full lg:w-2/3 px-4">
								<div className="max-w-xl xl:max-w-3xl mx-auto py-8 lg:py-0 lg:mr-0">
									{selectedItemIndex !== null && (
										<>
											<motion.h3
												initial={initial}
												whileInView={fadeInUp}
												viewport={{once: true}}
												className="uppercase text-black text-center sm:text-left font-extrabold text-lg mb-6"
											>
												{faqGrid[selectedItemIndex]?.card?.title}
											</motion.h3>
											<Paragraph
												content={faqGrid[selectedItemIndex]?.card?.paragraph}
												tailwindStyling=" text-black text-base text-left"
											/>
										</>
									)}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQ;
