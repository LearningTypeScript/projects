// Write your types here! ✨

export function encodeMessage(message: string) {
	return message
		.split("")
		.map((character) => String.fromCharCode(character.charCodeAt(0) + 13));
}
