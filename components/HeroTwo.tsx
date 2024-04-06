// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IHeroTwo} from "@/types/components/index";
import {fadeIn, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const HeroTwo: FC<IHeroTwo> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero}>
				<div
					className={`relative z-50 flex flex-col h-[60vh] lg:h-[50vh] bg-center bg-no-repeat bg-cover ${
						buttonLink?.url ? "h-[60vh] lg:h-[60vh]" : "h-[60vh] lg:h-[50vh]"
					}`}
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.45),
							rgba(0, 0, 0, 0.55),
							rgba(0, 0, 0, 0.65)
						),url("${backgroundImage?.sourceUrl}")`,
						clipPath: `polygon(0 0, 100% 0, 100% 91%, 64% 98%, 0 94%)`,
					}}
				>
					<div className="lg:container relative flex flex-col items-center lg:items-baseline justify-center py-20 px-4 m-auto sm:text-left">
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="max-w-3xl flex flex-col sm:block mb-3 text-center lg:text-left text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[3rem] lg:leading-[4rem]"
						>
							{title}
						</motion.h1>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-2xl py-6 text-white leading-[1.75rem] text-base sm:text-lg text-center lg:text-left"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={`${buttonLink?.target ? buttonLink?.target : "_self"}`}
							aria-label={`${buttonLink?.title}`}
							className={buttonLink?.url ? "block" : "hidden"}
						>
							<motion.button
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									buttonLink?.title
										? `flex items-center justify-center mx-auto lg:mx-0 group relative gap-3 px-6 py-3 tracking-widest text-base w-fit border-2 border-solid border-white hover:bg-white hover:border-white transition-all ease-in-out duration-500 text-white hover:text-black before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-white hover:before:bg-white after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-white hover:after:bg-white`
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
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroTwo;
