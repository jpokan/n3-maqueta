<template>
	<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
		<UButton label="View" color="white" variant="solid" />

		<template #item="{ item }">
			<NavBox :label="item.label" :shortcuts="item.shortcuts" />
		</template>
	</UDropdown>
</template>

<script setup>
import { camParameters, view } from "assets/webgl/parameters.js"
import { axesHelper } from "assets/webgl/helpers.js"
import { camera } from "assets/webgl/camera.js"

const items = [
	[
		{
			label: "axes",
			shortcuts: ["V", "A"],
			click: () => {
				view.axes = !view.axes
				axesHelper.visible = view.axes
			},
		},
		{
			label: "fps",
			shortcuts: ["V", "F"],
			click: () => {
				view.fps = !view.fps
			},
		},
		{
			label: "edges",
			shortcuts: ["V", "E"],
			click: () => {
				view.edges = !view.edges
				camera.layers.toggle(camParameters.edgesLayer) // Layer 1 for edges
			},
		},
	],
];
</script>
