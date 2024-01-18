import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import React, { useMemo, useState } from "react";
import { useGlobalContext } from "../context/Context";
import FirebaseService from "../context/service";
import { Controller, useForm } from "react-hook-form";
import Toast from "react-native-root-toast";
function generateRandomDigits() {
	// Generate a random number between 10000 and 99999
	const randomDigits = Math.floor(10000 + Math.random() * 90000);

	// Convert the number to a string
	const randomDigitsString = randomDigits.toString();

	return randomDigitsString;
}

const Signup = ({ navigation }) => {
	const { setUser } = useGlobalContext();

	const firebaseService = useMemo(() => new FirebaseService());

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		control,
		watch,
	} = useForm();

	const handleSignup = async (values) => {
		const { email, password, name } = values;
		try {
			const user = await firebaseService.signUp(email, password);
			if (user) {
				try {
					await firebaseService.addUserDetails({
						email,
						name,
						uid: user?.uid,
						id: generateRandomDigits,
					});
				} catch (error) {
					console.error("Adding doc failed:", error.message);
				}
			}
			setUser(user);
			Toast.show("Sign up Successfull, Welcome!!", {
				duration: Toast.durations.LONG,
				position: Toast.positions.CENTER,
				shadow: true,
				animation: true,
				hideOnPress: true,
				delay: 0,
			});
			// Do something with the user, e.g., update state or navigate to another screen
		} catch (error) {
			console.error("Signup failed:", error.message);
			Toast.show(`Error: ${error.message.replace("Firebase: ", "")}`, {
				duration: Toast.durations.LONG,
				position: Toast.positions.CENTER,
				shadow: true,
				animation: true,
				hideOnPress: true,
				delay: 0,
			});
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.formContainer}>
				{/* <Image source={require("../assets/favicon.png")} /> */}

				{/* Email */}
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder="Email"
							placeholderTextColor={"#AEAEAE"}
							keyboardType="email-address"
							style={styles.input}
							inputContainerStyle={styles.inputContainer}
							onChangeText={(value) => onChange(value)}
							value={value}
							errorMessage={
								errors?.email?.message
									? errors?.email?.message
									: null
							}
							errorStyle={styles.errorStyle}
						/>
					)}
					name="email"
					rules={{
						required: "Email field is required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Provide a valid email address",
						},
					}}
				/>

				{/* Name */}
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder="Username"
							placeholderTextColor={"#AEAEAE"}
							style={styles.input}
							inputContainerStyle={styles.inputContainer}
							onChangeText={(value) => onChange(value)}
							value={value}
							errorMessage={
								errors?.name?.message
									? errors?.name?.message
									: null
							}
							errorStyle={styles.errorStyle}
						/>
					)}
					name="name"
					rules={{ required: "Name field is required" }}
				/>

				{/* Password */}
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder="Password"
							placeholderTextColor={"#AEAEAE"}
							{...register("password", {
								required: "Password field is required",
							})}
							style={styles.input}
							onChangeText={(value) => onChange(value)}
							value={value}
							secureTextEntry
							inputContainerStyle={styles.inputContainer}
							errorMessage={
								errors?.password?.message
									? errors?.password?.message
									: null
							}
							errorStyle={styles.errorStyle}
						/>
					)}
					name="password"
					rules={{
						required: "Password field is required",
						minLength: {
							value: 6,
							message:
								"Password field must be at least 6 characters",
						},
					}}
				/>
				{/* Password */}
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder="Confirm Password"
							placeholderTextColor={"#AEAEAE"}
							style={styles.input}
							onChangeText={(value) => onChange(value)}
							value={value}
							secureTextEntry
							inputContainerStyle={styles.inputContainer}
							errorMessage={
								errors?.confirm_password?.message
									? errors?.confirm_password?.message
									: null
							}
							errorStyle={styles.errorStyle}
						/>
					)}
					name="confirm_password"
					rules={{
						required: "Password field is required",
						validate: (val) => {
							if (watch("password") != val) {
								return "Your passwords do no match";
							}
						},
					}}
				/>

				{/* Signup button */}
				<Button
					onPress={handleSubmit(handleSignup)}
					size="sm"
					type="solid"
					color={"#FFF60A"}
					containerStyle={{
						alignSelf: "center",
						width: "75%",
						marginTop: 20,
					}}
					buttonStyle={{
						padding: 10,
						borderRadius: 8,
					}}
					loading={isSubmitting}
					titleStyle={{ color: "black" }}
				>
					SIGN UP
				</Button>

				<View style={styles.options}>
					<Text style={styles.noAccountLabel}>
						- Or Sign Up with -
					</Text>
					<View style={styles.singleOptions}>
						<Icon name="google" type="font-awesome" />
						<Icon name="apple" type="font-awesome" />
						<Icon name="facebook" type="font-awesome" />
						<Icon name="email" />
					</View>
				</View>

				{/* Login navigation */}
				<Pressable
					onPress={() => navigation.navigate("SIGN IN")}
					style={styles.loginContainer}
				>
					<Text style={styles.haveAccountLabel}>
						Already have an account?{"  "}
						<Text style={styles.loginLabel}>Login</Text>
					</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Signup;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	formContainer: {
		justifyContent: "center",
		alignContent: "center",
		height: "100%",
	},
	appName: {
		color: "#D921A5",
		fontSize: 40,
		fontWeight: "bold",
		alignSelf: "center",
		marginBottom: 20,
	},
	input: {
		backgroundColor: "#fff",
		padding: 10,
		height: 40,
		alignSelf: "center",
		width: "80%",
		color: "#000000",
		marginTop: 10,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.23,
		// shadowRadius: 2.62,

		// elevation: 1,
	},
	inputContainer: {
		borderWidth: 1,
		width: "80%",
		alignSelf: "center",
		borderRadius: 6,
	},
	errorText: {
		color: "red",
		alignSelf: "center",
		marginTop: 10,
	},
	btnText: {
		color: "#484848",
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 18,
	},
	loginContainer: {
		marginTop: 80,
	},
	haveAccountLabel: {
		color: "#484848",
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 15,
	},
	loginLabel: {
		color: "#099045",
	},
	errorStyle: { width: "80%", alignSelf: "center" },
	options: {
		marginTop: 40,
	},
	singleOptions: {
		flexDirection: "row",
		gap: 20,
		alignSelf: "center",
		marginTop: 10,
	},
	noAccountLabel: {
		color: "#484848",
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 15,
	},
});
