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
	<PaneProperty label="Color">
		<UInput type="color" :value="hexString" @input="updateColor(selection.material[0].color, $event)" />
	</PaneProperty>
</template>

<script setup>
import { selection } from "assets/webgl/helpers"

const hexString = computed(() => {
	const string = selection.material[0].color.getHexString()
	return `#${string}`
})

function updateColor(threeColor, event) {
	threeColor.set(event.target.value)
}
</script>
