<template>
	<div class="flex gap-0.5">
		<UInput type="number" step="0.1" v-model="property.x" @change="updateVector('scale', $event)" />
		<UInput type="number" step="0.1" v-model="property.y" @change="updateVector('scale', $event)" />
		<UInput type="number" step="0.1" v-model="property.z" @change="updateVector('scale', $event)" />
	</div>
</template>

<script setup>
import { selected } from "assets/webgl/helpers";

const props = defineProps(['propertyName'])
const property = selected.items[0][props.propertyName]
const old_value = ref()

onMounted(() => {
	saveState()
})

function saveState() {
	old_value.value = {
		x: property.x,
		y: property.y,
		z: property.z,
	}
}

function updateVector(property, old_value, event) {
	// const command = new UpdateInputCommand()
	// CM_Manager.commit(command)
}

</script>
