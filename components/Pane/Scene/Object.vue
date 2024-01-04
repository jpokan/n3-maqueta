<template>
	<div @click="select(OBJ3D)" :class="{ 'bg-gray-200 dark:bg-gray-950': selected }"
		class="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
		<UIcon v-if="OBJ3D.children.length > 0" :name="opened ? 'i-heroicons-minus' : 'i-heroicons-plus'"
			class="cursor-pointer ml-2" @click.stop="open" />
		<PaneInput :value="OBJ3D.name" @update:value="update(OBJ3D, $event)" />
	</div>
	<div v-show="opened" class="ml-5" v-for="item in OBJ3D.children" :key="item.uuid">
		<PaneSceneObject :OBJ3D="item" />
	</div>
</template>

<script setup>
import { outlinePass } from "assets/webgl/postprocessing.js";
import { selection } from "assets/webgl/helpers.js";

const props = defineProps(["OBJ3D"]);
const opened = ref(false);

function update(OBJ3D, event) {
	OBJ3D.name = event
}

const selected = computed(() => {
	if (selection.items.length > 0) {
		return props.OBJ3D.uuid === selection.items[0].uuid ? true : false;
	}
})

function select(OBJ3D) {
	selection.items = [];
	outlinePass.selectedObjects = selection.items;

	selection.items.push(OBJ3D);
	outlinePass.selectedObjects = selection.items;
}

function open() {
	opened.value = !opened.value
}

</script>
