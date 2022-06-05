import { beforeEach, describe, expect, it, jest } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { Parrot } = process.env.TEST_SOLUTIONS ? solution : index;

const mockRandom = jest.spyOn(Math, "random");

describe(Parrot, () => {
	describe("properties", () => {
		it("does not have traditional properties", () => {
			const parrot = new Parrot("");

			expect(Object.keys(parrot)).toEqual([]);
		});
	});

	describe("announce", () => {
		it("returns a string with the name", () => {
			const parrot = new Parrot("Emerald");

			const actual = parrot.announce();

			expect(actual).toEqual("Squawk! I'm Emerald!");
		});
	});

	describe("speak", () => {
		beforeEach(() => {
			mockRandom.mockClear();
		});

		it.each([
			[0, "Emerald wants a cracker!"],
			[0.5, "Emerald wants a cracker!"],
			[0.9, "Emerald wants a cracker!"],
		])(
			"speaks the only known phrase when the random number is %f",
			(randomValue: number, expected: string) => {
				mockRandom.mockReturnValueOnce(randomValue);
				const parrot = new Parrot("Emerald");

				const actual = parrot.speak();

				expect(actual).toEqual(expected);
			}
		);

		it.each([
			{
				index: 0,
				phrase: "Skye wants a cracker!",
				phrases: ["Careful on the stairs!"],
				seed: 0,
			},
			{
				index: 1,
				phrase: "Careful on the stairs!",
				phrases: ["Careful on the stairs!"],
				seed: 0.9,
			},
			{
				index: 0,
				phrase: "Skye wants a cracker!",
				phrases: ["Careful on the stairs!", "Pretty Boy!"],
				seed: 0,
			},
			{
				index: 1,
				phrase: "Careful on the stairs!",
				phrases: ["Careful on the stairs!", "Pretty Boy!"],
				seed: 0.4,
			},
			{
				index: 2,
				phrase: "Pretty Boy!",
				phrases: ["Careful on the stairs!", "Pretty Boy!"],
				seed: 0.9,
			},
		])(
			"speaks phrase $index of $phrases.length when the seed is $seed",
			({
				phrase,
				phrases,
				seed,
			}: {
				phrase: string;
				phrases: string[];
				seed: number;
			}) => {
				mockRandom.mockReturnValueOnce(seed);
				const parrot = new Parrot("Skye");

				for (const phrase of phrases) {
					parrot.learn(phrase);
				}

				const actual = parrot.speak();

				expect(actual).toEqual(phrase);
			}
		);
	});
});
