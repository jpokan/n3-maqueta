<template>
	<div class="absolute top-0 m-2">
		<div class="flex gap-1">
			<NavFileMenu />
			<UButton color="white" variant="solid" trailing-icon="i-heroicons-arrow-uturn-left-16-solid" />
			<UButton color="white" variant="solid" trailing-icon="i-heroicons-arrow-uturn-right-16-solid" />
			<NavViewMenu />
			<NavDebug />
			<NavInfoMenu />
		</div>
	</div>

	<div class="absolute top-0 right-0 m-2">
		<div class="flex gap-1 justify-end">
			<NavFps />
			<UButton color="white" variant="solid"
				:trailing-icon="isOpen ? 'i-heroicons-arrow-right-start-on-rectangle-16-solid' : 'i-heroicons-arrow-left-start-on-rectangle-16-solid'"
				@click="isOpen = !isOpen" />
			<NavColorModeButton />
		</div>
		<PaneContainer :opened="isOpen" />
	</div>
</template>

<script setup>
const isOpen = ref(true)
</script>
