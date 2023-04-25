import chalk from "chalk";
import fs from "fs/promises";
import { glob } from "glob";

console.log(chalk.blue("Starting"), chalk.cyanBright("copy-solutions.mjs"));

for (const testFile of await glob("projects/**/*.test.*")) {
	console.log(chalk.gray("Replacing solution with index in", testFile));
	await fs.writeFile(
		testFile,
		(await fs.readFile(testFile))
			.toString()
			.replaceAll("? solution", "? index")
			.replaceAll(" as typeof solution", " as typeof index ")
	);
}

for (const solutionPath of await glob("projects/**/*solution*")) {
	const replacedPath = solutionPath.includes("/solution.")
		? solutionPath.replace("solution", "index")
		: solutionPath.replace(".solution", "");

	if (solutionPath === replacedPath) {
		console.log(
			chalk.gray("Skipping", solutionPath, "(no replacement found).")
		);
	} else {
		console.log(chalk.gray("Copying", solutionPath, "to", replacedPath));
	}

	await fs.copyFile(solutionPath, replacedPath);
}
