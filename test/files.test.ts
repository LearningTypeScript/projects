import { capitalCase } from "capital-case";
import { describe, expect, test } from "@jest/globals";
import { parse } from "comment-json";
import * as fs from "fs";

interface CategoryData {
	label: string;
	position: number;
}

interface PackageData {
	name: string;
	scripts: Record<string, string>;
}

for (const chapterSlug of fs.readdirSync("projects")) {
	describe(chapterSlug, () => {
		const chapterDirectory = `projects/${chapterSlug}`;
		const chapterTitle = toTitle(chapterSlug);

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

			expect(readmeContents).toMatch(new RegExp(`^# ${chapterTitle}`, "i"));
		});

		const projectSlugs = fs
			.readdirSync(`projects/${chapterSlug}`)
			.filter((fileName) => !fileName.includes("."));

		for (const projectSlug of projectSlugs) {
			describe(projectSlug, () => {
				const projectContents = fs.readdirSync(
					`projects/${chapterSlug}/${projectSlug}`
				);
				const projectTitle = toTitle(projectSlug);

				if (projectContents.includes("src")) {
					testEntreeOrDessertProject();
				} else {
					testAppetizerProject();
				}

				function testAppetizerProject() {
					const stepSlugs = fs
						.readdirSync(`${chapterDirectory}/${projectSlug}`)
						.filter((fileName) => !fileName.includes("."));

					testCategoryJson("🥗");

					test("README.md", () => {
						const contents = fs
							.readFileSync(`${chapterDirectory}/${projectSlug}/README.md`)
							.toString();

						expect(contents).toContain(`# ${projectTitle}`);
						expect(contents).toContain(
							`> A [Learning TypeScript > ${chapterTitle}](https://learning-typescript.com/${chapterSlug}) 🥗 appetizer project.`
						);
						expect(contents).toContain(`## Setup`);

						if (projectSlug !== "the-typeinator") {
							expect(contents)
								.toContain(`un the TypeScript compiler via the \`tsc\` script within whichever step you're working on.
For example, to start the TypeScript compiler on the first step in watch mode:

\`\`\`shell
npm run tsc -- --project ${stepSlugs[0]} --watch
\`\`\`
`);

							if (contents.includes("run Jest")) {
								expect(contents).toContain(
									"In one terminal, run the TypeScript compiler"
								);
								expect(contents).toContain(
									`In another terminal, run Jest via the \`test\` script on whichever step you're working on.
For example, to start tests for the first step in watch mode:

\`\`\`shell
npm run test -- 1 --watch
\`\`\``
								);
							} else {
								expect(contents).toContain("In your terminal, run the");
							}
						}
					});

					if (chapterSlug !== "type-operations") {
						test("tsconfig.json", () => {
							const tsconfigData = readFileAsJSON(
								`${chapterDirectory}/${projectSlug}//tsconfig.json`
							);

							expect(tsconfigData).toMatchObject({
								...(chapterSlug === "configuration-options"
									? {}
									: { extends: "../../../tsconfig.json" }),
								include: ["."],
							});
						});
					}

					for (const stepSlug of stepSlugs) {
						describe(stepSlug, () => {
							test("tsconfig.json", () => {
								const tsconfigData = readFileAsJSON(
									`${chapterDirectory}/${projectSlug}/${stepSlug}/tsconfig.json`
								);

								expect(tsconfigData).toMatchObject({
									...(chapterSlug === "configuration-options"
										? {}
										: { extends: "../../../../tsconfig.json" }),
									include: ["."],
								});
							});
						});
					}
				}

				function testEntreeOrDessertProject() {
					const categoryData = readFileAsJSON(
						`${chapterDirectory}/${projectSlug}/_category_.json`
					) as CategoryData;
					const [mealEmoji, mealType] = categoryData.label.includes("🍲")
						? ["🍲", "entree"]
						: ["🍰", "dessert"];

					testCategoryJson(mealEmoji);

					testPackageJson();

					test("README.md", () => {
						const contents = fs
							.readFileSync(`${chapterDirectory}/${projectSlug}/README.md`)
							.toString();

						expect(contents).toContain(`# ${projectTitle}`);
						expect(contents).toContain(
							`> A [Learning TypeScript > ${chapterTitle}](https://learning-typescript.com/${chapterSlug}) ${mealEmoji} ${mealType} project.`
						);
						expect(contents).toContain(`## Setup`);
						expect(contents)
							.toContain(`terminal, run the TypeScript compiler via the \`tsc\` script.
For example, to start the TypeScript compiler in watch mode:

\`\`\`shell
npm run tsc -- --watch
\`\`\`
`);

						if (contents.includes("run Jest")) {
							expect(contents).toContain(
								`In another terminal, run Jest via the \`test\` script.
For example, to start tests in watch mode:

\`\`\`shell
npm run test -- --watch
\`\`\``
							);
						} else {
							expect(contents).toContain("In your terminal, run the");
						}
					});

					test("tsconfig.json", () => {
						const tsconfigData = readFileAsJSON(
							`${chapterDirectory}/${projectSlug}/tsconfig.json`
						);

						expect(tsconfigData).toMatchObject({
							extends: "../../../tsconfig.json",
							include: ["src"],
						});
					});
				}

				function testCategoryJson(emoji: string) {
					const categoryData = readFileAsJSON(
						`${chapterDirectory}/${projectSlug}/_category_.json`
					);

					expect(categoryData).toEqual({
						label: expect.stringMatching(
							new RegExp(`${emoji} ${projectTitle}`, "i")
						),
						position: expect.any(Number),
					});
				}

				function testPackageJson() {
					test("package.json", () => {
						const categoryData = readFileAsJSON(
							`${chapterDirectory}/${projectSlug}/package.json`
						) as PackageData;

						expect(categoryData).toEqual({
							name: projectSlug,
							scripts: {
								test: expect.any(String),
								"test:solutions": expect.any(String),
								tsc: "tsc",
							},
						});

						const { test: testScript, "test:solutions": testSolutionsScript } =
							categoryData.scripts;

						const solutionScripts: Record<string, unknown> = {
							tsc: expect.stringMatching(/^tsc /),
							jest: "cross-env TEST_SOLUTIONS=1 jest",
						};

						expect(testSolutionsScript).toEqual(
							solutionScripts[testScript] ?? "(unknown test script)"
						);
					});
				}
			});
		}
	});
}

function readFileAsJSON(path: string): unknown {
	const packageContents = fs.readFileSync(path).toString();
	return parse(packageContents);
}

function toTitle(kebabCase: string) {
	return (
		capitalCase(kebabCase.replaceAll("-", " "))
			// If you need any acronyms to be all uppercase, add them here.
			.replaceAll("Dna", "DNA")
			.replace("Ide", "IDE")
			.replace("Javascript", "JavaScript")
			.replace("Typescript", "TypeScript")
			// If you
			.replaceAll(" A ", " a ")
			.replaceAll(" And ", " and ")
			.replaceAll(" Of ", " of ")
			.replaceAll(" The ", " the ")
			.replaceAll(" To ", " to ")
	);
}
