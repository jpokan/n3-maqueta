import * as THREE from 'three'
import { scene } from './scene.js'

export const axesHelper = new THREE.AxesHelper(1000);

export function initHelpers() {
	// Create axesHelper
	scene.add(axesHelper);
}
