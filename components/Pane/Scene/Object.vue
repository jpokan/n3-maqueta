<template>
	<div @click="select(object)" @dblclick="deactivate($event)"
		class="pl-2 hover:bg-gray-100 dark:hover:bg-gray-950 rounded-md">
		<div class="flex flex-row items-center">
			<UIcon :name="opened ? 'i-heroicons-minus' : 'i-heroicons-plus'" class="cursor-pointer" @click="open" />
			<UInput class="w-full" :ui="{
				base: 'disabled:bg-transparent disabled:pointer-events-none',
			}" size="2xs" v-model="object.name" :disabled="active" @click="select" @blur="activate" />
		</div>
	</div>
	<div v-show="opened" class="ml-5" v-for="item in object.children" :key="item.uuid">
		<PaneSceneObject :object="item" />
	</div>
</template>

<script setup>
import { outlinePass } from "assets/webgl/postprocessing.js";
import { selection } from "assets/webgl/helpers.js";

const props = defineProps(["object"]);

const active = ref(true);
const opened = ref(false)

function deactivate(e) {
	active.value = false;
	nextTick(() => {
		e.target.firstChild.focus();
	});
}

function activate() {
	active.value = true;
}

function select(object) {
	selection.items = [];
	outlinePass.selectedObjects = selection.items;

	selection.items.push(object);
	outlinePass.selectedObjects = selection.items;
	console.log(object);
}

function open() {
	opened.value = !opened.value
}

</script>
