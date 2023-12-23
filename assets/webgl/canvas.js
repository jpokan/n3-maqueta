// Create canvas
export const canvas = document.createElement("canvas");

export function initCanvas() {
	canvas.setAttribute("id", "webgl");
	document.body.appendChild(canvas);
}
