import "assets/css/webgl.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { HBAOPass } from "three/addons/postprocessing/HBAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

export default class Experience {
	constructor() {
		if (window.experience) {
			console.log("already built");
			return;
		} else {
			this.init();
		}
	}

	init() {
		const pane = new Pane();
		pane.registerPlugin(EssentialsPlugin);

		const parameters = {
			background: "#89b5c8",
			animate: false,
		};

		const pane_status = pane.addFolder({
			title: "status",
			expanded: false,
		});

		const fpsgraph = pane_status.addBlade({
			view: "fpsgraph",
		});

		pane_status
			.addBinding(parameters, "background", { label: "bg_color" })
			.on("change", (color) => {
				canvas.style.background = `${color.value}`;
			});

		pane_status
			.addButton({
				title: parameters.animate ? "pause" : "play",
				label: "animate",
			})
			.on("click", (event) => {
				parameters.animate = !parameters.animate;
				if (parameters.animate) {
					event.target.title = "pause";
				} else {
					event.target.title = "play";
				}
			});

		const uniforms = {
			u_time: { value: 0.0 },
			u_radius: { value: 1.0 },
		};

		pane_status.addBinding(uniforms.u_time, "value", {
			disabled: true,
			label: "u_time",
		});

		// Create canvas
		const canvas = document.createElement("canvas");
		canvas.setAttribute("id", "webgl");
		document.body.appendChild(canvas);
		window.experience = true;

		// Create material
		const material = new THREE.MeshBasicMaterial();
		material.color = new THREE.Color("#e5e5e5");
		material.side = THREE.DoubleSide;

		const matcapTexture = new THREE.TextureLoader().load("Plates.jpg");
		const matcapMaterial = new THREE.MeshMatcapMaterial();
		matcapMaterial.matcap = matcapTexture;

		// Create scene
		const scene = new THREE.Scene();

		// Create light source

		// Create axesHelper
		const axesHelper = new THREE.AxesHelper(100);
		scene.add(axesHelper);

		// Import 3d model
		const loader = new GLTFLoader();
		const files = ["VS_0.1.glb", "VS_1.4.glb", "VS_2.5.glb"];

		for (let i = 0; i < files.length; i++) {
			const name = files[i];

			loader.load(
				name,
				function (gltf) {
					gltf.scene.traverse((child) => {
						if (child.isMesh) {
							child.material = material;
						}
					});
					scene.add(gltf.scene);
				},
				// called while loading is progressing
				function (xhr) {
					console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
				},
				// called when loading has errors
				function (error) {
					console.log("An error happened");
				}
			);
		}

		/**
		 * Resizer
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		window.addEventListener("resize", () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();

			// Update renderer
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			composer.setSize(sizes.width, sizes.height);
		});

		/**
		 * Camera
		 */
		// Perspective Camera
		const camera = new THREE.PerspectiveCamera(
			75,
			sizes.width / sizes.height,
			0.1,
			1000
		);
		camera.position.set(0, 25, 0);

		// Controls
		const controls = new OrbitControls(camera, canvas);
		controls.enableDamping = true;
		controls.update();

		/**
		 * Renderer
		 */
		const renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			antialias: true,
			alpha: true,
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputColorSpace = THREE.SRGBColorSpace;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		// POSTPROCESSING
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

		const hbaoPass = new HBAOPass(scene, camera, sizes.width, sizes.height);
		hbaoPass.output = HBAOPass.OUTPUT.Default;
		composer.addPass(hbaoPass);

		const outputPass = new OutputPass();
		composer.addPass(outputPass);

		// Initializes HBAO params
		const hbaoParameters = {
			radius: 3,
			distanceExponent: 1,
			bias: 0.01,
			samples: 16,
		};
		const pdParameters = {
			lumaPhi: 10,
			depthPhi: 2,
			normalPhi: 3,
			radius: 10,
			rings: 4,
			samples: 8,
		};
		hbaoPass.updateHbaoMaterial(hbaoParameters);
		hbaoPass.updatePdMaterial(pdParameters);

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
			// renderer.render(scene, camera);
			composer.render();

			fpsgraph.end();
			// Call tick again on the next frame
			requestAnimationFrame(tick);
		};

		tick();
	}
}
