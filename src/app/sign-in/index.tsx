import { Pressable, Text } from "react-native";

import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";

import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { CustomHeader } from "@/src/components/layout/custom-header";
import IconContainer from "@/src/components/layout/icon-container";

export default function Index() {
	return (
		<>
			<Stack.Screen
				options={{
					header: (props: NativeStackHeaderProps) => {
						return (
							<CustomHeader
								headerLeft={
									<IconContainer onPress={props.navigation.goBack}>
										<SymbolView
											name="arrow.backward"
											size={24}
											tintColor={"#000000"}
										/>
									</IconContainer>
								}
								centerContent={<Text> progress</Text>}
							/>
						);
					},
				}}
			/>
			<Text>Sign in</Text>
		</>
	);
}
