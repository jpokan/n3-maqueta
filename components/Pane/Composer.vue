<template>
	<PaneWrapper>
		<UAccordion
			:items="items"
			open-icon="i-heroicons-plus"
			close-icon="i-heroicons-minus"
			multiple
		>
			<template #effect-composer>
				<PaneItem class="mb-1">
					<UCheckbox label="Enabled" v-model="composerParameters.composer" />
				</PaneItem>
			</template>

			<template #passes>
				<PaneItem class="mb-1">
				<UCheckbox
					v-for="(item, index) in composerParameters.passes"
					v-model="composerParameters.passes[index].enabled"
					@change="update(item.index, item.enabled)"
					:label="item.name"
					:disabled="!composerParameters.composer"
				/>
				</PaneItem>
			</template>
		</UAccordion>
	</PaneWrapper>
</template>

<script setup>
import { composerParameters } from "assets/webgl/parameters";
import { composer } from "assets/webgl/postprocessing";

const update = (index, value) => {
	composer.passes[index].enabled = value;
};

const items = [
	{
		label: "Effect Composer",
		slot: "effect-composer",
		defaultOpen: true,
	},
	{
		label: "Passes",
		slot: "passes",
		defaultOpen: true,
	},
];
</script>
