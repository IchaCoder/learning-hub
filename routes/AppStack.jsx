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
		</Stack.Navigator>
	);
};

export default AppStack;
