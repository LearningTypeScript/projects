import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { describeCity } = process.env.TEST_SOLUTIONS ? solution : index;

const dedent = (text: TemplateStringsArray) =>
	text[0].replaceAll(/\n\s*/g, "\n").trim();

describe(describeCity, () => {
	test.each<[solution.City, string]>([
		[
			{
				coordinates: {
					north: [42, 39, 9],
					west: [73, 45, 26],
				},
				name: "Albany",
			},
			dedent`
        Albany, New York
        * Located at 42°39'09"N 73°45'26"W
      `,
		],
		[
			{
				coordinates: {
					north: [43, 25, 28],
					west: [73, 42, 55],
				},
				name: "Lake George",
			},
			dedent`
        Lake George, New York
        * Located at 43°25'28"N 73°42'55"W
      `,
		],
		[
			{
				catchphrase: "Uncle Sam was here.",
				coordinates: {
					north: [42, 43, 54],
					west: [73, 41, 33],
				},
				name: "Troy",
			},
			dedent`
        Troy, New York
        * "Uncle Sam was here."
        * Located at 42°43'54"N 73°41'33"W
      `,
		],
	])("%p", (city, description) => {
		expect(describeCity(city)).toEqual(description);
	});
});
