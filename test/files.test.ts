import { describe, expect, it, test } from "@jest/globals";
import * as fs from "fs";

const projects = fs.readdirSync("projects").flatMap((category) => {
	return fs
		.readdirSync(`projects/${category}`)
		.filter((fileName) => !fileName.includes("."))
		.map((project) => `${category}/${project}`);
});

describe("Project Files", () => {
	for (const project of projects) {
		describe(project, () => {
			const contents = fs.readdirSync(`projects/${project}`);
			const testGenerator = contents.includes("src")
				? testEntreeOrDessert
				: testAppetizer;

			testGenerator(project, contents);
		});
	}
});

function testAppetizer(_project: string, contents: string[]) {
	it("contains the minimum expected files", () => {
		expect(contents).toContain("README.md");
		expect(contents).toContain("_category_.json");
		expect(contents).toContain("package.json");
	});
}

function testEntreeOrDessert(_project: string, _contents: string[]) {
	test("todo", () => {});
}
