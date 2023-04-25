import { describe, expect, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { pickMany } = process.env.TEST_SOLUTIONS ? solution : index;

describe(pickMany, () => {
	describe("types", () => {
		expectType<number[]>(pickMany({ a: 1 }, ["a"]));
		expectType<number[]>(pickMany({ a: 1 }, ["a", "a"]));
		expectType<number[]>(pickMany({ a: 1, b: 2 }, ["b"]));
		expectType<number[]>(pickMany({ a: 1, b: 2 }, ["a", "b"]));
		expectType<(boolean | number)[]>(pickMany({ a: 1, b: false }, ["b"]));
		expectType<(boolean | number)[]>(pickMany({ a: 1, b: false }, ["a", "b"]));
		expectType<number[]>(pickMany({ a: 1, b: false }, ["a"]));
		expectType<undefined[]>(pickMany({ a: 1, b: undefined }, ["b"]));
		expectType<undefined[]>(pickMany({ a: 1, b: undefined }, ["b", "b"]));
		expectType<(number | string)[]>(
			pickMany({ a: 1, b: "" }, Math.random() > 0.5 ? ["a"] : ["b"])
		);
		expectType<(number | string)[]>(
			pickMany({ a: 1, b: "" }, Math.random() > 0.5 ? ["a"] : ["a", "b"])
		);
		expectType<(number | string)[]>(
			pickMany({ a: 1, b: "", c: false }, Math.random() > 0.5 ? ["a"] : ["b"])
		);
		expectType<(boolean | number | string)[]>(
			pickMany(
				{ a: 1, b: "", c: false },
				Math.random() > 0.5 ? ["a"] : ["b", "c"]
			)
		);
	});

	test.each([
		[{ a: 1 }, ["a"], [1]],
		[{ a: 1 }, ["a", "a"], [1, 1]],
		[{ a: 1, b: 2 }, ["b"], [2]],
		[{ a: 1, b: 2 }, ["b", "b"], [2, 2]],
		[{ a: 1, b: 2 }, ["a", "b"], [1, 2]],
		[{ a: 1, b: 2 }, ["a", "b", "a"], [1, 2, 1]],
		[{ a: 1, b: false }, ["a"], [1]],
		[{ a: 1, b: false }, ["b"], [false]],
		[{ a: 1, b: false }, ["a", "b"], [1, false]],
		[{ a: 1, b: undefined }, ["b"], [undefined]],
	])("%o %j", (a, b, result) => {
		expect(pickMany(a, b as (keyof typeof a)[])).toEqual(result);
	});
});
