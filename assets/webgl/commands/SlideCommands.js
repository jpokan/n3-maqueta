import { Command } from "./command";
import { selected } from "assets/webgl/helpers";
import { slides } from "assets/webgl/slides";
import { toRaw, reactive } from "vue";

let counter = 0;

function saveState() {
	const set = toRaw(slides.state);
	return JSON.stringify(Array.from(set));
}

function restoreState(state) {
	const arr = JSON.parse(state);
	slides.state = new Set(arr)
}

export class AddSlideCommand extends Command {
	constructor() {
		super();
		this.state = [];
		this.slide = { id: `s-${counter}` };
	}

	execute() {
		this.state.push(saveState());
		slides.state.add(this.slide);
		this.state.push(saveState());
		console.log("add slide");
		counter++;
	}

	undo() {
		const state = this.state[0];
		restoreState(state);
		console.log("undo");
	}

	redo() {
		restoreState(this.state[1]);
		console.log("redo");
	}
}

export class RemoveSlideCommand extends Command {
	constructor() {
		super();
		this.slide = selected.slides[0];
	}

	execute() {
		slides.delete(this.slide);
		selected.slides = [];
	}

	undo() {
		slides.add(this.slide);
	}
}
