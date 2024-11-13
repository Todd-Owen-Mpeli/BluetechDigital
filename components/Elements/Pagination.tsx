"use client";

// Imports
import {
	fadeIn,
	stagger,
	initial,
	fadeInUp,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {IPagination} from "@/types/components/index";

// Styling
import styles from "@/styles/components/Pagination.module.scss";

// Components
import BlogsCard from "@/components/Cards/BlogsCard";
import Paragraph from "@/components/Elements/Paragraph";
import CaseStudiesCard from "@/components/Cards/CaseStudiesCard";
import NewsInsightsCard from "@/components/NewsInsights/Card/Card";
import TestimonialsCard from "@/components/Testimonials/Card/Card";

// Card Content
const Card: FC<IPagination.ICard> = ({
	item,
	index,
	contentType,
	itemsPerPage,
}) => {
	return (
		<>
			<motion.div
				custom={index}
				initial={initial}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.currentContent}
				variants={arrayLoopStaggerChildren}
			>
				{contentType === `Gallery` ? (
					<>
						<Image
							alt={`${item?.altText}`}
							src={item?.sourceUrl}
							width={
								item?.mediaDetails?.width ? item?.mediaDetails?.width : 1000
							}
							height={
								item?.mediaDetails?.height ? item?.mediaDetails?.height : 1000
							}
							className={
								item?.sourceUrl
									? styles.image +
									  ` ${
											itemsPerPage === 12 ? styles.optionOne : styles.optionTwo
									  }`
									: `hidden`
							}
							style={{
								clipPath: `polygon(94% 0, 100% 6%, 100% 100%, 0 100%, 0 0)`,
							}}
						/>
					</>
				) : contentType === `BlogsCard` ? (
					<>
						<BlogsCard
							uri={item?.node?.uri}
							date={item?.node?.date}
							title={item?.node?.title}
							excerpt={item?.node?.excerpt}
							featuredImage={item?.node?.featuredImage}
						/>
					</>
				) : contentType === `TestimonialsCard` ? (
					<>
						<TestimonialsCard
							name={item?.node?.testimonialReview?.name}
							image={item?.node?.testimonialReview?.image}
							position={item?.node?.testimonialReview?.position}
							paragraph={item?.node?.testimonialReview?.paragraph}
							starRating={item?.node?.testimonialReview?.starRating}
						/>
					</>
				) : contentType === `CaseStudiesCard` ? (
					<>
						<CaseStudiesCard
							slug={item?.node?.slug}
							date={item?.node?.date}
							title={item?.node?.title}
							excerpt={item?.node?.excerpt}
							featuredImage={item?.node?.featuredImage}
						/>
					</>
				) : contentType === `NewsInsightsCard` ? (
					<>
						<NewsInsightsCard
							uri={item?.node?.uri}
							date={item?.node?.date}
							title={item?.node?.title}
							paragraph={item?.node?.excerpt}
							featuredImage={item?.node?.featuredImage}
						/>
					</>
				) : (
					<></>
				)}
			</motion.div>
		</>
	);
};

// Pagination Content
const PaginationCard: FC<IPagination.IPaginationCard> = ({
	totalPages,
	currentPage,
	contentArray,
	buttonClipPath,
	setCurrentPage,
}) => {
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	return (
		<>
			<div>
				{totalPages > 1 && contentArray?.length > 0 ? (
					<>
						<div className={styles.totalPages}>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={handlePrevPage}
								disabled={currentPage === 1}
								className={styles.buttonStyling}
								style={{
									clipPath: `${buttonClipPath}`,
								}}
							>
								Previous
							</motion.button>
							<span className={styles.text}>
								{`Page ${currentPage} of ${totalPages}`}
							</span>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={handleNextPage}
								disabled={currentPage === totalPages}
								className={styles.buttonStyling}
								style={{
									clipPath: `${buttonClipPath}`,
								}}
							>
								Next
							</motion.button>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

// Error Card
const ErrorCard: FC = () => {
	return (
		<>
			<div
				className={styles.errorCard}
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.content}
				>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.title}
					>
						Oops Sorry!
					</motion.h3>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<Paragraph
							content="Nothing to display"
							className={styles.paragraph}
						/>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

const Pagination: FC<IPagination.IProps> = ({
	className,
	contentType,
	contentArray,
	numberOfItemsRenderedPerPage,
}) => {
	const itemsPerPage = numberOfItemsRenderedPerPage;
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentContent = contentArray?.slice(startIndex, endIndex);

	const totalPages = Math.ceil(contentArray?.length / itemsPerPage);

	const buttonClipPath = "polygon(95% 0, 100% 15%, 100% 100%, 0 100%, 0 0)";

	return (
		<>
			<div className={styles.pagination + ` ${className}`}>
				{currentContent?.length > 0 ? (
					currentContent?.map((item: any, index: number) => (
						<Fragment key={index}>
							<Card
								item={item}
								index={index}
								contentType={contentType}
								itemsPerPage={itemsPerPage}
							/>
						</Fragment>
					))
				) : (
					<>
						<ErrorCard />
					</>
				)}
			</div>
			<PaginationCard
				totalPages={totalPages}
				currentPage={currentPage}
				contentArray={contentArray}
				setCurrentPage={setCurrentPage}
				buttonClipPath={buttonClipPath}
			/>
		</>
	);
};

export default Pagination;
