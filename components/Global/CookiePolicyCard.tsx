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
						? `fixed bottom-0 right-0 max-w-6xl px-0 md:max-w-xl z-[999]`
						: `hidden`
				}
			>
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="px-6 py-4 mb-3 mr-3 bg-white border-solid border-l-[5px] border-b-[5px] border-lightGrey"
					style={{
						boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
					}}
				>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="font-bold text-base tracking-wide text-pureBlack"
					>
						Cookie Policy
					</motion.h3>
					<Paragraph
						content={`<p>This website uses cookies to enhance the user experience and ensure the proper functioning of the site. By using this website, you agree to the use of cookies in accordance with this Cookie Policy.</p>`}
						tailwindStyling="mt-1 mb-2 text-sm text-left text-pureBlack"
					/>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex items-center justify-start gap-4"
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
							className="inline-block px-6 py-3 text-xs leading-none text-white bg-blue-dark hover:bg-blue-darkerTwo"
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
