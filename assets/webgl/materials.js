import * as THREE from 'three'

export const basicMaterial = new THREE.MeshBasicMaterial({
	color: new THREE.Color("#ffffff"),
	polygonOffset: true,
	polygonOffsetFactor: 1,
	polygonOffsetUnits: 1,
});

export const lineBasicMaterial = new THREE.LineBasicMaterial({
	color: new THREE.Color(0xFFA500),
	depthTest: false,
});

export const wireframeMaterial = new THREE.MeshBasicMaterial({
	color: new THREE.Color("#ffa500"),
	polygonOffset: true,
	polygonOffsetFactor: 1,
	polygonOffsetUnits: 1,
	wireframe: true,
	depthTest: false
})

export const materials = reactive([
	basicMaterial,
	lineBasicMaterial,
	wireframeMaterial
])
