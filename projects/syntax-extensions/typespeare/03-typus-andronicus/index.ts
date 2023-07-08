import {
	type Conflict,
	type ConflictCreator,
	conflictCreators,
} from "./conflict";
import {
	type Resolution,
	type ResolutionCreator,
	resolutionCreators,
} from "./resolution";
import { type Setup, type SetupCreator, setupCreators } from "./setup";

function getRandom<T>(items: T[]) {
	return items[Math.floor(Math.random() * items.length)];
}

function enactTragedy(
	character: string,
	setupCreator: SetupCreator,
	conflictCreator: ConflictCreator,
	resolutionCreator: ResolutionCreator
) {
	const setup = setupCreator(character);
	const conflict = conflictCreator({ character, setup });
	const resolution = resolutionCreator({ character, setup, conflict });

	return [setup, conflict, resolution] as const;
}

function logTragedy(
	character: string,
	setup: Setup,
	conflict: Conflict,
	resolution: Resolution
) {
	console.log(`Behold, the tale of ${character}!`);
	console.log(`The setting: ${setup.description}.`);
	console.log(conflict.description);
	console.log(resolution.description);
}

function runTragedy(character: string) {
	const conflictCreator = getRandom(conflictCreators);
	const resolutionCreator = getRandom(resolutionCreators);
	const setupCreator = getRandom(setupCreators);

	const [setup, conflict, resolution] = enactTragedy(
		character,
		setupCreator,
		conflictCreator,
		resolutionCreator
	);

	logTragedy(character, setup, conflict, resolution);
}

runTragedy("Typus Andronicus");
