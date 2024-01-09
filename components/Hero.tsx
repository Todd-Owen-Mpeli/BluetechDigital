// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";
import fadeInUp, {
	fadeIn,
	initial,
	initialTwo,
	stagger,
} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import VideoWrapper from "./Elements/VideoWrapper";

const Hero: FC<IHero> = ({
	video,
	titleEnd,
	paragraph,
	titleStart,
	titleMiddle,
	buttonLink,
	displayVideo,
	smallImageOne,
	buttonLinkTwo,
	smallImageTwo,
	rightsideImage,
	videoBackgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + `relative`}>
				<div
					className="bg-blue-darkerTwo pb-16 lg:pb-32 lg:mb-20 pt-36 bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage: `url("/svg/background/stacked-waves-haikei-orange-yellow.svg")`,
						clipPath: `polygon(0 0, 100% 0, 100% 91%, 64% 98%, 0 94%)`,
					}}
				>
					<div className="container mx-auto px-4 gap-8">
						<div className="flex flex-wrap -mx-4 mb-16">
							<div className="relative w-full lg:w-[65%] px-4 lg:mb-0">
								<motion.h1
									initial={initial}
									whileInView={stagger}
									viewport={{once: true}}
									className="text-center text-white lg:text-left lg:leading-[3rem] xl:leading-[4rem] font-semibold max-w-full lg:max-w-4xl mx-auto lg:mx-0 text-4xl lg:text-7xl xl:text-8xl tracking-tighter"
								>
									{titleStart}
									<Image
										decoding="async"
										alt={smallImageOne?.altText}
										src={smallImageOne?.sourceUrl}
										width={smallImageOne?.mediaDetails?.width}
										height={smallImageOne?.mediaDetails?.height}
										className="inline my-2 mx-3 w-[150px] lg:w-[175px] h-[50px] xl:h-[65px] object-cover object-center"
										style={{
											clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
										}}
									/>
									{titleMiddle}
									<Image
										decoding="async"
										alt={smallImageTwo?.altText}
										src={smallImageTwo?.sourceUrl}
										width={smallImageTwo?.mediaDetails?.width}
										height={smallImageTwo?.mediaDetails?.height}
										className="inline w-[150px] lg:w-[175px] my-2 mx-3 h-[50px] xl:h-[65px] object-cover object-center"
										style={{
											clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
										}}
									/>
									{titleEnd}
								</motion.h1>
							</div>
							<div className="w-full lg:w-[35%] px-4">
								<Paragraph
									content={paragraph}
									tailwindStyling="text-white text-center lg:text-left text-base sm:text-paragraph xl:text-lg"
								/>
								<div className="mt-3 gap-2 flex flex-col xl:flex-row gap-4 items-center justify-center lg:items-baseline xl:justify-start">
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
									<Link
										href={`${buttonLinkTwo?.url}`}
										target={buttonLinkTwo?.target}
										className={buttonLinkTwo?.url ? "block" : "hidden"}
									>
										<motion.button
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className={
												buttonLinkTwo?.title
													? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid border-purple-Two hover:bg-purple-Two hover:border-purple-Two transition-all ease-in-out duration-500 text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-purple-Two hover:before:bg-purple-Two after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] $after:bg-white hover:after:bg-purple-Two`
													: `hidden`
											}
										>
											<span>{buttonLinkTwo?.title}</span>
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
							</div>
						</div>
					</div>
				</div>
				<div
					className={`relative z-50 mb-8 mt-[-100px] lg:mt-[-200px] container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row -mx-4`}
				>
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className={`w-full lg:w-2/3 bg-cover bg-no-repeat bg-center w-full ${
							displayVideo ? `h-fit` : `h-[400px]`
						}`}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : videoBackgroundImage
							}")`,
						}}
					>
						{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
					</motion.div>
					<motion.div
						initial={initial}
						viewport={{once: true}}
						whileInView={fadeInUp}
						className="hidden lg:block w-full lg:w-1/3 px-4"
					>
						<Image
							alt={rightsideImage?.altText}
							src={rightsideImage?.sourceUrl}
							width={rightsideImage?.mediaDetails?.width}
							height={rightsideImage?.mediaDetails?.height}
							className={
								rightsideImage?.sourceUrl
									? `block object-cover object-center w-full h-[350px] ${
											displayVideo ? `sm:h-[500px]` : `sm:h-[400px]`
									  }`
									: `hidden`
							}
							style={{
								clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
							}}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
