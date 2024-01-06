// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTA} from "@/types/components/index";
import {initial, stagger} from "../animations/animations";

// Components
import Title from "./Elements/Title";
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const CTA: FC<ICTA> = ({title, paragraph, buttonLink, backgroundImage}) => {
	return (
		<>
			<div
				className="px-4 py-10 bg-center bg-no-repeat bg-cover lg:px-0"
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
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-col items-center justify-between gap-10 px-0 lg:px-4 lg:flex-row"
					>
						<div className="flex flex-col justify-between gap-4">
							<Title
								content={title}
								tailwindStyling="mb-4 max-w-xl text-center font-semibold leading-tight lg:text-left text-4xl lg:text-5xl text-white"
							/>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-lg text-white leading-[1.75rem] text-base sm:text-paragraph text-center lg:text-left"
							/>
						</div>
						<Link
							href={buttonLink?.url}
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
		</>
	);
};

export default CTA;
