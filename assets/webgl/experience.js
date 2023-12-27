import "assets/css/webgl.css";
import * as THREE from "three";
// import { pane, fpsgraph } from "./tpgui.js";
import { omni_scene } from "./scene.js";
import { composerParameters, parameters, uniforms } from "./parameters.js";
import { initCanvas } from "./canvas.js";
import { camera, initCamera } from "./camera.js";
import { initResizer } from "./resizer.js";
import { renderer } from "./renderer.js";
import { controls } from "./controls.js";
import { initPostprocessing, composer } from "./postprocessing.js";
import { initHelpers } from "./helpers.js";
import { initLights } from "./lights.js";

export default class Experience {
	constructor() {
		if (window.__3DEXP__) {
			console.log("already built");
		} else {
			// 1. This order is important
			initCanvas();
			initCamera();
			initResizer();

			// 2. Optionals
			initPostprocessing();
			initHelpers();
			initLights();

			// Start
			tick();
			// debugtick();
			window.__3DEXP__ = true;
		}
	}
}

/**
 * Animate
 */
const clock = new THREE.Clock();

const actions = () => {
	// Update controls
	controls.update();

	// Render
	if (composerParameters.composer) {
		composer.render();
	} else {
		renderer.render(omni_scene, camera);
	}
}

const debugtick = () => {
	fpsgraph.begin()
	const delta = clock.getDelta();

	if (parameters.animate) {
		uniforms.u_time.value += delta;
		pane.refresh()
	}

	actions()
	fpsgraph.end()
	requestAnimationFrame(debugtick);
}

const tick = () => {
	actions()
	requestAnimationFrame(tick);
};

