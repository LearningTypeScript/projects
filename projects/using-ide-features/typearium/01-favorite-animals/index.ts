// Refactor here! ✨

export function checkIsAnyAnimalFavorite(...animals: string[]) {
	const favoriteAnimalsUnique = new Set([
		"parakeet",
		"macaw",
		"cat",
		"monkey",
		"elephant",
		"alpaca",
		"fox",
	]);

	return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
	return [
		"parakeet",
		"macaw",
		"cat",
		"monkey",
		"elephant",
		"alpaca",
		"fox",
	].slice(0, max);
}

export function logFavoriteAnimals() {
	["parakeet", "macaw", "cat", "monkey", "elephant", "alpaca", "fox"].forEach(
		(animal, i) => {
			console.log(`I like ${animal} number ${i}!`);
		}
	);
}
