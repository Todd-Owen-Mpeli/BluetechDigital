"use client";

// Imports
import {FC} from "react";
import {ReactLenis} from "lenis/react";
import {ISmoothScrolling} from "@/types/components";

const SmoothScrolling: FC<ISmoothScrolling> = ({children}) => {
	return (
		<ReactLenis root options={{lerp: 0.01, duration: 0.5, syncTouch: true}}>
			<main>{children}</main>
		</ReactLenis>
	);
};

export default SmoothScrolling;
