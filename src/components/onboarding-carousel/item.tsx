import { Text, View } from "react-native";

import { Image } from "expo-image";

import { StyleSheet } from "react-native-unistyles";

export default function OnboardingCarouselItem({
  title,
  imageSrc,
  page,
}: {
  title: string;
  imageSrc: string;
  page: number;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        contentFit="contain"
        source={imageSrc}
        style={styles.image(page)}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    alignItems: "center",
    width: rt.screen.width,
    paddingHorizontal: 16,
  },
  textContainer: {
    width: "100%",
    gap: 10,
  },
  subtitle: {
    ...theme.typography.regular.footnote,
    color: theme.colors.neutral[700],
  },
  title: {
    ...theme.typography.bold.display,
    color: theme.colors.neutral[900],
    width: "100%",
  },
  image: (page: number) => ({
    width: rt.screen.width - 32,
    flex: 1,
    transform: [
      {
        scale: page === 2 ? 0.9 : 1,
      },
    ],
  }),
}));
