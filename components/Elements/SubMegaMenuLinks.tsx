// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

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
							className="mb-5 text-lg font-semibold tracking-normal text-center uppercase md:text-left text-pureBlack"
						>
							Our Services
						</motion.h4>

						<motion.ul
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className={
								styles.ourServicesLinks + " p-10 w-full flex flex-col z-[999]"
							}
						>
							{/* Menu Link*/}
							{globalContext?.ourServicesLinks?.length > 0 ? (
								globalContext?.ourServicesLinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										<Link href={`${item?.node?.url}`}>
											<li className="w-full group-scoped hover:bg-blue-default border-b-[2px] border-lightGrey hover:border-blue-default">
												<Link
													href={`${item?.node?.url}`}
													className="block p-4 text-base font-semibold text-pureBlack group-scoped:hover:text-white"
												>
													{item?.node?.label}
												</Link>
											</li>
										</Link>
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="flex flex-col justify-start h-full items-center py-10">
						<motion.h4
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-5 text-lg font-semibold tracking-normal text-center text-pureBlack uppercase"
						>
							Other Links
						</motion.h4>
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col 2xl:flex-row items-center justify-center gap-4"
						>
							<Link href="http://www.bravo.co.tz/" target="">
								<motion.button
									initial={initial}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" group w-[200px] h-full xl:h-[125px] 2xl:min-h-[150px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-blue-Two border-solid border-2 bg-transparent hover:bg-blue-Two hover:border-lightGrey transition-all ease-in-out duration-500"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="Bravo Logo blue"
											src="/img/logos/bravo-blue.svg"
											className="block group-hover:hidden object-contain object-center w-full h-[35px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="Bravo Logo White"
											src="/img/logos/bravo-white.svg"
											className="hidden group-hover:block object-contain object-center w-full h-[35px] mb-4"
										/>
									</span>
									<span className="text-pureBlack group-hover:text-white">
										Bravo Logistics
									</span>
								</motion.button>
							</Link>
							<Link href="https://agricom.co.tz/" target="">
								<motion.button
									initial={initial}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										styles.borderButton +
										" group w-[200px] h-full xl:h-[125px] 2xl:min-h-[150px] relative px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-green-Two hover:bg-green-Two transition-all ease-in-out duration-500 text-pureBlack hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] hover:before:bg-green-Two before:bg-green-Two after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-green-Two hover:after:bg-green-Two"
									}
								>
									<span>
										<Image
											width={500}
											height={500}
											alt="Agricom Logo Green"
											src="/img/logos/agricom-logo.png"
											className="block group-hover:hidden object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
										<Image
											width={500}
											height={500}
											alt="Agricom Logo White"
											src="/img/logos/agricom-logo.png"
											className="hidden group-hover:block object-contain object-center w-full h-[40px] lg:h-[50px] mb-4"
										/>
									</span>
									<span>Agricom</span>
								</motion.button>
							</Link>
						</motion.div>
					</div>
					<div
						className="px-10 py-16 h-full flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `linear-gradient(
							    	0deg,
							    	rgba(0, 0, 4, 0.85),
							    	rgba(0, 0, 4, 0.85),
							    	rgba(0, 0, 4, 0.85)
							    ),url("${globalContext?.themesOptionsContent?.megaMenuContent?.backgroundImage?.sourceUrl}")`,
						}}
					>
						<div className="flex flex-col gap-4">
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-1 text-center font-bold lg:text-left text-lg tracking-[0.10rem] text-white"
							>
								{globalContext?.themesOptionsContent?.megaMenuContent?.title}
							</motion.h3>
							<Paragraph
								content={
									globalContext?.themesOptionsContent?.megaMenuContent
										?.paragraph
								}
								tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base text-center lg:text-left"
							/>
						</div>
						<motion.div
							initial={initial}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={
								globalContext?.themesOptionsContent?.megaMenuContent?.buttonLink
									?.url
									? "block"
									: "hidden"
							}
						>
							<Link
								href={
									globalContext?.themesOptionsContent?.megaMenuContent
										?.buttonLink?.url
								}
								target={
									globalContext?.themesOptionsContent?.megaMenuContent
										?.buttonLink?.target
								}
							>
								<ButtonBorderSliced
									fullWidth={true}
									tailwindColor="white"
									title={
										globalContext?.themesOptionsContent?.megaMenuContent
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
