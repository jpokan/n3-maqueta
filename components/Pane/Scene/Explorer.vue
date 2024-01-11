<template>
	<PaneWrapper class="min-h-64 max-h-64 overflow-y-auto pr-1">
		<PaneSceneObject v-for="item in src_scene.children" :key="item.uuid" :OBJ3D="item" />
	</PaneWrapper>
</template>

<script setup>
import { src_scene } from '~/assets/webgl/scene';
</script>
