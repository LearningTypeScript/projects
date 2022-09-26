import { Conflict } from "./conflict";
import { Setup } from "./setup";

export interface Resolution {
	description: string;
	morbidity: "light" | "moderate" | "deadly";
}

export interface ResolutionCreatorSettings {
	character: string;
	conflict: Conflict;
	setup: Setup;
}

export type ResolutionCreator = (
	settings: ResolutionCreatorSettings
) => Resolution;

export const resolutionCreators: ResolutionCreator[] = [
	({ character }) => ({
		description: `${character} saves their lover with a resounding victory.`,
		morbidity: "light",
	}),
	({ character, setup }) => ({
		description: `${character} lives happily ever after in ${setup.setting}.`,
		morbidity: "light",
	}),
	({ character, conflict }) => ({
		description: `${character} realizes the absurdity of ${conflict.type} and does nothing.`,
		morbidity: "light",
	}),
	({ character, conflict, setup }) => ({
		description: `${character}'s ${conflict.type} is revealed to all in ${setup.setting}. Its absurdity amuses many.`,
		morbidity: "light",
	}),
	({ character }) => ({
		description: `${character} avenges their lover's untimely demise.`,
		morbidity: "moderate",
	}),
	({ character }) => ({
		description: `${character} betrays their lover for ambition. It works, at great personal cost.`,
		morbidity: "moderate",
	}),
	({ character, conflict, setup }) => ({
		description: `${character}'s ${conflict.type} is revealed to all in ${setup.setting}. Small acts of revenge occur.`,
		morbidity: "moderate",
	}),
	({ character }) => ({
		description: `${character} and their lover tragically do not survive.`,
		morbidity: "deadly",
	}),
	({ setup }) => ({
		description: `All of ${setup.setting} is ravaged by war.`,
		morbidity: "deadly",
	}),
	({ character, conflict, setup }) => ({
		description: `${character}'s ${conflict.type} is revealed to all in ${setup.setting}. Many perish.`,
		morbidity: "deadly",
	}),
];
