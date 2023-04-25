import { describe, expect, it, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./index.solution";

const { getEverything } = process.env.TEST_SOLUTIONS ? solution : index;

describe(getEverything, () => {
	it("returns nothing with no settings", () => {
		expect(getEverything()).toMatchInlineSnapshot(`[]`);
	});

	it("returns everything with all settings", () => {
		expect(
			getEverything({
				fauna: {
					mammals: {
						cute: true,
						deadly: true,
					},

					reptiles: {
						ferocious: true,
						small: true,
					},
				},

				flora: {
					flowers: {
						colorful: true,
						prickly: true,
					},

					trees: {
						evergreen: true,
						fruitBearing: true,
					},
				},
			})
		).toMatchInlineSnapshot(`
		[
		  "cats",
		  "dogs",
		  "monty python rabbit",
		  "lion",
		  "tiger",
		  "dragon",
		  "frog",
		  "gecko",
		  "carnation",
		  "lilac",
		  "tulip",
		  "rose",
		  "pine",
		  "apple",
		  "pear",
		]
	`);
	});
});
