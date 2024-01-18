import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card } from "@rneui/themed";
import ChooseCourseOptions from "../components/choose-course/ChooseCourseOption";
import Actions from "../components/choose-course/Actions";

const ChooseCourse = ({ navigation, route }) => {
	const { params } = route;
	const [course, setCourse] = useState("");

	useEffect(() => {
		setCourse(params.title);
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.profile}>
				<MaterialCommunityIcons
					name="account-circle"
					size={60}
					color="black"
				/>
				<Card containerStyle={styles.card}>
					<View>
						<Text style={styles.headingText}>Hi, Komla</Text>
						<Text style={{ fontWeight: "300", fontSize: 16 }}>
							Let's start learning
						</Text>
					</View>
				</Card>
			</View>
			<ChooseCourseOptions
				course={course}
				setCourse={setCourse}
				title={params.title}
			/>
			<Actions navigation={navigation} />
		</SafeAreaView>
	);
};

export default ChooseCourse;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	profile: {
		flexDirection: "row",
		alignItems: "center",
		width: "80%",
		alignSelf: "center",
		gap: 4,
		overflow: "hidden",
		marginTop: 20,
	},
	headingText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	card: {
		width: "100%",
		margin: 0,
		padding: 10,
		borderRadius: 15,
	},
});
