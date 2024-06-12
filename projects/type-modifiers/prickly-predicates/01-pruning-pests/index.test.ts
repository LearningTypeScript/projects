import { describe, expect, it, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { isCropName } = process.env.TEST_SOLUTIONS
	? solution
	: (index as typeof solution);

describe(isCropName, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<(name: string) => name is keyof typeof solution.cropFamilies>(
				isCropName
			);
		});
	});

	it.each([
		["", false],
		["dandelion", false],
		["purslane", false],
		["cactus", true],
		["cassava", true],
		["chia", true],
	])("when given %j, returns %j", (input, expected) => {
		expect(isCropName(input)).toBe(expected);
	});
});
