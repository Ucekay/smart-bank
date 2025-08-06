import type { ReactNode } from "react";
import { View } from "react-native";

import { useHeaderHeight } from "@react-navigation/elements";
import { StyleSheet } from "react-native-unistyles";

interface CustomHeaderProps {
	/** 左側のヘッダーコンテンツ */
	headerLeft?: ReactNode;
	/** 右側のヘッダーコンテンツ */
	headerRight?: ReactNode;
	/** 中央のコンテナの中身 */
	centerContent?: ReactNode;
}

export function CustomHeader({
	headerLeft,
	headerRight,
	centerContent,
}: CustomHeaderProps) {
	const headerHeight = useHeaderHeight();
	return (
		<View style={styles.header(headerHeight)}>
			<View style={styles.leftContainer}>{headerLeft}</View>
			<View style={styles.container}>{centerContent}</View>
			<View style={styles.rightContainer}>{headerRight}</View>
		</View>
	);
}

const styles = StyleSheet.create((theme, rt) => ({
	header: (height: number) => ({
		height,
		paddingTop: rt.insets.top,
		alignItems: "center",
		flexDirection: "row",
	}),
	leftContainer: {
		position: "absolute",
		left: 0,
		bottom: 0,
	},
	rightContainer: {
		top: rt.insets.top,
		position: "absolute",
		right: 0,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
}));
