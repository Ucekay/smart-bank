import { SplashScreen } from "expo-router";

import { useAuth } from "@clerk/clerk-expo";

export function SplashScreenController() {
  const { isLoaded } = useAuth();

  if (isLoaded) {
    SplashScreen.hideAsync();
  }

  return null;
}
