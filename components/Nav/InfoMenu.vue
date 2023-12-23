<template>
	<div>
		<UButton @click="isOpen = true" color="white" size="xs" variant="solid"
			trailing-icon="i-heroicons-information-circle-16-solid" />

		<UModal v-model="isOpen" fullscreen>
			<UCard :ui="{
				base: 'h-full flex flex-col font-satoshi',
				rounded: '',
				divide: 'divide-y divide-gray-100 dark:divide-gray-800',
				body: {
					base: 'grow'
				}
			}">
				<template #header>
					<div class="flex items-center justify-between">
						<h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
							Info
						</h3>
						<UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
							@click="isOpen = false" />
					</div>
				</template>

				<div class="h-full">
				My content goes here! sdad
				</div>
			</UCard>
		</UModal>
	</div>
</template>

<script setup>
const isOpen = ref(false)
</script>
