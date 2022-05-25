module.exports = {
	globals: {
		"ts-jest": {
			isolatedModules: true,
			tsconfig: {
				target: "es2020",
			},
		},
	},
	preset: "ts-jest",
	testEnvironment: "node",
};
