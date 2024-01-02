import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import { Entypo } from "@expo/vector-icons";

const CourseMaterial = () => {
	return (
		<SafeAreaView style={styles.container}>
			<VirtualizedView>
				<View style={styles.subContainer}>
					<View style={{ flexDirection: "row", gap: 15 }}>
						<Entypo name="folder" size={50} color="black" />
						<View>
							<Text style={styles.mainText}>
								SMS 101_Human Anatomy_Lecture_1_Slides
							</Text>
							<Text style={styles.subText}>
								Download PDF here
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row", gap: 15 }}>
						<Entypo name="folder" size={50} color="black" />
						<View>
							<Text style={styles.mainText}>
								SMS 103 _Cell Biology & Genetics_Lecture_2
							</Text>
							<Text style={styles.subText}>
								Download PDF here
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row", gap: 15 }}>
						<Entypo name="folder" size={50} color="black" />
						<View>
							<Text style={styles.mainText}>
								SMS 107_Mechanisms of Disease_Lecture_2
							</Text>
							<Text style={styles.subText}>
								Download PDF here
							</Text>
						</View>
					</View>
				</View>
			</VirtualizedView>
		</SafeAreaView>
	);
};

export default CourseMaterial;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	subContainer: {
		width: "90%",
		alignSelf: "center",
		height: 600,
		gap: 20,
	},
	mainText: {
		fontSize: 20,
		fontWeight: "800",
		marginBottom: 10,
	},
	subText: {
		fontSize: 16,
	},
});
