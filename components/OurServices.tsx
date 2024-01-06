// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" py-12 lg:py-40 sm:py-24 px-4 bg-lightGreyTwo relative"
				}
			>
				<div className="container relative m-auto flex flex-col items-center">
					<div className="flex flex-col py-8 items-center gap-2">
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-1 uppercase text-center lg:text-center text-lg tracking-[0.15rem] text-yellow-Two"
						>
							{subtitle}
						</motion.h3>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="my-2 lg:max-w-3xl text-center font-semibold leading-tight text-4xl lg:text-5xl text-pureBlack"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl text-pureBlack leading-[1.75rem] text-base sm:text-paragraph text-center"
						/>
					</div>
					<div className="w-full relative grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 py-6 lg:py-16 px-0 sm:px-4 gap-6 items-start justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<>
										<Link
											href={`${item?.card?.link?.url}`}
											target={item?.card?.link?.target}
											className={styles.card + " group overflow-hidden"}
										>
											<div
												className="flex flex-col w-full h-fit min-h-[600px] justify-between items-center bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out md:hover:scale-105"
												style={{
													backgroundImage: `linear-gradient(
														0deg,
														rgba(167, 0, 7, 0.70),
														rgba(167, 0, 7, 0.85),
														rgba(167, 0, 7, 1)
													),url("${item?.card?.image?.sourceUrl}")`,
													boxShadow: "23px 30px 2px -12px rgba(0,0,0,0.1)",
												}}
											>
												<div
													className={
														styles.content +
														" py-10 px-6 sm:p-10 group-hover:mt-28 sm:group-hover:mt-10 md:group-hover:mt-16 gap-4 sm:gap-8 h-[400px] bg-white group-hover:border-none border-t-4 border-blue-default flex flex-col"
													}
												>
													<motion.div
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
													>
														<Image
															alt={item?.card?.icon?.altText}
															src={item?.card?.icon?.sourceUrl}
															width={item?.card?.icon?.mediaDetails?.width}
															height={item?.card?.icon?.mediaDetails?.height}
															className={
																item?.card?.icon?.sourceUrl
																	? `block group-hover:hidden object-contain object-center w-full h-[50px] lg:h-[60px]`
																	: `hidden`
															}
														/>
														<Image
															alt={item?.card?.hoverIcon?.altText}
															src={item?.card?.hoverIcon?.sourceUrl}
															width={item?.card?.hoverIcon?.mediaDetails?.width}
															height={
																item?.card?.hoverIcon?.mediaDetails?.height
															}
															className={
																item?.card?.hoverIcon?.sourceUrl
																	? `hidden group-hover:block object-contain object-center w-full h-[50px] lg:h-[60px]`
																	: `hidden`
															}
														/>
													</motion.div>
													<motion.h4
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
														className="text-pureBlack group-hover:text-white font-extrabold text-xl leading-tight text-center tracking-[0.10rem]"
													>
														{item?.card?.title}
													</motion.h4>
													<Paragraph
														content={
															item?.card?.paragraph.substring(0, 150) + "..."
														}
														tailwindStyling="text-darkGrey group-hover:text-white text-base text-center"
													/>
													<motion.button
														initial={initialTwo}
														whileInView={fadeIn}
														viewport={{once: true}}
														className="flex sm:hidden group-hover:hidden items-center justify-center lg:justify-between gap-2 bg-pureBlack py-4 px-4 hover:bg-yellow-default transition-all ease-in-out duration-500"
													>
														<h4 className="text-white">
															{item?.card?.link?.title}
														</h4>
														<svg
															fill="none"
															width="800px"
															height="800px"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
															className="w-[25px] h-[25px] object-center object-contain rotate-[-45deg]"
														>
															<path
																d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
																fill="#ffffff"
															/>
														</svg>
													</motion.button>
												</div>
												<div className="py-0 group-hover:py-4 w-full h-[200px] flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover">
													<button className="hidden group-hover:flex items-center justify-center lg:justify-between gap-2 bg-pureBlack py-4 px-4 hover:bg-yellow-default transition-all ease-in-out duration-500">
														<h4 className="text-white">
															{item?.card?.link?.title}
														</h4>
														<svg
															fill="none"
															width="800px"
															height="800px"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
															className="w-[25px] h-[25px] object-center object-contain rotate-[-45deg]"
														>
															<path
																d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z"
																fill="#ffffff"
															/>
														</svg>
													</button>
													<Image
														alt={item?.card?.image?.altText}
														src={item?.card?.image?.sourceUrl}
														width={item?.card?.image?.mediaDetails?.width}
														height={item?.card?.image?.mediaDetails?.height}
														className={
															item?.card?.image?.sourceUrl
																? `block group-hover:hidden w-full h-full object-cover object-center`
																: `hidden`
														}
													/>
												</div>
											</div>
										</Link>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
