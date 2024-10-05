export const baseUrl = "https://abhasbx.abdm.gov.in/abha/api"
// export const baseUrl = "https://abha.abdm.gov.in/api/abha"

export const Headers = (AccessToken?: string) => ({
	"Content-Type": "application/json",
	"REQUEST-ID": "fab678ba-23be-4554-a889-a4cd8b0f40f7",
	TIMESTAMP: new Date().toISOString(),
	"X-CM-ID": "sbx",
	Authorization: `Bearer ${AccessToken}`
})
