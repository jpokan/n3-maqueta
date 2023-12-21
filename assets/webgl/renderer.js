import * as THREE from "three"

/**
 * Renderer
 */
export function initRenderer(sizes, canvas) {
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		antialias: true,
		alpha: true,
	});

	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.outputColorSpace = THREE.SRGBColorSpace;

	return renderer
}
