import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../components/bottom-tabs/Tabs";
import HealthScience from "../screens/HealthScience";

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitleAlign: "center",
				headerBackTitleVisible: false,
			}}
		>
			<Stack.Screen
				name="Home"
				options={{ headerShown: false }}
				component={Tabs}
			/>
			<Stack.Screen
				name="College of Health Sciences"
				options={{ headerShown: true }}
				component={HealthScience}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
