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
 * Pushes Commands to the Command Stack in a organized way
 *
 * CommandManager.push()
 * 1. Pushes Command to the Command Stack
 * 2. Set Command stack pointer to last
 * 3. Runs Execute business logic
 *
 * CommandManager.undo()
 * 1. Set Command Stack pointer to -1
 * 2. Runs Undo business logic
 *
 */

class CommandManager {
	constructor(name, size) {
		this.name = name || "Command Manager";
		this.maxSize = size || 30; // Limits the amount of Commands pushed to the Stack
		this.pointer = 0; // Pointer indicates the position in the Command Stack timeline
		this.isCommandManager = true;
	}

	push(command) {
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

	undo(command) {
		if (CommandStack.length === 0) {
			return;
		}
		// 1. Set pointer position
		this.pointer = this.pointer - 1; // pointer - 1
		// 2. Undo
		command.undo();
	}
}

