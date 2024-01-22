<template>
	<div class="flex gap-0.5">
		<UInput type="number" step="0.1" :value="property.x" @change="setComponent(0, $event)" />
		<UInput type="number" step="0.1" :value="property.y" @change="setComponent(1, $event)" />
		<UInput type="number" step="0.1" :value="property.z" @change="setComponent(2, $event)" />
	</div>
</template>

<script setup>
import { SetComponentCommand } from "assets/webgl/commands/PropertyCommands";
import { CM_Manager } from "~/assets/webgl/commands/commandStack";
import { selected } from "assets/webgl/helpers";

const props = defineProps(['propertyName'])
const property = selected.items[0][props.propertyName]

function setComponent(index, event) {
	if (!property.isVector3) return
	const value = event.target.value
	const old_value = Number(property.getComponent(index))

	const command = new SetComponentCommand(property, index, old_value, value)
	CM_Manager.commit(command)
}

</script>
