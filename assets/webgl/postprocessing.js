import * as THREE from "three";
import { pdParameters, hbaoParameters, hbaoParameters2, sizes, composerParameters } from "./parameters";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { HBAOPass } from "three/addons/postprocessing/HBAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { OutlinePass } from "three/addons/postprocessing/OutlinePass.js";
import { omni_scene } from "./scene";
import { camera } from "./camera";
import { renderer } from "./renderer";

const pixelRatio = renderer.getPixelRatio();
const maxSamples = renderer.capabilities.maxSamples;

const renderTarget = new THREE.WebGLRenderTarget(
	sizes.width * pixelRatio,
	sizes.height * pixelRatio,
	{ type: THREE.HalfFloatType, samples: maxSamples }
);
renderTarget.texture.name = "EffectComposer.rt1";

export const composer = new EffectComposer(renderer);

export const outlinePass = new OutlinePass(new THREE.Vector2(sizes.width, sizes.height), omni_scene, camera);
outlinePass.edgeStrength = 4;
outlinePass.edgeThickness = 1;
outlinePass.downSampleRatio = 1;
outlinePass.visibleEdgeColor.set(new THREE.Color('#ff0000'))
outlinePass.hiddenEdgeColor.set(new THREE.Color('#ff0000'))
outlinePass.overlayMaterial.blending = THREE.CustomBlending

export function initPostprocessing() {
	// 0. Render Pass
	const renderPass = new RenderPass(omni_scene, camera);
	composer.addPass(renderPass);
	// 1. hbao
	const hbaoPass = new HBAOPass(omni_scene, camera, sizes.width, sizes.height);
	hbaoPass.output = HBAOPass.OUTPUT.Default;
	hbaoPass.enabled = composerParameters.passes[0].enabled;
	composer.addPass(hbaoPass);
	// 2. habo2
	const hbaoPass2 = new HBAOPass(omni_scene, camera, sizes.width, sizes.height);
	hbaoPass2.output = HBAOPass.OUTPUT.Default;
	hbaoPass2.enabled = composerParameters.passes[1].enabled;
	composer.addPass(hbaoPass2);
	// 3. outline
	composer.addPass(outlinePass);

	// Final: Output Pass (Usually the last pass)
	const outputPass = new OutputPass();
	composer.addPass(outputPass);

	hbaoPass.updateHbaoMaterial(hbaoParameters);
	hbaoPass.updatePdMaterial(pdParameters);
	hbaoPass2.updateHbaoMaterial(hbaoParameters2);
}
