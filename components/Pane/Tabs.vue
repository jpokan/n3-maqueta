<template>
	<UTabs :items="items" orientation="vertical" :ui="{
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

		<template #scene="">
			<PaneScene />
		</template>
		<template #object="">
			<PaneObjectProperties />
		</template>
		<template #materials="">
			<PaneMaterials />
		</template>
		<template #composer="">
			<PaneComposer />
		</template>
	</UTabs>
</template>

<script setup>
const items = [
	{
		label: "Scene",
		slot: "scene",
		icon: "i-heroicons-rectangle-group",
	},
	{
		label: "Object Properties",
		slot: "object",
		icon: "i-heroicons-viewfinder-circle",
	},
	{
		label: "Materials",
		slot: "materials",
		icon: "i-heroicons-truck",
	},
	{
		label: "Composer",
		slot: "composer",
		icon: "i-heroicons-sparkles",
	},

];
</script>
