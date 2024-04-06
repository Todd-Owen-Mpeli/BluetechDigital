// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IFAQTwo} from "@/types/components/index";

// Components
import FAQCard from "./Cards/FAQCard";
import Paragraph from "./Elements/Paragraph";

const FaqTwo: FC<IFAQTwo> = ({
	title,
	image,
	subtitle,
	paragraph,
	faqGrid,
	buttonLink,
}) => {
	return (
		<>
			<div className="py-6 px-4 lg:px-0 bg-white">
				<div className="lg:container px-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col items-center mb-10"
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center text-base text-yellow-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-2 max-w-xl mx-auto xl:mx-0 text-black text-center font-bold text-xl lg:text-3xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-black text-base lg:text-paragraph text-center"
						/>
					</motion.div>

					<div className="flex flex-col lg:flex-row gap-4 xl:gap-10">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={`w-full flex flex-col items-center justify-center gap-4 ${
								image?.sourceUrl ? "lg:w-1/2" : `w-full`
							}`}
						>
							{faqGrid?.length > 0 ? (
								faqGrid.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											className="w-full"
										>
											<FAQCard
												index={keys}
												title={item?.card?.title}
												paragraph={item?.card?.paragraph}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.div>
						<div className={image?.sourceUrl ? "w-full lg:w-1/2" : `hidden`}>
							<motion.div
								viewport={{once: true}}
								initial={slideInRightInitial}
								whileInView={slideInRightFinish}
								className="relative"
							>
								<Image
									alt={`${image?.altText}`}
									src={image?.sourceUrl}
									width={image?.mediaDetails?.width}
									height={image?.mediaDetails?.height}
									className={
										image?.sourceUrl
											? `block object-cover object-center w-full h-[225px] sm:h-[400px]`
											: `hidden`
									}
									style={{
										clipPath: `polygon(0 0, 100% 0%, 95% 95%, 0 100%)`,
									}}
								/>
								<Link
									href={`${buttonLink?.url}`}
									target={`${
										buttonLink?.target ? buttonLink?.target : "_self"
									}`}
									aria-label={`${buttonLink?.title}`}
									className={
										buttonLink?.url
											? "block absolute bottom-0 left-0"
											: "hidden"
									}
								>
									<motion.button
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className={
											buttonLink?.title
												? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit bg-blue-default hover:bg-yellow-default transition-all ease-in-out duration-500 text-white`
												: `hidden`
										}
									>
										<span>{buttonLink?.title}</span>
										<span className="hidden group-hover:block">
											<svg
												height="35"
												width="30.237"
												viewBox="0 0 30.237 35"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g transform="translate(-4906.763 143)">
													<path
														d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
														transform="translate(4870 -143)"
														fill="#ffffff"
													></path>
													<g transform="translate(4890.311 -1111.861)">
														<path
															d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
															transform="translate(0 0)"
															fill="#ffffff"
														></path>
													</g>
												</g>
											</svg>
										</span>
										<span className="block group-hover:hidden">
											<svg
												height="35"
												width="30.237"
												viewBox="0 0 30.237 35"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g transform="translate(-4906.763 143)">
													<path
														d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
														transform="translate(4870 -143)"
														fill="#ffffff"
													></path>
													<g transform="translate(4890.311 -1111.861)">
														<path
															d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
															transform="translate(0 0)"
															fill="#ffffff"
														></path>
													</g>
												</g>
											</svg>
										</span>
									</motion.button>
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FaqTwo;
