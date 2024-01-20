import { Command } from "./command";
import { selected } from "assets/webgl/helpers";
import { reactiveSlides } from "assets/webgl/slides";

let counter = 0;

export class AddSlideCommand extends Command {
	constructor() {
		super();
		this.feature = reactiveSlides
		this.slide = { id: `s-${counter}` };
	}

	execute() {
		this.saveState(reactiveSlides.state);
		reactiveSlides.state.add(this.slide);
		this.saveState(reactiveSlides.state);
		console.log("add slide command");
		counter++;
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

export class RemoveSlideCommand extends AddSlideCommand {
	constructor() {
		super();
		this.feature = reactiveSlides
		this.slide = selected.slides[0];
	}

	execute() {
		this.saveState(reactiveSlides.state);
		reactiveSlides.state.delete(this.slide);
		this.saveState(reactiveSlides.state);
		console.log("remove slide command");
		selected.slides = [];
	}
}
