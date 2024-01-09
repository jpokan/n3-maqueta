<template>
	<PaneWrapper>
		<PaneSlidesSlide v-for="slide in slides" />
	</PaneWrapper>
</template>

<script setup>
import { selected } from "~/assets/webgl/helpers";
const slides = reactive([
	{ title: 'slide-1' }
]);
</script>
