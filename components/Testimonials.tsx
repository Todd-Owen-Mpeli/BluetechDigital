// Imports
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITestimonials} from "@/types/components/index";
import fadeInUp, {fadeIn, initial, initialTwo} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const Testimonials: FC<ITestimonials> = ({title, subtitle, paragraph}) => {
	return (
		<>
			<div className=""></div>
		</>
	);
};

export default Testimonials;
