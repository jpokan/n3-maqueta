<template>
	<input class="hidden" type="file" @change="load($event)">
</template>

<script setup>
import { gltfLoader } from "assets/webgl/loader.js";
import { src_scene } from "assets/webgl/scene.js";
import { importFailMsg } from "assets/toast/messages.js";
import { parseMaterials } from "~/assets/webgl/materials";
import { createOutline } from "~/assets/webgl/utils/outline";

const toast = useToast()

function load(e) {
	if (e.target.files.length === 0) return

	const file = e.target.files[0]
	const reader = new FileReader()

	reader.onload = (e) => {
		const content = e.target.result
		try {
			gltfLoader.parse(content, '', (gltf) => {
				src_scene.add(gltf.scene)
				src_scene.traverse((el) => {
					if (el.isMesh) {
						// Compute BVH
						el.geometry.computeBoundsTree()
						// Create edges
					}
					el.position.set(0, 0, 0)
					el.rotation.set(0, 0, 0)
					el.scale.set(1, 1, 1)
					el.updateMatrix()
					console.log(el.up);
					// try {
					// 	createOutline(el.geometry)
					// 	el.updateMatrix()
					// } catch {
					//
					// }
				})
				parseMaterials()
			})
		}
		catch {
			toast.add(importFailMsg)
		}
	}
	reader.readAsArrayBuffer(file)
}

</script>
