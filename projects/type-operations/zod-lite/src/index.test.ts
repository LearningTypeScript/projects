import { describe, jest, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const z = process.env.TEST_SOLUTIONS ? solution : index;

const mockRandom = jest.spyOn(Math, "random");

describe("zod-lite", () => {
	test("Spy", () => {
		const spySchema = z.object({
			disguise: z.string(),
			moniker: z.literal("007"),
			plan: z.union([z.literal("active"), z.literal("improvising")]),
		});
		expectType<{
			disguise: string;
			moniker: "007";
			plan: "active" | "improvising";
		}>({} as index.Infer<typeof spySchema>);
	});
});
