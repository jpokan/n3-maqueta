
export const parameters = {
	background: "#F5EFDF",
	animate: false,
	hbao: true,
};

export const uniforms = {
	u_time: { value: 0.0 },
	u_radius: { value: 1.0 },
};

// Initializes HBAO params
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

