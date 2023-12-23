// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['assets/css/satoshi.css'],
	devtools: { enabled: false },
	modules: [
		'@nuxt/ui'
	],
	tailwindcss: {
		viewer: false,
	},
})
