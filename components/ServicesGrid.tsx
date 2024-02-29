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
																		<div className="flex items-center mb-8">
																			<span className="">
																				<svg
																					fill="#3978ff"
																					stroke="#3978ff"
																					viewBox="0 0 56 56"
																					className="block mr-5 w-5 h-5 object-contain object-center"
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
																						<path d="M 23.6641 52.3985 C 26.6172 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6172 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6172 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6172 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 24.0391 39.7891 C 23.3126 39.7891 22.8438 39.5547 22.4923 39.1563 L 14.6641 30.4609 C 14.3360 30.0860 14.1485 29.6172 14.1485 29.125 C 14.1485 28.0234 14.9923 27.2031 16.1876 27.2031 C 16.8204 27.2031 17.2891 27.4141 17.7110 27.8594 L 23.9219 34.7266 L 35.9923 17.7344 C 36.4610 17.0547 36.9297 16.7734 37.7501 16.7734 C 38.8985 16.7734 39.7188 17.6172 39.7188 18.7188 C 39.7188 19.1172 39.5547 19.5860 39.2969 19.9609 L 25.6328 39.0625 C 25.2813 39.5078 24.7423 39.7891 24.0391 39.7891 Z"></path>
																					</g>
																				</svg>
																			</span>
																			<Paragraph
																				content={itemTwo?.text}
																				tailwindStyling="text-black text-base text-left"
																			/>
																		</div>
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
