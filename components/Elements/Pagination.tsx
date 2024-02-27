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

// Components
import Paragraph from "./Paragraph";
import BlogsCard from "../Cards/BlogsCard";
import TestimonialsCard from "../Cards/TestimonialsCard";
import NewsInsightsCard from "../Cards/NewsInsightsCard";

const Pagination: FC<IPagination> = ({
	contentType,
	contentArray,
	tailwindStyling,
	numberOfItemsRenderedPerPage,
}) => {
	const itemsPerPage = numberOfItemsRenderedPerPage;
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentContent = contentArray?.slice(startIndex, endIndex);

	const totalPages = Math.ceil(contentArray?.length / itemsPerPage);

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

	const buttonClipPath = "polygon(95% 0, 100% 15%, 100% 100%, 0 100%, 0 0)";
	const tailwindButtonStyling =
		"relative px-6 py-2 text-pureBlack hover:text-white font-semibold tracking-widest text-tiny w-fit border-2 border-solid border-blue-two hover:bg-blue-three hover:border-blue-three transition-all ease-in-out duration-500 before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-blue-three after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-blue-three";

	return (
		<>
			<div className={`${tailwindStyling}`}>
				{currentContent?.length > 0 ? (
					currentContent?.map((item: any, keys: number) => (
						<Fragment key={keys}>
							<motion.div
								custom={keys}
								initial={initial}
								whileInView="animate"
								viewport={{once: true}}
								variants={arrayLoopStaggerChildren}
								className="w-full"
							>
								{contentType === `Gallery` ? (
									<>
										<Image
											alt={item?.altText}
											src={item?.sourceUrl}
											width={item?.mediaDetails?.width}
											height={item?.mediaDetails?.height}
											className={
												item?.sourceUrl
													? `block object-cover object-center w-full h-[175px] ${
															itemsPerPage === 12
																? "sm:h-[250px]"
																: "sm:h-[250px] xl:h-[205px]"
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
										/>
									</>
								) : contentType === `NewsInsightsCard` ? (
									<>
										<NewsInsightsCard
											uri={item?.node?.uri}
											title={item?.node?.title}
											paragraph={item?.node?.excerpt}
											featuredImage={item?.node?.featuredImage}
										/>
									</>
								) : (
									<></>
								)}
								selectedPrograms
							</motion.div>
						</Fragment>
					))
				) : (
					<>
						<div
							className="bg-blue-darker"
							style={{
								boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
							}}
						>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col gap-4 p-10"
							>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 text-center text-lg leading-tight tracking-[0.05rem] uppercase font-extrabold text-white transition-all ease-in-out duration-200 hover:text-white"
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
										tailwindStyling="px-0 text-base text-white"
									/>
								</motion.div>
							</motion.div>
						</div>
					</>
				)}
			</div>
			<div>
				{totalPages > 1 && contentArray?.length > 0 ? (
					<>
						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={handlePrevPage}
								disabled={currentPage === 1}
								className={tailwindButtonStyling}
								style={{
									clipPath: `${buttonClipPath}`,
								}}
							>
								Previous
							</motion.button>
							<span className="text-center text-tiny font-semibold leading-tight text-black">
								{`Page ${currentPage} of ${totalPages}`}
							</span>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								onClick={handleNextPage}
								disabled={currentPage === totalPages}
								className={tailwindButtonStyling}
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

export default Pagination;
