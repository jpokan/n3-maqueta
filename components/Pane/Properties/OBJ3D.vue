<template>
	<PaneWrapper v-if="OBJ3DSelected">
		<PaneProperty label="Name">
			<UInput size="2xs" color="white" variant="outline" v-model="selected.items[0].name" />
		</PaneProperty>
		<PaneProperty label="Type">
			<UInput disabled v-model="selected.items[0].type" />
		</PaneProperty>
		<PaneProperty v-if="!isLineSegments" label="Position">
			<PanePropertiesVector3 propertyName="position" />
		</PaneProperty>
		<PaneProperty v-if="!isLineSegments" label="Rotation">
			<PanePropertiesEuler />
		</PaneProperty>
		<PaneProperty v-if="!isLineSegments" label="Scale">
			<PanePropertiesVector3 propertyName="scale" />
		</PaneProperty>
		<PaneProperty label="Visibility">
			<PanePropertiesVisibility />
		</PaneProperty>
		<PaneProperty v-if="selected.items[0].material" label="Material">
			<PanePropertiesMaterial />
		</PaneProperty>
	</PaneWrapper>
</template>

<script setup>
import { selected } from "assets/webgl/helpers";

const isLineSegments = computed(() => {
	return selected.items[0].isLineSegments;
});

const OBJ3DSelected = computed(() => {
	return selected.items.length > 0 ? true : false;
});

</script>
