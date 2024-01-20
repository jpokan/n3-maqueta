<template>
	<input class="hidden" type="file" @change="load($event)" />
</template>

<script setup>
import { ImportCommand } from "assets/webgl/commands/SceneCommands"
import { CM_Manager } from "assets/webgl/commands/commandStack"
import { importFailMsg } from "assets/toast/messages.js";

const toast = useToast();

function load(e) {
	if (e.target.files.length === 0) return;

	const command = new ImportCommand(e)
	try {
		CM_Manager.commit(command)
	} catch {
		toast.add(importFailMsg);
	}
}

</script>
