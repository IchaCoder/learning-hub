import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import { departments } from "../components/data/data";

const HealthScience = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<VirtualizedView>
				<View
					style={{ width: "90%", alignSelf: "center", marginTop: 10 }}
				>
					<FlatList
						data={departments}
						renderItem={({ item }) => (
							<Item name={item.name} navigation={navigation} />
						)}
						keyExtractor={(item) => item.name}
						style={{ marginBottom: 20, gap: 20 }}
						numColumns={2}
						columnWrapperStyle={{
							gap: 15,
							width: "100%",
							justifyContent: "center",
						}}
					/>
				</View>
			</VirtualizedView>
		</View>
	);
};

const Item = ({ name, navigation }) => {
	return (
		<Pressable style={styles.card} onPress={() => navigation.push("Level")}>
			<Text style={styles.text}>{name}</Text>
		</Pressable>
	);
};

export default HealthScience;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	card: {
		width: "50%",
		height: 150,
		backgroundColor: "rgba(217, 217, 217, 0.2)",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		shadowColor: "red",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 1,
		shadowRadius: 2.62,
		borderWidth: 1,
		borderColor: "rgba(0,0,0,.1)",
		borderStyle: "solid",
		// elevation: 0.1,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#099045",
		textAlign: "center",
	},
});
