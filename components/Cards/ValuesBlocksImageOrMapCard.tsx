// Imports
import {FC} from "react";
import Image from "next/image";
import {IValuesBlocksImageOrMapCard} from "@/types/components";

const ValuesBlocksImageOrMapCard: FC<IValuesBlocksImageOrMapCard> = ({
	image,
	googleMap,
	displayImageOrMap,
}) => {
	return (
		<>
			{displayImageOrMap === "Image" ? (
				<>
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
				</>
			) : displayImageOrMap === "Map" ? (
				<>
					<iframe
						width={600}
						height={450}
						loading="lazy"
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
