<template>
	<label for="importButton"
		class="w-9 h-9 p-2 rounded-lg text-zinc-400 hover:bg-zinc-700 hover:text-white cursor-pointer transition-colors"
		title="Import">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.25 12A6.75 6.75 0 0 1 9 5.25h8a4.75 4.75 0 1 1 0 9.5H8.857a2.75 2.75 0 1 1 0-5.5h7.857a.75.75 0 0 1 0 1.5H8.857a1.25 1.25 0 1 0 0 2.5H17a3.25 3.25 0 0 0 0-6.5H9a5.25 5.25 0 1 0 0 10.5h7.714a.75.75 0 0 1 0 1.5H9A6.75 6.75 0 0 1 2.25 12" clip-rule="evenodd"/></svg>
		<input id="importButton" class="hidden" type="file" @change="load($event)">
	</label>
</template>

<script setup>
import { loader } from "assets/webgl/loader.js";
import { scene } from "assets/webgl/scene.js";

function load(e) {
	const file = e.target.files[0]
	const reader = new FileReader()

	reader.onload = (e) => {
		const content = e.target.result
		loader.parse(content, '', (gltf) => {
			scene.add(gltf.scene)
		})
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
