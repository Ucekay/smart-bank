import { GestureResponderEvent, Text, View } from "react-native";

import { useRouter } from "expo-router";

import { StyleSheet } from "react-native-unistyles";

import Button from "../components/button";
import ScreenLayout from "../components/layout/screen-layout";
import { OnboardingCarousel } from "../components/onboarding-carousel";

export default function OnboardingScreen() {
	return (
		<ScreenLayout>
			<View style={styles.inner}>
				<Text style={styles.subtitle}>Welcome to Smartbank</Text>
				<OnboardingCarousel />
			</View>
			<ButtonGroup />
		</ScreenLayout>
	);
}

function ButtonGroup() {
	const router = useRouter();
	const handleSignUp = () => {
		router.push("/sign-in");
	};

	return (
		<View style={styles.buttonsContainer}>
			<Button
				title="Sign up"
				variant="primary"
				isDark={false}
				onPress={handleSignUp}
			/>
			<Button
				title="Log in"
				variant="cta"
				isDark={false}
				onPress={() => {
					// This is where you would handle the log-in logic with Clerk
					console.log("Log In button pressed");
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create((theme, rt) => ({
	inner: {
		flex: 1,
		gap: 10,
	},
	subtitle: {
		...theme.typography.regular.callout,
		color: theme.colors.neutral[700],
		paddingHorizontal: 16,
	},
	buttonsContainer: {
		paddingHorizontal: 16,
		gap: 16,
	},
}));
