import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../screens/Home";
import Activity from "../../screens/Activity";
import Plays from "../../screens/Plays";
import Notifications from "../../screens/Notifications";

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
			backgroundColor: "#Fff",
		},
	};

	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen
				options={{
					headerShown: false,
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
								<Feather
									name="activity"
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
				name="Activity"
				component={Activity}
			/>
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
								<AntDesign
									name="play"
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
				name="Plays"
				component={Plays}
			/>
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
								<Ionicons
									name="notifications"
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
				name="Notifications"
				component={Notifications}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
