import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera } from "./camera";
import { canvas } from "./canvas";
// import { camParameters } from "./parameters";
// import { pane_camera } from "./tpgui";


export const controls = new OrbitControls(camera, canvas);

export function initControls() {
	// Controls
	controls.enableDamping = true;
	controls.update();

	// controls.addEventListener("change", () => {
	// 	camParameters.position.x = camera.position.x
	// 	camParameters.position.y = camera.position.y
	// 	camParameters.position.z = camera.position.z
	//
	// 	camParameters.target.x = controls.target.x
	// 	camParameters.target.y = controls.target.y
	// 	camParameters.target.z = controls.target.z
	// 	pane_camera.refresh()
	// })
}

