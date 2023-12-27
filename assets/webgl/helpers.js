import * as THREE from 'three'
import { helpersGroup } from './scene.js'

export const axesHelper = new THREE.AxesHelper(1000);

export function initHelpers() {
	// Create axesHelper
	helpersGroup.add(axesHelper);
}
