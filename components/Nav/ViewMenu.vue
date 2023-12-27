<template>
	<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
		<UButton label="View" color="white" variant="solid" />

		<template #item="{ item }">
			<NavBox :label="item.label" :shortcuts="item.shortcuts" />
		</template>
	</UDropdown>
</template>

<script setup>
import { view } from "assets/webgl/parameters.js"
import { axesHelper } from "assets/webgl/helpers.js"

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
	],

];
</script>
