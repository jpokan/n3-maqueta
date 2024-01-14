import "assets/css/webgl.css";
import * as THREE from "three";
import { omni_scene } from "./scene.js";
import { composerParameters } from "./parameters.js";
import { initCanvas } from "./canvas.js";
import { camera, initCamera } from "./camera.js";
import { initResizer } from "./resizer.js";
import { renderer } from "./renderer.js";
import { controls, initControls } from "./controls.js";
import { initPostprocessing, composer } from "./postprocessing.js";
import { initHelpers, fpsCompute } from "./helpers.js";
import { initLights } from "./lights.js";
import { initRaycaster } from "./raycaster.js";
import { lineMaterial } from "./materials.js";

export default class Experience {
	constructor() {
		if (window.__3DEXP__) {
			console.log("already built");
		} else {
			// 1. This order is important
			initCanvas();
			initCamera();
			initResizer();
			initRaycaster();
			// 2. Optionals
			initPostprocessing();
			initControls();
			initHelpers();
			initLights();
			// Start
			tick();
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

	lineMaterial.resolution.set(window.innerWidth, window.innerHeight)
	// Render
	if (composerParameters.composer) {
		composer.render();
	} else {
		renderer.render(omni_scene, camera);
	}
};

const tick = () => {
	actions();
	fpsCompute();
	requestAnimationFrame(tick);
};
