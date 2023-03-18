import chalk from "chalk";
import * as path from "path";
import * as fs from "fs";

import { GetterMap } from "./GetterMap.mjs";

const [command, ...changedFiles] = process.argv.slice(3);

console.log(
	[
		chalk.blue("Starting"),
		chalk.cyanBright("changed-solutions.mjs"),
		chalk.blue("with command"),
		chalk.cyanBright(command),
		chalk.blue("and changed files:"),
		chalk.cyan(changedFiles.join(" ")),
	].join(" ")
);

const projectsPerDirectory = new GetterMap((directory) => {
	while (true) {
		if (fs.existsSync(path.join(directory, "package.json"))) {
			return directory;
		}

		const nextDirectory = directory.substring(0, directory.lastIndexOf("/"));
		if (directory === nextDirectory) {
			return "";
		}

		directory = nextDirectory;
	}
});

const changedProjects = new Set(
	changedFiles
		.map((changedFile) => projectsPerDirectory.get(changedFile))
		.filter((directory) => directory !== "")
);

const failedProjects = [];

const rootDirectory = (await $`pwd`).stdout.trim();
if (
	!/\/(learning-typescript-)?projects/.test(rootDirectory) ||
	!fs.existsSync(".gitignore")
) {
	throw new Error(
		"changed-solutions.mjs must be run from the root of learning-typescript-projects."
	);
}

for (const project of changedProjects) {
	console.log("");
	console.log(
		[
			chalk.blue("Running"),
			chalk.cyanBright(command),
			chalk.blue("in"),
			chalk.cyanBright(project),
		].join(" ")
	);

	cd(project);

	try {
		const result = await $`npm run ${command}`;

		if (result.exitCode) {
			failedProjects.push(project);
		}
	} catch {
		failedProjects.push(project);
	}

	cd(rootDirectory);
}

console.log("");

if (failedProjects.length) {
	console.log(
		chalk.redBright(`${failedProjects.length} project(s) failed! ❌`)
	);
	for (const project of failedProjects) {
		console.error(
			[
				chalk.red("❗️"),
				chalk.redBright(command),
				chalk.red("failed at"),
				chalk.redBright(project),
			].join(" ")
		);
	}

	process.exitCode = 1;
} else {
	console.log(chalk.green("All project(s) passed successfully! ✅"));
}
