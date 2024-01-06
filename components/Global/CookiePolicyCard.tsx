"use client";

// Imports
import postHog from "posthog-js";
import {FC, useState} from "react";
import {motion} from "framer-motion";
import Paragraph from "../Elements/Paragraph";
import {fadeInUp, initial, stagger} from "@/animations/animations";

const CookiePolicyCard: FC = () => {
	const [showCookiePolicyCard, setShowCookiePolicyCard] = useState(true);

	const acceptCookies = () => {
		postHog.opt_in_capturing();
		setShowCookiePolicyCard(false);
	};

	const refuseCookies = () => {
		postHog.opt_out_capturing();
		setShowCookiePolicyCard(false);
	};

	return (
		<>
			<div
				className={
					showCookiePolicyCard
						? `fixed bottom-0 right-0 max-w-6xl px-4 md:max-w-md z-[999]`
						: `hidden`
				}
			>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="px-6 py-4 mb-8 text-white bg-blue-dark"
				>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="font-bold text-lg tracking-wide"
					>
						Cookie Policy
					</motion.h3>
					<Paragraph
						content={`<p>To provide the best experiences, we use technologies like cookies to store and/or access device information. Consenting to these technologies will allow us to process data such as browsing behaviour or unique IDs on this site. Not consenting or withdrawing consent, may adversely affect certain features and functions.</p>`}
						tailwindStyling="mt-3 mb-6 text-sm text-left"
					/>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex items-center justify-center gap-4"
					>
						<motion.button
							onClick={acceptCookies}
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="inline-block px-6 py-3 mr-2 text-xs leading-none text-white transition-all duration-200 ease-in-out bg-blue-Two hover:bg-yellow-dark"
						>
							Accept Cookies
						</motion.button>
						<motion.button
							onClick={refuseCookies}
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="inline-block px-6 py-3 text-xs leading-none text-white bg-blue-darker hover:bg-blue-darkerTwo"
						>
							Refuse Cookies
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default CookiePolicyCard;
