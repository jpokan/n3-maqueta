<template>
	<div class="flex gap-0.5 flex-col mb-1">
		<PaneProperty label="Near">
			<UInput type="number" step="0.1" v-model="camParameters.near" @input="update('near', $event)" />
		</PaneProperty>
		<PaneProperty label="Far">
			<UInput type="number" step="0.1" v-model="camParameters.far" @input="update('far', $event)" />
		</PaneProperty>
		<PaneProperty label="Fov">
			<UInput type="number" step="0.1" v-model="camParameters.fov" @input="update('fov', $event)" />
		</PaneProperty>
		<PaneProperty label="Position">
			<div class="flex gap-0.5">
				<UInput type="number" step="0.1" v-model="camParameters.position.x"
					@input="camera.position.x = $event.target.value" />
				<UInput type="number" step="0.1" v-model="camParameters.position.y"
					@input="camera.position.y = $event.target.value" />
				<UInput type="number" step="0.1" v-model="camParameters.position.z"
					@input="camera.position.z = $event.target.value" />
			</div>
		</PaneProperty>
	</div>
</template>

<script setup>
import { camera } from "assets/webgl/camera";
import { camParameters } from "assets/webgl/parameters";

function update(parameter, event) {
	camera[parameter] = Number(event.target.value);
	camera.updateProjectionMatrix()
}

</script>
