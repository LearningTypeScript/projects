import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { shallowEquality } = process.env.TEST_SOLUTIONS ? solution : index;

describe(shallowEquality, () => {
	test.each([
		[[], [], true],
		[["a"], [], false],
		[[], ["a"], false],
		[["a"], ["a"], true],
		[["a", "c"], ["a", "c"], true],
		[["a", "c"], ["c", "a"], false],
		[["a", "c"], ["a", "a"], false],
		[["a", "c", "g", "t"], ["a", "c", "g", "t"], true],
		[["a", "c", "g", "t"], ["a", "c", "g", "a"], false],
	])("%j %j", (a, b, result) => {
		expect(shallowEquality(a, b)).toBe(result);
	});
});
