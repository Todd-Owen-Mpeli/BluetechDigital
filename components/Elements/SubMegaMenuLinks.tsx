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
							className="mb-5 text-base font-semibold tracking-normal text-center uppercase md:text-left text-pureBlack"
						>
							Our Services
						</motion.h4>

						<motion.ul
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className={
								styles.ourServicesLinks + " p-8 w-full flex flex-col z-[999]"
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
													className="block p-4 text-tiny text-pureBlack group-scoped:hover:text-white"
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
					<div className="flex flex-col justify-between h-full items-center py-10">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col"
						>
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-5 text-base font-semibold tracking-normal text-center text-pureBlack uppercase"
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
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col items-center justify-center px-6 gap-4"
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
								<ButtonBorderSliced
									fullWidth={false}
									tailwindColor="purple-default"
									title={
										globalContext?.themesOptionsContent?.menuColumnTwo
											?.buttonLink?.title
									}
								/>
							</Link>
						</motion.div>
					</div>
					<div
						className="px-10 py-10 h-full flex flex-col items-center justify-between bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `linear-gradient(
							    	0deg,
							    	rgba(45, 35, 120, 0.85),
							    	rgba(45, 35, 120, 0.85),
							    	rgba(45, 35, 120, 0.85)
							    ),url("${globalContext?.themesOptionsContent?.menuColumnThree?.backgroundImage?.sourceUrl}")`,
						}}
					>
						<div className="flex flex-col gap-4">
							<motion.h3
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-1 text-center font-bold lg:text-left text-base uppercase tracking-[0.10rem] text-white"
							>
								{globalContext?.themesOptionsContent?.menuColumnThree?.title}
							</motion.h3>
							<Paragraph
								content={
									globalContext?.themesOptionsContent?.menuColumnThree
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
								globalContext?.themesOptionsContent?.menuColumnThree?.buttonLink
									?.url
									? "block"
									: "hidden"
							}
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
