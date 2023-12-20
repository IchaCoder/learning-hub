import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./routes/Router";
import { AppProvider } from "./context/Context";

export default function App() {
	return (
		<>
			<AppProvider>
				<Router />
			</AppProvider>
			{/* <Signup /> */}
		</>
	);
}
