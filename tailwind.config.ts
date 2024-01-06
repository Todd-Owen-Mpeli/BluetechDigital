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
				default: "#3978ff",
				dark: "#09275e",
				Two: "#3978ff",
				light: "#3d77f3",
				darker: "#0d172a",
				darkerTwo: "#061229",
			},
			red: {
				default: "#cb0007",
				dark: "#a70107",
				Two: "#ff0008",
				light: "#ff242c",
				darker: "#720004",
				darkerTwo: "#4e0104",
			},
			yellow: {
				default: "#f6ad37",
				Two: "#e8b042",
				Three: "#fac546",
				dark: "#e4a002",
				darker: "#bc7700",
			},
			green: {
				default: "#4d6c13",
				Two: "#74ae00",
				Three: "#86bc08",
				dark: "#57a300",
			},
		},
	},
	plugins: [],
};
export default config;
