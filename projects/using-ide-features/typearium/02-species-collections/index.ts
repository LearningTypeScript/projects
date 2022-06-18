// Refactor here! ✨

export type DeepStringsMaybe =
	| string
	| boolean
	| undefined
	| DeepStringsMaybe[];

function onlyTruthy(...items: DeepStringsMaybe[]): string[] {
	return items.flatMap((item) => {
		if (typeof item === "string") {
			return item;
		}

		if (item instanceof Array) {
			return item.flatMap((subItem) => onlyTruthy(subItem));
		}

		return [];
	});
}

interface MammalsSettings {
	cute?: boolean;
	deadly?: boolean;
}

function getMammals(settings?: MammalsSettings) {
	return onlyTruthy(
		settings?.cute && [
			"cats",
			"dogs",
			settings?.deadly && "monty python rabbit",
		],
		settings?.deadly && ["lion", "tiger"]
	);
}

interface ReptilesSettings {
	ferocious?: boolean;
	small?: boolean;
}

function getReptiles(settings?: ReptilesSettings) {
	return onlyTruthy(
		settings?.ferocious && "dragon",
		settings?.small && ["frog", "gecko"]
	);
}

interface FaunaSettings {
	mammals?: MammalsSettings;
	reptiles?: ReptilesSettings;
}

function getFauna(settings?: FaunaSettings) {
	return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}

interface FlowersSettings {
	colorful?: boolean;
	prickly?: boolean;
}

function getFlowers(settings?: FlowersSettings) {
	return onlyTruthy(
		settings?.colorful && ["carnation", "lilac", "tulip"],
		settings?.colorful && settings?.prickly && "rose"
	);
}

interface TreesSettings {
	evergreen?: boolean;
	fruitBearing?: boolean;
}

function getTrees(settings?: TreesSettings) {
	return onlyTruthy(
		settings?.evergreen && "pine",
		settings?.fruitBearing && ["apple", "pear"]
	);
}

interface FloraSettings {
	flowers?: FlowersSettings;
	trees?: TreesSettings;
}

function getFlora(settings?: FloraSettings) {
	return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}

export interface EverythingSettings {
	fauna?: FaunaSettings;
	flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
	return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
