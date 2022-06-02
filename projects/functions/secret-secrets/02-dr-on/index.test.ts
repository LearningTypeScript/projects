import { describe, expect, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { createAdvancedCipher } = process.env.TEST_SOLUTIONS ? solution : index;

describe(createAdvancedCipher, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<
				(
					onVowel: (text: string) => string,
					onConsonant: (text: string) => string,
					onPunctuation: (text: string) => string
				) => (text: string) => string
			>(createAdvancedCipher);
		});

		test("return type", () => {
			expectType<(text: string) => string>(
				createAdvancedCipher(
					(text: string) => text,
					(text: string) => text,
					(text: string) => text
				)
			);
		});
	});

	test.each([
		[() => "", () => "", () => "", "", ""],
		[() => "", () => "", () => "", "abc", ""],
		[
			(text: string) => text,
			(text: string) => text,
			(text: string) => text,
			"abcdefghijklmnopqrstuvwxyz.! ",
			"abcdefghijklmnopqrstuvwxyz.! ",
		],
		[
			(text: string) => `0${text}1`,
			(text: string) => `2${text}3`,
			(text: string) => `4${text}5`,
			"aeiou",
			"0a10e10i10o10u1",
		],
		[
			(text: string) => `0${text}1`,
			(text: string) => `2${text}3`,
			(text: string) => `4${text}5`,
			"bcdfg",
			"2b32c32d32f32g3",
		],
		[
			(text: string) => `0${text}1`,
			(text: string) => `2${text}3`,
			(text: string) => `4${text}5`,
			"!@ \t\n",
			"4!54@54 54\t54\n5",
		],
		[
			(text: string) => `0${text}1`,
			(text: string) => `2${text}3`,
			(text: string) => `4${text}5`,
			"abcdefghijklmnopqrstuvwxyz.! ",
			"0a12b32c32d30e12f32g32h30i12j32k32l32m32n30o12p32q32r32s32t30u12v32w32x32y32z34.54!54 5",
		],
	])("%s %j %j", (onVowel, onConsonant, onPunctuation, input, expected) => {
		const encoder = createAdvancedCipher(onVowel, onConsonant, onPunctuation);
		expect(encoder(input)).toEqual(expected);

		// Run it extra times to make sure repeated runs still work 😉
		expect(encoder(input)).toEqual(expected);
		expect(
			createAdvancedCipher(onVowel, onConsonant, onPunctuation)(input)
		).toEqual(expected);
	});
});
