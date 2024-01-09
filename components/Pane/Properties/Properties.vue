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
import { selected } from "~/assets/webgl/helpers";
const props = defineProps(['tabIndex'])

const OBJ3DSelected = computed(() => {
	return selected.items.length > 0 ? true : false;
})

const materialSelected = computed(() => {
	return selected.materials.length > 0 ? true : false;
})

</script>
