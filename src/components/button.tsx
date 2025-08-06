import { Pressable, type PressableProps, Text } from "react-native";

import { StyleSheet } from "react-native-unistyles";

export type ButtonVariant = "primary" | "secondary" | "cta";

type ButtonProps = Omit<PressableProps, "style"> & {
	title: string;
	variant: ButtonVariant;
	isDark: boolean;
};

export default function Button(props: ButtonProps) {
	const { title, variant, isDark, ...pressableProps } = props;
	styles.useVariants({
		color: variant,
		isDark: isDark,
	});

	return (
		<Pressable {...pressableProps} style={styles.container}>
			<Text style={styles.label}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create((theme) => ({
	container: {
		justifyContent: "center",
		alignItems: "center",
		height: 48,
		borderRadius: 12,
		borderCurve: "continuous",
		variants: {
			color: {
				primary: {},
				secondary: {},
				cta: { backgroundColor: theme.colors.neutral[200] },
			},
			isDark: {
				true: {},
				false: {},
			},
		},
		compoundVariants: [
			{
				color: "primary",
				isDark: false,
				styles: {
					backgroundColor: theme.colors.primary[500],
				},
			},
			{
				color: "primary",
				isDark: true,
				styles: {
					backgroundColor: theme.colors.secondary[500],
				},
			},
			{
				color: "secondary",
				isDark: false,
				styles: {
					backgroundColor: theme.colors.secondary[500],
				},
			},
			{
				color: "secondary",
				isDark: true,
				styles: {},
			},
		],
	},
	label: {
		...theme.typography.bold.callout,
		variants: {
			color: {
				primary: {},
				secondary: {},
				cta: { color: theme.colors.primary[800] },
			},
			isDark: {
				true: {},
				false: {},
			},
		},
		compoundVariants: [
			{
				color: "primary",
				isDark: false,
				styles: {
					color: "white",
				},
			},
			{
				color: "primary",
				isDark: true,
				styles: {
					color: theme.colors.primary[800],
				},
			},
			{
				color: "secondary",
				isDark: false,
				styles: {
					color: "white",
				},
			},
			{
				color: "secondary",
				isDark: true,
				styles: {
					color: "white",
				},
			},
		],
	},
}));
