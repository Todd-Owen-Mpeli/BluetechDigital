// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsTwo} from "@/types/components/index";
import {fadeIn, initial, initialTwo, stagger} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";
import TestimonialsTwoCard from "./Cards/TestimonialsTwoCard";

const TestimonialsTwo: FC<ITestimonialsTwo> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="relative pb-12 xl:pb-0 bg-body overflow-hidden">
				<div className="relative container mx-auto px-4">
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-wrap items-center -mx-4"
					>
						<div className="w-full xl:w-2/5 px-4 mb-32 xl:mb-0">
							<div className="relative max-w-xl xl:max-w-md mx-auto xl:mx-0">
								<div className="relative z-10">
									<div className="relative w-full lg:w-[65%] px-4 lg:mb-0">
										<motion.h4
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="text-center lg:text-left text-paragraph text-yellow-Two"
										>
											{subtitle}
										</motion.h4>
										<motion.h2
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="my-2 lg:max-w-3xl text-center lg:text-left font-semibold leading-tight text-4xl lg:text-7xl xl:text-8xl tracking-tighter text-white"
										>
											{title}
										</motion.h2>
										<Paragraph
											content={paragraph}
											tailwindStyling="text-center lg:text-left text-black text-paragraph leading-relaxed"
										/>
									</div>
									<div className="">
										<Link
											href={`${buttonLink?.url}`}
											target={buttonLink?.target}
											className={buttonLink?.url ? "block" : "hidden"}
										>
											<motion.button
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className={
													buttonLink?.title
														? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid border-white hover:bg-white hover:border-white transition-all ease-in-out duration-500 text-white hover:text-black before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] $after:bg-white hover:after:bg-white`
														: `hidden`
												}
											>
												<span>{buttonLink?.title}</span>
												<span className="hidden group-hover:block">
													<svg
														height="35"
														width="30.237"
														viewBox="0 0 30.237 35"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g transform="translate(-4906.763 143)">
															<path
																d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
																transform="translate(4870 -143)"
																fill="#e4a002"
															></path>
															<g transform="translate(4890.311 -1111.861)">
																<path
																	d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
																	transform="translate(0 0)"
																	fill="#000"
																></path>
															</g>
														</g>
													</svg>
												</span>
												<span className="block group-hover:hidden">
													<svg
														height="35"
														width="30.237"
														viewBox="0 0 30.237 35"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g transform="translate(-4906.763 143)">
															<path
																d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
																transform="translate(4870 -143)"
																fill="#ffffff"
															></path>
															<g transform="translate(4890.311 -1111.861)">
																<path
																	d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
																	transform="translate(0 0)"
																	fill="#ffffff"
																></path>
															</g>
														</g>
													</svg>
												</span>
											</motion.button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="relative w-full xl:w-3/5 px-4 h-186 overflow-hidden"
						>
							<div className="absolute top-0 left-0 z-10 w-full h-52 bg-gradient-to-b from-darkBlue-900 to-transparent"></div>
							<div className="absolute z-10 bottom-0 left-0 w-full h-52 bg-gradient-to-t from-darkBlue-900 to-transparent"></div>
							<div className="max-w-md md:max-w-3xl mx-auto xl:mr-0">
								<motion.div
									initial={initial}
									whileInView={stagger}
									viewport={{once: true}}
									className="flex flex-wrap -mx-4"
								>
									<div className="w-full md:w-1/2 px-4">
										<div className="slider-2 h-full">
											<motion.div
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="slider-container-2"
											>
												<TestimonialsTwoCard
													name={globalContext?.testimonials[0]?.node?.title}
													jobTitle={globalContext?.testimonials[0]?.node?.title}
													paragraph={
														globalContext?.testimonials[0]?.node?.excerpt
													}
													image={
														globalContext?.testimonials[0]?.node?.featuredImage
													}
												/>
												{/* <TestimonialsTwoCard
													name={globalContext?.testimonials[1]?.node?.title}
													jobTitle={globalContext?.testimonials[1]?.node?.title}
													paragraph={
														globalContext?.testimonials[1]?.node?.excerpt
													}
													image={
														globalContext?.testimonials[1]?.node?.featuredImage
													}
												/>
												<TestimonialsTwoCard
													name={globalContext?.testimonials[2]?.node?.title}
													jobTitle={globalContext?.testimonials[2]?.node?.title}
													paragraph={
														globalContext?.testimonials[2]?.node?.excerpt
													}
													image={
														globalContext?.testimonials[2]?.node?.featuredImage
													}
												/> */}
											</motion.div>
										</div>
									</div>
									<div className="w-full md:w-1/2 px-4">
										<div className="md:slider-2 h-full">
											<motion.div
												initial={initial}
												whileInView={stagger}
												viewport={{once: true}}
												className="slider-container-2 slide-2"
											>
												<TestimonialsTwoCard
													name={globalContext?.testimonials[0]?.node?.title}
													jobTitle={globalContext?.testimonials[0]?.node?.title}
													paragraph={
														globalContext?.testimonials[0]?.node?.excerpt
													}
													image={
														globalContext?.testimonials[0]?.node?.featuredImage
													}
												/>
												{/* <TestimonialsTwoCard
													name={
														globalContext?.testimonials[4]?.node?.title
													}
													jobTitle={
														globalContext?.testimonials[4]?.node
															?.jobTitle
													}
													paragraph={
														globalContext?.testimonials[4]?.node?.excerpt
													}
													image={
														globalContext?.testimonials[4]?.node
															?.featuredImage
													}
												/>
												<TestimonialsTwoCard
													name={
														globalContext?.testimonials[5]?.node?.title
													}
													jobTitle={
														globalContext?.testimonials[5]?.node
															?.jobTitle
													}
													paragraph={
														globalContext?.testimonials[5]?.node?.excerpt
													}
													image={
														globalContext?.testimonials[5]?.node
															?.featuredImage
													}
												/> */}
											</motion.div>
										</div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsTwo;
