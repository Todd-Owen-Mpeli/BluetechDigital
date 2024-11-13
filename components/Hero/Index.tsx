// Imports
import {
	fadeIn,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "@/styles/components/Hero.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import HeroVideoWrapper from "@/components/Hero/Card/VideoWrapper";

const Hero: FC<IHero.IProps> = ({
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
			<div className={styles.hero}>
				<div
					className={styles.topContainer}
					style={{
						backgroundImage: `url("/svg/background/stacked-waves-haikei-orange-yellow.svg")`,
						clipPath: `polygon(0 0, 100% 0, 100% 91%, 64% 98%, 0 94%)`,
					}}
				>
					<div className={styles.container}>
						<div className={styles.content}>
							<div className={styles.leftSection}>
								<h1 className={styles.title}>
									{titleStart}
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
									>
										<Image
											decoding="async"
											className={styles.image}
											alt={smallImageOne?.altText}
											src={smallImageOne?.sourceUrl}
											width={
												smallImageOne?.mediaDetails?.width
													? smallImageOne?.mediaDetails?.width
													: 1000
											}
											height={
												smallImageOne?.mediaDetails?.height
													? smallImageOne?.mediaDetails?.height
													: 1000
											}
											style={{
												clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
											}}
										/>
									</motion.span>
									{titleMiddle}
									<motion.span
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
									>
										<Image
											decoding="async"
											className={styles.image}
											alt={smallImageTwo?.altText}
											src={smallImageTwo?.sourceUrl}
											width={
												smallImageTwo?.mediaDetails?.width
													? smallImageTwo?.mediaDetails?.width
													: 1000
											}
											height={
												smallImageTwo?.mediaDetails?.height
													? smallImageTwo?.mediaDetails?.height
													: 1000
											}
											style={{
												clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
											}}
										/>
									</motion.span>
									{titleEnd}
								</h1>
							</div>
							<div className={styles.rightSection}>
								<Paragraph content={paragraph} className={styles.paragraph} />
								<div className={styles.buttonLinkWrapper}>
									<Link
										href={`${buttonLink?.url}`}
										target={`${
											buttonLink?.target ? buttonLink?.target : "_self"
										}`}
										aria-label={`${buttonLink?.title}`}
										className={buttonLink?.url ? styles.buttonLink : "hidden"}
									>
										<motion.button
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className={
												buttonLink?.title ? styles.link + " group" : `hidden`
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
										target={`${
											buttonLinkTwo?.target ? buttonLinkTwo?.target : "_self"
										}`}
										aria-label={`${buttonLinkTwo?.title}`}
										className={
											buttonLinkTwo?.url ? styles.buttonLinkTwo : "hidden"
										}
									>
										<motion.button
											initial={initialTwo}
											whileInView={fadeIn}
											viewport={{once: true}}
											className={
												buttonLinkTwo?.title ? styles.link + " group" : `hidden`
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
				<div className={styles.bottomContainer}>
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className={
							styles.videoSection +
							` ${displayVideo ? styles.optionOne : styles.optionTwo}`
						}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : videoBackgroundImage?.sourceUrl
							}")`,
						}}
					>
						{displayVideo ? (
							<HeroVideoWrapper>{video}</HeroVideoWrapper>
						) : (
							<></>
						)}
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={styles.rightSection}
					>
						<Image
							alt={rightsideImage?.altText}
							src={rightsideImage?.sourceUrl}
							width={
								rightsideImage?.mediaDetails?.width
									? rightsideImage?.mediaDetails?.width
									: 1000
							}
							height={
								rightsideImage?.mediaDetails?.height
									? rightsideImage?.mediaDetails?.height
									: 1000
							}
							className={
								rightsideImage?.sourceUrl
									? styles.image +
									  ` ${displayVideo ? styles.optionOne : styles.optionTwo}`
									: `hidden`
							}
							style={{clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`}}
						/>
					</motion.div>
				</div>
			</div>
		</>
	);
};
export default Hero;
