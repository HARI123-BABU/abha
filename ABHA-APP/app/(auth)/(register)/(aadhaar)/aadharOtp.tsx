import BackIcon from "@/components/BackIcon"
import CusButton from "@/components/CusButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ScrollView, Text, TextInput, View } from "react-native"
import { OtpInput } from "react-native-otp-entry"
import { SafeAreaView } from "react-native-safe-area-context"
import { z } from "zod"

const AadhaarOtp = () => {
	const [page, setPage] = useState<"otp" | "mobile">("otp")
	const [data, setData] = useState({
		OtpInput: "",
		MobileNumberInput: ""
	})

	const phoneSchema = z.object({
		phoneNumber: z
			.string()
			.min(12, { message: "Invalid phone number" })
			.max(12, { message: "Invalid phone number" })
	})

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<z.infer<typeof phoneSchema>>({ resolver: zodResolver(phoneSchema) })

	const onSubmit = async () => {
		console.log(data)
	}

	return (
		<SafeAreaView className="h-full bg-black">
			<BackIcon />
			{page === "otp" ? (
				<ScrollView
					contentContainerStyle={{
						height: "100%",
						alignItems: "center",
						paddingTop: 72,
						gap: 16
					}}
					keyboardShouldPersistTaps="handled"
				>
					<Text className="text-white py-10 font-palanquin-bold text-3xl">Enter OTP</Text>
					<OtpInput
						focusColor={"white"}
						numberOfDigits={6}
						onFilled={(text) => {
							setData((prev) => ({ ...prev, OtpInput: text }))
							setPage("mobile")
						}}
						theme={{
							pinCodeContainerStyle: {
								backgroundColor: "transparent",
								borderColor: "#ffffff40"
							},
							pinCodeTextStyle: {
								color: "white"
							},
							containerStyle: {
								paddingLeft: 32,
								paddingRight: 32,
								marginBottom: 32
							}
						}}
					/>

					<View className="w-full px-8 h-max">
						<CusButton variant="link">Resend OTP</CusButton>
					</View>
				</ScrollView>
			) : (
				<ScrollView
					contentContainerStyle={{
						height: "100%",
						alignItems: "center",
						backgroundColor: "#0c0c0c",
						justifyContent: "space-between",
						paddingBottom: 40
					}}
					keyboardShouldPersistTaps="handled"
				>
					<View className="w-full items-center px-4">
						<Text className="text-white py-10 font-palanquin-bold text-3xl">
							Enter Mobile Number
						</Text>

						<Controller
							control={control}
							rules={{
								required: true
							}}
							render={({ field: { onChange, onBlur, value } }) => {
								const changedValue = value?.replace(/(\d{5})(?=\d)/g, "$1  ")
								return (
									<TextInput
										placeholder="12345 67890"
										onBlur={onBlur}
										onChangeText={onChange}
										placeholderTextColor="#7B7B8B"
										value={changedValue}
										autoCorrect={false}
										keyboardType="number-pad"
										autoComplete="off"
										maxLength={12}
										className="w-full h-[56px] px-4 bg-white/10 rounded-2xl border border-transparent font-palanquin-semibold text-xl focus:border-white text-white"
									/>
								)
							}}
							name="phoneNumber"
						/>
						{errors.phoneNumber && (
							<Text className="text-red-500 text-start w-full py-2 px-2 font-palanquin-regular">
								{errors.phoneNumber.message}
							</Text>
						)}
					</View>

					<View className="mt-6 w-full px-4">
						<CusButton variant="secondary" onPress={handleSubmit(onSubmit)}>
							Submit
						</CusButton>
					</View>
				</ScrollView>
			)}
		</SafeAreaView>
	)
}

export default AadhaarOtp
