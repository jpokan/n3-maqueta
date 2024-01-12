<template>
	<PaneWrapper>
		<UAccordion :items="items" multiple>
			<template #ambient-light>
				<PaneWorldAmbientLight />
			</template>
			<template #camera>
				<PaneWorldCamera />
			</template>
		</UAccordion>
	</PaneWrapper>
</template>

<script setup>
const items = [
	{
		label: "Ambient Light",
		slot: "ambient-light",
		defaultOpen: true,
	},
	{
		label: "Camera",
		slot: "camera",
		defaultOpen: true,
	},
];
</script>
