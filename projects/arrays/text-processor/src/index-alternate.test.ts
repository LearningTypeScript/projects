import { describe, expect, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as alternate from "./solution-alternate";

const { alignTexts } = process.env.TEST_SOLUTIONS ? alternate : index;

describe(alignTexts, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<
				(
					texts: string[],
					options: { align?: "left" | "middle" | "right"; width: number }
				) => string[][]
			>(alignTexts);
		});

		test("return type", () => {
			expectType<string[][]>(alignTexts([], { width: 0 }));
		});
	});

	const cases: [string[], index.AlignmentOptions, string[][]][] = [
		[[""], { width: 0 }, [[""]]],
		[["", ""], { width: 0 }, [[""], [""]]],
		[[""], { width: 2 }, [["  "]]],
		[["abc"], { width: 5 }, [["abc  "]]],
		[["abc def"], { width: 8 }, [["abc def "]]],
		[
			["ab de", "abc def"],
			{ width: 4 },
			[
				["ab  ", "de  "],
				["abc ", "def "],
			],
		],
		[
			["ab de", "abc def", "abcd ef"],
			{ width: 4 },
			[
				["ab  ", "de  "],
				["abc ", "def "],
				["abcd", "ef  "],
			],
		],
		[["ab de", "abc def"], { width: 5 }, [["ab de"], ["abc  ", "def  "]]],
		[["abc def", "abc def"], { width: 8 }, [["abc def "], ["abc def "]]],
		[
			["abc def", "abc def ghi"],
			{ width: 3 },
			[
				["abc", "def"],
				["abc", "def", "ghi"],
			],
		],
		[
			["abc def", "abc def ghi"],
			{ width: 5 },
			[
				["abc  ", "def  "],
				["abc  ", "def  ", "ghi  "],
			],
		],
		[["abc def", "abcdefghi"], { width: 8 }, [["abc def "], ["abcdefghi"]]],
		[[""], { align: "left", width: 0 }, [[""]]],
		[[""], { align: "left", width: 1 }, [[" "]]],
		[[""], { align: "left", width: 2 }, [["  "]]],
		[["abc"], { align: "left", width: 3 }, [["abc"]]],
		[["abc"], { align: "left", width: 4 }, [["abc "]]],
		[["abc"], { align: "left", width: 5 }, [["abc  "]]],
		[["abc def"], { align: "left", width: 7 }, [["abc def"]]],
		[["abc def"], { align: "left", width: 8 }, [["abc def "]]],
		[["abc def"], { align: "left", width: 9 }, [["abc def  "]]],
		[["abc def"], { align: "left", width: 10 }, [["abc def   "]]],
		[["abc def"], { align: "left", width: 11 }, [["abc def    "]]],
		[
			["a", "ab", "abc", "abcd"],
			{ align: "middle", width: 4 },
			[[" a  "], [" ab "], ["abc "], ["abcd"]],
		],
		[[""], { align: "middle", width: 0 }, [[""]]],
		[[""], { align: "middle", width: 1 }, [[" "]]],
		[[""], { align: "middle", width: 2 }, [["  "]]],
		[["abc"], { align: "middle", width: 3 }, [["abc"]]],
		[["abc"], { align: "middle", width: 4 }, [["abc "]]],
		[["abc"], { align: "middle", width: 5 }, [[" abc "]]],
		[["abc def"], { align: "middle", width: 7 }, [["abc def"]]],
		[["abc def"], { align: "middle", width: 8 }, [["abc def "]]],
		[["abc def"], { align: "middle", width: 9 }, [[" abc def "]]],
		[["abc def"], { align: "middle", width: 10 }, [[" abc def  "]]],
		[["abc def"], { align: "middle", width: 11 }, [["  abc def  "]]],
		[
			["abc def", "abc def ghi"],
			{ align: "middle", width: 5 },
			[
				[" abc ", " def "],
				[" abc ", " def ", " ghi "],
			],
		],
		[[""], { align: "right", width: 0 }, [[""]]],
		[[""], { align: "right", width: 1 }, [[" "]]],
		[[""], { align: "right", width: 2 }, [["  "]]],
		[["abc"], { align: "right", width: 3 }, [["abc"]]],
		[["abc"], { align: "right", width: 4 }, [[" abc"]]],
		[["abc"], { align: "right", width: 5 }, [["  abc"]]],
		[["abc def"], { align: "right", width: 7 }, [["abc def"]]],
		[["abc def"], { align: "right", width: 8 }, [[" abc def"]]],
		[["abc def"], { align: "right", width: 9 }, [["  abc def"]]],
		[["abc def"], { align: "right", width: 10 }, [["   abc def"]]],
		[["abc def"], { align: "right", width: 11 }, [["    abc def"]]],
		[
			["abc def", "abc def ghi"],
			{ align: "right", width: 5 },
			[
				["  abc", "  def"],
				["  abc", "  def", "  ghi"],
			],
		],
	];

	test.each(cases)("%j %o", (lines, options, aligned) => {
		expect(alignTexts(lines, options)).toEqual(aligned);
	});
});
