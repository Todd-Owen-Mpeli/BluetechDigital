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
import {motion} from "framer-motion";
import {INewsInsightsCard} from "@/types/components";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const newsInsightsCard: FC<INewsInsightsCard> = ({
	uri,
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
				className="relative px-0 h-[300px] border-r-[5px] lg:border-r-[10px] border-t-[5px] border-b-0 border-lightGrey"
				style={{
					clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
				}}
			>
				<Link href={uri ? `operational-insights${uri}` : `/`}>
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
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-col items-baseline justify-between px-8 pt-10 pb-4"
			>
				<Link href={uri ? `operational-insights${uri}` : `/`}>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-2 text-lg font-semibold text-pureBlack transition-all ease-in-out duration-200 hover:text-blue-default"
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
						content={paragraph ? paragraph.substring(0, 350) + "..." : ""}
						tailwindStyling="block px-0 text-base text-darkGrey"
					/>
				</motion.div>
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
				>
					<Link
						href={uri ? `operational-insights${uri}` : `/`}
						target=""
						className={uri ? "block" : "hidden"}
					>
						<ButtonBorderSliced
							fullWidth={true}
							title="Read more"
							tailwindColor="blue-default"
						/>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default newsInsightsCard;
