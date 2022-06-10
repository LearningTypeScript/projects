module.exports = {
	fakeTimers: { enableGlobally: true },
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				jsc: {
					target: "es2021",
				},
			},
		],
	},
};
