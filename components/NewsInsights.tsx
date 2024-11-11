"use client";

// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {INewsInsights} from "@/types/components";
import {initial, fadeInUp, stagger} from "@/animations/animations";

// Styling
import styles from "@/styles/components/NewsInsights.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import Pagination from "@/components/Elements/Pagination";

const NewsInsights: FC<INewsInsights.IProps> = ({title, italic, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className={styles.newsInsights}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.container}
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
					<Paragraph content={paragraph} className={styles.jumboContentImage} />
				</motion.div>
				<Pagination
					className={styles.pagination}
					contentType="NewsInsightsCard"
					numberOfItemsRenderedPerPage={12}
					contentArray={globalContext?.newsInsights}
				/>
			</div>
		</>
	);
};

export default NewsInsights;
