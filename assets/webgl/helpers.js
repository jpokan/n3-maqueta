import * as THREE from 'three'
import { helpersGroup } from './scene.js'

export const axesHelper = new THREE.AxesHelper(1000);

export function initHelpers() {
	// Create axesHelper
	helpersGroup.add(axesHelper);
}

const times = [];
export let fpsValue;

export function fpsCompute() {
	const now = performance.now();
	while (times.length > 0 && times[0] <= now - 1000) {
		times.shift();
	}
	times.push(now);
	fpsValue = times.length;
}
