// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IJumboContentImage} from "@/types/components/index";

// Styling
import styles from "../styles/components/JumboContentImage.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const JumboContentImage: FC<IJumboContentImage> = ({
	title,
	image,
	quality,
	subtitle,
	paragraph,
	contentBox,
	reliability,
	bottomContent,
}) => {
	return (
		<>
			<div
				className={
					styles.jumboContentImage +
					" py-20 pb-4 lg:pt-36 sm:pb-10 px-4 bg-white"
				}
			>
				<div className="container m-auto flex flex-col lg:flex-row gap-16 lg:gap-x-24">
					<motion.div
						initial={initialTwo}
						whileInView={stagger}
						viewport={{once: true}}
						className="w-full lg:w-[65%] flex flex-col items-center lg:items-baseline justify-center"
					>
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
							className="my-2 max-w-3xl text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl text-black"
						>
							{title}
						</motion.h2>
						<motion.div
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col lg:flex-row items lg:items-start justify-between mt-8 gap-12 lg:gap-8"
						>
							<div className="flex flex-col w-full lg:w-[65%]">
								<Paragraph
									content={paragraph}
									tailwindStyling="lg:max-w-lg text-black leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left"
								/>
								<div
									className={
										!bottomContent?.displayTextarea &&
										bottomContent?.displayButtonOrImage === "Image"
											? "flex flex-col gap-5 xl:flex-row items-center mt-4 lg:items-baseline"
											: "flex flex-col gap-5 xl:flex-row items-center mt-4"
									}
								>
									<div
										className={
											bottomContent?.displayTextarea ? "block" : "hidden"
										}
									>
										<motion.h4
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="mb-2 text-center lg:text-left font-extrabold text-base tracking-[0.10rem] text-black"
										>
											{bottomContent?.text}
										</motion.h4>
										<motion.h4
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className="mb-1 text-center lg:text-left text-tiny tracking-[0.10rem] text-black"
										>
											{bottomContent?.textTwo}
										</motion.h4>
									</div>
									{bottomContent?.displayButtonOrImage === "Image" ? (
										<>
											<Image
												alt={bottomContent?.image?.altText}
												src={bottomContent?.image?.sourceUrl}
												width={bottomContent?.image?.mediaDetails?.width}
												height={bottomContent?.image?.mediaDetails?.height}
												className={
													bottomContent?.image?.sourceUrl
														? `block object-contain object-center h-[35px] ${
																!bottomContent?.displayTextarea &&
																bottomContent?.displayButtonOrImage === "Image"
																	? "w-fit"
																	: "w-full"
														  }`
														: `hidden`
												}
											/>
										</>
									) : bottomContent?.displayButtonOrImage === "Button" ? (
										<>
											<Link
												href={
													bottomContent?.buttonLink?.url
														? bottomContent?.buttonLink?.url
														: `/`
												}
												target={bottomContent?.buttonLink?.target}
											>
												<motion.button
													initial={initial}
													whileInView={fadeInUp}
													viewport={{once: true}}
													className={
														bottomContent?.buttonLink?.url
															? `block mt-3 relative px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid border-blue-default hover:bg-blue-default hover:border-blue-default transition-all ease-in-out duration-500 text-blue-default hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-blue-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-blue-default`
															: `hidden`
													}
												>
													{bottomContent?.buttonLink?.title}
												</motion.button>
											</Link>
										</>
									) : (
										<></>
									)}
								</div>
							</div>
							<div className="flex flex-col gap-6  w-full lg:w-[35%]">
								<div>
									<motion.h4
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-1 uppercase text-center lg:text-left font-extrabold text-medium tracking-[0.10rem] text-blue-Two"
									>
										{quality?.title}
									</motion.h4>
									<Paragraph
										content={quality?.paragraph}
										tailwindStyling="lg:max-w-xl text-darkGrey leading-[1.75rem] text-base  text-center lg:text-left"
									/>
								</div>
								<div>
									<motion.h4
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-1 uppercase text-center lg:text-left font-extrabold text-medium tracking-[0.10rem] text-blue-Two"
									>
										{reliability?.title}
									</motion.h4>
									<Paragraph
										content={reliability?.paragraph}
										tailwindStyling="lg:max-w-xl text-darkGrey leading-[1.75rem] text-base  text-center lg:text-left"
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						viewport={{once: true}}
						className="w-full lg:w-[35%] relative flex flex-col items-center lg:items-baseline justify-center"
					>
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? `block object-cover object-center w-full h-[500px]`
									: `hidden`
							}
							style={{
								clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
							}}
						/>
						<div className="bg-blue-default absolute bottom-1/3 left-0 lg:left-[-50px] p-6 flex flex-col items-center justify-center">
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
							>
								<Image
									alt={contentBox?.icon?.altText}
									src={contentBox?.icon?.sourceUrl}
									width={contentBox?.icon?.mediaDetails?.width}
									height={contentBox?.icon?.mediaDetails?.height}
									className={
										contentBox?.icon?.sourceUrl
											? `block object-contain object-center w-full h-[50px] mb-4`
											: `hidden`
									}
								/>
							</motion.div>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-1 uppercase text-center lg:text-center font-extrabold text-2xl tracking-[0.10rem] text-white"
							>
								{contentBox?.text}
							</motion.h4>
							<Paragraph
								content={contentBox?.subtext}
								tailwindStyling="max-w-xl text-white text-base sm:text-paragraph text-center lg:text-left"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default JumboContentImage;
