<template>
	<input class="hidden" type="file" @change="load($event)">
</template>

<script setup>
import { colladaLoader } from "assets/webgl/loader.js"
import { src_scene } from "assets/webgl/scene.js";
import { importFailMsg } from "assets/toast/messages.js";
import { parseMaterials } from "~/assets/webgl/materials";

const toast = useToast()

function load(e) {
	if (e.target.files.length === 0) return

	const file = e.target.files[0]
	const reader = new FileReader()

	reader.onload = (e) => {
		const content = e.target.result
		try {
			const dae = colladaLoader.parse(content, '')
			src_scene.add(dae.scene)
			// Compute BVH
			src_scene.traverse((el) => {
				if (el.isMesh) {
					el.geometry.computeBoundsTree()
				}
			})
			parseMaterials()
		}
		catch (e) {
			toast.add(importFailMsg)
		}
	}
	reader.readAsBinaryString(file)
}

</script>
