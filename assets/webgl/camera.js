import * as THREE from "three"
import { camParameters, sizes } from "./parameters";

// Perspective Camera
export const camera = new THREE.PerspectiveCamera(
	camParameters.fov,
	sizes.width / sizes.height,
	camParameters.near,
	camParameters.far,
);

export function initCamera() {
	camera.position.set(camParameters.position.x, camParameters.position.y, camParameters.position.z);
}

