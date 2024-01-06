<template>
	<PaneWrapper>
		<UButton @click="createMaterial" icon="i-heroicons-plus" size="xs" variant="solid" color="white"
			label="New Material" />
		<PaneMaterialsItem v-for="material, index in materials" :material="material" :index="index" />
	</PaneWrapper>
</template>

<script setup>
import * as THREE from "three";
import { materials, parseMaterials } from "assets/webgl/materials";

function createMaterial() {
	const material = new THREE.MeshBasicMaterial();
	material.name = "Basic Material";
	materials.add(material);
}

onMounted(() => {
	parseMaterials()
})

</script>
