import { reactive } from "vue";

export const sizes = {
	width: 0,
	height: 0,
	pixelRatioLimit: 2,
};

export const parameters = {
	background: "#F5EFDF",
	animate: false,
};

export const view = reactive({
	fps: true,
	axes: true,
});

export const composerParameters = reactive({
	composer: false,
	// This array represents the composer passes excluding the render and output pass
	passes: [
		{
			name: 'hbao',
			enabled: false,
			index: 1,
		},
		{
			name: 'hbao2',
			enabled: false,
			index: 2,
		},
		{
			name: 'smaa',
			enabled: false,
			index: 3,
		},
	],
});

export const uniforms = {
	u_time: { value: 0.0 },
	u_radius: { value: 1.0 },
};

export const camParameters = {
	near: 0.1,
	far: 1000,
	fov: 75,
	target: { x: 0, y: 0, z: 0 },
	position: {
		x: 25,
		y: 25,
		z: 25,
	},
};

// Initializes hbao params
export const hbaoParameters2 = {
	radius: 0.2,
	distanceExponent: 1,
	bias: 0.01,
	samples: 16,
};

export const hbaoParameters = {
	radius: 10,
	distanceExponent: 1,
	bias: 0.01,
	samples: 16,
};

export const pdParameters = {
	lumaPhi: 10,
	depthPhi: 2,
	normalPhi: 3,
	radius: 10,
	rings: 4,
	samples: 8,
};

