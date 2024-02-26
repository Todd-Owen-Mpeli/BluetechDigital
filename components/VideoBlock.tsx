// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInLeftInitial,
	slideInRightFinish,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IVideoBlock} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";
import VideoWrapper from "./Elements/VideoWrapper";
import YoutubeButtonBorderSliced from "./Elements/YoutubeButtonBorderSliced";

const VideoBlock: FC<IVideoBlock> = ({
	title,
	video,
	subtitle,
	paragraph,
	buttonLink,
	displayVideo,
	highlightText,
	displayYoutubeIcon,
	videoBackgroundImage,
}) => {
	return (
		<>
			<div id="VideoBlock" className="py-10 px-4 bg-lightGreyTwo">
				<div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-x-4 xl:gap-x-16">
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className={
							title && highlightText && paragraph
								? "max-w-2xl mx-auto text-center lg:max-w-5xl w-full lg:w-[50%] xl:w-[35%]"
								: "hidden"
						}
					>
						<div className="max-w-2xl mx-auto">
							<motion.h4
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="text-center lg:text-left text-paragraph text-yellow-two"
							>
								{subtitle}
							</motion.h4>
							<motion.h2
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="leading-[2.5rem] my-2 max-w-2xl mx-auto text-center lg:text-left font-semibold text-lg lg:text-3xl"
							>
								{title}
								<span className="p-2 ml-3 bg-blue-two text-white">
									{highlightText}
								</span>
							</motion.h2>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-center lg:text-left text-black text-paragraph"
						/>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={
								buttonLink?.url
									? "flex mt-6 lg:mt-0 items-center justify-center lg:justify-start"
									: "hidden"
							}
						>
							<YoutubeButtonBorderSliced
								fullWidth={true}
								title={buttonLink?.title}
								displayYoutubeIcon={displayYoutubeIcon}
							/>
						</Link>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className={`${
							displayVideo ? "h-fit" : "h-[300px] lg:h-[500px]"
						} bg-center bg-no-repeat bg-cover mt-6 lg:mt-0 w-full lg:w-[50%] xl:w-[65%]`}
						style={{
							backgroundImage: `url("${
								displayVideo ? "none" : videoBackgroundImage
							}")`,
						}}
					>
						{displayVideo ? <VideoWrapper>{video}</VideoWrapper> : <></>}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default VideoBlock;
