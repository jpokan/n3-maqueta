<template>
	<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
		<UButton color="white" variant="solid" trailing-icon="i-heroicons-bars-3-16-solid" />
		<NavFileInput id="gltfInput" />
	</UDropdown>
</template>

<script setup>
const items = [
	[{
		label: 'New',
		icon: 'i-heroicons-document-plus',
		shortcuts: ['N']
	}],
	[{
		label: 'Import GLTF',
		icon: 'i-heroicons-arrow-down-circle-16-solid',
		shortcuts: ['I'],
		click: () => {
			document.getElementById('gltfInput').click()
		}
	}],
]

</script>
