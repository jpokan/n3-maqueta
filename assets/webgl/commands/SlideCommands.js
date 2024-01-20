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
		console.log("add slide");
		counter++;
	}
}

export class RemoveSlideCommand extends Command {
	constructor() {
		super();
		this.feature = reactiveSlides
		this.slide = selected.slides[0];
	}

	execute() {
		this.saveState(reactiveSlides.state);
		reactiveSlides.state.delete(this.slide);
		this.saveState(reactiveSlides.state);
		console.log("remove slide");
		selected.slides = [];
	}
}
