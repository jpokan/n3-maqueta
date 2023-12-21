import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function initControls(camera, canvas) {
	// Controls
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	controls.update();

	return controls
}
