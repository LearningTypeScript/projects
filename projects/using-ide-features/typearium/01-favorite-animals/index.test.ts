import { describe, expect, it } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { checkIsAnyAnimalFavorite, getFavoriteAnimals, logFavoriteAnimals } =
	process.env.TEST_SOLUTIONS ? solution : index;

describe(checkIsAnyAnimalFavorite, () => {
	it("returns true for a favorite animal", () => {
		expect(checkIsAnyAnimalFavorite("parakeet")).toBe(true);
	});

	it("returns true for a favorite animal then a non-favorite animal", () => {
		expect(checkIsAnyAnimalFavorite("parakeet", "snake")).toBe(true);
	});

	it("returns true for a non-favorite animal then a favorite animal", () => {
		expect(checkIsAnyAnimalFavorite("snake", "parakeet")).toBe(true);
	});

	it("returns false for a non-favorite animal", () => {
		expect(checkIsAnyAnimalFavorite("snake")).toBe(false);
	});

	it("does not include its own list of animals", () => {
		expect(checkIsAnyAnimalFavorite.toString()).not.toMatch(/parakeet/);
	});
});

describe(getFavoriteAnimals, () => {
	it("returns all favorite animals by default", () => {
		expect(getFavoriteAnimals()).toEqual([
			"parakeet",
			"macaw",
			"cat",
			"monkey",
			"elephant",
			"alpaca",
			"fox",
		]);
	});

	it("returns a limited quantity of favorite animals when a quantity is provided", () => {
		expect(getFavoriteAnimals(3)).toEqual(["parakeet", "macaw", "cat"]);
	});

	it("does not include its own list of animals", () => {
		expect(getFavoriteAnimals.toString()).not.toMatch(/parakeet/);
	});
});

describe(logFavoriteAnimals, () => {
	it("does not include its own list of animals", () => {
		expect(logFavoriteAnimals.toString()).not.toMatch(/parakeet/);
	});
});
