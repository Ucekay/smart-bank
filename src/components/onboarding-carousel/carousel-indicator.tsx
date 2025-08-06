import { View } from "react-native";

import Animated, {
	Extrapolation,
	interpolate,
	interpolateColor,
	type SharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet } from "react-native-unistyles";
import { useAnimatedTheme } from "react-native-unistyles/reanimated";

export default function CarouselIndicator({
	progressIndex,
	totalItems,
}: {
	progressIndex: SharedValue<number>;
	totalItems: number;
}) {
	const theme = useAnimatedTheme();
	const dot1AnimatedStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				progressIndex.get(),
				[0, 1],
				[theme.get().colors.primary[400], theme.get().colors.neutral[300]],
			),
			width: interpolate(
				progressIndex.get(),
				[0, 1],
				[32, 8],
				Extrapolation.CLAMP,
			),
		};
	});
	const dot2AnimatedStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				progressIndex.get(),
				[0, 1, 2],
				[
					theme.get().colors.neutral[300],
					theme.get().colors.primary[400],
					theme.get().colors.neutral[300],
				],
			),
			width: interpolate(
				progressIndex.get(),
				[0, 1, 2],
				[8, 32, 8],
				Extrapolation.CLAMP,
			),
		};
	});
	const dot3AnimatedStyle = useAnimatedStyle(() => {
		return {
			backgroundColor: interpolateColor(
				progressIndex.get(),
				[1, 2],
				[theme.get().colors.neutral[300], theme.get().colors.primary[400]],
			),
			width: interpolate(
				progressIndex.get(),
				[1, 2],
				[8, 32],
				Extrapolation.CLAMP,
			),
		};
	});
	return (
		<View style={styles.container}>
			<Animated.View style={[styles.dot, dot1AnimatedStyle]} />
			<Animated.View style={[styles.dot, dot2AnimatedStyle]} />
			<Animated.View style={[styles.dot, dot3AnimatedStyle]} />
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	container: {
		flexDirection: "row",
		gap: 8,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 50,
	},
	dot: {
		height: 8,
		borderRadius: 4,
		backgroundColor: theme.colors.primary[400],
	},
}));
