<template>
	<ClientOnly>
		<UBadge v-show="view.fps" :ui="{
			base: 'shadow-sm h-7 min-w-10 justify-end',
			size: { md: 'text-xs py-1' },
		}" size="md" :label="fps.value" color="white" variant="solid" />
	</ClientOnly>
</template>

<script setup>
import { view } from "~/assets/webgl/parameters";
import { fps } from "~/assets/webgl/helpers";
</script>
