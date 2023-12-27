<template>
	<ClientOnly>
		<div class="">
			<UBadge size="md" :label="`FPS ${fps}`" color="white" variant="solid" />
		</div>
	</ClientOnly>
</template>

<script setup>
import { fpsValue } from '~/assets/webgl/helpers';

const fps = ref(0)

function render() {
	fps.value = fpsValue
	requestAnimationFrame(render)
}
onMounted(() => {
	render()
})
</script>
