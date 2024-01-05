<template>
	<div @click="select(material)" :class="{ 'bg-gray-200 dark:bg-gray-950': selected }"
		class="flex flex-row items-center px-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
		<PaneInput :value="material.name" @update:value="update(material, $event)" />
		<UButton @click.stop="removeMaterial(index, material)" icon="i-heroicons-trash" variant="link" color="gray"
			size="xs" :padded="true" />
	</div>
</template>

<script setup>
import { materials } from 'assets/webgl/materials'
import { selection } from "assets/webgl/helpers";

const props = defineProps(['material', 'index'])

const selected = computed(() => {
	if (selection.material.length > 0) {
		return props.material.uuid === selection.material[0].uuid ? true : false;
	}
})

function select(material) {
	selection.material = [];
	selection.material.push(material);
}

function update(material, event) {
	material.name = event;
}

function removeMaterial(index, material) {
	selection.material = []
	materials.splice(index, 1);
	material.dispose();
}
</script>
