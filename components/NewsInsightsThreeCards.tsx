"use client";

// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {INewsInsights} from "@/types/components";

// Styling
import styles from "@/styles/components/NewsInsights.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import NewsInsightsCard from "./Cards/NewsInsightsCard";

const newsInsightsThreeCards: FC<INewsInsights.IThreeCards> = ({
	title,
	italic,
	paragraph,
}) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const globalContext = useGlobalContext();

	return (
		<>
			<div className={styles.newsInsightsThreeCards}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={title && italic ? styles.container : "hidden"}
				>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.title}
					>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							{title}
						</motion.span>
						<motion.span
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.italicText}
						>
							{italic}
						</motion.span>
					</motion.h2>
					<Paragraph content={paragraph} className={styles.paragraph} />
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.gridContent}
				>
					{globalContext?.newsInsightsThreeCards?.length > 0 ? (
						globalContext?.newsInsightsThreeCards?.map(
							(item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										className="w-full"
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<NewsInsightsCard
											uri={item?.node?.uri}
											date={item?.node?.date}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</motion.div>
								</Fragment>
							)
						)
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default newsInsightsThreeCards;
