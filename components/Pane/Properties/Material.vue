<template>
	<PaneProperty label="Name">
		<UInput size="2xs" color="white" variant="outline" v-model="selection.material[0].name" />
	</PaneProperty>
</template>

<script setup>
import { selection } from "assets/webgl/helpers"
</script>
