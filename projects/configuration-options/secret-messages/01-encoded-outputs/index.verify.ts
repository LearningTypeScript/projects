import { describe, expect, test } from "@jest/globals";

import { encodeMessage } from "./index";

describe(encodeMessage, () => {
	test.each([
		["", ""],
		["a", "b"],
		["A", "B"],
		["abc", "dfh"],
		["AbC", "DfH"],
		["hello", "mkstx"],
		["world", "|uytm"],
	])("when given %j, returns %j", (input, expected) => {
		expect(encodeMessage(input)).toBe(expected);
	});

	test("when given a medium complexity string, encodes per the snapshot", () => {
		expect(encodeMessage("Hello, world!")).toMatchInlineSnapshot(`"Us{|>3|:"`);
	});

	test("when given a high complexity string, encodes per the snapshot", () => {
		expect(
			encodeMessage(
				"Why did the configuration file break up with their partner?"
			)
		).toMatchInlineSnapshot(
			`"¤¶^£©¥b·¬ªfª··°´³ÂÀ°ÄºÁÁt»¿Ã½y¼ÍÁ¾ÉÕÑÚÍÙÎÜÑÏÔÞÞÐâåàØæ´"`
		);
	});
});
