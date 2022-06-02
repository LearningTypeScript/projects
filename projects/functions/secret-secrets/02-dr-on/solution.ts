export type Cipher = (character: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	return (text: string) => {
		let result = "";

		for (const character of text) {
			const cipher = /[aeiou]/i.test(character)
				? onVowel
				: /[bcdfghjklmnpqrstvwxyz]/i.test(character)
				? onConsonant
				: onPunctuation;

			result += cipher(character);
		}

		return result;
	};
}
