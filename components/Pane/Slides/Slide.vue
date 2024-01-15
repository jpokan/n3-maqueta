<template>
	<div class="flex justify-between gap-1">
		<div class="rounded-sm bg-gray-100 dark:bg-gray-800 h-24 w-full" @click="select">
			{{ props.slide }}
		</div>
		<div>
			<UButton @click.stop="removeSlide(slide)" icon="i-heroicons-x-circle-16-solid" variant="link" color="gray"
				size="xs" :padded="true" />
		</div>
	</div>
</template>
<script setup>
import { selected } from "~/assets/webgl/helpers";

const props = defineProps(["slide"]);

function select() {
	selected.slides = [];
	selected.slides.push(props.slide);
}
</script>
