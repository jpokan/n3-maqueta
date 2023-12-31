<template>
	<PaneWrapper>
		<PaneLabel label="Scene Explorer" />
		<PaneWrapper v-if="scene.length > 0">
			<input v-for="item in scene" v-model="item.type" disabled>
		</PaneWrapper>
	</PaneWrapper>
</template>

<script setup>
import { src_scene } from '~/assets/webgl/scene';
const scene = reactive(src_scene.children)
</script>
