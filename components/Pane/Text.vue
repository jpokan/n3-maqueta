<template>
	<div
		class="flex flex-col justify-stretch gap-1 rounded-md dark:text-white text-gray-900 bg-gray-100 dark:bg-gray-800 px-2.5 py-1.5 shadow-sm font-medium">
		<h6 class="text-xs">{{ label }}</h6>
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps(['label'])
</script>
