import { Text, TouchableOpacity } from "react-native"

type props = {
	children: React.ReactNode
	variant?: "primary" | "outline" | "secondary" | "link"
	onPress?: () => void
	isLoading?: boolean
	className?: string
}

const CusButton = ({ children, variant = "primary", onPress, isLoading, className }: props) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			className={`w-full items-center justify-center py-4 rounded-xl ${
				variant === "primary"
					? "bg-primary"
					: variant === "outline"
					? "bg-transparent border-2 border-white"
					: variant === "secondary"
					? "bg-white"
					: ""
			} ${isLoading && "opacity-50"} ${className}`}
			onPress={onPress}
			disabled={isLoading}
		>
			<Text
				className={`text-center font-palanquin-bold text-lg ${
					variant === "secondary" ? "text-black" : "text-white"
				}`}
			>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

export default CusButton
