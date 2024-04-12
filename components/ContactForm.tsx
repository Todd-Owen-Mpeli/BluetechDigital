"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import Link from "next/link";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import {IContactForm} from "@/types/components";
import {useGlobalContext} from "@/context/global";
import {sendContactForm} from "@/lib/contactForm";
import React, {useState, FC, Fragment} from "react";
import {useFormik, Formik, Field, Form} from "formik";

// Styling
import styles from "@/styles/components/ContactForm.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const ContactForm: FC<IContactForm> = ({title, formTitle, paragraph}) => {
	const router = useRouter();
	const globalContext = useGlobalContext();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which index are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.selectedServices) {
			errors.selectedServices = "Required*";
		} else if (values?.selectedServices.length <= 0) {
			errors.selectedServices = "Please inform us about the topic.";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			selectedServices: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendContactForm(values);
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					router.reload();
				}, 3000);
			} catch (error) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<>
			<div
				className="px-4 py-10 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url("/svg/background/layered-peaks-haikei-lightgrey-grey-one.svg")`,
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
								tailwindStyling="max-w-xl mx-auto xl:mx-0 text-black text-base text-center lg:text-left"
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
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
									aria-label={`${globalContext?.themesOptionsContent?.phoneNumber}`}
								>
									{globalContext?.themesOptionsContent?.phoneNumber}
								</Link>
								<Link
									className="block text-tiny sm:text-base text-black text-center sm:text-left hover:text-blue-default"
									href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
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
									href={`mailto:${globalContext?.themesOptionsContent?.email}`}
								>
									{globalContext?.themesOptionsContent?.email}
								</Link>
								<Link
									className={
										globalContext?.themesOptionsContent?.email
											? "block text-tiny sm:text-base text-black text-center sm:text-left hover:text-blue-default"
											: "hidden"
									}
									href={`mailto:${globalContext?.themesOptionsContent?.emailTwo}`}
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
									tailwindStyling="max-w-xl mx-auto xl:mx-0 text-tiny sm:text-base text-black text-center sm:text-left"
								/>
							</motion.div>
						</motion.div>
					</div>
					<Formik
						onSubmit={formik?.onSubmit}
						initialValues={formik?.initialValues}
						className="w-full lg:w-1/2"
					>
						<Form className="lg:container mx-auto py-10 md:max-w-xl">
							{loading ? (
								<motion.h2
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-lg font-semibold mb-8 text-center text-blue-default"
								>
									Sending Message...
								</motion.h2>
							) : messageSent ? (
								<motion.h2
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-lg font-semibold mb-8 text-center text-yellow-default"
								>
									Message Sent!
								</motion.h2>
							) : errorMessage ? (
								<motion.h2
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-lg font-semibold mb-8 text-center text-[#e20031]"
								>
									Error Message: Something went wrong with sending your message.
									Please try again.
								</motion.h2>
							) : (
								<motion.h2
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="my-3 max-w-xl mx-auto xl:mx-0 mb-8 text-black text-center font-semibold text-xl lg:text-3xl"
								>
									{formTitle}
								</motion.h2>
							)}

							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex flex-col gap-4"
							>
								<div className="flex flex-col sm:flex-row gap-4">
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.firstName && formik?.errors?.firstName ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.firstName}
												</p>
											</div>
										) : null}
										<Field
											id="firstName"
											name="firstName"
											placeholder="First Name"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.firstName}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.lastName && formik?.errors?.lastName ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.lastName}
												</p>
											</div>
										) : null}
										<Field
											id="lastName"
											name="lastName"
											placeholder="Last Name"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.lastName}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
								</div>
								<div className="flex flex-col sm:flex-row gap-4">
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.phoneNumber &&
										formik?.errors?.phoneNumber ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.phoneNumber}
												</p>
											</div>
										) : null}
										<Field
											id="phoneNumber"
											name="phoneNumber"
											type="number"
											placeholder="Phone Number"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.phoneNumber}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
									<motion.div
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="w-full"
									>
										{formik?.touched?.subject && formik?.errors?.subject ? (
											<div>
												<p className="py-1 text-left text-tiny text-blue-darker ">
													{formik?.errors?.subject}
												</p>
											</div>
										) : null}
										<Field
											id="subject"
											name="subject"
											type="text"
											placeholder="Subject"
											onBlur={formik?.handleBlur}
											onChange={formik?.handleChange}
											value={formik?.values?.subject}
											className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
										/>
									</motion.div>
								</div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="w-full"
								>
									{formik?.touched?.email && formik?.errors?.email ? (
										<div>
											<p className="py-1 text-left text-tiny text-blue-darker ">
												{formik?.errors?.email}
											</p>
										</div>
									) : null}
									<Field
										id="email"
										name="email"
										type="email"
										placeholder="Email Address"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.email}
										className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="w-full"
								>
									{formik?.touched?.selectedServices &&
									formik?.errors?.selectedServices ? (
										<div>
											<p className="py-1 text-left text-tiny text-blue-darker ">
												{formik?.errors?.selectedServices}
											</p>
										</div>
									) : null}
									<Field
										as="select"
										id="selectedServices"
										name="selectedServices"
										placeholder="Pick a Service"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.selectedServices}
										className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker focus:ring-[1px] focus:ring-blue-darker"
									>
										{globalContext?.ourServicesLinks?.length > 0 ? (
											globalContext?.ourServicesLinks?.map(
												(item: any, index: number) => (
													<Fragment key={index}>
														<option value={item?.node?.label}>
															{item?.node?.label}
														</option>
													</Fragment>
												)
											)
										) : (
											<></>
										)}
									</Field>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
								>
									{formik?.touched?.message && formik?.errors?.message ? (
										<div>
											<p className="py-1 text-left text-tiny text-blue-darker ">
												{formik?.errors?.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik?.handleBlur}
										onChange={formik?.handleChange}
										value={formik?.values?.message}
										className="p-4 w-full h-48  text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-darkGrey active:border-blue-darker focus:border-blue-darker resize-none focus:ring-[1px] focus:ring-blue-darker"
									/>
								</motion.div>
								<motion.div
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={
										formik?.touched?.firstName ||
										formik?.touched?.lastName ||
										formik?.touched?.email
											? "block"
											: "hidden"
									}
								>
									<ReCAPTCHA
										sitekey={`6LcfDlApAAAAAMj94407sxL1Q6ZxY54KQx60qifF`}
										onChange={handleReCaptchaChange}
									/>
								</motion.div>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									onClick={onFormSubmit}
									disabled={
										!formik?.values?.firstName ||
										!formik?.values?.lastName ||
										!formik?.values?.email ||
										!formik?.values?.phoneNumber ||
										!formik?.values?.selectedServices ||
										!formik?.values?.subject ||
										!formik?.values?.message ||
										reCaptchaResult === null ||
										reCaptchaResult === undefined
									}
									className="w-full text-white disabled:bg-opacity-20 disabled:cursor-not-allowed"
									type="submit"
								>
									<span
										className={
											messageSent
												? `${styles.messageSent}`
												: `${styles.submitButton}`
										}
									>
										<h3 className="tracking-widest text-white uppercase text-sm">
											{loading
												? "Sending Message..."
												: messageSent
												? "Message Sent!"
												: errorMessage
												? "Sending Error!"
												: "Send Message"}
										</h3>
									</span>
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
