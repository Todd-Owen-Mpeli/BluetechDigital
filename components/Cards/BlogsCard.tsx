// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {IBlogsCard} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const BlogsCard: FC<IBlogsCard> = ({
	uri,
	date,
	title,
	excerpt,
	featuredImage,
}) => {
	return (
		<>
			<div className="w-full h-full">
				<div className="relative px-4 lg:px-0 h-[225px]">
					<Link
						target="_self"
						aria-label={`blogs${uri}`}
						href={uri ? `blogs${uri}` : `/`}
					>
						<Image
							alt={featuredImage?.node?.altText}
							src={featuredImage?.node?.sourceUrl}
							width={
								featuredImage?.node?.mediaDetails?.width
									? featuredImage?.node?.mediaDetails?.width
									: 500
							}
							height={
								featuredImage?.node?.mediaDetails?.height
									? featuredImage?.node?.mediaDetails?.height
									: 500
							}
							className={
								featuredImage?.node?.sourceUrl
									? `object-cover object-center w-full h-full`
									: `hidden`
							}
						/>
					</Link>
				</div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-baseline justify-between px-4 py-10"
				>
					<span className="mb-2 font-normal text-darkGrey text-tiny">
						{dateFormat(date, "dddd, mmmm d, yyyy")}
					</span>

					<Link
						target="_self"
						aria-label={`blogs${uri}`}
						href={uri ? `blogs${uri}` : `/`}
					>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-2 text-base font-semibold text-black sm:text-medium"
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
							tailwindStyling={
								excerpt
									? `block mb-6 text-tiny leading-normal text-darkGrey`
									: `hidden`
							}
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<Link
							target="_self"
							aria-label={`blogs${uri}`}
							href={uri ? `blogs${uri}` : `/`}
							className="text-sm font-bold text-black uppercase transition duration-200 lg:text-blue hover:text-blue-two hover:underline"
						>
							<span>Read more</span>
							<span className="inline-block ml-2">
								<svg
									className="w-3 h-3 text-blue-500"
									viewBox="0 0 8 12"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M1.875 0L0 1.875L4.125 6L0 10.125L1.875 12L7.875 6L1.875 0Z"></path>
								</svg>
							</span>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default BlogsCard;
