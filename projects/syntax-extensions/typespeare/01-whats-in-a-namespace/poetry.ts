namespace TheBard.Poetry {
	namespace Schemes {
		export const aabbaa = {
			name: "AABBAA",
			verify: (prose: string[]) => {
				if (prose.length % 6 !== 0) {
					return false;
				}

				for (let i = 0; i < prose.length; i += 6) {
					if (
						!Rhymes.doesRhyme(prose[i], prose[i + 1]) ||
						!Rhymes.doesRhyme(prose[i + 2], prose[i + 3]) ||
						!Rhymes.doesRhyme(prose[i + 4], prose[i + 5])
					) {
						return false;
					}
				}

				return true;
			},
		};

		export const abab = {
			name: "ABAB",
			verify: (prose: string[]) => {
				if (prose.length % 4 !== 0) {
					return false;
				}

				for (let i = 0; i < prose.length; i += 6) {
					if (
						!Rhymes.doesRhyme(prose[i], prose[i + 2]) ||
						!Rhymes.doesRhyme(prose[i + 1], prose[i + 3])
					) {
						return false;
					}
				}

				return true;
			},
		};

		export const limerick = {
			name: "Limerick",
			verify: (prose: string[]) => {
				return (
					prose.length === 5 &&
					Rhymes.doesRhyme(prose[0], prose[1]) &&
					Rhymes.doesRhyme(prose[2], prose[3]) &&
					Rhymes.doesRhyme(prose[1], prose[4])
				);
			},
		};
	}

	export const schemesInOrder = [
		Schemes.aabbaa,
		Schemes.abab,
		Schemes.limerick,
	];
}
