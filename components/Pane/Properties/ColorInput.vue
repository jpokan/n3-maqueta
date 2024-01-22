<template>
	<UInput type="color" :value="hexString" @input="updateColor(threeColor, $event)" @pointerdown="saveColor($event)"
		@change="update(threeColor, $event)" />
</template>

<script setup>
import { SetColorCommand } from "assets/webgl/commands/PropertyCommands"
import { CM_Manager } from "~/assets/webgl/commands/commandStack";

const props = defineProps(['threeColor'])
const old_color = ref()

function saveColor(event) {
	old_color.value = event.target.value
}

const hexString = computed(() => {
	const string = props.threeColor.getHexString();
	return `#${string}`;
});

function updateColor(threeColor, event) {
	threeColor.set(event.target.value);
}

function update(threeColor, event) {
	const command = new SetColorCommand(threeColor, old_color.value, event.target.value)
	CM_Manager.commit(command)
}
</script>
