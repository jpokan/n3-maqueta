<template>
	<div class="fixed top-0 mt-2 ml-2">
		<div class="flex justify-center gap-1 items-center">
			<UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
				<UButton color="white" size="xs" variant="solid" trailing-icon="i-heroicons-bars-3-16-solid" />
				<input ref="fileInput" class="hidden" type="file" @change="load($event)">
			</UDropdown>
			<UButton color="white" size="xs" variant="solid" trailing-icon="i-heroicons-arrow-uturn-left-16-solid" />
			<UButton color="white" size="xs" variant="solid" trailing-icon="i-heroicons-arrow-uturn-right-16-solid" />
		</div>
	</div>
</template>

<script setup>
import { loader } from "assets/webgl/loader.js";
import { scene } from "assets/webgl/scene.js";

const fileInput = ref()

const items = [
	[{
		label: 'Import',
		icon: 'i-heroicons-arrow-down-circle-16-solid',
		shortcuts: ['I'],
		click: () => {
			fileInput.value.click()
		}
	}, {
		label: 'Duplicate',
		icon: 'i-heroicons-document-duplicate-20-solid',
		shortcuts: ['D'],
		disabled: true
	}], [{
		label: 'Archive',
		icon: 'i-heroicons-archive-box-20-solid'
	}, {
		label: 'Move',
		icon: 'i-heroicons-arrow-right-circle-20-solid'
	}], [{
		label: 'Delete',
		icon: 'i-heroicons-trash-20-solid',
		shortcuts: ['⌘', 'D']
	}]
]

function load(e) {
	const file = e.target.files[0]
	const reader = new FileReader()

	reader.onload = (e) => {
		const content = e.target.result
		loader.parse(content, '', (gltf) => {
			scene.add(gltf.scene)
		})
	}

	reader.readAsArrayBuffer(file)
}
</script>
