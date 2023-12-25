<template>
	<PaneWrapper>
		<p>POSTPROCESSING</p>
		---
		<UCheckbox v-model="composerParameters.composer" label="Effect Composer" @change="able" />
		---
		<p>PASSES</p>
		---
		<UCheckbox v-for="item in passes" v-model="composerParameters[item.label]" @change="update(item.index, item.label)"
			:label="item.label" :disabled="!enabled" />
	</PaneWrapper>
</template>

<script setup>
import { composerParameters } from "assets/webgl/parameters";
import { composer } from "assets/webgl/postprocessing";

const enabled = ref(composerParameters.composer)

const update = (index, label) => {
	composer.passes[index].enabled = composerParameters[label];
};

const able = () => {
	enabled.value = composerParameters.composer
}

// This array represents the composer passes excluding the render and output pass
// If you update this array, make sure to also check the postprocessing file

const passes = [
	{
		label: "gtao",
		index: 1,
	},
	{
		label: "gtao2",
		index: 2,
	},
];
</script>
