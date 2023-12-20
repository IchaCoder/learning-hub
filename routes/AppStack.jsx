import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../components/bottom-tabs/Tabs";
import HealthScience from "../screens/HealthScience";
import Level from "../screens/Level";

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
				name="HomeScreen"
				options={{ headerShown: false }}
				component={Tabs}
			/>
			<Stack.Screen
				name="College of Health Sciences"
				options={{ headerShown: true }}
				component={HealthScience}
			/>
			<Stack.Screen
				name="Level"
				options={{ headerShown: true }}
				component={Level}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
