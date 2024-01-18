import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Actions = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					gap: 12,
					alignItems: "center",
				}}
				onPress={() => navigation.push("Lecture Videos")}
			>
				<View style={styles.iconContainer}>
					<AntDesign name="play" size={24} color="white" />
				</View>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "600",
					}}
				>
					Lecture Videos
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					gap: 12,
					alignItems: "center",
				}}
				onPress={() => navigation.push("Assignments")}
			>
				<View style={styles.iconContainer}>
					<FontAwesome
						name="graduation-cap"
						size={24}
						color="white"
					/>
				</View>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "600",
					}}
				>
					Assignments
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					gap: 12,
					alignItems: "center",
				}}
				onPress={() => navigation.push("Course Material")}
			>
				<View style={styles.iconContainer}>
					<Entypo name="open-book" size={24} color="white" />
				</View>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "600",
					}}
				>
					Course Materials
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					gap: 12,
					alignItems: "center",
				}}
				onPress={() => navigation.navigate("Tests and Quizes")}
			>
				<View style={styles.iconContainer}>
					<Ionicons name="checkmark-circle" size={24} color="white" />
				</View>
				<Text
					style={{
						fontSize: 18,
						fontWeight: "600",
					}}
				>
					Test and Quizzes
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Actions;

const styles = StyleSheet.create({
	iconContainer: {
		width: 40,
		height: 40,
		borderRadius: 12,
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		width: "90%",
		alignSelf: "center",
		marginTop: 20,
		gap: 20,
	},
});
