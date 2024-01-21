<template>
	<div class="absolute top-0 m-2">
		<div class="flex gap-1">
			<NavFileMenu />
			<UButton color="white" variant="solid" trailing-icon="i-heroicons-arrow-uturn-left-16-solid" @click="undo"
				:disabled="isUndoable" />
			<UButton color="white" variant="solid" trailing-icon="i-heroicons-arrow-uturn-right-16-solid" @click="redo"
				:disabled="!isRedoable" />
			<NavViewMenu />
			<NavDebug />
			<NavInfoMenu />
		</div>
	</div>

	<div class="absolute top-0 right-0 m-2">
		<div class="flex gap-1 justify-end">
			<NavHistory />
			<NavFps />
			<UButton color="white" variant="solid"
				:trailing-icon="isOpen ? 'i-heroicons-arrow-right-start-on-rectangle-16-solid' : 'i-heroicons-arrow-left-start-on-rectangle-16-solid'"
				@click="isOpen = !isOpen" />
			<NavColorModeButton />
		</div>
		<PaneContainer :opened="isOpen" />
	</div>
</template>

<script setup>
import { CommandStack } from '~/assets/webgl/commands/commandStack';
import { CM_Manager } from '~/assets/webgl/commands/commandStack';

const isOpen = ref(true)

const isUndoable = computed(() => {
	return CM_Manager.pointer.value === -1 ? true : false;
})

const isRedoable = computed(() => {
	const pointer = CM_Manager.pointer.value
	const lastIndex = CommandStack.length - 1
	return CommandStack.length > 0 && pointer < lastIndex ? true : false;
})

function undo() {
	CM_Manager.undo()
}

function redo() {
	CM_Manager.redo()
}

</script>
