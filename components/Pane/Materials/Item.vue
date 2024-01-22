<template>
	<div @click="select(material)" :class="{ 'bg-gray-200 dark:bg-gray-950': isSelected }"
		class="flex flex-row items-center gap-1 pl-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
		<PaneInput :value="material.name" @update:value="update(material, $event)" />
		<UButton :disabled="isPrivate" @click.stop="removeMaterial(material)" icon="i-heroicons-x-circle-16-solid"
			variant="ghost" color="gray" size="xs" :padded="true" />
	</div>
</template>

<script setup>
import { selected } from "assets/webgl/helpers";
import { RemoveAndApplyMaterialCommand } from "assets/webgl/commands/MaterialCommands"
import { CM_Manager } from '~/assets/webgl/commands/commandStack';

const props = defineProps(['material', 'index'])

const isPrivate = computed(() => {
	return props.material.userData.isPrivate
})

const isSelected = computed(() => {
	if (selected.materials.length > 0) {
		return props.material.uuid === selected.materials[0].uuid ? true : false;
	}
})

function select(material) {
	selected.materials = [];
	selected.materials.push(material);
}

function update(material, event) {
	material.name = event;
}

function removeMaterial(material) {
	selected.materials = []
	const command = new RemoveAndApplyMaterialCommand(material)
	CM_Manager.commit(command)
}
</script>
