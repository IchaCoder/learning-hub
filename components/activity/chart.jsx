import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BarChart } from "react-native-gifted-charts";

const Chart = () => {
	const barData = [
		{ value: 15, label: "M", frontColor: "rgba(9, 144, 69, 0.5)" },
		{ value: 30, label: "T", frontColor: "rgba(9, 144, 69, 0.5)" },
		{ value: 26, label: "W", frontColor: "rgba(9, 144, 69, 0.5)" },
		{ value: 65, label: "T", frontColor: "rgba(9, 144, 69, 1)" },
		{ value: 20, label: "F", frontColor: "rgba(9, 144, 69, 0.5)" },
		{ value: 63, label: "S", frontColor: "rgba(9, 144, 69, 0.5)" },
		{ value: 51, label: "S", frontColor: "rgba(9, 144, 69, 0.5)" },
	];
	return (
		<View style={styles.container}>
			<BarChart data={barData} yAxisLabelSuffix={"h"} />
		</View>
	);
};

export default Chart;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5fcff",
		marginVertical: 30,
	},
});
