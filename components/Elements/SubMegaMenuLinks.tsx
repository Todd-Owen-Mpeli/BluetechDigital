// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";
import ButtonBorderSliced from "../Elements/ButtonBorderSliced";

const SubMegaMenuLinks: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="fixed mt-[1.65rem] w-full left-0 flex justify-end">
				<div className="w-[80%] 2xl:w-[75%] bg-white grid grid-cols-3 gap-4 items-else justify-between">
					<div className="flex flex-col items-center justify-center py-10 border-r-[2px] border-black">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-black"
						>
							Our Services
						</motion.h4>

						<motion.ul
							initial={initialTwo}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								styles.ourServicesLinks + " p-8 w-full flex flex-col z-[999]"
							}
						>
							{/* Menu Link*/}
							{globalContext?.ourServicesLinks?.length > 0 ? (
								globalContext?.ourServicesLinks?.map(
									(item: any, keys: number) => (
										<Fragment key={keys}>
											<motion.li
												custom={keys}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
												className="w-full group-scoped hover:bg-blue-default border-b-[2px] border-lightGrey hover:border-blue-default"
											>
												<Link
													href={`${item?.node?.url}`}
													target={`${
														item?.node?.target ? item?.node?.target : "_self"
													}`}
													aria-label={`${item?.node?.label}`}
													className="block p-4 text-tiny text-black hover:text-white"
												>
													{item?.node?.label}
												</Link>
											</motion.li>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="flex flex-col justify-between h-full items-center py-10">
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="flex flex-col"
						>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-5 text-base font-semibold tracking-normal text-center text-black uppercase"
							>
								{globalContext?.themesOptionsContent?.menuColumnTwo?.title}
							</motion.h4>

							<Image
								width={
									globalContext?.themesOptionsContent?.menuColumnTwo?.image
										?.mediaDetails?.width
								}
								height={
									globalContext?.themesOptionsContent?.menuColumnTwo?.image
										?.mediaDetails?.height
								}
								alt={
									globalContext?.themesOptionsContent?.menuColumnTwo?.image
										?.altText
								}
								src={
									globalContext?.themesOptionsContent?.menuColumnTwo?.image
										?.sourceUrl
								}
								className="object-contain object-center w-full h-[350px]"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-col items-center justify-center px-6 gap-4 mt-4"
						>
							<Link
								href={
									globalContext?.themesOptionsContent?.menuColumnTwo?.buttonLink
										?.url
								}
								target={
									globalContext?.themesOptionsContent?.menuColumnTwo?.buttonLink
										?.target
								}
							>
								<motion.button
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.menuColumnTwo
											?.buttonLink?.title
											? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 font-semibold tracking-widest text-base w-fit border-2 border-solid border-black hover:bg-blue-default hover:border-blue-default transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-blue-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-blue-default`
											: `hidden`
									}
								>
									<span>
										{
											globalContext?.themesOptionsContent?.menuColumnTwo
												?.buttonLink?.title
										}
									</span>
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
													fill="#e4a002"
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
													fill="#e4a002"
												></path>
												<g transform="translate(4890.311 -1111.861)">
													<path
														d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
														transform="translate(0 0)"
														fill="#000"
													></path>
												</g>
											</g>
										</svg>
									</span>
								</motion.button>
							</Link>
						</motion.div>
					</div>
					<div
						className="flex flex-col justify-between h-full items-center px-10 py-10 bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `linear-gradient(
							    	0deg,
							    	rgba(45, 35, 120, 0.85),
							    	rgba(45, 35, 120, 0.85),
							    	rgba(45, 35, 120, 0.85)
							    ),url("${globalContext?.themesOptionsContent?.menuColumnThree?.backgroundImage?.sourceUrl}")`,
						}}
					>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-col"
						>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-5 text-base font-semibold tracking-normal text-center text-white uppercase"
							>
								{globalContext?.themesOptionsContent?.menuColumnThree?.title}
							</motion.h4>

							<Paragraph
								content={
									globalContext?.themesOptionsContent?.menuColumnThree
										?.paragraph
								}
								tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base text-center lg:text-left"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex flex-col items-center justify-center px-6 gap-4"
						>
							<Link
								href={
									globalContext?.themesOptionsContent?.menuColumnThree
										?.buttonLink?.url
								}
								target={
									globalContext?.themesOptionsContent?.menuColumnThree
										?.buttonLink?.target
								}
							>
								<ButtonBorderSliced
									fullWidth={false}
									tailwindColor="white"
									title={
										globalContext?.themesOptionsContent?.menuColumnThree
											?.buttonLink?.title
									}
								/>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SubMegaMenuLinks;
