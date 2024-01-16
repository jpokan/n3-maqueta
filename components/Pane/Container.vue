<template>
	<ClientOnly>
		<Transition v-show="props.opened" enter-active-class="transition-opacity duration-100 ease-in-out"
			leave-active-class="transition-opacity duration-100 ease-in-out" enter-from-class="opacity-0"
			leave-to-class="opacity-0">
			<div class="mt-2 p-1 w-80 cs-h dark:bg-gray-900 bg-white border-gray-200 border dark:border-gray-700
				rounded-md shadow-lg flex justify-between flex-col gap-1 select-none">
				<div class="flex flex-col gap-1">
					<PaneLabel label="Scene Explorer" />
					<PaneSceneExplorer />
				</div>
				<div class="flex flex-col gap-1 h-full">
					<PaneLabel :label="label" />
					<PaneTabs class="pr-1" @tab-change="changeLabel" />
				</div>
			</div>
		</Transition>
	</ClientOnly>
</template>

<script setup>
const props = defineProps(["opened"]);
const label = ref('Object');
const idx = ref(0);

function changeLabel(e, index) {
	idx.value = index
	label.value = e
}
</script>

<style scoped>
.cs-h {
	height: calc(100dvh - 44px - 8px);
}
</style>
