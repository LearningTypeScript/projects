import { doesRhyme } from "./rhymes.solution";

const aabbaa = {
	name: "AABBAA",
	verify: (prose: string[]) => {
		if (prose.length % 6 !== 0) {
			return false;
		}

		for (let i = 0; i < prose.length; i += 6) {
			if (
				!doesRhyme(prose[i], prose[i + 1]) ||
				!doesRhyme(prose[i + 2], prose[i + 3]) ||
				!doesRhyme(prose[i + 4], prose[i + 5])
			) {
				return false;
			}
		}

		return true;
	},
};

const abab = {
	name: "ABAB",
	verify: (prose: string[]) => {
		if (prose.length % 4 !== 0) {
			return false;
		}

		for (let i = 0; i < prose.length; i += 6) {
			if (
				!doesRhyme(prose[i], prose[i + 2]) ||
				!doesRhyme(prose[i + 1], prose[i + 3])
			) {
				return false;
			}
		}

		return true;
	},
};

const limerick = {
	name: "Limerick",
	verify: (prose: string[]) => {
		return (
			prose.length === 5 &&
			doesRhyme(prose[0], prose[1]) &&
			doesRhyme(prose[2], prose[3]) &&
			doesRhyme(prose[1], prose[4])
		);
	},
};

export const schemesInOrder = [aabbaa, abab, limerick];
