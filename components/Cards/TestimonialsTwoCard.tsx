// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITestimonialsTwoCard} from "@/types/components";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const TestimonialsTwoCard: FC<ITestimonialsTwoCard> = ({
	name,
	image,
	jobTitle,
	paragraph,
}) => {
	return (
		<>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="overflow-hidden p-3 max-w-md mx-auto"
			>
				<div
					className="p-6 bg-white border-solid border-[5px] border-lightGrey"
					style={{
						boxShadow: "0px 30px 2px -25px rgba(0,0,0,0.1)",
					}}
				>
					<div className="flex flex-wrap justify-between -m-2 mb-6">
						<div className="w-auto p-2">
							<div className="flex flex-wrap items-center -m-1.5">
								<div className="w-auto p-1.5">
									<Image
										alt={image?.altText}
										src={image?.sourceUrl}
										width={image?.mediaDetails?.width}
										height={image?.mediaDetails?.height}
										className={
											image?.sourceUrl
												? `object-cover object-center w-14 h-14 rounded-full`
												: `hidden`
										}
									/>
								</div>
								<div className="w-auto p-1.5">
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="block text-base font-medium text-black tracking-tight"
									>
										{name}
									</motion.h3>
									<span className="block text-sm font-medium text-black tracking-tight">
										{jobTitle}
									</span>
								</div>
							</div>
						</div>
						<div>
							<Image
								width={500}
								height={500}
								alt="BluetechDigital Logo"
								src="/svg/logo/BluetechDigital-Logo-color.svg"
								className="object-contain object-center w-full h-10"
							/>
						</div>
					</div>
					<Paragraph
						content={
							paragraph?.length < 150
								? paragraph
								: paragraph.substring(0, 175) + "..."
						}
						tailwindStyling="tracking-tight text-black text-base text-left"
					/>
				</div>
			</motion.div>
		</>
	);
};

export default TestimonialsTwoCard;
