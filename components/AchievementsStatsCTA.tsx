// Imports
import {
	fadeIn,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAchievementsStatsCTA} from "@/types/components/index";

// Styling
import styles from "@/styles/components/AchievementsStatsCta.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";
import ButtonBorderSliced from "@/components/Elements/ButtonBorderSliced";

const AchievementsStatsCta: FC<IAchievementsStatsCTA> = ({
	title,
	paragraph,
	buttonLink,
	achievements,
	backgroundImage,
	displayAchievementsContent,
}) => {
	return (
		<>
			<div className={styles.achievementsStatsCta}>
				<div
					className={
						styles.container +
						` ${displayAchievementsContent ? "block" : "hidden"}`
					}
				>
					<motion.div
						initial={initialTwo}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							styles.content +
							` ${
								achievements?.length >= 2 ? styles.optionOne : styles.optionTwo
							}`
						}
					>
						{achievements?.length > 0 ? (
							achievements?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										viewport={{once: true}}
										className={styles.achievements}
										initial={slideInRightInitial}
										whileInView={slideInRightFinish}
										style={{
											backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.05)),url("${item?.card?.image?.sourceUrl}")`,
										}}
									>
										<div
											className={
												styles.wrapper +
												` ${
													index === 0
														? "bg-purple-three"
														: index === 1
														? "bg-purple-three"
														: "bg-purple-default"
												}`
											}
										>
											<Image
												alt={item?.card?.icon?.altText}
												src={item?.card?.icon?.sourceUrl}
												width={
													item?.card?.icon?.mediaDetails?.width
														? item?.card?.icon?.mediaDetails?.width
														: 1000
												}
												height={
													item?.card?.icon?.mediaDetails?.height
														? item?.card?.icon?.mediaDetails?.height
														: 1000
												}
												className={
													item?.card?.icon?.sourceUrl ? styles.icon : `hidden`
												}
											/>

											<motion.h4
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className={styles.title}
											>
												{item?.card?.title}
											</motion.h4>
											<Paragraph
												content={item?.card?.paragraph}
												className={styles.paragraph}
											/>
										</div>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
				<div
					className={styles.bottomContent}
					style={{
						backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.50),rgba(0, 0, 0, 0.85),
							rgba(0, 0, 0, 0.95)),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<div className={styles.wrapper}>
						<div className={styles.achievements}>
							<motion.div
								initial={initialTwo}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className={
									styles.content +
									` ${
										displayAchievementsContent && achievements?.length >= 2
											? styles.optionOne
											: displayAchievementsContent && achievements?.length <= 1
											? styles.optionTwo
											: styles.noOption
									}`
								}
							>
								<div>
									<Title content={title} className={styles.title} />
									<Paragraph
										content={paragraph}
										className={
											styles.paragraph +
											` ${
												achievements?.length >= 2
													? "max-w-none lg:max-w-sm 2xl:max-w-lg"
													: "max-w-none lg:max-w-6xl"
											}`
										}
									/>
								</div>
								<Link
									href={`${buttonLink?.url}`}
									target={`${
										buttonLink?.target ? buttonLink?.target : "_self"
									}`}
									aria-label={`${buttonLink?.title}`}
									className={buttonLink?.url ? styles.buttonLink : "hidden"}
								>
									<ButtonBorderSliced
										fullWidth={false}
										title={buttonLink?.title}
										tailwindColor="white"
									/>
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AchievementsStatsCta;
