<template>
	<input class="hidden" type="file" @change="load($event)" />
</template>

<script setup>
import { ImportCommand } from "assets/webgl/commands/SceneCommands";
import { CM_Manager } from "assets/webgl/commands/commandStack";
import { gltfLoader, post_import } from "assets/webgl/loader.js";
import { importFailMsg } from "assets/toast/messages.js";

const toast = useToast();

function load(e) {
	if (e.target.files.length === 0) return;

	const file = e.target.files[0];
	const reader = new FileReader();

	try {
		reader.onload = (e) => {
			const content = e.target.result;
			gltfLoader.parse(content, "", (gltf) => {
				post_import(gltf)
				// Import Command
				const command = new ImportCommand(gltf.scene);
				CM_Manager.commit(command);
			});
		};
	} catch (err) {
		toast.add(importFailMsg);
	}
	reader.readAsArrayBuffer(file);

	// Reset input
	e.target.value = "";
}
</script>
