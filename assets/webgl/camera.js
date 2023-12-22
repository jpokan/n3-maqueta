import * as THREE from "three"
import { camParameters } from "./parameters";

export function initCamera(sizes) {
	// Perspective Camera
	const camera = new THREE.PerspectiveCamera(
		camParameters.fov,
		sizes.width / sizes.height,
		camParameters.near,
		camParameters.far
	);
	camera.position.set(camParameters.position.x, camParameters.position.y, camParameters.position.z);

	return camera
}
