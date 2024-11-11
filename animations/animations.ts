/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// Imports
import {IAnimation} from "@/types/animations";

export const initial: IAnimation.Initial | any = {
	y: 0,
	opacity: 0,
};
export const initialTwo: IAnimation.InitialTwo | any = {
	opacity: 0,
};
export const fadeIn: IAnimation.FadeIn | any = {
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: "easeOut",
	},
};
export const fadeInTwo: IAnimation.FadeInTwo | any = {
	y: 0,
	opacity: 1,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};
export const fadeInUp: IAnimation.FadeInUp = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: "easeInOut",
	},
};
export const stagger: IAnimation.Stagger = {
	initial: {
		opacity: 0,
		y: 0,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1,
			duration: 0.75,
			ease: "easeInOut",
		},
	},
};
export const arrayLoopStaggerChildren: IAnimation.ArrayLoopStaggerChildren = {
	initial: {
		opacity: 0,
		y: 0,
	},
	animate: (keys: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1 * keys,
			duration: 0.75,
			ease: "easeInOut",
		},
	}),
};
export const navigationMenuStaggerChildren: IAnimation.ArrayLoopStaggerChildren =
	{
		initial: {
			opacity: 0,
			y: 0,
		},
		animate: (keys: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.25 * keys,
				duration: 0.5,
				ease: "easeInOut",
			},
		}),
	};

// Slide In Direction (Horizontal)
export const slideInRightInitial: IAnimation.SlideInRightInitial | any = {
	y: 0,
	x: 200,
	opacity: 0,
};
export const slideInLeftInitial: IAnimation.SlideInLeftInitial | any = {
	y: 0,
	x: -200,
	opacity: 0,
};
export const slideInRightFinish: IAnimation.SlideInRightFinish = {
	y: 0,
	x: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: "easeInOut",
		staggerChildren: 0.1,
	},
};

export default fadeInUp;
