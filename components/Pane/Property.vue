<template>
	<div
		class="flex flex-row items-center gap-1 rounded-md dark:text-white text-gray-900 bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 shadow-sm font-medium">
		<h6 class="text-xs w-28">{{ label }}</h6>
		<div class="w-full">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(["label"]);
</script>
