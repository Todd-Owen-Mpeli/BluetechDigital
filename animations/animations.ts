/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// WhileInView
import {
	FadeIn,
	Stagger,
	Initial,
	FadeInUp,
	FadeInTwo,
	InitialTwo,
	SlideInLeftInitial,
	SlideInRightFinish,
	SlideInRightInitial,
	ArrayLoopStaggerChildren,
} from "@/types/animations";

export const initial: Initial | any = {
	y: 0,
	opacity: 0,
};
export const initialTwo: InitialTwo | any = {
	opacity: 0,
};
export const fadeIn: FadeIn | any = {
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: "easeOut",
	},
};
export const fadeInTwo: FadeInTwo | any = {
	y: 0,
	opacity: 1,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};
export const fadeInUp: FadeInUp = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: "easeInOut",
	},
};
export const stagger: Stagger = {
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
export const arrayLoopStaggerChildren: ArrayLoopStaggerChildren = {
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
export const navigationMenuStaggerChildren: ArrayLoopStaggerChildren = {
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
export const slideInRightInitial: SlideInRightInitial | any = {
	y: 0,
	x: 200,
	opacity: 0,
};
export const slideInLeftInitial: SlideInLeftInitial | any = {
	y: 0,
	x: -200,
	opacity: 0,
};
export const slideInRightFinish: SlideInRightFinish = {
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
