"use client";

// Imports
import {FC} from "react";
import {client} from "@/config/apollo";
import {ApolloProvider} from "@apollo/client";
import {IApolloContextProvider} from "@/types/context";

const ApolloContextProvider: FC<IApolloContextProvider> = ({children}) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloContextProvider;
