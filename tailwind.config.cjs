/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	lightMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			// terracotta: '#c24332',
			navy: '#19213a',
			// green: '#63948c',
			white: '#fff',
			black: '#000',
			// Primary colors
			orange: '#ff9600',
			birch: 'f3efee',
			gray: '#d8d8da',
		},
		fontFamily: {
			// Headings
			sans: ['Montserrat', 'sans-serif'],
			// Base text
			monospace: ['Inconsolata', 'monospace'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
