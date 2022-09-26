namespace TheBard.Rhymes {
	const vowels = new Set(["a", "e", "i", "o", "u", "y"]);

	/**
	 * @remarks Very rudimentary rhyming detection. We should revisit.
	 */
	export function doesRhyme(a: string, b: string) {
		const lastConsonantsA = getLastConsonants(a);

		return lastConsonantsA && lastConsonantsA === getLastConsonants(b);
	}

	function getLastConsonants(text: string) {
		for (let i = text.length - 1; i >= 0; i--) {
			if (vowels.has(text[i])) {
				return text.slice(i);
			}
		}

		return text;
	}
}
