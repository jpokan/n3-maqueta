<template>
	<div class="text-sm text-center fixed inset-0">
		<p class="bottom-2 fixed bg-zinc-100 left-2 px-2 py-1 rounded-md shadow-lg">© Copyright 2023 - Jpokan</p>
	</div>
</template>

<script setup>
import Experience from "assets/experience.js";

onMounted(() => {
    new Experience();
});
</script>
