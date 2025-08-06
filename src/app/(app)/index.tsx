import { Text, View } from "react-native";

import { getLoadedFonts } from "expo-font";

import { StyleSheet } from "react-native-unistyles";

export default function Index() {
	const fonts = getLoadedFonts();
	console.log("Loaded fonts:", fonts);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Smart Bank</Text>
			<Text style={styles.subtitle}>Welcome to your financial future</Text>
			<Text style={styles.bodyText}>
				This text is using the SpaceMono font loaded from your local assets.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		padding: 20,
	},

	title: { ...theme.typography.regular.display },
	subtitle: {
		fontSize: 18,
		color: "#666",
		marginBottom: 20,
	},
	bodyText: {
		fontSize: 14,
		color: "#888",
		textAlign: "center",
		lineHeight: 20,
	},
}));
