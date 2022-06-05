import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { announceCharacter } = process.env.TEST_SOLUTIONS ? solution : index;

const mockLog = (console.log = jest.fn());

describe(announceCharacter, () => {
	const raw = `{
		"name": "Skeletype",
		"powers": ["magic", "telepathy", "teleportation"],
		"side": "evil"
	}`;

	it("logs the character", () => {
		announceCharacter(raw);

		expect(mockLog).toHaveBeenCalledWith("I am Skeletype.");
		expect(mockLog).toHaveBeenCalledWith(
			"My powers are: magic, telepathy, teleportation."
		);
		expect(mockLog).toHaveBeenCalledWith("I am evil.");
	});

	it("returns the character", () => {
		const actual = announceCharacter(raw);

		expect(actual).toEqual({
			name: "Skeletype",
			powers: ["magic", "telepathy", "teleportation"],
			side: "evil",
		});

		expectType<solution.Character>(actual);
	});
});
