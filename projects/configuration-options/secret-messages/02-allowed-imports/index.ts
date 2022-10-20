import answer from "./answer.js";
import * as guesses from "./guesses.json";

export function decodeMessage(message: string) {
	let output = "";

	for (let i = 0; i < message.length; i += 1) {
		output += String.fromCharCode(message.codePointAt(i) - i - message.length);
	}

	return output;
}

for (const message of [answer, ...guesses]) {
	console.log(decodeMessage(message));
}
