import { Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../screens/Home";

// navigation prop comes when we wrap the component around stack.navigator
const Tabs = () => {
	const Tab = createBottomTabNavigator();

	const screenOptions = {
		tabBarShowLabel: false,
		headerShown: true,
		headerTitleAlign: "center",
		headerBackTitleVisible: false,
		tabBarStyle: {
			// position: "absolute",
			// bottom: 0,
			// right: 0,
			// left: 0,
			elevation: 0,
			height: 60,
			backgroundColor: "#FEE5F9",
		},
	};

	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View
								style={{
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Entypo
									name="home"
									size={24}
									color={
										focused
											? "#099045"
											: "rgba(9, 144, 69, 0.5)"
									}
								/>
							</View>
						);
					},
				}}
				name="Home"
				component={Home}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
