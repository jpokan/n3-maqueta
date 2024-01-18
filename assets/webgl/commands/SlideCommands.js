import { Command } from "./Command";

class AddSlideCommand extends Command {
	constructor(slide) {
		this.slide = slide
	}

	execute() {

	}

	undo() {

	}
}

class RemoveSlideCommand extends Command {
	constructor() {
	}

	execute() {

	}

	undo() {

	}

}
