"use client";

// Imports
import Image from "next/image";
import React, {FC} from "react";
import {useGlobalContext} from "@/context/global";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "../styles/components/Testimonials.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const TestimonialsSlider: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.testimonialsSlider +
					` px-0 py-4 overflow-x-hidden bg-white border-t-[15px] border-solid border-lightGreyTwo`
				}
			>
				<div className="lg:container px-4 mx-auto">
					<div className="flex items-center">
						<Swiper
							navigation={true}
							spaceBetween={30}
							centeredSlides={true}
							modules={[Autoplay, Navigation]}
							autoplay={{
								delay: 6000,
								disableOnInteraction: false,
							}}
							className="mySwiper"
						>
							{globalContext?.testimonials?.length > 0 ? (
								globalContext?.testimonials?.map((item: any, index: number) => (
									<SwiperSlide key={index}>
										<div
											className={
												item?.node?.testimonialReview?.paragraph
													? `mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-center ${
															item?.node?.testimonialReview?.image?.sourceUrl
																? "max-w-4xl"
																: "max-w-6xl gap-lg:gap-12"
													  }`
													: "hidden"
											}
										>
											<div
												className={`relative w-full mb-6 lg:mb-0 flex flex-col lg:flex-row items-center justify-between ${
													item?.node?.testimonialReview?.image?.sourceUrl
														? "lg:w-3/5"
														: "lg:w-2/5"
												}`}
											>
												<div className="hidden lg:block absolute top-0 right-0 mr-20 mt-8">
													<svg
														width="204"
														height="155"
														viewBox="0 0 204 155"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M119.221 155V91.6208L175.519 0H204L166.909 81.1123L195.721 82.7543V155H119.221ZM0 155V91.6208L56.6299 0H85.1104L48.0195 81.1123L76.5 82.7543V155H0Z"
															fill="#f7f7f7"
														></path>
													</svg>
												</div>
												<div className="relative flex flex-col lg:flex-row items-center">
													<Image
														className={
															item?.node?.testimonialReview?.image?.sourceUrl
																? "h-52 w-52 mb-6 bg-lightGreyTwo mx-auto lg:mx-0 object-cover object-center"
																: "hidden"
														}
														alt={item?.node?.testimonialReview?.image?.altText}
														src={
															item?.node?.testimonialReview?.image?.sourceUrl
																? item?.node?.testimonialReview?.image
																		?.sourceUrl
																: `/img/logos/default-avatar-profile.jpg`
														}
														width={
															item?.node?.testimonialReview?.image?.mediaDetails
																?.width
																? item?.node?.testimonialReview?.image
																		?.mediaDetails?.width
																: 500
														}
														height={
															item?.node?.testimonialReview?.image?.mediaDetails
																?.height
																? item?.node?.testimonialReview?.image
																		?.mediaDetails?.height
																: 500
														}
													/>
													<div
														className={
															item?.node?.testimonialReview?.image?.sourceUrl
																? "hidden"
																: "bg-none lg:h-52 lg:w-52"
														}
													/>
													<div
														className={`w-full lg:w-auto ${
															item?.node?.testimonialReview?.image?.sourceUrl
																? "md:ml-10"
																: "md:ml-0"
														}`}
													>
														<h3 className="text-blue-default text-lg lg:text-xl text-center lg:text-left font-semibold mb-1">
															{item?.node?.testimonialReview?.name}
														</h3>
														<h4
															className={
																item?.node?.testimonialReview?.position
																	? "text-base text-darkGrey text-center lg:text-left"
																	: "hidden"
															}
														>
															{item?.node?.testimonialReview?.position}
														</h4>
													</div>
												</div>
											</div>
											<div
												className={`w-full ml-0 lg:ml-12 ${
													item?.node?.testimonialReview?.image?.sourceUrl
														? "lg:w-2/5"
														: "lg:w-3/5"
												}`}
											>
												<Paragraph
													content={item?.node?.testimonialReview?.paragraph}
													tailwindStyling={`max-w-full px-6 lg:px-0 sm:max-w-lg lg:max-w-md xl:max-w-xl mx-auto lg:mx-0 ${
														item?.node?.testimonialReview?.image?.sourceUrl
															? "mb-28"
															: "mb-0"
													} leading-7 text-base text-darkGrey text-center lg:text-left`}
												/>
											</div>
										</div>
									</SwiperSlide>
								))
							) : (
								<></>
							)}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialsSlider;
