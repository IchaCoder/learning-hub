import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

function Onboarding2({ setIndex, navigation }) {
	return (
		<View style={styles.welcomeContainer}>
			<Image
				source={require("../../assets/ob2.png")}
				resizeMode="contain"
				style={styles.img}
			/>
			<Text style={styles.message}>VARIETY OF COURSES</Text>
			<Text style={styles.details}>
				We provide you with a wide range of courses across all our faculties
			</Text>
			<View style={styles.steps}>
				<View style={[styles.step, { backgroundColor: "#FFF" }]}></View>
				<View style={[styles.step, { backgroundColor: "#FFF60A" }]}></View>
				<View style={[styles.step, { backgroundColor: "#fff" }]}></View>
			</View>
			<Pressable style={styles.btn} onPress={() => setIndex(2)}>
				<Text style={styles.btnText}>Next</Text>
			</Pressable>
			<Pressable
				style={styles.btnTwo}
				onPress={() => navigation.push("SIGN UP")}
			>
				<Text style={[styles.btnText, { color: "#fff" }]}>Skip</Text>
			</Pressable>
		</View>
	);
}

export default Onboarding2;

const styles = StyleSheet.create({
	welcomeContainer: {
		padding: 12,
		flex: 1,
		alignItems: "center",
	},
	message: {
		fontSize: 26,
		fontWeight: "600",
		color: "#FFFFFF",
	},
	img: {
		width: "95%",
	},
	details: {
		textAlign: "center",
		color: "#FFFFFF",
		fontSize: 18,
		marginTop: 10,
		lineHeight: 30,
	},
	btn: {
		backgroundColor: "#FFF60A",
		padding: 10,
		height: 45,
		alignSelf: "center",
		borderRadius: 5,
		width: "80%",
		marginTop: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 3,
	},
	btnTwo: {
		backgroundColor: "transparent",
		padding: 10,
		height: 45,
		alignSelf: "center",
		borderRadius: 5,
		width: "80%",
		marginTop: 20,
	},
	btnText: {
		color: "#484848",
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 18,
	},
	steps: {
		marginTop: 80,
		flexDirection: "row",
		gap: 20,
	},
	step: {
		width: 10,
		height: 10,
		borderRadius: 100,
	},
});
