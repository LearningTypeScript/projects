const index = require("./index");
const solution = require("./solution");

// Use solution when TEST_SOLUTIONS is true, otherwise try to use index (may be empty)
const { Robot, Humanoid } = process.env.TEST_SOLUTIONS ? solution : index || {};

describe("02 - Prototypes to Classes", () => {
	// Skip tests if Robot/Humanoid classes are not implemented
	const shouldSkip = !Robot || !Humanoid;

	describe("Robot", () => {
		(shouldSkip ? test.skip : test)(
			"creates a robot with name, abilities, and power",
			() => {
				const robot = new Robot("R2-D2", ["beep", "navigate"]);

				expect(robot.name).toBe("R2-D2");
				expect(robot.abilities).toEqual(["beep", "navigate"]);
				expect(robot.power).toBe(100);
			},
		);

		(shouldSkip ? test.skip : test)(
			"announce method logs greetings and abilities",
			() => {
				const consoleSpy = jest.spyOn(console, "log").mockImplementation();
				const robot = new Robot("C-3PO", ["translate", "worry"]);

				robot.announce();

				expect(consoleSpy).toHaveBeenCalledWith("Greetings. I am C-3PO.");
				expect(consoleSpy).toHaveBeenCalledWith("I am able to translate.");
				expect(consoleSpy).toHaveBeenCalledWith("I am able to worry.");

				consoleSpy.mockRestore();
			},
		);

		(shouldSkip ? test.skip : test)(
			"charge method increases power and logs status",
			() => {
				const consoleSpy = jest.spyOn(console, "log").mockImplementation();
				const robot = new Robot("Wall-E", ["clean"]);
				robot.power = 50;

				robot.charge(30);

				expect(robot.power).toBe(80);
				expect(consoleSpy).toHaveBeenCalledWith(
					"Recharged power supplies to 80.",
				);

				consoleSpy.mockRestore();
			},
		);

		(shouldSkip ? test.skip : test)(
			"charge method caps power at 100 and logs optimal capacity",
			() => {
				const consoleSpy = jest.spyOn(console, "log").mockImplementation();
				const robot = new Robot("BB-8", ["roll"]);
				robot.power = 90;

				robot.charge(20);

				expect(robot.power).toBe(100);
				expect(consoleSpy).toHaveBeenCalledWith(
					"Recharged power supplies to 100.",
				);
				expect(consoleSpy).toHaveBeenCalledWith(
					"I am at optimal operational capacity.",
				);

				consoleSpy.mockRestore();
			},
		);

		(shouldSkip ? test.skip : test)(
			"move method reduces power and logs movement",
			() => {
				const consoleSpy = jest.spyOn(console, "log").mockImplementation();
				const robot = new Robot("EVE", ["scan"]);

				robot.move(25);

				expect(robot.power).toBe(75);
				expect(consoleSpy).toHaveBeenCalledWith("Moving 25 units.");

				consoleSpy.mockRestore();
			},
		);

		(shouldSkip ? test.skip : test)(
			"move method prevents movement when insufficient power",
			() => {
				const consoleSpy = jest.spyOn(console, "log").mockImplementation();
				const robot = new Robot("WALL-E", ["compact"]);
				robot.power = 10;

				robot.move(25);

				expect(robot.power).toBe(10);
				expect(consoleSpy).toHaveBeenCalledWith(
					"I do not have enough power to move 25 units.",
				);

				consoleSpy.mockRestore();
			},
		);
	});

	describe("Humanoid", () => {
		(shouldSkip ? test.skip : test)(
			"creates a humanoid with name, abilities, power, and catchphrase",
			() => {
				const humanoid = new Humanoid(
					"Data",
					["compute", "analyze"],
					"Fascinating",
				);

				expect(humanoid.name).toBe("Data");
				expect(humanoid.abilities).toEqual(["compute", "analyze"]);
				expect(humanoid.power).toBe(100);
				expect(humanoid.catchphrase).toBe("Fascinating");
			},
		);

		(shouldSkip ? test.skip : test)(
			"announce method logs greetings, abilities, and catchphrase",
			() => {
				const consoleSpy = jest.spyOn(console, "log").mockImplementation();
				const humanoid = new Humanoid(
					"T-800",
					["terminate", "protect"],
					"I'll be back",
				);

				humanoid.announce();

				expect(consoleSpy).toHaveBeenCalledWith("Greetings. I am T-800.");
				expect(consoleSpy).toHaveBeenCalledWith("I am able to terminate.");
				expect(consoleSpy).toHaveBeenCalledWith("I am able to protect.");
				expect(consoleSpy).toHaveBeenCalledWith(" > I'll be back <");

				consoleSpy.mockRestore();
			},
		);

		(shouldSkip ? test.skip : test)("inherits Robot methods correctly", () => {
			const humanoid = new Humanoid(
				"Vision",
				["phase", "fly"],
				"I am inevitable",
			);

			expect(typeof humanoid.charge).toBe("function");
			expect(typeof humanoid.move).toBe("function");
			expect(humanoid instanceof Robot).toBe(true);
		});
	});
});
