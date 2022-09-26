import { describe, expect, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { zip } = process.env.TEST_SOLUTIONS ? solution : index;

describe(zip, () => {
	test("types", () => {
		expectType<never[]>(zip([], []));
		expectType<string[]>(zip(["a"], ["b"]));
		expectType<number[]>(zip([1], [2]));
		expectType<(number | string)[]>(zip([1], ["a"]));
		expectType<(number | string)[]>(zip([1, "a"], [2]));
		expectType<(number | string)[]>(zip([1, "a"], [2, "b"]));
		expectType<(boolean | number | string)[]>(zip([true, "a"], [2, "b"]));
		expectType<(boolean | null | number | string)[]>(
			zip([true, "a"], [2, null])
		);
	});

	test.each([
		[[], [], []],
		[["a"], ["a"], ["a", "a"]],
		[["a"], [1], ["a", 1]],
		[
			[1, "a"],
			[2, "a"],
			[1, 2, "a", "a"],
		],
		[["a", "b"], [1], ["a", 1, "b"]],
		[
			[1, "a", "b"],
			[2, "a"],
			[1, 2, "a", "a", "b"],
		],
		[
			["a", "b", "c", "d"],
			[1, 2],
			["a", 1, "b", 2, "c", "d"],
		],
		[
			[1, 2],
			["a", "b", "c", "d"],
			[1, "a", 2, "b", "c", "d"],
		],
	])("%j %j", (a, b, result) => {
		expect(zip(a, b)).toEqual(result);
	});
});
