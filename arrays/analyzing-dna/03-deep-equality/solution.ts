export function deepEquality(a: string[][], b: string[][]) {
	if (a.length !== b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i += 1) {
		if (a[i].length !== b[i].length) {
			return false;
		}

		for (let j = 0; j < a[i].length; j += 1) {
			if (a[i][j] !== b[i][j]) {
				return false;
			}
		}
	}

	return true;
}
