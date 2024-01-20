import { Command } from "./command";
import { materials, removeMaterialFromScene } from "../materials";

export class RemoveMaterialCommand extends Command {
	constructor(material) {
		super();
		this.material = material
	}

	execute() {
		materials.delete(this.material)
		removeMaterialFromScene(this.material)
		console.log("remove material command");
	}

	undo() {
		materials.add(this.material)
		console.log("undo");
	}

	redo() {
		materials.delete(this.material)
		console.log("redo");
	}
}

