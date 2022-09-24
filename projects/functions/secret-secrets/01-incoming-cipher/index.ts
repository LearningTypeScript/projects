export type Cipher = (character: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let result = "";

		for (const character of text) {
			result += cipher(character);
		}

		return result;
	};
}
