import {
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import {
	MaterialCommunityIcons,
	AntDesign,
	Octicons,
} from "@expo/vector-icons";

const Buttons = ({ navigation }) => {
	return (
		<View style={styles.buttons}>
			<TouchableOpacity
				style={styles.levelContainer}
				onPress={() => navigation.push("Profile")}
			>
				<View
					style={{
						flexDirection: "row",
						gap: 15,
						alignItems: "center",
					}}
				>
					<Octicons
						name="person"
						size={24}
						color="black"
						style={styles.leftButton}
					/>
					<Text style={styles.text}>Profile</Text>
				</View>
				<AntDesign
					name="right"
					size={20}
					color="#000"
					style={{ alignSelf: "center" }}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.levelContainer}
				onPress={() => Alert.alert("Feature under development")}
			>
				<View
					style={{
						flexDirection: "row",
						gap: 15,
						alignItems: "center",
					}}
				>
					<MaterialCommunityIcons
						name="theme-light-dark"
						size={24}
						color="black"
						style={styles.leftButton}
					/>
					<Text style={styles.text}>Theme</Text>
				</View>
				<Image
					source={require("../../assets/toggle.png")}
					style={{ alignSelf: "center" }}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.levelContainer}
				onPress={() => navigation.push("About")}
			>
				<View
					style={{
						flexDirection: "row",
						gap: 15,
						alignItems: "center",
					}}
				>
					<AntDesign
						name="infocirlceo"
						size={24}
						color="black"
						style={styles.leftButton}
					/>
					<Text style={styles.text}>About Us</Text>
				</View>
				<AntDesign
					name="right"
					size={20}
					color="#000"
					style={{ alignSelf: "center" }}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Buttons;

const styles = StyleSheet.create({
	buttons: {
		marginTop: 10,
		gap: 6,
	},
	titleStyle: { color: "#222", fontSize: 18 },
	text: {
		fontSize: 18,
		fontWeight: "bold",
	},
	levelContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 15,
		paddingHorizontal: 5,
		borderRadius: 6,
	},
	leftButton: {
		backgroundColor: "#DCF0F9",
		padding: 10,
		borderRadius: 999,
	},
});
