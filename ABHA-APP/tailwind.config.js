/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1f01b9",
				black: "#0c0c0c",
				// white: "#ebebeb"
				// white: "#ffffff"
				white: {
					DEFAULT: "#ffffff",
					secondary: "#ebebeb"
				}
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				"palanquin-thin": ["Palanquin-Thin", "sans-serif"],
				"palanquin-extralight": ["Palanquin-ExtraLight", "sans-serif"],
				"palanquin-light": ["Palanquin-Light", "sans-serif"],
				"palanquin-regular": ["Palanquin-Regular", "sans-serif"],
				"palanquin-medium": ["Palanquin-Medium", "sans-serif"],
				"palanquin-semibold": ["Palanquin-SemiBold", "sans-serif"],
				"palanquin-bold": ["Palanquin-Bold", "sans-serif"]
			}
		}
	},
	plugins: []
}
