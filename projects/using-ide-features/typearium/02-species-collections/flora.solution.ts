import { FlowersSettings, getFlowers } from "./flora/flowers.solution";
import { TreesSettings, getTrees } from "./flora/trees.solution";

export interface FloraSettings {
	flowers?: FlowersSettings;
	trees?: TreesSettings;
}

export function getFlora(settings?: FloraSettings) {
	return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
