<template>
	<div @click="select(object)" :class="{ 'bg-gray-200 dark:bg-gray-950': selected }"
		class="flex flex-row items-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
		<UIcon v-if="object.children.length > 0" :name="opened ? 'i-heroicons-minus' : 'i-heroicons-plus'"
			class="cursor-pointer ml-2" @click.stop="open" />
		<div class="w-full" @dblclick="deactivate($event)">
			<UInput :ui="{
				base: 'disabled:bg-transparent disabled:pointer-events-none',
			}" size="2xs" v-model="object.name" :disabled="active" @blur="activate" />
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
const opened = ref(false);

const selected = computed(() => {
	if (selection.items.length > 0) {
		return props.object.uuid === selection.items[0].uuid ? true : false;
	}
})

function deactivate(e) {
	active.value = false;
	nextTick(() => {
		if (e.target.firstChild instanceof HTMLInputElement) e.target.firstChild.focus();
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
}

function open() {
	opened.value = !opened.value
}

</script>
