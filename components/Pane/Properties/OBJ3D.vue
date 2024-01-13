<template>
	<PaneWrapper v-if="OBJ3DSelected">
		<PaneProperty label="Name">
			<UInput size="2xs" color="white" variant="outline" v-model="selected.items[0].name" />
		</PaneProperty>
		<PaneProperty label="Type">
			<UInput disabled v-model="selected.items[0].type" />
		</PaneProperty>
		<PaneProperty v-if="!selected.items[0].isLineSegments" label="Position">
			<div class="flex gap-0.5">
				<UInput type="number" step="0.1" v-model="selected.items[0].position.x" />
				<UInput type="number" step="0.1" v-model="selected.items[0].position.y" />
				<UInput type="number" step="0.1" v-model="selected.items[0].position.z" />
			</div>
		</PaneProperty>
		<PaneProperty v-if="!selected.items[0].isLineSegments" label="Rotation">
			<div class="flex gap-0.5">
				<UInput type="number" step="0.1" v-model="selected.items[0].rotation.x" />
				<UInput type="number" step="0.1" v-model="selected.items[0].rotation.y" />
				<UInput type="number" step="0.1" v-model="selected.items[0].rotation.z" />
			</div>
		</PaneProperty>
		<PaneProperty v-if="!selected.items[0].isLineSegments" label="Scale">
			<div class="flex gap-0.5">
				<UInput type="number" step="0.1" v-model="selected.items[0].scale.x" />
				<UInput type="number" step="0.1" v-model="selected.items[0].scale.y" />
				<UInput type="number" step="0.1" v-model="selected.items[0].scale.z" />
			</div>
		</PaneProperty>
		<PaneProperty label="Visibility">
			<div class="flex flex-row gap-16">
				<UCheckbox @change="updateLayer($event)" v-model="selected.items[0].visible" />
				<div class="flex gap-2 items-center w-full">
					<p>Mask</p>
					<UInput disabled type="number" v-model="selected.items[0].layers.mask" />
				</div>
			</div>
		</PaneProperty>
		<PaneProperty v-if="selected.items[0].material" label="Material">
			<div class="flex flex-col gap-0.5">
				<USelectMenu class="" v-model="selectedMaterial" size="2xs" @change="update($event)"
					:options="materialArray" option-attribute="name" />
				<PanePropertiesColorInput :threeColor="selected.items[0].material.color" />
			</div>
		</PaneProperty>
	</PaneWrapper>
</template>

<script setup>
import { materials, parseMaterials } from "assets/webgl/materials";
import { selected } from "assets/webgl/helpers";

let materialArray = [];
const selectedMaterial = ref(materialArray[0]);
let initialIndex = 0;

function updateMaterialArray() {
	parseMaterials()
	materialArray = []
	materials.forEach((el) => {
		materialArray.push({
			name: el.name,
			material: el,
		});
	});
}

console.log(selected);

const OBJ3DSelected = computed(() => {
	return selected.items.length > 0 ? true : false;
})

function updateLayer(event) {
	if (event.target._modelValue) {
		selected.items[0].traverse((el) => {
			if (!el.isLineSegments) {
				el.layers.enable(0)
			}
		})
	} else {
		selected.items[0].traverse((el) => {
			if (!el.isLineSegments) {
				el.layers.disable(0)
			}
		})
	}
}

function setupIndex() {
	// setup index for selected value
	if (selected.items[0] && Object.hasOwn(selected.items[0], 'material')) {
		let counter = 0;
		const entries = materials.entries();
		for (const entry of entries) {
			if (entry[0].uuid === selected.items[0].material.uuid) {
				initialIndex = counter;
				break;
			}
			counter = counter + 1;
		}
	};
}

function update(event) {
	selected.items[0].material = event.material;
	selected.materials[0] = event.material;
}

onUpdated(() => {
	updateMaterialArray()
	setupIndex()
	selectedMaterial.value = materialArray[initialIndex]
});

onMounted(() => {
	updateMaterialArray()
	setupIndex()
	selectedMaterial.value = materialArray[initialIndex]
});
</script>
