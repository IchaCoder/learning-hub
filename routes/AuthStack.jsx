import Signup from "../screens/Signup";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ForgotPassword from "../screens/Forgot-Password";
import Onboarding from "../screens/Onboarding";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitleAlign: "center",
				headerBackTitleVisible: false,
			}}
		>
			<Stack.Screen
				name="Onboarding"
				options={{ headerShown: false }}
				component={Onboarding}
			/>
			<Stack.Screen name="SIGN UP" component={Signup} />
			<Stack.Screen name="SIGN IN" component={Login} />
			{/* <Stack.Screen name="Forgot Password" component={ForgotPassword} /> */}
		</Stack.Navigator>
	);
};

export default AuthStack;
