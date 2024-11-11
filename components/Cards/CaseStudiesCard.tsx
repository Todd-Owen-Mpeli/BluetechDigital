// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import dateFormat from "dateformat";
import {ICaseStudies} from "@/types/components/index";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ButtonBorderSliced from "@/components/Elements/ButtonBorderSliced";

const CaseStudiesCard: FC<ICaseStudies.ICard> = ({
	slug,
	date,
	title,
	excerpt,
	featuredImage,
}) => {
	return (
		<>
			<div
				className="relative w-full h-full mt-10 lg:mt-0 border-l-[5px] border-b-[5px] border-lightGrey overflow-y-visible"
				style={{
					boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
				}}
			>
				<Link
					target="_self"
					aria-label={`case-study/${slug}`}
					href={slug ? `case-study/${slug}` : `/`}
				>
					<Image
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
						className={
							featuredImage?.node?.sourceUrl
								? `absolute top-[-125px] z-20 object-contain object-center w-full h-[350px]`
								: `hidden`
						}
					/>
				</Link>
				<div
					className="relative px-4 lg:px-0 h-[225px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-lightGrey"
					style={{
						clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
					}}
				/>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-baseline justify-between px-8 py-4"
				>
					<div>
						<span className="mb-2 font-normal text-darkGrey text-tiny">
							{dateFormat(date, "dddd, mmmm d, yyyy")}
						</span>

						<Link
							target="_self"
							href={slug ? `case-study/${slug}` : `/`}
							aria-label={`case-study/${slug}`}
						>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="mb-2 text-tiny sm:text-base font-semibold text-black transition-all ease-in-out duration-200 hover:text-yellow-default"
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
									excerpt?.length < 250
										? excerpt
										: excerpt.substring(0, 250) + "..."
								}
								className={
									excerpt
										? `block text-tiny leading-normal text-darkGrey`
										: `hidden`
								}
							/>
						</motion.div>
					</div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mt-2"
					>
						<Link
							target="_self"
							aria-label={`case-study/${slug}`}
							href={slug ? `case-study/${slug}` : `/`}
							className={slug ? "block" : "hidden"}
						>
							<ButtonBorderSliced
								fullWidth={true}
								title="Read more"
								tailwindColor="yellow-default"
							/>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default CaseStudiesCard;
