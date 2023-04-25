import { describe, expect, it, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { duel } = process.env.TEST_SOLUTIONS ? solution : index;

describe(duel, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<
				(
					good: solution.Fighter,
					bad: solution.Fighter
				) => readonly ["hero" | "villain", solution.Character]
			>(duel);
		});
	});

	const human: solution.Fighter = {
		mutations: [],
		name: "Human",
	};

	const patsy: solution.Fighter = {
		// Lowers toughness by a great deal
		mutations: ["wings", "wings", "wings"],
		name: "Patsy",
	};

	describe("duel", () => {
		it("returns the hero when their computed power is greater", () => {
			const actual = duel(human, patsy);

			expect(actual).toEqual([
				"hero",
				{
					flying: false,
					name: "Human",
					power: 1,
					toughness: 1,
				},
			]);
		});

		it("returns the villain when their computed power is greater", () => {
			const actual = duel(patsy, human);

			expect(actual).toEqual([
				"villain",
				{
					flying: false,
					name: "Human",
					power: 1,
					toughness: 1,
				},
			]);
		});

		describe("mutations", () => {
			test.each<[solution.Fighter, solution.Character]>([
				[
					{
						mutations: [],
						name: "Hero",
					},
					{
						flying: false,
						name: "Hero",
						power: 1,
						toughness: 1,
					},
				],
				[
					{
						mutations: ["energy"],
						name: "Hero",
					},
					{
						flying: true,
						name: "Hero",
						power: 1.25,
						toughness: 1,
					},
				],
				[
					{
						mutations: ["healing"],
						name: "Hero",
					},
					{
						flying: false,
						name: "Hero",
						power: 1,
						toughness: 2,
					},
				],
				[
					{
						mutations: ["luck"],
						name: "Hero",
					},
					{
						flying: false,
						name: "Hero",
						power: 1.25,
						toughness: 1.25,
					},
				],
				[
					{
						mutations: ["flight"],
						name: "Hero",
					},
					{
						flying: true,
						name: "Hero",
						power: 1,
						toughness: 1,
					},
				],
				[
					{
						mutations: ["strength"],
						name: "Hero",
					},
					{
						flying: false,
						name: "Hero",
						power: 2,
						toughness: 1,
					},
				],
				[
					{
						mutations: ["wings"],
						name: "Hero",
					},
					{
						flying: true,
						name: "Hero",
						power: 1,
						toughness: 0.9,
					},
				],
				[
					{
						mutations: ["energy", "strength"],
						name: "Hero",
					},
					{
						flying: true,
						name: "Hero",
						power: 2.5,
						toughness: 1,
					},
				],
				[
					{
						mutations: ["energy", "luck", "strength"],
						name: "Hero",
					},
					{
						flying: true,
						name: "Hero",
						power: 3.125,
						toughness: 1.25,
					},
				],
			])("%j results in %o", (fighter, character) => {
				expect(duel(fighter, patsy)[1]).toEqual(
					expect.objectContaining(character as any)
				);
			});
		});
	});
});
