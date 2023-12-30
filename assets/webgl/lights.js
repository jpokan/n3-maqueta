import * as THREE from 'three'
import { helpers_group } from './scene.js'

// Create light source
export const ambientLight = new THREE.AmbientLight(0xffffff, 3);

export function initLights() {
	helpers_group.add(ambientLight);
}
