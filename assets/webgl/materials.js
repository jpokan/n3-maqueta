import * as THREE from 'three'

// Create material
export const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color("#ffffff");
material.polygonOffset = true;
material.polygonOffsetFactor = 1;
material.polygonOffsetUnits = 1;

export const lineBasicMaterial = new THREE.LineBasicMaterial({
	color: new THREE.Color(0x5c5c5c),
	depthTest: false,
});

