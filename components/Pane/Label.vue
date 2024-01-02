<template>
	<div class="rounded-md dark:text-white text-gray-900 bg-gray-100 dark:bg-gray-800 px-2.5 py-1.5 shadow-sm font-medium">
		<h6 class="text-xs text-center">{{ label }}</h6>
	</div>
</template>

<script setup>
const props = defineProps(['label'])
</script>
