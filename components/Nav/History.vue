<template>
	<div class="flex gap-1 items-center px-3">
		<span v-for="item, index in CM_Manager.maxSize" class="w-0.5 h-2 bg-gray-200 inline-block"
			:class="index === CM_Manager.pointer.value ? 'h-4 w-1' : ''"></span>
	</div>
</template>

<script setup>
import { CM_Manager } from '~/assets/webgl/commands/commandStack';
</script>
