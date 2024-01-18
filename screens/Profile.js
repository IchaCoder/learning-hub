import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import ProfileDetails from "../components/profile/profile";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import { useFetchUser } from "../hooks/useFetch";
import { useGlobalContext } from "../context/Context";

const Profile = () => {
	const [image, setImage] = useState(null);
	const { user } = useGlobalContext();
	const { data, loading } = useFetchUser(user?.uid);
	console.log(data);

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
		<VirtualizedView>
			<View style={{ flex: 1, backgroundColor: "white" }}>
				<View
					style={{
						width: "90%",
						alignSelf: "center",
						marginTop: 20,
					}}
				>
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
					<View>
						<ProfileDetails data={data} loading={loading} />
					</View>
				</View>
			</View>
		</VirtualizedView>
	);
};

export default Profile;

const styles = StyleSheet.create({});
