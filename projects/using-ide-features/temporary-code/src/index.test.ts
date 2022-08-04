import { describe, expect, it, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./index.solution";

const { examplePersons, describePerson } = process.env.TEST_SOLUTIONS
	? solution
	: index;

describe(logFavoritePersons, () => {
	it("does not include its own list of persons", () => {
		expect(logFavoritePersons.toString()).not.toMatch(/parakeet/);
	});
});
