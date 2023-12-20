import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context/Context";

// Routes
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const Router = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { user } = useGlobalContext();
	console.log("User here is: " + JSON.stringify(user));

	// if (isLoading) {
	// 	return <Loading />;
	// }
	return (
		<NavigationContainer>
			{user ? <AppStack /> : <AuthStack />}
			{/* <AuthStack /> */}
		</NavigationContainer>
	);
};

export default Router;
