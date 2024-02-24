// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";
import fadeInUp, {fadeIn, initial, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurServices: FC<IOurServices> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" py-12 sm:py-24 lg:py-20 px-4 bg-lightGreyTwo relative bg-cover bg-no-repeat bg-center"
				}
				style={{
					backgroundImage: `url("/svg/background/stacked-waves-haikei-blue-darkblue.svg")`,
				}}
			>
				<div className="container mx-auto flex flex-col items-center">
					<div className="flex flex-col py-8 items-center gap-2">
						<div className="flex flex-wrap -mx-4">
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
							</div>
							<div className="w-full lg:w-[35%] px-4">
								<Paragraph
									content={paragraph}
									tailwindStyling="mb-6 text-white text-center lg:text-left text-paragraph xl:text-lg"
								/>
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
												? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid border-white hover:bg-white hover:border-white transition-all ease-in-out duration-500 text-white hover:text-black before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-white`
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
					<div className="w-full relative grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 py-6 lg:py-6 px-0 sm:px-4 xl:px-0 gap-6 items-center justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<>
										<div
											className="p-9 bg-center bg-blue-darkerTwo bg-no-repeat bg-cover min-h-[350px] flex flex-col gap-2 items-center lg:items-start justify-between"
											style={{
												backgroundImage: `linear-gradient(
													0deg,
													rgba(6, 18, 41, 0.50),
													rgba(6, 18, 41, 0.85),
													rgba(6, 18, 41, 0.95)
												),url("${item?.card?.backgroundImage?.sourceUrl}")`,
												boxShadow: "0px 35px 2px -25px rgba(0,0,0,0.5)",
											}}
										>
											<div>
												<motion.h4
													initial={initialTwo}
													whileInView={fadeIn}
													viewport={{once: true}}
													className="text-xl text-white text-center lg:text-left font-medium tracking-tight mb-4"
												>
													{item?.card?.title}
												</motion.h4>

												<Paragraph
													content={item?.card?.paragraph}
													tailwindStyling="lg:max-w-3xl mb-4 text-white leading-[1.75rem] text-paragraph text-center lg:text-left"
												/>
											</div>
											<div>
												<Link
													href={`${item?.card?.buttonLinks?.url}`}
													target={item?.card?.buttonLinks?.target}
													className="group inline-flex py-3 px-6 items-center justify-center text-bse font-medium text-white hover:text-black bg-transparent hover:bg-white border-2 border-white transition duration-200"
												>
													{item?.card?.buttonLinks?.title}
												</Link>
											</div>
										</div>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="relative w-[660px] h-fit block sm:hidden 2xl:block"
						>
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={image?.mediaDetails?.width}
								height={image?.mediaDetails?.height}
								className={
									image?.sourceUrl
										? `sm:absolute rotate-[6deg] sm:rotate-[-6deg] top-0 lg:top-[-285px] ml-[-100px] sm:right-[0px] object-cover object-center w-[700px] h-[700px] sm:w-[750px] sm:h-[750px]`
										: `hidden`
								}
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
