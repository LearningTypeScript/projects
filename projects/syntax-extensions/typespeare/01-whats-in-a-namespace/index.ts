namespace TheBard {
	export function verifyProse(prose: string[]) {
		return Poetry.schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
	}
}
