<template>
	<div class="rounded-md px-2.5 py-1.5 font-medium">
		<h6 class="text-xs">{{ label }}</h6>
		<slot></slot>
	</div>
</template>

<script setup>
const props = defineProps(['label'])
</script>
