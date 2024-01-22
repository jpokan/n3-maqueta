import { selected } from "../helpers";
import { Command } from "./command";
import { src_scene } from "../scene";

export class AssignPropertyCommand extends Command {
	// Assigns property to mesh
	constructor(property, value) {
		super()
		this.modifiedMesh = null
		this.old_propertyValue = null
		this.propertyValue = value
		this.propertyName = property
	}

	execute() {
		// Set Previous State
		const val = selected.items[0].uuid
		this.modifiedMesh = src_scene.getObjectByProperty('uuid', val)
		this.old_propertyValue = this.modifiedMesh[this.propertyName]

		// Action
		this.modifiedMesh[this.propertyName] = this.propertyValue
		console.log(`assign ${this.propertyName} command`);
	}

	undo() {
		this.modifiedMesh[this.propertyName] = this.old_propertyValue
		console.log("undo");
	}

	redo() {
		this.modifiedMesh[this.propertyName] = this.propertyValue
		console.log("redo");
	}
}

export class SetColorCommand extends Command {
	constructor(threeColor, old_color, color) {
		super()
		this.threeColor = threeColor
		this.old_color = old_color
		this.color = color
	}
	execute() {
		// Action
		this.threeColor.set(this.color)
		console.log("set color command");
	}

	undo() {
		this.threeColor.set(this.old_color)
		console.log("undo");
	}

	redo() {
		this.threeColor.set(this.color)
		console.log("redo");
	}
}

export class UpdateInputCommand extends Command {
	constructor(property, old_value, value) {
		super()
		this.old_value = old_value
		this.value = value
		this.property = property
	}
	execute() {
		// Action
		const property = selected.items[0][this.property]
		console.log(property);
		// property.set(this.value)
		console.log("update input command");
	}

	undo() {
		console.log("undo");
	}

	redo() {
		console.log("redo");
	}
}
