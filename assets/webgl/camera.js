import * as THREE from "three"

export function initCamera(sizes) {
	/**
	 * Camera
	 */
	// Perspective Camera
	const camera = new THREE.PerspectiveCamera(
		75,
		sizes.width / sizes.height,
		0.1,
		1000
	);
	camera.position.set(25, 25, 25);
	return camera
}
