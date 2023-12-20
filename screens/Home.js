import { SafeAreaView, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { FAB } from "@rneui/themed";
import FirebaseService from "../context/service";
// import Snackbar from 'react-native-snackbar';

// navigation prop comes when we wrap the component around stack.navigator
const Home = ({ navigation }) => {
	// const {  setIsLoggedIn } = useGlobalContext();
	const [userData, setUserData] = useState();
	const [status, setStatus] = useState();
	const firebaseService = useMemo(() => new FirebaseService());

	const handleLogout = async () => {
		firebaseService.logOut();
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.welcomeContainer}>
				{/* <Image
					source={{
						uri: "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/16:9/w_2240,c_limit/GettyImages-468366251.jpg",
						width: 400,
						height: 300,
						cache: "default",
					}}
					resizeMode="contain"
				/> */}
				<Text style={styles.message}>Welcome to KNUST E-LEARNING HUB</Text>
			</View>
			<FAB
				placement="center"
				color="#FFF60A"
				size="large"
				title="Logout"
				onPress={handleLogout}
			/>
			{/* <SnackBar setSnackBar={status} /> */}
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#099045",
	},
	welcomeContainer: {
		padding: 12,

		flex: 1,
		alignItems: "center",
	},
	message: {
		fontSize: 26,
		fontWeight: "500",
		color: "#FFFFFF",
	},
	userContainer: {
		marginTop: 24,
	},
	userDetails: {
		fontSize: 20,
		color: "#FFFFFF",
	},
});
