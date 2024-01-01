<template>
	<PaneWrapper>
		<PaneLabel label="Scene Explorer" />
		<PaneWrapper>
			<div v-for="item in src_scene.children" :key="item.uuid">
				<PaneSceneObject :object="item" />
			</div>
		</PaneWrapper>
	</PaneWrapper>
</template>

<script setup>
import { src_scene } from '~/assets/webgl/scene';
</script>
