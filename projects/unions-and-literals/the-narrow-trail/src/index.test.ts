import { beforeEach, describe, expect, jest, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { runCommands } = process.env.TEST_SOLUTIONS ? solution : index;

const mockRandom = jest.spyOn(Math, "random");

describe(runCommands, () => {
	beforeEach(() => {
		mockRandom.mockClear();
	});

	test.each([
		[[1, 1, 1, 1, 1], false],
		[[2, 2, 2, 2, 2], false],
		[[3, 4, 3, 2, 1], false],
		[[1, 2, 1, 2, 1], false],
		[[3, 3, 3, 3, 3], false],
		[[4, 4, 4, 4, 4], false],
		[[3, 4, 3, 4, 3], false],
		[[3, 4, 5, 1, 2], false],
		[[3, 4, 5, 3, 4], false],
		[[1, 6, 6, 6, 6], false],
		[[1, 6, 2, 6, 6, 6, 6], true],
		[[1, 2, 3, 4, 5, 6, 1], true],
		[[1, 3, 5, 2, 4, 6, 1], true],
		[[2, 4, 1, 4, 1, 1, 1], true],
		[[2, 3, 1, 3, 2, 2, 2], true],
	])("%j", (randomValues: number[], expected: boolean | Error) => {
		mockRandom.mockClear();

		for (const randomValue of randomValues) {
			mockRandom.mockReturnValueOnce((randomValue - 1) / 6);
		}

		const actual = runCommands();

		expect(actual).toEqual(expected);
		expect(mockRandom).toHaveBeenCalledTimes(randomValues.length);
	});
});
