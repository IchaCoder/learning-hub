import {
	Image,
	StyleSheet,
	Text,
	View,
	ScrollView,
	FlatList,
	Pressable,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import FirebaseService from "../context/service";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { colleges } from "../library";

const list = [
	{ name: "College of Health Sciences" },
	{ name: "College of Sciences" },
	{ name: "College of Engineering" },
	{ name: "College of Humanities" },
	{ name: "College of Arts" },
];

// navigation prop comes when we wrap the component around stack.navigator
const Home = ({ navigation }) => {
	// const {  setIsLoggedIn } = useGlobalContext();
	const firebaseService = useMemo(() => new FirebaseService());

	const handleLogout = async () => {
		firebaseService.logOut();
	};

	return (
		<SafeAreaView style={styles.container}>
			<VirtualizedView>
				<View style={styles.welcomeContainer}>
					<View>
						<Text
							style={{
								fontSize: 18,
								fontWeight: "500",
								color: "white",
							}}
						>
							Hello Kormla
						</Text>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								color: "white",
								textAlign: "center",
							}}
						>
							Welcome to KNUST E-learn
						</Text>
					</View>

					<MaterialCommunityIcons
						name="account-circle"
						size={50}
						color="white"
						onPress={() => navigation.push("Settings")}
					/>
				</View>
				<View style={styles.imageContainer}>
					<Image
						source={require("../assets/knust.png")}
						resizeMode="cover"
						style={{ width: "100%" }}
					/>
				</View>

				<FlatList
					data={colleges}
					renderItem={({ item }) => (
						<Item name={item.name} navigation={navigation} />
					)}
					keyExtractor={(item) => item.name}
					style={{ marginBottom: 20 }}
				/>
			</VirtualizedView>
		</SafeAreaView>
	);
};

const Item = ({ name, navigation }) => {
	return (
		<Pressable
			style={styles.collegeCard}
			onPress={() => navigation.push("Departments", { title: name })}
		>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					textAlign: "center",
				}}
			>
				{name}
			</Text>
		</Pressable>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#099045",
	},
	welcomeContainer: {
		width: "90%",
		alignSelf: "center",
		justifyContent: "space-between",
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	imageContainer: {
		width: "90%",
		alignSelf: "center",
		marginTop: 20,
	},
	collegeCard: {
		backgroundColor: "#FFF60A",
		width: "90%",
		alignSelf: "center",
		marginTop: 20,
		padding: 10,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#FFF",
	},
});
