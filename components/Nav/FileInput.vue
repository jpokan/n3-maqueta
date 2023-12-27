<template>
	<input class="hidden" type="file" @change="load($event)">
</template>

<script setup>
import { loader } from "assets/webgl/loader.js";
import { src_scene } from "assets/webgl/scene.js";
import { importFailMsg } from "assets/toast/messages.js";

const toast = useToast()

function load(e) {
	if (e.target.files.length === 0) return

	const file = e.target.files[0]
	const reader = new FileReader()

	reader.onload = (e) => {
		try {
			const content = e.target.result
			loader.parse(content, '', (gltf) => {
				src_scene.add(gltf.scene)
			})
		}
		catch {
			toast.add(importFailMsg)
		}
	}

	reader.readAsArrayBuffer(file)
}

function test() {
	// Import 3d model
	const files = [
		"VS_0.1.glb",
		"VS_1.4.glb",
		"VS_2.6.glb",
	];

	for (let i = 0; i < files.length; i++) {
		const name = files[i];

		const group = new THREE.Group();

		loader.load(
			name,
			function (gltf) {
				gltf.scene.traverse((child) => {
					if (child.geometry) {
						// child.material = material;

						const edgesGeometry = new THREE.EdgesGeometry(child.geometry, 1);
						edgesGeometry.rotateX(Math.PI / 2);
						const edgesInteriorMesh = new THREE.LineSegments(
							edgesGeometry,
							lineBasicMaterial
						);
						edgesInteriorMesh.renderOrder = -1;
						group.add(edgesInteriorMesh)
					}
				});
				gltf.scene.add(group);
				scene.add(gltf.scene);
				console.log(scene);
			},
			// called while loading is progressing
			function (xhr) {
				console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
			},
			// called when loading has errors
			function (error) {
				console.log(error);
				console.log("An error happened");
			}
		);
	}
}
</script>
