<template>
	<PaneWrapper>
		<UButton @click="createMaterial" icon="i-heroicons-plus" size="xs" variant="solid" color="white"
			label="New Material" />
		<div v-for="material, index in materials"
			class="flex flex-row items-center px-0.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
			<PaneInput :value="material.name" @update:value="update(material, $event)" />
			<UButton @click="removeMaterial(index, material)" icon="i-heroicons-trash" variant="link" color="gray" size="xs"
				:padded="true" />
		</div>
	</PaneWrapper>
</template>

<script setup>
import * as THREE from "three";
import { materials } from "assets/webgl/materials";
// TO DO: get all unique materials from src_scene.children
function parseMaterials() { }

function createMaterial() {
	const material = new THREE.MeshBasicMaterial();
	material.name = "Basic Material"
	materials.push(material);
}

function removeMaterial(index, material) {
	materials.splice(index, 1)
	material.dispose()
}

function update(material, event) {
	material.name = event;
}

onMounted(() => {
	console.log(materials);
	parseMaterials();
});
</script>
