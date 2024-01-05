<template>
	<PaneWrapper>
		<PaneLabel label="Properties" />
		<PaneWrapper v-if="OBJ3DSelected && tabIndex === 0">
			<PanePropertiesOBJ3D />
		</PaneWrapper>
		<PaneWrapper v-if="materialSelected && tabIndex === 2">
			<PanePropertiesMaterial />
		</PaneWrapper>
	</PaneWrapper>
</template>

<script setup>
import { selection } from "~/assets/webgl/helpers";
const props = defineProps(['tabIndex'])

const OBJ3DSelected = computed(() => {
	return selection.items.length > 0 ? true : false;
})

const materialSelected = computed(() => {
	return selection.material.length > 0 ? true : false;
})

</script>
