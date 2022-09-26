import answer from "./answer.js";
import * as guesses from "./guesses.json";

export function decodeMessage(message: string) {
	let output = "";

	for (let i = 0; i < message.length; i += 1) {
		output += String.fromCodePoint((message.codePointAt(i) - i) ** 0.5);
	}

	return output;
}

for (const message of [answer, ...guesses]) {
	console.log(decodeMessage(message));
}
