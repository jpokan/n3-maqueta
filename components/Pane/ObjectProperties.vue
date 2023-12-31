<template>
	<PaneWrapper>
		<PaneLabel label="Object Properties" />
		<div v-if="selection.items.length > 0" class="flex flex-col gap-1 text-xs">
			<PaneText label="Name">
				<UInput size="2xs" color="white" variant="outline" v-model="selection.items[0].name" />
			</PaneText>
			<PaneText label="Type">
				<UInput disabled variant="none" v-model="selection.items[0].type" />
			</PaneText>
			<PaneText label="Position">
				<div class="flex gap-1">
					<UInput type="number" step="0.1" v-model="selection.items[0].position.x" />
					<UInput type="number" step="0.1" v-model="selection.items[0].position.y" />
					<UInput type="number" step="0.1" v-model="selection.items[0].position.z" />
				</div>
			</PaneText>
			<PaneText label="Rotation">
				<div class="flex gap-1">
					<UInput type="number" step="0.1" v-model="selection.items[0].rotation.x" />
					<UInput type="number" step="0.1" v-model="selection.items[0].rotation.y" />
					<UInput type="number" step="0.1" v-model="selection.items[0].rotation.z" />
				</div>
			</PaneText>
			<PaneText label="Scale">
				<div class="flex gap-1">
					<UInput type="number" step="0.1" v-model="selection.items[0].scale.x" />
					<UInput type="number" step="0.1" v-model="selection.items[0].scale.y" />
					<UInput type="number" step="0.1" v-model="selection.items[0].scale.z" />
				</div>
			</PaneText>
			<PaneText label="Visibility">
				<UCheckbox label="" v-model="selection.items[0].visible" />
			</PaneText>
			<PaneText label="Material">
				<div class="flex flex-col gap-1">
					<UInput v-model="selection.items[0].material.name" />
					<UInput disabled variant="none" v-model="selection.items[0].material.type" />
				</div>
			</PaneText>
		</div>
	</PaneWrapper>
</template>

<script setup>
import { PaneLabel } from "#components";
import { selection } from "~/assets/webgl/helpers";
</script>
