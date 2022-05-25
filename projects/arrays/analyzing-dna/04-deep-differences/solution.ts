export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length !== b.length) {
		return undefined;
	}

	const allResults: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i += 1) {
		if (a[i].length !== b[i].length) {
			allResults.push(undefined);
			continue;
		}

		const results: (string | undefined)[] = [];

		for (let j = 0; j < a[i].length; j += 1) {
			results.push(a[i][j] === b[i][j] ? a[i][j] : undefined);
		}

		allResults.push(results);
	}

	return allResults;
}
