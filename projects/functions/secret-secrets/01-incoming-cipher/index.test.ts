import { describe, expect, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { createCipher } = process.env.TEST_SOLUTIONS ? solution : index;

describe(createCipher, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<
				(cipher: (text: string) => string) => (text: string) => string
			>(createCipher);
		});

		test("return type", () => {
			expectType<(text: string) => string>(
				createCipher((text: string) => text)
			);
		});
	});

	test.each([
		[() => "", "", ""],
		[() => "", "abc", ""],
		[(text: string) => text, "abc", "abc"],
		[(text: string) => `!${text}!`, "abc", "!a!!b!!c!"],
	])("%s %j %j", (cipher, input, expected) => {
		const encoder = createCipher(cipher);
		expect(encoder(input)).toEqual(expected);

		// Run it extra times to make sure repeated runs still work 😉
		expect(encoder(input)).toEqual(expected);
		expect(createCipher(cipher)(input)).toEqual(expected);
	});
});
