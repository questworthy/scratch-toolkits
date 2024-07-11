/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				comic: "'Comic Neue', cursive"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
