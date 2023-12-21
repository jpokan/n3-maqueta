<template>
	<label for="importButton"
		class="w-8 h-8 p-2 rounded-lg text-zinc-400 hover:bg-zinc-700 hover:text-white cursor-pointer transition-colors"
		title="Import">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path fill="currentColor"
				d="M3 1h12.414L21 6.586V23h-9v-2h7V9h-6V3H5v10H3zm12 2.414V7h3.586zM7.05 14.088l4.858 4.914l-4.858 4.914l-1.422-1.406l2.48-2.508H.997v-2h7.11l-2.48-2.508z" />
		</svg>
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
