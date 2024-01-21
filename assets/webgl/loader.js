import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { ColladaLoader } from "three/addons/loaders/ColladaLoader.js"
import { createOutline } from "assets/webgl/utils/outline.js";
import { offsetMaterials, materials } from "~/assets/webgl/materials";

export const gltfLoader = new GLTFLoader();
export const colladaLoader = new ColladaLoader();

export function post_import(model) {
	model.scene.traverse((el) => {
		if (el.isMesh && !el.isLineSegments2 && !el.isLine2) {
			// Compute BVH
			el.geometry.computeBoundsTree();
			const edges = createOutline(el.geometry);
			el.add(edges);
		}

		// Add material to the materials set
		if (el.material) {
			materials.add(el.material);
		}
	});
	// Offset materials from materials set
	offsetMaterials();
}

