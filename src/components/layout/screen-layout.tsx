import { View } from "react-native";

import { StyleSheet } from "react-native-unistyles";

export default function ScreenLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		paddingTop: 28 + rt.insets.top,
		paddingBottom: 30 + rt.insets.bottom,
		flex: 1,
		backgroundColor: theme.colors.neutral[50],
	},
}));
