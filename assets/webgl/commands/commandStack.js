import { reactive } from "vue";

/**
 *
 * Command Stack:
 * [ AddSlideCommand, RemoveSlideCommand, UpdateInputCommand ]
 * Represents the timeline of commands executed
 *
 */

export const CommandStack = [];

/**
 *
 * Command Manager
 * An interface to manipulate the Command Stack in a organized way
 *
 * CommandManager.commit()
 * Pushes Command to Command Stack
 *
 * CommandManager.undo()
 * 0. Set pointer backward -1
 *
 * CommandManager.redo()
 * 0. Set pointer forward +1
 */

class CommandManager {
	constructor(name, size) {
		this.name = name || "Command Manager";
		this.maxSize = size || 30; // Limits the amount of Commands pushed to the Stack
		this.pointer = reactive({ value: -1 }); // Pointer indicates the position in the Command Stack timeline
	}

	commit(command) {
		// Check if Command Stack has reached the max history limit
		if (CommandStack.length === this.maxSize) {
			// Removes first element
			CommandStack.shift();
		}
		// Clear Commands after pointer
		while (CommandStack.length - 1 > this.pointer.value) {
			CommandStack.pop()
		}
		// 1. Push
		CommandStack.push(command);
		// 2. Execute
		command.execute();
		// 3. Set pointer position to last
		if (this.pointer.value + 1 === this.maxSize) return
		this.pointer.value = this.pointer.value + 1; // n-1
	}

	undo() {
		if (this.pointer.value === -1) return
		// 1. Undo
		const command = CommandStack[this.pointer.value]
		command.undo();
		// 2. Set pointer position
		this.pointer.value = this.pointer.value - 1; // pointer - 1
	}

	redo() {
		if (this.pointer.value === this.maxSize) return
		if (this.pointer.value === CommandStack.length - 1) return
		// 1. Redo
		const command = CommandStack[this.pointer.value + 1]
		command.redo();
		// 2. Set pointer position
		this.pointer.value = this.pointer.value + 1;
	}
}

export const CM_Manager = new CommandManager()
