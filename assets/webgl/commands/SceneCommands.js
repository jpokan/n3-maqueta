import { Command } from "./command";
import { reactiveScene } from "assets/webgl/scene";
import { gltfLoader } from "assets/webgl/loader.js";
import { src_scene } from "assets/webgl/scene.js";
import { createOutline } from "assets/webgl/utils/outline.js";
import { offsetMaterial, parseMaterials } from "~/assets/webgl/materials";

function load(e) {
	try {
		const file = e.target.files[0];
		const reader = new FileReader();

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
				src_scene.add(gltf.scene);
				parseMaterials();
			});
		};
		reader.readAsArrayBuffer(file);
	} catch (err) {
		return err
	}
}


export class ImportCommand extends Command {
	constructor(e) {
		super();
		this.e = e
		this.feature = reactiveScene
	}

	execute() {
		this.saveState(reactiveScene.state);
		load(this.e)
		this.saveState(reactiveScene.state);
		console.log("import command");
	}

	saveState(reactiveState) {
		const state = toRaw(reactiveState)
		const stringState = JSON.stringify(state);
		this.state.push(stringState)
	}

	restoreState(stringState) {
		const state = JSON.parse(stringState);
		this.feature.state = state
	}
}

