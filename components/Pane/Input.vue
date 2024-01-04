<template>
	<div class="w-full" @dblclick="deactivate($event)">
		<UInput :ui="{
			base: 'disabled:bg-transparent disabled:pointer-events-none',
		}" size="2xs" :value="props.value" @input="emit('update:value', $event.target.value)" :disabled="active"
			@blur="activate" />
	</div>
</template>

<script setup>
const active = ref(true);
const props = defineProps(['value'])
const emit = defineEmits(['update:value'])

function activate() {
	active.value = true;
}

function deactivate(e) {
	active.value = false;
	nextTick(() => {
		if (e.target.firstChild instanceof HTMLInputElement) e.target.firstChild.focus();
	});
}
</script>
