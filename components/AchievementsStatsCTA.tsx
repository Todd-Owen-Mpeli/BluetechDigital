// Imports
import {
	fadeIn,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAchievementsStatsCTA} from "@/types/components/index";
// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const AchievementsStatsCta: FC<IAchievementsStatsCTA> = ({
	title,
	paragraph,
	buttonLink,
	achievements,
	backgroundImage,
	displayAchievementsContent,
}) => {
	return (
		<>
			<div className="flex flex-col lg:mt-24">
				<div
					className={`bg-white relative ${
						displayAchievementsContent ? "block" : "hidden"
					}`}
				>
					<motion.div
						initial={initialTwo}
						whileInView={stagger}
						viewport={{once: true}}
						className={`${
							achievements?.length >= 2
								? "grid grid-cols-1 md:grid-cols-2 lg:w-[55%] 2xl:w-[60%]"
								: "flex lg:w-[35%] 2xl:w-[40%]"
						} px-4 py-16 lg:px-0 gap-8 w-full lg:absolute lg:top-[-200px] xl:top-[-150px] right-0 flex-row items-center justify-end`}
					>
						{achievements?.length > 0 ? (
							achievements?.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<motion.div
										initial={slideInRightInitial}
										whileInView={slideInRightFinish}
										viewport={{once: true}}
										className="w-full h-[500px] flex flex-col justify-end xl:shadow-2xl relative xl:p-8 bg-center bg-no-repeat bg-cover"
										style={{
											backgroundImage: `linear-gradient(
											0deg,
											rgba(0, 0, 0, 0.05),
											rgba(0, 0, 0, 0.05),
											rgba(0, 0, 0, 0.05)
										),url("${item?.card?.image?.sourceUrl}")`,
										}}
									>
										<div
											className={`p-6 w-[80%] sm:w-[40%] md:w-[60%] lg:w-full xl:shadow-2xl xl:w-[55%] xl:bottom-[20px] xl:left-[20px] lg:absolute flex flex-col items-center justify-center sm:mih-[22vh] transition-all ease-in-out duration-500 ${
												keys === 0
													? "bg-green-Three"
													: keys === 1
													? "bg-green-Three"
													: "bg-green-default"
											}`}
										>
											<Image
												alt={item?.card?.icon?.altText}
												src={item?.card?.icon?.sourceUrl}
												width={item?.card?.icon?.mediaDetails?.width}
												height={item?.card?.icon?.mediaDetails?.height}
												className={
													item?.card?.icon?.sourceUrl
														? `block object-contain object-center w-full h-[50px] lg:h-[60px] mb-6`
														: `hidden`
												}
											/>

											<motion.h4
												initial={initialTwo}
												whileInView={fadeIn}
												viewport={{once: true}}
												className="text-white font-extrabold text-xl lg:text-4xl py-4 2xl:text-5xl text-center tracking-[0.10rem]"
											>
												{item?.card?.title}
											</motion.h4>
											<Paragraph
												content={item?.card?.paragraph}
												tailwindStyling="w-full lg:max-w-[40rem] mt-4 text-center text-white text-base"
											/>
										</div>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
				<div
					className="px-4 py-12 bg-center bg-no-repeat bg-cover lg:px-0 min-h-[400px]"
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.50),
							rgba(0, 0, 0, 0.85),
							rgba(0, 0, 0, 0.95)
						),url("${backgroundImage}")`,
					}}
				>
					<div className="container p-0 mx-auto">
						<div className="flex flex-col items-center justify-between gap-10 px-0 lg:px-4 lg:flex-row">
							<motion.div
								initial={initialTwo}
								whileInView={stagger}
								viewport={{once: true}}
								className={`w-full flex flex-col items-center justify-between gap-4 ${
									displayAchievementsContent && achievements?.length >= 2
										? "lg:w-[45%] lg:items-start"
										: displayAchievementsContent && achievements?.length <= 1
										? "lg:w-[55%] lg:items-start"
										: "lg:w-full lg:flex-row lg:items-center"
								}`}
							>
								<div>
									<Title
										content={title}
										tailwindStyling="mb-4 max-w-xl mx-auto lg:mx-0 text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl text-white"
									/>
									<Paragraph
										content={paragraph}
										tailwindStyling={`${
											achievements?.length >= 2
												? "max-w-none lg:max-w-sm 2xl:max-w-lg"
												: "max-w-none lg:max-w-6xl"
										} text-white leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left`}
									/>
								</div>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									className={buttonLink?.url ? "block" : "hidden"}
								>
									<ButtonBorderSliced
										fullWidth={false}
										title={buttonLink?.title}
										tailwindColor="white"
									/>
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AchievementsStatsCta;
