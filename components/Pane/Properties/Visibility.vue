<template>
	<div class="flex flex-row gap-16">
		<UCheckbox @change="updateLayer($event)" v-model="selected.items[0].visible" />
		<div class="flex gap-2 items-center w-full">
			<p>Mask</p>
			<UInput disabled type="number" v-model="selected.items[0].layers.mask" />
		</div>
	</div>
</template>

<script setup>
import { selected } from "assets/webgl/helpers";

function updateLayer(event) {
	if (event.target._modelValue) {
		selected.items[0].traverse((el) => {
			if (!el.isLineSegments) {
				el.layers.enable(0);
			}
		});
	} else {
		selected.items[0].traverse((el) => {
			if (!el.isLineSegments) {
				el.layers.disable(0);
			}
		});
	}
}

</script>

