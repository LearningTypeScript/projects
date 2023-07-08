import { onlyTruthy } from "../utils/onlyTruthy.solution";

export interface TreesSettings {
	evergreen?: boolean;
	fruitBearing?: boolean;
}

export function getTrees(settings?: TreesSettings) {
	return onlyTruthy(
		settings?.evergreen && "pine",
		settings?.fruitBearing && ["apple", "pear"]
	);
}
