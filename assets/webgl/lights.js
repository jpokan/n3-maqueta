import * as THREE from "three";
import { helpers_group } from "./scene.js";
import { ambientLightParameters } from "./parameters.js";

// Create light source
export const ambientLight = new THREE.AmbientLight(
	0xffffff,
	ambientLightParameters.intensity
);

export function initLights() {
	helpers_group.add(ambientLight);
}
