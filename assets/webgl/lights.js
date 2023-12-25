import * as THREE from 'three'
import { scene } from './scene.js'

// Create light source
export const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 3);

export function initLights() {
	hemi.position.set(0, 25, 0);
	scene.add(hemi);
}
