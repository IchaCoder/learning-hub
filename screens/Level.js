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

const Level = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<View style={styles.container}>
				<Item title="LEVEL 100" navigation={navigation} />
				<Item title="LEVEL 200" navigation={navigation} />
				<Item title="LEVEL 300" navigation={navigation} />
				<Item title="LEVEL 400" navigation={navigation} />
				<Item title="LEVEL 500" navigation={navigation} />
				<Item title="LEVEL 600" navigation={navigation} />
			</View>
		</SafeAreaView>
	);
};

const Item = ({ title, navigation }) => {
	return (
		<TouchableOpacity onPress={() => navigation.push("Choose Course")}>
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
