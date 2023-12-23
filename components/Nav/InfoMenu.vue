<template>
	<div>
		<UButton @click="isOpen = true" color="white" size="xs" variant="solid"
			trailing-icon="i-heroicons-information-circle-16-solid" />

		<UModal v-model="isOpen">
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

				<div class="h-full flex gap-5">
					<div class="">
						<p class="mb-5">
							This app lets you create presentations slides with 3D assets.
						</p>
						<p class="mb-5">
							Aimed at architects, interior designers, 3D modelers, product designers, students,
							teacher or anyone who wants create interactive presentations or review 3D objects.
						</p>
						<p class="text-center">
							Created by Jpokan
						</p>
					</div>
				</div>
			</UCard>
		</UModal>
	</div>
</template>

<script setup>
const isOpen = ref(false)
</script>
