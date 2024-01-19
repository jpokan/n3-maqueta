<template>
	<UButton v-show="isDev" color="white" variant="solid" trailing-icon="i-heroicons-bug-ant-16-solid" @click="log" />
</template>

<script setup>
import { CommandStack, CM_Manager } from "assets/webgl/commands/commandStack"
const isDev = process.dev

function log() {
	console.log(CommandStack, CM_Manager);
	// log anything you need to debug
}
</script>
