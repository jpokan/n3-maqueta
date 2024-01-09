import * as THREE from "three";
import { helpers_group } from "./scene.js";
import { reactive } from "vue";
import { view } from "./parameters.js";

export const axesHelper = new THREE.AxesHelper(1000);

export function initHelpers() {
	// Create axesHelper
	helpers_group.add(axesHelper);
}

const times = [];
export const fps = reactive({
	value: 0,
});

export function fpsCompute() {
	if (!view.fps) return;
	const now = performance.now();
	while (times.length > 0 && times[0] <= now - 1000) {
		times.shift();
	}
	times.push(now);
	fps.value = times.length;
}

export const selected = reactive({
	items: [],
	materials: [],
	slides: []
});
