import * as THREE from 'three'
import { src_scene } from './scene';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'

export const basicMaterial = new THREE.MeshBasicMaterial({
	name: 'Default Material',
	color: new THREE.Color("#ffffff"),
	polygonOffset: true,
	polygonOffsetFactor: 1,
	polygonOffsetUnits: 1,
});

export const lineMaterial = new LineMaterial({
	name: 'Line Material',
	color: '#ffa500',
	linewidth: 4,
	vertexColors: false,
	worldUnits: false,
})

export const lineBasicMaterial = new THREE.LineBasicMaterial({
	name: 'Line Basic Material',
	color: new THREE.Color("#ffa500"),
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

export const materials = reactive(new Set([
	basicMaterial,
	lineMaterial,
	lineBasicMaterial,
	wireframeMaterial
]))

export function parseMaterials() {
	src_scene.traverse((obj) => {
		if (obj.material) {
			materials.add(obj.material)
		}
	})
}

export function offsetMaterial(mesh) {
	// This function offsets the material to let outline edges be fully visible
	if (mesh.material) {
		mesh.material.polygonOffset = true
		mesh.material.polygonOffsetFactor = 1
		mesh.material.polygonOffsetUnits = 1
	}
}

export function removeMaterialFromScene(material) {
	src_scene.traverse((obj) => {
		if (obj.material === material) {
			// set to default material
			obj.material = basicMaterial
			material.dispose()
		}
	})
}
