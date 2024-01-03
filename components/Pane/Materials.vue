<template>
	<PaneWrapper>
		<div
			v-for="material in materials"
			class="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
		>
			<UInput :label="material.name" />
			<UButton
				icon="i-heroicons-trash"
				variant="link"
				color="gray"
				size="xs"
				:padded="true"
			/>
		</div>
		<div @click="createMaterial">Add</div>
	</PaneWrapper>
</template>

<script setup>
import * as THREE from "three";
import { materials } from "assets/webgl/materials";
// TO DO: get all unique materials from src_scene.children
function parseMaterials() {}

function createMaterial() {
	const material = new THREE.MeshBasicMaterial();
	materials.push(material);
}

function removeMaterial(index) {}

onMounted(() => {
	console.log(materials);
	parseMaterials();
});
</script>
