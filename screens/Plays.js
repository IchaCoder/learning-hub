import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import { Ionicons } from "@expo/vector-icons";

const Plays = ({ navigation }) => {
	return (
		<VirtualizedView>
			<TouchableOpacity
				style={styles.card}
				onPress={() => navigation.push("Video Details")}
			>
				<Image
					source={require("../assets/lab.png")}
					style={{ width: "100%", height: 200 }}
				/>
				<View style={styles.info}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						Introduction to Pharmacology
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 40,
						}}
					>
						{/* <View style={{ flexDirection: "row" }}>
							<Entypo name="star" size={20} color="#FFC700" />
							<Text style={{ fontSize: 18 }}>4.5</Text>
						</View> */}
						<View style={{ flexDirection: "row" }}>
							<Ionicons
								name="timer-outline"
								size={21}
								color="rgba(0,0,0,0.5)"
							/>
							<Text
								style={{
									fontSize: 20,
									color: "rgba(0,0,0,0.5)",
								}}
							>
								1hr 5min
							</Text>
						</View>
						<Text
							style={{
								fontSize: 20,
								color: "#099045",
							}}
						>
							12 Sessions
						</Text>
					</View>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.card}
				onPress={() => navigation.push("Video Details")}
			>
				<Image
					source={require("../assets/play2.png")}
					style={{ width: "100%", height: 200 }}
				/>
				<View style={styles.info}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						Introduction to Pharmacology
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 40,
						}}
					>
						{/* <View style={{ flexDirection: "row" }}>
							<Entypo name="star" size={20} color="#FFC700" />
							<Text style={{ fontSize: 18 }}>4.5</Text>
						</View> */}
						<View style={{ flexDirection: "row" }}>
							<Ionicons
								name="timer-outline"
								size={21}
								color="rgba(0,0,0,0.5)"
							/>
							<Text
								style={{
									fontSize: 20,
									color: "rgba(0,0,0,0.5)",
								}}
							>
								5hr 5min
							</Text>
						</View>
						<Text
							style={{
								fontSize: 20,
								color: "#099045",
							}}
						>
							10 Sessions
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</VirtualizedView>
	);
};

export default Plays;

const styles = StyleSheet.create({
	card: {
		width: "90%",
		alignSelf: "center",
		borderWidth: 1,
		borderRadius: 12,
		marginTop: 20,
	},
	info: {
		padding: 8,
		gap: 4,
		marginVertical: 2,
	},
});
