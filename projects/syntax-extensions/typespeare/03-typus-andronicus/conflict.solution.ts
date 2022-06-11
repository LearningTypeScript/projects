import type { Setup } from "./setup";

export type ConflictSeverity = "mild" | "moderate" | "severe";

export interface Conflict {
	description: string;
	severity: ConflictSeverity;
	type: string;
}

export interface ConflictCreatorSettings {
	character: string;
	setup: Setup;
}

export type ConflictCreator = (settings: ConflictCreatorSettings) => Conflict;

export const conflictCreators: ConflictCreator[] = [
	({ character }) => ({
		description: `${character} mistakes their lover's sibling for the lover. Hilarity ensues.`,
		severity: "mild",
		type: "shenanigans",
	}),
	({ character, setup }) => ({
		description: `${character} is lost on their journey back home to ${setup.setting} and comes across a mischievous fairy.`,
		severity: "mild",
		type: "shenanigans",
	}),
	({ character, setup }) => ({
		description: `${character}'s parent, the ruler of ${setup.setting}, does not believe them worthy of rule.`,
		severity: "moderate",
		type: "family drama",
	}),
	({ character }) => ({
		description: `${character} seeks to avenge the murder of their parent.`,
		severity: "moderate",
		type: "revenge",
	}),
	({ character }) => ({
		description: `${character} and the enemy kingdom's ruler are in love.`,
		severity: "severe",
		type: "family drama",
	}),
	({ character }) => ({
		description: `Everybody is trying to kill ${character} for a dark past sin they committed.`,
		severity: "severe",
		type: "revenge",
	}),
];
