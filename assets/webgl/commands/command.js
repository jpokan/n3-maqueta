import { toRaw } from "vue";

// Base Command structure

export class Command {
	constructor() {
		this.feature = null
		this.state = [];
	}

	execute() {

	}

	undo() {
		this.restoreState(this.state[0]);
		console.log("undo");
	}

	redo() {
		this.restoreState(this.state[1]);
		console.log("redo");
	}

	saveState(reactiveState) {
		const set = toRaw(reactiveState);
		const stringState = JSON.stringify(Array.from(set));
		this.state.push(stringState)
	}

	restoreState(stringState) {
		const arr = JSON.parse(stringState);
		this.feature.state = new Set(arr)
	}
}
