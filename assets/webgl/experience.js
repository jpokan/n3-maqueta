import "assets/css/webgl.css";
import * as THREE from "three";
import { pane, fpsgraph } from "./tpgui.js";
import { parameters, uniforms, sizes } from "./parameters.js";
import { initHelpers } from "./helpers.js";
import { initLights } from "./lights.js";
import { initPostprocessing } from "./postprocessing.js";
import { initResizer } from "./resizer.js";
import { initRenderer } from "./renderer.js";
import { initCamera } from "./camera.js";
import { initControls } from "./controls.js";
import { scene } from "./scene.js";

// Attach canvas to document
export const canvas = document.createElement("canvas");
canvas.setAttribute("id", "webgl");
document.body.appendChild(canvas);

export default class Experience {
	constructor() {
		if (window.__3DEXP__) {
			console.log("already built");
		} else {
			window.__3DEXP__ = true;
		}
	}
}

export const camera = initCamera(sizes);
export const renderer = initRenderer(sizes, canvas);
export const composer = initPostprocessing(sizes, camera, scene, renderer);
export const controls = initControls(camera, canvas);

initResizer(sizes, camera, renderer, composer);
initHelpers();
initLights();

const clock = new THREE.Clock();

/**
 * Animate
 */
const tick = () => {
	fpsgraph.begin();

	const delta = clock.getDelta();

	if (parameters.animate) {
		uniforms.u_time.value += delta;
		pane.refresh();
	}

	// Update controls
	controls.update();

	// Render
	if (parameters.hbao) {
		composer.render();
	} else {
		renderer.render(scene, camera);
	}

	fpsgraph.end();
	// Call tick again on the next frame
	requestAnimationFrame(tick);
};

tick();
