"use client";

// Imports
import {FC} from "react";
import {ReactLenis} from "lenis/react";
import {ISmoothScrolling} from "@/types/components";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	return (
		<ReactLenis
			root
			options={{
				// Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
				lerp: 0.05,
				//   infinite: true,
				//   syncTouch: true,
			}}
		>
			<main>{children}</main>
		</ReactLenis>
	);
};

export default SmoothScrolling;
