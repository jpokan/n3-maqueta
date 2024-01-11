<template>
	<PaneWrapper>
		<!-- <div class="flex flex-col justify-between gap-1"> -->
		<!-- 	<div class="min-h-1/2 max-h-1/2 overflow-y-auto"> -->
		<!-- 		<PanePropertiesMaterial /> -->
		<!-- 	</div> -->
		<!-- 	<div class="min-h-1/2 max-h-1/2 overflow-y-auto"> -->
		<!-- 		<UButton @click="createMaterial" icon="i-heroicons-plus" size="xs" variant="solid" color="white" -->
		<!-- 			label="New Material" /> -->
		<!-- 		<PaneMaterialsItem v-for="(material, index) in materials" :material="material" :index="index" /> -->
		<!-- 	</div> -->
		<!-- </div> -->

		<UAccordion :items="items" multiple>
			<template #library>
				<div class="overflow-y-auto h-28 pr-1 mb-1">
					<PaneMaterialsItem v-for="(material, index) in materials" :material="material" :index="index" />
				</div>
			</template>
			<template #material-properties>
				<PanePropertiesMaterial class="csf-h pr-1 overflow-y-auto" />
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

<style>
.csf-h {
	height: calc(100dvh - 8px - 44px - 514px);
}
</style>
