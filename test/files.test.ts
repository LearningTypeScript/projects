import { describe, expect, it, test } from "@jest/globals";
import * as fs from "fs";

const chapters = fs.readdirSync("projects");

const toTitle = (kebabCase: string) => kebabCase.replaceAll("-", " ");

for (const chapter of chapters) {
	describe(chapter, () => {
		const chapterDirectory = `projects/${chapter}`;
		const chapterTitle = toTitle(chapter);

		test("_category_.json", () => {
			const categoryData = readFileAsJSON(
				`${chapterDirectory}/_category_.json`
			);

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

	test("_category_.json", () => {
		const categoryData = readFileAsJSON(
			`${chapterDirectory}/${project}/_category_.json`
		);

		expect(categoryData).toEqual({
			label: expect.stringMatching(new RegExp(`🥗 ${projectName}`, "i")),
			position: expect.any(Number),
		});
	});

	test("package.json", () => {
		const categoryData = readFileAsJSON(
			`${chapterDirectory}/${project}/package.json`
		);

		expect(categoryData).toEqual({
			name: project,
			scripts: expect.objectContaining({
				//
			}),
		});
	});

	test("README.json", () => {
		// todo
	});
}

function readFileAsJSON(path: string) {
	const packageContents = fs.readFileSync(path).toString();
	return JSON.parse(packageContents);
}

function testEntreeOrDessert(
	_chapterDirectory: string,
	_project: string,
	_contents: string[]
) {
	test("todo", () => {});
}
