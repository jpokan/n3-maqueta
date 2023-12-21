import * as THREE from 'three'
import { pdParameters, hbaoParameters, hbaoParameters2 } from "./parameters"
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { HBAOPass } from "three/addons/postprocessing/HBAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

export function initPostprocessing(sizes, camera, scene, renderer) {
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
	const composer = new EffectComposer(renderer, renderTarget);

	const renderPass = new RenderPass(scene, camera);
	composer.addPass(renderPass);

	const hbaoPass2 = new HBAOPass(scene, camera, sizes.width, sizes.height);
	hbaoPass2.output = HBAOPass.OUTPUT.Default;
	composer.addPass(hbaoPass2);

	const hbaoPass = new HBAOPass(scene, camera, sizes.width, sizes.height);
	hbaoPass.output = HBAOPass.OUTPUT.Default;
	composer.addPass(hbaoPass);

	const outputPass = new OutputPass();
	composer.addPass(outputPass);

	hbaoPass.updateHbaoMaterial(hbaoParameters);
	hbaoPass.updatePdMaterial(pdParameters);
	hbaoPass2.updateHbaoMaterial(hbaoParameters2);
	
	return composer
}
