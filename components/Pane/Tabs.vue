<template>
	<UTabs :default-index="0" @change="onChange" :items="items" orientation="vertical" :ui="{
		wrapper: 'flex items-start gap-1 space-y-0',
		list: {
			base: 'sticky top-0',
			width: 'w-7',
			height: 'h-7',
			padding: 'p-0',
			marker: {
				base: 'border dark:border-gray-700'
			},
			tab: {
				base: 'w-7',
				size: 'text-xs',
				height: 'h-7',
				padding: 'px-0',
			},
		},
	}">
		<template #default="{ item, selected }">
			<UIcon :name="item.icon" class="w-4 h-4 flex-shrink" :class="selected ? 'text-pink-400' : ''" />
		</template>

		<template #slides>
			<PaneSlides />
		</template>
		<template #materials>
			<PaneMaterialsExplorer />
		</template>
		<template #world>
			<PaneWorldSection />
		</template>
		<template #postprocessing>
			<PaneComposer />
		</template>
	</UTabs>
</template>

<script setup>
const emit = defineEmits(['tab-change']);

const items = [
	{
		label: "Slides",
		slot: "slides",
		icon: "i-heroicons-rectangle-stack-16-solid",
	},
	{
		label: "Materials",
		slot: "materials",
		icon: "i-heroicons-swatch-16-solid",
	},
	{
		label: "World",
		slot: "world",
		icon: "i-heroicons-globe-americas-16-solid",
	},
	{
		label: "Postprocessing",
		slot: "postprocessing",
		icon: "i-heroicons-sparkles-16-solid",
	},

];

function onChange(index) {
	const item = items[index]
	emit('tab-change', item.label, index)
}
</script>
