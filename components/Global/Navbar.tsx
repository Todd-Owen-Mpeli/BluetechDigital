"use client";

// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {useState, FC, Fragment, useEffect} from "react";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

// Styling
import styles from "./../../styles/components/Navbar.module.scss";

// Components
import SideMenu from "../Elements/SideMenu";
import SubMegaMenuLinks from "../Elements/SubMegaMenuLinks";

const Navbar: FC = () => {
	const globalContext = useGlobalContext();

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
					` z-[999] w-full fixed bg-white transition-all ease-in-out duration-500`
				}
			>
				<div className="container mx-auto flex flex-row items-baseline sm:items-center justify-between py-5 xl:py-6 px-4">
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
					>
						<Link href="/">
							<Image
								priority
								width={500}
								height={500}
								alt="BluetechDigital Logo"
								src="/img/logos/BlueInventory favicon Two.png"
								className="object-contain object-center w-full h-[20px] sm:h-[25px] lg:h-[30px]"
							/>
						</Link>
					</motion.div>
					<div className="flex items-center gap-8">
						<motion.ul
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="hidden xl:flex lg:items-center lg:gap-x-6"
						>
							{globalContext?.navbarMenuLinks?.length > 0 ? (
								globalContext?.navbarMenuLinks?.map((item: any, keys: any) => (
									<Fragment key={keys}>
										{item?.node?.label === "Our Services" ? (
											<li
												className="relative"
												onClick={displayOurServicesSublinks}
											>
												<div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<span className="text-black hover:text-blue-Two font-semibold text-tiny text-center tracking-[0.05rem] transition-all ease-in-out duration-500">
														Our Services
													</span>
													<Image
														width={550}
														height={550}
														alt="White Arrow Icon"
														src="/img/navigation-menu-dropdown-arrow-white.png"
														className=" cursor-pointer w-[25px] h-[25px] object-contain object-center"
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
											</li>
										) : item?.node?.url === "/news-insights" ? (
											<li className="relative">
												<span className="flex flex-row justify-center items-center gap-2 cursor-pointer">
													<Link
														href={`${item?.node?.url}`}
														className="text-black hover:text-blue-Two font-semibold text-tiny text-center tracking-[0.05rem] transition-all ease-in-out duration-500"
													>
														{item?.node?.label}
													</Link>
													<Image
														width={550}
														height={550}
														alt="White Arrow Icon"
														onClick={displayNewsInsightsSublinks}
														src="/img/navigation-menu-dropdown-arrow-white.png"
														className="w-[25px] h-[25px] object-contain object-center"
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
																<li className="w-full group hover:bg-blue-default border-b-[2px] border-lightGrey hover:border-blue-default">
																	<Link
																		href="/case-studies"
																		className="block p-4 text-base font-semibold text-pureBlack group-hover:text-white"
																	>
																		Case Studies
																	</Link>
																</li>
															</ul>
														</>
													) : null}
												</div>
											</li>
										) : (
											<li className="hidden xl:block">
												<Link
													href={`${item?.node?.url}`}
													className="text-black hover:text-blue-Two font-semibold text-tiny text-center tracking-[0.05rem] transition-all ease-in-out duration-500"
												>
													{item?.node?.label}
												</Link>
											</li>
										)}
									</Fragment>
								))
							) : (
								<></>
							)}
						</motion.ul>
					</div>
					<motion.div className="block xl:hidden">
						<button
							type="button"
							onClick={toggleMenu}
							aria-label="toggle menu"
							className={menuActive ? styles.navToggleOpen : styles.navToggle}
						>
							<span aria-hidden="true"></span>
						</button>
						{/* Hidden Side Menu */}
						<SideMenu menuActive={menuActive} />
					</motion.div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
