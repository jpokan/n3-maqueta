import * as THREE from "three";
import { pdParameters, gtaoParameters, gtaoParameters2, sizes, composerParameters } from "./parameters";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { scene } from "./scene";
import { camera } from "./camera";
import { renderer } from "./renderer";

const pixelRatio = renderer.getPixelRatio();
const maxSamples = renderer.capabilities.maxSamples;

const renderTarget = new THREE.WebGLRenderTarget(
	sizes.width * pixelRatio,
	sizes.height * pixelRatio,
	{
		type: THREE.HalfFloatType,
		samples: maxSamples,
	}
);
renderTarget.texture.name = "EffectComposer.rt1";

export const composer = new EffectComposer(renderer, renderTarget);

export function initPostprocessing() {

	// 1. Render Pass
	const renderPass = new RenderPass(scene, camera);
	composer.addPass(renderPass);

	const gtaoPass = new GTAOPass(scene, camera, sizes.width, sizes.height);
	gtaoPass.output = GTAOPass.OUTPUT.Default;
	gtaoPass.enabled = composerParameters.gtao;
	composer.addPass(gtaoPass);

	const gtaoPass2 = new GTAOPass(scene, camera, sizes.width, sizes.height);
	gtaoPass2.output = GTAOPass.OUTPUT.Default;
	gtaoPass2.enabled = composerParameters.gtao2;
	composer.addPass(gtaoPass2);

	// Final: Output Pass (Usually the last pass)
	const outputPass = new OutputPass();
	composer.addPass(outputPass);

	gtaoPass.updateGtaoMaterial(gtaoParameters);
	gtaoPass.updatePdMaterial(pdParameters);
	gtaoPass2.updateGtaoMaterial(gtaoParameters2);
}
