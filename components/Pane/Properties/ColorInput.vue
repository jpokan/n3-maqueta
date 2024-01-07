<template>
	<UInput type="color" :value="hexString" @input="updateColor(threeColor, $event)" />
</template>

<script setup>
const props = defineProps(['threeColor'])

const hexString = computed(() => {
	const string = props.threeColor.getHexString();
	return `#${string}`;
});

function updateColor(threeColor, event) {
	threeColor.set(event.target.value);
}
</script>
