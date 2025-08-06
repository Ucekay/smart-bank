import { Pressable, type PressableProps } from "react-native";

import { StyleSheet } from "react-native-unistyles";

type IconContainerProps = Omit<PressableProps, "style">;

export default function IconContainer(props: IconContainerProps) {
	return <Pressable {...props} style={styles.container} />;
}

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		height: 44,
		width: 44,
		alignItems: "center",
		justifyContent: "center",
	},
}));
