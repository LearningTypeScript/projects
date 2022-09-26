import { describe, expect, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { pick } = process.env.TEST_SOLUTIONS ? solution : index;

describe(pick, () => {
	test("types", () => {
		expectType<number>(pick({ a: 1 }, "a"));
		expectType<number>(pick({ a: 1, b: 2 }, "b"));
		expectType<number>(pick({ a: 1, b: false }, "a"));
		expectType<undefined>(pick({ a: 1, b: undefined }, "b"));
		expectType<number | string>(
			pick({ a: 1, b: "" }, Math.random() > 0.5 ? "a" : "b")
		);
		expectType<number | string>(
			pick({ a: 1, b: "", c: false }, Math.random() > 0.5 ? "a" : "b")
		);
	});

	test.each([
		[{ a: 1 }, "a", 1],
		[{ a: 1, b: 2 }, "b", 2],
		[{ a: 1, b: false }, "a", 1],
		[{ a: 1, b: false }, "b", false],
		[{ a: 1, b: undefined }, "b", undefined],
	])("%o %j", (a, b, result) => {
		expect(pick(a, b as keyof typeof a)).toEqual(result);
	});
});
