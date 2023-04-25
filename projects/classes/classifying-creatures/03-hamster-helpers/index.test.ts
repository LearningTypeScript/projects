import { describe, expect, it } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { Gerbil, Hamster } = process.env.TEST_SOLUTIONS ? solution : index;

describe(Gerbil, () => {
	describe("species", () => {
		it("is Gerbil", () => {
			const pet = new Gerbil();

			expect(pet.species).toBe("Gerbil");
		});
	});

	describe("dig", () => {
		it("causes isHappy to return true", () => {
			const pet = new Gerbil();

			pet.dig();

			const happy = pet.isHappy();
			expect(happy).toBe(true);
		});
	});

	describe("eats", () => {
		const pet = new Gerbil();

		it.each<[boolean, solution.SmallPetFood]>([
			[false, "bugs"],
			[false, "fruits"],
			[true, "insects"],
			[true, "plants"],
			[true, "seeds"],
			[true, "vegetables"],
		])("returns %p for %s", (expected, food) => {
			const actual = pet.eats(food);

			expect(actual).toBe(expected);
		});
	});

	describe("isHappy", () => {
		it("is initially false", () => {
			const pet = new Gerbil();

			const happy = pet.isHappy();

			expect(happy).toBe(false);
		});
	});
});

describe(Hamster, () => {
	describe("species", () => {
		it("is Hamster", () => {
			const pet = new Hamster();

			expect(pet.species).toBe("Hamster");
		});
	});

	describe("eats", () => {
		it("returns true with no argument", () => {
			const pet = new Hamster();

			const actual = pet.eats();

			expect(actual).toBe(true);
		});
	});

	describe("isHappy", () => {
		it("is initially false", () => {
			const pet = new Hamster();

			const happy = pet.isHappy();

			expect(happy).toBe(false);
		});
	});

	describe("run", () => {
		it("causes isHappy to return true", () => {
			const pet = new Hamster();

			pet.run();

			const happy = pet.isHappy();
			expect(happy).toBe(true);
		});
	});
});
