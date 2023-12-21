import "assets/css/webgl.css";
import * as THREE from "three";
import { pane, fpsgraph } from './tpgui.js'
import { parameters, uniforms } from "./parameters.js";
import { initHelpers } from "./helpers.js";
import { initLights } from "./lights.js";
import { initPostprocessing } from "./postprocessing.js"
import { initResizer } from "./resizer.js"
import { initRenderer } from "./renderer.js";
import { initCamera } from "./camera.js";
import { initControls } from "./controls.js";
import "./loader.js"

// Create canvas
export const canvas = document.createElement("canvas");
canvas.setAttribute("id", "webgl");
document.body.appendChild(canvas);

export default class Experience {
	constructor() {
		if (window.__3DEXP__) {
			console.log("already built");
			return window.__3DEXP__;
		} else {
			window.__3DEXP__ = true
		}
	}
}

export const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

// Create scene
export const scene = new THREE.Scene();
export const renderer = initRenderer(sizes, canvas)
export const camera = initCamera(sizes)

// Postprocessing
export const composer = initPostprocessing(sizes, camera, scene, renderer);
initResizer(sizes, camera, renderer, composer)

initHelpers()
initLights()
export const controls = initControls(camera, canvas)

// Clock
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
