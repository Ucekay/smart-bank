import { Stack } from "expo-router";

import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

import { SplashScreenController } from "../splash";

export default function RootLayout() {
	return (
		<ClerkProvider tokenCache={tokenCache}>
			<SplashScreenController />
			<RootNavigator />
		</ClerkProvider>
	);
}

function RootNavigator() {
	const { isSignedIn } = useAuth();

	if (isSignedIn === undefined) {
		return null;
	}

	return (
		<Stack>
			<Stack.Protected guard={isSignedIn === true}>
				<Stack.Screen name="(app)" />
			</Stack.Protected>
			<Stack.Protected guard={isSignedIn === false}>
				<Stack.Screen
					name="onboarding"
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="sign-in"
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Protected>
		</Stack>
	);
}
