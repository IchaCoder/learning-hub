import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import Onboarding1 from "../components/onboarding/Onboarding1";
import Onboarding2 from "../components/onboarding/Onboarding2";
import Onboarding3 from "../components/onboarding/Onboarding3";

function Onboarding({ navigation }) {
	const [index, setIndex] = useState(0);
	let currentScreen;
	if (index === 0) {
		currentScreen = (
			<Onboarding1 setIndex={setIndex} navigation={navigation} />
		);
	} else if (index === 1) {
		currentScreen = (
			<Onboarding2 setIndex={setIndex} navigation={navigation} />
		);
	} else {
		currentScreen = <Onboarding3 navigation={navigation} />;
	}
	return <SafeAreaView style={styles.container}>{currentScreen}</SafeAreaView>;
}

export default Onboarding;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#099045",
		paddingTop: 120,
	},
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
