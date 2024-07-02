"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Error: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<section
			className="relative h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
			style={{
				backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.10),rgba(0, 0, 0, 0.10)),url("${globalContext?.themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl}")`,
			}}
		>
			<div className="relative z-50 px-10 my-auto overflow-hidden py-44">
				<div className="lg:container p-0 mx-auto">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="lg:container relative flex flex-col items-baseline justify-center px-4 m-auto"
					>
						<div className="max-w-3xl mx-auto">
							<motion.h1
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="flex flex-col sm:block text-center mb-3 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[2rem] sm:leading-[3rem] lg:leading-[4rem]"
							>
								{globalContext?.themesOptionsContent?.errorPageContent?.title}
							</motion.h1>
						</div>
						<div className="max-w-xl mx-auto">
							<Paragraph
								content={
									globalContext?.themesOptionsContent?.errorPageContent
										?.paragraph
								}
								tailwindStyling="mb-6 py-6 text-white leading-[1.75rem] text-base sm:text-medium text-center"
							/>
						</div>
					</motion.div>
					<div className="flex flex-col items-center justify-center mx-auto md:max-w-max">
						<motion.button
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							type="button"
						>
							<Link
								href={`${globalContext?.themesOptionsContent?.errorPageContent?.buttonLink?.url}`}
								aria-label={`${globalContext?.themesOptionsContent?.errorPageContent?.buttonLink?.title}`}
								target={
									globalContext?.themesOptionsContent?.errorPageContent
										?.buttonLink?.target
								}
								className={
									globalContext?.themesOptionsContent?.errorPageContent
										?.buttonLink?.url
										? "block"
										: "hidden"
								}
							>
								<div className="bg-accent-default hover:bg-primary-three py-4 px-10 transition-all duration-500 ease-in-out font-aspektaMain text-white font-extrabold uppercase text-left text-lg">
									{
										globalContext?.themesOptionsContent?.errorPageContent
											?.buttonLink?.title
									}
								</div>
							</Link>
						</motion.button>
					</div>
				</div>
			</div>
			<div className="absolute top-0 h-screen bottom-0 left-0 w-full opacity-90 bg-gradient-to-b from-pureBlack from-5% via-pureBlack via-10% to-pureBlack- to-100%" />
		</section>
	);
};

export default Error;
