<template>
	<div class="flex justify-between w-full">
		<UCheckbox v-model="selected" :label="label" class="pointer-events-none capitalize" />
		<div class="gap-1 flex">
			<UKbd v-for="kbd in shortcuts" :value="kbd" />
		</div>
	</div>
</template>

<script setup>
import { view } from "assets/webgl/parameters.js"
const props = defineProps(["label", "shortcuts"]);
const selected = ref(view[props.label])
</script>
