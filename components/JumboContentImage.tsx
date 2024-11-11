// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IJumboContentImage} from "@/types/components/index";

// Styling
import styles from "../styles/components/JumboContentImage.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

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
			<div className={styles.jumboContentImage}>
				<div className={styles.container}>
					<motion.div
						initial={initialTwo}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.topContent}
					>
						<motion.h3
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.subtitle}
						>
							{subtitle}
						</motion.h3>
						<motion.h2
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.title}
						>
							{title}
						</motion.h2>
						<motion.div
							initial={initialTwo}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={styles.content}
						>
							<div className={styles.leftSection}>
								<Paragraph content={paragraph} className={styles.paragraph} />
								<div
									className={
										!bottomContent?.displayTextarea &&
										bottomContent?.displayButtonOrImage === "Image"
											? styles.wrapper + " lg:items-baseline"
											: styles.wrapper
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
											className={styles.text}
										>
											{bottomContent?.text}
										</motion.h4>
										<motion.h4
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className={styles.textTwo}
										>
											{bottomContent?.textTwo}
										</motion.h4>
									</div>
									{bottomContent?.displayButtonOrImage === "Image" ? (
										<>
											<Image
												alt={bottomContent?.image?.altText}
												src={bottomContent?.image?.sourceUrl}
												width={
													bottomContent?.image?.mediaDetails?.width
														? image?.mediaDetails?.width
														: 1000
												}
												height={
													bottomContent?.image?.mediaDetails?.height
														? image?.mediaDetails?.height
														: 1000
												}
												className={
													bottomContent?.image?.sourceUrl
														? styles.image +
														  ` ${
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
												target={`${
													bottomContent?.buttonLink?.target
														? bottomContent?.buttonLink?.target
														: "_self"
												}`}
												aria-label={`${bottomContent?.buttonLink?.title}`}
											>
												<motion.button
													initial={initial}
													whileInView={fadeInUp}
													viewport={{once: true}}
													className={
														bottomContent?.buttonLink?.url
															? styles.buttonLink
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
							<div className={styles.rightSection}>
								<div>
									<motion.h4
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={styles.title}
									>
										{quality?.title}
									</motion.h4>
									<Paragraph
										content={quality?.paragraph}
										className={styles.paragraph}
									/>
								</div>
								<div>
									<motion.h4
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={styles.title}
									>
										{reliability?.title}
									</motion.h4>
									<Paragraph
										content={reliability?.paragraph}
										className={styles.paragraph}
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
					<motion.div
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						viewport={{once: true}}
						className={styles.bottomContent}
					>
						<Image
							src={image?.sourceUrl}
							alt={`${image?.altText}`}
							className={image?.sourceUrl ? styles.image : `hidden`}
							width={
								image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
							}
							height={
								image?.mediaDetails?.height ? image?.mediaDetails?.height : 1000
							}
							style={{
								clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
							}}
						/>
						<div className={styles.image}>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
							>
								<Image
									alt={contentBox?.icon?.altText}
									src={contentBox?.icon?.sourceUrl}
									width={
										contentBox?.icon?.mediaDetails?.width
											? contentBox?.icon?.mediaDetails?.width
											: 1000
									}
									height={
										contentBox?.icon?.mediaDetails?.height
											? contentBox?.icon?.mediaDetails?.height
											: 1000
									}
									className={
										contentBox?.icon?.sourceUrl ? styles.icon : `hidden`
									}
								/>
							</motion.div>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={styles.text}
							>
								{contentBox?.text}
							</motion.h4>
							<Paragraph
								content={contentBox?.subtext}
								className={styles.subtext}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default JumboContentImage;
