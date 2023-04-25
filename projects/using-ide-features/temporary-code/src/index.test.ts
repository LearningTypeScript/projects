import { describe, expect, it } from "@jest/globals";

import * as index from "./index";
import * as solution from "./index.solution";

const { announceExamplePeople } = process.env.TEST_SOLUTIONS ? solution : index;

describe(announceExamplePeople, () => {
	it("does not include its own list of persons", () => {
		expect(announceExamplePeople.toString()).not.toMatch(/historian/);
	});
});
