import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider, Button } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const About = () => {
	return (
		<View>
			<View style={styles.container}>
				<Text style={{ fontSize: 24, fontWeight: "bold" }}>
					About Us?
				</Text>
				<Text style={{ fontSize: 16, marginTop: 10 }}>
					KNUST E-LEARN is a mobile app for non students and students
					of the prestigious Kwame Nkrumah University of Science and
					Technology which aims at giving them an opportunity to take
					their respective courses virtually via mobile app. This app
					was developed by students from University of Ghana, Legon.
				</Text>
				<Divider style={{ marginVertical: 20 }} />
				<Text
					style={{ fontSize: 24, fontWeight: "bold", marginTop: 50 }}
				>
					Contact Us
				</Text>
				<Button
					icon={
						<MaterialCommunityIcons
							name="email-outline"
							size={24}
							color="black"
						/>
					}
					onPress={() =>
						Linking.openURL("mailto:support@example.com")
					}
					title="asargroup2023@gmail.com"
					type="clear"
					titleStyle={{ color: "black" }}
					containerStyle={{ alignItems: "flex-start" }}
				/>
				<Button
					icon={
						<MaterialCommunityIcons
							name="phone-in-talk-outline"
							size={24}
							color="black"
						/>
					}
					onPress={() => Linking.openURL("tel:+233 54 382 5901")}
					title="+233 54 382 5901"
					type="clear"
					titleStyle={{ color: "black" }}
					containerStyle={{ alignItems: "flex-start" }}
				/>

				<Text
					style={{ fontSize: 24, fontWeight: "bold", marginTop: 50 }}
				>
					Update version
				</Text>
				<Text style={{ fontSize: 16, marginTop: 10 }}>
					Version 2.0.0 will soon be available
				</Text>
			</View>
		</View>
	);
};

export default About;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
		marginVertical: 20,
	},
});
