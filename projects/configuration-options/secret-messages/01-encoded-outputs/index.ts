// Write your types here! ✨

export function encodeMessage(message: string) {
	let output = "";

	for (let i = 0; i < message.length; i += 1) {
		output += String.fromCharCode(message.codePointAt(i)! + i + message.length);
	}

	return output;
}
