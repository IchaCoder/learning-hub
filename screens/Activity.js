import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Chart from "../components/activity/chart";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import CourseCard from "../components/activity/course-card";

const Activity = () => {
	const [progress, setProgress] = useState(0.1);
	return (
		<VirtualizedView>
			<View style={styles.container}>
				<Text style={{ fontWeight: "bold", fontSize: 22 }}>
					Total Hours
				</Text>
				<Text style={{ fontWeight: "600", fontSize: 18 }}>
					10hr/week
				</Text>
				<Chart />
				<View style={{ marginTop: 20 }}>
					<Text style={{ fontWeight: "bold", fontSize: 22 }}>
						Ongoing Courses
					</Text>
					<CourseCard
						source={require("../assets/mole.png")}
						title="Molecular Chemistry"
						progress="60%"
						value={0.6}
					/>
					<CourseCard
						source={require("../assets/micro.png")}
						title="Microbiology"
						progress="30%"
						value={0.3}
					/>
					<CourseCard
						source={require("../assets/med.png")}
						title="Medicinal Chemistry"
						progress="80%"
						value={0.8}
					/>
				</View>
			</View>
		</VirtualizedView>
	);
};

export default Activity;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
		marginTop: 10,
	},
});
