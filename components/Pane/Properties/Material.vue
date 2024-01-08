<template>
	<PaneProperty label="Name">
		<UInput size="2xs" color="white" variant="outline" v-model="selection.material[0].name" />
	</PaneProperty>
	<PaneProperty label="Type">
		<UInput disabled variant="none" v-model="selection.material[0].type" />
	</PaneProperty>
	<PaneProperty label="Wireframe">
		<UCheckbox v-model="selection.material[0].wireframe" />
	</PaneProperty>
	<PaneProperty label="DepthTest">
		<UCheckbox v-model="selection.material[0].depthTest" />
	</PaneProperty>
	<PaneProperty label="DepthWrite">
		<UCheckbox v-model="selection.material[0].depthWrite" />
	</PaneProperty>
	<PaneProperty label="Color">
		<PanePropertiesColorInput :threeColor="selection.material[0].color" />
	</PaneProperty>
	<PaneProperty label="Opacity">
		<URange v-model="selection.material[0].opacity" size="2xs" :min="0" :max="1" :step="0.01" />
	</PaneProperty>
	<PaneProperty label="Transparent">
		<UCheckbox v-model="selection.material[0].transparent" />
	</PaneProperty>
</template>

<script setup>
import { selection } from "assets/webgl/helpers"
</script>
