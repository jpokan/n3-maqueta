<template>
	<ClientOnly>
		<Transition v-show="props.opened" enter-active-class="transition-opacity duration-100 ease-in-out"
			leave-active-class="transition-opacity duration-100 ease-in-out" enter-from-class="opacity-0"
			leave-to-class="opacity-0">
			<div
				class="mt-2 p-1 w-72 cs-h overflow-y-scroll dark:bg-gray-900 bg-white border-gray-200 border dark:border-gray-700 rounded-md shadow-lg text-xs">
				<PaneTabs />
			</div>
		</Transition>
	</ClientOnly>
</template>

<script setup>
const props = defineProps(["opened"]);
</script>

<style>
.cs-h {
	height: calc(100dvh - 44px - 8px);
}
</style>
