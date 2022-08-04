import { describe, expect, it, test } from "@jest/globals";
import * as fs from "fs";

const chapters = fs.readdirSync("projects");

const toTitle = (kebabCase: string) => kebabCase.replaceAll("-", " ");

for (const chapter of chapters) {
	describe(chapter, () => {
		const chapterDirectory = `projects/${chapter}`;
		const chapterTitle = toTitle(chapter);

		test("_category_.json", () => {
			const categoryContents = fs
				.readFileSync(`${chapterDirectory}/_category_.json`)
				.toString();
			const categoryData = JSON.parse(categoryContents);

			expect(categoryData).toEqual({
				label: expect.stringMatching(new RegExp(chapterTitle, "i")),
				position: expect.any(Number),
			});
		});

		test("README.json", () => {
			const readmeContents = fs
				.readFileSync(`${chapterDirectory}/README.md`)
				.toString();

			expect(readmeContents).toEqual(
				expect.stringMatching(new RegExp(`^# ${chapterTitle}`, "i"))
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

				testGenerator(chapterDirectory, project, projectContents);
			});
		}
	});
}

function testAppetizer(
	chapterDirectory: string,
	project: string,
	contents: string[]
) {
	const projectName = toTitle(project);
	// it("contains the minimum expected files", () => {
	// 	expect(contents).toContain("_category_.json");
	// 	expect(contents).toContain("package.json");
	// 	expect(contents).toContain("README.md");
	// });

	test("_category_.json", () => {
		const categoryContents = fs
			.readFileSync(`${chapterDirectory}/${project}/_category_.json`)
			.toString();
		const categoryData = JSON.parse(categoryContents);

		expect(categoryData).toEqual({
			label: expect.stringMatching(new RegExp(`🥗 ${projectName}`, "i")),
			position: expect.any(Number),
		});
	});

	test("package.json", () => {
		// todo
	});

	test("README.json", () => {
		// todo
	});
}

function testEntreeOrDessert(
	_chapterDirectory: string,
	_project: string,
	_contents: string[]
) {
	test("todo", () => {});
}
