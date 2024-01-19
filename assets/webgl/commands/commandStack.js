/**
 *
 * Command Stack:
 * [ AddSlideCommand, RemoveSlideCommand, UpdateInputCommand ]
 * Represents the timeline of commands executed
 *
 */

import { Command } from "./command";

export const CommandStack = [];

/**
 *
 * Command Manager
 * Pushes Commands to the Command Stack in a organized way
 *
 * CommandManager.push()
 * 1. Pushes Command to the Command Stack
 * 2. Set Command stack pointer to last
 * 3. Runs Execute business logic
 *
 * CommandManager.undo()
 * 1. Runs Undo business logic
 * 2. Set Command Stack pointer to -1
 *
 * CommandManager.redo()
 * 1. Runs Undo business logic
 * 2. Set Command Stack pointer to +1
 */

class CommandManager {
	constructor(name, size) {
		this.name = name || "Command Manager";
		this.maxSize = size || 30; // Limits the amount of Commands pushed to the Stack
		this.pointer = -1; // Pointer indicates the position in the Command Stack timeline
		this.isCommandManager = true;
	}

	commit(command) {
		// Check if Command Stack has reached the max history limit
		if (CommandStack.length === this.maxSize) {
			// Removes first element
			CommandStack.shift();
		}
		// 1. Push
		CommandStack.push(command);
		// 2. Set pointer position
		this.pointer = CommandStack.length - 1; // n-1
		// 3. Execute
		command.execute();
	}

	undo() {
		if (this.pointer === -1) return
		// 1. Undo
		const command = CommandStack[this.pointer]
		command.undo();
		// 2. Set pointer position
		this.pointer = this.pointer - 1; // pointer - 1
	}

	redo() {
		if (this.pointer === this.maxSize) return
		if (this.pointer === CommandStack.length - 1) return
		// 1. Redo
		const command = CommandStack[this.pointer + 1]
		command.execute();
		// 2. Set pointer position
		this.pointer = this.pointer + 1;
	}
}

export const CM_Manager = new CommandManager()
