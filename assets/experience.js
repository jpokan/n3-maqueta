import "assets/css/webgl.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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

		const matcapTexture = new THREE.TextureLoader().load("clay3.jpeg");
		const matcapMaterial = new THREE.MeshMatcapMaterial();
		matcapMaterial.matcap = matcapTexture;

		// Create scene
		const scene = new THREE.Scene();

		// Create light source

		const light = new THREE.DirectionalLight(0xffffff, 1.0);
		//　The light is directed from the light's position to the origin of the world coordinates.
		light.position.set(0, 100, 0);

		scene.add(light);

		const frustumSize = 80;

		light.shadow.camera = new THREE.OrthographicCamera(
			-frustumSize / 2,
			frustumSize / 2,
			frustumSize / 2,
			-frustumSize / 2,
			1,
			80
		);

		// Same position as LIGHT position.
		light.shadow.camera.position.copy(light.position);
		light.shadow.camera.lookAt(scene.position);
		scene.add(light.shadow.camera);

		// Depth map

		light.shadow.mapSize.x = 2048;
		light.shadow.mapSize.y = 2048;

		const pars = {
			minFilter: THREE.NearestFilter,
			magFilter: THREE.NearestFilter,
			format: THREE.RGBAFormat,
		};

		light.shadow.map = new THREE.WebGLRenderTarget(
			light.shadow.mapSize.x,
			light.shadow.mapSize.y,
			pars
		);

		// Create axesHelper
		const axesHelper = new THREE.AxesHelper(5);
		scene.add(axesHelper);

		// Create Floor
		const plane = new THREE.PlaneGeometry(100, 100, 10, 10);
		const mesh = new THREE.Mesh(plane, material);
		mesh.rotateX(-Math.PI / 2);
		scene.add(mesh);

		// Import 3d model
		const loader = new GLTFLoader();
		loader.load(
			"mhub.glb",
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
		camera.position.set(50, 50, 50);

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
			renderer.render(scene, camera);

			fpsgraph.end();
			// Call tick again on the next frame
			requestAnimationFrame(tick);
		};

		tick();
	}
}
