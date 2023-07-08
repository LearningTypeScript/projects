export interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
} as const;

export type Mutation = keyof typeof mutationsLibrary;

function createCharacter(name: string, mutations: Mutation[]) {
	const character: Character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

export interface Fighter {
	mutations: Mutation[];
	name: string;
}

export function duel(good: Fighter, bad: Fighter) {
	const hero = createCharacter(good.name, good.mutations);
	const villain = createCharacter(bad.name, bad.mutations);

	return hero.power / villain.toughness >= villain.power / hero.toughness
		? (["hero", hero] as const)
		: (["villain", villain] as const);
}
