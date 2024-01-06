// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import VideoHeroWrapper from "./Elements/VideoHeroWrapper";

const Hero: FC<IHero> = ({
	title,
	paragraph,
	buttonLink,
	displayVideo,
	buttonLinkTwo,
	servicesLinks,
	backgroundImage,
	backgroundVideoUrl,
}) => {
	return (
		<>
			<div className={styles.hero}>
				<div
					className="relative z-50 flex flex-col h-screen bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.45),
							rgba(0, 0, 0, 0.55),
							rgba(0, 0, 0, 0.65)
						),url("${backgroundImage}")`,
					}}
				>
					{/* Background Video */}
					<div className="absolute top-0 bottom-0 left-0 w-full h-full overflow-hidden">
						<VideoHeroWrapper>
							{displayVideo ? backgroundVideoUrl : ""}
						</VideoHeroWrapper>
						<div
							className={
								displayVideo
									? "absolute top-0 h-screen bottom-0 left-0 w-full opacity-70 bg-gradient-to-b from-pureBlack from-5% via-pureBlack via-10% to-pureBlack to-100%"
									: ""
							}
						/>
					</div>
					<div className="container relative flex flex-col items-center sm:items-baseline justify-center py-20 px-4 m-auto text-center sm:text-left">
						<div className="max-w-3xl">
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="flex flex-col sm:block mb-3 text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[3rem] lg:leading-[4rem]"
							>
								{title}
							</motion.h1>
						</div>
						<div className="max-w-2xl">
							<Paragraph
								content={paragraph}
								tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] text-base sm:text-lg text-center sm:text-left"
							/>
							<motion.div
								initial={initial}
								whileInView={stagger}
								viewport={{once: true}}
								className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start"
							>
								<Link href={buttonLink?.url} target={buttonLink?.target}>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											buttonLink?.url
												? `block px-6 py-3 font-semibold tracking-widest text-base w-fit sm:mx-0 border-2 border-solid border-white hover:bg-blue-default hover:border-blue-default transition-all ease-in-out duration-500 text-white`
												: `hidden`
										}
									>
										{buttonLink?.title}
									</motion.button>
								</Link>
								<Link
									href={buttonLinkTwo?.url ? buttonLinkTwo?.url : `/`}
									target={buttonLinkTwo?.target}
								>
									<motion.button
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className={
											buttonLink?.url
												? `block px-6 py-3 font-semibold tracking-widest text-base text-white transition duration-200 w-fit sm:mx-0 hover:bg-blue-darker bg-blue-Two`
												: `hidden`
										}
									>
										{buttonLinkTwo?.title}
									</motion.button>
								</Link>
							</motion.div>
						</div>
					</div>
					<div className="relative flex flex-row py-4 justify-start items-center lg:justify-between">
						<motion.div
							initial={initialTwo}
							whileInView={stagger}
							viewport={{once: true}}
							className="hidden sm:grid grid-cols-4 w-full lg:w-[70%] xl:w-[60%] 2xl:w-[55%] absolute mb-[180px] lg:mb-[0px] right-0 flex-row items-center justify-end"
						>
							{servicesLinks?.length > 0 ? (
								servicesLinks?.map((item: any, keys: any) => (
									<Link
										key={keys}
										href={item?.buttonLink?.url}
										target={item?.buttonLink?.target}
									>
										<button
											className={`p-2 hover:bg-blue-Two w-full sm:min-h-[24vh] lg:min-h-[22vh] transition-all ease-in-out duration-500 ${
												keys === 0
													? "bg-blue-default"
													: keys === 1
													? "bg-blue-dark"
													: keys === 2
													? "bg-blue-darker"
													: keys === 3
													? "bg-blue-darkerTwo"
													: "bg-blue-default"
											}`}
										>
											<Image
												alt={item?.icon?.altText}
												src={item?.icon?.sourceUrl}
												width={item?.icon?.mediaDetails?.width}
												height={item?.icon?.mediaDetails?.height}
												className={
													item?.icon?.sourceUrl
														? `block object-contain object-center w-full h-[50px] lg:h-[60px] mb-6`
														: `hidden`
												}
											/>

											<span className="text-white font-semibold text-base leading-[1.5rem] text-center tracking-[0.10rem]">
												{item?.buttonLink?.title}
											</span>
										</button>
									</Link>
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

export default Hero;
