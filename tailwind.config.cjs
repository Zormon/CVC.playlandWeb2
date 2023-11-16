const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Merriweather', defaultTheme.fontFamily.sans],
				header: ['Oswald Variable', ...defaultTheme.fontFamily.sans],
				script: ['Caveat Variable', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				'events': 'repeat(auto-fit, 250px)',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}
