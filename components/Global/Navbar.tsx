"use client";

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
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {useState, FC, Fragment, useEffect} from "react";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
import SubMegaMenuLinks from "../Elements/SubMegaMenuLinks";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

	// Background color scroll position change
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Display all sublinks & Mobile Links
	const [menuActive, setMenuActive] = useState(false);
	const [newsInsightsSublinksOpen, setNewsInsightsSublinksOpen]: any =
		useState(false);
	const [navBackgroundSublinksOpen, setNavBackgroundSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	/* Hides or Displays the Full Nav Menu */
	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	/* Display's Navbar background Color
	when Mega sublinks are hoveblue*/
	const displayNavBackgroundColor = () => {
		setNavBackgroundSublinksOpen(!navBackgroundSublinksOpen);
	};

	// Hides or Display Our Services sublinks
	const displayOurServicesSublinks = () => {
		setNewsInsightsSublinksOpen(false);
		setOurServicesSublinksOpen(!ourServicesSublinksOpen);
	};

	// Hides or Display News & Insights Sublinks
	const displayNewsInsightsSublinks = () => {
		setOurServicesSublinksOpen(false);
		setNewsInsightsSublinksOpen(!newsInsightsSublinksOpen);
	};

	const resetNavbarStyling = () => {
		setNewsInsightsSublinksOpen(false);
		setNavBackgroundSublinksOpen(false);
		setOurServicesSublinksOpen(false);
	};

	return (
		<>
			<nav
				className={
					styles.navbar +
					` z-[999] w-full fixed group bg-transparent hover:bg-white transition-all ease-in-out duration-500 ${
						scrollPosition > 50 || navBackgroundSublinksOpen
							? "bg-white"
							: "bg-transparent"
					}`
				}
			>
				<div className="lg:container mx-auto flex flex-col sm:flex-row items-baseline sm:items-center justify-between py-3 px-4">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="flex flex-col justify-start"
					>
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="Bluetech Digital Logo"
								src="/svg/logo/BluetechDigital-Logo-color.svg"
								className={`${
									scrollPosition > 50 ? "block" : "hidden group-hover:block"
								} object-contain object-center w-[50px] h-[50px]`}
							/>
							<Image
								priority
								width={500}
								height={500}
								alt="Bluetech Digital Logo White"
								src="/svg/logo/BluetechDigital-Logo-white.svg"
								className={`${
									scrollPosition > 50 ? "hidden" : "block group-hover:hidden"
								} object-contain object-center w-[50px] h-[50px]`}
							/>
						</Link>
					</motion.div>
					<div className="hidden xl:flex items-center gap-8">
						<motion.ul
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="flex lg:items-center lg:gap-x-6"
						>
							{globalContext?.navbarMenuLinks?.length > 0 ? (
								globalContext?.navbarMenuLinks?.map(
									(item: any, index: number) => (
										<Fragment key={index}>
											{item?.node?.label === "Our Services" ? (
												<motion.li
													className="relative"
													onClick={displayOurServicesSublinks}
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
												>
													<div className="flex justify-center items-center gap-2 cursor-pointer">
														<Link
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className={`${
																scrollPosition > 50
																	? "text-black"
																	: "text-white"
															} group-hover:text-black group-hover:hover:text-blue-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
														>
															{item?.node?.label}
														</Link>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															src="/svg/navigation-menu-dropdown-arrow-white.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "hidden"
																	: "block"
															} group-hover:hidden cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
														<Image
															width={550}
															height={550}
															alt="Black Arrow Icon"
															src="/svg/navigation-menu-dropdown-arrow-black.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "block"
																	: "hidden"
															} group-hover:block cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
													</div>
													{ourServicesSublinksOpen ? (
														<>
															<div
																onMouseLeave={resetNavbarStyling}
																onMouseEnter={displayNavBackgroundColor}
															>
																<SubMegaMenuLinks />
															</div>
														</>
													) : null}
												</motion.li>
											) : item?.node?.url === "/news-insights" ? (
												<motion.li
													className="relative"
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
												>
													<span className="flex justify-center items-center gap-2 cursor-pointer">
														<Link
															href={`${item?.node?.url}`}
															target={`${
																item?.node?.target
																	? item?.node?.target
																	: "_self"
															}`}
															aria-label={`${item?.node?.label}`}
															className={`${
																scrollPosition > 50
																	? "text-black"
																	: "text-white"
															} group-hover:text-black group-hover:hover:text-blue-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
														>
															{item?.node?.label}
														</Link>
														<Image
															width={550}
															height={550}
															alt="White Arrow Icon"
															onClick={displayNewsInsightsSublinks}
															src="/svg/navigation-menu-dropdown-arrow-white.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "hidden"
																	: "block"
															} group-hover:hidden cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
														<Image
															width={550}
															height={550}
															alt="Black Arrow Icon"
															onClick={displayNewsInsightsSublinks}
															src="/svg/navigation-menu-dropdown-arrow-black.svg"
															className={`${
																scrollPosition > 50 || navBackgroundSublinksOpen
																	? "block"
																	: "hidden"
															} group-hover:block cursor-pointer w-[22px] h-[22px] object-contain object-center`}
														/>
													</span>
													<div
														onMouseLeave={resetNavbarStyling}
														className="fixed mt-[1.65rem] w-[20%] bg-white flex flex-col items-center justify-center"
													>
														{newsInsightsSublinksOpen ? (
															<>
																<ul
																	className={
																		styles.newsInsightsSublinks +
																		" p-0 w-full flex flex-col z-[999]"
																	}
																>
																	<motion.li
																		className="w-full hover:bg-blue-default"
																		custom={index}
																		initial={initial}
																		whileInView="animate"
																		viewport={{once: true}}
																		variants={arrayLoopStaggerChildren}
																	>
																		<Link
																			href="/case-studies"
																			className={` ${
																				newsInsightsSublinksOpen
																					? "text-black hover:text-white"
																					: "text-black"
																			} block p-4 text-tiny`}
																		>
																			Case Studies
																		</Link>
																	</motion.li>
																</ul>
															</>
														) : null}
													</div>
												</motion.li>
											) : (
												<motion.li
													className="hidden xl:block"
													custom={index}
													initial={initial}
													whileInView="animate"
													viewport={{once: true}}
													variants={arrayLoopStaggerChildren}
												>
													<Link
														href={`${item?.node?.url}`}
														target={`${
															item?.node?.target ? item?.node?.target : "_self"
														}`}
														aria-label={`${item?.node?.label}`}
														className={`${
															scrollPosition > 50 ? "text-black" : "text-white"
														} group-hover:text-black group-hover:hover:text-blue-two text-tiny text-center tracking-[0.075rem] transition-all ease-in-out duration-500`}
													>
														{item?.node?.label}
													</Link>
												</motion.li>
											)}
										</Fragment>
									)
								)
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<div className="opacity-0 xl:hidden" />
					<motion.div className="flex flex-col xl:hidden">
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={menuActive ? styles.navToggleOpen : styles.navToggle}
						>
							<span aria-hidden="true"></span>
						</button>
						{/* Hidden Side Menu */}
						<SideMenu menuActive={menuActive} setMenuActive={setMenuActive} />
					</motion.div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
