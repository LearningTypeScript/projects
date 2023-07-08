import { describe, expect, test } from "@jest/globals";
import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

const filePath = path.join(
	__dirname,
	process.env.TEST_SOLUTIONS ? "tsconfig.solution.json" : "tsconfig.json"
);

const { config, error } = ts.parseConfigFileTextToJson(
	filePath,
	fs.readFileSync(filePath).toString()
);

if (error) {
	console.error(error);
	throw new Error("Could not parse TSConfig for test. See console errors.");
}

describe("TSConfig", () => {
	test("compilerOptions", () => {
		expect(config.compilerOptions).toEqual(
			expect.objectContaining({
				allowJs: true,
				esModuleInterop: true,
				resolveJsonModule: true,
			})
		);
	});
});
