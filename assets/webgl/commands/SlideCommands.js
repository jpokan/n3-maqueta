import { Command } from "./command"
import { selected } from "assets/webgl/helpers";
import { slides } from "assets/webgl/slides";

let counter = 0

export class AddSlideCommand extends Command {
	constructor() {
		super()
		this.slide = { id: `s-${counter}` }
	}

	execute() {
		slides.add(this.slide);
		counter++
	}

	undo() {
		slides.delete(this.slide);
		counter--
	}
}

export class RemoveSlideCommand extends Command {
	constructor() {
		super()
		this.slide = selected.slides[0]
	}

	execute() {
		slides.delete(this.slide);
		selected.slides = [];
	}

	undo() {
		slides.add(this.slide);
	}

}
