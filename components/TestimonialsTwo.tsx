"use client";

// Imports
import {
	fadeIn,
	initial,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import { FC, Fragment } from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonialsTwo} from "@/types/components/index";


// Components
import Paragraph from "@/components/Elements/Paragraph";
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
			<div
				className="py-4 bg-blue-default overflow-hidden bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url("/svg/background/stacked-waves-haikei-orange-yellow.svg")`,
				}}
			>
				<div className="flex flex-col xl:flex-row px-4 gap-6 xl:gap-4 ">
					<div className="w-full xl:w-1/3 flex px-4 xl:px-16 flex-col items-center xl:items-baseline justify-center">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className=" text-center xl:text-left text-tiny lg:text-base text-white"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 max-w-2xl mx-auto xl:mx-0 mb-6 text-white text-center xl:text-left font-semibold leading-tight text-lg lg:text-3xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="mb-6 lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base lg:text-paragraph text-center xl:text-left"
						/>
						<Link
							href={`${buttonLink?.url}`}
							aria-label={`${buttonLink?.title}`}
							target={`${buttonLink?.target ? buttonLink?.target : "_self"}`}
							className={buttonLink?.url ? "block" : "hidden"}
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									buttonLink?.title
										? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid bg-purple-two border-purple-two hover:bg-purple-dark hover:border-purple-dark transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-purple-two hover:before:bg-purple-dark after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-purple-two hover:after:bg-purple-dark`
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
													fill="#ffffff"
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
					<div className="xl:relative w-full xl:w-2/3">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row items-baseline md:items-center">
							<div className="w-full p-3">
								<div className="flex flex-col flex-nowrap -m-3">
									{globalContext?.testimonials?.length > 0 ? (
										globalContext?.testimonials
											.slice(0, 2)
											.map((item: any, index: number) => (
												<Fragment key={index}>
													<motion.div
														custom={index}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
														className="w-full"
													>
														<TestimonialsTwoCard
															name={item?.node?.testimonialReview?.name}
															image={item?.node?.testimonialReview?.image}
															jobTitle={item?.node?.testimonialReview?.jobTitle}
															paragraph={
																item?.node?.testimonialReview?.paragraph
															}
														/>
													</motion.div>
												</Fragment>
											))
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="hidden sm:block w-full p-3">
								<div className="flex flex-col flex-nowrap -m-3">
									{globalContext?.testimonials?.length > 0 ? (
										globalContext?.testimonials
											.slice(2, 4)
											.map((item: any, index: number) => (
												<Fragment key={index}>
													<motion.div
														custom={index}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
														className="w-full"
													>
														<TestimonialsTwoCard
															name={item?.node?.testimonialReview?.name}
															image={item?.node?.testimonialReview?.image}
															jobTitle={item?.node?.testimonialReview?.jobTitle}
															paragraph={
																item?.node?.testimonialReview?.paragraph
															}
														/>
													</motion.div>
												</Fragment>
											))
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="hidden md:block w-full p-3">
								<div className="flex flex-col flex-nowrap -m-3">
									{globalContext?.testimonials?.length > 0 ? (
										globalContext?.testimonials
											.slice(4, 6)
											.map((item: any, index: number) => (
												<Fragment key={index}>
													<motion.div
														custom={index}
														initial={initial}
														whileInView="animate"
														viewport={{once: true}}
														variants={arrayLoopStaggerChildren}
														className="w-full"
													>
														<TestimonialsTwoCard
															name={item?.node?.testimonialReview?.name}
															image={item?.node?.testimonialReview?.image}
															jobTitle={item?.node?.testimonialReview?.jobTitle}
															paragraph={
																item?.node?.testimonialReview?.paragraph
															}
														/>
													</motion.div>
												</Fragment>
											))
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsTwo;
