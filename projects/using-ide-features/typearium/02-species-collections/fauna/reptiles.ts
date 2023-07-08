import { onlyTruthy } from "../utils/onlyTruthy.solution";

export interface ReptilesSettings {
	ferocious?: boolean;
	small?: boolean;
}

export function getReptiles(settings?: ReptilesSettings) {
	return onlyTruthy(
		settings?.ferocious && "dragon",
		settings?.small && ["frog", "gecko"]
	);
}
