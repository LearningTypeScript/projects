import { describe, expect, it, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { isFruitBearingCactus, pickFruitBearingCacti } = process.env
	.TEST_SOLUTIONS
	? solution
	: (index as typeof solution);

describe(isFruitBearingCactus, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<
				(data: solution.Cactus) => data is solution.FruitBearingCactus
			>(isFruitBearingCactus);
		});
	});

	it.each<[solution.Cactus, boolean]>([
		[{ picked: false, state: "dormant" }, false],
		[{ picked: true, state: "dormant" }, false],
		[{ flowers: "small", state: "flowering" }, false],
		[{ flowers: "medium", state: "flowering" }, false],
		[{ flowers: "large", state: "flowering" }, false],
		[{ fruits: 0, state: "fruit-bearing" }, true],
		[{ fruits: 1, state: "fruit-bearing" }, true],
		[{ fruits: 2, state: "fruit-bearing" }, true],
	])("when given %j, returns %j", (input, expected) => {
		expect(isFruitBearingCactus(input)).toBe(expected);
	});
});

describe(pickFruitBearingCacti, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<(data: solution.Cactus[]) => solution.FruitBearingCactus[]>(
				pickFruitBearingCacti
			);
		});
	});

	it.each<[solution.Cactus[], solution.Cactus[]]>([
		[[], []],
		[[{ picked: true, state: "dormant" }], []],
		[[{ flowers: "small", state: "flowering" }], []],
		[[{ flowers: "medium", state: "flowering" }], []],
		[[{ flowers: "large", state: "flowering" }], []],
		[
			[{ fruits: 0, state: "fruit-bearing" }],
			[{ fruits: 0, state: "fruit-bearing" }],
		],
		[
			[{ fruits: 1, state: "fruit-bearing" }],
			[{ fruits: 1, state: "fruit-bearing" }],
		],
		[
			[{ fruits: 2, state: "fruit-bearing" }],
			[{ fruits: 2, state: "fruit-bearing" }],
		],
		[
			[
				{ picked: true, state: "dormant" },
				{ flowers: "small", state: "flowering" },
			],
			[],
		],
		[
			[
				{ picked: true, state: "dormant" },
				{ flowers: "small", state: "flowering" },
				{ flowers: "medium", state: "flowering" },
				{ flowers: "large", state: "flowering" },
				{ fruits: 0, state: "fruit-bearing" },
			],
			[{ fruits: 0, state: "fruit-bearing" }],
		],
	])("when given %j, returns %j", (input, expected) => {
		expect(pickFruitBearingCacti(input)).toEqual(expected);
	});
});
