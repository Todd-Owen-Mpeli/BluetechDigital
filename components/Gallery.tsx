// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IGallery} from "@/types/components";
import {initial, stagger} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Gallery.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const Gallery: FC<IGallery> = ({title, highlightText, paragraph, gallery}) => {
	return (
		<>
			<div className={styles.gallery}>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={title && highlightText ? styles.content : "hidden"}
				>
					<motion.h2
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
						<span className={styles.highlightText}>{highlightText}</span>
					</motion.h2>
					<Paragraph content={paragraph} className={styles.paragraph} />
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.galleryGrid}
				>
					{gallery?.length > 0 ? (
						gallery?.map((item: any, index: number) => (
							<Fragment key={index}>
								<>
									<Image
										alt={`${item?.altText}`}
										src={item?.sourceUrl}
										width={
											item?.mediaDetails?.width
												? item?.mediaDetails?.width
												: 1000
										}
										height={
											item?.mediaDetails?.height
												? item?.mediaDetails?.height
												: 1000
										}
										className={item?.sourceUrl ? styles.image : `hidden`}
									/>
								</>
							</Fragment>
						))
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default Gallery;
