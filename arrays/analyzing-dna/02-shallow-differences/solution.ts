export function shallowDifferences(a: string[], b: string[]) {
	if (a.length !== b.length) {
		return undefined;
	}

	const result: (string | undefined)[] = [];

	for (let i = 0; i < a.length; i += 1) {
		result.push(a[i] === b[i] ? a[i] : undefined);
	}

	return result;
}
