// Imports
import {
	fadeInUp,
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IServicesGrid} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const ServicesGrid: FC<IServicesGrid> = ({servicesGrid}) => {
	return (
		<>
			<div
				className={
					styles.servicesGrid +
					` py-10 px-4 lg:px-0 bg-white bg-center bg-no-repeat bg-cover`
				}
				style={{
					backgroundImage: `url("/svg/background/polygon-scatter-haikei-lightgrey-one.svg")`,
				}}
			>
				<div className="container px-0 mx-auto">
					{servicesGrid?.length > 0 ? (
						servicesGrid?.map((item: any, keys: number) => (
							<Fragment key={keys}>
								<>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="py-8 lg:py-12 px-4"
									>
										<motion.div
											initial={initial}
											variants={stagger}
											whileInView="animate"
											viewport={{once: true}}
											className={`flex ${
												keys % 2 === 0 ? "flex-col-reverse" : "flex-col"
											} lg:flex-row -mx-4 gap-8 items-center`}
										>
											<div
												className={
													keys % 2 === 0 ? "w-full lg:w-1/2 px-4" : "hidden"
												}
											>
												<motion.div
													initial={initial}
													variants={stagger}
													whileInView="animate"
													viewport={{once: true}}
													className="relative"
												>
													<div
														className={`absolute w-full h-full min-h-[400px] top-0 left-[-45px] mt-6 ml-6 ${
															keys === 0
																? "bg-blue-default"
																: keys === 1
																? "bg-yellow-default"
																: keys === 2
																? "bg-purple-default"
																: keys === 3
																? "bg-green-default"
																: keys === 4
																? "bg-yellow-default"
																: "bg-blue-default"
														}`}
													/>
													<div className="block relative w-full h-full">
														<Image
															alt={item?.card?.image?.altText}
															src={item?.card?.image?.sourceUrl}
															width={item?.card?.image?.mediaDetails?.width}
															height={item?.card?.image?.mediaDetails?.height}
															className="object-cover object-center w-full h-full min-h-[400px]"
														/>
														<Link
															href={item?.card?.buttonLink?.url}
															target={item?.card?.buttonLink?.target}
															className="absolute bottom-0 left-0 z-10 m-4 hidden lg:block"
														>
															<ButtonBorderSliced
																fullWidth={false}
																tailwindColor="white"
																title={item?.card?.buttonLink?.title}
															/>
														</Link>
													</div>
												</motion.div>
											</div>
											<div className="w-full lg:w-1/2 px-4 my-16 lg:mb-0">
												<div className="max-w-xl flex flex-col">
													<div>
														<motion.h4
															initial={initial}
															whileInView={fadeInUp}
															viewport={{once: true}}
															className="mb-4 text-center lg:text-left text-base text-yellow-two"
														>
															{item?.card?.subtitle}
														</motion.h4>
														<motion.h2
															initial={initial}
															whileInView={fadeInUp}
															viewport={{once: true}}
															className="text-center lg:text-left text-4xl lg:text-5xl mb-2 font-bold"
														>
															{item?.card?.title}
														</motion.h2>
														<Paragraph
															content={item?.card?.paragraph}
															tailwindStyling="leading-8 mb-10 text-black text-base lg:text-paragraph text-center lg:text-left"
														/>
													</div>
													<div>
														{item?.card?.bulletPoints?.length > 0 ? (
															item?.card?.bulletPoints?.map(
																(itemTwo: any, keysTwo: number) => (
																	<Fragment key={keysTwo}>
																		<motion.div
																			custom={keysTwo}
																			initial={initial}
																			whileInView="animate"
																			viewport={{once: true}}
																			variants={arrayLoopStaggerChildren}
																			className="flex items-center mb-8"
																		>
																			<span className="">
																				<svg
																					version="1.1"
																					viewBox="0 0 48 48"
																					className="block mr-5 w-7 h-7"
																					xmlns="http://www.w3.org/2000/svg"
																				>
																					<g
																						id="SVGRepo_bgCarrier"
																						stroke-width="0"
																					></g>
																					<g
																						id="SVGRepo_tracerCarrier"
																						stroke-linecap="round"
																						stroke-linejoin="round"
																					></g>
																					<g id="SVGRepo_iconCarrier">
																						<g
																							id="🔍-Product-Icons"
																							stroke="none"
																							stroke-width="1"
																							fillRule="evenodd"
																						>
																							{" "}
																							<g
																								id="ic_fluent_checkmark_circle_48_filled"
																								fill="#833df4"
																								fillRule="nonzero"
																							>
																								{" "}
																								<path
																									d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"
																									id="🎨-Color"
																								>
																									{" "}
																								</path>{" "}
																							</g>{" "}
																						</g>{" "}
																					</g>
																				</svg>
																			</span>
																			<Paragraph
																				content={itemTwo?.text}
																				tailwindStyling="text-black text-base text-left"
																			/>
																		</motion.div>
																	</Fragment>
																)
															)
														) : (
															<></>
														)}
													</div>
													<Link
														href={item?.card?.buttonLink?.url}
														target={item?.card?.buttonLink?.target}
														className="mx-auto block lg:hidden"
													>
														<ButtonBorderSliced
															fullWidth={false}
															tailwindColor="purple-default"
															title={item?.card?.buttonLink?.title}
														/>
													</Link>
												</div>
											</div>
											<div
												className={
													keys % 2 === 0 ? "hidden" : "w-full lg:w-1/2 px-4"
												}
											>
												<motion.div
													initial={initial}
													variants={stagger}
													whileInView="animate"
													viewport={{once: true}}
													className="relative"
												>
													<div
														className={`absolute w-full h-full min-h-[400px] top-0 left-0 mt-6 ml-6 ${
															keys === 0
																? "bg-blue-default"
																: keys === 1
																? "bg-yellow-default"
																: keys === 2
																? "bg-purple-default"
																: keys === 3
																? "bg-green-default"
																: keys === 4
																? "bg-yellow-default"
																: "bg-blue-default"
														}`}
													/>
													<div className="block relative w-full h-full">
														<Image
															alt={item?.card?.image?.altText}
															src={item?.card?.image?.sourceUrl}
															width={item?.card?.image?.mediaDetails?.width}
															height={item?.card?.image?.mediaDetails?.height}
															className="object-cover object-center w-full h-full min-h-[400px]"
														/>
														<Link
															href={item?.card?.buttonLink?.url}
															target={item?.card?.buttonLink?.target}
															className="absolute bottom-0 left-0 z-10 m-4 hidden lg:block"
														>
															<ButtonBorderSliced
																fullWidth={false}
																tailwindColor="white"
																title={item?.card?.buttonLink?.title}
															/>
														</Link>
													</div>
												</motion.div>
											</div>
										</motion.div>
									</motion.div>
								</>
							</Fragment>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default ServicesGrid;
