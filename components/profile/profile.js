import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	Pressable,
	Platform,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Icon, Input } from "@rneui/themed";
import Toast from "react-native-root-toast";

const ProfileDetails = ({ navigation, data, loading }) => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		control,
		setValue,
	} = useForm();

	const handleSaveChanges = (values) => {
		console.log(values);
	};

	useEffect(() => {
		setValue("name", data?.name);
		setValue("email", data?.email);
		setValue("id", data?.student_id);
	}, [loading]);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.formContainer}>
				<Text
					style={{
						fontSize: 16,
						marginBottom: 10,
						marginLeft: 10,
					}}
				>
					Name
				</Text>
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
					disabled
				/>

				{/* Email */}
				<Text
					style={{
						fontSize: 16,
						marginBottom: 10,
						marginLeft: 10,
					}}
				>
					Email
				</Text>
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
					disabled
				/>
				<Text
					style={{
						fontSize: 16,
						marginBottom: 10,
						marginLeft: 10,
					}}
				>
					Student ID
				</Text>
				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							placeholder="+233 555544554"
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
					name="id"
					rules={{ required: "Student ID is required" }}
					disabled
				/>
				{/* <Button
					onPress={handleSubmit(handleSaveChanges)}
					size="sm"
					type="solid"
					color={"#FFF60A"}
					containerStyle={{
						alignSelf: "center",
						width: "75%",
						marginVertical: 20,
					}}
					buttonStyle={{
						padding: 10,
						borderRadius: 8,
					}}
					loading={isSubmitting}
					titleStyle={{ color: "black" }}
				>
					SAVE
				</Button> */}
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		justifyContent: "center",
		alignContent: "center",
		marginTop: 40,
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

		width: "100%",
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
		width: "100%",
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

export default ProfileDetails;
