import { Image, Linking, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Icon, ListItem } from "@rneui/themed";
import VirtualizedView from "../components/virtualize-view/VirtualizedView";

const Help = () => {
	const [expanded, setExpanded] = useState({
		one: false,
		two: false,
		three: false,
	});
	return (
		<VirtualizedView>
			<View style={styles.container}>
				<Image
					source={require("../assets/help2.png")}
					style={{ alignSelf: "center", marginTop: 40 }}
				/>
				<Text style={styles.heading}>
					Need Help? Let us know how we can assist you
				</Text>
				<Text
					style={{ fontSize: 16, textAlign: "center", marginTop: 20 }}
				>
					Here are some frequently asked questions(FAQs)
				</Text>
				<View style={{ marginTop: 40 }}>
					<ListItem.Accordion
						content={
							<>
								<ListItem.Content>
									<ListItem.Title>
										How do I search a course?
									</ListItem.Title>
								</ListItem.Content>
							</>
						}
						isExpanded={expanded.one}
						onPress={() => {
							setExpanded({
								one: !expanded.one,
								two: false,
								three: false,
							});
						}}
					>
						<ListItem>
							<Text>
								In the Home page click on the respective collage
								and follow up by clicking the faculty that
								offers the course are looking for.
							</Text>
						</ListItem>
					</ListItem.Accordion>
					<ListItem.Accordion
						content={
							<>
								<ListItem.Content>
									<ListItem.Title>
										How do i delete a course?
									</ListItem.Title>
								</ListItem.Content>
							</>
						}
						isExpanded={expanded.two}
						onPress={() => {
							setExpanded({
								one: false,
								two: !expanded.two,
								three: false,
							});
						}}
					>
						<ListItem>
							<Text>
								In the Home page click on the respective collage
								and follow up by clicking the faculty that
								offers the course are looking for.
							</Text>
						</ListItem>
					</ListItem.Accordion>
					<ListItem.Accordion
						content={
							<>
								<ListItem.Content>
									<ListItem.Title>
										How do i upload an assignment ?
									</ListItem.Title>
								</ListItem.Content>
							</>
						}
						isExpanded={expanded.three}
						onPress={() => {
							setExpanded({
								one: false,
								two: false,
								three: !expanded.three,
							});
						}}
					>
						<ListItem>
							<Text>
								In the Home page click on the respective collage
								and follow up by clicking the faculty that
								offers the course are looking for.
							</Text>
						</ListItem>
					</ListItem.Accordion>
				</View>
				<Text
					style={{ fontSize: 16, marginTop: 40, textAlign: "center" }}
				>
					Contact us on{" "}
					<Text
						onPress={() =>
							Linking.openURL("mailto:asargroup2023@gmail.com")
						}
						style={{ fontWeight: "bold" }}
					>
						asargroup2023@gmail.com
					</Text>
				</Text>
			</View>
		</VirtualizedView>
	);
};

export default Help;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
	},
	heading: {
		marginTop: 40,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
});
