import * as THREE from 'three'
import { src_scene } from './scene';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'

export const basicMaterial = new THREE.MeshBasicMaterial({
	name: 'Basic Material',
	color: new THREE.Color("#ffffff"),
	polygonOffset: true,
	polygonOffsetFactor: 1,
	polygonOffsetUnits: 1,
});

export const standardMaterial = new THREE.MeshStandardMaterial({
	name: 'Standard Material',
	color: new THREE.Color("#ffffff"),
	polygonOffset: true,
	polygonOffsetFactor: 1,
	polygonOffsetUnits: 1,
	userData: {
		isPrivate: true
	}
})

export const lineMaterial = new LineMaterial({
	name: 'Line Material',
	color: '#ffa500',
	linewidth: 4,
	vertexColors: false,
	worldUnits: false,
})

export const lineBasicMaterial = new THREE.LineBasicMaterial({
	name: 'Line Basic Material',
	color: new THREE.Color("#cccccc"),
	userData: {
		isPrivate: true
	},
});

export const wireframeMaterial = new THREE.MeshBasicMaterial({
	name: 'Wireframe Basic Material',
	color: new THREE.Color("#ffa500"),
	polygonOffset: true,
	polygonOffsetFactor: 1,
	polygonOffsetUnits: 1,
	wireframe: true,
	depthTest: false
})

// USED BY UNDO/REDO
export const materials = reactive(new Set([
	// Private materials
	standardMaterial,
	lineBasicMaterial,
]))

// From src_scene, add material to the materials set
export function parseMaterials() {
	src_scene.traverse((obj) => {
		if (obj.material) {
			materials.add(obj.material)
		}
	})
}

// Offset single material
export function offsetMaterial(material) {
	// This function offsets the material to let outline edges be fully visible
	material.polygonOffset = true
	material.polygonOffsetFactor = 1
	material.polygonOffsetUnits = 1
}

// Offset materials from materials set
export function offsetMaterials() {
	materials.forEach((material) => {
		if (material.userData.isPrivate) return;
		offsetMaterial(material)
	})
}

export function applyDefaultMaterial(obj) {
	if (obj.material) {
		obj.material = standardMaterial
	}
}
