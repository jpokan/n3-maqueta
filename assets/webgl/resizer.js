import { sizes } from "./parameters";
import { camera } from "./camera";
import { renderer } from "./renderer";
import { composer } from "./postprocessing";
/**
 * Resizer
 */
export function initResizer() {
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
		composer.setSize(sizes.width, sizes.height);
	});
}
