<template>
	<div class="rounded-sm bg-gray-100 dark:bg-gray-800 min-h-24 w-full" @click="select">
		{{ props.slide }}
	</div>
</template>

<script setup>
import { selected } from "~/assets/webgl/helpers";

const props = defineProps(["slide"]);

function select() {
	selected.slides = [];
	selected.slides.push(props.slide);
}
</script>
