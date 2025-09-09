const index = require("./index");
const solution = require("./solution");
const { announceMachines } = process.env.TEST_SOLUTIONS ? solution : index;

describe("01 - Syntactic Sugar > announceMachines", () => {
	test("announces the expected label and categories", () => {
		const announce = jest.fn();

		const result = announceMachines(
			announce,
			{ make: "Honda", model: "Civic" },
			{ label: "Compact Car" },
			{ label: "Eco Car" },
		);

		expect(announce.mock.calls).toEqual([
			["Make: Honda; Model: Civic"],
			["Compact Car"],
			["Eco Car"],
		]);
	});
});
