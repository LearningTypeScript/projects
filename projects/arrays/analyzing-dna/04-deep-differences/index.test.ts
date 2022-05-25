import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { deepDifferences } = process.env.TEST_SOLUTIONS ? solution : index;

describe(deepDifferences, () => {
	test.each([
		[[], [], []],
		[[["a"]], [[]], [undefined]],
		[[[]], [["a"]], [undefined]],
		[[["a"]], [["a"]], [["a"]]],
		[[["a"]], [["c"]], [[undefined]]],
		[[["a", "c"]], [["a", "c"]], [["a", "c"]]],
		[
			[["a"], ["c"]],
			[["a"], ["g"]],
			[["a"], [undefined]],
		],
		[[["a", "c"]], [["a", "c"]], [["a", "c"]]],
		[
			[["a"], ["c"]],
			[["g"], ["c"]],
			[[undefined], ["c"]],
		],
		[
			[
				["a", "c"],
				["g", "t"],
			],
			[
				["a", "c"],
				["g", "t"],
			],
			[
				["a", "c"],
				["g", "t"],
			],
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
			[
				[undefined, "c"],
				["g", "t"],
			],
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
			[
				[undefined, "c"],
				["g", "t"],
			],
		],
		[
			[
				["a", "c"],
				["g", "t"],
			],
			[
				["c", "a"],
				["t", "g"],
			],
			[
				[undefined, undefined],
				[undefined, undefined],
			],
		],
		[
			[
				["a", "c"],
				["g", "t"],
			],
			[["a"], ["g", "t", "c"]],
			[undefined, undefined],
		],
		[
			[
				["a", "c"],
				["g", "t"],
			],
			[
				["a", "c"],
				["g", "t", "c"],
			],
			[["a", "c"], undefined],
		],
		[
			[
				["a", "g"],
				["g", "t"],
			],
			[
				["a", "c"],
				["g", "t", "c"],
			],
			[["a", undefined], undefined],
		],
	])("%j %j", (a, b, result) => {
		expect(deepDifferences(a, b)).toEqual(result);
	});
});
