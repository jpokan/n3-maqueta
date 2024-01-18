<template>
	<div class="w-full" @dblclick="deactivate($event)">
		<UInput :ui="{
			base: 'disabled:bg-transparent disabled:pointer-events-none',
		}" size="2xs" :value="props.value" @input="emit('update:value', $event.target.value)" :disabled="isDisabled"
			@blur="activate" @change="update" />
	</div>
</template>

<script setup>
import { Command } from "assets/webgl/commands/command"

const isDisabled = ref(true);
const props = defineProps(["value"]);
const emit = defineEmits(["update:value"]);

function activate() {
	isDisabled.value = true;
}

function deactivate(e) {
	isDisabled.value = false;
	nextTick(() => {
		if (e.target.firstChild instanceof HTMLInputElement)
			e.target.firstChild.focus();
	});
}

function update() {
	const command = new Command('updateInput')
	command.execute()
}
</script>
