import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Pressable,
	Platform,
} from "react-native";
import React, { useMemo, useState } from "react";
import FirebaseService from "../context/service";

//context API
import { useGlobalContext } from "../context/Context";
import { useForm, Controller } from "react-hook-form";
import { Button, Icon, Input } from "@rneui/themed";
import Toast from "react-native-root-toast";

const Login = ({ navigation }) => {
	const firebaseService = useMemo(() => new FirebaseService());

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		control,
	} = useForm();

	const handleLogin = async (values) => {
		const { email, password } = values;
		try {
			const user = await firebaseService.logIn(email, password);
			Toast.show("Login Successfull, Welcome!!", {
				duration: Toast.durations.LONG,
				position: Toast.positions.CENTER,
				shadow: true,
				animation: true,
				hideOnPress: true,
				delay: 0,
			});
		} catch (error) {
			console.error("Login failed:", error.message);
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
					rules={{ required: "Email field is required" }}
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

				{/* <Pressable
					onPress={() => navigation.navigate("Forgot Password")}
					style={styles.forgotPassword}
				>
					<Text style={styles.noAccountLabel}>
						Forgot password?{"  "}
						<Text style={styles.signUpLabel}>Reset</Text>
					</Text>
				</Pressable> */}

				{/* Login button */}
				<Button
					onPress={handleSubmit(handleLogin)}
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
					SIGN IN
				</Button>

				<View style={styles.options}>
					<Text style={styles.noAccountLabel}>
						- Or Sign in with -
					</Text>
					<View style={styles.singleOptions}>
						<Icon name="google" type="font-awesome" />
						<Icon name="apple" type="font-awesome" />
						<Icon name="facebook" type="font-awesome" />
						<Icon name="email" />
					</View>
				</View>

				{/* Sign up navigation */}
				<Pressable
					onPress={() => navigation.navigate("SIGN UP")}
					style={styles.signUpContainer}
				>
					<Text style={styles.noAccountLabel}>
						Don't have an account?{"  "}
						<Text style={styles.signUpLabel}>Sign Up</Text>
					</Text>
				</Pressable>
			</View>
		</KeyboardAvoidingView>
	);
};

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
	options: {
		marginTop: 40,
	},
	input: {
		padding: 10,
		height: 40,
		alignSelf: "center",
		borderRadius: 5,

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
	errorText: {
		color: "red",
		alignSelf: "center",
		marginTop: 10,
	},
	btn: {
		backgroundColor: "#FFF60A",
		padding: 10,
		height: 45,
		alignSelf: "center",
		borderRadius: 5,
		width: "80%",
		marginTop: 20,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,

		elevation: 3,
	},
	btnText: {
		color: "#484848",
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 18,
	},
	signUpContainer: {
		marginTop: 60,
	},
	noAccountLabel: {
		color: "#484848",
		alignSelf: "center",
		fontWeight: "bold",
		fontSize: 15,
	},

	signUpLabel: {
		color: "#099045",
	},
	inputContainer: {
		borderWidth: 1,
		width: "80%",
		alignSelf: "center",
		borderRadius: 6,
	},
	errorStyle: { width: "80%", alignSelf: "center" },
	singleOptions: {
		flexDirection: "row",
		gap: 20,
		alignSelf: "center",
		marginTop: 10,
	},
});

export default Login;
