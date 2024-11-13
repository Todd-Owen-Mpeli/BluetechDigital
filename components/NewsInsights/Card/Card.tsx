// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {INewsInsights} from "@/types/components";

// Styling
import styles from "@/styles/components/NewsInsights.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ButtonBorderSliced from "@/components/Elements/ButtonBorderSliced";

const newsInsightsCard: FC<INewsInsights.ICard> = ({
	uri,
	date,
	title,
	paragraph,
	featuredImage,
}) => {
	return (
		<div
			className={styles.newsInsightsCard}
			style={{
				boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
			}}
		>
			<div
				className={styles.topContent}
				style={{
					clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
				}}
			>
				<Link
					target="_self"
					aria-label={`news-insights${uri}`}
					href={uri ? `news-insights${uri}` : `/`}
				>
					<Image
						className={styles.featuredImage}
						alt={featuredImage?.node?.altText}
						src={featuredImage?.node?.sourceUrl}
						width={
							featuredImage?.node?.mediaDetails?.width
								? featuredImage?.node?.mediaDetails?.width
								: 1000
						}
						height={
							featuredImage?.node?.mediaDetails?.height
								? featuredImage?.node?.mediaDetails?.height
								: 1000
						}
					/>
				</Link>
			</div>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.bottomContent}
			>
				<span className={styles.date}>
					{dateFormat(date, "dddd, mmmm d, yyyy")}
				</span>

				<Link
					target="_self"
					aria-label={`news-insights${uri}`}
					href={uri ? `news-insights${uri}` : `/`}
				>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
					</motion.h2>
				</Link>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
				>
					<Paragraph
						content={
							paragraph?.length < 175
								? paragraph
								: paragraph.substring(0, 175) + "..."
						}
						className={paragraph ? styles.paragraph : `hidden`}
					/>
				</motion.div>
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className={styles.buttonBorderSliced}
				>
					<Link
						target="_self"
						aria-label={`news-insights${uri}`}
						href={uri ? `news-insights${uri}` : `/`}
						className={uri ? styles.link : "hidden"}
					>
						<ButtonBorderSliced
							fullWidth={true}
							title="Read more"
							tailwindColor="purple-default"
						/>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default newsInsightsCard;
