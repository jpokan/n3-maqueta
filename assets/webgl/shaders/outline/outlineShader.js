import * as THREE from "three";
import vertexShader from "./vertex.glsl?raw";
import fragmentShader from "./fragment.glsl?raw";

export const OutlineShader = {
	uniforms: {
		tDiffuse: { value: null },
		opacity: { value: 1.0 },
		thickness: { value: 1.02 },
		visibleEdgeColor: { value: new THREE.Color(0x00ff00) },
		hiddenEdgeColor: { value: new THREE.Color(0xff0000) },
	},
	vertexShader,
	fragmentShader,
};
