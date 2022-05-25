import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { groupLandmarks } = process.env.TEST_SOLUTIONS ? solution : index;

describe(groupLandmarks, () => {
	test.each([
		[[], {}],
		[
			[{ city: "Troy", name: "Muddaddy Flats" }],
			{
				Troy: ["Muddaddy Flats"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Troy", name: "Nighthalks" },
			],
			{
				Troy: ["Muddaddy Flats", "Nighthalks"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Albany", name: "Bombers" },
			],
			{
				Troy: ["Muddaddy Flats"],
				Albany: ["Bombers"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Troy", name: "Nighthalks" },
				{ city: "Albany", name: "Bombers" },
			],
			{
				Troy: ["Muddaddy Flats", "Nighthalks"],
				Albany: ["Bombers"],
			},
		],
		[
			[
				{ city: "Troy", name: "Muddaddy Flats" },
				{ city: "Albany", name: "Bombers" },
				{ city: "Troy", name: "Nighthalks" },
			],
			{
				Troy: ["Muddaddy Flats", "Nighthalks"],
				Albany: ["Bombers"],
			},
		],
	])("%j", (city: solution.Landmark[], grouped: solution.GroupedLandmarks) => {
		expect(groupLandmarks(city)).toEqual(grouped);
	});
});
