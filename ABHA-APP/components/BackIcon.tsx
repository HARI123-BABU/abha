import { router } from "expo-router"
import { Image, TouchableOpacity, View } from "react-native"
import icons from "../constants/icons"

const BackIcon = () => {
	return (
		<TouchableOpacity
			className="relative h-8 mt-4 ml-4 aspect-square p-2 overflow-hidden"
			onPress={() => router.back()}
		>
			<View className="h-full w-full relative">
				<Image
					source={icons.backIcon}
					resizeMode="contain"
					className="absolute h-full w-full inset-0"
				/>
			</View>
		</TouchableOpacity>
	)
}

export default BackIcon
