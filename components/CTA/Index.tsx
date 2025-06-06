// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import ButtonBorderSliced from "@/components/Elements/ButtonBorderSliced";

const CTA: FC<ICTA.IProps> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	return (
		<>
			<div className="flex flex-col-reverse lg:flex-row flex-wrap p-4 lg:p-10">
				<div className="w-full lg:w-5/12 p-4">
					<Link
						href={`${buttonLink?.url}`}
						aria-label={`${buttonLink?.title}`}
						target={`${buttonLink?.target ? buttonLink?.target : "_self"}`}
						className={buttonLink?.url ? "block group" : "hidden"}
					>
						<div className="relative overflow-hidden h-[325px] lg:h-[400px]">
							<Image
								alt={backgroundImage?.altText}
								src={backgroundImage?.sourceUrl}
								width={
									backgroundImage?.mediaDetails?.width
										? backgroundImage?.mediaDetails?.width
										: 1000
								}
								height={
									backgroundImage?.mediaDetails?.height
										? backgroundImage?.mediaDetails?.height
										: 1000
								}
								className={
									backgroundImage?.sourceUrl
										? `block absolute inset-0 w-full h-full object-cover transform lg:group-hover:scale-105 transition-all ease-in-out duration-500 object-center`
										: `hidden`
								}
							/>
						</div>
					</Link>
				</div>
				<div className="w-full lg:w-7/12 p-4">
					<div
						className="flex flex-col justify-between bg-blue-default h-full p-8 bg-cover bg-no-repeat bg-center"
						style={{
							backgroundImage: `url("/svg/background/stacked-waves-haikei-purple-two.svg")`,
						}}
					>
						<div className="max-w-3xl mx-auto lg:mx-0">
							<motion.h2
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="mb-4 text-center font-semibold leading-tight lg:text-left text-xl lg:text-3xl text-white"
							>
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								className="text-white leading-[1.75rem] text-paragraph text-center lg:text-left"
							/>
						</div>
						<Link
							href={`${buttonLink?.url}`}
							aria-label={`${buttonLink?.title}`}
							target={`${buttonLink?.target ? buttonLink?.target : "_self"}`}
							className={buttonLink?.url ? "block mx-auto lg:mx-0" : "hidden"}
						>
							<ButtonBorderSliced
								fullWidth={false}
								title={buttonLink?.title}
								tailwindColor="white"
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default CTA;
