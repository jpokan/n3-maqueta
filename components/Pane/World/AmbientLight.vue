<template>
	<PaneItem>
		<UCheckbox label="Enabled" v-model="ambientLight.visible" />
	</PaneItem>
	<PaneText label="Intensity">
		<UInput type="number" step="0.1" v-model="ambientLight.intensity" />
	</PaneText>
</template>

<script setup>
import { ambientLight } from "assets/webgl/lights";
</script>
