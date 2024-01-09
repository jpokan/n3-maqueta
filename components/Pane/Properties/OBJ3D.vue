<template>
	<PaneProperty label="Name">
		<UInput size="2xs" color="white" variant="outline" v-model="selected.items[0].name" />
	</PaneProperty>
	<PaneProperty label="Type">
		<UInput disabled variant="none" v-model="selected.items[0].type" />
	</PaneProperty>
	<PaneProperty label="Position">
		<div class="flex gap-0.5">
			<UInput type="number" step="0.1" v-model="selected.items[0].position.x" />
			<UInput type="number" step="0.1" v-model="selected.items[0].position.y" />
			<UInput type="number" step="0.1" v-model="selected.items[0].position.z" />
		</div>
	</PaneProperty>
	<PaneProperty label="Rotation">
		<div class="flex gap-0.5">
			<UInput type="number" step="0.1" v-model="selected.items[0].rotation.x" />
			<UInput type="number" step="0.1" v-model="selected.items[0].rotation.y" />
			<UInput type="number" step="0.1" v-model="selected.items[0].rotation.z" />
		</div>
	</PaneProperty>
	<PaneProperty label="Scale">
		<div class="flex gap-0.5">
			<UInput type="number" step="0.1" v-model="selected.items[0].scale.x" />
			<UInput type="number" step="0.1" v-model="selected.items[0].scale.y" />
			<UInput type="number" step="0.1" v-model="selected.items[0].scale.z" />
		</div>
	</PaneProperty>
	<PaneProperty label="Visibility">
		<UCheckbox @change="updateMask($event)" v-model="selected.items[0].visible" />
	</PaneProperty>
	<PaneProperty v-if="selected.items[0].material" label="Material">
		<div class="flex flex-col gap-0.5">
			<USelectMenu v-model="selectedMaterial" size="2xs" @change="update($event)" :options="materialArray"
				option-attribute="name" />
			<UInput disabled variant="none" v-model="selected.items[0].material.type" />
			<PanePropertiesColorInput :threeColor="selected.items[0].material.color" />
		</div>
	</PaneProperty>
</template>

<script setup>
import { materials } from "assets/webgl/materials";
import { selected } from "assets/webgl/helpers";

const materialArray = [];
const selectedMaterial = ref(materialArray[0]);
let initialIndex = 0;

materials.forEach((el) => {
	materialArray.push({
		name: el.name,
		material: el,
	});
});

function updateMask(e) {
	// Layers mask 2 is for hidden elements (no selection with raycaster)
	if (e.target._modelValue) {
		selected.items[0].layers.mask = 1
	} else {
		selected.items[0].layers.mask = 2
	}
}

function setupIndex() {
	// setup index for selected value
	if (selected.items[0].material) {
		let counter = 0;
		const entries = materials.entries();
		for (const entry of entries) {
			if (entry[0].uuid === selected.items[0].material.uuid) {
				initialIndex = counter;
				break;
			}
			counter = counter + 1;
		}
	}
}

function update(event) {
	selectedMaterial.value = materialArray[initialIndex];
	selected.items[0].material = event.material;
	selected.materials[0] = event.material;
}

onUpdated(() => {
	setupIndex()
	selectedMaterial.value = materialArray[initialIndex]
});

onMounted(() => {
	setupIndex()
	selectedMaterial.value = materialArray[initialIndex]
});
</script>
