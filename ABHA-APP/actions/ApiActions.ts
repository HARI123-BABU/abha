import { baseUrl, Headers } from "@/env"
import AsyncStorage from "@react-native-async-storage/async-storage"
import forge from "node-forge"

export const getAccessToken = async () => {
	const bodyContent = JSON.stringify({
		clientId: "SBXTEST_04",
		clientSecret: "df5d0805-20e4-4d74-ac07-b52e2beab1fd",
		grantType: "client_credentials"
	})

	try {
		const response = await fetch("https://dev.abdm.gov.in/api/hiecm/gateway/v3/sessions", {
			method: "POST",
			headers: Headers(),
			body: bodyContent
		})
		if (response.ok === false) {
			throw new Error("Something went wrong. Please try again. at getAccessToken")
		}

		const result = await response.json()

		return result.accessToken as string
	} catch (error) {
		throw new Error("Something went wrong. Please try again.")
	}
}

export const getPublicKey = async (accessToken: string) => {
	const head = Headers(accessToken)
	try {
		const response = await fetch(`${baseUrl}/v3/profile/public/certificate`, {
			method: "GET",
			headers: head
		})
		console.log(response.status, response.ok)
		if (!response.ok) {
			const storedKey = await AsyncStorage.getItem("publicKey")
			if (storedKey) return storedKey

			throw new Error("Something went wrong. Please try again. at getPublicKey")
		}
		const result = await response.json()

		await AsyncStorage.setItem("publicKey", result.publicKey)
		return result.publicKey as string
	} catch (error) {
		throw new Error("Something went wrong. Please try again. at getPublicKey")
	}
}

export const encryptData = async (number: string, Key: string) => {
	const publicKeyPem = `-----BEGIN PUBLIC KEY-----
	${Key}
	-----END PUBLIC KEY-----`

	const publicKey = forge.pki.publicKeyFromPem(publicKeyPem)
	const encryptedBytes = publicKey.encrypt(number, "RSA-OAEP", {
		// md: forge.md.sha1.create(),
		mgf1: forge.mgf.mgf1.create(forge.md.sha1.create())
	})
	const encryptedBase64 = forge.util.encode64(encryptedBytes)

	return encryptedBase64
}

export const sendOtp = async (encryptedData: string, AccessToken: string) => {
	const otpResponse = await fetch(`${baseUrl}/v3/enrollment/request/otp`, {
		method: "POST",
		headers: Headers(AccessToken),
		body: JSON.stringify({
			scope: ["abha-enrol"],
			loginHint: "aadhaar",
			loginId: encryptedData,
			otpSystem: "aadhaar",
			txnId: ""
		})
	})

	console.log(otpResponse)

	if (otpResponse.ok) {
		const data = await otpResponse.json()
		return data
	} else {
		throw new Error(otpResponse.statusText)
	}
}
