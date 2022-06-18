// Refactor here! ✨

import { FaunaSettings, getFauna } from "./fauna.solution";
import { FloraSettings, getFlora } from "./flora.solution";
import { onlyTruthy } from "./utils/onlyTruthy.solution";

export interface EverythingSettings {
	fauna?: FaunaSettings;
	flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
	return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
