const { announceMachines } = process.env.TEST_SOLUTIONS
	? require("./solution")
	: require("./index");

describe(announceMachines, () => {
	it("announces a machine's label when the label exists", () => {
		const announce = jest.fn();
		const label = "test label";

		announceMachines(announce, { label });

		expect(announce).toHaveBeenCalledWith(label);
	});

	it("announces a machine's make and model when it does not have a label", () => {
		const announce = jest.fn();
		const make = "test make";
		const model = "test model";

		announceMachines(announce, { make, model });

		expect(announce).toHaveBeenCalledWith(`Make: test make; Model: test model`);
	});

	it("returns an increased count when a machine has a label", () => {
		const announce = jest.fn();

		const labelsCount = announceMachines(announce, { label: "test label" });

		expect(labelsCount).toBe(1);
	});

	it("returns a non-increased count when a machine does not has a label", () => {
		const announce = jest.fn();

		const labelsCount = announceMachines(announce, { make: "", model: "" });

		expect(labelsCount).toBe(0);
	});

	it("returns an increased count for labels when only some machines have label", () => {
		const announce = jest.fn();

		const labelsCount = announceMachines(
			announce,
			{ label: "test label" },
			{ make: "", model: "" },
			{ label: "test label" }
		);

		expect(labelsCount).toBe(2);
	});
});
