export function unique<T>(...allItems: T[][]) {
	const found = new Set<T>();

	for (const items of allItems) {
		for (const item of items) {
			found.add(item);
		}
	}

	return Array.from(found);
}
