// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ILinkedInCta} from "@/types/components/index";
import {initial, stagger} from "../animations/animations";

const LinkedInCta: FC<ILinkedInCta> = ({
	title,
	buttonLink,
	highlightText,
	backgroundColor,
	displayLinkedinIcon,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="relative z-10 py-16 md:py-10"
				style={{
					backgroundColor: `${backgroundColor}`,
					clipPath: `polygon(77% 0, 100% 0, 100% 98%, 21% 89%, 0 98%, 0 0)`,
				}}
			>
				<div className="container mx-auto">
					<motion.h2
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="max-w-6xl mx-auto text-center font-bold leading-normal text-xl lg:text-2xl mb-4 p-4 pl-0 text-white"
					>
						<span className="p-2 mr-3 bg-yellow-dark text-white">
							{highlightText}
						</span>
						{title}
					</motion.h2>
					<Link
						href={buttonLink?.url}
						target={buttonLink?.target}
						className={
							buttonLink?.url ? "block w-full mx-auto max-w-[275px]" : "hidden"
						}
					>
						<span
							className={`font-bold px-6 flex ${
								displayLinkedinIcon ? "flex-col sm:flex-row" : "flex-row"
							} justify-center items-center gap-y-2 text-white border-2 border-white p-3 uppercase hover:border-yellow-dark hover:bg-yellow-dark`}
						>
							<span className="w-full text-center sm:text-left text-base mx-auto sm:mx-0">
								{buttonLink?.title}
							</span>
							<span className="w-max">
								{displayLinkedinIcon ? (
									<>
										<svg
											height="25"
											width="59.65"
											viewBox="0 0 59.65 35"
											xmlns="http://www.w3.org/2000/svg"
											className="w-full h-[50px] object-contain object-center"
										>
											<defs>
												<clipPath id="clipPath">
													<rect
														id="Rectangle_498"
														data-name="Rectangle 498"
														width="50.341"
														height="14"
														fill="#fff"
													></rect>
												</clipPath>
											</defs>
											<g
												id="Group_1902"
												data-name="Group 1902"
												transform="translate(-175.35 -13)"
											>
												<g
													id="Group_1604"
													data-name="Group 1604"
													transform="translate(175.35 23.5)"
													clipPath="url(#clipPath)"
												>
													<path
														id="Subtraction_16"
														data-name="Subtraction 16"
														d="M12.721,14H1.429A1.415,1.415,0,0,1,0,12.6V1.4A1.416,1.416,0,0,1,1.429,0H12.721a1.415,1.415,0,0,1,1.426,1.4V12.6A1.413,1.413,0,0,1,12.721,14Zm-4.1-7.539c.8,0,.965.706.965,1.3v3.321h1.9V7.539c0-1.617-.819-2.583-2.191-2.583a2.194,2.194,0,0,0-1.891.966H7.371l-.086-.832H5.632c.025.557.048,1.175.048,1.91v4.079h1.9V7.625a1.36,1.36,0,0,1,.061-.466A1.052,1.052,0,0,1,8.623,6.461ZM2.638,5.089v5.99h1.9V5.089Zm.963-2.6a.933.933,0,1,0-.025,1.86A.938.938,0,0,0,4.6,3.423.925.925,0,0,0,3.6,2.494Z"
														transform="translate(36.193 -0.001)"
														fill="#fff"
														stroke="rgba(0,0,0,0)"
														strokeMiterlimit="10"
														strokeWidth="1"
													></path>
													<path
														id="Path_5489"
														data-name="Path 5489"
														d="M0,35.079H1.9v6.687H5.259v1.568H0Z"
														transform="translate(0 -32.256)"
														fill="#fff"
													></path>
													<path
														id="Path_5490"
														data-name="Path 5490"
														d="M73.536,31.9a.94.94,0,0,1-1.027.931.934.934,0,1,1,1.027-.931M71.57,33.569h1.9v5.989h-1.9Z"
														transform="translate(-65.636 -28.48)"
														fill="#fff"
													></path>
													<path
														id="Path_5491"
														data-name="Path 5491"
														d="M108.546,63.605c0-.747-.025-1.371-.05-1.91h1.653l.088.833h.038a2.21,2.21,0,0,1,1.891-.968c1.252,0,2.191.821,2.191,2.584v3.539h-1.9V64.365c0-.771-.275-1.3-.964-1.3a1.043,1.043,0,0,0-.977.7,1.315,1.315,0,0,0-.062.465v3.454h-1.9Z"
														transform="translate(-99.569 -56.606)"
														fill="#fff"
													></path>
													<path
														id="Path_5492"
														data-name="Path 5492"
														d="M195.465,34.831h.025a8.039,8.039,0,0,1,.438-.722l1.24-1.8h2.291l-2.191,2.425,2.5,3.564h-2.341l-1.49-2.462-.476.588V38.3h-1.9V29.6h1.9Z"
														transform="translate(-177.637 -27.22)"
														fill="#fff"
													></path>
													<path
														id="Path_5493"
														data-name="Path 5493"
														d="M266.749,65.283c.05.771.839,1.139,1.728,1.139a5.149,5.149,0,0,0,1.691-.257l.25,1.261a5.9,5.9,0,0,1-2.216.38c-2.079,0-3.268-1.176-3.268-3.049a3.028,3.028,0,0,1,3.093-3.2,2.678,2.678,0,0,1,2.73,2.988,4.333,4.333,0,0,1-.063.735Zm2.241-1.274a1.088,1.088,0,0,0-1.077-1.212,1.242,1.242,0,0,0-1.177,1.212Z"
														transform="translate(-243.136 -56.606)"
														fill="#fff"
													></path>
													<path
														id="Path_5494"
														data-name="Path 5494"
														d="M346.849,29.6v6.907c0,.673.025,1.384.05,1.788h-1.69l-.075-.87H345.1a2.151,2.151,0,0,1-1.916,1c-1.452,0-2.617-1.213-2.617-3.074-.012-2.021,1.277-3.2,2.742-3.2a1.9,1.9,0,0,1,1.615.674h.025V29.6Zm-1.9,5.242a1.637,1.637,0,0,0-.025-.343,1.137,1.137,0,0,0-1.114-.906c-.877,0-1.315.759-1.315,1.7,0,1.016.514,1.653,1.3,1.653a1.122,1.122,0,0,0,1.114-.894,2.367,2.367,0,0,0,.037-.429Z"
														transform="translate(-312.543 -27.22)"
														fill="#fff"
													></path>
												</g>
												<path
													className="group-hover:fill"
													id="Subtraction_2"
													data-name="Subtraction 2"
													d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
													transform="translate(168 13)"
													fill="#e96500"
												></path>
											</g>
										</svg>
									</>
								) : (
									<>
										<svg
											height="35"
											width="30.237"
											viewBox="0 0 30.237 35"
											xmlns="http://www.w3.org/2000/svg"
											className="ml-0 object-contain object-center"
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
									</>
								)}
							</span>
						</span>
					</Link>
				</div>
			</motion.div>
		</>
	);
};

export default LinkedInCta;
