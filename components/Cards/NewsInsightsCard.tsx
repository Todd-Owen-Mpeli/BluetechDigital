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
import {INewsInsightsCard} from "@/types/components";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const newsInsightsCard: FC<INewsInsightsCard> = ({
	uri,
	date,
	title,
	paragraph,
	featuredImage,
}) => {
	return (
		<div
			className="w-full h-full p-0 border-l-[5px] border-b-[5px] border-lightGrey"
			style={{
				boxShadow: "28px 28px 2px -20px rgba(0,0,0,0.1)",
			}}
		>
			<div
				className="relative px-0 h-[225px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-lightGrey"
				style={{
					clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
				}}
			>
				<Link href={uri ? `news-insights${uri}` : `/`}>
					<Image
						alt={featuredImage?.node?.altText}
						src={featuredImage?.node?.sourceUrl}
						width={featuredImage?.node?.mediaDetails?.width}
						height={featuredImage?.node?.mediaDetails?.height}
						className="object-cover object-center w-full h-full"
					/>
				</Link>
			</div>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="flex flex-col items-baseline justify-between px-8 pt-5 pb-4"
			>
				<span className="mb-2 font-normal text-darkGrey text-tiny">
					{dateFormat(date, "dddd, mmmm d, yyyy")}
				</span>

				<Link href={uri ? `news-insights${uri}` : `/`}>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-2 text-tiny sm:text-base leading-[1.5rem] font-semibold text-black transition-all ease-in-out duration-200 hover:text-purple-default"
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
						tailwindStyling={
							paragraph
								? `block text-tiny leading-normal text-darkGrey`
								: `hidden`
						}
					/>
				</motion.div>
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="mt-2"
				>
					<Link
						href={uri ? `news-insights${uri}` : `/`}
						target=""
						className={uri ? "block" : "hidden"}
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
