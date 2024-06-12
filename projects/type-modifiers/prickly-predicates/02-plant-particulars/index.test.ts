import { describe, expect, it, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { isAnyCrop } = process.env.TEST_SOLUTIONS
	? solution
	: (index as typeof solution);

describe(isAnyCrop, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<(data: solution.AnyCrop) => data is solution.AnyCrop>(
				isAnyCrop
			);
		});
	});

	it.each([
		[null, false],
		[undefined, false],
		["", false],
		[123, false],
		[[], false],
		[{}, false],
		[{ growth: null }, false],
		[{ growth: 123 }, false],
		[{ harvested: true }, false],
		[{ name: "cactus" }, false],
		[{ growth: null, harvested: true, name: "cactus" }, false],
		[{ growth: 5, harvested: null, name: "cactus" }, false],
		[{ growth: 5, harvested: true, name: null }, false],
		[{ growth: 5, harvested: true, name: "other" }, false],
		[{ growth: 5, harvested: true, name: "cactus" }, true],
		[{ growth: 5, harvested: true, name: "cassava" }, true],
		[{ growth: 5, harvested: true, name: "chia" }, true],
	])("when given %j, returns %j", (input, expected) => {
		expect(isAnyCrop(input)).toBe(expected);
	});
});
