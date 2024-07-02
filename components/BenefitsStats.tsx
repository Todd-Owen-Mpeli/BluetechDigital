// Imports
import fadeInUp, {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IBenefitsStats} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const BenefitsStats: FC<IBenefitsStats> = ({
	title,
	subtitle,
	paragraph,
	benefitsGrid,
}) => {
	return (
		<>
			<div
				className="py-10 lg:py-0 my-8 lg:my-16 bg-white bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `url("/svg/background/layered-steps-haikei-multi-colour.svg")`,
				}}
			>
				<div className="lg:container px-0 mx-auto flex flex-col lg:flex-row gap-6 lg:gap-4 xl:gap-32">
					<div className="py-10 px-4 lg:px-8 xl:px-0 bg-blue-default lg:bg-blue-darkerTwo/[0] flex flex-col items-center w-full lg:w-[45%] xl:w-[35%]">
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-center text-base text-yellow-two"
						>
							{subtitle}
						</motion.h4>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-2 max-w-xl mx-auto xl:mx-0 text-white text-center lg:text-left font-bold text-xl lg:text-3xl"
						>
							{title}
						</motion.h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="lg:max-w-3xl mx-auto text-white leading-[1.75rem] text-base lg:text-paragraph text-center lg:text-left"
						/>
					</div>
					<div className="py-10 px-6 md:px-8 xl:pl-28 max-w-6xl mx-auto bg-white w-full lg:w-[55%] xl:w-[65%] grid grid-cols-2 md:grid-cols-2 gap-4 lg:gap-0 items-center justify-start md:justify-center">
						{benefitsGrid?.length > 0 ? (
							benefitsGrid?.map((item: any, index: number) => (
								<Fragment key={index}>
									<motion.div
										custom={index}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="flex items-center h-fit"
									>
										<span>
											<svg
												version="1.1"
												fill="#09275e"
												viewBox="0 0 32 32"
												className="block mr-5 w-4 h-4 md:w-7 md:h-7"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
												<g
													id="SVGRepo_tracerCarrier"
													strokeLinecap="round"
													strokeLinejoin="round"
												></g>
												<g id="SVGRepo_iconCarrier">
													<path d="M28.998 8.531l-2.134-2.134c-0.394-0.393-1.030-0.393-1.423 0l-12.795 12.795-6.086-6.13c-0.393-0.393-1.029-0.393-1.423 0l-2.134 2.134c-0.393 0.394-0.393 1.030 0 1.423l8.924 8.984c0.393 0.393 1.030 0.393 1.423 0l15.648-15.649c0.393-0.392 0.393-1.030 0-1.423z"></path>{" "}
												</g>
											</svg>
										</span>
										<Paragraph
											content={item?.text}
											tailwindStyling="text-black text-tiny xl:text-base text-left"
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default BenefitsStats;
