<template>
	<input class="hidden" type="file" @change="load($event)" />
</template>

<script setup>
import { gltfLoader } from "assets/webgl/loader.js";
import { src_scene } from "assets/webgl/scene.js";
import { importFailMsg } from "assets/toast/messages.js";
import { createOutline } from "assets/webgl/utils/outline.js";
import { offsetMaterial, parseMaterials } from "~/assets/webgl/materials";

const toast = useToast();

function load(e) {
	if (e.target.files.length === 0) return;

	const file = e.target.files[0];
	const reader = new FileReader();

	reader.onload = (e) => {
		const content = e.target.result;
		try {
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
				src_scene.add(gltf.scene);
				parseMaterials();
			});
		} catch {
			toast.add(importFailMsg);
		}
	};
	reader.readAsArrayBuffer(file);
}
</script>
