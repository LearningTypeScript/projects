import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { describeLandmark } = process.env.TEST_SOLUTIONS ? solution : index;

const dedent = (text: TemplateStringsArray) =>
	text[0].replaceAll(/\n\s*/g, "\n").trim();

describe(describeLandmark, () => {
	test.each<[solution.Landmark, string]>([
		[
			{
				name: "Fort Brewerton",
				type: "fort",
			},
			dedent`
        Fort Brewerton is a fort in Upstate New York.
      `,
		],
		[
			{
				name: "Cayuga Lake",
				miles: 66,
				type: "lake",
			},
			dedent`
        Cayuga Lake is a lake in Upstate New York.
        It covers 66 square miles of water.
      `,
		],
		[
			{
				height: 95,
				lit: 1874,
				name: "Bluff Point Light",
				type: "lighthouse",
			},
			dedent`
        Bluff Point Light is a lighthouse in Upstate New York.
        It was first lit in 1874 and is 95 feet high.
      `,
		],
		[
			{
				height: 5344,
				name: "Mount Marcy",
				type: "mountain",
			},
			dedent`
        Mount Marcy is a mountain in Upstate New York.
        Its peak is 5344 feet high.
      `,
		],
		[
			{
				acres: 64800,
				name: "Allegany State Park",
				type: "park",
			},
			dedent`
        Allegany State Park is a park in Upstate New York.
        It covers 64800 square acres.
      `,
		],
		[
			{
				depth: 30,
				length: 315,
				name: "Hudson River",
				type: "river",
			},
			dedent`
        Hudson River is a river in Upstate New York.
        It flows for 315 miles and is 30 feet deep at its deepest.
      `,
		],
		[
			{
				height: 90,
				name: "Cohoes Falls",
				type: "waterfall",
			},
			dedent`
        Cohoes Falls is a waterfall in Upstate New York.
        It is 90 feet high.
      `,
		],
	])("%p", (landmark, description) => {
		expect(describeLandmark(landmark)).toEqual(description);
	});
});
