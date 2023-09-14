import { describe, expect, it } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { createDemon, createSorcerer, Horror } = process.env.TEST_SOLUTIONS
	? // TypeScript treats # privates as unique, even across two otherwise identical classes.
	  // This assertion "tricks" the type system into treating both Horror classes the same.
	  // https://github.com/LearningTypeScript/projects/issues/276
	  (solution as typeof index & typeof solution)
	: index;

const createMockHorrorSettings = (evil: boolean) => {
	return {
		name: "",

		getPowerFrom: (consumed: { power: number }) => {
			return consumed.power;
		},

		isEvil: () => evil,
	};
};

describe(createDemon, () => {
	describe("getPower", () => {
		it("returns half a consumed horror's power if it was evil", () => {
			const demon = createDemon();

			demon.doBattle(new Horror(createMockHorrorSettings(true)));

			const mockWinner = new Horror(createMockHorrorSettings(true));
			mockWinner.doBattle(new Horror(createMockHorrorSettings(true)));

			demon.doBattle(mockWinner);

			expect(demon.getPower()).toEqual(2.5);
		});

		it("returns double a consumed horror's power if it was not evil", () => {
			const demon = createDemon();

			demon.doBattle(new Horror(createMockHorrorSettings(false)));

			const mockWinner = new Horror(createMockHorrorSettings(false));
			mockWinner.doBattle(new Horror(createMockHorrorSettings(true)));

			demon.doBattle(mockWinner);

			expect(demon.getPower()).toEqual(4);
		});
	});

	describe("isEvil", () => {
		it("returns true", () => {
			const demon = createDemon();

			expect(demon.isEvil()).toBe(true);
		});
	});
});

describe(createSorcerer, () => {
	describe("getPower", () => {
		it("returns double a consumed horror's power if both are evil", () => {
			const sorcerer = createSorcerer("", true);

			sorcerer.doBattle(new Horror(createMockHorrorSettings(true)));

			const mockWinner = new Horror(createMockHorrorSettings(true));
			mockWinner.doBattle(new Horror(createMockHorrorSettings(true)));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(4);
		});

		it("returns double a consumed horror's power if neither are evil", () => {
			const sorcerer = createSorcerer("", false);

			sorcerer.doBattle(new Horror(createMockHorrorSettings(false)));

			const mockWinner = new Horror(createMockHorrorSettings(false));
			mockWinner.doBattle(new Horror(createMockHorrorSettings(true)));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(4);
		});

		it("returns half a consumed horror's power if only the sorcerer is evil", () => {
			const sorcerer = createSorcerer("", true);

			sorcerer.doBattle(new Horror(createMockHorrorSettings(false)));

			const mockWinner = new Horror(createMockHorrorSettings(false));
			mockWinner.doBattle(new Horror(createMockHorrorSettings(false)));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(3);
		});

		it("returns half a consumed horror's power if only the consumed is evil", () => {
			const sorcerer = createSorcerer("", false);

			sorcerer.doBattle(new Horror(createMockHorrorSettings(false)));

			const mockWinner = new Horror(createMockHorrorSettings(true));
			mockWinner.doBattle(new Horror(createMockHorrorSettings(true)));

			sorcerer.doBattle(mockWinner);

			expect(sorcerer.getPower()).toEqual(3);
		});
	});

	describe("isEvil", () => {
		it("returns false when the sorcerer is not evil", () => {
			const sorcerer = createSorcerer("", false);

			expect(sorcerer.isEvil()).toBe(false);
		});

		it("returns true when the sorcerer is evil", () => {
			const sorcerer = createSorcerer("", true);

			expect(sorcerer.isEvil()).toBe(true);
		});
	});
});
