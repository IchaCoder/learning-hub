import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import { departments } from "../components/data/data";
import { faculties } from "../library";

const HealthScience = ({ navigation, route }) => {
	const { params } = route;

	useEffect(() => {
		navigation.setOptions({
			title: params.title,
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<VirtualizedView>
				<View
					style={{
						width: "90%",
						alignSelf: "center",
						marginTop: 10,
						flexDirection: "row",
						gap: 10,
					}}
				>
					{faculties[params.title].map((dep) => (
						<Item name={dep} navigation={navigation} key={dep} />
					))}
				</View>
			</VirtualizedView>
		</View>
	);
};

const Item = ({ name, navigation }) => {
	return (
		<Pressable
			style={styles.card}
			onPress={() => navigation.push("Level", { title: name })}
		>
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
