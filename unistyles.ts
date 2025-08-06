import { StyleSheet } from "react-native-unistyles";

import { defaultTheme } from "./themes";

const appThemes = {
	default: defaultTheme,
};
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
	export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
	themes: appThemes,
});
