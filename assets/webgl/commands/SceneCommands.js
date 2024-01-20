import { Command } from "./command";
import { reactiveScene } from "assets/webgl/scene";
import { gltfLoader } from "assets/webgl/loader.js";
import { src_scene } from "assets/webgl/scene.js";
import { createOutline } from "assets/webgl/utils/outline.js";
import { offsetMaterial, parseMaterials } from "~/assets/webgl/materials";

function load(e) {
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
				src_scene.add(gltf.scene);
				parseMaterials();
			});
		};
	} catch (err) {
		return err
	}
	reader.readAsArrayBuffer(file);
}


export class ImportCommand extends Command {
	constructor(e) {
		super();
		this.e = e
		this.feature = reactiveScene
	}

	execute() {
		this.saveState(reactiveScene.state);
		// load(this.e)
		this.saveState(reactiveScene.state);
		console.log(this.state[0] === this.state[1]);
		console.log("import command");
	}

	saveState(scene) {
		const clone = structuredClone(toRaw(scene))
		console.log(clone);
		this.state.push(clone)
	}

	restoreState(state) {
		this.feature.state = state
	}
}

