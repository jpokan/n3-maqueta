<template>
	<div class="absolute top-0 mt-2 ml-2">
		<div class="flex gap-1">
			<NavFileMenu />
			<UButton color="white" size="xs" variant="solid" trailing-icon="i-heroicons-arrow-uturn-left-16-solid" />
			<UButton color="white" size="xs" variant="solid" trailing-icon="i-heroicons-arrow-uturn-right-16-solid" />
			<UButton label="View" color="white" size="xs" variant="solid" />
			<NavInfoMenu />
		</div>
	</div>

	<div class="absolute top-0 right-0 mr-2 mt-2">
		<NavColorModeButton />
	</div>
</template>

<script setup>

</script>
