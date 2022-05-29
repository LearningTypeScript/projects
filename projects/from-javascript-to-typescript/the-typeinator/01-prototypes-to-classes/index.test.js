const { Robot, Humanoid } = process.env.TEST_SOLUTIONS
	? require("./solution")
	: require("./index");

const log = (console.log = jest.fn());

beforeEach(() => {
	log.mockClear();
});

describe(Robot, () => {
	describe("announce", () => {
		it("announces name and abilities", () => {
			const robot = new Robot("The Typeinator", ["refactor", "transpile"]);

			robot.announce();

			expect(log).toHaveBeenCalledWith("Greetings. I am The Typeinator.");
			expect(log).toHaveBeenCalledWith("I am able to refactor.");
			expect(log).toHaveBeenCalledWith("I am able to transpile.");
		});
	});

	describe("charge", () => {
		it("does not recharge if power is already at 100", () => {
			const robot = new Robot("", []);

			robot.charge(1);

			expect(robot.power).toBe(100);
			expect(log).toHaveBeenCalledWith("I am at optimal operational capacity.");
			expect(log).not.toHaveBeenCalledWith("Recharged power supplies to 100.");
		});

		it("recharges by the amount if it would not increase to 100", () => {
			const robot = new Robot("", []);
			robot.move(50);

			robot.charge(25);
			expect(log).toHaveBeenCalledWith("Recharged power supplies to 75.");
		});

		it("recharges to 100 amount if it would increase beyond 100", () => {
			const robot = new Robot("", []);
			robot.move(25);

			robot.charge(50);
			expect(log).toHaveBeenCalledWith("Recharged power supplies to 100.");
		});
	});

	describe("move", () => {
		it("does not move if there is not enough power", () => {
			const robot = new Robot("", []);

			robot.move(101);

			expect(log).toHaveBeenCalledWith(
				"I do not have enough power to move 101 units."
			);
		});

		it("moves and decreases power if there is enough power", () => {
			const robot = new Robot("", []);

			robot.move(99);

			expect(log).toHaveBeenCalledWith("Moving 99 units.");
		});

		it("does not move a second time after decreasing power from a first.", () => {
			const robot = new Robot("", []);

			robot.move(50);
			robot.move(51);

			expect(log).toHaveBeenCalledWith("Moving 50 units.");
			expect(log).toHaveBeenCalledWith(
				"I do not have enough power to move 51 units."
			);
		});
	});
});

describe(Humanoid, () => {
	describe("announce", () => {
		it("announces name, abilities, and catchphrase", () => {
			const humanoid = new Humanoid(
				"The Typeinator",
				["refactor", "transpile"],
				"Come with me if you want types."
			);

			humanoid.announce();

			expect(log).toHaveBeenCalledWith("Greetings. I am The Typeinator.");
			expect(log).toHaveBeenCalledWith("I am able to refactor.");
			expect(log).toHaveBeenCalledWith("I am able to transpile.");
			expect(log).toHaveBeenCalledWith(" > Come with me if you want types. <");
		});
	});
});
