import { canvas, camera, controls } from "./experience.js";
import { parameters, uniforms, camParameters } from "./parameters";
import { Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";

export const pane = new Pane();
pane.registerPlugin(EssentialsPlugin);

export const pane_status = pane.addFolder({
	title: "status",
	expanded: true,
});

export const fpsgraph = pane_status.addBlade({
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

pane_status.addBinding(uniforms.u_time, "value", {
	disabled: true,
	label: "u_time",
});

pane_status.addBinding(parameters, "hbao");

export const pane_camera = pane.addFolder({
	title: "Camera",
});

pane_camera.addBinding(camParameters, "far").on("change", (event) => {
	camera.far = event.value;
	camera.updateProjectionMatrix()
});
pane_camera.addBinding(camParameters, "fov").on("change", (event) => {
	camera.fov = event.value;
	camera.updateProjectionMatrix()
});
pane_camera.addBinding(camParameters, "near").on("change", (event) => {
	camera.near = event.value;
	camera.updateProjectionMatrix()
});
pane_camera.addBinding(camParameters, "position").on("change", (event) => {
	camera.position.set(event.value.x, event.value.y, event.value.z);
	camera.updateProjectionMatrix()
});

pane_camera.addBinding(camParameters, "target").on("change", (event)=>{
	controls.target.set(event.value.x, event.value.y, event.value.z)
})
