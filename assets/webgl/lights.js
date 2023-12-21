import * as THREE from 'three'
import { scene } from './scene.js'

export function initLights() {
	// Create light source
	const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 3);
	hemi.position.set(0, 25, 0);
	scene.add(hemi);
}
