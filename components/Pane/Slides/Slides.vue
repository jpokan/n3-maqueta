<template>
	<div class="flex gap-1 mb-1">
		<UButton icon="i-heroicons-plus" color="white" variant="solid" @click="addSlide" />
		<UButton icon="i-heroicons-x-mark" color="white" variant="solid" @click="removeSlide" :disabled="!isSelected" />
	</div>
	<div class="overflow-y-auto cs-h-slide pr-1 mb-1 gap-0.5 flex flex-col w-full">
		<PaneSlidesSlide v-for="slide in slides" :slide="slide" />
	</div>
</template>

<script setup>
import { slides } from "assets/webgl/slides"
import { selected } from "~/assets/webgl/helpers";

const counter = ref(0)

const isSelected = computed(() => {
	return selected.slides.length > 0 ? true : false;
})

function addSlide() {
	slides.add({
		id: `s-${counter.value}`
	})
	counter.value++
}

function removeSlide() {
	if (isSelected) {
		const slide = selected.slides[0]
		slides.delete(slide)
		selected.slides = []
	}
}

</script>

<style scoped>
.cs-h-slide {
	height: calc(100dvh - 8px - 44px - 366px);
}
</style>
