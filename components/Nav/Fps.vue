<template>
	<ClientOnly>
		<UBadge v-show="view.fps" :ui="{
			base: 'shadow-sm h-7',
			size: { md: 'text-xs py-2' }
		}" size="md" :label="`FPS ${fps}`" color="white" variant="solid" />
	</ClientOnly>
</template>

<script setup>
import { view } from '~/assets/webgl/parameters';
import { fpsValue } from '~/assets/webgl/helpers';

const fps = ref(fpsValue)

function render() {
	if (!fps.value) return
	fps.value = fpsValue
	requestAnimationFrame(render)
}

onMounted(() => {
	render()
})

</script>
