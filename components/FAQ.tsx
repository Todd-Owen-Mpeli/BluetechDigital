// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFAQ} from "@/types/components/index";
import {useGlobalContext} from "@/context/global";

// Components
import FAQCard from "./Cards/FAQCard";
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";
import DownloadButtonLinks from "./Elements/DownloadButtonLinks";

const FAQ: FC<IFAQ> = ({
	cta,
	title,
	subtitle,
	paragraph,
	faqContent,
	displayCtaBlock,
	downloadLinksTitle,
	downloadButtonLinks,
	displayDownloadButtonLinks,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="py-16 px-4 lg:px-0 bg-white">
				<div className="container px-0 mx-auto">
					<motion.h3
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="my-2 uppercase font-semibold text-center lg:text-center text-lg tracking-[0.10rem] text-yellow-Two"
					>
						{subtitle}
					</motion.h3>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="my-2 text-center font-semibold leading-tight text-4xl lg:text-5xl text-black"
					>
						{title}
					</motion.h2>
					<Paragraph
						content={paragraph}
						tailwindStyling="lg:max-w-3xl mx-auto text-black leading-[1.75rem] text-base sm:text-paragraph text-center"
					/>
					<div className="flex flex-col-reverse xl:flex-row items-start justify-between gap-8 mt-10 py-12">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="w-full xl:w-[30%] flex flex-col gap-4"
						>
							<div
								className={
									displayCtaBlock
										? "p-10 flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
										: "hidden"
								}
								style={{
									backgroundImage: `linear-gradient(
                                        0deg,
                                        rgba(114, 0, 4, 0.85),
                                        rgba(114, 0, 4, 0.85),
                                        rgba(114, 0, 4, 0.85)
                                    ),url("${cta?.backgroundImage?.sourceUrl}")`,
								}}
							>
								<div className="flex flex-col gap-4">
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-1 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-white"
									>
										{cta?.title}
									</motion.h3>
									<Paragraph
										content={cta?.paragraph}
										tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base text-center lg:text-left"
									/>
								</div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={cta?.buttonLink?.url ? "block" : "hidden"}
								>
									<Link
										href={`${cta?.buttonLink?.url}`}
										target={cta?.buttonLink?.target}
									>
										<ButtonBorderSliced
											fullWidth={true}
											tailwindColor="white"
											title="Schedule An Appointment"
										/>
									</Link>
								</motion.div>
							</div>
							<div
								className={
									displayDownloadButtonLinks
										? "p-10 flex flex-col items-center justify-between gap-4 bg-cover bg-center bg-no-repeat"
										: "hidden"
								}
								style={{
									backgroundImage: `url("/svg/background/blob-scene-haikei-blue-darkblue.svg")`,
								}}
							>
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-2 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-white"
								>
									Our Business Services
								</motion.h3>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={cta?.buttonLink?.url ? "block" : "hidden"}
								>
									{globalContext?.ourServicesLinks?.length > 0 ? (
										globalContext?.ourServicesLinks?.map(
											(item: any, keys: any) => (
												<Fragment key={keys}>
													<Link
														href={`${item?.node?.url}`}
														target={item?.node?.target}
													>
														<motion.button
															initial={initial}
															whileInView={fadeInUp}
															viewport={{once: true}}
															className={
																item?.node?.url
																	? `flex items-center justify-center text-left group mt-3 relative gap-3 px-6 py-3 font-semibold tracking-widest text-base text-white w-full sm:mx-0 border-2 border-solid border-white hover:bg-blue-default hover:border-blue-default transition-all ease-in-out duration-500  hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-blue-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-blue-default`
																	: `hidden`
															}
														>
															{item?.node?.label}
														</motion.button>
													</Link>
												</Fragment>
											)
										)
									) : (
										<></>
									)}
								</motion.div>
							</div>
							<div
								className={
									displayDownloadButtonLinks
										? "p-10 flex flex-col items-center justify-between bg-lightGrey gap-4"
										: "hidden"
								}
							>
								<motion.h3
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="mb-2 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-black"
								>
									{downloadLinksTitle}
								</motion.h3>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={cta?.buttonLink?.url ? "block" : "hidden"}
								>
									{downloadButtonLinks?.length > 0 ? (
										downloadButtonLinks?.map((item: any, keys: any) => (
											<Fragment key={keys}>
												<Link
													href={item?.buttonLink?.url}
													target={item?.buttonLink?.target}
												>
													<DownloadButtonLinks
														pdfLink={item?.pdfLink}
														title={item?.buttonLink?.title}
													/>
												</Link>
											</Fragment>
										))
									) : (
										<></>
									)}
								</motion.div>
							</div>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="w-full xl:w-[70%] flex flex-col items-center justify-center gap-4"
						>
							{faqContent?.length > 0 ? (
								faqContent.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<FAQCard
											index={keys}
											title={item?.card?.title}
											paragraph={item?.card?.paragraph}
										/>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FAQ;
