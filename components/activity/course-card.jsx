import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Card, LinearProgress } from "@rneui/themed";

const CourseCard = ({ source, title, progress, value }) => {
	return (
		<Card
			wrapperStyle={styles.levelContainer}
			containerStyle={styles.containerStyle}
		>
			<View
				style={{
					flexDirection: "row",
					gap: 10,
					alignItems: "center",
				}}
			>
				<Image source={source} style={styles.img} />
				<View>
					<View style={{ flexDirection: "row", gap: 40 }}>
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 20,
							}}
						>
							{title}
						</Text>
						<Text
							style={{
								fontWeight: "600",
								fontSize: 20,
								color: "rgba(0,0,0,.7)",
							}}
						>
							{progress}
						</Text>
					</View>
					<LinearProgress
						style={{
							marginVertical: 10,
							backgroundColor: "#D9D9D9",
							height: 8,
							borderRadius: 15,
						}}
						value={value}
						variant="determinate"
						color="#099045E5"
					/>
				</View>
			</View>
		</Card>
	);
};

export default CourseCard;

const styles = StyleSheet.create({
	img: {
		width: 50,
		height: 50,
	},
	levelContainer: {
		flexDirection: "row",
		backgroundColor: "rgba(217, 217, 217, 0.4)",
		justifyContent: "space-between",
		padding: 8,
		borderRadius: 6,
		alignItems: "center",
	},
	containerStyle: {
		padding: 0,
		width: "100%",
		alignSelf: "center",
		borderRadius: 12,
	},
});
