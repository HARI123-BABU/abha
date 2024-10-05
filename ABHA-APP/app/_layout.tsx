import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from "react"
import "react-native-reanimated"
import "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded] = useFonts({
		Montserrat: require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
		"Palanquin-Thin": require("../assets/fonts/Palanquin-Thin.ttf"),
		"Palanquin-ExtraLight": require("../assets/fonts/Palanquin-ExtraLight.ttf"),
		"Palanquin-Light": require("../assets/fonts/Palanquin-Light.ttf"),
		"Palanquin-Regular": require("../assets/fonts/Palanquin-Regular.ttf"),
		"Palanquin-Medium": require("../assets/fonts/Palanquin-Medium.ttf"),
		"Palanquin-SemiBold": require("../assets/fonts/Palanquin-SemiBold.ttf"),
		"Palanquin-Bold": require("../assets/fonts/Palanquin-Bold.ttf")
	})

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(auth)/(register)/(aadhaar)/registerAadhaar" />
			</Stack>
		</GestureHandlerRootView>
	)
}
