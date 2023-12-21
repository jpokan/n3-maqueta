import * as THREE from "three"
import { scene } from "./experience.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { material, lineBasicMaterial } from "./materials.js";

export const loader = new GLTFLoader();

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
		function(gltf) {
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
		function(xhr) {
			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
		},
		// called when loading has errors
		function(error) {
			console.log(error);
			console.log("An error happened");
		}
	);
}

