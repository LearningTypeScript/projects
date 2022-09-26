import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { deepEquality } = process.env.TEST_SOLUTIONS ? solution : index;

describe(deepEquality, () => {
	test.each([
		[[], [], true],
		[[["a"]], [[]], false],
		[[[]], [["a"]], false],
		[[["a"]], [["a"]], true],
		[[["a"]], [["c"]], false],
		[[["a", "c"]], [["a", "c"]], true],
		[[["a"], ["c"]], [["a"], ["g"]], false],
		[[["a", "c"]], [["a", "c"]], true],
		[[["a"], ["c"]], [["g"], ["c"]], false],
		[
			[
				["a", "c"],
				["g", "t"],
			],
			[
				["a", "c"],
				["g", "t"],
			],
			true,
		],
		[
			[
				["c", "c"],
				["g", "t"],
			],
			[
				["a", "c"],
				["g", "t"],
			],
			false,
		],
		[
			[
				["a", "c"],
				["g", "t"],
			],
			[
				["c", "c"],
				["g", "t"],
			],
			false,
		],
	])("%j %j", (a, b, result) => {
		expect(deepEquality(a, b)).toEqual(result);
	});
});
