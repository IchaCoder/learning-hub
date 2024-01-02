import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Button, Card } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

const descriptionText =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil";

const VideoDetails = ({ navigation }) => {
	const [showMoreText, setShowMoreText] = useState(false);
	return (
		<VirtualizedView>
			<View style={styles.card}>
				<Image
					source={require("../assets/lab.png")}
					style={{ width: "100%", height: 200 }}
				/>
				<View style={styles.info}>
					<Text style={{ fontSize: 18, fontWeight: "bold" }}>
						Introduction to Pharmacology
					</Text>
					<Text style={{ fontSize: 16, fontWeight: "600" }}>
						Course by{" "}
						<Text style={{ color: "#099045" }}>
							Prof. Twum Derrick{" "}
						</Text>
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								gap: 20,
							}}
						>
							<View style={{ flexDirection: "row" }}>
								<Entypo name="star" size={16} color="#FFC700" />
								<Text style={{ fontSize: 16 }}>4.5</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons
									name="timer-outline"
									size={16}
									color="rgba(0,0,0,0.5)"
								/>
								<Text
									style={{
										fontSize: 16,
										color: "rgba(0,0,0,0.5)",
									}}
								>
									1hr 5min
								</Text>
							</View>
						</View>
						<Button
							title={"Free"}
							buttonStyle={styles.buttonStyle}
						/>
					</View>
					<View style={styles.description}>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Description
						</Text>
						<Text style={{ fontSize: 18 }}>
							{!showMoreText
								? descriptionText.substring(0, 70) + "..."
								: descriptionText + "..."}
							<Text
								style={{
									color: "#099045",
								}}
								onPress={() => setShowMoreText(!showMoreText)}
							>
								{showMoreText ? "Read Less" : "Read More"}
							</Text>
						</Text>
					</View>
					<View style={{ marginTop: 10 }}>
						<Text style={{ fontSize: 18, fontWeight: "bold" }}>
							Lesson
						</Text>
						<View>
							<TouchableOpacity
								onPress={() => navigation.push("Lecture")}
							>
								<Card
									wrapperStyle={styles.levelContainer}
									containerStyle={styles.containerStyle}
								>
									<View
										style={{
											flexDirection: "row",
											gap: 10,
											alignItems: "center",
										}}
									>
										<AntDesign
											name="play"
											size={46}
											color="#099045"
										/>
										<View>
											<Text style={styles.text}>
												Lecture 1
											</Text>
										</View>
									</View>

									<AntDesign
										name="right"
										size={24}
										color="#099045"
									/>
								</Card>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => navigation.push("Lecture")}
							>
								<Card
									wrapperStyle={styles.levelContainer}
									containerStyle={styles.containerStyle}
								>
									<View
										style={{
											flexDirection: "row",
											gap: 10,
											alignItems: "center",
										}}
									>
										<AntDesign
											name="play"
											size={46}
											color="#099045"
										/>
										<View>
											<Text style={styles.text}>
												Lecture 2
											</Text>
										</View>
									</View>

									<AntDesign
										name="right"
										size={24}
										color="#099045"
									/>
								</Card>
							</TouchableOpacity>
						</View>
					</View>
					<Button
						title={"START NOW"}
						buttonStyle={[
							styles.buttonStyle,
							{ padding: 15, marginTop: 20 },
						]}
						onPress={() => navigation.push("Lecture")}
					/>
				</View>
			</View>
		</VirtualizedView>
	);
};

export default VideoDetails;

const styles = StyleSheet.create({
	card: {
		width: "90%",
		alignSelf: "center",
		borderRadius: 12,
	},
	info: {
		paddingVertical: 8,
		gap: 4,
		marginVertical: 2,
	},
	buttonStyle: {
		backgroundColor: "#099045",
		borderRadius: 12,
		paddingHorizontal: 20,
	},
	readMore: {
		padding: 0,
		margin: 0,
	},
	levelContainer: {
		flexDirection: "row",
		backgroundColor: "rgba(217, 217, 217, 0.4)",
		justifyContent: "space-between",
		padding: 8,
		borderRadius: 6,
		alignItems: "center",
	},
	containerStyle: {
		padding: 0,
		width: "100%",
		alignSelf: "center",
		borderRadius: 12,
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
