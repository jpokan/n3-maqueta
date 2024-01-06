import * as THREE from 'three'
import { src_scene } from './scene';

export function parseMaterials() {
	src_scene.traverse((obj) => {
		if (obj.material) materials.add(obj.material)
	})
}

export function removeMaterialFromScene(material) {
	src_scene.traverse((obj) => {
		if (obj.material === material) {
			obj.material = basicMaterial
			material.dispose()
		}
	})
}

export const basicMaterial = new THREE.MeshBasicMaterial({
	name: 'Default Material',
	color: new THREE.Color("#ffffff"),
	polygonOffset: true,
	polygonOffsetFactor: 1,
	polygonOffsetUnits: 1,
});

export const lineBasicMaterial = new THREE.LineBasicMaterial({
	name: 'Line Basic Material',
	color: new THREE.Color("#ffa500"),
	depthTest: false,
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
	lineBasicMaterial,
	wireframeMaterial
]))
