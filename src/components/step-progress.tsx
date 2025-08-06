import React, { useEffect } from "react";
import { View } from "react-native";

import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import { StyleSheet } from "react-native-unistyles";

interface StepProgressProps {
	currentStep: number;
	totalSteps: number;
}

export default function StepProgress({
	currentStep,
	totalSteps,
}: StepProgressProps) {
	const progressPercentage = Math.min((currentStep / totalSteps) * 100, 100);
	const animatedWidth = useSharedValue(0);

	// useEffect(() => {

	// }, [progressPercentage, animatedWidth]);

	const animatedStyle = useAnimatedStyle(() => {
		animatedWidth.set(
			withSpring(progressPercentage, { overshootClamping: true }),
		);
		return {
			width: `${animatedWidth.value}%`,
		};
	});

	return (
		<View style={styles.container}>
			<View style={styles.progressBar}>
				<Animated.View style={[styles.progressFill, animatedStyle]} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create((theme) => ({
	container: {
		alignItems: "center",
		gap: 8,
	},
	progressBar: {
		width: "100%",
		height: 6,
		borderRadius: 3,
		overflow: "hidden",
		backgroundColor: theme.colors.neutral[300],
	},
	progressFill: {
		height: "100%",
		borderRadius: 3,
		backgroundColor: theme.colors.primary[400],
	},
}));
