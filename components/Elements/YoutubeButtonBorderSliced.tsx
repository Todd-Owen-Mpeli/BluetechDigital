// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {IElements} from "@/types/components";
import {initialTwo, fadeIn} from "@/animations/animations";

const YoutubeButtonBorderSliced: FC<IElements.IYoutubeButtonBorderSliced> = ({
	title,
	fullWidth,
	displayYoutubeIcon,
}) => {
	const sgvOneColor = "#000";
	const sgvTwoColor = "#e4a002";
	const sgvOneColorHover = "#ffffff";
	const sgvTwoColorHover = "#ffffff";

	const sgvYoutubeColor = "#ff0008";
	const sgvYoutubeTextColor = "#000";
	const sgvYoutubeColorHover = "#ffffff";
	const sgvYoutubeTextColorHover = "#ffffff";

	return (
		<>
			<motion.button
				initial={initialTwo}
				whileInView={fadeIn}
				viewport={{once: true}}
				className={
					title
						? `flex items-center justify-center w-fit mx-auto lg:mx-0 group mt-3 relative gap-3 px-6 py-3 font-semibold tracking-widest text-base sm:mx-0 border-2 border-solid border-black hover:bg-yellow-default hover:border-yellow-default transition-all ease-in-out duration-500 text-black hover:text-white before:left-[15%] before:bottom-[-2px] before:block before:h-[2px] before:absolute before:w-[45%] before:content-[''] before:bg-lightGreyTwo hover:before:bg-yellow-default after:right-[15%] after:top-[-2px] after:block after:h-[2px] after:absolute after:w-[45%] after:content-[''] after:bg-lightGreyTwo hover:after:bg-yellow-default`
						: `hidden`
				}
			>
				<span>{title}</span>
				<span className="hidden group-hover:block">
					{displayYoutubeIcon ? (
						<svg
							width="79.595"
							height="35"
							viewBox="0 0 79.595 35"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<clipPath id="a">
									<rect width="67.191" height="15" fill="none" />
								</clipPath>
							</defs>
							<g transform="translate(-160.404 -13)">
								<path
									d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
									transform="translate(173 13)"
									fill={sgvYoutubeColorHover}
								/>
								<g transform="translate(160.404 23)">
									<g transform="translate(0 0)" clipPath="url(#a)">
										<path
											d="M20.981,2.342A2.684,2.684,0,0,0,19.086.448C17.415,0,10.714,0,10.714,0s-6.7,0-8.372.448A2.684,2.684,0,0,0,.448,2.342,27.893,27.893,0,0,0,0,7.5a27.891,27.891,0,0,0,.448,5.158,2.684,2.684,0,0,0,1.895,1.895C4.013,15,10.714,15,10.714,15s6.7,0,8.372-.448a2.684,2.684,0,0,0,1.895-1.895A27.88,27.88,0,0,0,21.429,7.5a27.882,27.882,0,0,0-.448-5.158"
											transform="translate(0 0)"
											fill="red"
										/>
										<path
											d="M48.594,30.726l5.567-3.214L48.594,24.3Z"
											transform="translate(-40.022 -20.012)"
											fill="#fff"
										/>
										<path
											d="M170.861,33.931a2.334,2.334,0,0,1-.9-1.333,8.725,8.725,0,0,1-.268-2.406V28.828A7.909,7.909,0,0,1,170,26.391a2.445,2.445,0,0,1,.958-1.341,3.1,3.1,0,0,1,1.709-.421,2.913,2.913,0,0,1,1.67.429,2.459,2.459,0,0,1,.919,1.341,8.226,8.226,0,0,1,.291,2.429v1.364a8.359,8.359,0,0,1-.284,2.414,2.37,2.37,0,0,1-.919,1.333,3.769,3.769,0,0,1-3.479-.008m2.375-1.471a4.582,4.582,0,0,0,.176-1.5V28.031a4.53,4.53,0,0,0-.176-1.479.631.631,0,0,0-.621-.467.622.622,0,0,0-.605.467,4.521,4.521,0,0,0-.176,1.479v2.927a4.77,4.77,0,0,0,.168,1.5.616.616,0,0,0,.613.46.629.629,0,0,0,.621-.46"
											transform="translate(-139.758 -20.285)"
											fill={sgvYoutubeTextColorHover}
										/>
										<path
											d="M351.2,30.247v.475a12.494,12.494,0,0,0,.054,1.356,1.285,1.285,0,0,0,.222.659.632.632,0,0,0,.521.207.656.656,0,0,0,.651-.368,3.205,3.205,0,0,0,.192-1.226l1.823.107a2.872,2.872,0,0,1,.015.337,2.492,2.492,0,0,1-.713,1.946,2.9,2.9,0,0,1-2.015.644,2.4,2.4,0,0,1-2.191-.981,5.744,5.744,0,0,1-.628-3.034V28.73a5.68,5.68,0,0,1,.651-3.088,2.483,2.483,0,0,1,2.23-.973,2.946,2.946,0,0,1,1.67.4,2.139,2.139,0,0,1,.82,1.241,8.968,8.968,0,0,1,.238,2.329v1.609Zm.268-3.954a1.292,1.292,0,0,0-.215.651,12.693,12.693,0,0,0-.054,1.372v.674h1.548v-.674a11.413,11.413,0,0,0-.061-1.372,1.312,1.312,0,0,0-.222-.659.614.614,0,0,0-.5-.192.6.6,0,0,0-.5.2"
											transform="translate(-287.545 -20.318)"
											fill={sgvYoutubeTextColorHover}
										/>
										<path
											d="M135.908,14.725,133.5,6.036h2.1l.843,3.938q.322,1.456.475,2.483h.061q.107-.736.475-2.467l.874-3.954h2.1l-2.437,8.689v4.168h-2.084Z"
											transform="translate(-109.954 -4.971)"
											fill={sgvYoutubeTextColorHover}
										/>
										<path
											d="M214.825,25.672v9.394H213.17l-.184-1.149h-.046a2.163,2.163,0,0,1-2.023,1.3,1.589,1.589,0,0,1-1.379-.613,3.29,3.29,0,0,1-.444-1.916V25.672h2.115v6.9a2.1,2.1,0,0,0,.138.9.477.477,0,0,0,.46.268.937.937,0,0,0,.529-.169,1.042,1.042,0,0,0,.376-.429V25.672Z"
											transform="translate(-172.212 -21.144)"
											fill={sgvYoutubeTextColorHover}
										/>
										<path
											d="M276.321,25.672v9.394h-1.655l-.184-1.149h-.046a2.163,2.163,0,0,1-2.023,1.3,1.589,1.589,0,0,1-1.379-.613,3.29,3.29,0,0,1-.444-1.916V25.672H272.7v6.9a2.1,2.1,0,0,0,.138.9.477.477,0,0,0,.46.268.937.937,0,0,0,.529-.169,1.042,1.042,0,0,0,.376-.429V25.672Z"
											transform="translate(-222.861 -21.144)"
											fill={sgvYoutubeTextColorHover}
										/>
										<path
											d="M244.9,7.739h-2.1V18.895h-2.069V7.739h-2.1v-1.7H244.9Z"
											transform="translate(-196.54 -4.973)"
											fill={sgvYoutubeTextColorHover}
										/>
										<path
											d="M316.036,8.783a2.416,2.416,0,0,0-.621-1.287,1.667,1.667,0,0,0-1.18-.4,1.956,1.956,0,0,0-1.088.329,2.239,2.239,0,0,0-.782.866h-.015V3.343h-2.038V16.675h1.747l.214-.889h.046a1.794,1.794,0,0,0,.736.751,2.18,2.18,0,0,0,1.088.276,1.665,1.665,0,0,0,1.578-.988,7.113,7.113,0,0,0,.506-3.088V11.251a12.349,12.349,0,0,0-.192-2.468M314.1,12.615a11.893,11.893,0,0,1-.084,1.609,1.739,1.739,0,0,1-.283.827.655.655,0,0,1-.536.245.979.979,0,0,1-.483-.123.921.921,0,0,1-.36-.368V9.473a1.336,1.336,0,0,1,.368-.628.814.814,0,0,1,.567-.245.572.572,0,0,1,.5.253,1.946,1.946,0,0,1,.245.851,15.86,15.86,0,0,1,.069,1.7Z"
											transform="translate(-255.577 -2.753)"
											fill={sgvYoutubeTextColorHover}
										/>
									</g>
								</g>
							</g>
						</svg>
					) : (
						<svg
							height="35"
							width="30.237"
							viewBox="0 0 30.237 35"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g transform="translate(-4906.763 143)">
								<path
									d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
									transform="translate(4870 -143)"
									fill={sgvTwoColorHover}
								></path>
								<g transform="translate(4890.311 -1111.861)">
									<path
										d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
										transform="translate(0 0)"
										fill={sgvOneColorHover}
									></path>
								</g>
							</g>
						</svg>
					)}
				</span>
				<span className="block group-hover:hidden">
					{displayYoutubeIcon ? (
						<svg
							width="79.595"
							height="35"
							viewBox="0 0 79.595 35"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<clipPath id="a">
									<rect width="67.191" height="15" fill="none" />
								</clipPath>
							</defs>
							<g transform="translate(-160.404 -13)">
								<path
									d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
									transform="translate(173 13)"
									fill={sgvYoutubeColor}
								/>
								<g transform="translate(160.404 23)">
									<g transform="translate(0 0)" clipPath="url(#a)">
										<path
											d="M20.981,2.342A2.684,2.684,0,0,0,19.086.448C17.415,0,10.714,0,10.714,0s-6.7,0-8.372.448A2.684,2.684,0,0,0,.448,2.342,27.893,27.893,0,0,0,0,7.5a27.891,27.891,0,0,0,.448,5.158,2.684,2.684,0,0,0,1.895,1.895C4.013,15,10.714,15,10.714,15s6.7,0,8.372-.448a2.684,2.684,0,0,0,1.895-1.895A27.88,27.88,0,0,0,21.429,7.5a27.882,27.882,0,0,0-.448-5.158"
											transform="translate(0 0)"
											fill="red"
										/>
										<path
											d="M48.594,30.726l5.567-3.214L48.594,24.3Z"
											transform="translate(-40.022 -20.012)"
											fill="#fff"
										/>
										<path
											d="M170.861,33.931a2.334,2.334,0,0,1-.9-1.333,8.725,8.725,0,0,1-.268-2.406V28.828A7.909,7.909,0,0,1,170,26.391a2.445,2.445,0,0,1,.958-1.341,3.1,3.1,0,0,1,1.709-.421,2.913,2.913,0,0,1,1.67.429,2.459,2.459,0,0,1,.919,1.341,8.226,8.226,0,0,1,.291,2.429v1.364a8.359,8.359,0,0,1-.284,2.414,2.37,2.37,0,0,1-.919,1.333,3.769,3.769,0,0,1-3.479-.008m2.375-1.471a4.582,4.582,0,0,0,.176-1.5V28.031a4.53,4.53,0,0,0-.176-1.479.631.631,0,0,0-.621-.467.622.622,0,0,0-.605.467,4.521,4.521,0,0,0-.176,1.479v2.927a4.77,4.77,0,0,0,.168,1.5.616.616,0,0,0,.613.46.629.629,0,0,0,.621-.46"
											transform="translate(-139.758 -20.285)"
											fill={sgvYoutubeTextColor}
										/>
										<path
											d="M351.2,30.247v.475a12.494,12.494,0,0,0,.054,1.356,1.285,1.285,0,0,0,.222.659.632.632,0,0,0,.521.207.656.656,0,0,0,.651-.368,3.205,3.205,0,0,0,.192-1.226l1.823.107a2.872,2.872,0,0,1,.015.337,2.492,2.492,0,0,1-.713,1.946,2.9,2.9,0,0,1-2.015.644,2.4,2.4,0,0,1-2.191-.981,5.744,5.744,0,0,1-.628-3.034V28.73a5.68,5.68,0,0,1,.651-3.088,2.483,2.483,0,0,1,2.23-.973,2.946,2.946,0,0,1,1.67.4,2.139,2.139,0,0,1,.82,1.241,8.968,8.968,0,0,1,.238,2.329v1.609Zm.268-3.954a1.292,1.292,0,0,0-.215.651,12.693,12.693,0,0,0-.054,1.372v.674h1.548v-.674a11.413,11.413,0,0,0-.061-1.372,1.312,1.312,0,0,0-.222-.659.614.614,0,0,0-.5-.192.6.6,0,0,0-.5.2"
											transform="translate(-287.545 -20.318)"
											fill={sgvYoutubeTextColor}
										/>
										<path
											d="M135.908,14.725,133.5,6.036h2.1l.843,3.938q.322,1.456.475,2.483h.061q.107-.736.475-2.467l.874-3.954h2.1l-2.437,8.689v4.168h-2.084Z"
											transform="translate(-109.954 -4.971)"
											fill={sgvYoutubeTextColor}
										/>
										<path
											d="M214.825,25.672v9.394H213.17l-.184-1.149h-.046a2.163,2.163,0,0,1-2.023,1.3,1.589,1.589,0,0,1-1.379-.613,3.29,3.29,0,0,1-.444-1.916V25.672h2.115v6.9a2.1,2.1,0,0,0,.138.9.477.477,0,0,0,.46.268.937.937,0,0,0,.529-.169,1.042,1.042,0,0,0,.376-.429V25.672Z"
											transform="translate(-172.212 -21.144)"
											fill={sgvYoutubeTextColor}
										/>
										<path
											d="M276.321,25.672v9.394h-1.655l-.184-1.149h-.046a2.163,2.163,0,0,1-2.023,1.3,1.589,1.589,0,0,1-1.379-.613,3.29,3.29,0,0,1-.444-1.916V25.672H272.7v6.9a2.1,2.1,0,0,0,.138.9.477.477,0,0,0,.46.268.937.937,0,0,0,.529-.169,1.042,1.042,0,0,0,.376-.429V25.672Z"
											transform="translate(-222.861 -21.144)"
											fill={sgvYoutubeTextColor}
										/>
										<path
											d="M244.9,7.739h-2.1V18.895h-2.069V7.739h-2.1v-1.7H244.9Z"
											transform="translate(-196.54 -4.973)"
											fill={sgvYoutubeTextColor}
										/>
										<path
											d="M316.036,8.783a2.416,2.416,0,0,0-.621-1.287,1.667,1.667,0,0,0-1.18-.4,1.956,1.956,0,0,0-1.088.329,2.239,2.239,0,0,0-.782.866h-.015V3.343h-2.038V16.675h1.747l.214-.889h.046a1.794,1.794,0,0,0,.736.751,2.18,2.18,0,0,0,1.088.276,1.665,1.665,0,0,0,1.578-.988,7.113,7.113,0,0,0,.506-3.088V11.251a12.349,12.349,0,0,0-.192-2.468M314.1,12.615a11.893,11.893,0,0,1-.084,1.609,1.739,1.739,0,0,1-.283.827.655.655,0,0,1-.536.245.979.979,0,0,1-.483-.123.921.921,0,0,1-.36-.368V9.473a1.336,1.336,0,0,1,.368-.628.814.814,0,0,1,.567-.245.572.572,0,0,1,.5.253,1.946,1.946,0,0,1,.245.851,15.86,15.86,0,0,1,.069,1.7Z"
											transform="translate(-255.577 -2.753)"
											fill={sgvYoutubeTextColor}
										/>
									</g>
								</g>
							</g>
						</svg>
					) : (
						<svg
							height="35"
							width="30.237"
							viewBox="0 0 30.237 35"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g transform="translate(-4906.763 143)">
								<path
									d="M49.5,35a17.45,17.45,0,0,1-12.737-5.5h2.153a16,16,0,0,0,21.9-23.314,15.971,15.971,0,0,0-21.9-.687H36.763A17.5,17.5,0,1,1,49.5,35Z"
									transform="translate(4870 -143)"
									fill={sgvTwoColor}
								></path>
								<g transform="translate(4890.311 -1111.861)">
									<path
										d="M36.2,985.886,32.392,981.6a.714.714,0,1,0-1.064.952l2.753,3.1H24.714a.714.714,0,1,0,0,1.428h9.367l-2.753,3.1a.731.731,0,0,0,.056,1.015.722.722,0,0,0,1.007-.063l3.809-4.286A.722.722,0,0,0,36.2,985.886Z"
										transform="translate(0 0)"
										fill={sgvOneColor}
									></path>
								</g>
							</g>
						</svg>
					)}
				</span>
			</motion.button>
		</>
	);
};

export default YoutubeButtonBorderSliced;
