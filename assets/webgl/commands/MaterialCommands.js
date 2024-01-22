import { Command } from "./command";
import { materials, applyDefaultMaterial } from "../materials";
import { src_scene } from "../scene";

export class RemoveAndApplyMaterialCommand extends Command {
	constructor(material) {
		super();
		this.modifiedMeshes = []
		this.material = material
	}

	execute() {
		materials.delete(this.material)
		src_scene.traverse((obj) => {
			if (obj.material === this.material) {
				applyDefaultMaterial(obj)
				this.modifiedMeshes.push(obj)
			}
		})
		console.log("remove material command");
	}

	undo() {
		materials.add(this.material)
		this.modifiedMeshes.forEach((obj) => {
			obj.material = this.material
		})
		console.log("undo");
	}

	redo() {
		materials.delete(this.material)
		this.modifiedMeshes.forEach((obj) => {
			applyDefaultMaterial(obj)
		})
		console.log("redo");
	}
}

