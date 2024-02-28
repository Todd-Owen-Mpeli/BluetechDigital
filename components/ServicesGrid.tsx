// Imports
import Link from "next/link";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IServicesGrid} from "@/types/components/index";
import fadeInUp, {fadeIn, initial, initialTwo} from "../animations/animations";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ButtonBorderSliced from "./Elements/ButtonBorderSliced";

const ServicesGrid: FC<IServicesGrid> = ({servicesGrid}) => {
	return <div></div>;
};

export default ServicesGrid;
