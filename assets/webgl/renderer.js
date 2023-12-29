import * as THREE from "three"
import { canvas } from "./canvas";
import { sizes } from "./parameters";
/**
 * Renderer
 */
export const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: false,
	alpha: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, sizes.pixelRatioLimit));
renderer.outputColorSpace = THREE.SRGBColorSpace;

