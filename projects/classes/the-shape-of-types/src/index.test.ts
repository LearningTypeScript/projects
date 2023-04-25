import { describe, expect, it } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { Demon, Horror, Sorcerer } = process.env.TEST_SOLUTIONS
	? solution
	: // In theory, it would be nice to not have to apply this cast
	  // In practice, TypeScript's structural typing does not play well with # privates
	  // See https://github.com/LearningTypeScript/projects/issues/183
	  (index as unknown as typeof solution);

class MockHorror extends Horror {
	name = "";
	evil: boolean;

	constructor(evil: boolean) {
		super();
		this.evil = evil;
	}

	getPowerFrom(consumed: { power: number }) {
		return consumed.power;
	}

	isEvil() {
		return this.evil;
	}
}

describe(Demon, () => {
	describe("properties", () => {
		it("only has one visible property, name", () => {
			const demon = new Demon();

			expect(Object.keys(demon)).toEqual(["name"]);
		});
	});

	describe("getPower", () => {
		it("returns half a consumed horror's power if it was evil", () => {
			const demon = new Demon();

			demon.doBattle(new MockHorror(true));

			const mockWinner = new MockHorror(true);
			mockWinner.doBattle(new MockHorror(true));

			demon.doBattle(mockWinner);

			expect(demon.getPower()).toEqual(2.5);
		});

		it("returns double a consumed horror's power if it was not evil", () => {
			const demon = new Demon();

			demon.doBattle(new MockHorror(false));

			const mockWinner = new MockHorror(false);
			mockWinner.doBattle(new MockHorror(true));

			demon.doBattle(mockWinner);

			expect(demon.getPower()).toEqual(4);
		});
	});

	describe("isEvil", () => {
		it("returns true", () => {
			const demon = new Demon();

			expect(demon.isEvil()).toBe(true);
		});
	});
});

describe(Sorcerer, () => {
	describe("properties", () => {
		it("only has one visible property, name", () => {
			const sorcerer = new Sorcerer("", true);

			expect(Object.keys(sorcerer)).toEqual(["name"]);
		});
	});

	describe("getPower", () => {
		it("returns double a consumed horror's power if both are evil", () => {
			const sorcerer = new Sorcerer("", true);

			sorcerer.doBattle(new MockHorror(true));

			const mockWinner = new MockHorror(true);
			mockWinner.doBattle(new MockHorror(true));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(4);
		});

		it("returns double a consumed horror's power if neither are evil", () => {
			const sorcerer = new Sorcerer("", false);

			sorcerer.doBattle(new MockHorror(false));

			const mockWinner = new MockHorror(false);
			mockWinner.doBattle(new MockHorror(true));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(4);
		});

		it("returns half a consumed horror's power if only the sorcerer is evil", () => {
			const sorcerer = new Sorcerer("", true);

			sorcerer.doBattle(new MockHorror(false));

			const mockWinner = new MockHorror(false);
			mockWinner.doBattle(new MockHorror(false));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(3);
		});

		it("returns half a consumed horror's power if only the consumed is evil", () => {
			const sorcerer = new Sorcerer("", false);

			sorcerer.doBattle(new MockHorror(false));

			const mockWinner = new MockHorror(true);
			mockWinner.doBattle(new MockHorror(true));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(3);
		});
	});

	describe("isEvil", () => {
		it("returns false when the sorcerer is not evil", () => {
			const sorcerer = new Sorcerer("", false);

			expect(sorcerer.isEvil()).toBe(false);
		});

		it("returns true when the sorcerer is evil", () => {
			const sorcerer = new Sorcerer("", true);

			expect(sorcerer.isEvil()).toBe(true);
		});
	});
});
