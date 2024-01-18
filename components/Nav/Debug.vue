<template>
	<UButton v-show="isDev" color="white" variant="solid" trailing-icon="i-heroicons-bug-ant-16-solid" @click="log" />
</template>

<script setup>
const isDev = process.dev

function log() {
	// log anything you need to debug
}
</script>
