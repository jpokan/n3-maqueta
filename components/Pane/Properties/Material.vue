<template>
	<div class="flex flex-col gap-0.5">
		<USelectMenu v-model="selectedMaterial" size="2xs" @change="update('material', $event)" :options="materialsArray"
			option-attribute="name" />
		<PanePropertiesColorInput :threeColor="selected.items[0].material.color" />
	</div>
</template>

<script setup>
import { materials } from "assets/webgl/materials";
import { AssignPropertyCommand } from "assets/webgl/commands/PropertyCommands";
import { CM_Manager } from "~/assets/webgl/commands/commandStack";
import { selected } from "assets/webgl/helpers";

const materialsArray = Array.from(toRaw(materials));
const selectedMaterial = ref(materialsArray[0]);
let initialIndex = 0;

function setupIndex() {
	// setup index for selected value
	if (selected.items[0] && Object.hasOwn(selected.items[0], "material")) {
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

onUpdated(() => {
	console.log('updated');
	setupIndex();
	selectedMaterial.value = materialsArray[initialIndex];
});

onMounted(() => {
	console.log('mounted');
	setupIndex();
	selectedMaterial.value = materialsArray[initialIndex];
});

function update(property, event) {
	const command = new AssignPropertyCommand(property, event);
	CM_Manager.commit(command);
}
</script>
