<template>
	<UDropdown :items="items" :ui="{
		item: {
			disabled:
				'cursor-text select-text',
		},
	}" :popper="{ placement: 'bottom-start' }">
		<UButton color="white" variant="solid" trailing-icon="i-heroicons-bars-3-16-solid" />
		<template #import="{ item }">
			<p class="text-gray-900 dark:text-white">
				{{ item.label }}
			</p>
		</template>
		<component v-for="item, index in items[2]" :id="`${item.label}Input`" :is="components[index]"></component>
	</UDropdown>
</template>

<script setup>
import { NavFileGLTFInput, NavFileColladaInput } from '#components';

const components = [
	NavFileGLTFInput,
	NavFileColladaInput
]

const items = [
	[
		{
			label: "New",
			icon: "i-heroicons-document-plus",
			shortcuts: ["N"],
		},
	],
	[
		{
			label: "Import",
			slot: "import",
			disabled: true,
		},
	],
	[
		{
			label: "GLTF",
			shortcuts: ["G"],
			icon: "i-heroicons-document-arrow-up",
			click: () => {
				document.getElementById("GLTFInput").click();
			},
		},
		{
			label: "Collada",
			shortcuts: ["C"],
			icon: "i-heroicons-document-arrow-up",
			click: () => {
				document.getElementById("ColladaInput").click();
			},
		},
	],
];
</script>
