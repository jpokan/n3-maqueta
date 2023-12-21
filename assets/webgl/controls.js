import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function initControls(camera, canvas) {
	// Controls
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	controls.update();

	return controls
}
