<template>
	<PaneWrapper>
		<UAccordion :items="items" multiple>
			<template #slides>
				<div class="mb-1">
					<UButton icon="i-heroicons-plus" color="white" variant="solid" @click="addSlide" />
				</div>
				<div class="overflow-y-auto h-28 pr-1 mb-1 gap-0.5 grid">
					<PaneSlidesSlide v-for="slide in slides" :slide="slide" />
				</div>
			</template>
			<template #slide-properties>
				<!-- <PanePropertiesMaterial class="csf-h pr-1 overflow-y-auto" /> -->
			</template>
		</UAccordion>
	</PaneWrapper>
</template>

<script setup>
const slides = reactive([]);

function addSlide() {
	const index = slides.length + 1
	slides.push({
		id: `s-${index}`
	})
}

const items = [
	{
		label: "Slides",
		slot: "slides",
		defaultOpen: true,
		disabled: true,
	},
	{
		label: "Slide Properties",
		slot: "slide-properties",
		defaultOpen: true,
	},
];

</script>

<style>
.csf-h {
	height: calc(100dvh - 8px - 44px - 514px);
}
</style>
