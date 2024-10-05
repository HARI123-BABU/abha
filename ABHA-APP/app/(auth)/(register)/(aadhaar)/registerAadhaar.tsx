import { encryptData, getAccessToken, getPublicKey, sendOtp } from "@/actions/ApiActions"
import BackIcon from "@/components/BackIcon"
import CusButton from "@/components/CusButton"
import { zodResolver } from "@hookform/resolvers/zod"
import Checkbox from "expo-checkbox"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ScrollView, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { z } from "zod"

const registerAadhar = () => {
	const aadharSchema = z.object({
		aadharNumber: z
			.string()
			.min(16, { message: "Please enter a valid Aadhar number" })
			.max(16, { message: "Please enter a valid Aadhar number" })
	})

	const [error, setError] = useState("")

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<z.infer<typeof aadharSchema>>({
		resolver: zodResolver(aadharSchema)
	})

	const onSubmit = async (data: z.infer<typeof aadharSchema>) => {
		if (!checkBoxData.checked) {
			setCheckBoxData({
				...checkBoxData,
				isError: {
					error: true,
					message: "Please accept the terms and conditions"
				}
			})
			return
		}

		try {
			const AccessToken = await getAccessToken()

			const encryptKey = await getPublicKey(AccessToken)

			const encryptedAadhaarNumber = await encryptData(data.aadharNumber, encryptKey)
			// console.log(encryptedAadhaarNumber)

			// console.log({
			// 	encryptedAadhaarNumber,
			// 	AccessToken
			// })

			const otpResult = await sendOtp(encryptedAadhaarNumber, AccessToken)
			console.log(otpResult.message)

			router.push("/aadharOtp")
		} catch (error) {
			if (error instanceof Error) {
				console.log(error ?? "Something went wrong. Please try again.")
			} else {
				console.log(error)
			}
		}
	}

	const [checkBoxData, setCheckBoxData] = useState({
		checked: false,
		isError: {
			error: false,
			message: ""
		},
		isTryToSubmit: false
	})

	return (
		<SafeAreaView className="h-full bg-black">
			<BackIcon />
			<ScrollView
				contentContainerStyle={{
					height: "100%",
					padding: 20,
					justifyContent: "space-between",
					gap: 20
				}}
				keyboardShouldPersistTaps="handled"
			>
				<Text className="text-white font-palanquin-bold text-2xl px-10 text-center">
					Register With Aadhar Number
				</Text>

				<View className="space-y-2">
					<Text className="text-white font-palanquin-bold text-lg px-2">
						Aadhar Number
					</Text>
					<Controller
						control={control}
						rules={{
							required: true
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							const changedValue = value?.replace(/(\d{4})(?=\d)/g, "$1  ")
							return (
								<TextInput
									placeholder="xxxx xxxx xxxx"
									onBlur={onBlur}
									onChangeText={onChange}
									placeholderTextColor="#7B7B8B"
									value={changedValue}
									autoCorrect={false}
									keyboardType="number-pad"
									autoComplete="off"
									maxLength={16}
									className="w-full h-[56px] px-4 bg-white/10 rounded-2xl border border-transparent font-palanquin-semibold text-xl focus:border-white text-white"
								/>
							)
						}}
						name="aadharNumber"
					/>
					{errors.aadharNumber && (
						<Text className="text-red-500 px-2 font-palanquin-regular">
							{errors.aadharNumber.message}
						</Text>
					)}
				</View>

				<Text className="text-white/95 font-palanquin-medium text-base">
					<Text className="text-red-500">*</Text> Terms and Conditions
				</Text>
				<ScrollView contentContainerStyle={{ flexGrow: 1, gap: 8 }}>
					<Text className="text-white/70 text-lg font-palanquin-regular">
						I, hereby declare that I am voluntarily sharing my Aadhaar number and
						demographic information issued by UIDAI, with National Health Authority
						(NHA) for the sole purpose of creation of ABHA number. I understand that my
						ABHA number can be used and shared for purposes as may be notified by ABDM
						from time to time including provision of healthcare services. Further, I am
						aware that my personal identifiable information (Name, Address, Age, Date of
						Birth, Gender and Photograph) may be made available to the entities working
						in the National Digital Health Ecosystem (NDHE) which inter alia includes
						stakeholders and entities such as healthcare professionals (e.g. doctors),
						facilities (e.g. hospitals, laboratories) and data fiduciaries (e.g. health
						programmes), which are registered with or linked to the Ayushman Bharat
						Digital Mission (ABDM), and various processes there under. I authorize NHA
						to use my Aadhaar number for performing Aadhaar based authentication with
						UIDAI as per the provisions of the Aadhaar (Targeted Delivery of Financial
						and other Subsidies, Benefits and Services) Act, 2016 for the aforesaid
						purpose. I understand that UIDAI will share my e-KYC details, or response of
						“Yes” with NHA upon successful authentication. I have been duly informed
						about the option of using other IDs apart from Aadhaar; however, I
						consciously choose to use Aadhaar number for the purpose of availing
						benefits across the NDHE. I am aware that my personal identifiable
						information excluding Aadhaar number / VID number can be used and shared for
						purposes as mentioned above. I reserve the right to revoke the given consent
						at any point of time as per provisions of Aadhaar Act and Regulations.
					</Text>
				</ScrollView>

				<View className="flex-row items-center gap-2">
					<Checkbox
						value={checkBoxData.checked}
						onValueChange={() =>
							setCheckBoxData((prev) => ({ ...prev, checked: !prev.checked }))
						}
					/>
					<Text
						className="text-white font-palquain-medium"
						onPress={() =>
							setCheckBoxData((prev) => ({
								...prev,
								checked: !prev.checked
							}))
						}
					>
						I agree to the terms and conditions
					</Text>
				</View>
				{checkBoxData.isError.error && (
					<Text className="font-palquain-regular text-red-500">
						{checkBoxData.isError.message}
					</Text>
				)}

				<CusButton
					variant="secondary"
					isLoading={isSubmitting}
					// @ts-ignore
					onPress={handleSubmit(onSubmit)}
				>
					Send OTP
				</CusButton>
			</ScrollView>

			<StatusBar style="light" backgroundColor="#161622" />
		</SafeAreaView>
	)
}

export default registerAadhar
