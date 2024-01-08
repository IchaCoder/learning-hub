import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native";

const Profile = () => {
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
				<View style={{ position: "relative" }}>
					<Image
						source={require("../assets/dp.png")}
						style={{ alignSelf: "center" }}
					/>
					<Pressable
						style={{ position: "absolute", right: 105, top: 0 }}
						onPress={pickImage}
					>
						<Image source={require("../assets/camera.png")} />
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({});
