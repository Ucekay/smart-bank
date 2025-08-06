import { useState } from "react";
import { Button, Pressable, Text, View } from "react-native";

import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";

import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { withUnistyles } from "react-native-unistyles";

import { CustomHeader } from "@/src/components/layout/custom-header";
import IconContainer from "@/src/components/layout/icon-container";
import StepProgress from "@/src/components/step-progress";

const UniSymbolView = withUnistyles(SymbolView);

export default function Index() {
	const [step, setStep] = useState(1);
	return (
		<>
			<Stack.Screen
				options={{
					header: (props: NativeStackHeaderProps) => {
						return (
							<CustomHeader
								headerLeft={
									<IconContainer onPress={props.navigation.goBack}>
										<UniSymbolView
											name="arrow.backward"
											size={24}
											uniProps={(theme) => ({
												tintColor: theme.colors.primary[400],
											})}
										/>
									</IconContainer>
								}
								centerContent={
									<View
										style={{
											width: 157,
											height: "100%",
											justifyContent: "center",
										}}
									>
										<StepProgress currentStep={step} totalSteps={2} />
									</View>
								}
							/>
						);
					},
				}}
			/>
			<Text>Sign in</Text>
		</>
	);
}
