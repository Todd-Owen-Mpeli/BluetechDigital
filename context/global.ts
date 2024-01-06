"use client";

// Imports
import {IGlobalContext} from "@/types/context";
import {createContext, useContext} from "react";

export const GlobalContext = createContext<IGlobalContext | undefined>(
	undefined
);

export const useGlobalContext = () => {
	const content = useContext(GlobalContext);

	if (content === undefined) {
		throw new Error(`Global Context must be used to render content.`);
	}

	return content;
};
