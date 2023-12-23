<template>
	<ClientOnly>
		<UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" size="xs" color="white"
			variant="solid" aria-label="Theme" @click="isDark = !isDark" />
		<template #fallback>
			<UButton icon="i-heroicons-computer-desktop-16-solid" size="xs" color="white" variant="solid"
				aria-label="Theme" />
		</template>
	</ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})
</script>

