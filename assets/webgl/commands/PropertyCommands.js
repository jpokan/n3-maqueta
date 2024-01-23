import { selected } from "../helpers";
import { Command } from "./command";
import { src_scene } from "../scene";

export class AssignPropertyCommand extends Command {
	// Assigns property to mesh
	constructor(property, value) {
		super()
		this.modifiedMesh = null // THREE.Mesh
		this.old_propertyValue = null // number
		this.propertyValue = value // number
		this.propertyName = property // string
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
		this.threeColor = threeColor // THREE.Color
		this.old_color = old_color // string
		this.color = color // string
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

export class SetComponentCommand extends Command {
	constructor(property, index, old_value, value) {
		super()
		this.property = property // string
		this.index = index // number
		this.old_value = old_value // number
		this.value = value // number
	}
	execute() {
		// Action
		this.property.setComponent(this.index, this.value)
		console.log("set component command");
	}

	undo() {
		this.property.setComponent(this.index, this.old_value)
		console.log("undo");
	}

	redo() {
		this.property.setComponent(this.index, this.value)
		console.log("redo");
	}
}

export class SetEulerCommand extends Command {
	constructor(name, old_value, value) {
		super()
		this.name = name // string
		this.rotation = selected.items[0].rotation // THREE.Euler
		this.old_value = old_value // number
		this.value = value // number
	}
	execute() {
		// Action
		this.rotation[this.name] = this.value
		console.log(`set ${this.name} euler command`);
	}

	undo() {
		this.rotation[this.name] = this.old_value
		console.log("undo");
	}

	redo() {
		this.rotation[this.name] = this.value
		console.log("redo");
	}
}
