import { commandStack } from "./commandStack"

export class Command {
	constructor(name) {
		this.name = name
	}

	execute() {
		commandStack.push()
	}

	undo() {
		commandStack.pop()
	}
}

