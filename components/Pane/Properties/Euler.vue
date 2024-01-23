<template>
	<div class="flex gap-0.5">
		<UInput type="number" step="0.1" :value="toDegrees(selected.items[0].rotation.x)" @change="setEuler('x', $event)" />
		<UInput type="number" step="0.1" :value="toDegrees(selected.items[0].rotation.y)" @change="setEuler('y', $event)" />
		<UInput type="number" step="0.1" :value="toDegrees(selected.items[0].rotation.z)" @change="setEuler('z', $event)" />
	</div>
</template>

<script setup>
import { SetEulerCommand } from "assets/webgl/commands/PropertyCommands";
import { CM_Manager } from "~/assets/webgl/commands/commandStack";
import { selected } from "assets/webgl/helpers";

const property = selected.items[0].rotation

// convert to radians
function toRadians(angle) {
	return angle * (Math.PI / 180)
}

const toDegrees = (value) => {
	return value * (180 / Math.PI)
}

function setEuler(component, event) {
	if (!property.isEuler) return

	const value = toRadians(Number(event.target.value))

	const command = new SetEulerCommand(component, value)
	CM_Manager.commit(command)
}

</script>
