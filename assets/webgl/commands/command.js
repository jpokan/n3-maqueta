// Base Command structure

export class Command {
	constructor() {
		this.state = [];
	}

	execute() { }

	undo() {
		this.restoreState(this.state[0]);
		console.log("undo");
	}

	redo() {
		this.restoreState(this.state[1]);
		console.log("redo");
	}

	saveState() { }
	restoreState() { }
}
