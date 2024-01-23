import { selected } from "../helpers";
import { Command } from "./command";
import { src_scene } from "../scene";

export class AssignPropertyCommand extends Command {
	// Assigns property to mesh
	constructor(property, value) {
		super()
		this.propertyName = property // string
		this.propertyValue = value // number
		this.modifiedMesh = null // THREE.Mesh
		this.old_propertyValue = null // number
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
	constructor(property, index, value) {
		super()
		this.propertyName = property // string
		this.index = index // number
		this.propertyValue = value // number
		this.modifiedMesh = null // THREE.Mesh
		this.old_propertyValue = null // number
	}
	execute() {
		const val = selected.items[0].uuid
		this.modifiedMesh = src_scene.getObjectByProperty('uuid', val)
		this.old_propertyValue = this.modifiedMesh[this.propertyName].getComponent(this.index)
		// Action
		this.modifiedMesh[this.propertyName].setComponent(this.index, this.propertyValue)
		console.log("set component command");
	}

	undo() {
		this.modifiedMesh[this.propertyName].setComponent(this.index, this.old_propertyValue)
		console.log("undo");
	}

	redo() {
		this.modifiedMesh[this.propertyName].setComponent(this.index, this.propertyValue)
		console.log("redo");
	}
}

export class SetEulerCommand extends Command {
	constructor(name, value) {
		super()
		this.component = name // string
		this.propertyValue = value // number
		this.modifiedMesh = null // THREE.Mesh
		this.old_propertyValue = null // number
	}
	execute() {
		const val = selected.items[0].uuid
		this.modifiedMesh = src_scene.getObjectByProperty('uuid', val)
		this.old_propertyValue = this.modifiedMesh.rotation[this.component]
		// Action
		this.modifiedMesh.rotation[this.component] = this.propertyValue
		console.log(`set ${this.name} euler command`);
	}

	undo() {
		this.modifiedMesh.rotation[this.component] = this.old_propertyValue
		console.log("undo");
	}

	redo() {
		this.modifiedMesh.rotation[this.component] = this.propertyValue
		console.log("redo");
	}
}
