<template>
	<ClientOnly>
		<UBadge v-show="view.fps" :ui="{
			base: 'shadow-sm',
			size: { md: 'text-xs py-2' }
		}" size="md" :label="`FPS ${fps}`" color="white" variant="solid" />
	</ClientOnly>
</template>

<script setup>
import { view } from '~/assets/webgl/parameters';
import { fpsValue } from '~/assets/webgl/helpers';

const fps = ref(fpsValue)

function render() {
	fps.value = fpsValue
	requestAnimationFrame(render)
}
onMounted(() => {
	render()
})
</script>
