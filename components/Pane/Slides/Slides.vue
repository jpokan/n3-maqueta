<template>
	<div class="flex gap-1 mb-1">
		<UButton icon="i-heroicons-plus" color="white" variant="solid" @click="addSlide" />
		<UButton icon="i-heroicons-x-mark" color="white" variant="solid" @click="removeSlide" :disabled="!isSelected" />
		<UButton color="white" variant="solid" @click="removeSlide" :label="`${slides.size}`" disabled />
	</div>
	<div class="overflow-y-auto cs-h-slide pr-1 mb-1 gap-0.5 flex flex-col w-full">
		<PaneSlidesSlide v-for="slide in slides" :slide="slide" />
	</div>
</template>

<script setup>
import { slides } from "assets/webgl/slides";
import { selected } from "assets/webgl/helpers";
import { AddSlideCommand, RemoveSlideCommand } from "assets/webgl/commands/SlideCommands"
import { CM_Manager } from "assets/webgl/commands/commandStack"

const isSelected = computed(() => {
	return selected.slides.length > 0 ? true : false;
});

function addSlide() {
	const command = new AddSlideCommand()
	CM_Manager.commit(command)
}

function removeSlide() {
	if (isSelected) {
		const command = new RemoveSlideCommand()
		CM_Manager.commit(command)
	}
}
</script>

<style scoped>
.cs-h-slide {
	height: calc(100dvh - 8px - 44px - 366px);
}
</style>
