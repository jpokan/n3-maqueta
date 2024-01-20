<template>
	<input class="hidden" type="file" @change="load($event)" />
</template>

<script setup>
import { ImportCommand } from "assets/webgl/commands/SceneCommands";
import { CM_Manager } from "assets/webgl/commands/commandStack";
import { importFailMsg } from "assets/toast/messages.js";
import { gltfLoader } from "assets/webgl/loader.js";
import { createOutline } from "assets/webgl/utils/outline.js";
import { offsetMaterial, parseMaterials } from "~/assets/webgl/materials";

const toast = useToast();

function load(e) {
	if (e.target.files.length === 0) return;

	const file = e.target.files[0];
	const reader = new FileReader();

	try {
		reader.onload = (e) => {
			const content = e.target.result;
			gltfLoader.parse(content, "", (gltf) => {
				gltf.scene.traverse((el) => {
					if (el.isMesh && !el.isLineSegments2 && !el.isLine2) {
						// Compute BVH
						el.geometry.computeBoundsTree();
						const edges = createOutline(el.geometry);
						offsetMaterial(el);
						el.add(edges);
					}
				});
				const command = new ImportCommand(gltf.scene);
				CM_Manager.commit(command);
				parseMaterials();
			});
		};
	} catch (err) {
		toast.add(importFailMsg);
	}
	reader.readAsArrayBuffer(file);
}
</script>
