import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "@rneui/themed";
import { levels } from "../library";

const Level = ({ navigation, route }) => {
	const { params } = route;

	const newLevels =
		params.title !== "Faculty of Medicine" ? levels.slice(0, -2) : levels;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={styles.container}>
				{newLevels.map((level) => (
					<Item
						title={`LEVEL ${level}`}
						navigation={navigation}
						key={level}
						params={params}
					/>
				))}
			</View>
		</SafeAreaView>
	);
};

const Item = ({ title, navigation, params }) => {
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.push("Choose Course", { title: params.title })
			}
		>
			<Card
				wrapperStyle={styles.levelContainer}
				containerStyle={{ padding: 0 }}
			>
				<Text style={styles.text}>{title}</Text>
				<AntDesign name="right" size={24} color="#099045" />
			</Card>
		</TouchableOpacity>
	);
};

export default Level;

const styles = StyleSheet.create({
	container: { width: "90%", alignSelf: "center" },
	text: {
		fontSize: 18,
		fontWeight: "bold",
	},
	levelContainer: {
		flexDirection: "row",
		backgroundColor: "rgba(217, 217, 217, 0.4)",
		justifyContent: "space-between",
		padding: 15,
		borderRadius: 6,
	},
});
