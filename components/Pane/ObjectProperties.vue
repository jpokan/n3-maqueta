<template>
	<PaneWrapper>
		<PaneLabel label="Properties" />
		<PaneWrapper v-if="logic">
			<PaneProperty label="Name">
				<UInput size="2xs" color="white" variant="outline" v-model="selection.items[0].name" />
			</PaneProperty>
			<PaneProperty label="Type">
				<UInput disabled variant="none" v-model="selection.items[0].type" />
			</PaneProperty>
			<PaneProperty label="Position">
				<div class="flex gap-0.5">
					<UInput type="number" step="0.1" v-model="selection.items[0].position.x" />
					<UInput type="number" step="0.1" v-model="selection.items[0].position.y" />
					<UInput type="number" step="0.1" v-model="selection.items[0].position.z" />
				</div>
			</PaneProperty>
			<PaneProperty label="Rotation">
				<div class="flex gap-0.5">
					<UInput type="number" step="0.1" v-model="selection.items[0].rotation.x" />
					<UInput type="number" step="0.1" v-model="selection.items[0].rotation.y" />
					<UInput type="number" step="0.1" v-model="selection.items[0].rotation.z" />
				</div>
			</PaneProperty>
			<PaneProperty label="Scale">
				<div class="flex gap-0.5">
					<UInput type="number" step="0.1" v-model="selection.items[0].scale.x" />
					<UInput type="number" step="0.1" v-model="selection.items[0].scale.y" />
					<UInput type="number" step="0.1" v-model="selection.items[0].scale.z" />
				</div>
			</PaneProperty>
			<PaneProperty label="Visibility">
				<UCheckbox label="" v-model="selection.items[0].visible" />
			</PaneProperty>
			<PaneProperty v-if="selection.items[0].material" label="Material">
				<div class="flex flex-col gap-0.5">
					<UInput v-model="selection.items[0].material.name" />
					<UInput disabled variant="none" v-model="selection.items[0].material.type" />
				</div>
			</PaneProperty>
		</PaneWrapper>
	</PaneWrapper>
</template>

<script setup>
import { PaneLabel } from "#components";
import { selection } from "~/assets/webgl/helpers";

const logic = computed(() => {
	return selection.items.length > 0 ? true : false;
})

</script>
