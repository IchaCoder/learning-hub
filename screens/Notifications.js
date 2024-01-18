import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";

const Notifications = () => {
	return (
		<View style={styles.container}>
			<VirtualizedView>
				<View style={styles.notifications}>
					<Text style={styles.title}>Today</Text>

					<Card
						name="Dr. Richard Afful"
						text="
					has updated clinical pharmacy lectures
            "
						time="2h ago"
						img={require("../assets/notification/note1.png")}
					/>
					<Card
						name="Dr. Tsahey Gifty"
						text=" has updated Molecular Chemistry lectures"
						time="8h ago"
						img={require("../assets/notification/note2.png")}
					/>
					<Text style={[styles.title, { marginTop: 10 }]}>Older</Text>
					<Card
						name="Prof. Debrah Patrick"
						text="
					 has updated Microbiology lectures
            "
						time="22h ago"
						img={require("../assets/notification/note3.png")}
					/>
				</View>
			</VirtualizedView>
		</View>
	);
};

export default Notifications;

const Card = ({ name, text, time, img }) => {
	return (
		<View style={styles.card}>
			<Image source={img} />
			<View style={{ flex: 1 }}>
				<Text
					style={{
						fontSize: 18,
						color: "rgba(0,0,0,.4)",
						flex: 1,
						flexWrap: "wrap",
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							color: "black",
						}}
					>
						{name}
					</Text>{" "}
					{text}
				</Text>
				<Text style={{ fontSize: 16 }}>{time}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	notifications: {
		width: "90%",
		alignSelf: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	card: {
		flexDirection: "row",
		marginTop: 10,
		gap: 8,
	},
});
