import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

function Onboarding3({ navigation }) {
	return (
		<View style={styles.welcomeContainer}>
			<Image
				source={require("../../assets/ob3.png")}
				resizeMode="contain"
				style={styles.img}
			/>
			<Text style={styles.message}>CERTIFICATION</Text>
			<Text style={styles.details}>
				Learn any course of your choice and get certified by the best
				University in West Africa
			</Text>
			<View style={styles.steps}>
				<View style={[styles.step, { backgroundColor: "#FFF" }]}></View>
				<View style={[styles.step, { backgroundColor: "#FFF" }]}></View>
				<View style={[styles.step, { backgroundColor: "#FFF60A" }]}></View>
			</View>
			<Pressable
				style={styles.btn}
				onPress={() => navigation.push("SIGN UP")}
			>
				<Text style={styles.btnText}>Next</Text>
			</Pressable>
		</View>
	);
}

export default Onboarding3;

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
