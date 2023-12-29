import * as THREE from 'three'

// Create material
export const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color("#ffffff");
material.polygonOffset = true;
material.polygonOffsetFactor = 1;
material.polygonOffsetUnits = 1;

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
