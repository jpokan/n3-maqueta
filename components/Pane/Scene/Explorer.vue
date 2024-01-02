<template>
	<PaneWrapper>
		<PaneSceneObject v-for="item in src_scene.children" :key="item.uuid" :object="item" />
	</PaneWrapper>
</template>

<script setup>
import { src_scene } from '~/assets/webgl/scene';
</script>
