import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { camera } from "./camera";
import { canvas } from "./canvas";

// Controls
export const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true;
controls.update();

