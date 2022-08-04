import { describe, expect, it, test } from "@jest/globals";
import * as fs from "fs";

const chapters = fs.readdirSync("projects");

for (const chapter of chapters) {
	describe(chapter, () => {
		const chapterDirectory = `projects/${chapter}`;
		const chapterContents = fs.readdirSync(chapterDirectory);

		test("_category_.json", () => {
			const categoryContents = fs
				.readFileSync(`${chapterDirectory}/_category_.json`)
				.toString();
			const categoryData = JSON.parse(categoryContents);

			expect(categoryData).toEqual({
				label: expect.stringMatching(
					new RegExp(chapter.replaceAll("-", " "), "i")
				),
				position: expect.any(Number),
			});
		});

		test("README.json", () => {
			const readmeContents = fs
				.readFileSync(`${chapterDirectory}/README.md`)
				.toString();

			expect(readmeContents).toEqual(
				expect.stringMatching(
					new RegExp(`^# ${chapter.replaceAll("-", " ")}`, "i")
				)
			);
		});

		const projects = fs
			.readdirSync(`projects/${chapter}`)
			.filter((fileName) => !fileName.includes("."));

		for (const project of projects) {
			describe(project, () => {
				const projectContents = fs.readdirSync(
					`projects/${chapter}/${project}`
				);
				const testGenerator = projectContents.includes("src")
					? testEntreeOrDessert
					: testAppetizer;

				testGenerator(project, projectContents);
			});
		}
	});
}

function testAppetizer(_project: string, contents: string[]) {
	it("contains the minimum expected files", () => {
		expect(contents).toContain("_category_.json");
		expect(contents).toContain("package.json");
		expect(contents).toContain("README.md");
	});

	test("_category_.json", () => {
		//
	});
}

function testEntreeOrDessert(_project: string, _contents: string[]) {
	test("todo", () => {});
}
