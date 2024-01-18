import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../components/bottom-tabs/Tabs";
import Department from "../screens/Department";
import Level from "../screens/Level";
import ChooseCourse from "../screens/ChooseCourse";
import CourseMaterial from "../screens/CourseMaterial";
import LectureVideos from "../screens/LectureVideos";
import VideoDetails from "../screens/VideoDetails";
import LectureRoom from "../screens/LectureRoom";
import Settings from "../screens/Settings";
import About from "../screens/About";
import Help from "../screens/Help";
import Profile from "../screens/Profile";
import Assignments from "../screens/Assignments";
import TestsAndQuizes from "../screens/Tests";

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
				name="Departments"
				options={{ headerShown: true }}
				component={Department}
			/>
			<Stack.Screen
				name="Level"
				options={{ headerShown: true }}
				component={Level}
			/>
			<Stack.Screen
				name="Choose Course"
				options={{ headerShown: false }}
				component={ChooseCourse}
			/>
			<Stack.Screen
				name="Course Material"
				options={{ headerShown: true }}
				component={CourseMaterial}
			/>
			<Stack.Screen
				name="Lecture Videos"
				options={{ headerShown: true }}
				component={LectureVideos}
			/>
			<Stack.Screen
				name="Video Details"
				options={{ headerShown: true }}
				component={VideoDetails}
			/>
			<Stack.Screen
				name="Lecture"
				options={{ headerShown: true }}
				component={LectureRoom}
			/>
			<Stack.Screen
				name="Settings"
				options={{ headerShown: false }}
				component={Settings}
			/>
			<Stack.Screen
				name="About"
				options={{ headerShown: true, headerTitleAlign: "left" }}
				component={About}
			/>
			<Stack.Screen
				name="Help"
				options={{ headerShown: true, headerTitleAlign: "left" }}
				component={Help}
			/>
			<Stack.Screen
				name="Profile"
				options={{ headerShown: true, headerTitleAlign: "left" }}
				component={Profile}
			/>
			<Stack.Screen
				name="Assignments"
				options={{
					headerShown: true,
					headerTitleAlign: "left",
					headerStyle: {
						backgroundColor: "#099045",
					},
				}}
				component={Assignments}
			/>
			<Stack.Screen
				name="Tests and Quizes"
				options={{
					headerShown: true,
					headerTitleAlign: "left",
					headerStyle: {
						backgroundColor: "#099045",
					},
				}}
				component={TestsAndQuizes}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
