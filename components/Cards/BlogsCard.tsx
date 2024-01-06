// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import {IBlogsCard} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../../animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

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
				<div className="relative px-4 lg:px-0 h-[300px]">
					<Link href={uri ? `blogs${uri}` : `/`}>
						<Image
							alt={featuredImage?.node?.altText}
							src={featuredImage?.node?.sourceUrl}
							width={featuredImage?.node?.mediaDetails?.width}
							height={featuredImage?.node?.mediaDetails?.height}
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
					whileInView={stagger}
					viewport={{once: true}}
					className="flex flex-col items-baseline justify-between px-4 py-10"
				>
					<Link href={uri ? `blogs${uri}` : `/`}>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="mb-2 text-lg font-semibold text-black sm:text-xl"
						>
							{title}
						</motion.h2>
					</Link>

					<span className="mt-2 font-semibold text-yellow-default text-tiny">
						{dateFormat(date, "dddd, mmmm d, yyyy")}
					</span>

					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						<Paragraph
							content={
								excerpt?.length < 150
									? excerpt
									: excerpt.substring(0, 150) + "..."
							}
							tailwindStyling={
								excerpt
									? `block my-6 text-base leading-normal text-darkGrey`
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
							href={uri ? `blogs${uri}` : `/`}
							className="text-sm font-bold text-black uppercase transition duration-200 lg:text-blue hover:text-blue-Two hover:underline"
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
