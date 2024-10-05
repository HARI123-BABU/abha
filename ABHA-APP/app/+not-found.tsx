import CusButton from "@/components/CusButton"
import { Link, router, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<SafeAreaView className="h-full bg-black">
				<ScrollView
					contentContainerStyle={{
						height: "100%",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Text className="text-white text-center font-palanquin-bold text-3xl">
						Oops!
					</Text>
					<Text className="text-white/75 text-center font-palanquin-medium font-semibold text-xl">
						This Page doesn't exist.
					</Text>
					<View className="mt-6 w-full px-24">
						<CusButton variant="secondary" onPress={() => router.back()}>
							Go Back
						</CusButton>
					</View>
				</ScrollView>

				<StatusBar style="light" backgroundColor="#0c0c0c" />
			</SafeAreaView>
		</>
	)
}
