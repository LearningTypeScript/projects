import { describe, expect, it } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { Puppy } = process.env.TEST_SOLUTIONS ? solution : index;

describe(Puppy, () => {
	describe("properties", () => {
		it("assigns properties from the constructor", () => {
			const colors = ["blonde"];
			const furriness = 10;

			const puppy = new Puppy(colors, furriness);

			expect(puppy).toEqual(expect.objectContaining({ colors, furriness }));
		});

		it("sets owner to undefined by default", () => {
			const puppy = new Puppy([], 0);

			expect(puppy.owner).toBe(undefined);
		});
	});

	describe("adopt", () => {
		it("sets owner to the new owner", () => {
			const owner = "A Good Person";
			const puppy = new Puppy([], 0);

			puppy.adopt(owner);

			expect(puppy.owner).toBe(owner);
		});
	});
});
