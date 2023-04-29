/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {},
		fontFamily: {
			primary: ['League Spartan', 'sans-serif'],
		},
		colors: {
			main: 'var(--bg-main)',
			toggle: 'var(--bg-toggle)',
			screen: 'var(--bg-screen)',
			'key-base-bg': 'var(--key-base-bg)',
			'key-base-shadow': 'var(--key-base-shadow)',
			'key-pr-bg': 'var(--key-pr-bg)',
			'key-pr-shadow': 'var(--key-pr-shadow)',
			'key-acc-bg': 'var(--key-acc-bg)',
			'key-acc-shadow': 'var(--key-acc-shadow)',
			'clr-base': 'var(--clr-base)',
			inverted: 'var(--inverted)',
			'clr-screen': 'var(--clr-screen)',
			'clr-solve': 'var(--clr-solve)',
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '500px',
				md: '500px',
				lg: '500px',
				xl: '500px',
				'2xl': '500px',
			},
		},
		screens: {
			sm: '500px',
		},
	},
	plugins: [],
}
