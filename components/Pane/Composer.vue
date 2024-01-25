<template>
	<PaneWrapper>
		<UAccordion :items="items" open-icon="i-heroicons-plus" close-icon="i-heroicons-minus" multiple>
			<template #effect-composer>
				<PaneItem class="mb-1">
					<UCheckbox label="Enabled" :checked="composerParameters.composer" v-model="composerParameters.composer"
						@change="updateComposer($event)" />
				</PaneItem>
			</template>

			<template #passes>
				<PaneItem class="mb-1">
					<UCheckbox v-for="(item, index) in composerParameters.passes" :label="item.name" :checked="item.enabled"
						v-model="item.enabled" @change="updatePasses(index, $event)"
						:disabled="!composerParameters.composer" />
				</PaneItem>
			</template>
		</UAccordion>
	</PaneWrapper>
</template>

<script setup>
import { composerParameters } from "assets/webgl/parameters";
import { composer } from "assets/webgl/postprocessing";
import { BooleanInputCommand } from "~/assets/webgl/commands/PropertyCommands";
import { CM_Manager } from "~/assets/webgl/commands/commandStack";

const updatePasses = (index, event) => {
	const value = event.target._modelValue;
	const uiObject = composerParameters.passes[index];
	const sceneObject = composer.passes[composerParameters.passes[index].index];
	const command = new BooleanInputCommand([uiObject, sceneObject], "enabled", value);
	CM_Manager.commit(command);
};

const updateComposer = (event) => {
	const value = event.target._modelValue;
	const command = new BooleanInputCommand([composerParameters], "composer", value);
	CM_Manager.commit(command);
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
