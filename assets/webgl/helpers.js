import * as THREE from 'three'
import { scene } from './scene.js'

export function initHelpers() {
	// Create axesHelper
	const axesHelper = new THREE.AxesHelper(100);
	scene.add(axesHelper);
}
