import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { FontAwesome5 } from "@expo/vector-icons";
import { courses } from "../../library";
const data = [
	{ label: "Statistics", value: "statistics" },
	{ label: "Mathematics for IT", value: "mobile_money" },
];

const ChooseCourse = ({ setCourse, course, title }) => {
	const [isFocus, setIsFocus] = useState(false);
	console.log(courses[course]?.[0]?.label);

	return (
		<View style={styles.container}>
			<View>
				<Dropdown
					style={[
						styles.dropdown,
						isFocus && { borderColor: "blue" },
					]}
					placeholderStyle={styles.placeholderStyle}
					selectedTextStyle={styles.selectedTextStyle}
					inputSearchStyle={styles.inputSearchStyle}
					iconStyle={styles.iconStyle}
					data={courses[course]}
					search
					maxHeight={300}
					labelField="label"
					valueField="value"
					placeholder={!isFocus ? "Select Course" : "..."}
					searchPlaceholder="Search..."
					value={courses[course]?.[0]?.label}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onChange={(item) => {
						setCourse(item.value);
						setIsFocus(false);
					}}
					renderLeftIcon={() => (
						<FontAwesome5
							style={styles.icon}
							color={isFocus ? "blue" : "black"}
							name="money-check-alt"
							size={20}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default ChooseCourse;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
		marginTop: 20,
	},
	cardHeader: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 6,
	},
	dropdown: {
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
