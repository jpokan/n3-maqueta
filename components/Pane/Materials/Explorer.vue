<template>
	<PaneWrapper>
		<!-- 		<UButton @click="createMaterial" icon="i-heroicons-plus" size="xs" variant="solid" color="white" -->
		<!-- 			label="New Material" /> -->
		<UAccordion :items="items" multiple>
			<template #library>
				<div class="overflow-y-auto h-28 pr-1 mb-1">
					<PaneMaterialsItem v-for="(material, index) in materials" :material="material" :index="index" />
				</div>
			</template>
			<template #material-properties>
				<PanePropertiesMaterial class="cs-h-material pr-1 overflow-y-auto" />
			</template>
		</UAccordion>
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
	parseMaterials();
});

const items = [
	{
		label: "Library",
		slot: "library",
		defaultOpen: true,
		disabled: true,
	},
	{
		label: "Material Properties",
		slot: "material-properties",
		defaultOpen: true,
	},
];
</script>

<style scoped>
.cs-h-material {
	height: calc(100dvh - 8px - 44px - 514px);
}
</style>
