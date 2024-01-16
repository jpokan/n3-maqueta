<template>
	<div :class="{ 'border border-pink-500': isSameSlide }" class="rounded-sm bg-gray-100 dark:bg-gray-800 min-h-24 w-full"
		@click="select"></div>
</template>

<script setup>
import { selected } from "~/assets/webgl/helpers";

const props = defineProps(["slide"]);

function select() {
	selected.slides = [];
	selected.slides.push(props.slide);
}

const isSameSlide = computed(() => {
	return selected.slides[0] === props.slide ? true : false;
});
</script>
