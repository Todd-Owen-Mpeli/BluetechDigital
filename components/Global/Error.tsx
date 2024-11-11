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

// Styling
import styles from "@/styles/components/Elements/Error.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Error: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<section
			className={styles.error}
			style={{
				backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.10),rgba(0, 0, 0, 0.10)),url("${globalContext?.themesOptionsContent?.errorPageContent?.backgroundImage?.sourceUrl}")`,
			}}
		>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.content}
					>
						<motion.h1
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.title}
						>
							{globalContext?.themesOptionsContent?.errorPageContent?.title}
						</motion.h1>
						<Paragraph
							className={styles.paragraph}
							content={
								globalContext?.themesOptionsContent?.errorPageContent?.paragraph
							}
						/>
						<motion.button
							type="button"
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.button}
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
								<div className={styles.link}>
									{
										globalContext?.themesOptionsContent?.errorPageContent
											?.buttonLink?.title
									}
								</div>
							</Link>
						</motion.button>
					</motion.div>
				</div>
			</div>
			<div className={styles.fadeDiv} />
		</section>
	);
};

export default Error;
