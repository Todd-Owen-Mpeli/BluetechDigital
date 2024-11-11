"use client";

// Imports
import {initial, stagger, fadeInUp} from "@/animations/animations";
import Link from "next/link";
import React, {FC} from "react";
import {motion} from "framer-motion";
import {IContact} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import FormikForm from "@/components/Elements/FormikForm";

const ContactForm: FC<IContact.IForm> = ({title, formTitle, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className="px-4 py-10 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url("/svg/background/layeblue-peaks-haikei-white-lightgrey.svg")`,
				}}
			>
				<div className="lg:container mx-auto flex flex-col lg:flex-row items-baseline ">
					<div className="w-full lg:w-1/2 sm:p-6 flex flex-col">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="mb-12"
						>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto xl:mx-0 text-black text-center lg:text-left font-semibold leading-tight text-xl lg:text-3xl"
							>
								{title}
							</motion.h2>

							<Paragraph
								content={paragraph}
								className="max-w-xl mx-auto xl:mx-0 text-black text-base text-center lg:text-left"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								globalContext?.themesOptionsContent?.phoneNumber
									? "flex mb-6 items-center"
									: "hidden"
							}
						>
							<div className="hidden sm:flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 h-10 rounded-full bg-yellow-default">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									className="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
											stroke="#ffffff"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>{" "}
									</g>
								</svg>
							</div>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-xl mx-auto sm:mx-0"
							>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 text-black text-center sm:text-left font-semibold text-lg lg:text-xl"
								>
									Phone
								</motion.h2>
								<Link
									className="block text-tiny sm:text-base text-black text-center sm:text-left hover:text-blue-default"
									target="_self"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
									aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
								>
									{globalContext?.themesOptionsContent?.phoneNumber}
								</Link>
								<Link
									className="block text-tiny sm:text-base text-black text-center sm:text-left hover:text-blue-default"
									target="_self"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
									aria-label={`${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
								>
									{globalContext?.themesOptionsContent?.phoneNumberTwo}
								</Link>
							</motion.div>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								globalContext?.themesOptionsContent?.email
									? "flex mb-6 items-center"
									: "hidden"
							}
						>
							<div className="hidden sm:flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 h-10 rounded-full bg-yellow-default">
								<svg
									width="20"
									height="20"
									fill="none"
									viewBox="0 0 20 20"
									className="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
										stroke="#ffffff"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</div>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-xl mx-auto sm:mx-0"
							>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 text-black text-center sm:text-left font-semibold text-lg lg:text-xl"
								>
									Email
								</motion.h2>
								<Link
									className={
										globalContext?.themesOptionsContent?.email
											? "block text-tiny sm:text-base text-black text-center sm:text-left hover:text-blue-default"
											: "hidden"
									}
									target="_self"
									href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									aria-label={`${globalContext?.themesOptionsContent?.email}`}
								>
									{globalContext?.themesOptionsContent?.email}
								</Link>
								<Link
									className={
										globalContext?.themesOptionsContent?.email
											? "block text-tiny sm:text-base text-black text-center sm:text-left hover:text-blue-default"
											: "hidden"
									}
									target="_self"
									href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
									aria-label={`${globalContext?.themesOptionsContent?.emailTwo}`}
								>
									{globalContext?.themesOptionsContent?.emailTwo}
								</Link>
							</motion.div>
						</motion.div>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={
								globalContext?.themesOptionsContent?.address
									? "flex items-center"
									: "hidden"
							}
						>
							<div className="hidden sm:flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-10 h-10  rounded-full bg-yellow-default">
								<svg
									fill="#000000"
									className="w-5 h-5"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<path
											fill="var(--ci-primary-color, #ffffff)"
											d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z"
										></path>
										<path
											fill="var(--ci-primary-color, #ffffff)"
											d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z"
										></path>
									</g>
								</svg>
							</div>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-xl mx-auto sm:mx-0"
							>
								<motion.h2
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="mb-2 text-black text-center sm:text-left font-semibold text-lg lg:text-xl"
								>
									Address
								</motion.h2>
								<Paragraph
									content={globalContext?.themesOptionsContent?.address}
									className="max-w-xl mx-auto xl:mx-0 text-tiny sm:text-base text-black text-center sm:text-left"
								/>
							</motion.div>
						</motion.div>
					</div>
					<FormikForm formTitle={formTitle} />
				</div>
			</div>
		</>
	);
};

export default ContactForm;
