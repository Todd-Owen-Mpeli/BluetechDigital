import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".8rem",
			tiny: ".9rem",
			base: "1rem",
			medium: "1.15rem",
			paragraph: "1.10rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "1.85rem",
			"4xl": "2rem",
			"5xl": "2.25rem",
			"6xl": "2.5rem",
			"7xl": "3rem",
			"8xl": "4rem",
			"9xl": "4rem",
			"10xl": "4.5rem",
			"11xl": "5rem",
			"12xl": "5.5rem",
		},
		colors: {
			// Base colors Variables
			black: "#111",
			grey: "#cecece",
			white: "#ffffff",
			pureBlack: "#000",
			darkGrey: "#8f8f8f",
			lightGrey: "#f7f7f7",
			lightGreyTwo: "#fafafa",

			// Main colors
			blue: {
				default: "#2563eb",
				Two: "#3978ff",
				dark: "#09275e",
				light: "#3d77f3",
				darker: "#0d172a",
				darkerTwo: "#061229",
			},
			yellow: {
				default: "#f6ad37",
				Two: "#e8b042",
				Three: "#fac546",
				Four: "#de8b27",
				Five: "#d8781d",
				Six: "#d16415",
				dark: "#e4a002",
				darker: "#bc7700",
			},
			green: {
				default: "#86bc08",
				Two: "#74ae00",
				Three: "#e39e34",
				dark: "#57a300",
				darkTwo: "#376b13",
			},
			purple: {
				default: "#833df4",
				Two: "#7736f1",
				dark: "#2d2378",
			},
		},
	},
	plugins: [],
};
export default config;
