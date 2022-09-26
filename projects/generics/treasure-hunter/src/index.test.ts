import { describe, expect, it, test } from "@jest/globals";
import { expectType } from "tsd";

import * as index from "./index";
import * as solution from "./solution";

const { collectTreasure } = process.env.TEST_SOLUTIONS ? solution : index;

describe(collectTreasure, () => {
	describe("types", () => {
		test("function type", () => {
			expectType<
				<Content, Fake extends Content, Real extends Content>(
					buried: solution.Buried<Content>,
					isFake: (item: Content) => item is Fake,
					isReal: (item: Content) => item is Real
				) => { fake: Fake[]; real: Real[]; scrap: Content[] }
			>(collectTreasure);
		});
	});

	it("adds a fake item to the fake array when the type is treasure", () => {
		const content = "fake";
		const buried: solution.Buried<unknown> = {
			content,
			type: "treasure",
		};

		const actual = collectTreasure(
			buried,
			(item): item is string => typeof item === "string",
			(item): item is string => typeof item === "number"
		);

		expect(actual).toEqual({
			fake: [content],
			real: [],
			scrap: [],
		});
	});

	it("adds a real item to the real array when the type is treasure", () => {
		const content = "real";
		const buried: solution.Buried<unknown> = {
			content,
			type: "treasure",
		};

		const actual = collectTreasure(
			buried,
			(item): item is string => typeof item === "number",
			(item): item is string => typeof item === "string"
		);

		expect(actual).toEqual({
			fake: [],
			real: [content],
			scrap: [],
		});
	});

	it("adds a scrap item to the scrap array when the type is treasure", () => {
		const content = "scrap";
		const buried: solution.Buried<unknown> = {
			content,
			type: "treasure",
		};

		const actual = collectTreasure(
			buried,
			(item): item is string => typeof item === "number",
			(item): item is string => typeof item === "number"
		);

		expect(actual).toEqual({
			fake: [],
			real: [],
			scrap: [content],
		});
	});

	it("recurses into content when the type is catacomb", () => {
		const content = "fake";
		const buried: solution.Buried<unknown> = {
			inside: {
				content,
				type: "treasure",
			},
			type: "catacomb",
		};

		const actual = collectTreasure(
			buried,
			(item): item is string => typeof item === "string",
			(item): item is string => typeof item === "number"
		);

		expect(actual).toEqual({
			fake: [content],
			real: [],
			scrap: [],
		});
	});

	it("recurses into entrances when the type is tunnels", () => {
		const first = "first";
		const second = "second";
		const buried: solution.Buried<unknown> = {
			entrances: [
				{
					content: first,
					type: "treasure",
				},
				{
					content: second,
					type: "treasure",
				},
			],
			type: "tunnels",
		};

		const actual = collectTreasure(
			buried,
			(item): item is string => typeof item === "string",
			(item): item is string => typeof item === "number"
		);

		expect(actual).toEqual({
			fake: [first, second],
			real: [],
			scrap: [],
		});
	});
});
