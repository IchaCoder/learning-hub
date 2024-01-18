import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TestsAndQuizes = () => {
	return (
		<View style={styles.container}>
			<Text
				style={{
					textAlign: "center",
					fontSize: 22,
					color: "white",
					margin: 20,
				}}
			>
				No Tests And Quizes Available
			</Text>
		</View>
	);
};

export default TestsAndQuizes;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#099045",
	},
});
