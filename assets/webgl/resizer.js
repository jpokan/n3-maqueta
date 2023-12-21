/**
 * Resizer
 */
export function initResizer(sizes, camera, renderer, composer) {
	window.addEventListener("resize", () => {
		// Update sizes
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;

		// Update camera
		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();

		// Update renderer
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// update composer
		if (composer) composer.setSize(sizes.width, sizes.height);
	});
}
