<template>
	<PaneWrapper>
		<p>POSTPROCESSING</p>
		---
		<UCheckbox v-model="composerParameters.composer" label="Effect Composer"
			@change="enabled = composerParameters.composer" />
		---
		<p>PASSES</p>
		---
		<UCheckbox v-for="item, index in composerParameters.passes" v-model="composerParameters.passes[index].enabled"
			@change="update(item.index, item.enabled)" :label="item.name" :disabled="!enabled" />
	</PaneWrapper>
</template>

<script setup>
import { composerParameters } from "assets/webgl/parameters";
import { composer } from "assets/webgl/postprocessing";

const enabled = ref(composerParameters.composer)

const update = (index, value) => {
	composer.passes[index].enabled = value;
};

</script>
