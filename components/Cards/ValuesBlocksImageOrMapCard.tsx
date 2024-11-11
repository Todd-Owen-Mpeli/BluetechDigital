// Imports
import {FC} from "react";
import Image from "next/image";
import {IValuesBlocks} from "@/types/components";

const ValuesBlocksImageOrMapCard: FC<IValuesBlocks.IImageOrMapCard> = ({
	image,
	googleMap,
	displayImageOrMap,
}) => {
	return (
		<>
			{displayImageOrMap === "Image" ? (
				<>
					<Image
						alt={`${image?.altText}`}
						src={image?.sourceUrl}
						width={
							image?.mediaDetails?.width ? image?.mediaDetails?.width : 1000
						}
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
				</>
			) : displayImageOrMap === "Map" ? (
				<>
					<iframe
						width={600}
						height={450}
						loading="lazy"
						title="Google Map"
						src={`${googleMap}`}
						allowFullScreen={true}
						referrerPolicy="no-referrer-when-downgrade"
						className={
							googleMap
								? `block object-cover object-center w-full h-[300px] sm:h-[500px]`
								: `hidden`
						}
						style={{
							clipPath: `polygon(0% 0%, 100% 0%, 94.9% 88.5%, 0% 97.8%)`,
						}}
					></iframe>
				</>
			) : (
				<></>
			)}
		</>
	);
};

export default ValuesBlocksImageOrMapCard;
