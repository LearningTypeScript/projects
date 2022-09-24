import { Color } from "./colors.solution";
import { rhymes } from "./rhymes.solution";

export function makeRhyme(color: Color) {
	const [third, fourth] = rhymes[color];

	console.log(`Roses are red,`);
	console.log(`\tviolets are ${color}.`);
	console.log(`${third},`);
	console.log(`\t${fourth}.`);
	console.log("");
}

makeRhyme(Color.Blue);
makeRhyme(Color.Red);
makeRhyme(Color.Yellow);
