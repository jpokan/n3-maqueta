export const sizes = {
	width: 0,
	height: 0,
};

export const parameters = {
	background: "#F5EFDF",
	animate: false,
};

export const view = {
	fps: false,
	axes: true,
}

export const composerParameters = {
	composer: false,
	gtao2: false,
	gtao: false,
}

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

// Initializes gtao params
export const gtaoParameters2 = {
	radius: 0.2,
	distanceExponent: 1,
	bias: 0.01,
	samples: 16,
};

export const gtaoParameters = {
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
