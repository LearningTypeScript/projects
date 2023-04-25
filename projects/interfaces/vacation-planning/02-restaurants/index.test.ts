import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { groupRestaurants } = process.env.TEST_SOLUTIONS ? solution : index;

describe(groupRestaurants, () => {
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
	])(
		"%j",
		(city: solution.Restaurant[], grouped: solution.GroupedRestaurants) => {
			expect(groupRestaurants(city)).toEqual(grouped);
		}
	);
});
