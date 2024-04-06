// Imports
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FC, Fragment, useState} from "react";
import {ISideMenu} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {fadeIn, initial, stagger, initialTwo} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Navbar.module.scss";

const SideMenu: FC<ISideMenu> = ({menuActive, setMenuActive}) => {
	const globalContext = useGlobalContext();

	const [newsInsightsSublinksOpen, setNewsInsightsSublinksOpen]: any =
		useState(false);
	const [ourServicesSublinksOpen, setOurServicesSublinksOpen]: any =
		useState(false);

	const toggleMenu = () => {
		setMenuActive(!menuActive);
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

	return (
		<>
			<nav
				className={
					menuActive
						? `${styles.navReveal} ${styles.nav}`
						: `hidden ${styles.nav}`
				}
			>
				<div className="relative flex flex-col w-full h-full px-6 py-6 overflow-x-hidden overflow-y-auto bg-white">
					<div className="flex flex-col items-center mb-8">
						<Link className="mr-auto text-3xl font-bold leading-none" href="/">
							<Image
								width={500}
								height={500}
								alt="Bluetech Digital Logo"
								src="/svg/logo/BluetechDigital-Logo-color.svg"
								className="object-contain object-center w-[50px] h-[50px]"
							/>
						</Link>
					</div>
					<div className="flex flex-col px-4 mt-4">
						<motion.ul
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
						>
							{globalContext?.mobileLinks.length > 0 ? (
								globalContext?.mobileLinks.map((item: any, keys: number) => (
									<Fragment key={keys}>
										{item?.node?.label === "Our Services" ? (
											<li
												onClick={displayOurServicesSublinks}
												className="border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
											>
												<div className="py-4 flex flex-row justify-between items-center gap-2">
													<Link
														onClick={toggleMenu}
														href={item?.node?.url}
														className="text-black text-tiny font-semibold text-center tracking-[0.05rem] hover:text-blue-two transition-all ease-in-out duration-500"
													>
														{item?.node?.label}
													</Link>
													<Image
														width={550}
														height={550}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-black.svg"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</div>
												{ourServicesSublinksOpen ? (
													<>
														<motion.ul
															initial={initialTwo}
															variants={stagger}
															whileInView="animate"
															viewport={{once: true}}
															className={
																styles.ourServicesLinks +
																` flex flex-col my-4 z-[999]`
															}
														>
															{/* Menu Link*/}
															{globalContext?.ourServicesLinks?.length > 0 ? (
																globalContext?.ourServicesLinks?.map(
																	(item: any, keys: number) => (
																		<Fragment key={keys}>
																			<li
																				className={`${
																					keys < 1
																						? "border-t-[1px] border-darkGrey border-opacity-50"
																						: "border-t-[0px]"
																				} hover:border-blue-two hover:bg-blue-two border-y-[1px] border-darkGrey border-opacity-50 text-black hover:text-white`}
																			>
																				<Link
																					onClick={toggleMenu}
																					href={`${item?.node?.url}`}
																					target={`${
																						item?.node?.target
																							? item?.node?.target
																							: "_self"
																					}`}
																					aria-label={`${item?.node?.label}`}
																					className="block p-4 text-tiny font-semibold"
																				>
																					{item?.node?.label}
																				</Link>
																			</li>
																		</Fragment>
																	)
																)
															) : (
																<></>
															)}
														</motion.ul>
													</>
												) : null}
											</li>
										) : item?.node?.url === "/news-insights" ? (
											<li
												onClick={displayNewsInsightsSublinks}
												className="border-b-[1px] border-yellow-dark border-opacity-50 cursor-pointer"
											>
												<div className="py-4 flex flex-row justify-between items-center gap-2">
													<span className="text-black text-tiny font-semibold text-center tracking-[0.05rem]hover:text-blue-two transition-all ease-in-out duration-500">
														<Link
															onClick={toggleMenu}
															href="/career"
															className="text-black text-tiny font-semibold text-center tracking-[0.05rem] hover:text-blue-two transition-all ease-in-out duration-500"
														>
															{item?.node?.label}
														</Link>
													</span>
													<Image
														width={550}
														height={550}
														alt="Black Arrow Icon"
														src="/svg/navigation-menu-dropdown-arrow-black.svg"
														className="w-[25px] h-[25px] object-contain object-center"
													/>
												</div>
												{newsInsightsSublinksOpen ? (
													<>
														<ul
															className={
																styles.newsInsightsSublinks +
																" py-4 w-full flex flex-col z-[999]"
															}
														>
															<li className="hover:border-blue-two hover:bg-blue-two border-y-[1px] border-darkGrey border-opacity-50 text-black hover:text-white">
																<Link
																	onClick={toggleMenu}
																	href="/case-studies"
																	className="block p-4 text-tiny font-semibold"
																>
																	Case Studies
																</Link>
															</li>
														</ul>
													</>
												) : null}
											</li>
										) : (
											<li className="border-b-[1px] border-yellow-dark border-opacity-50">
												<Link
													onClick={toggleMenu}
													href={`${item?.node?.url}`}
													target={`${
														item?.node?.target ? item?.node?.target : "_self"
													}`}
													aria-label={`${item?.node?.label}`}
													className="block py-4 text-tiny font-semibold text-black hover:text-blue-two"
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
					<div className="mt-20">
						<motion.div
							initial={initial}
							viewport={{once: true}}
							variants={stagger}
							whileInView="animate"
							className="flex flex-col items-center justify-between gap-4"
						>
							<h4 className="mb-5 text-tiny font-semibold tracking-normal text-center uppercase md:text-left text-black">
								Contact Links
							</h4>
							<div className="flex items-center justify-center gap-4 text-center">
								<Link
									onClick={toggleMenu}
									className="inline-block px-1 hover:opacity-70"
									href={`${globalContext?.themesOptionsContent?.facebookLink?.url}`}
									aria-label={`Facebook Social Media Link ${globalContext?.themesOptionsContent?.facebookLink?.title}`}
									target={
										globalContext?.themesOptionsContent?.facebookLink?.target
									}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#f6ad37",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									onClick={toggleMenu}
									className="inline-block px-1 hover:opacity-70"
									href={`${globalContext?.themesOptionsContent?.twitterLink?.url}`}
									aria-label={`Twitter Social Media Link ${globalContext?.themesOptionsContent?.twitterLink?.title}`}
									target={
										globalContext?.themesOptionsContent?.twitterLink?.target
									}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#f6ad37",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									onClick={toggleMenu}
									className="inline-block px-1 hover:opacity-70"
									href={`${globalContext?.themesOptionsContent?.linkedinLink?.url}`}
									aria-label={`Linkedin Social Media Link ${globalContext?.themesOptionsContent?.linkedinLink.title}`}
									target={
										globalContext?.themesOptionsContent?.linkedinLink?.target
									}
								>
									<svg
										height="100%"
										style={{
											fill: "#f6ad37",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										className="w-5 h-5"
										width="100%"
									>
										<path
											d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</div>
							<div className="flex flex-col sm:flex-row items-center justify-center w-auto gap-2 py-6 mb-10">
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.email
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-two sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										onClick={toggleMenu}
										className="font-medium text-tiny tracking-wide text-black hover:text-yellow-two"
										href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									>
										{globalContext?.themesOptionsContent?.email}
									</Link>
								</motion.div>
								<motion.div
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className={
										globalContext?.themesOptionsContent?.emailTwo
											? "flex items-center justify-center gap-2"
											: "hidden"
									}
								>
									<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-two sm:mr-3">
										<svg
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</div>
									<Link
										onClick={toggleMenu}
										className="font-medium text-tiny tracking-wide text-black hover:text-yellow-two"
										href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
									>
										{globalContext?.themesOptionsContent?.emailTwo}
									</Link>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default SideMenu;
