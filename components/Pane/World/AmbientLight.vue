<template>
	<div class="flex gap-1 flex-col">
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
