// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IFeaturesGrid} from "@/types/components";
import {slideInRightFinish, slideInRightInitial} from "@/animations/animations";

const FeaturesGridImageCard: FC<IFeaturesGrid.IImageCard> = ({
	backgroundImage,
}) => {
	return (
		<>
			<motion.div
				viewport={{once: true}}
				initial={slideInRightInitial}
				whileInView={slideInRightFinish}
				className={
					backgroundImage?.sourceUrl
						? `w-full p-3 md:w-1/2 min-h-[325px] lg:min-h-[450px]`
						: `hidden`
				}
			>
				<div
					className="h-full p-8 bg-center bg-no-repeat bg-cover rounded-sm bg-lightGrey"
					style={{
						clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
						backgroundImage: `url("${backgroundImage?.sourceUrl}")`,
					}}
				/>
			</motion.div>
		</>
	);
};

export default FeaturesGridImageCard;
