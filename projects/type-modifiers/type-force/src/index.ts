// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

const mutationsLibrary = {
	energy: (hero) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero) => {
		hero.toughness *= 2;
	},
	luck: (hero) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero) => {
		hero.flying = true;
	},
	strength: (hero) => {
		hero.power *= 2;
	},
	wings: (hero) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

function createCharacter(name, mutations) {
	const character = {
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
