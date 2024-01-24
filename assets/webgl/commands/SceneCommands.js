import { Command } from "./command";
import { src_scene } from "assets/webgl/scene.js";
import { selected } from "assets/webgl/helpers.js";

export class ImportCommand extends Command {
	constructor(model) {
		super();
		this.model = model
	}

	execute() {
		src_scene.add(this.model);
		console.log("import command");
	}

	undo() {
		src_scene.remove(this.model)
		console.log("undo");
		selected.items = []
		selected.materials = []
	}

	redo() {
		src_scene.add(this.model)
		console.log("redo");
	}
}

