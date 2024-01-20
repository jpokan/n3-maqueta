import { Command } from "./command";
import { materials, applyDefaultMaterial } from "../materials";
import { src_scene } from "../scene";
import { selected } from "../helpers";

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

export class UpdateMaterialCommand extends Command {
	constructor(material) {
		super()
		this.modifiedMesh = null
		this.old_material = null
		this.material = material
	}
	execute() {
		// Set Previous State
		this.modifiedMesh = src_scene.getObjectByProperty('uuid', selected.items[0].uuid)
		this.old_material = this.modifiedMesh.material

		// Action
		this.modifiedMesh.material = this.material
		console.log("update material command");
	}

	undo() {
		this.modifiedMesh.material = this.old_material
		console.log("undo");
	}

	redo() {
		this.modifiedMesh.material = this.material
		console.log("redo");
	}

}
