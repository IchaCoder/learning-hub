import {
	Image,
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card } from "@rneui/themed";
import Buttons from "../components/settings/buttons";
import FirebaseService from "../context/service";

const Settings = ({ navigation }) => {
	const firebaseService = useMemo(() => new FirebaseService());
	const handleLogout = async () => {
		firebaseService.logOut();
	};

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<View style={styles.card}>
					<View style={{ flexDirection: "row", gap: 6 }}>
						<Image source={require("../assets/dp.png")} />
						<View style={{ alignSelf: "center" }}>
							<Text
								style={{
									color: "rgba(0,0,0,.6)",
									fontSize: 16,
								}}
							>
								Welcome
							</Text>
							<Text style={styles.name}>Kormla Frederick</Text>
						</View>
					</View>
					<Card.Divider style={{ marginTop: 10 }} />
					<Buttons navigation={navigation} />
				</View>
				<Pressable onPress={() => navigation.push("Help")}>
					<ImageBackground
						source={require("../assets/help1.png")}
						style={styles.help}
					>
						<Image
							source={require("../assets/headphone.png")}
							// style={{ justifyContent: "center" }}
						/>
						<Text style={{ color: "#fff", fontSize: 18 }}>
							Need Help?
						</Text>
					</ImageBackground>
				</Pressable>

				<Button
					containerStyle={{ marginTop: 40 }}
					type="clear"
					titleStyle={{ color: "black", fontWeight: "bold" }}
					buttonStyle={{
						borderWidth: 2,
						borderColor: "#099045",
						borderRadius: 20,
					}}
					onPress={handleLogout}
				>
					LOG OUT
				</Button>
			</View>
		</SafeAreaView>
	);
};

export default Settings;

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
		width: "90%",
		alignSelf: "center",
		marginBottom: 20,
	},
	card: {
		width: "100%",
		alignSelf: "center",
		marginTop: 20,
		borderRadius: 10,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
	},
	buttons: {
		marginTop: 10,
		gap: 12,
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
	help: {
		width: "100%",
		borderRadius: 20,
		height: 100,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 50,
	},
});
