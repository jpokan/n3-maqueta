<template>
	<div class="flex gap-0.5 flex-col mb-1">
		<PaneItem>
			<UCheckbox label="Enabled" v-model="ambientLight.visible" />
		</PaneItem>
		<PaneProperty label="Intensity">
			<UInput type="number" step="0.1" v-model="ambientLight.intensity" />
		</PaneProperty>
	</div>
</template>

<script setup>
import { ambientLight } from "assets/webgl/lights";
</script>
