import CusButton from "@/components/CusButton"
import { OnboardingData } from "@/constants/Data"
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetBackdropProps,
	BottomSheetModalProvider
} from "@gorhom/bottom-sheet"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useCallback, useEffect, useRef } from "react"
import { BackHandler, Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import Carousel from "react-native-reanimated-carousel"
import { SafeAreaView } from "react-native-safe-area-context"

const LandingPage = () => {
	const width = Dimensions.get("window").width
	const height = Dimensions.get("window").height

	const renderBackdrop = useCallback(
		(props: BottomSheetBackdropProps) => (
			<BottomSheetBackdrop
				{...props}
				appearsOnIndex={0}
				disappearsOnIndex={-1}
				opacity={0.5}
			/>
		),
		[]
	)

	const createAccountBottomSheetRef = useRef<BottomSheet>(null)
	const LoginBottomSheetRef = useRef<BottomSheet>(null)

	useEffect(() => {
		BackHandler.addEventListener("hardwareBackPress", () => {
			LoginBottomSheetRef.current?.close()
			createAccountBottomSheetRef.current?.close()
			return null
		})
		return () => {
			BackHandler.removeEventListener("hardwareBackPress", () => {
				LoginBottomSheetRef.current?.close()
				createAccountBottomSheetRef.current?.close()
				return null
			})
		}
	}, [])

	return (
		<BottomSheetModalProvider>
			<SafeAreaView className="h-full bg-black">
				<View className="h-3/4 bg-black">
					<Carousel
						loop
						autoPlay
						mode="parallax"
						autoPlayInterval={1800}
						width={width}
						height={Number(height * (3 / 4))}
						data={OnboardingData}
						renderItem={({ item }) => (
							<View className="p-4 space-y-6 h-full w-full">
								<View className="w-full aspect-[3/4] overflow-hidden relative rounded-xl">
									<Image
										source={item.imageUrl}
										className="absolute w-full h-full inset-0 object-cover object-center rounded-xl"
									/>
								</View>
								<View className="space-y-2 ">
									<Text className="text-3xl font-palanquin-bold text-white">
										{item.heading}
									</Text>
									<Text className="text-white/75 text-lg font-palanquin-medium">
										{item.description}
									</Text>
								</View>
							</View>
						)}
					/>
				</View>
				<View className="h-1/4 px-4 justify-evenly py-4">
					<CusButton
						variant="secondary"
						onPress={() => createAccountBottomSheetRef.current?.expand()}
					>
						Get Started With ABHA
					</CusButton>
					<CusButton
						variant="outline"
						onPress={() => LoginBottomSheetRef.current?.expand()}
					>
						Login to ABHA
					</CusButton>
				</View>

				<BottomSheet
					snapPoints={["30%"]}
					enablePanDownToClose
					index={-1}
					ref={createAccountBottomSheetRef}
					backdropComponent={renderBackdrop}
				>
					<View className="flex-1 space-y-3 px-8 py-6">
						<TouchableOpacity
							activeOpacity={0.85}
							className="flex-grow w-full border rounded-xl bg-black items-center justify-center"
							onPress={() => {
								createAccountBottomSheetRef.current?.close()
								// @ts-ignore
								router.push("/registerAadhaar")
							}}
						>
							<Text className="text-center font-palanquin-semibold text-xl text-white">
								Register With Aadhaar
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.85}
							className="flex-grow w-full rounded-xl bg-black items-center justify-center"
						>
							<Text className="text-center font-palanquin-semibold text-xl text-white">
								Register With PAN
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.85}
							className="flex-grow w-full rounded-xl items-center justify-center"
						>
							<Text className="text-center font-palanquin-bold text-xl text-black">
								Register Manually
							</Text>
						</TouchableOpacity>
					</View>
				</BottomSheet>

				<BottomSheet
					snapPoints={["30%"]}
					enablePanDownToClose
					index={-1}
					ref={LoginBottomSheetRef}
					backdropComponent={renderBackdrop}
				>
					<View className="flex-1 space-y-3 px-8 py-6">
						<TouchableOpacity
							activeOpacity={0.85}
							className="flex-grow w-full border rounded-xl bg-black items-center justify-center"
						>
							<Text className="text-center font-palanquin-semibold text-xl text-white">
								Login With Aadhaar
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.85}
							className="flex-grow w-full rounded-xl bg-black items-center justify-center"
						>
							<Text className="text-center font-palanquin-semibold text-xl text-white">
								Login With PAN
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.85}
							className="flex-grow w-full rounded-xl bg-black items-center justify-center"
						>
							<Text className="text-center font-palanquin-semibold text-xl text-white">
								Login Manually
							</Text>
						</TouchableOpacity>
					</View>
				</BottomSheet>

				<StatusBar style="light" backgroundColor="#0c0c0c" />
			</SafeAreaView>
		</BottomSheetModalProvider>
	)
}

export default LandingPage
