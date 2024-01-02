import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";

const LectureRoom = () => {
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});
	return (
		<View style={styles.container}>
			<Video
				ref={video}
				style={styles.video}
				source={{
					uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
				}}
				useNativeControls
				resizeMode={ResizeMode.CONTAIN}
				isLooping
				onPlaybackStatusUpdate={(status) => setStatus(() => status)}
			/>
		</View>
	);
};

export default LectureRoom;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
		borderRadius: 12,
	},
	video: {
		height: 300,
		width: "100%",
	},
});
