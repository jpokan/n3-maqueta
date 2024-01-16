<template>
	<PaneWrapper>
		<div>
			<UButton icon="i-heroicons-plus" color="white" variant="solid" @click="addSlide" />
		</div>
		<div class="overflow-y-auto cs-h-slide pr-1 mb-1 gap-0.5 flex flex-col w-full">
			<PaneSlidesSlide v-for="slide in slides" :slide="slide" />
		</div>
	</PaneWrapper>
</template>

<script setup>
import { slides } from "assets/webgl/slides"

function addSlide() {
	const index = slides.length + 1
	slides.push({
		id: `s-${index}`
	})
}

</script>

<style scoped>
.cs-h-slide {
	height: calc(100dvh - 8px - 44px - 368px);
}
</style>
