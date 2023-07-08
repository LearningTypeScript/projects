export interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}

export function announceCharacter(raw: string) {
	const character = JSON.parse(raw) as Character;

	console.log(`I am ${character.name}.`);
	console.log(`My powers are: ${character.powers.join(", ")}.`);
	console.log(`I am ${character.side}.`);

	return character;
}
