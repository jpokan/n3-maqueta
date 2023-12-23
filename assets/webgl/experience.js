import "assets/css/webgl.css";
import * as THREE from "three";
import { pane, fpsgraph } from "./tpgui.js";
import { scene } from "./scene.js";
import { parameters, uniforms } from "./parameters.js";
import { initCanvas } from "./canvas.js";
import { initHelpers } from "./helpers.js";
import { initLights } from "./lights.js";
import { renderer } from "./renderer.js";
import { camera, initCamera } from "./camera.js";
import { initControls, controls } from "./controls.js";
import { composer, initPostprocessing } from "./postprocessing.js";
import { initResizer } from "./resizer.js";

export default class Experience {
	constructor() {
		if (window.__3DEXP__) {
			console.log("already built");
		} else {
			initCanvas()
			initCamera();
			initControls();
			initPostprocessing()
			initResizer();
			initHelpers();
			initLights();
			window.__3DEXP__ = true;
		}
	}
}

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
	if (parameters.composer) {
		composer.render();
	} else {
		renderer.render(scene, camera);
	}

	fpsgraph.end();
	// Call tick again on the next frame
	requestAnimationFrame(tick);
};

tick();
