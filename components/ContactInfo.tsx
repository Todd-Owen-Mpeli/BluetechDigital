"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IContact} from "@/types/components";
import {useGlobalContext} from "@/context/global";

// Styling
import styles from "@/styles/components/Contact.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const ContactInfo: FC<IContact.IInfo> = ({title, paragraph}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className={styles.contactInfo}>
				<div className={styles.topSection}>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={styles.title}
					>
						{title}
					</motion.h2>
					<Paragraph content={paragraph} className={styles.paragraph} />
				</div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className={styles.bottomSection}
				>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.top}
					>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.addressTitle}
						>
							Address
						</motion.h2>
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className={styles.content}
						>
							<div className={styles.svgWrapper}>
								<svg
									version="1.1"
									width="800px"
									height="800px"
									viewBox="-7 -7 46 46"
									className={styles.svg}
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
								</svg>
							</div>
							<Paragraph
								className={styles.address}
								content={globalContext?.themesOptionsContent?.address}
							/>
						</motion.div>
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={styles.bottom}
					>
						<motion.h2
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={styles.contactsTitle}
						>
							Contacts
						</motion.h2>
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className={styles.content}
						>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.email
										? styles.emailWrapper
										: "hidden"
								}
							>
								<div className={styles.svgWrapper}>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										className={styles.svg}
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
								<Link
									target="_self"
									className={styles.email}
									href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									aria-label={`${globalContext?.themesOptionsContent?.email}`}
								>
									{globalContext?.themesOptionsContent?.email}
								</Link>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className={
									globalContext?.themesOptionsContent?.emailTwo
										? "flex items-center justify-center gap-2"
										: "hidden"
								}
							>
								<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-two sm:mr-3">
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</div>
								<Link
									target="_self"
									href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
									aria-label={`${globalContext?.themesOptionsContent?.emailTwo}`}
									className="font-medium tracking-wide text-black hover:text-yellow-two"
								>
									{globalContext?.themesOptionsContent?.emailTwo}
								</Link>
							</motion.div>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default ContactInfo;
