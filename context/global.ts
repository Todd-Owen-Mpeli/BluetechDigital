"use client";

// Imports
import {IGlobal} from "@/types/context";
import {createContext, useContext} from "react";

export const GlobalContext = createContext<IGlobal.IContext | undefined>(
	undefined
);

export const useGlobalContext = () => {
	const content = useContext(GlobalContext);

	if (content === undefined) {
		throw new Error(`Global Context must be used to render content.`);
	}

	return content;
};
