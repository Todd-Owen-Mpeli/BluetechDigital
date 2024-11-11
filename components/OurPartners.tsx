// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurPartners} from "@/types/components/index";

// Styling
import styles from "@/styles/components/OurPartners.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const OurPartners: FC<IOurPartners> = ({
	title,
	subtitle,
	paragraph,
	imageGrid,
}) => {
	return (
		<>
			<div className={styles.ourPartners}>
				<div className={styles.container}>
					<div className={styles.topContent}>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.subtitle}
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.title}
						>
							{title}
						</motion.h2>
						<Paragraph content={paragraph} className={styles.paragraph} />
					</div>
					<div className={styles.bottomContent}>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								styles.imageGrid +
								` ${
									imageGrid?.length <= 4 ? "lg:grid-cols-4" : "lg:grid-cols-6"
								}`
							}
						>
							{imageGrid?.length > 0 ? (
								imageGrid.map((item: any, index: number) => (
									<Fragment key={index}>
										<motion.div
											custom={index}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<Image
												alt={item?.image?.altText}
												src={item?.image?.sourceUrl}
												width={
													item?.image?.mediaDetails?.width
														? item?.image?.mediaDetails?.width
														: 1000
												}
												height={
													item?.image?.mediaDetails?.height
														? item?.image?.mediaDetails?.height
														: 1000
												}
												className={
													item?.image?.sourceUrl ? styles.image : `hidden`
												}
											/>
										</motion.div>
									</Fragment>
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

export default OurPartners;
