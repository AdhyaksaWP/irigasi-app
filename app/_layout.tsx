import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import React from 'react';

import GlobalProvider from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "NunitoSans-Light": require("../assets/fonts/NunitoSans_7pt-Light.ttf"),
    "NunitoSans-Medium": require("../assets/fonts/NunitoSans_7pt-Medium.ttf"),
    "NunitoSans-Semibold": require("../assets/fonts/NunitoSans_7pt-SemiBold.ttf"),
    "NunitoSans-Bold": require("../assets/fonts/NunitoSans_7pt-Bold.ttf"),
    "PTSans-Regular": require("../assets/fonts/PTSans-Regular.ttf"),
    "PTSans-Bold": require("../assets/fonts/PTSans-Bold.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      return;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    // You can show a loading spinner or any other loading UI here
    return null;
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
