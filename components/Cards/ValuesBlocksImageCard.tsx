// Imports
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IValuesBlocks} from "@/types/components";
import {slideInRightFinish, slideInLeftInitial} from "@/animations/animations";

const ValuesBlocksImageCard: FC<IValuesBlocks.IImageCard> = ({image}) => {
	return (
		<>
			<motion.div
				initial={slideInLeftInitial}
				whileInView={slideInRightFinish}
				viewport={{once: true}}
			>
				<Image
					alt={`${image?.altText}`}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000}
					height={
						image?.mediaDetails?.height ? image?.mediaDetails?.height : 1000
					}
					className={
						image?.sourceUrl
							? `block object-cover object-center w-full h-[300px] sm:h-[500px]`
							: `hidden`
					}
					style={{
						clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
					}}
				/>
			</motion.div>
		</>
	);
};

export default ValuesBlocksImageCard;
