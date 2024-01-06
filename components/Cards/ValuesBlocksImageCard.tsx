// Imports
import {
	slideInRightFinish,
	slideInLeftInitial,
} from "../../animations/animations";
import {FC} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {IValuesBlocksImageCard} from "@/types/components";

const ValuesBlocksImageCard: FC<IValuesBlocksImageCard> = ({image}) => {
	return (
		<>
			<motion.div
				initial={slideInLeftInitial}
				whileInView={slideInRightFinish}
				viewport={{once: true}}
			>
				<Image
					alt={image?.altText}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
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
