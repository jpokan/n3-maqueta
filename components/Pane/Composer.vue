<template>
	<PaneWrapper>
		<UAccordion :items="items" open-icon="i-heroicons-plus" close-icon="i-heroicons-minus" multiple>

			<template #effect-composer>
				<UCheckbox v-model="composerParameters.composer" label="Effect Composer" />
			</template>

			<template #passes>
				<UCheckbox v-for="item, index in composerParameters.passes"
					v-model="composerParameters.passes[index].enabled" @change="update(item.index, item.enabled)"
					:label="item.name" :disabled="!composerParameters.composer" />
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
		label: 'Postprocessing',
		slot: 'effect-composer',
		defaultOpen: true,
	},
	{
		label: 'Passes',
		slot: 'passes',
		defaultOpen: true,
	}
]

</script>
