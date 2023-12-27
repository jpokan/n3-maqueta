<template>
	<div class="absolute top-0 m-2">
		<div class="flex gap-1">
			<NavFileMenu />
			<UButton color="white" variant="solid" trailing-icon="i-heroicons-arrow-uturn-left-16-solid" />
			<UButton color="white" variant="solid" trailing-icon="i-heroicons-arrow-uturn-right-16-solid" />
			<NavViewMenu />
			<NavInfoMenu />
		</div>
	</div>

	<div class="absolute top-0 right-0 m-2">
		<div class="flex gap-1 justify-end">
			<NavFps />
			<UButton color="white" variant="solid"
				:trailing-icon="panelOpen ? 'i-heroicons-arrow-right-start-on-rectangle-16-solid' : 'i-heroicons-arrow-left-start-on-rectangle-16-solid'"
				@click="panelOpen = !panelOpen" />
			<NavColorModeButton />
		</div>
		<PaneContainer :opened="panelOpen" />
	</div>
</template>

<script setup>
const panelOpen = ref(true)
</script>
