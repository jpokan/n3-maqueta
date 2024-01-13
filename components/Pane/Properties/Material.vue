<template>
	<PaneWrapper v-if="materialSelected">
		<PaneProperty label="Name">
			<UInput size="2xs" color="white" variant="outline" v-model="selected.materials[0].name" />
		</PaneProperty>
		<PaneProperty label="Type">
			<UInput disabled variant="none" v-model="selected.materials[0].type" />
		</PaneProperty>
		<PaneProperty label="Wireframe">
			<UCheckbox v-model="selected.materials[0].wireframe" />
		</PaneProperty>
		<PaneProperty label="DepthTest">
			<UCheckbox v-model="selected.materials[0].depthTest" />
		</PaneProperty>
		<PaneProperty label="DepthWrite">
			<UCheckbox v-model="selected.materials[0].depthWrite" />
		</PaneProperty>
		<PaneProperty label="Color">
			<PanePropertiesColorInput :threeColor="selected.materials[0].color" />
		</PaneProperty>
		<PaneProperty label="Opacity">
			<URange v-model="selected.materials[0].opacity" size="2xs" :min="0" :max="1" :step="0.01" />
		</PaneProperty>
		<PaneProperty label="Transparent">
			<UCheckbox v-model="selected.materials[0].transparent" />
		</PaneProperty>
	</PaneWrapper>
</template>

<script setup>
import { selected } from "assets/webgl/helpers"

const materialSelected = computed(() => {
	return selected.materials.length > 0 ? true : false;
})
</script>
